<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
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
<link rel="stylesheet" href="plugins/zTree/3.5/zTreeStyle.css" type="text/css">
<link rel="stylesheet" href="<%=basePath%>css/zTreeStyle/zTreeStyle.css" type="text/css" />
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
<script type="text/javascript" src="plugins/zTree/3.5/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="static/js/zTree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="static/js/zTree/jquery.ztree.exedit-3.5.js"></script>
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
		            time:2
		        });
				$("#s_name").focus();
				return false;
			}
			
			if($("#s_stu_no").val()==""){
				$("#s_stu_no").tips({
					side:3,
		            msg:'请输入学生学号',
		            bg:'#FF5080',
		            time:2
		        });
				$("#s_stu_no").focus();
				return false;
			}
			var stuNo = $("#s_stu_no").val();
			$.ajax({
                type : "POST",
                url : 'StudentManager/checkStuNoIs.do',
                data : {
                	stuNo : stuNo
                },
                dataType : 'json',
                cache : false,
                async : false,
                success : function(data) {
                    if (data.msg =="ok") {
                        $stuNo.tips({
                            side : 3,
                            msg : "学号已存在,请重新输入",
                            bg : '#AE81FF',
                            time : 2
                        });
                    }
                    $("#s_stu_no").focus();
                    return false;
                }
            });
			
			if($("#schoolParam option:selected").text()==""){
				$("#schoolParam").tips({
					side:3,
		            msg:'请选择所属学校',
		            bg:'#FF5080',
		            time:3
		        });
				   $("#schoolParam").focus();
				return false;
			}
			
			if($("#gradeParam option:selected").text()=="全部"){
				$("#gradeParam").tips({
					side:3,
		            msg:'请选择所属年级',
		            bg:'#FF5080',
		            time:3
		        });
				$("#gradeParam").focus();
				return false;
			}
			
			
			if($("#classParam option:selected").text()=="全部"){
				$("#classParam").tips({
					side:3,
		            msg:'请选择所属班级',
		            bg:'#FF5080',
		            time:3
		        });
				$("#classParam").focus();
				return false;
			}
			
			if($("#s_sex").text()==""){
				$("#s_sex").tips({
					side:3,
		            msg:'请选择学生性别',
		            bg:'#FF5080',
		            time:3
		        });
				$("#s_sex").focus();
				return false;
			}

			if($("#stu_icno").val()==""){
	                $("#stu_icno").tips({
	                    side:3,
	                    msg:'请输入学生卡号',
	                    bg:'#FF5080',
	                    time:3
	                });
	                $("#stu_icno").focus();
	                return false;
	            }
			var stuIcNo =$("#stu_icno").val();
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
        	        	 return false;
        			}
        		},error:function(data,status,e){
        			alert("服务器正在维护！！！");
        		}
        	});
             
			if($("#NAME").val()==''){
			      $("#NAME").tips({
	                    side:3,
	                    msg:'请输入家长姓名',
	                    bg:'#FF5080',
	                    time:3
	                });
	                $("#NAME").focus();
	                return false;
	              }
				
			if($("#PHONE").val()==''){
			      $("#PHONE").tips({
	                    side:3,
	                    msg:'请输电话号码',
	                    bg:'#FF5080',
	                    time:3
	                });
	                $("#PHONE").focus();
	                return false;
	              }
			
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
			
			
				$("#userForm").submit();
				$("#zhongxin").hide();
				$("#zhongxin2").show();
			
		}
		
	</script>

</head>
<body>
	<div id="menuContent" class="menuContent" style="display: none; position: absolute; z-index: 111111;">
		<ul id="treeDemo" class="ztree" style="margin-top: 0; width: 208px; height: 200px;"></ul>
	</div>
	<form action="StudentManager/${msg}.do" name="userForm" id="userForm" method="post">
		<div id="zhongxin">
			<table class="table ">
			    <tr>
			        <td style="width: 80px; text-align: left; padding-top: 13px;">学生姓名：</td>
					<td>
						<input type="text" name="s_name" id="s_name" class='gbkOrName' placeholder="这里输入学生姓名" maxlength="32" title="学生姓名" />
					</td>
					<td style="width: 80px; text-align: left; padding-top: 13px;">学生学号：</td>
					<td>
						<input type="text" name="s_stu_no" id="s_stu_no" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="这里输入学生学号" maxlength="32" title="学生学号" />
					</td>
			    </tr>
			    
				<tr>
					<td style="width: 80px; text-align: left; padding-top: 13px;">所属学校：</td>
					<td>
                        <select name="schoolParam" id="schoolParam" class="chzn-select"
						     style="width: 220px;" data-placeholder="请选择学校" onchange="getGradeBySchId();">
						  <option value=""></option>
						<option value="QB"
							<c:if test="${'QB' eq pd.schoolParam }">selected="selected"</c:if>>全部</option>
							<c:forEach items="${scList }" var="school" varStatus="vs">
								<option value="${school.SchoolId}"
									<c:if test="${school.SchoolId.toString() eq pd.schoolParam.toString() }">selected="selected"</c:if>>${school.SchoolName }</option>
							</c:forEach>
					</select>
					</td>
					
					<td style="width: 80px; text-align: left; padding-top: 13px;">所属年级：</td>
					<td>
                        <select name="gradeParam" id="gradeParam" class="chzn-select"
						     style="width: 220px;" data-placeholder="请选择年级" onchange="getClassByGradeId()">
						  <option value=""></option>
					</select>
					</td>
				</tr>
				
				<tr>
				    <td style="width: 80px; text-align: left; padding-top: 13px;">所属班级：</td>
					<td>
                        <select name="classParam" id="classParam" class="chzn-select"
						     style="width: 220px;" data-placeholder="请选择班级">
						  <option value=""></option>
					</select>
					</td>
					
					<td style="width: 80px; text-align: left; padding-top: 13px;">卡&#12288;&#12288;号：</td>
                    <td>
                        <input type="text" name="stu_icno" id="stu_icno" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="这里输入卡号" maxlength="100" title="卡号" />
                    </td>
				</tr>
				
				<tr>
				    <td style="width: 80px; text-align: left; padding-top: 13px;">学生性别：</td>
					<td>
						<select class="chzn-select" name="s_sex" id="s_sex" data-placeholder="请选择学生性别" style="vertical-align: top;" <c:if test="${pd.service_ID != null }">disabled="disabled"</c:if>>
							<option value=""></option>
							<option value="男">男</option>
							<option value="女">女</option>
						</select>
					</td>
					
					<td style="width: 80px; text-align: left; padding-top: 13px;">学生家长：</td>
					<td>
						<input type="text" name="NAME" id="NAME" class='gbkOrName' placeholder="这里输入学生家长" maxlength="32" title="学生家长" />
					</td>
				
				</tr>
				<tr>
					<td style="width: 80px; text-align: left; padding-top: 13px;">家长电话：</td>
					<td>
						<input type="text" name="PHONE" id="PHONE" onkeyup="this.value=this.value.replace(/\D/g,'')" class="gbkOrAbc" placeholder="这里输入家长电话" maxlength="32" title="家长电话" />
					</td>
				</tr>
				<tr>
					<td class="center" colspan="4">
						<a class="btn btn-small btn-success" onclick="save();">保存</a>
						<a class="btn btn-small btn-danger" onclick="top.Dialog.close();">取消</a>
					</td>
				</tr>
			</table>
		</div>
		<div id="zhongxin2" class="center" style="display: none">
			<br /> <br /> <br /> <br /> <br /> <img src="static/images/jiazai.gif" /><br />
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
	<script type="text/javascript" src="static/js/bootstrap-datepicker.min.js"></script>
	<script type="text/javascript">
		$(top.hangge());
		$(function() {
			//单选框
			$(".chzn-select").chosen();
			$(".chzn-select-deselect").chosen({
				allow_single_deselect : true
			});
		});
		
		if('${pd.schoolParam}' != ''){
			getGradeBySchId();
		}
		
		//汉字或英文字符校验
		$('.gbkOrName').keyup(
				function() {
					var c = $(this);
					if (/[^a-zA-Z\u4E00-\u9FA5]/.test(c.val())) 
					{//替换其他字符
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
		
		
		//获取年级
		function getGradeBySchId(){
			var schoolId = $('#schoolParam').val();
			$.ajax({
				type:'POST',
				url:'<%=basePath%>StudentManager/gradeList.do',
				data:{
					schoolId:schoolId
				},
				dataType:'json',
				cache:false,
				success:function(data){
					var html='';
					if(data.gList.length>0){
						if('' == '${pd.gradeParam}'){
							html+='<option value="" selected="selected">全部</option>';
						}else{
							html+='<option value="">全部</option>';
						}
					}
					$.each(data.gList,function(i,list){
						if(list.GradeId == '${pd.gradeParam}'){
							html+='<option value="'+list.GradeId+'" selected="selected">'+list.GradeName+'</option>';
						}else{
							html+='<option value="'+list.GradeId+'">'+list.GradeName+'</option>';
						}
					});
					$('#gradeParam').append(html);
					$("#gradeParam").trigger("liszt:updated");
					if($("#gradeParam").val() != ''){
						getClassByGradeId();
					}
				},
				error:function(xhr,textStatus){
			       alert("服务器正在维护!,请稍后重试!");
			    }
			})
		}
		
		//获取年级
		function getClassByGradeId(){
			var gradeId = $('#gradeParam').val();
			$.ajax({
				type:'POST',
				url:'<%=basePath%>StudentManager/classList.do',
				data:{
					GradeId:gradeId
				},
				dataType:'json',
				cache:false,
				success:function(data){
					var html='';
					if(data.cList.length>0){
						if('' == '${pd.classParam}'){
							html+='<option value="" selected="selected">全部</option>';
						}else{
							html+='<option value="">全部</option>';
						}
					}
					$.each(data.cList,function(i,list){
						if(list.ClassId == '${pd.classParam}'){
							html+='<option value="'+list.ClassId+'" selected="selected">'+list.ClassName+'</option>';
						}else{
							html+='<option value="'+list.ClassId+'">'+list.ClassName+'</option>';
						}
					});
					$('#classParam').append(html);
					$("#classParam").trigger("liszt:updated");
				},
				error:function(xhr,textStatus){
			       alert("服务器正在维护!,请稍后重试!");
			    }
			})
		}
	</script>
</body>
</html>