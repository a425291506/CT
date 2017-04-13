document
		.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document
		.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document
		.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
$(function() {
	$("#kehu2").click(function() {
			// location.href ='Customer.jsp';
			$(".kuang3").html(	"<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><div class='tou3'></div>");
			$(".d1").append("<p class='font'>当前位置：客户管理</p>");
			$(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='kehushangyiye()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='kehuxiayiye()'  class='jihuabutton'>");
			$(".tou1").append("<div class='tianjiajihua1'>客户名称:</div><input class='sousuo' type='text' placeholder='输入客户名称'><div class='sousuobutton' id='kehuzengjia'>增加</div>");
			$(".sousuo").bind("input propertychange", kehuselect);
			// $("#xiangmu1").show();
			$("#kehuzengjia").click(function() {
				layer.open({
					type : 1,
					skin : 'layui-layer-demo',
					area : [ '300px','520px' ],
					shadeClose : true,
					content : '<form class="tan" id="kehuzj111" method="post" >'
					+ '<center><h style="position:relative;top:20px;">客户名称:&nbsp <input type="text" name="customerName" id="customerName" placeholder="输入客户名称" /></h><br>'
					+ '<h style="position:relative;top:30px; ">客户地址:&nbsp <input type="text" name="customerAddress" id="customerAddress" placeholder="输入客户地址" /></h><br>'
					+ '<h style="position:relative;top:40px;">联系人姓名1:<input type="text" name="contactsName1" id="contactsName1" placeholder="输入联系人姓名1" /></h><br>'
					+ '<h style="position:relative;top:50px;">联系方式1:&nbsp<input type="text" name="contactsPhone1" id="contactsPhone1" placeholder="输入联系方式1" /></h><br>'
					+ '<h style="position:relative;top:60px;">联系人姓名2:<input type="text" name="contactsName2" id="contactsName2" placeholder="输入联系人姓名2" /></h><br>'
					+ '<h style="position:relative;top:70px;">联系方式2:&nbsp<input type="text" name="contactsPhone2" id="contactsPhone2" placeholder="输入联系方式2" /></h><br>'
					+ '<h style="position:relative;top:80px;">联系人姓名3:<input type="text" name="contactsName3" id="contactsName3" placeholder="输入联系人姓名3" /></h><br>'
					+ '<h style="position:relative;top:90px;">联系方式3:&nbsp<input type="text" name="contactsPhone3" id="contactsPhone3" placeholder="输入联系方式3" /></h><br>'
					+ '<h style="position:relative;top:100px;">联系人姓名4:<input type="text" name="contactsName4" id="contactsName4" placeholder="输入联系人姓名4" /></h><br>'
					+ '<h style="position:relative;top:110px;">联系方式4:&nbsp<input type="text" name="contactsPhone4" id="contactsPhone4" placeholder="输入联系方式4称" /></h><br>'
					+ '<h style="position:relative;top:120px;">联系人姓名5:<input type="text" name="contactsName5" id="contactsName5" placeholder="输入联系人姓名5" /></h><br>'
					+ '<h style="position:relative;top:130px;">联系方式5:&nbsp<input type="text" name="contactsPhone5" id="contactsPhone5" placeholder="输入联系方式5" /></h><br>'
					+'<div style="position:relative;top:140px;color:red"  id="jg"></div>'
					+ '<br><input style="position:relative;top:150px;" type="button"  onClick="khtj()"  value="确认"  id="anniu"  $nbsp,$nbsp/> '
					+ '</center></form>'
							});
					});
						kehu();
					});
});
function khtj() {
	var customerAddress = $("#customerAddress").val();
	var customerName = $("#customerName").val();
	var phone1 = $("#contactsPhone1").val();
	var phone2 = $("#contactsPhone2").val();
	var phone3 = $("#contactsPhone3").val();
	var phone4 = $("#contactsPhone4").val();
	var phone5 = $("#contactsPhone5").val();
	if (customerAddress != "" && customerName != "") {
		if (phone1.length == 11  || phone1.length == 13 ) {
			// 返回后台
			// alert($("#customerName").attr("value"));
			//$("#jg").hide();
//			alert($("#kehuzj111").serialize());
			$.ajax({
				type : 'post',
				data : $("#kehuzj111").serialize(),// 根表单ID对应
				async : false,
				url : "kehuzengjia123.do", // 后台对应
				dataType : 'json',
				success : function(data) {
					// alert("1");
					if (data.result == "error") {
						 alert("客户名已存在");
						$("#jg").html("客户名存在");
					} else {
						layer.closeAll();
						kehupage();
						kehuselect();
					}
				}
			});
		} else {
//			alert("输入的号码有误");
//			alert(phone1.length);
			$("#jg").html("输入号码长度有误");
		}
	} else {
//		alert("客户名和地址不能为空");
		$("#jg").html("客户名和地址不能为空");

	}

}
// 客户修改
function kehuxiugai() {
	// 返回后台
	$.ajax({
		type : 'post',
		data : $("#kehuxg").serialize(),// 根表单ID对应
		async : false,
		url : "xiugai.do", // 后台对应
		dataType : 'json',
		success : function(data) {
			// alert("1");
			layer.closeAll();
			kehupage();
			kehuselect();
		}
	});
}
// 客户删除
function kehushanchu() {
	// 返回后台
	$.ajax({
		type : 'post',
		data : $("#kehusc").serialize(),// 根表单ID对应
		async : false,
		url : "customerdel.do", // 后台对应
		dataType : 'json',
		success : function(data) {
			layer.closeAll();
			kehupage();
			kehuselect();
		}
	});
}

function kehu() {
	kehupage();
	$("#page").html("1");
	kehuselect();
}
function kehupage() {
	$.ajax({
		type : 'post',
		data : '',
		async : false,
		url : "kehunumber.do",
		dataType : 'json',
		success : function(data) {
			// alert(data.aaa);
			$("#number").html(data.aaa);
		}
	});
}
function kehushangyiye() {
	var page = $("#page").html();
	if (page == 1) {
		alert("已经是第一页了");
	} else {
		page = page - 1;
		$("#page").html(page);
		kehuselect();
	}
}
function kehuxiayiye() {
	var page = $("#page").html();
	var number = $("#number").html();
	var zong = parseInt(number / 5);
	if (!(number % 5)) {
	} else {
		zong++;
	}
	if (page == zong || number == 0) {
		alert("已经是最后一页了");
	} else {
		page++;
		$("#page").html(page);
		kehuselect();
	}
}
function kehuselect() {
	$.ajax({
		type : 'post',
		data : {"customerName" : $(".sousuo").val(),"page" : $("#page").html()},
		url : "kehufind.do",
		dataType : 'json',
		success : function(data) {
				if (data.length == 0) {
					$(".tou2").html("暂无记录");
				} else {
					$(".tou2").html("");
					$(".tou2").append("<table class='altrowstable' style='width:840px'>");
					$(".tou2").append("<tr>"
						+ "<th scope='col' style='width: 250px; '><center>客户名称</center></th>"
						+ "<th scope='col' style='width: 250px; '><center>客户地址</center></th>"
						+ "<th scope='col' style='width: 150px; '><center>创建时间</center></th>"
						+ "<th scope='col' style='width: 250px; '><center>联系人姓名</center></th>"
						+ "<th scope='col' style='width: 200px; '><center>联系方式</center></th>"
						+ "<th scope='col' style='width: 250px; '><center>其他联系人</center></th>"
						+ "<th scope='col' style='width: 100px; '><center>修改</center></th>"
						+ "<th scope='col' style='width: 100px; '><center>删除</center></th>"
						+ "</tr>");

			for ( var i = 0; i < data.length; i++) {
				$(".tou2").append("<tr>"
					+ " <td class='row' id='name'><center>"+ data[i].customerName+ "</center></td>"
					+ " <td class='row' id='status'><center>"+ data[i].customerAddress+ "</center></td>"
					+ " <td class='row' id='time'><center>"+ data[i].createTime+ "</center></td>"
					+ " <td class='row' id='name1'><center>"+ data[i].contactsName1+ "</center></td>"
					+ " <td class='row' id='phone1'><center>"+ data[i].contactsPhone1+ "</center></td>"
					+ " <td class='row' id='"+ i+ "' name='ck' ><center><img src='images/1c.png' style='width:20px; heigth:20px;' ></center></td>"
					+ " <td class='row' id='"+ i+ "' name='xiugai'><center><img src='images/mod.gif'  ></center></td>"
					+ " <td class='row' id='"+ i+ "' name='shanchu'><center><img src='images/del.gif'></center></td>"
					+ " </tr>");
						}
				$(".tou2").append("</table>");
				$(".tou2").append("<div style='height:15px'></div>");
				$("td[name='ck']").click(function(){
					var id=this.id;
					layer.open({
						type:1,
						skin:'layui-layer-demo',
						area:['600px','170px'],
						shadeClose:true,
						content:'<form id="" method="post" >'
									+'<center><table >'
									+'<tr><th>联系人姓名</th>'
									+'<td>'+data[id].contactsName1+'</td>'
									+'<td>'+data[id].contactsName2+'</td>'
									+'<td>'+data[id].contactsName3+'</td>'
									+'<td>'+data[id].contactsName4+'</td>'
									+'<td>'+data[id].contactsName5+'</td></tr>'
									
									+'<tr><th>联系方式</th>'
									+'<td style="width:70px;">'+data[id].contactsPhone1+'</td>'
									+'<td style="width:70px;">'+data[id].contactsPhone2+'</td>'
									+'<td style="width:70px;">'+data[id].contactsPhone3+'</td>'
									+'<td style="width:70px;">'+data[id].contactsPhone4+'</td>'
									+'<td style="width:70px;">'+data[id].contactsPhone5+'</td></tr><br>'
									+'</table>'
									+'<br><input class="soubutton" type="button" value="关闭" name="关闭" onClick="gb()" /></center>'
							});
							
						});
						$("td[name='shanchu']").click(function() {
							var id = this.id;
								layer.open({
									type : 1,
									skin : 'layui-layer-demo',
									area : [ '300px','100px' ],
									shadeClose : true,
									content :'<form id="kehusc" method="post" >'
										+'<input type="hidden"; name="id" value="'+data[id].customerId+'" />'
										+'<center><input style="position:relative;top:10px;" class="scbutton" type="button" value="确认删除" onClick="kehushanchu()" >&nbsp&nbsp'
										+'<input style="position:relative;top:10px;" class="scbutton" type="button" value="取消删除"  onClick="gb()"></center>'
										+'</form>'
										});
									});

						$("td[name='xiugai']")
								.click(
										function() {
											var id = this.id;
											layer
													.open({
														type : 1,
														skin : 'layui-layer-demo',
														area : [ '300px',
																'500px' ],
														shadeClose : true,
														content : '<form class="tan" id="kehuxg" method="post" >'
															+'<input type="hidden"; style="border:0px" name="id" value="'+data[id].customerId+'">'
															+ '<center><h style="position:relative;top:20px;">客户名称:&nbsp <input type="text" value="'+ data[id].customerName+'" name="customerName" id="customerName" placeholder="输入客户名称" /></h><br>'
															+ '<h style="position:relative;top:30px; ">客户地址:&nbsp <input type="text"  value="'+ data[id].customerAddress+'" name="customerAddress" id="customerAddress" placeholder="输入客户地址" /></h><br>'
															+ '<h style="position:relative;top:40px;">联系人姓名1:<input type="text" value="'+ data[id].contactsName1+'" name="contactsName1" id="contactsName1" placeholder="输入联系人姓名1" /></h><br>'
															+ '<h style="position:relative;top:50px;">联系方式1:&nbsp<input type="text" value="'+ data[id].contactsPhone1+'" name="contactsPhone1" id="contactsPhone1" placeholder="输入联系方式1" /></h><br>'
															+ '<h style="position:relative;top:60px;">联系人姓名2:<input type="text" value="'+ data[id].contactsName2+'" name="contactsName2" id="contactsName2" placeholder="输入联系人姓名2" /></h><br>'
															+ '<h style="position:relative;top:70px;">联系方式2:&nbsp<input type="text" value="'+ data[id].contactsPhone2+'" name="contactsPhone2" id="contactsPhone2" placeholder="输入联系方式2" /></h><br>'
															+ '<h style="position:relative;top:80px;">联系人姓名3:<input type="text" value="'+ data[id].contactsName3+'" name="contactsName3" id="contactsName3" placeholder="输入联系人姓名3" /></h><br>'
															+ '<h style="position:relative;top:90px;">联系方式3:&nbsp<input type="text" value="'+ data[id].contactsPhone3+'" name="contactsPhone3" id="contactsPhone3" placeholder="输入联系方式3" /></h><br>'
															+ '<h style="position:relative;top:100px;">联系人姓名4:<input type="text" value="'+ data[id].contactsName4+'" name="contactsName4" id="contactsName4" placeholder="输入联系人姓名4" /></h><br>'
															+ '<h style="position:relative;top:110px;">联系方式4:&nbsp<input type="text" value="'+ data[id].contactsPhone4+'" name="contactsPhone4" id="contactsPhone4" placeholder="输入联系方式4称" /></h><br>'
															+ '<h style="position:relative;top:120px;">联系人姓名5:<input type="text" value="'+ data[id].contactsName5+'" name="contactsName5" id="contactsName5" placeholder="输入联系人姓名5" /></h><br>'
															+ '<h style="position:relative;top:130px;">联系方式5:&nbsp<input type="text" value="'+ data[id].contactsPhone5+'" name="contactsPhone5" id="contactsPhone5" placeholder="输入联系方式5" /></h><br>'
															+'<div style="position:relative;top:140px;color:red"  id="jg"></div>'
															+ '<br><input style="position:relative;top:150px;" type="button"  onClick="kehuxiugai()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/> '
															+ '</center></form>'
													});

										});

					}
				},
				error : function(data) {
					alert("错误");
				}

			});

	// $("#version").css("background","#27a2e6");
	event.stopPropagation();

}
//关闭查看联系人弹窗
function gb(){
	layer.closeAll();
}
//function kehufind() {
//	$.ajax({
//		type : 'post',
//		data : {"customerName" : $(".sousuo").val(),"page" : $("#page").html()},
//		url : "kehufind.do",
//		dataType : 'json',
//		success : function(data) {
//			if (data.length == 0) {
//				$(".tou2").html("暂无记录");
//			} else {
//				$(".tou2").html("");
//				$(".tou2").append("<table class='hovertable' style='width:840px'>");
//				$(".tou2").append("<tr>"
//					+ "<th scope='col' style='width: 250px; '><center>客户名称</center></th>"
//					+ "<th scope='col' style='width: 250px; '><center>客户地址</center></th>"
//					+ "<th scope='col' style='width: 150px; '><center>创建时间</center></th>"
//					+ "<th scope='col' style='width: 250px; '><center>联系人姓名</center></th>"
//					+ "<th scope='col' style='width: 200px; '><center>联系方式</center></th>"
//					+ "<th scope='col' style='width: 250px; '><center>其他联系人</center></th>"
//					+ "<th scope='col' style='width: 100px; '><center>修改</center></th>"
//					+ "<th scope='col' style='width: 100px; '><center>删除</center></th>"
//					+ "</tr>");
//
//		for ( var i = 0; i < data.length; i++) {
//			$(".tou2").append("<tr>"
//				+ " <td class='row' id='name'><center>"+ data[i].customerName+ "</center></td>"
//				+ " <td class='row' id='status'><center>"+ data[i].customerAddress+ "</center></td>"
//				+ " <td class='row' id='time'><center>"+ data[i].createTime+ "</center></td>"
//				+ " <td class='row' id='name1'><center>"+ data[i].contactsName1+ "</center></td>"
//				+ " <td class='row' id='phone1'><center>"+ data[i].contactsPhone1+ "</center></td>"
//				+ " <td class='row' id='"+ i+ "' name='ck' ><center><img src='images/girl.jpg' style='width:20px; heigth:20px;' ></center></td>"
//				+ " <td class='row' id='"+ i+ "' name='xiugai'><center><img src='images/mod.gif'  ></center></td>"
//				+ " <td class='row' id='"+ i+ "' name='shanchu'><center><img src='images/del.gif'></center></td>"
//				+ " </tr>");
//					}
//			$(".tou2").append("</table>");
//			$(".tou2").append("<div style='height:15px'></div>");
//			$("td[name='ck']").click(function(){
//				var id=this.id;
//				layer.open({
//					type:1,
//					skin:'layui-layer-demo',
//					area:['600px','170px'],
//					shadeClose:true,
//					content:'<form id="" method="post" >'
//								+'<center><table >'
//								+'<tr><th>联系人姓名</th>'
//								+'<td>'+data[id].contactsName1+'</td>'
//								+'<td>'+data[id].contactsName2+'</td>'
//								+'<td>'+data[id].contactsName3+'</td>'
//								+'<td>'+data[id].contactsName4+'</td>'
//								+'<td>'+data[id].contactsName5+'</td></tr>'
//								
//								+'<tr><th>联系方式</th>'
//								+'<td style="width:70px;">'+data[id].contactsPhone1+'</td>'
//								+'<td style="width:70px;">'+data[id].contactsPhone2+'</td>'
//								+'<td style="width:70px;">'+data[id].contactsPhone3+'</td>'
//								+'<td style="width:70px;">'+data[id].contactsPhone4+'</td>'
//								+'<td style="width:70px;">'+data[id].contactsPhone5+'</td></tr><br>'
//								+'</table>'
//								+'<br><input class="soubutton" type="button" value="关闭" name="关闭" onClick="gb()" /></center>'
//						});
//						
//					});
//					$("td[name='shanchu']").click(function() {
//						var id = this.id;
//							layer.open({
//								type : 1,
//								skin : 'layui-layer-demo',
//								area : [ '300px','100px' ],
//								shadeClose : true,
//								content :'<form id="kehusc" method="post" >'
//									+'<input type="hidden"; name="id" value="'+data[id].customerId+'" />'
//									+'<center><input style="position:relative;top:10px;" class="scbutton" type="button" value="确认删除" onClick="kehushanchu()" >&nbsp&nbsp'
//									+'<input style="position:relative;top:10px;" class="scbutton" type="button" value="取消删除"  onClick="gb()"></center>'
//									+'</form>'
//									});
//								});
//
//					$("td[name='xiugai']")
//							.click(
//									function() {
//										var id = this.id;
//										layer
//												.open({
//													type : 1,
//													skin : 'layui-layer-demo',
//													area : [ '300px',
//															'500px' ],
//													shadeClose : true,
//													content : '<form class="tan" id="kehuxg" method="post" >'
//														+'<input type="hidden"; style="border:0px" name="id" value="'+data[id].customerId+'">'
//														+ '<center><h style="position:relative;top:20px;">客户名称:&nbsp <input type="text" value="'+ data[id].customerName+'" name="customerName" id="customerName" placeholder="输入客户名称" /></h><br>'
//														+ '<h style="position:relative;top:30px; ">客户地址:&nbsp <input type="text"  value="'+ data[id].customerAddress+'" name="customerAddress" id="customerAddress" placeholder="输入客户地址" /></h><br>'
//														+ '<h style="position:relative;top:40px;">联系人姓名1:<input type="text" value="'+ data[id].contactsName1+'" name="contactsName1" id="contactsName1" placeholder="输入联系人姓名1" /></h><br>'
//														+ '<h style="position:relative;top:50px;">联系方式1:&nbsp<input type="text" value="'+ data[id].contactsPhone1+'" name="contactsPhone1" id="contactsPhone1" placeholder="输入联系方式1" /></h><br>'
//														+ '<h style="position:relative;top:60px;">联系人姓名2:<input type="text" value="'+ data[id].contactsName2+'" name="contactsName2" id="contactsName2" placeholder="输入联系人姓名2" /></h><br>'
//														+ '<h style="position:relative;top:70px;">联系方式2:&nbsp<input type="text" value="'+ data[id].contactsPhone2+'" name="contactsPhone2" id="contactsPhone2" placeholder="输入联系方式2" /></h><br>'
//														+ '<h style="position:relative;top:80px;">联系人姓名3:<input type="text" value="'+ data[id].contactsName3+'" name="contactsName3" id="contactsName3" placeholder="输入联系人姓名3" /></h><br>'
//														+ '<h style="position:relative;top:90px;">联系方式3:&nbsp<input type="text" value="'+ data[id].contactsPhone3+'" name="contactsPhone3" id="contactsPhone3" placeholder="输入联系方式3" /></h><br>'
//														+ '<h style="position:relative;top:100px;">联系人姓名4:<input type="text" value="'+ data[id].contactsName4+'" name="contactsName4" id="contactsName4" placeholder="输入联系人姓名4" /></h><br>'
//														+ '<h style="position:relative;top:110px;">联系方式4:&nbsp<input type="text" value="'+ data[id].contactsPhone4+'" name="contactsPhone4" id="contactsPhone4" placeholder="输入联系方式4称" /></h><br>'
//														+ '<h style="position:relative;top:120px;">联系人姓名5:<input type="text" value="'+ data[id].contactsName5+'" name="contactsName5" id="contactsName5" placeholder="输入联系人姓名5" /></h><br>'
//														+ '<h style="position:relative;top:130px;">联系方式5:&nbsp<input type="text" value="'+ data[id].contactsPhone5+'" name="contactsPhone5" id="contactsPhone5" placeholder="输入联系方式5" /></h><br>'
//														+'<div style="position:relative;top:140px;color:red"  id="jg"></div>'
//														+ '<br><input style="position:relative;top:150px;" type="button"  onClick="kehuxiugai()"  value="确认"  id="anniu" name="确认" $nbsp,$nbsp/> '
//														+ '</center></form>'
//												});
//
//									});
//				}
//		},
//			error : function(data) {
//					// alert("错误");
//				}
//			});
//	event.stopPropagation();
//}