<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'MyJsp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>  
        <script type="text/javascript" src="js/easy_validator.pack.js"></script>  
        <script type="text/javascript" src="js/jquery.bgiframe.min.js"></script>  
        <link href="css/validate.css" rel="stylesheet" type="text/css" />  
    <script type="text/javascript">  
        $(document).ready(function(){  
                $("#emailinfo").click(function(){  
                var $txtinfo=$("#emailinfo").val();  
                //alert("文本框中的信息是："+$txtinfo);  
                if(this.value=="请输入邮箱"){this.value=""};  
                if(this.value!="请输入邮箱"){this.value=this.value};  
            });  
        });   
    </script>  
  </head>  
    
  <body>  
    <font color="red">当鼠标移动到文本框上面的时候,就会显示提示信息 .嘿嘿 快来试试吧  很好玩哦~~~ </font><br><br>  
        姓   名:<input type="text" id="txtinfo" name="txt" value="请输入用户名"   
        reg="^\w{2}\d+$" tip="两个字母+数字,如aw0100" onclick="this.value=''"/><br><br>         
    邮  箱:<input type="text" id="emailinfo" name="email" value="请输入邮箱"    
        reg="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" tip="格式如：admin@qq.com" onclick="this.value=''"/><br>   
  </body>
</html>
