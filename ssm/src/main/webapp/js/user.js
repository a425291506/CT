
document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
$(document).ready(function(){
	$("#renyuan2").click(function(){
		//location.href ='Customer.jsp';
		$(".kuang3").html("<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><div class='tou3'></div>" );
	    $(".d1").append("<p class='font'>当前位置：人员管理</p>");
	    $(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='projectshangyiye2()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='projectxiayiye2()'  class='jihuabutton'>");
		$(".tou1").append("<div class='tianjiajihua1'>员工工号:</div><input class='sousuo' type='text' placeholder='输入员工工号'><div class='sousuobutton' id='zengjia'>增加</div>");
		$(".sousuo").bind("input propertychange", projectselect2);
		//一改变就执行的方法
		//$("#xiangmu1").show();
		 $("#zengjia").click(function(){
			 layer.open({
					type:1,
					skin:'layui-layer-demo',
					area:['300px','300px'],
					shadeClose:true,
				        content : '<form class="tan" id="zengjia1111" method="post" >'
							+ '<center><h style="position:relative;top:20px;">员工姓名:&nbsp <input type="text" name="userName" id="userName" placeholder="输入员工姓名" /></h><br>'
							+ '<h style="position:relative;top:30px;">初始密码:&nbsp <input type="text" value="0000" name="passWord" id="passWord" readonly /></h><br>'
							+ '<h style="position:relative;top:40px;">员工工号:&nbsp <input type="text" name="jobNumber" id="jobNumber" placeholder="输入员工工号" /></h><br>'
							+ '<h style="position:relative;top:50px;">联系方式:&nbsp <input type="text" name="phoneNumber" id="phoneNumber" placeholder="输入联系方式" /></h><br>'
							+ '<h style="position:relative;top:60px;">员工类型:&nbsp <select name="UserRole"><option>开发人员</option>'
							+'<option>销售人员</option><option>客服人员</option><option>部门主管</option><option>项目经理</option><option>人事部门</option></select> <br></h><br>'
							+'<div style="position:relative;top:60px;color:red"  id="jg"></div>'
							+ '<br><input style="position:relative;top:60px;" type="button"  onClick="userzj_xm()"  value="确认"  class="zjbutton"  $nbsp,$nbsp/> '
							+ '</center></form>'	
			 });
		 });
	    project2();
	    projectpage2();
});
	});
function project2(){
	projectpage2();
	$("#page").html("1");
	projectselect2();
}
function projectpage2(){
	 $.ajax({
     	type:'post',
			data:'',
			async:false,
			url:"userpage.do",
			dataType:'json',
			success:function(data){
				$("#number").html(data.num);
				
			}
			});
}
function projectshangyiye2(){
	var page=$("#page").html();
	if(page==1){
		alert("已经是第一页了");
	}
	else{
		page=page-1;
		$("#page").html(page);
		projectselect2();
	}
}
function projectxiayiye2(){
	var page=$("#page").html();
	var number=$("#number").html();
//	alert($("#number").html());
	var zong= parseInt(number/5);
//	alert(zong);
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
		projectselect2();
	}
}
function projectselect2(){
		$.ajax({
			type:'post',
			data:{"JobNumber" : $(".sousuo").val(),"page" : $("#page").html()},
			dataType:'json',
			url:"userfind.do",
			success:function(data){
				if(data.length==0){
					$(".tou2").html("暂无记录");
				}
				else{
				$(".tou2").html("");
				$(".tou2").append("<table  style='width:840px'>");
				$(".tou2").append("<tr>"
				        +"      <th scope='col' style='width: 250px; '><center>员工姓名</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>员工类型</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>员工工号</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>联系方式</center></th>"
				        +"		<th scope='col' style='width: 250px; '><center>创建时间</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>修改</center></th>"
				        +"		<th scope='col' style='width: 100px; '><center>删除</center></th>"
				        +"   </tr>");
				 for(var i=0;i<data.length;i++){ 
					 $(".tou2").append("<tr>"
						        +"       <td class='row' id='role'><center>"+data[i].userName+"</center></td>"
						        +"        <td class='row' id='name'><center>"+data[i].userRole+"</center></td>"
						        +"        <td class='row' id='number1'><center>"+data[i].jobNumber+"</center></td>"
						        +"        <td class='row' id='phone'><center>"+data[i].phoneNumber+"</center></td>"
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
							content:'<form id="shanchu1111" method="post">'
								+'<center><input style="position:relative;top:10px;" class="scbutton" type="button" value="确认删除" onClick="usersc_xm()" >'
								+'&nbsp&nbsp<input style="position:relative;top:10px;" class="scbutton" type="button" value="取消删除" onClick="gb()" >'
						        +'<input type="hidden"; style="border:0px" name="user1Id" value="'+data[id].userId+'" >'
						        +'</center></form>'
					 });
				 });
				 
				 $("td[name='xiugai']").click(function(){
					 var id = this.id;
						layer.open({
							type:1,
							skin:'layui-layer-demo',
							area:['300px','280px'],
							shadeClose:true,
							content:'<form id="xiugai1111" method="post">'
								+'<center><h style="position:relative;top:20px;">员工姓名:&nbsp<input style="width:100px;" type="text" name="userName" id="userName1" value="'+data[id].userName+'" /><br>'
								+'<h style="position:relative;top:20px;">员工工号:&nbsp<input style="width:100px;" type="text" name="jobNumber" id="jobNumber1" value="'+data[id].jobNumber+'" /><br>'
								+'<h style="position:relative;top:20px;">联系方式:&nbsp<input style="width:100px;" type="text" name="phoneNumber" id="phoneNumber1" value="'+data[id].phoneNumber+'" /><br>'
								+'<h style="position:relative;top:20px; left:-10px;">员工类型:&nbsp<select name="userRole"><option>开发人员</option> '
								+'<option>销售人员</option><option>客服人员</option><option>部门主管</option><option>项目经理</option><option>人事部门</option></select> <br></h><br>'
						        +'<input type="hidden"; style="border:0px" name="user1Id" value="'+data[id].userId+'">' 
//						        +' style="border:0px;"边框为0
						        +'<div style="position:relative;top:20px;color:red" id="jg1"></div>'
						        +'<br><br><input style="position:relative;" type="button" value="确认" onClick="userxg_xm()" class="zjbutton" /></center>'
						        +'</form>'
							});
					});
				}
			}
				});
//		$("#version").css("background","#27a2e6");
		event.stopPropagation();	
}
function userzj_xm(){
	var userName=$("#userName").val();
	var jobNumber=$("#jobNumber").val();
	var phoneNumber=$("#phoneNumber").val();
	if(userName.trim() !="" && jobNumber.trim() != "" && phoneNumber.trim() != ""){
	 if(phoneNumber.length == 11 || phoneNumber.length == 13){
		$.ajax({
			type:'post',
			data:$("#zengjia1111").serialize(),
			url:"user_zj.do",
			dataType:'json',
			success:function(data){
				layer.closeAll();
				projectpage2();
				projectselect2();	
				
			},
		});
	 }else{
		 $("#jg").html("长度有误");
//		 alert(phoneNumber.length);
	 }
	}else{
		$("#jg").html("必填信息不能为空");
	}
		
	}
function userxg_xm(){
	var phoneNumber=$("#phoneNumber1").val();
	var jobNumber=$("#jobNumber1").val();
	var userName=$("#userName1").val();
	if(phoneNumber.trim() !="" && jobNumber.trim() !="" && userName.trim() !=""){
		if(phoneNumber.length ==11 || phoneNumber.length ==13){
			$.ajax({
				type:'post',
				data:$("#xiugai1111").serialize(),
				url:"user_xg.do",
				dataType:'json',
				success:function(data){
					layer.closeAll();
					projectpage2();
					projectselect2();
				}
			});
		}else{
			$("#jg1").html("号码长度有误");
		}
	}else{
		$("#jg1").html("必填项不能为空");
	}
	
}
function usersc_xm(){
	$.ajax({
		type:'post',
		data:$("#shanchu1111").serialize(),
		url:"user_sc.do",
		dataType:'json',
		success:function(data){
			layer.closeAll();
			projectpage2();
			projectselect2();
		}
	});
}
//function userfind() {
//	$.ajax({
//		type : 'post',
//		data : {"JobNumber" : $(".sousuo").val(),"page" : $("#page").html()},
//		url : "userfind.do",
//		dataType : 'json',
//		success : function(data) {
//			projectselect2();
//			},
//			error : function(data) {
//					// alert("错误");
//				}
//			});
//	event.stopPropagation();
//}