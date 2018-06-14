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
<%--下拉框 --%>
<link rel="stylesheet" href="static/css/chosen.css" />

<link rel="stylesheet" href="static/css/ace.min.css" />
<link rel="stylesheet" href="static/css/ace-responsive.min.css" />
<link rel="stylesheet" href="static/css/ace-skins.min.css" />

<link rel="stylesheet" href="static/css/datepicker.css" />
<%--日期框 --%>
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
		<%-- 保存--%>
		function save(){
			if($("#firm_name").val()==""){
				$("#firm_name").tips({
					side:3,
		            msg:'请输入业务名称',
		            bg:'#FF5080',
		            time:3
		        });
				$("#firm_name").focus();
				return false;
			}
			
			if($("#firm_price").val()==""){
				$("#firm_price").tips({
					side:3,
		            msg:'请输入业务单价(不包含文字)',
		            bg:'#FF5080',
		            time:3
		        });
				$("#firm_name").focus();
				return false;
			}
			if($("#firm_area").val()==""){
				$("#firm_area").tips({
					side:3,
		            msg:'请选择区域',
		            bg:'#FF5080',
		            time:3
		        });
				$("#firm_area").focus();
				return false;
			}
			
			if($("#firm_school").val()==""){
				$("#firm_school").tips({
					side:3,
		            msg:'请输入学校',
		            bg:'#FF5080',
		            time:3
		        });
				$("#firm_school").focus();
				return false;
			}
			if($("#firm_id").val()==""){
				$("#firm_id").tips({
					side:3,
		            msg:'请输入营销ID',
		            bg:'#FF5080',
		            time:3
		        });
				$("#firm_id").focus();
				return false;
			}
			if($("#firmDescribetion").val()==""){
				$("#firmDescribetion").tips({
					side:3,
		            msg:'请输入业务简介',
		            bg:'#FF5080',
		            time:3
		        });
				$("#firmDescribetion").focus();
				return false;
			}
			
			
			$("#firmForm").submit();
			$("#zhongxin").hide();
			$("#zhongxin2").show();
			
		}
		
		function checkFile(target) {
			var fileSize = 0;
			var filetypes = [ ".jpg", ".png", ".gif", ".ps", ".jepg" ];
			var filepath = target.value;
			var filemaxsize = 1024 * 2;//2M 
			if (filepath) {
				var isnext = false;
				var fileend = filepath.substring(filepath.indexOf("."));
				if (filetypes && filetypes.length > 0) {
					for (var i = 0; i < filetypes.length; i++) {
						if (filetypes[i] == fileend) {
							isnext = true;
							break;
						}
					}
				}
				if (!isnext) {
					alert("不接受此文件类型。");
					target.value = "";
					return false;
				}
			} else {
				return false;
			}
			if (isIE && !target.files) {
				var filePath = target.value;
				var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
				if (!fileSystem.FileExists(filePath)) {
					alert("附件不存在，请重新输入。");
					return false;
				}
				var file = fileSystem.GetFile(filePath);
				fileSize = file.Size;
			} else {
				fileSize = target.files[0].size;
			}

			var size = fileSize / 1024;
			if (size > filemaxsize) {
				alert("附件大小不能大于" + filemaxsize / 1024 + "M。");
				target.value = "";
				return false;
			}
			if (size <= 0) {
				alert("附件大小不能为0M。");
				target.value = "";
				return false;
			}
		}
	</script>
	<script type="text/javascript">
	$(function(){
		//下拉框
		$(".chzn-select").chosen(); 
		$(".chzn-select-deselect").chosen({allow_single_deselect:true}); 
	});
	
	$('.gbkOrAbc').keyup(
			function() {
				var c = $(this);
				if (/[^a-zA-Z0-9! @ # $ % ?_]/.test(c.val())) {//替换其他字符
					var temp_amount = c.val().replace(
							/[^a-zA-Z0-9! @ # $ % ?_]/g, '');
					$(this).val(temp_amount);
				}
			});
	</script>
</head>
<body>
	<div id="menuContent" class="menuContent" style="display: none; position: absolute; z-index: 111111;">
		<ul id="treeDemo" class="ztree" style="margin-top: 0; width: 208px; height: 200px;"></ul>
	</div>
	<form action="firm/updateFirmOverview.do" name="firmForm" id="firmForm" method="post" enctype="multipart/form-data">
		<div id="zhongxin">
			<table class="table">
				<tr>
					<td style="width: 80px; text-align: left; padding-top: 13px;">业务名称：</td>
					<td>
						<input type="text" name="firm_name" id="firm_name" value="${firmOverView.firmName}"/>
					</td>
					<td style="width: 80px; text-align: left; padding-top: 13px;">业务单价(元/月)：</td>
					<td>
						<input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" class="gbkOrAbc" name="firm_price" id="firm_price" value="${firmOverView.price}"/>
					</td>
					</tr>
				<tr>
				    <td style="width: 80px; text-align: left; padding-top: 13px;">业务区域：</td>
				<%--    <td>
						<input type="text" name="firm_area" id="firm_area" value="${firmOverView.area }"/>
					</td> --%>
					<td style="vertical-align: top;">
					<select name="firm_area"
						id="firm_area" class="chzn-select" style="width: 120px;"
						data-placeholder="请选择城市">
							<c:forEach items="${areaList }" var="area" varStatus="vs">
								<option value="${area.CityName}" selected="selected">${area.CityName}</option>
							</c:forEach>
					</select>
					</td>
					<td style="width: 80px; text-align: left; padding-top: 13px;">学校：</td>
					<td>
						<input type="text" name="firm_school" id="firm_school" value="${firmOverView.school }"/>
					</td>
					
				</tr>
				<tr>
				    <td style="width: 80px; text-align: left; padding-top: 13px;">业务图片：</td>
					<td>
						<input
							style="vertical-align: middle;" type="file"
							id="input-file-french-1" name="uploadfile" class="dropify-fr"
							data-default-file="" onchange="checkFile(this);" value="上传图片"/>
					</td>
					<td style="width: 80px; text-align: left; padding-top: 13px;">营销ID：</td>
					<td>
						<input type="text" readonly="readonly" name="id" id="firm_id" value="${firmOverView.marketingId }"/>
					</td>
				</tr>
				<tr>
				    <td style="width: 80px; text-align: left; padding-top: 13px;">业务简介</td>
				    <td>
					    <textarea rows="3" cols="5" name="firm_describetion" id="firm_describetion">${firmOverView.descript }</textarea>
				    </td>
				</tr>
				<tr>
					<td class="center" colspan="4">
						<a class="btn btn-small btn-success" onclick="save();">修改</a>
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
	<%-- 引入--%>
	<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
	<script src="static/js/bootstrap.min.js"></script>
	<script src="static/js/ace-elements.min.js"></script>
	<script src="static/js/ace.min.js"></script>
	<script type="text/javascript" src="static/js/chosen.jquery.min.js"></script>
	<%-- 下拉框 --%>
	<script type="text/javascript" src="static/js/bootstrap-datepicker.min.js"></script>
</body>
</html>