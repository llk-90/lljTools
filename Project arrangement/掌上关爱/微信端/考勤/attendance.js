

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
     // var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
      $.ajax(baseURL+"/weixiplusCommon/getAtteinfo.webapp", {
         data:{
             openId:userInfo.openId
         },
         dataType: 'json', //服务器返回json格式数据
         type: 'post', //HTTP请求类型
         timeout: 10000, //超时时间设置为10秒；
         crossDomain:true,
         async:false,
        /* beforeSend:function(){
             if(xval) {
                 xval.settext("加载中，请稍后......");
             }
         },*/
         success: function(data) {
             //成功回调
             if (data.errorcode.code==0){//成功时显示全部
                // xval.remove();
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
      document.getElementById("latecount").innerHTML= typeof (data.infolist[0].lateCount)=="undefined"?"0":data.infolist[0].lateCount;
      document.getElementById("leavecount").innerHTML= typeof (data.infolist[0].leaveCount)=="undefined"?"0":data.infolist[0].leaveCount;
      if (data.attelist.length==0) return;
      var table = document.body.querySelector('#list-view');
      for (var  i = 0;i < data.attelist.length;i ++) {
          var li = document.createElement('li');
          if (data.attelist[i]!= "") {
        	  if(data.attelist[i+1] == null){
        		  data.attelist[i+1]=0;
        	  }
              li.innerHTML = '<li  class=' + '> <a href="attendance_Ranking_List.html?querydate=' + '&openid=' + userInfo.openId + '"> <i>' + data.attelist[i].substring(0,2) + '日</i> <span>' + data.attelist[i+1] + '</span><p><b>上午</b>' + data.attelist[i].substring(3,11) + '到 ~ ' + data.attelist[i].substring(15,23) + ' 离</p><p><b>下午</b>'+data.attelist[i].substring(27,35)+'到 ~ '+data.attelist[i].substring(39)+' 离</p> </a> </li>';
                i++;
          }
          else {
          }

          //下拉刷新，新纪录插到最前面；

          table.appendChild(li);
      }
  }
   function nextPage(a,b){
       window.location.href = 'attendance_Ranking_List.html?querydate='+ a+'&openid='+b;
   }



