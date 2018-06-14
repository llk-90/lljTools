/**
 * Created by roger on 2018/4/3.
 */
var openid = GetQueryString("openId");
var apply = document.getElementById("apply");
var leaveList = document.getElementById("leaveList");
console.log(111);
console.log(openid);
//请假申请
$.ajax(baseURL+"/visitRegister/getNoHandleLeaveInfo.webapp", {
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
        for(var i = 0; i < data.NoHandleleaveInfo.length; i++){
            var div = document.createElement('div');
            div.className = 'qingjia-content';
            div.innerHTML='<h1>'+data.NoHandleleaveInfo[i].stuName+'&nbsp;</h1><h1 style="float: right;font-size:12px;">&nbsp;'+data.NoHandleleaveInfo[i].start_date+'-'+data.NoHandleleaveInfo[i].end_date+'&nbsp;&nbsp;'+data.NoHandleleaveInfo[i].start_time+'&nbsp;-&nbsp;'+data.NoHandleleaveInfo[i].end_time+'</h1>'+
                '<div  class="textarea" style="margin-top:3px;">'+data.NoHandleleaveInfo[i].askleave_reason+'</div><h2>老师回复内容:  </h2>'+
                '<textarea  class="dd2" style="margin-bottom:0px;"></textarea>'+
                '<button onclick="okkk(this.previousSibling.value,this)"  data-aaa='+data.NoHandleleaveInfo[i].id+' type="button" style="width:80px;margin-left:15%;background-color:#50bc63;color: white;">同意</button>'+
                '<button type="button" onclick="refusse(this.previousSibling.previousSibling.value,this)" data-aaa='+data.NoHandleleaveInfo[i].id+' style="width:80px;display:block;float:right;margin-right:15%;background-color:#fc643b;color: white;">拒绝</button>';
            apply.appendChild(div);
        }


    },
    error: function(e) {
        console.log(e);
        mui.toast("服务器正在维护");
    }
});
function refusse(data,id){
    console.log(id.getAttribute("data-aaa").valueOf());
    $.ajax(baseURL+"/visitRegister/leaveRefuse.webapp", {
        data: {
            openId:openid,
            reply_content:data,
            id:id.getAttribute("data-aaa").valueOf()
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


function okkk(data,id){
    console.log(id.getAttribute("data-aaa").value);
    $.ajax(baseURL+"/visitRegister/leaveOk.webapp", {
        data: {
            openId:openid,
            reply_content:data,
            id:id.getAttribute("data-aaa").valueOf()
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






//请假记录
$.ajax(baseURL+"/visitRegister/getHandleLeaveInfo.webapp", {
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
        for(var i = 0; i < data.HandleleaveInfo.length; i++){

            if(data.HandleleaveInfo[i].askleave_reason.length<6){
                var str1 = data.HandleleaveInfo[i].askleave_reason;
            }else{
                var str1 = data.HandleleaveInfo[i].askleave_reason.substring(0,6)+"...";
            }
            if(data.HandleleaveInfo[i].reply_content.length<6){
                var str2 = data.HandleleaveInfo[i].reply_content;
            }else{
                var str2 = data.HandleleaveInfo[i].reply_content.substring(0,6)+"...";
            }
            if(data.HandleleaveInfo[i].pass_type==1){
                var str3 = '同意';
                var str4 = '#50bc63';
            }else{
                var str3 = '拒绝';
                var str4 = '#fc643b';
            }

            var li = document.createElement('li');
            li.innerHTML=' <li><h1 style="padding-left:0;padding-top:0">'+
                '<strong id="parName" style="margin-top:23px;height:30px;line-height:30px;">'+data.HandleleaveInfo[i].stuName+'家长</strong>'+
                '<strong id="ttime" style="margin-top:10px;height:30px;line-height:30px;">'+data.HandleleaveInfo[i].start_date+'-'+data.HandleleaveInfo[i].end_date+'&nbsp;&nbsp;'+data.HandleleaveInfo[i].start_time+'-'+data.HandleleaveInfo[i].end_time+'</strong>'+
                '</h1><span style="font-size:12px;background-color:'+str4+';color:white;padding-top:7px;">'+str3+'</span>'+
                '<p><b>原因: </b>'+str1+'</p><p><b>回复: </b>'+str2+'</p></li>';
            leaveList.appendChild(li);
        }
    },
    error: function(e) {
        console.log(e);
        mui.toast("服务器正在维护");
    }
});