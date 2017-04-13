$(function() {
	// $("#registerUser1").bind("click",zcp);
	// $("img").hide();
	var passwd = $("#Password").val();
	var repass = $("#Password1").val();
	var jobNumber = $("#JobNumber").val();
	var phoneNumber = $("#PhoneNumber").val();
	var userName = $("#userName1").val();
	// return false;

	// if(passwd==''||repass==''||jobNumber==''||phoneNumber==''||userName==''){
	// // $("#registerUser").hide();
	// $(".ziti").show();
	// // $(".ziti").hide();
	// return false;
	// }
	// else{
	// if(passwd!=repass){
	// // $("#registerUser").hide();
	// $("#mimabuyizhi").html("密码不一致");
	// return false;
	// }else{
	// $.ajax({
	// type:'post',
	// data:$("#registerUser").serialize(),
	// async:false,
	// url:"register.do",
	// dataType:'json',
	// success:function(data){
	// alert("注册成功");
	// // window.open("index.jsp");
	// $("#registerUser").hide();
	// $(".biaodan").append("<div class='button1'>注册成功<br><br><a
	// href='index.jsp'><input type='button' value='登录'
	// class='anniu'></a></div>");
	// }
	// });
	// }
	// }
	// }
	$("#xm").hide();
	$("#xm1").hide();
	$("#ym").hide();
	$("#ym1").hide();
	$("#cm").hide();
	$("#cm1").hide();
	$("#gh").hide();
	$("#gh1").hide();
	$("#lx").hide();
	$("#lx1").hide();

	$("#userName1").on("blur", function() {
		var userName = $("#userName1").val();
		if (userName == '') {
			$('#xm').hide();
			$('#xm1').show();
			return false;
		} else {
			$('#xm1').hide();
			$('#xm').show();
		}
	}).on("focus", function() {
		$("#xm").hide();
		$("#xm1").hide();
	});

	$("#Password").on("blur", function() {
		var userName = $("#Password").val();
		if (userName == '') {
			$('#ym').hide();
			$('#ym1').show();
		} else {
			$('#ym1').hide();
			$('#ym').show();
		}
	}).on("focus", function() {
		$("#ym").hide();
		$("#ym1").hide();
	});
//$("#Password1").on("blur", function() {}).on("focus", function() {});
	//鼠标的聚焦  
	$("#Password1").on("blur", function() {
		var userName = $("#Password1").val();
		var userName1 = $("#Password").val();
		if (userName == '' || userName1 == '' || userName != userName1) {
			$('#cm').hide();
			$('#cm1').show();
			$('#ym').hide();
			return false;
		} else {
			$('#cm1').hide();
			$('#cm').show();
		}
	}).on("focus", function() {
		$("#cm").hide();
		$("#cm1").hide();
	});

	$("#JobNumber").on("blur", function() {
		var userName = $("#JobNumber").val();
		if (userName == '') {
			$('#gh').hide();
			$('#gh1').show();
		} else {
			$('#gh1').hide();
			$('#gh').show();
		}
	}).on("focus", function() {
		$("#gh").hide();
		$("#gh1").hide();
	});

	$("#PhoneNumber").on("blur", function() {
		var userName = $("#PhoneNumber").val();
		if (userName == '') {
			$('#lx').hide();
			$('#lx1').show();
		} else {
			$('#lx1').hide();
			$('#lx').show();
		}
	}).on("focus", function() {
		$("#lx").hide();
		$("#lx1").hide();
	});
	$("#registerUser1").on("click", zc);
	//点击确认按钮 绑定事件zc
});
function zc() {
	var numg = $(this).parents("#registerUser").find(".xm:hidden").length;
	//xm为class的属性
	if (numg == 0) {
		$.ajax({
			type : 'post',
			data : $("#registerUser").serialize(),
			async : false,
			url : "register.do",
			dataType : 'json',
			success : function(data) {
				$("#registerUser").hide();
				$(".biaodan").append("<div class='button1'>注册成功<br><br><a href='index.jsp'><input type='button' value='登录' class='anniu'></a></div>");
					}
				});
	} else {
		alert("必填信息不能空");
	}
}