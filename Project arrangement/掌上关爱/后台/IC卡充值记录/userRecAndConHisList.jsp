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
<%@ include file="../../system/admin/top.jsp"%>
</head>
<body>              
	<div class="container-fluid" id="main-container">    
		<div id="page-content" class="clearfix">
			<div class="row-fluid">   
				<div class="row-fluid">   
					<!-- 检索  -->  
					<form action="userHis/recAndConHisList.do" method="post"   
						name="courseForm" id="courseForm">   
						<table>
							<tr>   
								<td style="vertical-align: top; font-size: 1em;">
									学生姓名:
									<span class="input-icon">
									<input autocomplete="off" style="width: 160px;" id="nav-search-input" type="text" name="stuName" value="${pd.stuName}" placeholder="请输入学生姓名" /> 
									<i id="nav-search-icon" class="icon-search"></i>
									</span>
								</td>
								
								<td style="vertical-align: top; font-size: 1em;">
									卡号:
									<span class="input-icon">
					
					
					
									<input autocomplete="off" id="nav-search-input" type="text"
											name="IcNo" value="${pd.IcNo}" 
											placeholder="请输入卡号" />
											<i id="nav-search-icon" class="icon-search"></i>
									</span>
								</td>
								
							    <td style="vertical-align: top;">
									<button class="btn btn-mini btn-light" onclick="search();" title="检索">
										<i id="nav-search-icon" class="icon-search"></i>
									</button>								
								</td>
							</tr>
						</table> 
						<table id="table_report"
							class="table table-striped table-bordered table-hover">
							<thead>
								<tr>
									<td colspan="9" class="center">用户充值消费记录表</td>
								</tr>
								<tr>
									<th class="center">序号</th>
									<th class="center">用户账号</th>
									<th class="center">姓名</th>
									<th class="center">卡物理号</th>
									<th class="center">变化金额</th>
									<th class="center">卡内余额</th>
									<th class="center">消费地点</th>
									<th class="center">消费时间</th>
									<th class="center">流水号</th>
								<!-- 	<th class="center">操作</th> -->
								</tr>
							</thead>
							<tbody>
								<!-- 开始循环 -->
								<c:choose>
									<c:when test="${not empty recAndConList}">
										<c:forEach items="${recAndConList}" var="recAndCon"
											varStatus="vs">
											<tr>
												<td class='center'>${vs.index+1}</td>
												<td class='center'>${recAndCon.AccountNo}</td>
												<td class='center'>${recAndCon.CustomerName}</td>
												<td class='center'>${recAndCon.CardID}</td>
												<td class='center'>${recAndCon.JE}</td>
												<td class='center'>${recAndCon.LeftJE}</td>
												<td class='center'>${recAndCon.GrpName}</td>
												<td class='center'>${recAndCon.PayTime}</td>
												<td class='center'>${recAndCon.LSH}</td>
											</tr>
										</c:forEach>
									</c:when>
									<c:otherwise>
										<tr class="main_info">
											<td colspan="10" class="center">没有记录</td>
										</tr>
									</c:otherwise>
								</c:choose>
							</tbody>
						</table>
						<div class="page-header position-relative">
							<table style="width: 100%;">
								<tr>
									<td style="vertical-align: top;"><div class="pagination"
											style="float: right; padding-top: 0px; margin-top: 0px;">${page.pageStr}</div></td>
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
		//检索
		function search(){
			top.jzts();
			$("#courseForm").submit();
		}
	</script>

</body>
</html>

