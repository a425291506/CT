/**
 * 
 */

//引用jquery插件，引用layer插件（layer用来做弹出框)
document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
//页面加载完成
$(document).ready(function(){
	var i=1;
	var a=1;
	var b=1;
	var jihua=1;
	//获取id为 xiangmu1,renyuan1,kehu1的id并把他们隐藏
	$("#xiangmu1").hide();
	$("#renyuan1").hide();
	$("#kehu1").hide();
	//获取id为kehu的点击事件
	$("#tuichu").click(function(){
		window.location.href="index.jsp";
	});
	$("#xiugaimm").click(function(){
		window.location.href="change_password.jsp";
	});
	$("#kehu").click(function(){
		if(b==1){
			//将id为kehu的那块高度变为140px;slow表示慢，会有个滑动效果
		    $("#kehu").animate({height:"100px"},"slow");
		    //修改id为客户的css样式 设置背景颜色。
		    $("#kehu").css("background","#0088a8");
		    //显示id为kuhu1；
		    $("#kehu1").show();
			b++;
			}else if(b==2){
				//吧id为客户从140px变为50px；
				$("#kehu").animate({height:"50px"},"slow",function(){
					//重新隐藏
					$("#kehu1").hide();
					//变换颜色
					 $("#kehu").css("background","#27a2e6");
				});
				
			
				b--;
			}
	});
	
	//id为renyuan的点击事件
	$("#renyuan").click(function(){
		if(a==1){
			//如上所述
		    $("#renyuan").animate({height:"100px"},"slow");
		    $("#renyuan").css("background","#0088a8");
		    $("#renyuan1").show();
			a++;
			}else if(a==2){
				
				$("#renyuan").animate({height:"50px"},"slow",function(){
					$("#renyuan1").hide();
					 $("#renyuan").css("background","#27a2e6");
				});
				
			
				a--;
			}
	});
	//id为xiangmu的点击事件
	$("#xiangmu").click(function(){
		//如上所述
		
		if(i==1){
			
		    $("#xiangmu").animate({height:"260px"},"slow");
		    $("#xiangmu").css("background","#0088a8");
		    $("#xiangmu1").show();
			i++;
			//写class为kuang3的html页面
			
				}else if(i==2){
				
				$("#xiangmu").animate({height:"50px"},"slow",function(){
					$("#xiangmu1").hide();
					 $("#xiangmu").css("background","#27a2e6");
				});
				
				$(".kuang3").html("");
				i--;
			}
	});
	
	
});

