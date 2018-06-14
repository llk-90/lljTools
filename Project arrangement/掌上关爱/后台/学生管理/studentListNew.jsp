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
					<form action="StudentManager/list.do" method="post"   
						name="stuForm" id="stuForm">   
						<table>
							<tr>
                               <!--区域-->
								<td style="vertical-align: top;">
									<select name="schoolParam"
										id="schoolParam" class="chzn-select" style="width: 250px;"
										data-placeholder="请选择学校" onchange="getGradeBySchId();">
											<option value=""></option>
											<option value="QB"
												<c:if test="${'QB' eq pd.schoolParam }">selected="selected"</c:if>>全部</option>
											<c:forEach items="${scList }" var="school" varStatus="vs">
												<option value="${school.SchoolId }"
													<c:if test="${school.SchoolId.toString() eq pd.schoolParam.toString() }">selected="selected"</c:if>>${school.SchoolName }</option>
											</c:forEach>
									</select>
								</td>
								<!--年级-->
								<td style="vertical-align: top;">
								<select name="gradeParam"
									id="gradeParam" class="chzn-select" style="width: 200px;"
									data-placeholder="请选择年级" onchange="getClassByGradeId();">
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

								<!-- 学生姓名-->
								<td>
								  <span class="input-icon">
								   <input autocomplete="off" id="nav-search-input" type="text" name="stuName"
											placeholder="这里输入学生姓名" value="${pd. stuName}"/> 
											<i id="nav-search-icon" class="icon-search"></i>
								  </span>
								</td>

								<td style="vertical-align: top;">
									<button class="btn btn-mini btn-light" onclick="search();"
										title="检索">
										<i id="nav-search-icon" class="icon-search"></i>
									</button> 
								<a class="btn btn-mini btn-light" onclick="importExcel();"
									title="导入"> <i id="nav-search-icon" class="icon-upload-alt"></i>
								    </a> 
								</td>
							</tr>
						</table> 
						<table id="table_report"
							class="table table-striped table-bordered table-hover">
							<thead>
							    <tr>
								    <td colspan="8" class="center">学生信息表</td>
								</tr>
								<tr>
									<th class="center">
									  <label>
									     <input type="checkbox" id="zcheckbox" />
									     <span class="lbl"></span>
									  </label>
									</th>
								    <th class="center" >序号</th>
									<th class="center" >学生学号</th>
									<th class="center" >学生姓名</th>
									<th class="center" >学生性别</th>
									<th class="center" >学生家长</th>
									<th class="center" >家长电话</th>
									<th class="center">操作</th>
								</tr>
							</thead>
							<tbody>
								<!-- 开始循环 -->
								<c:choose>
									<c:when test="${not empty stuList}">
										<c:forEach items="${stuList}" var="stu"
											varStatus="vs">
											<tr>
										       <td class='center' style="width: 30px;">
										             <label>
														<input type='checkbox' name='ids' value="${stu.StudentId}" />
														<span class="lbl"></span>
												    </label>
												</td>
												<td class='center' style="width: 30px;">${vs.index+1}</td>
												<td class="center">${stu.SeqStudent}</td>
												<td class="center">${stu.UserName}</td>
												<td class="center">${stu.Sex}</td>
												<td class="center" >${stu.ParUserName}</td>
												<td class="center" >${stu.ParLoginName}</td>
												<td style="width: 50px;" class="center">
												   <a
													class='btn btn-mini btn-info' title="编辑"
													onclick="edit(this);" data-stuId = '${stu.StudentId }' data-parId='${stu.ParentId }'> <i class='icon-edit'></i>
												   </a>
												</td>
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
					      		    <td style="vertical-align: top;">
										   <a class="btn btn-small btn-success" onclick="add();">新增</a>
										    <a class="btn btn-small btn-danger" onclick="deleteStuInfo('确定要删除选中的数据吗?');" title="批量删除">
												<i class='icon-trash'></i>
											</a>
									</td> 
									<td style="vertical-align: top;">
									<div class="pagination" style="float: right; padding-top: 0px; margin-top: 0px;">${page.pageStr}</div>
								    </td>
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
			$("#stuForm").submit();
		}
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
		
		//新增
		function add(){
			 top.jzts();
			 var diag = new top.Dialog();
			 diag.Drag=true;
			 diag.Title ="新增";
			 diag.URL = '<%=basePath%>StudentManager/stuAddView.do';
			 diag.Width = 800;
			 diag.Height = 400;
			 diag.CancelEvent = function(){ //关闭事件
				 if(diag.innerFrame.contentWindow.document.getElementById('zhongxin').style.display == 'none'){
					 if('${page.currentPage}' == '0'){
						 top.jzts();
						 setTimeout("self.location=self.location",100);
					 }else{
						 nextPage('${page.currentPage}');
					 }
				}
				diag.close();
			 };
			 diag.show();
		} 
		
		//修改
		function edit(e){
		  var stuId = $(e).attr("data-stuId");
		  var parId = $(e).attr("data-parId");
			 top.jzts();
			 var diag = new top.Dialog();
			 diag.Drag=true;
			 diag.Title ="编辑";
			 diag.URL = '<%=basePath%>StudentManager/stuEditView.do?studentId='+stuId+'&parentId='+parId;
			 diag.Width = 700;
			 diag.Height = 350;
			 diag.CancelEvent = function(){ //关闭事件
				 if(diag.innerFrame.contentWindow.document.getElementById('zhongxin').style.display == 'none'){
					 nextPage('${page.currentPage}');
				}
				diag.close();
			 };
			 diag.show();
		}
		
		//批量删除
		function deleteStuInfo(msg){
			var str = '';
			for(var i=0;i < document.getElementsByName('ids').length;i++)
			{
				  if(document.getElementsByName('ids')[i].checked){
				  	if(str=='') str += document.getElementsByName('ids')[i].value;
				  	else str += ',' + document.getElementsByName('ids')[i].value;
				  }
			}
			if(str==''){
				$("#zcheckbox").tips({
					side:3,
		            msg:'请至少选择一条',
		            bg:'#FF5080',
		            time:2
		        });
				
				return;
			}else{
				bootbox.confirm(msg, function(result) {
					if(result) {
							top.jzts();
							$.ajax({
								type: "POST",
								url: '<%=basePath%>StudentManager/deleteAll.do',
						    	data: {stuId:str},
								dataType:'json',
								cache: false,
								success: function(data){
									console.log(data);
									 if(data.msg =="ok"){
									 alert("数据删除成功");
									 $.each(data.list, function(i, list){
											nextPage('${page.currentPage}');
									 });
									 }
								},
								error:function(data,stauts,e){
									alert("服务器正在维护！！！");
								}
							});
						
					}
				});
			}
		}
		
		//打开上传excel页面      2016/8/30 yc 新增
        function importExcel(){
             top.jzts();
             var diag = new top.Dialog();
             diag.Drag=true;
             diag.Title ="学生信息导入";
             diag.URL = '<%=basePath%>StudentManager/importStu.do';
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
	<script type="text/javascript">
		
		$(function() {
			
			//下拉框
			$(".chzn-select").chosen(); 
			$(".chzn-select-deselect").chosen({allow_single_deselect:true}); 
			
			//日期框
			$('.date-picker').datepicker();
			
			//复选框
			$('table th input:checkbox').on('click' , function(){
				var that = this;
				$(this).closest('table').find('tr > td:first-child input:checkbox')
				.each(function(){
					this.checked = that.checked;
					$(this).closest('tr').toggleClass('selected');
				});
					
			});
			
			if('${pd.schoolParam}' != ''){
				getGradeBySchId();
			}
			
		})
	</script>

</body>
</html>

