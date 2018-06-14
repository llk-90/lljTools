var phonenum="";
var firmname="";
var marketingId="";
var CityId="";
var CityName="";
var picurl="";
/* var connphone="400-108-0668"; */
var StudentName="";

$(document).ready(function(){ 
     //使用正则表达式获取url中的参数
     function getUrlParam(name) {
         //构造一个含有目标参数的正则表达式对象
         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
         //匹配目标参数 
         var r = encodeURI(window.location.search).substr(1).match(reg); 
         //返回参数值
         if (r != null) return unescape(r[2]); return null;
     }
     //var openId=getUrlParam('openId');
	var openId = GetQueryString("openId");
     marketingId=getUrlParam('marketingId');
     CityId=getUrlParam('CityId');
     picurl=getUrlParam('picurl')
     
      /* var html='<img style="height:100%" src='+picurl+'/>' */
     var html='<img  src='+picurl+' style="height:100%"/>'
			    	$("#pic").append(html);
     /* 查找手机号 */
	 $.ajax(baseURL+"/heEduSubscriptInfo/selectphonenum.webapp",{
			    type: "POST",
			    data:{
			    	openId: openId
			    },
		 		async:false,
			    success: function(data){
					console.log(123);
					console.log(data);
			    	phonenum=data.s_phone;
			    	$("#phone").html("购买账号:"+phonenum);
			    	$("#phone2").html(phonenum);
			    }
	 });
	 /* 查找套餐信息 */
     $.ajax(baseURL+"/heEduSubscriptInfo/detailedInfo.webapp",{
		    type: "POST",
		    data:{
		    	cityID: CityId,
		    	Yewuid: marketingId
		    },
		 	async:false,
		    success: function(data){
		    	$("#city").html("套餐地区:"+data.YewuInfo.CityInfo);
		    	$("#introduction").html(data.YewuInfo.Describe);
		    	console.log(data.YewuInfo.Describe)
		    }
	});
     /* 查找用户名 */
     $.ajax(baseURL+"/heEduSubscriptInfo/selectUsername.webapp",{
		    type: "POST",
		    data:{
		    	openId:openId
		    },
		 	async:false,
		    success: function(data){
		    	console.log(data)
		    	StudentName=data.username;
		    }
	});
		
}); 
	 
function showModal(){
	$('#myModal').modal('show')
	//防止输入字母e 
	$("#code").focus(function(){
		$('input[type=number]').keypress(function(e) {
			　　if (!String.fromCharCode(e.keyCode).match(/[0-9\.]/)) {
			　　　　return false;
			　　}
		});
	})
}

var countdown=60;
//获取二维码倒计时方法 
function settime() {
	  
	   var btn = document.getElementById("getCode");
		if(countdown == 0){
			btn.removeAttribute("disabled");
			btn.innerText="获取验证码";
			countdown = 60;
			return;
		}else{
			btn.setAttribute("disabled",true);
			btn.innerText= countdown +"s后重发送";
			countdown--;
		}
		setTimeout("settime()",1000);
	}
	
//请求后台验证码
function sendSMS(){
	settime();
	$.ajax(baseURL+"/heEduSubscriptInfo/sendSMS.webapp", {
		data:{
			packageId : marketingId,
			phoneNum : phonenum,
			cityId : CityId,
			StudentName : StudentName
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		async:false,
		success: function(data) {
			if(data.SMSresult =="200"){
				mui.toast("验证码发送成功");
			}else {
				mui.toast(data.SMSresult);
			}
		},
		error: function(xhr, type, errorThrown) {
			mui.toast("获取信息失败")
		}
 });
}
//验证验证码 
function sendCode(){
	if(!$("#code").val()){
		mui.toast("验证码不能为空");
		return ;
	}
	$("#ensure").attr('disabled',true);  
	
	 $.ajax(baseURL+"/heEduSubscriptInfo/VerifyCode.webapp", {
		data:{
			cityId : CityId,
			StudentName : StudentName,
			packageId : marketingId,
			code : $("#code").val(),
			phoneNum : phonenum
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
	 	timeout: 10000,  //超时时间设置为10秒；
		 async:false,
		success: function(data) {
			if(data.Coderesult =="200"){
				mui.toast("验证成功")
				window.location.href="kaitong.html";
			}else {
				var result=data.Coderesult;
				console.log(result);
				mui.toast("验证码不正确")
				//window.location.href="kaitong.html";
			}
		},
		error: function(xhr, type, errorThrown) {
			mui.toast("获取信息失败")
		}
	}); 
	 
	 $("#ensure").attr('disabled',false); 
}