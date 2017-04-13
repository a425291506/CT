//$(document).ready(function(){
//	alert("111");
//	$("#change_password").click(function(){
//		$.ajax({
//			type:'post',
//			data:$("#change").serialize(),
//			async : false,
//			url:"change_password.do",
//			dataType:'json',
//			success:function(data){
//				$(".biaodan").append("<div class='button1'>注册成功<br><br><a href='index.jsp'>" +
//						"<input type='button' value='登录' class='anniu'></a></div>");
//			}
//		});
//	});
//});
$(document).ready(function(){
	$("#change_password").click(function(){
		alert("111");
		$.ajax({
				type:'post',
				data:$("#change").serialize(),
		    	url:"change_pass.do",
		    	dataType:'json',
		    	success:function(data){
				alert("2222");
				$(".biaodan").append("<div class='button1'>注册成功<br><br><a href='index.jsp'>" +
						"<input type='button' value='登录' class='anniu'></a></div>");
			},
				error: function () {
					alert('fail');
          }
		});
	});
});