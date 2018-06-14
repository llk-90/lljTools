/**
 * Created by fcn1 on 2017/6/27.
 */
{
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
            success: function(data) {
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
        var stuid = GetQueryString('stuid');
        mui.ajax("/studentHealthApp/studentHealthInfo.webapp", {
            data:{
                openid : openid,
                stuId :stuid
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
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
    //配置页面
    function configPage(temp) {
    	
         configDate(temp);
         if (model.isReject=='1')
         {
             $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
             $("#swith-0").attr("name",'1');
         }
         else
         {
             $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
             $("#swith-0").attr("name",'0');
         }

        if (model.isRejectMes=='1')
        {
            $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-1").attr("name",'1');
        }
        else
        {
            $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-1").attr("name",'0');
        }

        if (model.disallowTel=='1')
        {
            $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-2").attr("name",'1');
        }
        else
        {
            $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-2").attr("name",'0');
        }

        if (model.lostRobNotice=='1')
        {
            $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-3").attr("name",'1');
        }
        else
        {
            $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-3").attr("name",'0');
        }

        if (model.isAllowLiscen=='1')
        {
            $("#swith-4").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-4").attr("name",'1');
        }
        else
        {
            $("#swith-4").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-4").attr("name",'0');
        }

        if (model.isChangeState=='1')
        {
            $("#swith-5").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-5").attr("name",'1');
        }
        else
        {
            $("#swith-5").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-5").attr("name",'0');
        }

        if (model.lowowerPower=='1')
        {
            $("#swith-6").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-6").attr("name",'1');
        }
        else
        {
            $("#swith-6").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-6").attr("name",'0');
        }

        if (model.disallowPowerOff=='1')
        {
            $("#swith-7").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-7").attr("name",'1');
        }
        else
        {
            $("#swith-7").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-7").attr("name",'0');
        }
        if (model.mianti=='1')
        {
            $("#swith-8").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-8").attr("name",'1');
        }
        else
        {
            $("#swith-8").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-8").attr("name",'0');
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
    //配置数据
    function configDate(temp) {
    	
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
    
    //switch选择
    function switchClick(type) {
        switch (type)
        {
            case '0':
                {
                    var isOn = $("#swith-0").attr("name");
                   if (isOn==0)
                   {
                       $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                       $("#swith-0").attr("name",'1');
                       model.isReject = '1';
                   }
                   else {
                       $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                       $("#swith-0").attr("name",'0');
                       model.isReject = '0';
                   }
                }
                break;
                
             case '1':
             {
                 var isOn = $("#swith-1").attr("name");
                 if (isOn==0)
                 {
                     $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                     $("#swith-1").attr("name",'1');
                     model.isRejectMes = '1';
                 }
                 else {
                     $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                     $("#swith-1").attr("name",'0');
                     model.isRejectMes = '0';
                 }
             }
                 break;
             case '2':
             {
                 var isOn = $("#swith-2").attr("name");
                 if (isOn==0)
                 {
                     $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                     $("#swith-2").attr("name",'1');
                     model.disallowTel = '1';
                 }
                 else {
                     $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                     $("#swith-2").attr("name",'0');
                     model.disallowTel = '0';
                 }
             }
                 break;
             case '3':
             {
                 var isOn = $("#swith-3").attr("name");
                 if (isOn==0)
                 {
                     $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                     $("#swith-3").attr("name",'1');
                     model.lostRobNotice = '1';
                 }
                 else {
                     $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                     $("#swith-3").attr("name",'0');
                     model.lostRobNotice = '0';
                 }
             }
                 break;
            case '4':
            {
                var isOn = $("#swith-4").attr("name");
                if (isOn==0)
                {
                    $("#swith-4").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                    $("#swith-4").attr("name",'1');
                    model.isAllowLiscen = '1';
                }
                else {
                    $("#swith-4").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-4").attr("name",'0');
                    model.isAllowLiscen = '0';
                }
            }
                break;
            case '5':
            {
                var isOn = $("#swith-5").attr("name");
                if (isOn==0)
                {
                    $("#swith-5").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                    $("#swith-5").attr("name",'1');
                    model.isChangeState = '1';
                }
                else {
                    $("#swith-5").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-5").attr("name",'0');
                    model.isChangeState = '0';
                }
            }
                break;
            case '6':
            {
                var isOn = $("#swith-6").attr("name");
                if (isOn==0)
                {
                    $("#swith-6").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                    $("#swith-6").attr("name",'1');
                    model.lowowerPower = '1';
                }
                else {
                    $("#swith-6").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-6").attr("name",'0');
                    model.lowowerPower = '0';
                }
            }
                break;
            case '7':
            {
                var isOn = $("#swith-7").attr("name");
                if (isOn==0)
                {
                    $("#swith-7").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                    $("#swith-7").attr("name",'1');
                    model.disallowPowerOff = '1';
                }
                else {
                    $("#swith-7").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-7").attr("name",'0');
                    model.disallowPowerOff = '0';
                }
            }
                break;
            case '8':
            {
                var isOn = $("#swith-8").attr("name");
                if (isOn==0)
                {
                    $("#swith-8").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                    $("#swith-8").attr("name",'1');
                    model.mianti = '1';
                }
                else {
                    $("#swith-8").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-8").attr("name",'0');
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
}