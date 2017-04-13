
document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");

$(document).ready(function(){
	
	$("#version").click(function(){
		//location.href ='Customer.jsp';
		$(".kuang3").html("<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><br><div class='tou3'></div>" );
	    $(".d1").append("<p class='font'>当前位置：项目版本</p>");
	    $(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='versionshangyiye()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='versionxiayiye()'  class='jihuabutton'>");
	   
	    
	    $.ajax({
        	type:'post',
			data:'',
			async:false,
			url:"project.do",
			dataType:'json',
			success:function(data){
				$(".tou1").append("<div class='tianjiajihua' id='versionsc'>上传</div><h class='select'>选择项目:</h><select class='projectselect' onChange='version()' name='project' id='project1'></select><input class='sousuo' type='text'><div class='sousuobutton'>搜索</div>");	 
				for(var i=0;i<data.length;i++){
					$("#project1").append("<option>"+data[i].projectName+"</option>");	
				}
			}
			});	  
	    $("#versionsc").click(function(){
	    	//alert(com.ssm.util.TimeUtil.currentTime().toString());
			 layer.open({
					type:1,
					skin:'layui-layer-demo',
					area:['500px','400px'],
					shadeClose:true,
					content:'<form id="uploadForm2222" enctype="multipart/form-data" method="post" >'
						+'<div class="versionRun">运行文件:<input style="border:1px solid #27a2e6" width="300" type="file" id="runFile" name="RunFile" value="选择文件"></div>'
						+'<div class="versionSource">源文件:<input style="border:1px solid #27a2e6" width="300" type="file" id="sourcefile" name="SourceFile" value="选择文件"></div>'
						+'<div class="versionDescribe">版本描述:<br><br><textarea id="versionDescribe" name="VersionDescribe" style="border:1px solid #27a2e6" rows="4" placeholder="请在此处输入版本描述..." cols="50"></textarea></div>'
						+'<div class="versionButton" onClick="versionsc1()" id="versionsc1">确定</div></form>'
			 }); 
	    });
	    version();
});
	})
function version(){
	versionpage();
	$("#page").html("1");
	versionselect();
}
	function versionsc1(){
		var formData = new FormData(); 
		var versionDescribe = $("#versionDescribe").val(); 
		var project = $("#project1").val();
		//alert($("#runFile")[0].files[0]);
		layer.open({
			type:1,
			skin:'layui-layer-demo',
			area:['500px','100px'],
			shadeClose:true,
			content:'<progress id="progressBar" value="0" max="100" style="width:0%;height:20px;background:blue "> </progress><br><span id="percentage"  style="width:100%;"></span> '
	 });
		formData.append("file", $("#runFile")[0].files[0]); 
		formData.append("file", $("#sourcefile")[0].files[0]); 
		formData.append("VersionDescribe",versionDescribe);
		//formData.append("time",com.ssm.util.TimeUtil.currentTime().toString());
		formData.append("project",project);
		    var xhr = new XMLHttpRequest();  
	        xhr.open("post", "versionUpload.do", true);  
	        xhr.onload = function() {  
	        	layer.closeAll();
	        	 versionpage();
			     versionselect();
	             alert("上传完成!");  
	            //$('#myModal').modal('hide');  
	        };  
	        xhr.upload.addEventListener("progress", progressFunction, false);  
	        xhr.send(formData);  
	        progressFunction();
	}
	 function progressFunction() {  
		   
		 $.ajax({  
             type: 'post',  
             url: "progress.do",  
             data: {},  
             dataType: 'json',  
             success : function(data){  
            	  $('#progressBar').css('width',data.rate+''+'%'); 
                    $('#percentage').empty();  
                     $('#percentage').append(data.pItems+data.show);   
                     if(rate == 100){  
                         window.clearInterval(intId);  
                     }     
          }});
		 var intId = window.setInterval(eventFun,500); 
	    }      
function versionpage(){
	//alert("1");
	 $.ajax({
     	type:'post',
			data:{"project":$("#project1").val()},
			async:false,
			url:"versionpage.do",
			dataType:'json',
			success:function(data){
				$("#number").html(data.num);
			}
			});
}
function versionshangyiye(){
	var page=$("#page").html();
	if(page==1){
		alert("已经是第一页了");
	}
	else{
		page=page-1;
		
		$("#page").html(page);
		versionselect();
	}
}
function versionxiayiye(){
	var page=$("#page").html();
	var number=$("#number").html();
	var zong= parseInt(number/5);
    if(!(number%5)){
	}else{
	zong++;
	}
	if(page==zong||number==0){
		alert("已经是最后一页了");
	}
	else{
		page++;
		$("#page").html(page);
		versionselect();
	}
}
function download1(sourceFile){
	alert(sourceFile);
}
	function versionselect(){
		$.ajax({
			type:'post',
			data:{"page":$("#page").html(),"project":$("#project1").val()},
			dataType:'json',
			url:"version1.do",
			success:function(data){
				if(data.length==0){
					$(".tou2").html("暂无记录");
				}
				else{$(".tou2").html("");
				$(".tou2").append("<table class='hovertable' style='width:840px'>");
				
				$(".tou2").append("<tr>"
				        +"      <th scope='col' style='width: 250px; '><center>版本描述</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>源文件</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>运行文件</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>创建时间</center></th>"
				       
				        +"		<th scope='col' style='width: 100px; '><center>下载</center></th>"
				        +"   </tr>");
				
				 for(var i=0;i<data.length;i++){ 
					 $(".tou2").append("<tr>"
						        +"       <td class='row' id='type'><center>"+data[i].versionDescribe+"</center></td>"
						        +"        <td class='row' id='name'><center>"+data[i].runFile+"</center></td>"
						        +"        <td class='row' id='status'><center>"+data[i].sourceFile+"</center></td>"
						        +"        <td class='row' id='time'><center>"+data[i].createTime+"</center></td>"
						       
						        +"        <td class='row' id='"+i+"' name='shanchu'><center><img src='images/del.gif'></center></td>"
						        +"    </tr>");
						 }
				 $(".tou2").append("</table>");
				 
				 $(".tou2").append("<div style='height:15px'></div>");
				 $("td[name='shanchu']").click(function(){
					 var id=this.id;
					 layer.open({
						 type:1,
						 skin:'layui-layer-demo',
						 area:['500px','200px'],
						 shadeClose:true,
							content:'<form action="download.do" method="post">'
								+'<div class="versionRun">运行文件:&nbsp&nbsp'+data[id].runFile+'<input type="hidden" value='+data[id].runFile+' name="runFile">&nbsp&nbsp<input type="submit" class="button"  value="下载"></div></form>'
								+'<form action="download.do" method="post">'
								+'<div class="versionSource">源文件:&nbsp&nbsp'+data[id].sourceFile+'<input type="hidden" value='+data[id].sourceFile+' name="runFile">&nbsp&nbsp<input type="submit" class="button" value="下载"></div></form>'
							
					 });
				 });
				 
				 $("td[name='xiugai']").click(function(){
					 var id = this.id;
						layer.open({
							type:1,
							skin:'layui-layer-demo',
							area:['1000px','200px'],
							shadeClose:true,
							content:'<form action="xiugai.do" method="post">'
								+'<center id="xiugaiId"><table id="tb1"><tr>'
								+'		<th style="width: 20px; height:25px;">项目Id</th>'
								+'		<th style="width: 20px; height:25px;">项目类型</th>'
								+'		<th style="width: 20px; height:25px;">项目名称</th>'
						        +'		<th style="width: 20px; height:25px;">项目状态</th>'
						        +'		<th style="width: 20px; height:25px;">创建时间</th></tr>'
						        +'	<tr>'
						        +'      <td><input type="text" name="projectId" value="'+data[id].projectId+'"/ readonly></td>'
						        +'      <td><input type="text" name="projectType" value="'+data[id].projectType+'"/></td>'
						        +'      <td><input type="text" name="projectName" value="'+data[id].projectName+'"/></td>'
						        +'      <td><input type="text" name="projectStatus" value="'+data[id].projectStatus+'"/></td>'
						        +'      <td><input type="text" name="createTime" value="'+data[id].createTime+'"/></td></tr></table>'
						        +'<br><input type="submit" value="确111认"  id="anniu" /></center>'
						        +'</form>'
							});
					});
			
				}
			}
				});
		event.stopPropagation();
		
	
}