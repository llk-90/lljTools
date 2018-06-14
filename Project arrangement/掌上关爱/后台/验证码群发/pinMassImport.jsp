<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8" />
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="static/css/bootstrap.min.css" rel="stylesheet" />
		<link rel="stylesheet" href="static/css/ace.min.css" />
		<link rel="stylesheet" href="static/css/ace-skins.min.css" />
		<link rel="stylesheet" href="static/assets/css/font-awesome.css" />
		<!-- ace styles -->
		<link rel="stylesheet" href="static/assets/css/ace.css" class="ace-main-stylesheet" id="main-ace-style" />
		<script type="text/javascript" src="static/js/jquery-1.7.2.js"></script>
		<script type="text/javascript" src="static/js/ajaxfileupload.js"></script>
		<script type="text/javascript" src="static/js/bootbox.min.js"></script><!-- 确认窗口 -->
		<script type="text/javascript">
			//保存
			function ajaxFileUpload(){
				 var isError = true;
				 var kid =$('input[name="kid"]').val();
				if($("#excel").val()==""){
					$("#excel").tips({
						side:3,
			            msg:'请选择文件',
			            bg:'#FF5080',
			            time:3
			        });
					isError =  false;
				}
				if (isError) {
					var fileType= document.getElementById("excel").value.substr(document.getElementById("excel").value.lastIndexOf(".")).toLowerCase();//获得文件后缀名
				    if(fileType != '.xls' && fileType != '.xlsx' ){
				    	$("#excel").tips({
							side:3,
				            msg:'请上传xls或者xlsx格式的文件',
				            bg:'#FF5080',
				            time:3
				        });
				    	$("#excel").val('');
				    	isError =  false;
				    }
				}
				if (isError) {
					$.ajaxFileUpload ({
						 url: '<%=basePath%>pinMember/readExcel.do',	 
					     secureuri:false, 
					     fileElementId:'excel',
					     dataType:'text',
					     type: 'post',
					     data: {id:kid},
						 autoSubmit: true,
						 success: function (data , status) {						
						 data = data.replace("<PRE>", '');
					     data = data.replace('<PRE style="word-wrap: break-word; white-space: pre-wrap;">', '');  
			             data = data.replace("</PRE>", '');
			             data = data.replace("<pre>", '');
					     data = data.replace('<pre style="word-wrap: break-word; white-space: pre-wrap;">', '');  
			             data = data.replace("</pre>", ''); 
						 if (data == "success"){
							bootbox.dialog("导入成功。", 							 
							  {
								"label" : "关闭",
								"class" : "btn-small btn-success",
								"callback": function() {
									$("#Form1").attr("action", '<%=basePath%>pinMember/returnPinMember.do');
				                    $("#Form1").submit();
									$("#zhongxin").hide();
									$("#zhongxin2").show();
								 }
							  }	 
							);
						 } else {
							 bootbox.dialog(data, 							 
										  {
											"label" : "关闭",
											"class" : "btn-small btn-success",
											"callback": function() {										
												}
										  }	 
									);
							 return;	
						 }
					 },
						 error:function(data, status, e){ 
							 bootbox.alert("导入失败");
					    }
					});
				}
			}
		</script>
		
		<style type="text/css">
		
		</style>
	</head>
<body>
		<div id="zhongxin">
		<table style="width:95%;" >
			<tr>
				<td style="padding-top: 20px;" class='center'><input style="width: 60%" type="file" id="excel"  name="myfiles"/></td>
			</tr>
			<tr style="">
				<td style="text-align: center; ">
				    <input type="hidden" name="kid" class="classb" value="${pd.kid}" />
					<input type="hidden" name="pid" class="classp" value="${pd.pid}"/> 
					<input type="hidden" name="fid" class="classf" value="${pd.fid}"/>
					<a style="margin-top: 20px;" class="btn btn-mini btn-primary" onclick="ajaxFileUpload();">导入并开通</a>
					<a style="margin-top: 20px; margin-left: 25px; margin-right: 25px;" class="btn btn-mini btn-danger" onclick="top.Dialog.close();">取消</a>
					<a style="margin-top: 20px;" class="btn btn-mini btn-success" onclick="window.location.href='<%=basePath%>/pinMember/downExcel.do'">下载模版</a>
				</td>
			</tr>
		</table>
		</div>
		
		<div id="zhongxin2" class="center" style="display:none"><br/><img src="static/images/jzx.gif" /><br/><h4 class="lighter block green"></h4></div>
		
	      <form id="Form1" ></form>
	
		<!-- 引入 -->
		<!--[if !IE]> -->
		<script type="text/javascript">
			window.jQuery || document.write("<script src='static/assets/js/jquery.js'>"+"<"+"/script>");
		</script>
		<!-- <![endif]-->
		<!--[if IE]>
		<script type="text/javascript">
		 	window.jQuery || document.write("<script src='static/assets/js/jquery1x.js'>"+"<"+"/script>");
		</script>
		<![endif]-->
		<script src="static/js/bootstrap.min.js"></script>
		<!-- ace scripts -->
		<script src="static/assets/js/ace/elements.fileinput.js"></script>
		<script src="static/assets/js/ace/ace.js"></script>
		<!--提示框-->
		<script type="text/javascript" src="static/js/jquery.tips.js"></script>
		<script type="text/javascript">
		$(top.hangge());
		</script>
	
</body>
</html>