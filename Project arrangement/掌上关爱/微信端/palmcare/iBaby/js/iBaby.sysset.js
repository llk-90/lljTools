/**
 * Created by fcn1 on 2017/6/27.
 */
{
    var setconfig = new Object();
    
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2]);
        return null;
    }
    
    //初始化init
    function iniSet() {
    	
        var openid = GetQueryString('openid');
        var stuid = GetQueryString('stuid');
        showLoadMask();
        mui.ajax("/systemSettingsApp/systemSettingsInfo.webapp", {        	
            data:{
                openid : openid,
                stuId : stuid
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 30000, //超时时间设置为10秒；
            success: function(data) {
                if(data.statCode == "200"){
                    configPage(data);
                    hiddenLoadMask();
                }
                else {
                    mui.toast("获取设置信息失败")
					hiddenLoadMask();
                }
            },
            error: function(xhr, type, errorThrown) {
                mui.toast("获取设置信息失败")
				hiddenLoadMask();
            }

        });
    }
    //提交上传至服务器
    function updateToSever() {

    	if (isLoad) return;
        	var openid = GetQueryString('openid');
        	var stuid = GetQueryString('stuid');
    		showLoadMask();
            mui.ajax("/systemSettingsApp/sendSystemSettingsInfo.webapp", {
    			data:{
                    openid: openid,
                    stuId :stuid,
                    autostartavaild :setconfig.autostartavaild,//自动开机1是否有效
                    startatime :setconfig.startatime,//自动开机1时间
                    autoendavaild :setconfig.autoendavaild,//自动关机1是否有效
                    endatime :setconfig.endatime,//自动关机1时间
                    autostartbvaild :setconfig.autostartbvaild,//自动开机2是否有效
                    startbtime :setconfig.startbtime,//自动开机2时间
                    autoendbvaild :setconfig.autoendbvaild,//自动关机2是否有效
                    endbtime :setconfig.endbtime,//自动关机2时间
                    nightModel :setconfig.nightModel,//夜间时间模式
                    classTime :setconfig.classTime,//上课时间模式
                    otherTime :setconfig.otherTime//其他时间模式
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
                        mui.toast("同步失败")
                    } else {
                    	mui.toast("设置失败")
                    }
                },
                error: function(xhr, type, errorThrown) {
                    hiddenLoadMask();
                    mui.toast("更新失败")
                }
            });
    }

    //修改密码上传服务器
    function changePassword() {
        var oldpsw = document.getElementById("old-password").value;//旧密码
        var newpsw = document.getElementById("new-password").value;//新密码
        if (oldpsw.length==0||oldpsw==null)
        {
            showToast("请输入原密码");
            return;
        }
        if (newpsw.length==0||newpsw==null)
        {
            showToast("请输入新密码");
            alert("2");
            return;
        }
        if (isLoad) return;
        showLoadMask();
        mui.init();
        mui.ajax("/systemSettingsApp/systemSettingsInfo.webapp", {
            data:{

            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
                hiddenLoadMask();
                if(data.result == "success"){
                    mui.toast("修改成功")
                    showorHiddenPassword("hidden");
                }
                else {
                    mui.toast("修改失败")
                }
            },
            error: function(xhr, type, errorThrown) {
                hiddenLoadMask();
                mui.toast("修改成功")
            }

        });
    }

    //初始化数据
    function configDate(temp) {
        initDate();
        setconfig.autostartavaild = temp.autostartavaild;//自动开机1是否有效
        setconfig.startatime = temp.startatime;//自动开机1时间
        setconfig.autoendavaild = temp.autoendavaild;//自动关机1是否有效
        setconfig.endatime = temp.endatime;//自动关机1时间
        //自动模式2
        setconfig.autostartbvaild = temp.autostartbvaild;//自动开机2是否有效
        setconfig.startbtime = temp.startbtime;//自动开机2时间
        setconfig.autoendbvaild = temp.autoendbvaild;//自动关机2是否有效
        setconfig.endbtime = temp.endbtime;//自动关机2时间

        //GPS省电管理
        setconfig.nightModel = temp.nightModel;//夜间时间模式
        setconfig.classTime = temp.classTime;//上课时间模式
        setconfig.otherTime = temp.otherTime;//其他时间模式

    }
    //初始化数据默认值
    function initDate() {
        //自动模式1
        setconfig.autostartavaild = '0';//自动开机1是否有效
        setconfig.startatime = "00:00";//自动开机1时间
        setconfig.autoendavaild = '0';//自动关机1是否有效
        setconfig.endatime = "00:00";//自动关机1时间
         //自动模式2
        setconfig.autostartbvaild = '0';//自动开机1是否有效
        setconfig.startbtime = "00:00";//自动开机1时间
        setconfig.autoendbvaild = '0';//自动关机1是否有效
        setconfig.endbtime = "00:00";//自动关机1时间

        //GPS省电管理
        setconfig.nightModel = '0';//夜间时间模式
        setconfig.classTime = '0';//上课时间模式
        setconfig.otherTime = '0';//其他时间模式
    }
    //配置页面
    function configPage(temp) {
          configDate(temp);

        if (setconfig.autostartavaild=='1')
        {
            $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-0").attr("name",'1');
        }
        else
        {
            $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-0").attr("name",'0');
        }

        if (setconfig.autoendavaild=='1')
        {
            $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-1").attr("name",'1');
        }
        else
        {
            $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-1").attr("name",'0');
        }

        if (setconfig.autostartbvaild=='1')
        {
            $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-2").attr("name",'1');
        }
        else
        {
            $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-2").attr("name",'0');
        }

        if (setconfig.autoendbvaild=='1')
        {
            $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
            $("#swith-3").attr("name",'1');
        }
        else
        {
            $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
            $("#swith-3").attr("name",'0');
        }
        document.getElementById("start-timeA").innerText = temp.startatime;
        document.getElementById("end-timeA").innerText = temp.endatime;
        document.getElementById("start-timeB").innerText = temp.startbtime;
        document.getElementById("end-timeB").innerText = temp.endbtime;

        if (setconfig.nightModel==0)
        {
            $("#night-0").attr("checked",true);
        }
        else if (setconfig.nightModel==1)
        {
            $("#night-1").attr("checked",true);
        }
        else {
            $("#night-2").attr("checked",true);
        }
        if (setconfig.classTime==0)
        {
            $("#class-0").attr("checked",true);
        }
        else if (setconfig.classTime==1)
        {
            $("#class-1").attr("checked",true);
        }
        else {
            $("#class-2").attr("checked",true);
        }
        if (setconfig.otherTime==0)
        {
            $("#other-0").attr("checked",true);
        }
        else if (setconfig.otherTime==1)
        {
            $("#other-1").attr("checked",true);
        }
        else {
            $("#other-2").attr("checked",true);
        }

    }
    //radioBox选择事件
    function radioBoxClick(type,value) {

        if (type=='night')
        {
            setconfig.nightModel = value;//夜间时间模式
        }
        else if (type=='class')
        {
            setconfig.classTime = value;//上课时间模式
        }
        else
        {
            setconfig.otherTime = value;//其他时间模式
        }

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
                    setconfig.autostartavaild = '1';
                }
                else {
                    $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-0").attr("name",'0');
                    setconfig.autostartavaild = '0';
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
                    setconfig.autoendavaild = '1';
                }
                else {
                    $("#swith-1").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-1").attr("name",'0');
                    setconfig.autoendavaild = '0';
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
                    setconfig.autostartbvaild = '1';
                }
                else {
                    $("#swith-2").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-2").attr("name",'0');
                    setconfig.autostartbvaild = '0';
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
                    setconfig.autoendbvaild = '1';
                }
                else {
                    $("#swith-3").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                    $("#swith-3").attr("name",'0');
                    setconfig.autoendbvaild = '0';
                }
            }
                break;

        }
    }
    //初始化日期选择器
    function showDateChoose(type) {
        var dtpicker = new mui.DtPicker({
            "type": "time"
        })
        dtpicker.show(function(e) {
            if (type==0)
            {
                document.getElementById("start-timeA").innerText = e.text;
                setconfig.startatime = e.text;//自动开机1时间

            }
            else  if(type==1)
            {
                document.getElementById("end-timeA").innerText = e.text;
                setconfig.endatime = e.text;//自动关机1时间


            }
            else  if(type==2)
            {
                document.getElementById("start-timeB").innerText = e.text;
                setconfig.startbtime = e.text;//自动开机1时间


            }
            else {
                document.getElementById("end-timeB").innerText = e.text;
                setconfig.endbtime = e.text;//自动关机1时间
            }
            console.log(e.text);
        })
    }
}
