/**
 * Created by roger on 2018/3/20.
 */

//开始年月日
var beginDay = document.getElementById("beginDay");
//结束年月日
var endDay = document.getElementById("endDay");
//开始时间
var beginTime = document.getElementById("beginTime");
//结束时间
var endTime = document.getElementById("endTime");
//拜访内容
var visitContent = document.getElementById("visitContent");
var parName = document.getElementById("parName");
var parPhone = document.getElementById("parPhone");
var teaName = document.getElementById("teaName");
var teaPhone = document.getElementById("teaPhone");
var teaOpenId;
//学生姓名
var stuName;
//电话
var phone;
var openid = GetQueryString("openId");

//申请拜访点击事件
function aClick(){
    console.log(22);
    console.log(teaOpenId);
    var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
    $.ajax(baseURL+"/visitRegister/insertInfo.webapp", {
        data: {
            openId:openid,
            beginDay:beginDay.value,
            endDay:endDay.value,
            beginTime:beginTime.value,
            endTime:endTime.value,
            visitContent:visitContent.value,
            stuName:stuName,
            teaOpenId:teaOpenId
        },
        dataType: 'json',
        type: 'post',
        timeout: 10000, //超时时间设置为10秒；
        crossDomain: true,
        async:false,
        beforeSend:function(){
            if(xval) {
                xval.settext("加载中，请稍后......");
            }
        },
        success: function (data){
            if(data.errorcode.code==0){
                xval.remove();
                window.location.href = "../dengjibaifang/leave_record.html?openid="+openid;
            }
            else {
                mui.toast(data.errorcode.errMsg);
            }
        },
        error: function(e) {
            console.log(e);
            mui.toast("请输入数据");
        }
    });
}

//页面初始化请求
var openid = GetQueryString("openId");
$.ajax(baseURL+"/visitRegister/getInfoList.webapp", {
    data: {
        openId:openid
    },
    dataType: 'json',
    type: 'post',
    timeout: 10000, //超时时间设置为10秒；
    crossDomain: true,
    async:false,
    success: function (data){
        console.log(111);
        console.log(data);
        if(data.errorcode.code==0){

            if(data.parInfo.phone_num==undefined){
                var str1 = "无";
            }else{
                var str1 = data.parInfo.phone_num;
            }
            if(data.teaInfo.teacherName==undefined){
                var str2 = "无";
            }else{
                var str2 = data.teaInfo.teacherName;
            }

            teaOpenId = data.teaInfo.openid;
            stuName = data.parInfo.UserName;
            parName.innerText = data.parInfo.UserName;
            parPhone.innerText =str1;
            teaName.innerText = str2;
            teaPhone.innerText = data.teaInfo.phone;
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



function fun1(){
    var myDate = new Date();
    var dtPicker = new mui.DtPicker({
        type: "date",//设置日历初始视图模式
        beginDate: new Date(2018, 01, 01),//设置开始日期
        endDate: new Date(2028, 04, 25),//设置结束日期
        labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语
        customData: {
            h: [
                { value: 'AM', text: 'AM' },
                { value: 'PM', text: 'PM' }
            ]
        }//时间/日期别名
    });
    dtPicker.show(function (selectItems) {
        //console.log(selectItems.y);//{text: "2016",value: 2016}
        //console.log(selectItems.m);//{text: "05",value: "05"}
        //console.log(selectItems.value);
        beginDay.value = selectItems.value;
    })
}

function fun2(){
    var myDate = new Date();
    var dtPicker = new mui.DtPicker({
        type: "date",//设置日历初始视图模式
        beginDate: new Date(2018, 01, 01),//设置开始日期
        endDate: new Date(2028, 04, 25),//设置结束日期
        labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语
        customData: {
            h: [
                { value: 'AM', text: 'AM' },
                { value: 'PM', text: 'PM' }
            ]
        }//时间/日期别名
    });
    dtPicker.show(function (selectItems) {
        //console.log(selectItems.y);//{text: "2016",value: 2016}
        //console.log(selectItems.m);//{text: "05",value: "05"}
        //console.log(selectItems.value);
        endDay.value = selectItems.value;
    })
}
function fun3(){
    var myDate = new Date();
    var dtPicker = new mui.DtPicker({
        type: "time",//设置日历初始视图模式
        labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语
        customData: {

        }//时间/日期别名
    });
    dtPicker.show(function (selectItems) {
        //console.log(selectItems.y);//{text: "2016",value: 2016}
        //console.log(selectItems.m);//{text: "05",value: "05"}
        //console.log(selectItems.value);
        beginTime.value = selectItems.value;
    })
}
function fun4(){
    var myDate = new Date();
    var dtPicker = new mui.DtPicker({
        type: "time",//设置日历初始视图模式
        labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语
        customData: {

        }//时间/日期别名
    });
    dtPicker.show(function (selectItems) {
        //console.log(selectItems.y);//{text: "2016",value: 2016}
        //console.log(selectItems.m);//{text: "05",value: "05"}
        //console.log(selectItems.value);
        endTime.value = selectItems.value;
    })
}
