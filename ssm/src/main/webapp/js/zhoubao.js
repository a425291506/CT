document.write("<script type='text/javascript' src='js/jquery-2.0.0.js'></script>");
document.write("<script type='text/javascript'  src='layer/layer.js'></script>");
document.write("<script type='text/javascript' src='layer/extend/layer.ext.js'></script>");
$(document).ready(function(){
	
	$("#zhoubao").click(function(){				
		$(".kuang3").html("<div class='d1'></div><div class='tou1'></div><div class='tou2'></div><div class='tou3'></div>" );
	    $(".d1").append("<p class='font'>当前位置：项目管理--->项目周报</p>");
	    $(".tou3").html("<h style='color:#3786c7;font-weight:blod; font-size:16px'>总共有<h id='number'></h>条数据,每页显示5条数据</h>&nbsp;<input type='button' value='上一页'   onClick='zhoubaoshangyiye()' class='jihuabutton'>&nbsp<h id='page'>1</h>&nbsp<input type='button' value='下一页' onClick='zhoubaoxiayiye()'  class='jihuabutton'>");
	      
	    $.ajax({
        	type:'post',
			data:'',
			async:false,
			url:"project.do",
			dataType:'json',
			success:function(data){
//				$(".tou1").append("<div class='tianjiajihua' id='xjzb'>新建周报</div><h class='select'>选择项目:</h><select class='projectselect' onChange='zhoubao1()' name='project' id='project'></select><input class='sousuo' type='text'><div class='sousuobutton'>搜索</div>");	 
//				$(".tou1").append("<div class='tianjiajihua1' >选择客户:<select class='sousuos' onChange='project3()' name='project' id='project'></select></div><div class='sousuobutton' id='zengjia'>增加</div>");
				$(".tou1").append("<div class='tianjiajihua1' >选择项目:<select class='sousuos' onChange='zhoubao1()' name='project' id='project'></select></div><div class='sousuobutton' id='xjzb'>增加</div>");
				for(var i=0;i<data.length;i++){
					$("#project").append("<option>"+data[i].projectName+"</option>");	
				}	
	    
	    $("#xjzb").click(function(){
//	    	alert($("#project").val());
			layer.open({
				  type: 1,
				  skin: 'layui-layer-demo',
				  area: ['710px', '510px'], //宽高
				  shadeClose: true,
				  content: 
//					  	"<form id='xjzb_zhoubao' method='post'><br>"
//					    +"<center>完成情况:<input type='text';  style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='completion' id='completion' ></center><br><br>" 
//		    			+"<center>下周计划:<input type='text'; style='border:1px #000 solid;outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='nextPlan' id='nextPlan' ></center><br><br>" 		    			
//		    			+"<center>问题汇总:<input type='text'; style='border:1px #000 solid;outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='problemAll' id='problemAll'></center><br><br>" 
//		    			+" <input type='hidden' value="+$("#project").val()+" name='project'>"
//		    			+"<center><input type='button' style='background:#0066ff;color:#ffffff;width:70px;height:30px' value='添加' name='添加' class='tianjia' onClick='zhoubaotianjia()'></center>"
//		    			+"</form>"
			'<form id="xjzb_zhoubao" method="post"><br>'	
		    +'<input type="hidden" value='+$("#project").val()+' name="project">'
			+'<div class="plans">'
		    +'<div class="plan">'
		    +' <h2 class="plan-title">完成情况</h2>'
		    +'<p class="plan-price">建达<span></span></p>'
		    +' <ul class="plan-features">'
		    +'<li class="zhoubaozjj" style="position:relative;top:10px;" >提示:</li>'
		    +'<li class="zhoubaozj" style="position:relative;top:10px;" >1.已完成  2.进行中</li>'
		    +'<input type="text" style="position:relative;left:-20px;width:100px;top:20px;" placeholder="...请输入" name="completion" id="completion" >'
		    +' </ul>'
		    +' <div  style="width:83px;height:32px;"></div>'
		    +' </div>'
		    +' <div class="plan plan-tall">'
		    +' <h2 class="plan-title">下周计划</h2>'
		    +' <p class="plan-price">科技<span></span></p>'
		    +' <ul class="plan-features">'
//		    +'   <!--<li><strong>10</strong> users</li>'
//		    +'   <li><strong>Unlimited</strong> projects</li>'
//		    +'   <li><strong>20GB</strong> storage</li>-->'
		    +'	<textarea style="position:relative;left:-40px;width:175px;height:75px;" placeholder="...详细计划"  name="nextPlan" id="nextPlan" ></textarea>'
		    +'  </ul>'
		    +'  <input type="button" class="plan-button" value="确认提交" onClick="zhoubaotianjia()" />'
		    +' </div>'
		    +' <div class="plan">'
		    +'  <h2 class="plan-title">问题汇总</h2>'
		    +'  <p class="plan-price">集团<span></span></p>'
		    +'  <ul class="plan-features">'
		    +'  <textarea style="position:relative;left:-40px;width:175px;height:95px;" placeholder="...详细问题" name="problemAll" id="problemAll" ></textarea>'
		    +' </ul>'
		    +' </div>'
		    +'  </div>'
		    +'</form>'
		    +'<center><div id="zbjg" style="position:relative;top:-20px;color:red;"></div></center>'
				 });
			
		});
			}
        });
	   zhoubaopage();
	   
		zhoubao();
		
});
		  
});

function zhoubaoshanchu(){
	 $.ajax({
			type:'post',
			data:$("#shanchu_zhoubao").serialize(),
			url:"shanchu_zb.do",
			dataType:'json',
			success:function(data){
				 layer.closeAll();
				 zhoubaopage();
			     zhoubao();
			}
		});
}
function zhoubaoxiugai(){
	var com=$("#completion_xiugai").val();
	var next=$("#nextPlan_xiugai").val();
	var pro=$("#problemAll_xiugai").val();
//	alert(com);
//	alert(next);
//	alert(pro);
	if(com.trim() !="" && next.trim() !="" && pro.trim() !=""){
		if(com=="已完成" || com=="进行中" ){
			$.ajax({
				type:'post',
				data:$("#xiugai_zhoubao").serialize(),
				url:"xiugai_zb.do",
				dataType:'json',
				success:function(data){				
					layer.closeAll();
					zhoubaopage();
					zhoubao();
			}
		});
		}else{
			$("#zbjg1").html("请根据提示输入");
		}		
	}else{
		$("#zbjg1").html("必填项不能为空");
	}
}
function zhoubaotianjia(){
	if($("#completion").val().trim()!="" && $("#nextPlan").val().trim()!="" && $("#problemAll").val().trim()!=""){
		if($("#completion").val()=="已完成" || $("#completion").val()=="进行中" ){
			$.ajax({
				type:'post',
				data:$("#xjzb_zhoubao").serialize(),
	            url:"xinjian_zb.do",
				dataType:'json',
				success:function(data){
					 layer.closeAll();
					 zhoubaopage();
				     zhoubao();    
				}
			});	
		}else{
			$("#zbjg").html("请根据提示输入");
		}		
	}else{
		$("#zbjg").html("必填项不能为空");
	}
}
function zhoubao1(){
	zhoubaopage();
	$("#page").html("1");
	zhoubao();
}
function zhoubaopage(){
	 $.ajax({
     	type:'post',
			data:{"project":$("#project").val()},
			async:false,
			url:"zhoubaopage.do",
			dataType:'json',
			success:function(data){
				$("#number").html(data.num);
			}
			});
}
function zhoubaoshangyiye(){
	var page=$("#page").html();
	if(page==1){
		alert("已经是第一页了");
	}
	else{
		page=page-1;
		
		$("#page").html(page);
		zhoubao();
	}
}
function zhoubaoxiayiye(){	
	var page=$("#page").html();
	var number=$("#number").html();
	var zong= parseInt(number/5);
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
		zhoubao();	
	}
}

function zhoubao(){
	//alert("1");
	 $.ajax({
			type:'post',
			data:{"page":$("#page").html(),"project":$("#project").val()},
            url:"zhoubao.do",
			dataType:'json',
			success:function(data){
				if(data.length==0){
					$(".tou2").html("暂无记录");
				}
				else{$(".tou2").html("");
				$(".tou2").append("<table class='hovertable' style='width:840px'>");
	    	
				$(".tou2").append("<tr>" 
	    			+"		<th scope='col' style='width: 250px; '><center>完成情况</center></th>" 
	    			+"		<th scope='col' style='width: 250px; '><center>下周计划</center></th>" 
	    			+"		<th scope='col' style='width: 250px; '><center>问题汇总</center></th>" 
	    			+"		<th scope='col' style='width: 250px; '><center>创建时间</center></th>"
					+"		<th scope='col' style='width: 100px; '><center>修改</center></th>"
					+"		<th scope='col' style='width: 100px; '><center>删除</center></th> 	"		 			
					+"	</tr>");							    		    		
				for(var i=0;i<data.length;i++){	
				
					$(".tou2").append("<tr>"
					+"<td class='row'><center>"+data[i].completion+"</center></td>"
					+"<td class='row' id='"+i+"' name='xiazhou'><center><img style='position:relative;width:30px;height:16px;'  src='images/1a.png'></center></td>"
					+"<td class='row' id='"+i+"' name='wenti'><center><img style='position:relative;width:30px;height:16px;'  src='images/1b.png'></center></td>"
//					+"<td class='row'><center>"+data[i].nextPlan+"</center></td>"
//					+"<td class='row'><center>"+data[i].problemAll+"</center></td>"
					+"<td class='row'><center>"+data[i].createTime+"</center></td>"
					+"<td class='row' id='"+i+"' name='xiugai'><center><img src='images/mod.gif'></center></td>"
					+"<td class='row' id='"+i+"' name='shanchu''><center><img src='images/del.gif'></img></center></td>"
					+"</tr>"	);	
	    	
				}
				$(".tou2").append("</table>");	    		
				$(".tou2").append("<div style='height:15px'></div>");
				
	    	$("td[name='wenti']").click(function(){
	    		var id=this.id;
	    		layer.open({
	    			type:1,
	    			skin: 'layui-layer-demo',
					area: ['10', '325px'], //宽高
					shadeClose: true,  
				    content:'<h2 style="position:relative;top:5px;" >问题汇总</h2><br>'
				    	+'<textarea style="width:393px;height:190px;" >'+data[id].problemAll+'</textarea>'
				    	+'<center><input style="position:relative;top:10px;" type="button" class="zjbutton" value="确认" Onclick="gb()"></center>'
	    		});
	    	});  
	    	$("td[name='xiazhou']").click(function(){
	    		var id=this.id;
	    		layer.open({
	    			type:1,
	    			skin: 'layui-layer-demo',
					area: ['1', '325px'], //宽高
					shadeClose: true,  
				    content:'<h2 style="position:relative;top:5px;" >下周计划</h2><br>'
				    	+'<textarea style="width:393px;height:190px;" >'+data[id].nextPlan+'</textarea>'
				    	+'<center><input style="position:relative;top:10px;" type="button" class="zjbutton" value="确认" Onclick="gb()"></center>'
	    		});
	    	});
	    	$("td[name='xiugai']").click(function(){
	    		var id=this.id;
	    		layer.open({
					  type: 1,
					  skin: 'layui-layer-demo',
					  area: ['710px', '460px'], //宽高
					  shadeClose: true,  
					  content: 
//						  "<form id='xiugai_zhoubao' method='post'>"					  
//							+"<input type='hidden'; style='border:0px' name='planId_xiugai' value='"+data[id].planId+"' ><br><br>" 
//						    +"<center>完成情况:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='completion_xiugai' value='"+data[id].completion+"'></center><br><br>" 
//			    			+"<center>下周计划:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='nextPlan_xiugai' value='"+data[id].nextPlan+"'></center><br><br>" 
//			    			+"<center>问题汇总:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='problemAll_xiugai' value='"+data[id].problemAll+"'></center><br><br>" 
//			    			+"<center><input type='button' style='background:#0066ff;color:#ffffff;width:70px;height:30px' value='修改' name='修改' class='tianjia' onClick='zhoubaoxiugai()'></center>"
//			    			+"</form>"
						  '<form id="xiugai_zhoubao" method="post"><br>'	
						  +'<input type="hidden" name="weekId_xiugai" value="'+data[id].weekId+'" />'
						  +'<div class="plans">'
						  +'<div class="plan">'
						  +'<h2 class="plan-title">完成情况</h2>'
						  +'<input type="text" style="position:relative;top:30px;width:100px;height:20px;" name="completion_xiugai" id="completion_xiugai" value='+data[id].completion+' >'						  
						  +'<div style="width:175px;height:100px;"><p class="p1">提示:</p><br><p class="p">1.已完成  2.进行中</p></div>'
						  +'<div style="width:83px;height:32px;"></div>'
						  +'</div>'
						  +'<div class="plan plan-tall">'
						  +'<h2 class="plan-title">问题汇总</h2>'
						  +'<ul class="plan-features">'
						  +'<textarea style="position:relative;left:-40px;width:175px;height:145px;" name="problemAll_xiugai" id="problemAll_xiugai" >'+data[id].problemAll+'</textarea>'
						  +'</ul>'
						  +'<input type="button" onClick="zhoubaoxiugai()" value="修改" class="plan-button" />'
						  +'</div>'
						  +'<div class="plan">'
						  +'<h2 class="plan-title">下周计划</h2>'
						  +'<textarea style="width:175px;height:126px;" name="nextPlan_xiugai" id="nextPlan_xiugai" >'+data[id].nextPlan+'</textarea>'
						  +'<div style="width:175px;height:26px;"></div>'
//						  +'<div style="width:83px;height:32px;"></div>'
						  +'</div>'
						  +'</div>'
						  +'<center><div id="zbjg1" style="position:relative;top:-20px;color:red;"></div></center>'
					 });
	    	});
	    	
	    	
	    	$("td[name='shanchu']").click(function(){	
	    		var id=this.id;
	    		layer.open({
					  type: 1,
					  skin: 'layui-layer-demo',
					  area: ['300px', '100px'], //宽高
					  shadeClose: true,					  
//					  content: "<form id='shanchu_zhoubao' method='post'>"
//							+"<input type='hidden'; style='border:0px ' name='planId_shanchu' value='"+data[id].planId+"'  readonly><br><br>" 
//							  +"<center>完成情况:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='completion_shanchu' value='"+data[id].completion+"'></center><br><br>" 
//				    			+"<center>下周计划:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='nextPlan_shanchu' value='"+data[id].nextPlan+"'></center><br><br>" 
//				    			+"<center>问题汇总:<input type='text'; style='border:1px #000 solid; outline:none; BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: solid' name='problemAll_shanchu' value='"+data[id].problemAll+"'></center><br><br>" 
//				    			+" <center> &nbsp; &nbsp;<input type='text' value='你确定删除该数据么？' style='border:0px'></center><br>"
//			    			+"	<center><input type='button' style='background:#0066ff;color:#ffffff;width:70px;height:30px' value='删除' name='删除' class='tianjia' onClick='zhoubaoshanchu()'></center>"
//						  		+"</form>"
					  content:'<form id="shanchu_zhoubao" method="post"><center>'
							+'<input type="hidden" name="weekId_shanchu" value="'+data[id].weekId+'" />'
							+'<input style="position:relative;top:10px;" type="button" value="确认删除" onClick="zhoubaoshanchu()" class="scbutton" />&nbsp&nbsp'
							+'<input style="position:relative;top:10px;" type="button" value="取消删除" onClick="gb()" class="scbutton" />'
					        +'</center></form>'
				 });
	    	});
	    	
	    }
			}
	});
	 

		event.stopPropagation();

   
}
