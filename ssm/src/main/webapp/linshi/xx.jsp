<%--<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" type="image/ico" href="/images/favicon.ico" />
    <title>Login</title>
    <link href="styles.css" type="text/css" media="screen" rel="stylesheet" />
    <link href="jquery-ui-1.8.16.custom.css" rel="stylesheet">
    <script src="jss/jquery-1.6.2.min.js"></script>
    <script src="jss/jquery-ui-1.8.16.custom.min.js"></script>
    <script type="text/javascript" src="jss/jquery.keyboard.extension-typing.js"></script>
    <link type="text/css" href="keyboard.css" rel="stylesheet" />
    <script type="text/javascript" src="jss/jquery.keyboard.js"></script>
 
    
	<script type="text/javascript">
        $(document).ready(function() {
             $("#user_password").keyboard({
                openOn: null,
                stayOpen: true,
                layout: 'qwerty'
            }).addTyping();
            $("#passwd").click(function() {
                $("#user_password").getkeyboard().reveal();
            });

            $(".logininput").blur(function() {
                if ($(this).val() == "") {
                    $(this).css("border-color", "red");
              }else {
                                    $(this).css("border-color", "#D9D6C4");}
            });
            $("#loginbtn").click(function() {
                var k = 0;
                var ajaxhtml = "";
                $(".logininput").each(function(i, obj) {
                    if ($(obj).val().trim() == "") {
                        k++;
                        $(this).css("border-color", "red");
                        $(this).focus();
                        return false;
                    }
                });
                if (k != 0) return;
                ajaxhtml = $("#loginbtn").html();
                $("#loginbtn").html("Loading....  <img src='loading.gif' alt='Announcement' /> ");
                $("#loginbtn").attr("disabled", "disabled");

            });
        });
        
    </script>

    
</head>
<body id="login">
    <div id="wrappertop">
    </div>
    <div id="wrapper">
        <div id="content">
            <div id="header">
                <h1>
                    <a href="">
                       <!--؅׃Logo <img src="logo.png"   height="50"  width="100"  alt="logo">--></a></h1>
            </div>
            <div id="darkbanner" class="banner320">
                <h2>
                    Login  System</h2>
            </div>
            <div id="darkbannerwrap">
            </div>
            <form name="form1" method="post" action="login1.do">
            <fieldset class="form">
                <p>
                    <label class="loginlabel" for="user_name">
                        UserName:</label>
                    <input class="logininput ui-keyboard-input ui-widget-content ui-corner-all" name="UserName"
                        id="user_name" type="text" value="" />
                </p>
                <p>
                    <label class="loginlabel" for="user_password">
                        Password:</label>
                    <span>
                        <input class="logininput ui-keyboard-input ui-widget-content ui-corner-all"   name="Password" id="user_password" type="password" />
                        <img  id="passwd" class="tooltip" alt="Click to open the virtual keyboard" title="Click to open the virtual keyboard"  src="keyboard.png" />
                     </span>
                </p>
                <!-- <input type="submit" class="button" name="注册" value="注册"> <input
						type="submit" class="button" name="注册" value="登录"> -->
                <!-- <button id="loginbtn" type="button" class="positive" name="Submit">
                    <img src="key.png" alt="Announcement" />Login</button> -->
                    <button id="loginbtn" type="Submit" class="positive" name="注册" value="111">
                    <img src="key.png" alt="Announcement" />Login</button>
                <ul id="forgottenpassword">
                    <li class="boldtext">|</li>
                    <li>
                        <input id="remember" type="checkbox" name="remember" id="rememberMe"><label for="rememberMe">Remember
                            me</label></li>
                </ul>
            </fieldset></form>
        </div>
    </div>
    <div id="wrapperbottom_branding">
        <div id="wrapperbottom_branding_text">
            Language:<a href="#" style="text-decoration: none">Japanese </a>| <a href="#" style="text-decoration: none">
                English</a></div>
    </div>
    
</body>
</html>
  --%>