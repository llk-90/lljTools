<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html lang="en">
<head>
<base href="<%=basePath%>">

<meta charset="utf-8" />
<title></title>

<meta name="description" content="overview & stats" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="static/css/bootstrap.min.css" rel="stylesheet" />
<link href="static/css/bootstrap-responsive.min.css" rel="stylesheet" />
<link rel="stylesheet" href="static/css/font-awesome.min.css" />
<!-- 下拉框 -->
<link rel="stylesheet" href="static/css/chosen.css" />

<link rel="stylesheet" href="static/css/ace.min.css" />
<link rel="stylesheet" href="static/css/ace-responsive.min.css" />
<link rel="stylesheet" href="static/css/ace-skins.min.css" />

<link rel="stylesheet" href="static/css/datepicker.css" />
<!-- 日期框 -->
<link rel="stylesheet" href="plugins/zTree/3.5/zTreeStyle.css"
	type="text/css">
<style type="text/css">
div.zTreeDemoBackground {
	width: 250px;
	height: 362px;
	text-align: left;
}

ul.ztree {
	margin-top: 10px;
	border: 1px solid #617775;
	background: #ffffff;
	width: 220px;
	height: 360px;
	overflow-y: scroll;
	overflow-x: auto;
}

ul  li {
	list-style-type: none
}

.ztree li span.button.add {
	margin-left: 2px;
	margin-right: -1px;
	background-position: -144px 0;
	vertical-align: top;
	*vertical-align: middle
}
</style>
<script type="text/javascript" src="static/js/jquery-1.7.2.js"></script>
<script type="text/javascript"
	src="plugins/zTree/3.5/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript"
	src="static/js/zTree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript"
	src="static/js/zTree/jquery.ztree.exedit-3.5.js"></script>
<script type="text/javascript" src="static/js/jquery.tips.js"></script>
<script type="text/javascript">
		$(top.hangge());
		//保存
		function save(){
			
			if($("#s_name").val()==""){
				$("#s_name").tips({
					side:3,
		            msg:'请输入学生姓名',
		            bg:'#FF5080',
		            time:3
		        });
				$("#s_name").focus();
				return false;
			}
			
			if($("#classParam").val()==""){
				$("#classParam").tips({
					side:3,
		            msg:'请选择所属班级',
		            bg:'#FF5080',
		            time:3
		        });
				return false;
			}
			
			if($("#s_sex").val()==""){
				$("#s_sex").tips({
					side:3,
		            msg:'请选择学生性别',
		            bg:'#FF5080',
		            time:3
		        });
				$("#s_sex").focus();
				return false;
			}
			
			if($("#NAME").val()==""){
				$("#NAME").tips({
					side:3,
		            msg:'请输入家长姓名',
		            bg:'#FF5080',
		            time:3
		        });
				$("#NAME").focus();
				return false;
			}
			
			if($("#PHONE").val()==""){
				
				$("#PHONE").tips({
					side:3,
		            msg:'请输入电话号码',
		            bg:'#FF5080',
		            time:3
		        });
				$("#PHONE").focus();
				return false;
			}
			
				$("#userForm").submit();
				$("#zhongxin").hide();
				$("#zhongxin2").show();
			
		}
		
	</script>

</head>
<body>
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute; z-index: 111111;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 208px; height: 200px;"></ul>
	</div>
	<form action="StudentManager/${msg}.do" name="userForm" id="userForm"
		method="post">
		<input type="hidden" name="studentId" id="studentId" value="${pd.studentId}" />
		<input type="hidden" name="parentId" id="parentId" value="${pd.parentId}" />
		<div id="zhongxin">
			<table class="table ">
		        <tr>
					<td style="width: 80px; text-align: left; padding-top: 13px;">学生姓名：</td>
					<td><input type="text" name="s_name" id="s_name"
						value="${pStu.UserName}" placeholder="这里输入学生姓名" maxlength="32"
						title="学生姓名"  disabled="disabled"/></td>
					<td style="width: 80px; text-align: left; padding-top: 13px;">学生性别：</td>
					<td>
					 <select class="chzn-select" name="s_sex" id="s_sex"
						data-placeholder="请选择学生性别" style="vertical-align: top;"
						onchange="tips();">
							<option value=""></option>
							<option value="女"
							 <c:if test="${pStu.Sex.toString() eq '女' }">selected="selected"</c:if>
							 selected="selected"
							>女</option>
							<option value="男"
							<c:if test="${pStu.Sex.toString() eq '男' }">selected="selected"</c:if>
							>男</option>
					  </select>
					</td>
				</tr>
					
				<tr>
					<td style="width: 80px; text-align: left; padding-top: 13px;">学生学号：</td>
					<td>
					<input type="text" name="s_stu_no" id="s_stu_no"value="${pStu.SeqStudent }" onkeyup="this.value=this.value.replace(/\D/g,'')"
						placeholder="这里输入学生学号" maxlength="32" title="学生学号"/></td>
						
					<td style="width: 80px; text-align: left; padding-top: 13px;">所属学校：</td>
					<td>
                       <input type="text" name="s_stu_no" id="s_stu_no"value="${pStu.SchoolName }" onkeyup="this.value=this.value.replace(/\D/g,'')"
						placeholder="这里输入学校" maxlength="32" title="所在学校" disabled="disabled" />
					</td>
				</tr>
				
				<tr>
				   	<td style="width: 80px; text-align: left; padding-top: 13px;">所属年级：</td>
					<td>
                       <input type="text" name="s_stu_no" id="s_stu_no"value="${pStu.GradeName}" onkeyup="this.value=this.value.replace(/\D/g,'')"
						placeholder="这里输入年级" maxlength="32" title="所属年级" data-gradeId = "${pStu.GradeId}" disabled="disabled"/> 
					</td>
				    <td style="width: 80px; text-align: left; padding-top: 13px;">所属班级：</td>
					<td>
                        <select name="classParam" id="classParam" class="chzn-select"
						     style="width: 220px;" data-placeholder="请选择班级">
						  <option value=""></option>
						<option value="QB"
							<c:if test="${'QB' eq pd.classParam }">selected="selected"</c:if>>全部</option>
							<c:forEach items="${cList }" var="cl" varStatus="vs">
								<option value="${cl.ClassId }"
									<c:if test="${cl.ClassId.toString() eq pStu.ClassId.toString() }">selected="selected"</c:if>>${cl.ClassName }</option>
							</c:forEach>
					</select>
					</td>
				</tr>
				<tr>
					<td style="width: 80px; text-align: left; padding-top: 13px;">学生家长：</td>
					<td><input type="text" name="NAME" id="NAME" class='gbkOrName'
						value="${par.ParUserName}" placeholder="这里输入学生家长" maxlength="32"
						title="学生家长"/></td>
					<td style="width: 80px; text-align: left; padding-top: 13px;">家长电话：</td>
					<td><input type="text" name="PHONE" id="PHONE"
						value="${par.ParLoginName}"
						onkeyup="this.value=this.value.replace(/\D/g,'')" class="gbkOrAbc"
						placeholder="这里输入家长电话" maxlength="32" title="家长电话"/></td>
				</tr>
				
				<tr>
				  <td style="width: 80px; text-align: left; padding-top: 13px;">学生卡号:</td>
					<td>
					<input type="text" name="s_stu_icno" id="s_stu_icno"value="${pStu.IcNo }" onkeyup="this.value=this.value.replace(/\D/g,'')"
						placeholder="这里输入学生卡号" maxlength="32" title="学生卡号" /></td>
				</tr>
				
				<tr>
					<td class="center" colspan="4"><a
						class="btn btn-small btn-success" onclick="save();">保存</a> <a
						class="btn btn-small btn-danger" onclick="top.Dialog.close();">取消</a>
					</td>
				</tr>
			</table>
		</div>

		<div id="zhongxin2" class="center" style="display: none">
			<br /> <br /> <br /> <br /> <br /> <img
				src="static/images/jiazai.gif" /><br />
			<h4 class="lighter block green">提交中...</h4>
		</div>

	</form>


	<!-- 引入 -->
	<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
	<script src="static/js/bootstrap.min.js"></script>
	<script src="static/js/ace-elements.min.js"></script>
	<script src="static/js/ace.min.js"></script>
	<script type="text/javascript" src="static/js/chosen.jquery.min.js"></script>
	<!-- 下拉框 -->
	<script type="text/javascript"
		src="static/js/bootstrap-datepicker.min.js"></script>
	<script type="text/javascript">
		$(top.hangge());
		$(function() {
			//单选框
			$(".chzn-select").chosen();
			$(".chzn-select-deselect").chosen({
				allow_single_deselect : true
			});

			//日期框
			$('.date-picker').datepicker();
     });
		//汉字或英文字符校验
		$('.gbkOrName').keyup(
				function() {
					var c = $(this);
					if (/[^a-zA-Z\u4E00-\u9FA5]/.test(c.val())) {//替换其他字符
						var temp_amount = c.val().replace(
								/[^a-zA-Z\u4E00-\u9FA5]/g, '');
						$(this).val(temp_amount);
					}
				});

		//字母数字或者下划线
		$('.gbkOrAbc').keyup(
				function() {
					var c = $(this);
					if (/[^a-zA-Z0-9! @ # $ % ?_]/.test(c.val())) {//替换其他字符
						var temp_amount = c.val().replace(
								/[^a-zA-Z0-9! @ # $ % ?_]/g, '');
						$(this).val(temp_amount);
					}
				});
		
		   //check学号是否存在
	    $("#s_stu_no").blur(function(){
	    var	stuNo = $("#s_stu_no").val();
	    if(stuNo == ""){
	    	$("#s_stu_no").tips({
				side:3,
	            msg:'请输入学号',
	            bg:'#FF5080',
	            time:3
	        });
	    	 $("#s_stu_no").focus();
	    	 return false;
	    }else{
	    	$.ajax({
	    		type:"post",
	    		url:'<%=basePath%>StudentManager/checkStuNoIs.do',
	    		data:{stuNo:stuNo},
	    		dataType:'json',
	    		success:function(data){
	    			if(data.msg =="ok"){
	    				$("#s_stu_no").tips({
	    					side : 3,
	    					msg : "你输入的学号已经存在",
	    					bg : '#AE81FF',
	    					time : 2
	    				});
	    			}
	    		},error:function(data,status,e){
	    			alert("服务器正在维护！！！");
	    		}
	    	});
	      }
	   });
	     //check卡号是否存在
	    $("#s_stu_icno").blur(function(){
	        var	stuIcNo = $("#s_stu_icno").val();
	        if(stuIcNo == ""){
	        	$("#s_stu_icno").tips({
	    			side:3,
	                msg:'请输入卡号',
	                bg:'#FF5080',
	                time:3
	            });
	        	 $("#s_stu_icno").focus();
	        	 return false;
	        }else{
	        	$.ajax({
	        		type:"post",
	        		url:'<%=basePath%>StudentManager/checkStuIcNoIs.do',
	        		data:{stuIcNo:stuIcNo},
	        		dataType:'json',
	        		success:function(data){
	        			if(data.msg =="ok"){
	        				$("#s_stu_icno").tips({
	        	    			side:3,
	        	                msg:'你输入的卡号已经存在',
	        	                bg:'#FF5080',
	        	                time:3
	        	            });
	        	        	 $("#s_stu_icno").focus();
	        			}
	        		},error:function(data,status,e){
	        			alert("服务器正在维护！！！");
	        		}
	        	});
	          }
	       });
	     
	     //检查号码长度
	    $("#PHONE").blur(function(){
		    var	stuNo = $("#PHONE").val();
		    if (!$("#PHONE").val()
					.match(/^(0[0-9]{2,3}-)([2-9][0-9]{6,7})$|(^(13[0-9]|147|15[0-9]|17[0|7|8]|18[0-9])[0-9]{8}$)/)) {
				$("#PHONE").tips({
					side : 3,
					msg : "请输入11位的手机号或座机号(格式：区号-座机号)",
					bg : '#AE81FF',
					time : 2
				});
				$("#PHONE").focus();
				return false;
			  }
		   });
	     
		
		
	</script>
</body>
</html>