document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
$(document).ready(function(){
	
	$("#jihua").click(function(){				
		$(".kuang3").html("<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><div class='tou3'></div>" );
	    $(".d1").append("<p class='font'>当前位置：项目管理--->项目计划</p>");
	    $(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='jihuashangyiye()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='jihuaxiayiye()'  class='jihuabutton'>");
	    $.ajax({
        	type:'post',
			data:'',
			async:false,
			url:"project.do",
			dataType:'json',
			success:function(data){
//				$(".tou1").append("<div class='tianjiajihua1' >选择项目:<select class='sousuos' onChange='zhoubao1()' name='project' id='project'></select></div><div class='sousuobutton' id='xjzb'>增加</div>");
				$(".tou1").append("<div class='tianjiajihua1' >选择项目:<select class='sousuos' onChange='jihua1()' name='project' id='project'></select></div><div class='sousuobutton' id='jhtj'>增加</div>");
//				$(".tou1").append("<div class='tianjiajihua' id='jhtj'>添加计划</div><h class='select'>选择项目:</h><select class='projectselect' onChange='jihua1()' name='project' id='project'></select><input class='sousuo' type='text'><div class='sousuobutton'>搜索</div>");	 
				for(var i=0;i<data.length;i++){
					$("#project").append("<option>"+data[i].projectName+"</option>");	
				}
				   
	    $("#jhtj").click(function(){
//	    	alert($("#project").val());
			layer.open({
				  type: 1,
				  skin: 'layui-layer-demo',
				  area: ['500px', '350px'], //宽高
				  shadeClose: true, 
//				  content: 					 
//					  	"<form id='jhtj_jihua' method='post'><br>"
//					    +"<center>项目功能:<input type='text';  style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='function1' id='function1' ></center><br><br>" 
//		    			+"<center>开发人员:<input type='text'; style='border:1px #000 solid;outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='developers' id='developers' ></center><br><br>" 
//		    			+" <input type='hidden' value="+$("#project").val()+" name='project'>"
//		    			+"<center><input type='button' style='background:#0066ff;color:#ffffff;width:70px;height:30px' value='添加' name='添加' class='tianjia' onClick='jihuatianjia()'></center>"
//		    			+"</form>"
					  content:'<form id="jhtj_jihua" method="post" class="basic-grey">'
							+'<label>'
							+'<span>负&nbsp责 人 :</span>'
							+'<input name="projectLeader" id="projectLeader" placeholder="...项目负责人"  />'
							+'</label>'
							+'<br><label>'
							+'<span>开发人员 :</span>'
							+'<input  name="developers" id="developers" placeholder="...开发人员" />'
							+'</label>'
							+'<br><label>'
							+'<span>功能需求 :</span>'
							+'<textarea id="function1" name="function1"  placeholder="......功能"></textarea>'
							+'</label>'
//+'<br><input type="button"  onClick="maintenancezj_xm()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/></center>'
							+'<br><label>'
//							+'<span>创建时间:</span>'
							+'<center><input type="button"  onClick="jihuatianjia()"  value="确认"   name="确认" $nbsp,$nbsp/></center>'
							+'</label>'
							+'<center><div id="jihuajg" style="position:relative;top:-40px;color:red" ></div></center>'
							+" <input type='hidden' value="+$("#project").val()+" name='project'>"
							+'</form>'
				 });			
		});
			}
        });
	    jihuapage();
		jihua();
});		  
});
function jihuashanchu(){	
	 $.ajax({
			type:'post',
			data:$("#shanchu_jihua").serialize(),
			url:"shanchu_jh.do",
			dataType:'json',
			success:function(data){				
				 layer.closeAll();
				 jihuapage();
			     jihua();
			}
		});
}
function jihuaxiugai(){
//	alert($("#function11").val());
//	alert($("#developers1").val());
//	alert($("#projectLeader1").val());
	if($("#function11").val().trim()==""||$("#developers1").val().trim()=="" ||$("#projectLeader1").val().trim()==""){
		$("#jihuajg1").html("必填项不能为空");
	}else{ 
		$.ajax({
			type:'post',
			data:$("#xiugai_jihua").serialize(),
			url:"xiugai_jh.do",
			dataType:'json',
			success:function(data){				
				layer.closeAll();
				jihuapage();
				jihua();
		}
	});
  }
}
function jihuatianjia(){	
	if($("#function1").val().trim()==""||$("#developers").val().trim()=="" || $("#projectLeader").val().trim()==""){
		$("#jihuajg").html("必填项不能为空");
	}else{
		$.ajax({
			type:'post',
			data:$("#jhtj_jihua").serialize(),
            url:"tianjia_jh.do",
			dataType:'json',
			success:function(data){
				 layer.closeAll();
				 jihuapage();
			     jihua();
			     
			}
		});	
	}
}

function jihua1(){
	jihuapage();
	$("#page").html("1");
	jihua();
}

function jihuapage(){
	 $.ajax({
     	type:'post',
			data:{"project":$("#project").val()},
			async:false,
			url:"jihuapage.do",
			dataType:'json',
			success:function(data){
				$("#number").html(data.num);
			}
			});
}

function jihuashangyiye(){
	
	var page=$("#page").html();
	if(page==1){
		alert("已经是第一页了");
	}
	else{
		page=page-1;
		
		$("#page").html(page);
		jihua();
	}
}
function jihuaxiayiye(){
	
	var page=$("#page").html();
	var number=$("#number").html();
//	alert(number);
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
		
		jihua();
		
	}
}

function jihua(){
	//alert("1");
	 $.ajax({
			type:'post',
			data:{"page":$("#page").html(),"project":$("#project").val()},
            url:"jihua.do",
			dataType:'json',
			success:function(data){
				if(data.length==0){
					$(".tou2").html("暂无记录");
				}
				else{$(".tou2").html("");
				$(".tou2").append("<table class='hovertable' style='width:840px'>");	    	
				$(".tou2").append("<tr>" 
					+"<th scope='col' style='width: 250px; '><center>项目负责人</center></th>" 
	    			+"<th scope='col' style='width: 250px; '><center>开发人员</center></th>" 
	    			+"<th scope='col' style='width: 250px; '><center>功能</center></th>" 
	    			+"<th scope='col' style='width: 250px; '><center>创建时间</center></th>"
					+"<th scope='col' style='width: 100px; '><center>修改</center></th>"
					+"<th scope='col' style='width: 100px; '><center>删除</center></th> 	"		 			
					+"</tr>");							    		    		
				for(var i=0;i<data.length;i++){					
					$(".tou2").append("<tr>"
					+"<td class='row'><center>"+data[i].projectLeader+"</center></td>"
					+"<td class='row' id='"+ i+ "' name='reny' ><center><img src='images/1f.png' style='width:20px; heigth:20px;' ></center></td>"
//					+"<td class='row'><center>"+data[i].developers+"</center></td>"
//					+"<td class='row'><center>"+data[i].function1+"</center></td>"
					+"<td class='row' id='"+ i+ "' name='fc' ><center><img src='images/1d.png' style='width:20px; heigth:20px;' ></center></td>"
					+"<td class='row'><center>"+data[i].createTime+"</center></td>"
					+"<td class='row' id='"+i+"' name='xiugai'><center><img src='images/mod.gif'></center></td>"
					+"<td class='row' id='"+i+"' name='shanchu''><center><img src='images/del.gif'></img></center></td>"
					+"</tr>"	);	    	
				}
				$(".tou2").append("</table>");	    		
				$(".tou2").append("<div style='height:15px'></div>");  
				
				$("td[name='reny']").click(function(){
					var id=this.id;
		    		layer.open({
						  type: 1,
						  skin: 'layui-layer-demo',
						  area: ['1', '240px'], //宽高
						  shadeClose: true,		
						 content:'<h2 style="position:relative;top:5px;" >开发人员</h2><br>'
						 +'<textarea style="width:393px;height:110px;" >'+data[id].developers+'</textarea>'
						 +'<center><input style="position:relative;top:10px;" type="button" class="zjbutton" value="确认" Onclick="gb()"></center>'
		    		});
				});
				$("td[name='fc']").click(function(){
					var id=this.id;
		    		layer.open({
						  type: 1,
						  skin: 'layui-layer-demo',
						  area: ['1', '325px'], //宽高
						  shadeClose: true,		
						 content:'<h2 style="position:relative;top:5px;" >下周计划</h2><br>'
						 +'<textarea style="width:393px;height:190px;" >'+data[id].function1+'</textarea>'
						 +'<center><input style="position:relative;top:10px;" type="button" class="zjbutton" value="确认" Onclick="gb()"></center>'
		    		});
				});
				
	    	$("td[name='xiugai']").click(function(){
	    		var id=this.id;
	    		layer.open({
					  type: 1,
					  skin: 'layui-layer-demo',
					  area: ['500px', '350px'], //宽高
					  shadeClose: true,					  
//					  content: 						  
//						  "<form id='xiugai_jihua' method='post'>"
//							+"<input type='hidden'; style='border:0px' name='planId_xiugai' value='"+data[id].planId+"' ><br><br>" 
//						    +"<center>项目功能:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='function1_xiugai' value='"+data[id].function1+"'></center><br><br>" 
//			    			+"<center>开发人员:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='developers_xiugai' value='"+data[id].developers+"'></center><br><br>" 
//			    			+"<center><input type='button' style='background:#0066ff;color:#ffffff;width:70px;height:30px' value='修改' name='修改' class='tianjia' onClick='jihuaxiugai()'></center>"
//			    			+"</form>"
						  content:'<form id="xiugai_jihua" method="post" class="basic-grey">'
							  	+'<input type="hidden";  name="planId_xiugai" value='+data[id].planId+' >' 
								+'<label>'
								+'<span>负&nbsp责 人 :</span>'
								+'<input name="projectLeader" id="projectLeader1" value="'+data[id].projectLeader+'"  />'
								+'</label>'
								+'<br><label>'
								+'<span>开发人员 :</span>'
								+'<input  name="developers" id="developers1" value="'+data[id].developers+'" />'
								+'</label>'
								+'<br><label>'
								+'<span>功能需求 :</span>'
								+'<textarea id="function11" name="function1"  >'+data[id].function1+'</textarea>'
								+'</label>'
	//+'<br><input type="button"  onClick="maintenancezj_xm()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/></center>'
								+'<br><label>'
//								+'<span>创建时间:</span>'
								+'<center><input type="button"  onClick="jihuaxiugai()"  value="确认"  $nbsp,$nbsp/></center>'
								+'</label>'
								+'<center><div id="jihuajg1" style="position:relative;top:-40px;color:red" ></div></center>'
								+'</form>'
					 });
	    	});	    	
	    	$("td[name='shanchu']").click(function(){	
	    		var id=this.id;
	    		layer.open({
					  type: 1,
					  skin: 'layui-layer-demo',
					  area: ['300px', '100px'], //宽高
					  shadeClose: true,					  
//					  content: "<form id='shanchu_jihua' method='post'>"
//							+"<input type='hidden'; style='border:0px ' name='planId_shanchu' value='"+data[id].planId+"'  readonly><br><br>" 
//						    +"<center>项目功能:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='function1_shanchu' value='"+data[id].function1+"' readonly></center><br><br>" 
//			    			+"<center>开发人员:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='developers_shanchu' value='"+data[id].developers+"' readonly></center><br><br>" 
//			    			+" <center> &nbsp; &nbsp;<input type='text' value='你确定删除该数据么？' style='border:0px'></center><br>"
//			    			+"	<center><input type='button' style='background:#0066ff;color:#ffffff;width:70px;height:30px' value='删除' name='删除' class='tianjia' onClick='jihuashanchu()'></center>"
//						  		+"</form>"
					  content :'<form id="shanchu_jihua" method="post" >'
							+'<input type="hidden"; name="planId_shanchu" value="'+data[id].planId+'" />'
							+'<center><input style="position:relative;top:10px;" class="scbutton" type="button" value="确认删除" onClick="jihuashanchu()" >&nbsp&nbsp'
							+'<input style="position:relative;top:10px;" class="scbutton" type="button" value="取消删除"  onClick="gb()"></center>'
							+'</form>'
				 });
	    	});
	    	
	    }
			}
	});
	 

		event.stopPropagation();

   
}
