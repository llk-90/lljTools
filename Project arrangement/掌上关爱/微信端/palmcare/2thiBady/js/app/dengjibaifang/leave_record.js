/**
 * Created by roger on 2018/3/21.
 */
var parName = document.getElementById("parName");
var teaName = document.getElementById("teaName");
var recordText = document.getElementById("recordText");
var visitList = document.getElementById("visitList");
var state = document.getElementById("state");
//页面初始化请求
var openid = GetQueryString("openId");
$.ajax(baseURL+"/visitRegister/recordInfo.webapp", {
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
        if(data.errorcode.code==0){
            parName.innerText = data.parInfo.UserName + "家长";
            teaName.innerText = data.teaInfo.teacherName;
            recordText.innerText = data.recordInfo.reply_content;
            if(data.recordInfo.state==1){
                state.innerText = "请假处理完毕";
            }else{
                state.innerText = "请假申请中...";
            }

            for(var i=0;i<data.recordedInfoList.length;i++){
                if(data.recordedInfoList[i].visit_content.length<6){
                    var str1 = data.recordedInfoList[i].visit_content;
                }else{
                    var str1 = data.recordedInfoList[i].visit_content.substring(0,6)+"...";
                }
                if(data.recordedInfoList[i].reply_content.length<6){
                    var str2 = data.recordedInfoList[i].reply_content;
                }else{
                    var str2 = data.recordedInfoList[i].reply_content.substring(0,6)+"...";
                }
                var li = document.createElement('li');
                li.innerHTML='<h1 style="padding-left:0;">'+
                    '<strong id="ttime" style="margin-top:20px;">'+data.recordedInfoList[i].start_date+'-'+data.recordedInfoList[i].end_date+'</strong></h1><span></span>'+
                '<p><b>原因: </b>'+str1+'</p>'+
                '<p><b>回复: </b>'+str2+'</p>';
                visitList.appendChild(li);
            }
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