<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<!-- jsp文件头和头部 -->
<%@ include file="../system/admin/top.jsp"%>
<style type="text/css">
#tr td{
vertical-align: middle;
height: auto; 
}
  th{
width: auto;
}  
</style>
</head>
<body>
	<div class="container-fluid" id="main-container">
		<div id="page-content" class="clearfix">
			<div class="row-fluid">
				<div class="row-fluid">
					<!-- 检索  -->
					<form action="firm/list.do" method="post" name="commodityForm"
						id="commodityForm">
						<!-- 检索  -->
						<table id="table_report"
							class="table table-striped table-bordered table-hover">
							<thead>
									<tr>
									<th class="center">业务名称</th>
									<th class="center">业务单价(元/月)</th>
									<th class="center">业务图片</th>
									<th class="center">学校</th>
									<th class="center">区域</th>
									<th class="center">营销ID</th>
									<th class="center">业务简介</th>
									<th class="center">修改</th>
									<th class="center">删除</th>
								</tr>
							</thead>
							<tbody>
								<!-- 开始循环 -->
								<c:choose>
									<c:when test="${not empty firmList}">
										<c:forEach items="${firmList}" var="firm" varStatus="vs">
											<tr id="tr">
												<td class="center">${firm.firmName}</td>
												<td class="center">${firm.price}</td>
												<td class="center"><img width="300" height="200" alt="" src="${firm.pictureURL }"></td>
												<td class="center">${firm.school}</td>
												<td class="center">${firm.area}</td>
												<td class="center">${firm.marketingId}</td>
												<td class="center">${firm.descript}</td>
												<td class="center"><a
													style="margin-left: 0px;" class='btn btn-mini btn-info'
													title="修改" onclick="editE('${firm.marketingId }');"><i
														class='icon-edit'></i></a></td>
												<td class="center"><a
													style="margin-left: 0px; " class='btn btn-mini btn-info'
													title="删除" onclick="deleteFirm('${firm.marketingId }');"><i
														class='icon-trash'></i></a></td>
											</tr>
										</c:forEach>
										<tr class="main_info">
											<td colspan="9" class="center"><a
												class="btn btn-small btn-success" onclick="add();">新增业务</a></td>
										</tr>
										
									</c:when>
									<c:otherwise>
										<tr class="main_info">
											<td colspan="9" class="center">没有业务信息&nbsp;&nbsp;</td>
										</tr>
										<tr class="main_info">
											<td colspan="9" class="center"><a
												class="btn btn-small btn-success" onclick="add();">新增业务</a></td>
										</tr>
									</c:otherwise>
								</c:choose>
							</tbody>
						</table>
						<div class="page-header position-relative">
							<table style="width: 100%;">
								<tr>
									<td style="vertical-align: top;"><div class="pagination" style="float: right; padding-top: 0px; margin-top: 0px;">${page.pageStr}</div></td>
								</tr>
							</table>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- 返回顶部  -->
	<a href="#" id="btn-scroll-up" class="btn btn-small btn-inverse"> <i
		class="icon-double-angle-up icon-only"></i>
	</a>

	<!-- 引入 -->
	<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
	<script src="static/js/bootstrap.min.js"></script>
	<script src="static/js/ace-elements.min.js"></script>
	<script src="static/js/ace.min.js"></script>

	<script type="text/javascript" src="static/js/chosen.jquery.min.js"></script>
	<!-- 下拉框 -->
	<script type="text/javascript"
		src="static/js/bootstrap-datepicker.min.js"></script>
	<!-- 日期框 -->
	<script type="text/javascript" src="static/js/bootbox.min.js"></script>
	<!-- 确认窗口 -->
	<!-- 引入 -->


	<script type="text/javascript" src="static/js/jquery.tips.js"></script>
	<!--提示框-->
	<script type="text/javascript">
		$(top.hangge());
		
		function editE(marketingId){
			 top.jzts();
			 var diag = new top.Dialog();
			 diag.Drag=true;
			 diag.Title ="修改";
			 diag.URL = '<%=basePath%>firm/toEdit.do?marketingId='+marketingId;
			 diag.Width = 750;
			 diag.Height = 450;
			 diag.CancelEvent = function(){ //关闭事件
				 if(diag.innerFrame.contentWindow.document.getElementById('zhongxin').style.display =='none'){
					 nextPage('${page.currentPage}');
				}
				 diag.close();
			     window.location.reload(true);
			 };
			 diag.show();
		}	
		
		//删除学生信息
		function deleteFirm(marketingId){
			bootbox.confirm("确定要删除该数据", function(result) {
				if(result) {
					top.jzts();
					var url = "<%=basePath%>firm/delete.do?marketingId="+marketingId
					$.get(url,function(data){
							 nextPage('${page.currentPage}');
					});
				}
			});
		}
		
		function add(){
			 top.jzts();
			 var diag = new top.Dialog();
			 diag.Drag=true;
			 diag.Title ="添加";
			 diag.Width = 750;
			 diag.Height = 450;
			 diag.URL = '<%=basePath%>firm/toAdd.do';
			diag.Width = 750;
			diag.Height = 450;
		 	diag.CancelEvent = function() {//关闭事件
				 if(diag.innerFrame.contentWindow.document.getElementById('zhongxin').style.display == "none"){
					 nextPage('${page.currentPage}');
				}
				diag.close();
			}; 
			diag.show();
		}
	</script>
</body>
</html>

