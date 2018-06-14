var CityId="";
var openid ="";
$(document).ready(function(){
	var openid = GetQueryString("openId");
	$.ajax(baseURL+"/heEduSubscriptInfo/selectCity2.webapp", {
		data: {
			openId:openid
		},
		dataType: 'json',
		type: 'post',
		timeout: 10000, //超时时间设置为10秒；
		async:false,
		success: function (data){
			console.log(data);
			CityId=data.CityId;
			document.title=data.CityName+document.title;
			/* CityName=data.CityName; */
		},
		error: function(e) {
			console.log(e);
			mui.toast("服务器正在维护");
		}
	});
console.log(CityId);
  	/* 查找业务信息 */
  	$.ajax(baseURL+"/heEduSubscriptInfo/InitInfo.webapp",{
	    data:{
	    	CityId : CityId
	    },
	    dataType: "json",
	    type: "post",
	    async: false,
	    success: function(data){
	    	if(data.result!="empty"){
	       		for(var i=0;i<data.initInfo.length;i++){
	       			var html='<div class="mui-slider" style="height:100%">'
									+'<div class="mui-slider-group"style="height:100%">'
									+'<div class="mui-slider-item"style="height:100%">'
									+'<a href="detail.html?marketingId='+data.initInfo[i].marketingId+'&openId='+openid+'&CityId='+CityId+'&picurl='+data.initInfo[i].pictureURL+'" style="height:100%">'
									+'<img style="height:100%"  src='+data.initInfo[i].pictureURL+' /></a>'
									+'</div></div></div>'
					$("#pics").append(html);				
	       		}
	    	}
	    }
  })
  
/*  $.ajax({
	    url:"http://api.sms.cn/mt",
	    data:{
	    	uid:'zqq',
	    	pwd:'202cb962ac59075b964b07152d234b70',
	    	mobile:'17316944816',
	    	content:'code'
	    },
	    dataType: "json",
	    type: "post",
	    async: false,
	    success: function(data){
	    	console.log("success")
	    },
	    error:function(response){
	    	console.log(response)
	    }
  })
  */
})