/**
 * Created by roger on 2018/4/3.
 */
var parName = document.getElementById("parName");
var teaName = document.getElementById("teaName");
var recordText = document.getElementById("recordText");
var leaveList = document.getElementById("leaveList");
var applyType = document.getElementById("applyType");

//页面初始化请求
var openid = GetQueryString("openId");
$.ajax(baseURL+"/visitRegister/leaveApplyInfo.webapp", {
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
            parName.innerText = (data.parInfo!=null?data.parInfo.UserName + "家长":'');
            teaName.innerText = (data.parInfo!=null?data.teaInfo.teacherName:'');
            recordText.innerText = (data.parInfo!=null?data.recordInfo.reply_content:'');
            if(data.recordInfo.state==1){
                applyType.innerText = "请假处理完毕";
            }else{
                applyType.innerText = "请假申请中...";
            }
            for(var i=0;i<data.leaveRecordedInfoList.length;i++){
                if(data.leaveRecordedInfoList[i].askleave_reason.length<6){
                    var str1 = data.leaveRecordedInfoList[i].askleave_reason;
                }else{
                    var str1 = data.leaveRecordedInfoList[i].askleave_reason.substring(0,6)+"...";
                }
                if(data.leaveRecordedInfoList[i].reply_content.length<6){
                    var str2 = data.leaveRecordedInfoList[i].reply_content;
                }else{
                    var str2 = data.leaveRecordedInfoList[i].reply_content.substring(0,6)+"...";
                }
                if(data.leaveRecordedInfoList[i].pass_type==1){
                    var str3 = "请假批准";
                }else{
                    var str3 = "请假不批准";
                }
                var li = document.createElement('li');
                li.innerHTML='<li><h1>'+str3+'<strong>2017.11.11-2017.11.15</strong></h1>'+
                '<span></span><p><b>原因: </b>'+str1+'</p><p><b>回复: </b>'+str2+'</p>'+
                '</li>';
                leaveList.appendChild(li);
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