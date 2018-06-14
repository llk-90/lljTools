

 var userInfo = new Object();//初始化用户obj
 var attendances = [];//初始化考勤信息列表

//页面初始化回调函数
 $(document).ready(function(){

     userInfo.openId = GetQueryString("openid");
     userInfo.userName = "123";
     console.log(123);
     request();
 })

 //网络请求
  function  request(){
      $.ajax(baseURL+"/weixiplusCommon/getAtteinfo.webapp", {
         data:{
             openId:userInfo.openId
         },
         dataType: 'json', //服务器返回json格式数据
         type: 'post', //HTTP请求类型
         timeout: 10000, //超时时间设置为10秒；
         crossDomain:true,
         async:false,
      
         success: function(data) {
             //成功回调
             if (data.errorcode.code==0){//成功时显示全部
                 configView(data)
             }else if (data.errorcode.code==1003)
             {//仅没有考勤信息时，显示用户信息
                 configView(data);
                 mui.toast(data.errorcode.resultSucMsg)
             }
             else {
                 //其他错误，显示error信息
                 mui.toast(data.errorcode.resultSucMsg)
             }


         },
         error: function(e) {
             //失败回调
             mui.toast(e);
         }

     });
 }
 //配置考勤列表
  function  configView(data){
      document.getElementById("username").innerHTML=data.infolist[0].StuName;
      document.getElementById("classname").innerHTML=data.infolist[0].ClassName;
      $("#kaoqin").text(data.infolist[0].StuName+"一周的考勤记录如下");
      // document.getElementById("latecount").innerHTML= (data.infolist[0].lateCount)=="undefined"?"0":data.infolist[0].lateCount;
     // document.getElementById("leavecount").innerHTML= (data.infolist[0].leaveCount)=="undefined"?"0":data.infolist[0].leaveCount;
      if (data.attelist.length==0) return;
      var table = document.body.querySelector('#list-view');
    	  for (var  i = 0;i < data.attelist.length;i ++) {
    		  var li = document.createElement('li');
    		  if (data.attelist[i]!= "") {
    			  if(data.attelist[i+1] == null){
    				  data.attelist[i+1]=0;
    			  }
    			  var amin = data.attelist[i].substring(3,11)//上午到
    			  var amout = data.attelist[i].substring(15,23)//上午离
    			  var pmin = data.attelist[i].substring(27,35)//下午到
    			  var pmout = data.attelist[i].substring(39)//下午离
    		     if(amin.trim()=="00:00:00"){
    		    	 amin = "-- : -- : --"; 
    		     }
    			  if(pmout.trim()=="00:00:00"){
    				  pmout ="-- : -- : --"
    			  }
    			li.innerHTML = ' <a href="attendance_Ranking_List.html?querydate='+data.attelist[i+2] + '&openid=' + userInfo.openId + '"> <i>' + data.attelist[i].substring(0,2) + '日</i> <span>' + data.attelist[i+1] + '</span><p><b>到校时间</b>' + amin + '</p><p><b>离校时间</b>'+pmout+'</p> </a>';
    			  i+=2;
    		  }
    		  else {
    		  }
    		  table.appendChild(li);
    	  }
  }
   function nextPage(a,b){
       window.location.href = 'attendance_Ranking_List.html?querydate='+ a+'&openid='+b;
   }



