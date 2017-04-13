<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>某某某管理系统</title>
<link href="css/index.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-2.0.0.js"></script>
<style type="text/css">
.kuang {
	width: 100%;
	height: 100%;
	background-image: url('images/beijing.jpg');
}
</style>
</head>
<body>
	<div class="kuang">
		<h class="biaoti">回单维护管理系统</h>
		<div class="login">
			<center>
				<form action="login.do" method="post">
					<br>
					<br> 用户名:<input type="text" class="text" name="UserName">
					<br>
					<br>密 码:<input type="password" class="text" name="Password">
					<br>
					<br>
					<select name="UserRole"><option>开发人员</option>
						<option>销售人员</option></select> <br>
					<br>
					<input type="submit" class="button" name="注册" value="登录">
					<input type="submit" class="button" name="注册" value="注册"> 
				</form>
			</center>
		</div>
	</div>
</body>

</html>
