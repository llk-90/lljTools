/**
 * Created by roger on 2018/4/3.
 */
var todayHomework = document.getElementById("todayHomework");
var homeworkList = document.getElementById("homeworkList");
var openid = GetQueryString("openId");
$.ajax(baseURL+"/visitRegister/askHomework.webapp", {
    data: {
        openId:openid
    },
    dataType: 'json',
    type: 'post',
    timeout: 10000, //超时时间设置为10秒；
    crossDomain: true,
    async:false,
    success: function (data){
        console.log(data);
        todayHomework.innerText=(data.todayHomework!=null?data.todayHomework.homework:'');
        for(var i=0;i<data.homeworkList.length;i++){
            var div = document.createElement('div');
            div.className='qingjia-content';
            div.style.width="100%";
            div.innerHTML='<div style="width: 100%">'+data.homeworkList[i].creat_time+'</div>'+
                '<div class="textarea">'+data.homeworkList[i].homework+'</div>';
            homeworkList.appendChild(div);
        }
    },
    error: function(e) {
        console.log(e);
        mui.toast("服务器正在维护");
    }
});