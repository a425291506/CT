<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>修改密码</title>
<link href="css/zhuce.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-2.0.0.js"></script>
<script type="text/javascript" src="js/change_password.js"></script>
<style type="text/css">
.kuang {
	width: 100%;
	height: 100%;
	background-image: url('images/beijing.jpg')
}
</style>

</head>
<body>
	<div class="kuang">
		<h1 class="zhuce">修改密码</h1>
		<input type="hidden" name="UserId" />
		<div class="biaodan" style="height:260px;">
			<form method="post" id="change" style="position:relative;top:30px;">
				<div class="text1">
					旧的密码:<input type="text" class="text" name="UserName" id="old_pass">
			<span class='xm' id="xm"> <img	src="images/success.png" style="height:17px;"></span> 
			<span class='xm1' id="xm1"><img src="images/error.png" style="height:17px;"></span> 
			</div>
				<br>
				<div class="text1">
					新的密码:<input type="password" class="text" name="Password"	id="new_pass">
			 <span class='xm' id="ym"><img src="images/success.png" style="height:17px;"></span>
			 <span class='xm1' id="ym1"><img src="images/error.png"	style="height:17px;">
			  </span>
				</div>
				<br>
				<div class="text1">
					确认密码:<input type="password" class="text" name="Password"	id="confirm_pass">
			<span class='xm' id="cm"><img src="images/success.png" style="height:17px;">
		    </span>
		    <span class='xm1' id="cm1"><img src="images/error.png" style="height:17px;"> 
		    </span>
				</div>
				<input type="hidden" name="userId"  />
			<center><input type="button" class="button" style="position:relative;top:30px;" value="确认"	id="change_password"> 
			<a href="index.jsp"><input style="position:relative;top:30px;" type="button" class="button" name="确认" value="登录"> </a>
				</center></form></div>
		</div>
</body>
</html>