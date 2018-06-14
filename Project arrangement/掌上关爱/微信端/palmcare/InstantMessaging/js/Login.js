/**
 * 
 */
function registered(){
	$('#myModal').modal('show')
}
function Logining(){
var UserNum= document.getElementById("Login_UserNum").value;	 
window.location.href= "IMindex.html?"+ "UseNum=" + UserNum ;
}

function LordUserInfo(){
	var UserId=document.getElementById("Login_UserNum").value;
	var Password=document.getElementById("Login_Password").value;
	mui.ajax("/IMController/LoadUserInfo.webapp", {
		data:{
			UserName : UserName,
			Password :  Password
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒
		success: function(data) {
       		if(data.result == "success"){
       			Logining();
			} else if(data.result == "empty"){
				mui.toast("输入的账号密码有误，请核实")
			} else {
				mui.toast("获取信息失败1")
			}
		},
		error: function(xhr, type, errorThrown) {
			mui.toast("获取信息失败2")
		} 
	});
}