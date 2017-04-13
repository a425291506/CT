
document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
$(document).ready(function(){
	$("#jilu").click(function(){
		//location.href ='Customer.jsp';
		
		$(".kuang3").html("<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><div class='tou3'></div>" );
	    $(".d1").append("<p class='font'>当前位置：维护管理</p>");
	    $(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='projectshangyiye3()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='projectxiayiye3()'  class='jihuabutton'>");
	    $.ajax({
        	type:'post',
			data:'',
			async:false,
			url:"project.do",
			dataType:'json',
			success:function(data){
//				$(".tou1").append("<div class='tianjiajihua' id='zengjia'>添加维护</div><h class='select'>选择项目:</h><select class='projectselect' onChange='project3()' name='project' id='project'></select><input class='sousuo' type='text'><div class='sousuobutton'>搜索</div>");	 
				$(".tou1").append("<div class='tianjiajihua1' >选择项目:<select class='sousuos' onChange='project3()' name='project' id='project'></select></div><div class='sousuobutton' id='zengjia'>增加</div>");
//				$(".tou1").append("<div class='tianjiajihua1' >选择客户:<select class='sousuos' onChange='project()' name='project' id='project'></select></div><div class='sousuobutton' id='zengjia'>增加</div>");
				for(var i=0;i<data.length;i++){
					$("#project").append("<option>"+data[i].projectName+"</option>");	
				}
				 $("#zengjia").click(function(){
					 layer.open({
							type:1,
							skin:'layui-layer-demo',
							area:['500px','348px'],
							shadeClose:true,
//							content:'<form id="zengjia2" method="post">'
//								+'<center ><table><tr>'
//								
//								+'		<th style="width: 20px; height:35px;">问题描述</th>'
//						        +'		<th style="width: 20px; height:35px;">问题类型</th>'
//						        +'		<th style="width: 20px; height:35px;">解决方式</th>'
//						        +'		<th style="width: 20px; height:35px;">创建时间</th></tr>'
//						        +'	<tr>'
//						        +'      <input type="hidden" name="project" value='+$("#project").val()+' />'
//						        +'      <td><input type="text" name="problemDescribe" id="problemDescribe" /></td>'
//						        +'      <td><input type="text" name="problemType"  id="problemType" /></td>'
//						        +'      <td><input type="text" name="solveMethod" id="solveMethod"  /></td>'
//						        +'      <td><input type="text" name="createTime" readonly /></td></tr></table>'
//						        +'<br><input type="button"  onClick="maintenancezj_xm()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/></center>'
//						        +'</form>'
							content:'<form id="zengjia2" method="post" class="basic-grey">'
									+'<label>'
									+'<span>问题类型 :</span>'
									+'<input name="problemType" id="problemType" placeholder="...类型"  />'
									+'</label>'
									+'<br><label>'
									+'<span>解决方式 :</span>'
									+'<input  name="solveMethod" id="solveMethod" placeholder="...解决方式" />'
									+'</label>'
									+'<br><label>'
									+'<span>问题描述 :</span>'
									+'<textarea id="problemDescribe" name="problemDescribe"  placeholder="......描述"></textarea>'
									+'</label>'
//	+'<br><input type="button"  onClick="maintenancezj_xm()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/></center>'
									+'<br><label>'
//									+'<span>创建时间:</span>'
									+'<center><input type="button"  onClick="maintenancezj_xm()"  value="确认"   name="确认" $nbsp,$nbsp/></center>'
									+'</label>'
									+'<center><div id="weihuzj" style="position:relative;top:-40px;color:red" ></div></center>'
									+'<input type="hidden" name="project" value='+$("#project").val()+' />'
									+'</form>'
					 });
				 });
			}
			});
	    project3();
	    projectpage3();
	    
});
	});
function project3(){
	projectpage3();
	$("#page").html("1");
	projectselect3();
}
function projectpage3(){
	 $.ajax({
     	type:'post',
			data:{"project":$("#project").val()},
			async:false,
			url:"maintenancepage.do",
			dataType:'json',
			success:function(data){
//				alert(data.num);
				$("#number").html(data.num);
			}
			});
}
function projectshangyiye3(){
	var page=$("#page").html();
	if(page==1){
		alert("已经是第一页了");
	}
	else{
		page=page-1;
		$("#page").html(page);
		projectselect3();
	}
}
function projectxiayiye3(){
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
		projectselect3();
	}
}
function projectselect3(){
		$.ajax({
			type:'post',
			data:{"page":$("#page").html(),"project":$("#project").val()},
			dataType:'json',
			url:"jilu.do",
			success:function(data){

				if(data.length==0){
					$(".tou2").html("暂无记录");
				}
				else{$(".tou2").html("");
				$(".tou2").append("<table class='hovertable' style='width:840px'>");			
				$(".tou2").append("<tr>"
//				        +"      <th scope='col' style='width: 250px; '><center>项目id</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>问题类型</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>解决方式</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>问题描述</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>创建时间</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>修改</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>删除</center></th>"
				        +"   </tr>");
				 for(var i=0;i<data.length;i++){ 
					 $(".tou2").append("<tr>"
//					+"<td class='row' id='id'><center>"+data[i].projectId+"</center></td>"
					+"<td class='row' id='type'><center>"+data[i].problemType+"</center></td>"
					+"<td class='row' id='solve'><center>"+data[i].solveMethod+"</center></td>"
					+"<td class='row' id='"+i+"' name='miaoshu' ><center><img src='images/11xx.png' style='width:30px;height:16px;' ></center></td>"
			        +"<td class='row' id='time'><center>"+data[i].createTime+"</center></td>"
					+"<td class='row' id='"+i+"' name='xiugai'><center><img src='images/mod.gif'></center></td>"
					+"<td class='row' id='"+i+"' name='shanchu'><center><img src='images/del.gif'></center></td>"
					+"</tr>");
						 }
				 $(".tou2").append("</table>");				 
				 $(".tou2").append("<div style='height:15px'></div>");
////				$(".tou2").append("<table  style='width:840px'>");				
//				$(".tou2").append('<form  method="post" class="basic-grey">'
////				+'<h1>Contact Form'
////				+'<span>Please fill all the texts in the fields.</span>'
////				+'</h1>'
//				+'<label>'
//				+'<span>问题类型 :</span>'
//				+'<input id=""  name="problemType" placeholder="...类型"  />'
//				+'</label>'
//				+'<br><label>'
//				+'<span>解决方式 :</span>'
//				+'<input  name="problemDescribe" placeholder="...解决方式" />'
//				+'</label>'
//				+'<br><label>'
//				+'<span>问题描述 :</span>'
//				+'<textarea id="" name="solveMethod"  placeholder="......描述"></textarea>'
//				+'</label>'
//				+'<br><label>'
//				+'<span>创建时间:</span>'
//				+'<input type="text" name="createTime" value="l" />'
//				+'</label>'
////				+'<label>'
////				+'<span>Subject :</span><select name="selection">'
////				+'<option value="Job Inquiry">Job Inquiry</option>'
////				+'<option value="General Question">General Question</option>'
////				+'</select>'
////				+'</label>'
////				+'<label>'
////				+'<span>&nbsp;</span>'
////				+'<input type="button" class="button" value="Send" />'
////				+'</label>'
//				+'</form>');
////				 $(".tou2").append("</table>");
//				 
////				 $(".tou2").append("<div style='height:15px'></div>");
				 $("td[name='miaoshu']").click(function(){
					 var id=this.id;
					 layer.open({
						 type:1,
						 skin:'layui-layer-demo',
						 area:['400px','200px'],
						 shadeClose:true,
						 content:'<form id="miaoshu" method="post">'
							 +'<input type="hidden";  name="maintenanceId" value="'+data[id].maintenanceId+'" >'
							 +'<label>'
							 +'<h2>问题描述:</h2>'
							 +'<textarea style="width:393px;height:128px;"  name="problemDescribe" >'+data[id].problemDescribe+'</textarea>'
							 +'</label>'
					 });
				 });
				 $("td[name='shanchu']").click(function(){
					 var id=this.id;
					 layer.open({
						 type:1,
						 skin:'layui-layer-demo',
						 area:['300px','100px'],
						 shadeClose:true,
//							content:'<form id="shanchu2" method="post">'
//								+'<center><table><tr>'
//								+'		<th style="width: 20px; height:35px;"><center>项目id</center></th>'
//								+'		<th style="width: 20px; height:35px;">问题描述</th>'
//								+'		<th style="width: 20px; height:35px;">问题类型</th>'
//						        +'		<th style="width: 20px; height:35px;">解决方式</th>'
//						        +'		<th style="width: 20px; height:35px;">创建时间</th></tr>'
//						        +'	<tr>'
//						        +"<input type='hidden'; style='border:0px' name='maintenanceId' value='"+data[id].maintenanceId+"' >" 
//						        +'      <td><input type="text" name="projectId" value="'+data[id].projectId+'"/ readonly></td>'
//						        +'      <td><input type="text" name="problemDescribe" value="'+data[id].problemDescribe+'" readonly/></td>'
//						        +'      <td><input type="text" name="problemType" value="'+data[id].problemType+'" readonly/></td>'
//						        +'      <td><input type="text" name="solveMethod" value="'+data[id].solveMethod+'" readonly/></td>'
//						        +'      <td><input type="text" name="createTime" value="'+data[id].createTime+'" readonly/></td></tr></table>'
//						        +'<br><input type="button" value="确认" onClick="maintenancesc_xm()" id="anniu" name="确认" $nbsp,$nbsp/></center>'
//						        +'</form>'
						 content:'<form id="shanchu2" method="post"><center>'
								+'<input type="hidden" name="maintenanceId" value="'+data[id].maintenanceId+'" />'
								+'<input style="position:relative;top:10px;" type="button" value="确认删除" onClick="maintenancesc_xm()" class="scbutton" />&nbsp&nbsp'
								+'<input style="position:relative;top:10px;" type="button" value="取消删除" onClick="gb()" class="scbutton" />'
						        +'</center></form>'
					 });
				 });
				 
				 $("td[name='xiugai']").click(function(){
					 var id = this.id;
						layer.open({
							type:1,
							skin:'layui-layer-demo',
							area:['500px','348px'],
							shadeClose:true,
//							content:'<form id="xiugai2" method="post">'
//								+'<center><table><tr>'
//								+'		<th style="width: 20px; height:25px;">项目id</th>'
//								+'		<th style="width: 20px; height:25px;">问题描述</th>'
//								+'		<th style="width: 20px; height:25px;">问题类型</th>'
//						        +'		<th style="width: 20px; height:25px;">解决方式</th>'
//						        +'	<tr>'
//						        +'<input type="hidden"; style="border:0px" name="maintenanceId" value="'+data[id].maintenanceId+'">' 
//						        +'      <td><input type="text" name="projectId" value="'+data[id].projectId+'"/  ></td>'
//						        +'      <td><input type="text" name="problemDescribe" value="'+data[id].problemDescribe+'"/></td>'
//						        +'      <td><input type="text" name="problemType" value="'+data[id].problemType+'"/></td>'
//						        +'      <td><input type="text" name="solveMethod" value="'+data[id].solveMethod+'"/></td></tr></table>'
//						        +'<br><input type="button" value="确认" onClick="maintenancexg_xm()" id="anniu" /></center>'
//						        +'</form>'
							content:'<form id="xiugai2" method="post" class="basic-grey">'
								+'<label>'
								+'<span>问题类型 :</span>'
								+'<input id="problemType1"  name="problemType" value="'+data[id].problemType+'"  />'
								+'</label>'
								+'<br><label>'
								+'<span>解决方式 :</span>'
								+'<input  name="solveMethod" id="solveMethod1" value="'+data[id].solveMethod+'"  />'
								+'</label>'
								+'<br><label>'
								+'<span>问题描述 :</span>'
								+'<textarea id="problemDescribe1" name="problemDescribe">'+data[id].problemDescribe+'</textarea>'
								+'</label>'
//+'<br><input type="button"  onClick="maintenancezj_xm()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/></center>'
								+'<br><label>'
//								+'<span>创建时间:</span>'
								+'<center><input type="button"  onClick="maintenancexg_xm()"  value="确认"   name="确认" $nbsp,$nbsp/></center>'
								+'</label>'
								+'<center><div id="weihuzj1" style="position:relative;top:-40px;color:red" ></div></center>'
								 +'<input type="hidden";  name="maintenanceId" value="'+data[id].maintenanceId+'">' 
								+'</form>'
							});
					});
				}
			}
				});
//		$("#version").css("background","#27a2e6");
		event.stopPropagation();	
}
function maintenancezj_xm(){
	if($("#problemDescribe").val().trim() =="" || $("#problemType").val().trim()==""||$("#solveMethod").val().trim()==""){
		$("#weihuzj").html("必填信息不能为空");
	}else{
		$.ajax({
			type:'post',
			data:$("#zengjia2").serialize(),
			url:"maintenance_zj.do",
			dataType:'json',
			success:function(data){
					layer.closeAll();
					projectpage3();
					projectselect3();	
			},
//			error:function(data){
//				layer.closeAll();
//				projectpage3();
//				projectselect3();	
//			}
		});
	}	
	}
function maintenancexg_xm(){
	if($("#problemDescribe1").val().trim() =="" || $("#problemType1").val().trim()==""||$("#solveMethod1").val().trim()==""){
		$("#weihuzj1").html("必填信息不能为空");
	}else{
	$.ajax({
		type:'post',
		data:$("#xiugai2").serialize(),
		url:"maintenance_xg.do",
		dataType:'json',
		success:function(data){
			layer.closeAll();
			projectpage3();
			projectselect3();
		}
	});
	}
}
function maintenancesc_xm(){
	$.ajax({
		type:'post',
		data:$("#shanchu2").serialize(),
		url:"maintenance_sc.do",
		dataType:'json',
		success:function(data){
			layer.closeAll();
			projectpage3();
			projectselect3();
		}
	});
}