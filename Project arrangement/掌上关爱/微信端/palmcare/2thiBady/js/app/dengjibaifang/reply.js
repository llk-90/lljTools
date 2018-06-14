/**
 * Created by roger on 2018/3/30.
 */
//页面初始化请求
var openid = GetQueryString("openId");
var apply = document.getElementById("apply");
var visitList = document.getElementById("visitList");
//
//$.ajax(baseURL+"/visitRegister/getInfoList.webapp", {
//    data: {
//        openId:'oCBdZwzHfl3JOjDn2WP79YIOmQSA'
//    },
//    dataType: 'json',
//    type: 'post',
//    timeout: 10000, //超时时间设置为10秒；
//    crossDomain: true,
//    async:false,
//    success: function (data){
//        console.log(111);
//        console.log(data);
//        if(data.errorcode.code==0){
//            parName.innerText = data.parInfo.UserName;
//            parPhone.innerText = data.parInfo.phone_num;
//        }
//        else {
//            mui.toast(data.errorcode.errMsg);
//        }
//    },
//    error: function(e) {
//        console.log(e);
//        mui.toast("服务器正在维护");
//    }
//});
//拜访申请
$.ajax(baseURL+"/visitRegister/getHandleInfo.webapp", {
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
        for(var i = 0; i < data.HandleInfo.length; i++){
            var div = document.createElement('div');
            div.className = 'qingjia-content';
            div.innerHTML='<h1>'+data.HandleInfo[i].stuName+'&nbsp;</h1><h1 style="float: right;font-size:12px;">时间:&nbsp;'+data.HandleInfo[i].start_date+'&nbsp;&nbsp;'+data.HandleInfo[i].start_time+'&nbsp;-&nbsp;'+data.HandleInfo[i].end_time+'</h1>'+
                '<div  class="textarea" style="margin-top:3px;">'+data.HandleInfo[i].visit_content+'</div><h2>老师回复内容:  </h2>'+
                '<textarea  class="dd2" style="margin-bottom:0px;"></textarea>'+
                '<button onclick="okkk(this.previousSibling.value,this)"  data-aaa='+data.HandleInfo[i].id+' type="button" style="width:80px;margin-left:15%;background-color:#50bc63;color: white;">同意</button>'+
                '<button type="button" onclick="refusse(this.previousSibling.previousSibling.value,this)" data-aaa='+data.HandleInfo[i].id+' style="width:80px;display:block;float:right;margin-right:15%;background-color:#fc643b;color: white;">拒绝</button>';
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
    $.ajax(baseURL+"/visitRegister/visitRefuse.webapp", {
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
    $.ajax(baseURL+"/visitRegister/visitOk.webapp", {
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


//拜访记录
$.ajax(baseURL+"/visitRegister/getNoHandleInfo.webapp", {
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
        for(var i = 0; i < data.NoHandleInfo.length; i++){

            if(data.NoHandleInfo[i].visit_content.length<6){
                var str1 = data.NoHandleInfo[i].visit_content;
            }else{
                var str1 = data.NoHandleInfo[i].visit_content.substring(0,6)+"...";
            }
            if(data.NoHandleInfo[i].reply_content.length<6){
                var str2 = data.NoHandleInfo[i].reply_content;
            }else{
                var str2 = data.NoHandleInfo[i].reply_content.substring(0,6)+"...";
            }
            if(data.NoHandleInfo[i].pass_type==1){
                var str3 = '同意';
                var str4 = '#50bc63';
            }else{
                var str3 = '拒绝';
                var str4 = '#fc643b';
            }
            var li = document.createElement('li');
            li.innerHTML='<h1 style="padding-left:0;padding-top:0">'+
                '<strong id="parName" style="margin-top:23px;height:30px;line-height:30px;">'+data.NoHandleInfo[i].stuName+'家长</strong>'+
                '<strong id="ttime" style="margin-top:10px;height:30px;line-height:30px;">'+data.NoHandleInfo[i].start_date+'&nbsp;'+data.NoHandleInfo[i].start_time+'-'+data.NoHandleInfo[i].end_time+'</strong></h1>'+
                '<span style="font-size:12px;background-color:'+str4+';color:white;padding-top:7px;">'+str3+'</span>'+
                '<p><b>原因: </b>'+str1+'</p><p><b>回复: </b>'+str2+'</p>';
            visitList.appendChild(li);
        }
    },
    error: function(e) {
        console.log(e);
        mui.toast("服务器正在维护");
    }
});