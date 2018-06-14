<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()+path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
<base href="<%=basePath%>">
<!-- jsp文件头和头部 -->
<%@ include file="../system/admin/top.jsp"%>
</head>
<body>
	<div class="container-fluid" id="main-container">
		<div id="page-content" class="clearfix">
			<div class="row-fluid">
				<div class="row-fluid">
					<!-- 检索  -->
					<form action="PinMassSend/gslist.do" method="post" name="pinForm"
						id="pinForm">
								<input type="hidden" name="kid" class="classk" value="${pd.kid}"/> 
						<table>	
								<tr>
								<!--镇区-->
									<td style="vertical-align: top;">
										<select name="townParam"
											id="townParam" class="chzn-select" style="width: 150px;"
											data-placeholder="请选择镇区" onchange="getSchByTownId();">
												<option value=""></option>
												<option value="QB"
													<c:if test="${'QB' eq pd.townParam }">selected="selected"</c:if>>全部</option>
												<c:forEach items="${townList }" var="town" varStatus="vs">
													<option value="${town.TownId }"
														<c:if test="${town.TownId.toString() eq pd.townParam.toString() }">selected="selected"</c:if>>${town.TownName }</option>
												</c:forEach>
										</select>
									 </td>
									 
								   <!--学校-->
									<td style="vertical-align: top;">
										<select name="schoolParam"
											id="schoolParam" class="chzn-select" style="width: 250px;"
											data-placeholder="请选择学校" onchange="getClassBySchId()">
												<option value=""></option>
										</select>
									 </td>
									 
								    <!--班级-->
									<td style="vertical-align: top;"><select name="classParam"
										id="classParam" class="chzn-select" style="width: 200px;"
										data-placeholder="请选择班级">
											<option value=""></option>
									</select>
									</td>
								    
									<td>
									<td style="vertical-align: top;">
										<select class="chzn-select" name="firmType" style="width: 140px;" data-placeholder="请选择业务">
											<c:forEach items="${firmList}" var="bean">
											     <option value=""></option>									
												<option value="${bean.marketingId}" <c:if test="${pd.firmType == bean.marketingId}">selected = "selected"</c:if>>${bean.firmName}</option>
											</c:forEach>
										</select>
									</td>
									
									<td style="vertical-align: top;">
										<select name="hjy_order_status" id="hjy_order_status" class="chzn-select" style="width: 150px;" data-placeholder="请选择订阅状态" onchange="clearStatus()">
											<option value=""></option>	
											<option value="0" <c:if test="${pd.hjy_order_status  == '0' }">selected = "true"</c:if>>未开通</option>
											<option value="1" <c:if test="${pd.hjy_order_status  == '1' }">selected = "true"</c:if>>已开通未订阅</option>
											<option value="2" <c:if test="${pd.hjy_order_status  == '2' }">selected = "true"</c:if>>已下发未验证</option>
											<option value="3" <c:if test="${pd.hjy_order_status  == '3' }">selected = "true"</c:if>>已订阅</option>
										</select>
									</td>
									
									<!-- 学生姓名-->
									<td>
									  <span class="input-icon">
									   <input autocomplete="off" id="nav-search-input" type="text" name="stuName"
												placeholder="请输入学生姓名" value="${pd.stuName}"/> 
												<i id="nav-search-icon" class="icon-search"></i>
									  </span>
									</td>
									
									
									<td style="vertical-align: top;"><button
											class="btn btn-mini btn-light" onclick="search();" title="检索">
											<i id="nav-search-icon" class="icon-search"></i>
										</button></td>
								    <td style="vertical-align:top;"><a class="btn btn-mini btn-light" onclick="importExcel();" title="批量导入验证码"><i id="nav-search-icon" class="icon-upload-alt"></i></a></td>
								</tr>
								<tr>
								   
								</tr>
								
							</table>
						<br>
						<!-- 检索  -->
						<table id="table_report"
							class="table table-striped table-bordered table-hover">
							<thead>
								<tr>
									<th class="center"><label> 
										<input type="checkbox"  id="zcheckbox"  onclick="$('[name=ids]').attr('checked',this.checked)" />
										<span class="lbl"></span></label></th>
									<th class="center" >学生ID</th>
									<th class="center" >学生姓名</th>
									<th class="center" >学生性别</th>
									<th class="center" >学生家长</th>
									<th class="center" >家长电话</th>
									<th class="center" >订阅状态</th>
									<th class="center" >验证码</th>
								</tr>
							</thead>
							<tbody>
								<!-- 开始循环 -->
									<c:choose>
										<c:when test="${not empty pinMassSendList}">
											<c:forEach items="${pinMassSendList}" var="pinMassSendList" varStatus="vs">
												<tr>
													<td class='center' style="width: 30px;vertical-align: middle;"><label><input
														type='checkbox' name='ids' value="${pinMassSendList.StudentId}#j#${pinMassSendList.UserName}#j#${pinMassSendList.ParLoginName}#j#${pinMassSendList.ParentId}#i#" /><span
														class="lbl"></span></label></td>
													<td class="center" >${pinMassSendList.StudentId }</td>
													<td class="center" >${pinMassSendList.UserName }</td>	
													<td class="center" >${pinMassSendList.Sex }</td>
													<td class="center" >${pinMassSendList.ParUserName }</td>
													<td class="center" >${pinMassSendList.ParLoginName }</td>
													<td class="center" >${pinMassSendList.hjy_order_status }</td>
													<td class="center" >${pinMassSendList.hjy_pin_code }</td>
												</tr>
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr class="main_info">
												<td colspan="100" class="center">没有相关数据</td>
											</tr>
										</c:otherwise>
									</c:choose>
							</tbody>
						</table>
							<div class="page-header position-relative">
								<table style="width: 100%;">
									<tr>
 										<td style="vertical-align: top;">
                                            <a class="btn btn-small btn-success"
											onclick="sendAll('确定要下发吗?');" title="批量下发验证码">批量下发验证码</a></td>
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
			$("#pinForm").submit();
		}
	</script>

	<script type="text/javascript">
		$(function() {
			//日期框
			$('.date-picker').datepicker();
			//下拉框
			$(".chzn-select").chosen();
			$(".chzn-select-deselect").chosen({
				allow_single_deselect : true
			});
			//复选框
			$('table th input:checkbox').on(
					'click',
					function() {
						var that = this;
						$(this).closest('table').find(
								'tr > td:first-child input:checkbox').each(
								function() {
									this.checked = that.checked;
									$(this).closest('tr').toggleClass(
											'selected');
								});
					});
			if($("#townParam").val() != ''){
				getSchByTownId();
			}
		});
	</script>
	<script type="text/javascript">
	
	//获取学校
	function getSchByTownId(){
		var townId = $('#townParam').val();
		$.ajax({
			type:'POST',
			url:'<%=basePath%>PinMassSend/getSch.do',
			data:{
				townId:townId
			},
			dataType:'json',
			cache:false,
			success:function(data){
				var html='';
				if(data.schList.length>0){
					if('' == '${pd.schoolParam}'){
						html+='<option value="" selected="selected">全部</option>';
					}else{
						html+='<option value="">全部</option>';
					}
				}
				$.each(data.schList,function(i,list){
					if(list.SchoolID == '${pd.schoolParam}'){
						html+='<option value="'+list.SchoolID+'" selected="selected">'+list.SchoolName+'</option>';
					}else{
						html+='<option value="'+list.SchoolID+'">'+list.SchoolName+'</option>';
					}
				});
				$('#schoolParam').append(html);
				$("#schoolParam").trigger("liszt:updated");
				if($("#schoolParam").val() != ''){
					getClassBySchId();
				}
			},
			error:function(xhr,textStatus){
		       alert("服务器正在维护!,请稍后重试!");
		    }
		})
	}
	
	
	//获取班级
	function getClassBySchId(){
		var schoolId = $('#schoolParam').val();
		$.ajax({
			type:'POST',
			url:'<%=basePath%>PinMassSend/getClass.do',
			data:{
				schoolId:schoolId
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
	
		//批量操作
		function sendAll(msg){
			var str = '';
			var tags = document.getElementsByName('ids');
			var checkVal='';
			var params = $("#pinForm").serializeArray();  
	        for( x in params ){
	        	if(params[x].name=='firmType'){checkVal=params[x].value;break;}
	        }
			for(var i=0; i < tags.length; i++)
			{
				  if(tags[i].checked){
					  var s = tags[i].value.split("#i#");
				  	if(str == '') str += s[0];
				  	else str += ',' + s[0];
				  }
			}
			if(str == ''){
				$("#zcheckbox").tips({
					side:3,
		            msg:'请至少选择一条',
		            bg:'#FF5080',
		            time:1
		        });
				
				return;
			}else{
				bootbox.confirm(msg, function(result) {
					if(result) {
							top.jzts();
							$.ajax({
								type: "POST",
								url: '<%=basePath%>PinMassSend/sendAll.do?tm='+ new Date().getTime(),
						    	data: {hjy_s_id : str, firmName : checkVal},
								dataType:'json',
								//beforeSend: validateData,
								cache: false,
								success: function(data){
									top.hangge();
									alert(data.msg);
								},
								error: function(xhr, type, errorThrown) {
									top.hangge();
									alert(data.msg);
								}
							});
					}
				});
			}
		}
		
		//打开上传excel页面
        function importExcel(){
        	var kid =$('input[name="kid"]').val();
        	//if(kid ==""){
        	//	bootbox.alert("左侧菜单选择要导入学校！", function() {
			//	});
        	//	return;
        	//}
            top.jzts();
            var diag = new top.Dialog();
            diag.Drag=true;
            diag.Title ="验证码信息导入";
            diag.URL = '<%=basePath%>pinMember/importStu.do?kid='+kid;
			diag.Width = 700;
			diag.Height = 180;
			diag.CancelEvent = function() { //关闭事件
				if(diag.innerFrame.contentWindow.document.getElementById('zhongxin').style.display == 'none'){
                      if('${page.currentPage}' == '0'){
                          top.jzts();
                          setTimeout("self.location.reload()",100);
                     }else{
                         nextPage('${page.currentPage}');
                      }
                 }
				diag.close();
			};
			diag.show();
		}
	</script>
</body>
</html>

