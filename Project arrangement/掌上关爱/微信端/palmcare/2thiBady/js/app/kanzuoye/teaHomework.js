/**
 * Created by roger on 2018/4/3.
 */
var home_content = document.getElementById("home_content");
var homeworkList = document.getElementById("homeworkList");
var openid = GetQueryString("openId");
function submit(){
    $.ajax(baseURL+"/visitRegister/subHomework.webapp", {
        data: {
            openId:openid,
            homework:home_content.value
        },
        dataType: 'json',
        type: 'post',
        timeout: 10000, //超时时间设置为10秒；
        crossDomain: true,
        async:false,
        success: function (data){
            location.reload();
        },
        error: function(e) {
            console.log(e);
            mui.toast("服务器正在维护");
        }
    });
}


$.ajax(baseURL+"/visitRegister/homeworkList.webapp", {
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