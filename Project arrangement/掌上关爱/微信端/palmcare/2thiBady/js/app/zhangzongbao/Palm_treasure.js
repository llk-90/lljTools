/**
 * Created by fcn1 on 2017/6/23.
 */

{
    //创建信息模型
    var studentuserinfo;
    var openid ;

    var urls={dingwei:"iBaby.location.html?",
        weilan:"iBaby.fence_index.html?",
        zhuizong:"iBaby.map.html?",
        haoma:"iBaby.familynum.html?",
        bangding:"iBaby.bind.html?",
        yonghu:"iBaby.user.html?",
        zhifu:"../pay/iBaby.shop.html?",
        romote:"iBaby.romote.html?",
        health:"iBaby.health.html?",
        sysConfig:"iBaby.sysset.html?",
        choosePay:"iBaby.choosepage.html?",
        school:"iBaby.school.html?"
    }

    //初始化函数
    function init() {
        initUserInfo();
        initInfo();
    }
    //初始化userinfo
    function initUserInfo() {

        openid = GetQueryString('openid');
        var stuid = GetQueryString('stuid');

        studentuserinfo = new Object();

        studentuserinfo.stuId=stuid;//宝贝学号
        studentuserinfo.userIcon="";//用户头像
        studentuserinfo.name="";//用户名称
        studentuserinfo.connectAds="";//联系地址
        studentuserinfo.lastConnectTime="";//最后通讯时间
        studentuserinfo.isConnect="";//是否通讯中设备
        studentuserinfo.recivesState="";//当前收信息状态
        studentuserinfo.locatState="";//定位方式
//        studentuserinfo.locationNum="";//轨迹数
//        studentuserinfo.weilanNum="5";//围栏数
        studentuserinfo.isProtect="";//是否在保
//        studentuserinfo.isBangDing=true;//是否绑定
//        studentuserinfo.isPay=false;//是否已经支付
    }

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2]);
        return null;
    }

    //发起网络请求
    function initInfo() {
        mui.init();

        //setTimeout(function() {
        mui.ajax("http://127.0.0.1:8080/child/addchildInfo/babyInfo.webapp", {
            data:{
                openid :openid
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
                console.log(data)
                if(data.result == "success"){
                    configPage(data.babyInfo);
                } else if(data.result == "empty"){
                    //window.location.href= urls.choosePay + "openid=" + openid;
                    mui.toast("尚未绑定宝贝,信息获取失败")
                } else {
                    mui.toast(data.result.replace(/注册/,"激活"))
                }
            },
            error: function(xhr, type, errorThrown) {
                mui.toast("服务器正在维护，请稍后重试！")
            }

        });
        //}, 100);
    }
    //生成对应模型,服务器获取json后调用

    function unachreveModel(temp) {

        studentuserinfo.stuId=temp.ibaby_s_id;//宝贝学号
        studentuserinfo.userIcon=temp.ibaby_s_img;//用户头像
        studentuserinfo.name=temp.ibaby_s_name;//用户名称
        studentuserinfo.connectAds=temp.connectAds;//联系地址
        studentuserinfo.lastConnectTime=temp.lastConnectTime;//最后通讯时间
        studentuserinfo.isConnect=temp.ibaby_equ_status;//是否通讯中设备
        studentuserinfo.recivesState=temp.recivesState;//当前收信息状态
        studentuserinfo.locatState=temp.locatState;//定位方式
//        studentuserinfo.locationNum=temp.locationNum;//轨迹数
//        studentuserinfo.weilanNum=temp.weilanNum;//围栏数
        studentuserinfo.isProtect=temp.isProtect;//是否在保
        //studentuserinfo.isBangDing=temp.isBangDing;//是否绑定
    }

    //根据本地模型初始化页面
    function configPage(temp) {
        unachreveModel(temp);
        //初始化头像
        //$("#icon").attr("src",studentuserinfo.userIcon.getUrl());
        $("#icon").attr("src",studentuserinfo.userIcon);
        //配置姓名
        document.getElementById("usename").innerText = studentuserinfo.name;
        //配置通讯状态
        switch (studentuserinfo.isConnect)
        {
            case '0':
            {
                document.getElementById("connectstate").innerText = "通讯中";
            }
                break;
            case '1':
            {
                document.getElementById("connectstate").innerText = "通讯中断";
            }
                break;
            case '3':
            {
                document.getElementById("connectstate").innerText = "维修中";
            }
                break;
        }
//        //配置支付信息
//        if(temp.ibaby_pay_state!="0" && temp.ibaby_pay_state!=""){
//        	studentuserinfo.isPay=true;
//        }else{
//        	studentuserinfo.isPay=false;
//        }
        //配置收信状态
        switch (studentuserinfo.recivesState)
        {
            case '0':
            {
                document.getElementById("reviveState").innerText = "应学校要求，上课期间拒绝所有来电";
            }
                break;
            /*            case '1':
             {
             document.getElementById("reviveState").innerText = "上课期间，仅允许家长亲情号来电";
             }
             break;*/
        }
        //配置地址
        document.getElementById("address").innerText = studentuserinfo.connectAds;
        //配置时间
        //var connectTime = new Date(studentuserinfo.lastConnectTime.replace(/-/g,'/'));
        //document.getElementById("lasttime").innerText = (connectTime.getMonth()+1) + "月" + connectTime.getDate() + "日 " + connectTime.getHours() + ":" +connectTime.getMinutes();
        document.getElementById("lasttime").innerText = studentuserinfo.lastConnectTime.substring(5,7) + "月" + studentuserinfo.lastConnectTime.substring(8,10) + "日 " + studentuserinfo.lastConnectTime.substring(11,13) + ":" +studentuserinfo.lastConnectTime.substring(14,16);
        //配置定位方式
        switch (studentuserinfo.locatState)
        {
            case '1':
            {
                document.getElementById("positionstyle").innerText = "GPS定位";
            }
                break;
            case '0':
            {
                document.getElementById("positionstyle").innerText = "基站定位";
            }
                break;
            case '8':
            {
                document.getElementById("positionstyle").innerText = "wifi定位";
            }
                break;
        }
//         //配置轨迹数
//        var str = studentuserinfo.locationNum.length;
//        str = 6 - str;
//        for (var i= 0;i<str;i++) {
//        	studentuserinfo.locationNum = studentuserinfo.locationNum + "&ensp;"
//        }
//        var str2 = studentuserinfo.weilanNum.length;
//        str2 = 6 - str2;
//        for (var i= 0;i<str;i++) {
//        	studentuserinfo.weilanNum = studentuserinfo.weilanNum + "&ensp;"
//        }
//        document.getElementById("guijinum").innerHTML = "<img src='../iBaby/images/iBaby.index/dingweiguiji.png' style='max-height: 15px;max-width: 15px;margin-bottom:-2px;'>" + studentuserinfo.locationNum ;
//        //配置围栏数
//        document.getElementById("weilannum").innerHTML = "<img src='../iBaby/images/iBaby.index/dianziweilan.png' style='max-height: 15px;max-width: 15px;margin-bottom:-2px;'>" + studentuserinfo.weilanNum;
        //配置是否在保
        document.getElementById("protect").innerHTML = studentuserinfo.isProtect==false?"<img src='../iBaby/images/iBaby.index/zaibaoqi.png' style='max-height: 17px;max-width: 17px;margin-bottom:-6px'>"+"    <font style:'margin-bottom：-10px'>    在保期</font>"
            :"<img src='../iBaby/images/iBaby.index/zaibaoqi.png' style='max-height: 17px;max-width: 17px;margin-bottom:-6px'>"+"    已过保";
//        //配置是否绑定
//        document.getElementById("bindnum").innerHTML = studentuserinfo.isBangDing==true?"<img src='../iBaby/images/iBaby.index/yibangding.png' style='max-height: 15px;max-width: 15px;margin-bottom:-2px;'>"+"已绑定"
//        		:"<img src='../iBaby/images/iBaby.index/yibangding.png' style='max-height: 15px;max-width: 15px;margin-bottom:-2px;'>"+"未绑定";
//        //配置是否支付
//        document.getElementById("pay").innerHTML = studentuserinfo.isPay==true?"<img src='../iBaby/images/iBaby.index/zhifu1.png' style='max-height: 15px;max-width: 15px;margin-bottom:-2px;'>"+"已购买":
//        	"<img src='../iBaby/images/iBaby.index/zhifu1.png' style='max-height: 15px;max-width: 15px;margin-bottom:-2px;'>"+"未购买";
    }

    function showToast(text) {
        $("#tsk").show();
        $("#tsk").text(text);
        setTimeout("hiddenToast()", 2000);
    }
    //隐藏Toast窗体
    function hiddenToast() {
        $("#tsk").hide();
    }
}