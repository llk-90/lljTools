/**
 * Created by roger on 2018/1/24.
 */

$(document).ready(function(){
    var openid = GetQueryString("openid");
    var infoid = GetQueryString("infoid");
    setTimeout(function() {
        $.ajax(baseURL+"/weixiplusEducationInfo/getInfoById.webapp", {
            data: {
                openId:"sgdfhgdfjvbsdjklfgkbvlfjzkvdfgh",
                InfoId:infoid
            },
            dataType: 'json',
            type: 'post',
            timeout: 10000, //超时时间设置为10秒；
            crossDomain: true,
            async:false,
            success: function (data){
                if(data.errorcode.code==0){
                    configView(data.educationInfo);
                }
                else {
                    mui.toast(data.errorcode.errMsg);
                }
            },
            error: function(e) {
                console.log(e);
                mui.toast("服务器正在维护");
            }
        });
    }, 1000);
})
//配置画面
function configView(dataMap){
document.getElementById("titlestr").innerText = dataMap.title;
    document.getElementById("contentStr").innerHTML = dataMap.content;
    //document.getElementById("author").innerText = dataMap.author;
    document.getElementById("pushdate").innerText = getDateDiff(dataMap.create_time);
}