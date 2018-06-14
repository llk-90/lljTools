/**
 * Created by George on 2018/3/2.
 */

var userInfo = new Object();// 初始化用户obj
var attendances = [];// 初始化考勤信息列表
var date;
// 页面初始化回调函数
$(document).ready(function() {

	userInfo.openId = GetQueryString("openid");
	userInfo.userName = "123";

	var str = window.location.search;
	dateTime = GetQueryString("querydate");

	request();
})

// 网络请求
function request() {
	var xval = getBusyOverlay(
			'viewport',
			{
				color : 'white',
				opacity : 0.75,
				text : '加载中',
				style : 'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'
			}, {
				color : '#59bf6b',
				size : 70,
				type : 'o'
			});
	$
			.ajax(
					baseURL + "/weixiplusCommon/getRankdetails.webapp",
					{
						data : {
							openId : userInfo.openId,
							querydate : dateTime
						},
						dataType : 'json', // 服务器返回json格式数据
						type : 'post', // HTTP请求类型
						timeout : 10000, // 超时时间设置为10秒；
						crossDomain : true,
						async : false,
						beforeSend : function() {
							if (xval) {
								xval.settext("加载中，请稍后......");
							}
						},
						success : function(data) {
							// 成功回调
							if (data.errorcode.code == 0) {
								xval.remove();
								console.log(data);
								document.getElementById("username").innerHTML = data.userids[0].UserName;
								document.getElementById("classname").innerHTML = data.userids[0].ClassName;
								document.getElementById("signin").innerHTML = (data.userids[0].date) == undefined ? "0"
										: data.userids[0].date;
								document.getElementById("rank").innerHTML = data.userids[0].rank == undefined ? "0"
										: (data.userids[0].rank);
								var newdate = new Date();
								document.getElementById("time-now").innerHTML = dateTime;

								var table = document.body
										.querySelector('#list-view');
								if (data.attences.length > 0) {
									for (var k = 1; k < data.attences.length + 1; k++) {
										for (var i = 0; i < data.attences.length; i++) {
											var li = document
													.createElement('li');
											if (data.attences[i].rank == k) {
												if (data.attences[i].rank == 1) {
													li.innerHTML = '<i><img src='
															+ "../../img/geren/mylogo.jpg"
															+ '></i> <h1>'
															+ data.attences[i].stuName
															+ '</h1> <span class='
															+ "top1"
															+ '>'
															+ data.attences[i].rank
															+ '</span> <p>报道时间  : '
															+ data.attences[i].date
															+ '</p>';
												} else if (data.attences[i].rank == 2) {
													li.innerHTML = '<i><img src='
															+ "../../img/geren/mylogo.jpg"
															+ '></i> <h1>'
															+ data.attences[i].stuName
															+ '</h1> <span class='
															+ "top2"
															+ '>'
															+ data.attences[i].rank
															+ '</span> <p>报道时间  : '
															+ data.attences[i].date
															+ '</p>';
												} else if (data.attences[i].rank == 3) {
													li.innerHTML = '<i><img src='
															+ "../../img/geren/mylogo.jpg"
															+ '></i> <h1>'
															+ data.attences[i].stuName
															+ '</h1> <span class='
															+ "top3"
															+ '>'
															+ data.attences[i].rank
															+ '</span> <p>报道时间  : '
															+ data.attences[i].date
															+ '</p>';
												} else {
													li.innerHTML = '<i><img src='
															+ "../../img/geren/mylogo.jpg"
															+ '></i> <h1>'
															+ data.attences[i].stuName
															+ '</h1> <span>'
															+ data.attences[i].rank
															+ '</span> <p>报道时间  : '
															+ data.attences[i].date
															+ '</p>  </li>';
												}
												table.appendChild(li);
											}
										}
									}
								} else {
									var li = document.createElement('li');
									li.innerHTML = '<div id="top" style="display:flex; justify-content:center;align-items:center;height:100px; color: gray;"><h4>无考勤数据</h4></div>';
									table.appendChild(li);
								}
							} else {
								mui.toast(data.errorcode.resultSucMsg)
							}
						},
						error : function(e) {
							//失败回调
							mui.toast(e);
						}

					});
}