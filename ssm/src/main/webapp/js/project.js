
document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
$(document).ready(function(){
	$("#project2").click(function(){

		//location.href ='Customer.jsp';
		$(".kuang3").html("<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><div class='tou3'></div>" );
	    $(".d1").append("<p class='font'>当前位置：项目管理</p>");
	    $(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='projectshangyiye()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='projectxiayiye()'  class='jihuabutton'>");
	    //$("#xiangmu1").show();
	    $.ajax({
	    	type:'post',
	    	data:'',
	    	url:"customers.do",
	    	async:false,
	    	dataType:'json',
	    	success:function(data){
//	    		$(".tou1").append("<div class='tianjiajihua1'>员工工号:</div><input class='sousuo' type='text' placeholder='输入员工工号'><div class='sousuobutton' id='zengjia'>增加</div>");
//	    		$(".tou1").append("<div class='tianjiajihua' id='zengjia'>添加项目</div><h class='select'>选择客户:</h><select class='projectselect' onChange='project()' name='project' id='project'></select><input class='sousuo' type='text'><div class='sousuobutton'>搜索</div>");	 	
	    	$(".tou1").append("<div class='tianjiajihua1' >选择客户:<select class='sousuos' onChange='project()' name='project' id='project'></select></div><div class='sousuobutton' id='zengjia'>增加</div>");
	    	for(var i=0;i<data.length;i++){
				$("#project").append("<option>" +data[i].customerName+"</option>");	
			}
	    	$("#zengjia").click(function(){
			 layer.open({
					type:1,
					skin:'layui-layer-demo',
					area:['300px','220px'],
					shadeClose:true,
					content:'<form id="zengjia11" method="post">'
//						+'<center ><table><tr>'
//						+'		<th style="width: 20px; height:35px;">项目类型</th>'
//						+'		<th style="width: 20px; height:35px;">项目名称</th>'
//				        +'		<th style="width: 20px; height:35px;">项目状态</th>'
//				        +'		<th style="width: 20px; height:35px;">创建时间</th></tr>'
//				        +'	<tr>'
//				        +'      <input type="hidden" name="customer" value='+$("#project").val()+' />'
//				        +'      <td><input type="text" name="projectType" id="projectType" /></td>'
//				        +'      <td><input type="text" name="projectName" id="projectName"/></td>'
//				        +'      <td><input type="text" name="projectStatus" id="projectStatus" /></td>'
//				        +'      <td><input type="text" name="createTime" readonly /></td></tr></table>'
//				        +'<br><input type="button"  onClick="projectzj_xm()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/></center>'
//				        +'</form>'
						+'<input type="hidden" name="customer" value='+$("#project").val()+' />'
						+'<center><h style="position:relative;top:10px;" >项目类型:<input type="text" name="projectType" id="projectType" placeholder="项目类型" /></h>'
						+'<br><h style="position:relative;top:20px;" >项目名字:<input type="text" name="projectName" id="projectName" placeholder="项目名字" /></h>'
						+'<br><h style="position:relative;top:30px;" >项目状态:<input type="text" name="projectStatus" id="projectStatus" placeholder="状态:未维护/维护中/已完成" /></h>'
						+'<div style="position:relative;top:40px;color:red" id="kongbai" ></div>'
						+'<br><input style="position:relative;top:40px;" type="button" onClick="projectzj_xm()" value="确认" class="zjbutton" />'
						+'</center></form>'
			 });
		 });
	    	}
	    });
	    project();
	    projectpage();
});
	});
function project(){
	projectpage();
	$("#page").html("1");
	projectselect();
}
function projectpage(){
	 $.ajax({
     	type:'post',
			data:{"project":$("#project").val()},
			async:false,
			url:"projectpage.do",
			dataType:'json',
			success:function(data){
				$("#number").html(data.num);
			}
			});
}
function projectshangyiye(){
	var page=$("#page").html();
	if(page==1){
		alert("已经是第一页了");
	}
	else{
		page=page-1;
		$("#page").html(page);
		projectselect();
	}
}
function projectxiayiye(){
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
		projectselect();
	}
}
function projectselect(){
		$.ajax({
			type:'post',
			data:{"page":$("#page").html(),"project":$("#project").val()},
			dataType:'json',
			url:"version.do",
			success:function(data){
				if(data.length==0){
					$(".tou2").html("暂无记录");
				}
				else{$(".tou2").html("");
				$(".tou2").append("<table class='hovertable' style='width:840px'>");
				
				$(".tou2").append("<tr>"
				        +"      <th scope='col' style='width: 250px; '><center>项目类型</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>项目名称</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>项目状态</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>创建时间</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>修改</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>删除</center></th>"
				        +"   </tr>");
				 for(var i=0;i<data.length;i++){ 
					 $(".tou2").append("<tr>"
						        +"       <td class='row' id='type'><center>"+data[i].projectType+"</center></td>"
						        +"        <td class='row' id='name'><center>"+data[i].projectName+"</center></td>"
						        +"        <td class='row' id='status'><center>"+data[i].projectStatus+"</center></td>"
						        +"        <td class='row' id='time'><center>"+data[i].createTime+"</center></td>"
						        +"       <td class='row' id='"+i+"' name='xiugai'><center><img src='images/mod.gif'></center></td>"
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
						 area:['300px','100px'],
						 shadeClose:true,
							content:'<form id="shanchu11" method="post"><center>'
								+'<input type="hidden" name="projectId" value="'+data[id].projectId+'" />'
								+'<input style="position:relative;top:10px;" type="button" value="确认删除" onClick="projectsc_xm()" class="scbutton" />&nbsp&nbsp'
								+'<input style="position:relative;top:10px;" type="button" value="取消删除" onClick="gb()" class="scbutton" />'
						        +'</center></form>'
					 });
				 });
				 
				 $("td[name='xiugai']").click(function(){
					 var id = this.id;
						layer.open({
							type:1,
							skin:'layui-layer-demo',
							area:['300px','210px'],
							shadeClose:true,
							content:'<form id="xiugai11" method="post">'
								+'<input type="hidden" name="projectId" value="'+data[id].projectId+'" />'
								+'<center><h style="position:relative;top:10px;" >项目名称:<input style="width:150px;" type="text" name="projectType" id="projectType1" value="'+data[id].projectType+'" /></h>'
								+'<br><h style="position:relative;top:20px;" >项目类型:<input style="width:150px;"  type="text" name="projectName" id="projectName1" value="'+data[id].projectName+'" ></h>'
								+'<br><h style="position:relative;top:30px;" >项目状态:<select name="projectStatus" ><option>未维护</option><option>维护中</option><option>已完成</option></select></h>'
								+'<div style="position:relative;top:40px;color:red" id="kongbai1" ></div>'
								+'<br><input style="position:relative;top:40px;" type="button" value="确认" onClick="projectxg_xm()" class="zjbutton" />'
						        +'</center></form>'
							});
					});
				}
			}
				});
//		$("#version").css("background","#27a2e6");
		event.stopPropagation();	
}
function projectzj_xm(){
//	alert($("#projectType").val()+"+"+$("#projectName").val()+"+"+$("#projectStatus").val());
	if($("#projectType").val().trim() !="" && $("#projectName").val().trim() !="" && $("#projectStatus").val().trim() !=""){
		if($("#projectStatus").val()=="维护中" || $("#projectStatus").val()=="未维护" || $("#projectStatus").val()=="已完成" ){
			$.ajax({
				type:'post',
				data:$("#zengjia11").serialize(),
				url:"projectzengjia.do",
				dataType:'json',
				success:function(data){
					if(data.result=="error"){
						alert("项目名重复");
					}else{
					layer.closeAll();
					projectpage();
					projectselect();
					};
				}
			});
		}else{
			$("#kongbai").html("项目状态只能为:维护中/未维护/已完成");
		}
		
	}else{
		$("#kongbai").html("必填项不能为空");
	 }
	}
function projectxg_xm(){
	if($("#projectType1").val().trim() =="" || $("#projectName1").val().trim() ==""){
		$("#kongbai1").html("必填项不能为空");
	}else{
		$.ajax({
			type:'post',
			data:$("#xiugai11").serialize(),
			url:"projectxiugai.do",
			dataType:'json',
			success:function(data){
				layer.closeAll();
				projectpage();
				projectselect();
			}
		});
	}	
}
function projectsc_xm(){
	$.ajax({
		type:'post',
		data:$("#shanchu11").serialize(),
		url:"projectshanchu.do",
		dataType:'json',
		success:function(data){
			layer.closeAll();
			projectpage();
			projectselect();
		}
	});
}