/**
 * Created by roger on 2018/2/28.
 */
var model = new  Object();

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}
//发起网络请求
function updateToSever() {
    var openid = GetQueryString('openid');
    var stuid = GetQueryString('stuid');
    //var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});

    showLoadMask();
    mui.ajax("/studentHealthApp/sendstudentHealthInfo.webapp", {
        data:{
            openid : openid,
            stuId : stuid,
            isReject : model.isReject,
            isRejectMes : model.isRejectMes,
            disallowTel : model.disallowTel,
            allowFamilyListen : model.isAllowLiscen,
            noManGetCallSet : model.isChangeState,
            lowPowerNoticeFamily : model.lowowerPower,
            turnOffNeedPwd : model.disallowPowerOff,
            getCallMode : model.mianti,
            timePerCall : model.controlTime,
            lostRobNotice : model.lostRobNotice
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async:false,
     /*   beforeSend:function(){
            if(xval) {
                xval.settext("加载中，请稍后......");
            }
        },*/

        success: function(data) {
            console.log(data);
            //xval.remove();
            hiddenLoadMask();
            if(data.result == "200"){
                mui.toast("设置且同步成功")
            }
            else if(data.result == "999"){
                mui.toast("设置失败")
            } else {
                mui.toast("同步失败")
            }
        },
        error: function(xhr, type, errorThrown) {
            mui.toast("设置失败")
        }

    });
}
//发起网络请求
function initResule() {

    var openid = GetQueryString('openid');
   // var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
    var stuid = GetQueryString('stuid');
    mui.ajax("http://localhost:8080/child/studentHealthApp/studentHealthInfo.webapp", {
        data:{
            openid :  'sgdfhgdfjvbsdjklfgkbvlfjzkvdfgh',
            stuId : '6709'
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async:false,
  /*      beforeSend:function(){
            if(xval) {
                xval.settext("加载中，请稍后......");
            }
        },*/
        success: function(data) {
            //xval.remove();
            if(data.result == "success"){
                configPage(data);
            }
            else {
                mui.toast("获取信息失败")
            }
        },
        error: function(xhr, type, errorThrown) {
            mui.toast("获取信息失败")
        }

    });
}
//配置数据
function configDate(temp) {

    //model.isReject ='1';//是否拒绝陌生人来电
    //model.isRejectMes = '1';//是否拒绝陌生人短信
    //model.disallowTel = 1;//不允许直接输入号码拨打电话
    //model.isAllowLiscen =1;//是否允许监护人手机监听
    //model.isChangeState =0;//监护人来电无人接听，转为监听
    //model.lowowerPower = 1;//电量不足通知及时充电
    //model.disallowPowerOff = 1;//不允许直接按关机键关机
    //model.mianti = 1;//接听电话免提
    //model.controlTime =5;//控制通话时间
    //model.lostRobNotice =1;//更换手机卡时通知家长


    model.isReject =temp.isReject;//是否拒绝陌生人来电
    model.isRejectMes = temp.isRejectMes;//是否拒绝陌生人短信
    model.disallowTel = temp.disallowTel;//不允许直接输入号码拨打电话
    model.isAllowLiscen = temp.allowFamilyListen;//是否允许监护人手机监听
    model.isChangeState = temp.noManGetCallSet;//监护人来电无人接听，转为监听
    model.lowowerPower = temp.lowPowerNoticeFamily;//电量不足通知及时充电
    model.disallowPowerOff = temp.turnOffNeedPwd;//不允许直接按关机键关机
    model.mianti = temp.getCallMode;//接听电话免提
    model.controlTime = temp.timePerCall;//控制通话时间
    model.lostRobNotice = temp.lostRobNotice;//更换手机卡时通知家长

}

//配置页面
function configPage(temp) {

    configDate(temp);
    if (model.isReject=='1')
    {
        document.getElementById("swith-0").classList.add("mui-active");
        document.getElementById("swith-0").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-0").classList.remove("mui-active");
        document.getElementById("swith-0").setAttribute("name",'0');
    }

    if (model.isRejectMes=='1')
    {
        document.getElementById("swith-1").classList.add("mui-active");
        document.getElementById("swith-1").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-1").classList.remove("mui-active");
        document.getElementById("swith-1").setAttribute("name",'0');
    }

    if (model.disallowTel=='1')
    {
        document.getElementById("swith-2").classList.add("mui-active");
        document.getElementById("swith-2").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-2").classList.remove("mui-active");
        document.getElementById("swith-2").setAttribute("name",'0');
    }

    if (model.lostRobNotice=='1')
    {
        document.getElementById("swith-3").classList.add("mui-active");
        document.getElementById("swith-3").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-3").classList.remove("mui-active");
        document.getElementById("swith-3").setAttribute("name",'0');
    }

    if (model.isAllowLiscen=='1')
    {
        document.getElementById("swith-4").classList.add("mui-active");
        document.getElementById("swith-4").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-4").classList.remove("mui-active");
        document.getElementById("swith-4").setAttribute("name",'0');
    }

    if (model.isChangeState=='1')
    {
        document.getElementById("swith-5").classList.add("mui-active");
        document.getElementById("swith-5").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-5").classList.remove("mui-active");
        document.getElementById("swith-5").setAttribute("name",'0');
    }

    if (model.lowowerPower=='1')
    {
        document.getElementById("swith-6").classList.add("mui-active");
        document.getElementById("swith-6").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-6").classList.remove("mui-active");
        document.getElementById("swith-6").setAttribute("name",'0');
    }

    if (model.disallowPowerOff=='1')
    {
        document.getElementById("swith-7").classList.add("mui-active");
        document.getElementById("swith-7").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-7").classList.remove("mui-active");
        document.getElementById("swith-7").setAttribute("name",'0');
    }
    if (model.mianti=='1')
    {
        document.getElementById("swith-8").classList.add("mui-active");
        document.getElementById("swith-8").setAttribute("name",'1');
    }
    else
    {
        document.getElementById("swith-8").classList.remove("mui-active");
        document.getElementById("swith-8").setAttribute("name",'0');
    }
    switch (model.controlTime)
    {
        case '0':
        {
            document.getElementById("control-time").innerText = "无限制";
        }
            break;
        case '1':
        {
            document.getElementById("control-time").innerText = "1分钟";
        }
            break;
        case '2':
        {
            document.getElementById("control-time").innerText = "2分钟";
        }
            break;
        case '3':
        {
            document.getElementById("control-time").innerText = "3分钟";
        }
            break;
        case '4':
        {
            document.getElementById("control-time").innerText = "4分钟";
        }
            break;
        case '5':
        {
            document.getElementById("control-time").innerText = "5分钟";
        }
            break;
        case '6':
        {
            document.getElementById("control-time").innerText = "6分钟";
        }
            break;
        case '7':
        {
            document.getElementById("control-time").innerText = "7分钟";
        }
            break;
        case '8':
        {
            document.getElementById("control-time").innerText = "8分钟";
        }
            break;
        case '9':
        {
            document.getElementById("control-time").innerText = "9分钟";
        }
            break;
        case '10':
        {
            document.getElementById("control-time").innerText = "10分钟";
        }
            break;
    }

}

//switch选择
function switchClick(type) {
    switch (type)
    {
        case '0':
        {
            var isOn = $("#swith-0").hasClass("mui-active");
            if (isOn)
            {
                model.isReject = '1';
            }
            else {
                model.isReject = '0';
            }
        }
            break;

        case '1':
        {
            var isOn = $("#swith-1").hasClass("mui-active");
            if (isOn)
            {
                model.isRejectMes = '1';
            }
            else {
                model.isRejectMes = '0';
            }
        }
            break;
        case '2':
        {
            var isOn = $("#swith-2").hasClass("mui-active");
            if (isOn)
            {
                model.disallowTel = '1';
            }
            else {
                model.disallowTel = '0';
            }
        }
            break;
        case '3':
        {
            var isOn = $("#swith-3").hasClass("mui-active");
            if (isOn)
            {
                model.lostRobNotice = '1';
            }
            else {
                model.lostRobNotice = '0';
            }
        }
            break;
        case '4':
        {
            var isOn = $("#swith-4").hasClass("mui-active");
            if (isOn)
            {
                model.isAllowLiscen = '1';
            }
            else {
                model.isAllowLiscen = '0';
            }
        }
            break;
        case '5':
        {
            var isOn = $("#swith-5").hasClass("mui-active");
            if (isOn)
            {
                model.isChangeState = '1';
            }
            else {
                model.isChangeState = '0';
            }
        }
            break;
        case '6':
        {
            var isOn = $("#swith-6").hasClass("mui-active");
            if (isOn)
            {
                model.lowowerPower = '1';
            }
            else {
                model.lowowerPower = '0';
            }
        }
            break;
        case '7':
        {
            var isOn = $("#swith-7").hasClass("mui-active");
            if (isOn)
            {
                model.disallowPowerOff = '1';
            }
            else {
                model.disallowPowerOff = '0';
            }
        }
            break;
        case '8':
        {
            var isOn = $("#swith-8").hasClass("mui-active");
            if (isOn==8)
            {
                model.mianti = '1';
            }
            else {
                model.mianti = '0';
            }
        }
            break;
    }
}

//弹出选择器
function showPickview() {
    var picker = new mui.PopPicker({buttons:['取消','确定'],layer:1});
    picker.setData([{
        value: "0",
        text: "无限制"
    }, {
        value: "1",
        text: "1分钟"
    }, {
        value: "2",
        text: "2分钟"
    }, {
        value: "3",
        text: "3分钟"
    }, {
        value: "4",
        text: "4分钟"
    }, {
        value: "5",
        text: "5分钟"
    }, {
        value: "6",
        text: "6分钟"
    }, {
        value: "7",
        text: "7分钟"
    }, {
        value: "8",
        text: "8分钟"
    }, {
        value: "9",
        text: "9分钟"
    },{
        value: "10",
        text: "10分钟"
    }])
    picker.pickers[0].setSelectedValue('fourth', 2000);
    picker.show(function(SelectedItem) {
        console.log(SelectedItem);
        document.getElementById("control-time").innerText = SelectedItem[0].text;
        model.controlTime = SelectedItem[0].value;//控制通话时间
    })
}