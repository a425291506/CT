<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>注册</title>
<link href="css/zhuce.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-2.0.0.js"></script>
<script type="text/javascript" src="js/zhuce.js"></script>
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
		<h1 class="zhuce">注册</h1>
		<div class="biaodan">
			<form method="post" id="registerUser">
				<center>
					<br> <select name="userRole">
						<option>开发人员</option>
						<option>销售人员</option>
					</select><br> <br>
				</center>
				<div class="text1">
					员工姓名:<input type="text" class="text" name="UserName" id="userName1">
			<span class='xm' id="xm"> <img	src="images/success.png" style="height:17px;"></span> 
			<span class='xm1' id="xm1"><img src="images/error.png" style="height:17px;"></span> 
			</div>
				<br>
				<div class="text1">
					员工密码:<input type="password" class="text" name="Password"	id="Password">
			 <span class='xm' id="ym"><img src="images/success.png" style="height:17px;"></span>
			 <span class='xm1' id="ym1"><img src="images/error.png"	style="height:17px;">
			  </span>
				</div>
				<br>
				<div class="text1">
					重复密码:<input type="password" class="text" name="Password1"	id="Password1">
			<span class='xm' id="cm"><img src="images/success.png" style="height:17px;">
		    </span>
		    <span class='xm1' id="cm1"><img src="images/error.png" style="height:17px;"> 
		    </span>
				</div>
				<br>
				<div class="text1">
					员工工号:<input type="text" class="text" name="JobNumber" id="JobNumber">
			 <span class='xm' id="gh"><img src="images/success.png"	style="height:17px;">
			 </span>
			 <span	class='xm1' id="gh1"><img src="images/error.png" style="height:17px;">
			  </span>
				</div>
				<br>
				<div class="text1">
					联系方式:<input type="text" class="text" name="PhoneNumber" id="PhoneNumber">
			 <span class='xm' id="lx"><img src="images/success.png" style="height:17px;">
			 </span>
			 <span id="bunengkongbai">
			 <span	class='xm1' id="lx1"><img src="images/error.png" style="height:17px;">
			  </span> </span>
				</div>
				<br>
				<div class="text2">
			<input type="button" class="button" name="确认" value="确认"	id="registerUser1"> 
			<a href="index.jsp"><input type="button" class="button" name="确认" value="登录"> </a>
				</div>
			</form>
		</div>
	</div>
</body>
</html>