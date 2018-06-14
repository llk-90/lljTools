/**
 * Created by roger on 2018/4/3.
 */
//开始年月日
var beginDay = document.getElementById("beginDay");
//结束年月日
var endDay = document.getElementById("endDay");
//开始时间
var beginTime = document.getElementById("beginTime");
//结束时间
var endTime = document.getElementById("endTime");
//请假原因
var leaveContent = document.getElementById("leaveContent");
var parName = document.getElementById('parName');
var teaOpenId;
var stuName;
//页面初始化
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
            teaOpenId = (data.teaInfo!=null?data.teaInfo.openid:'');
            stuName = data.parInfo.UserName;
            parName.innerText = data.parInfo.UserName+'家长';
            //parPhone.innerText = data.parInfo.phone_num;
            //teaName.innerText = data.teaInfo.teacherName;
            //teaPhone.innerText = data.teaInfo.phone;
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
//提交数据
function submit(){
    $.ajax(baseURL+"/visitRegister/leaveInfo.webapp", {
        data: {
            openId:openid,
            beginDay:beginDay.value,
            endDay:endDay.value,
            beginTime:beginTime.value,
            endTime:endTime.value,
            leaveContent:leaveContent.value,
            stuName:stuName,
            teaOpenId:teaOpenId
        },
        dataType: 'json',
        type: 'post',
        timeout: 10000, //超时时间设置为10秒；
        crossDomain: true,
        async:false,
        success: function (data){
            if(data.errorcode.code==0){
                console.log(11111);
                window.location.href='leave_apply.html?openId='+openid;
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