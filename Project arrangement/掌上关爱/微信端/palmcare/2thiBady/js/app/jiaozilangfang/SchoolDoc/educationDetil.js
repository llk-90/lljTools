/**
 * Created by roger on 2018/1/24.
 */

$(document).ready(function(){
    var infoid = GetQueryString("infoid");
    setTimeout(function() {
        $.ajax(baseURL+"/weixiplusEducationInfoForThird/getInfoById.webapp", {
            data: {
                schoolId:#{target},
                InfoId:infoid
            },
            dataType: 'json',
            type: 'post',
            timeout: 10000, //超时时间设置为10秒；
            crossDomain: true,
            async:false,
            beforeSend:function(){
                var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
                if(xval) {
                    xval.settext("加载中，请稍后......");
                }
            },
            success: function (data){
                if(data.errorcode.code==0){
                    xval.remove();
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

