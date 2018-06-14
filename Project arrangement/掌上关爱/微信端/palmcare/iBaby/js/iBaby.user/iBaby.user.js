/**
 * Created by fcn1 on 2017/6/25.
 */
{
	var iconlist = ["../iBaby/images/iBaby.bind/baby_boy.png","../iBaby/images/iBaby.bind/baby_boy1.png","../iBaby/images/iBaby.bind/baby_girl.png","../iBaby/images/iBaby.bind/baby_girl1.png"]
    var babyInfo = new Object();
	
    //初始化函数
	  var urls={index:"iBaby.index.html?",
	    		
	    }
    function init() {
    	babyInfo = new Object();
        getUserInfo();
    }

	function getImgInfo(a) {
		var id = "img".concat(a);
		var b = iconlist[a-1];
		var d = document.getElementById(id).src;
		document.getElementById("iconInfo").src = d;
		document.getElementById("iconInfos").value = b;
	}
    function changeAccountValue() {
        document.getElementById("baby-account").value = document.getElementById("baby-imei").value;
    }
    //初始化页面
    function configPage(temp) {
        setBadyInfo(temp);
        //初始化头像信息
        $("#iconInfo").attr("src",babyInfo.babyIcon);
        $("#iconInfos").attr("value",babyInfo.babyIcon);
        //设置宝贝姓名
        $("#childname").attr("value",babyInfo.babyName);
        //设置账户
        $("#baby-account").attr("value",babyInfo.account);
        //设置密码
        $("#baby-password").attr("value",babyInfo.password);
        //设置IMEI
        $("#baby-imei").attr("value",babyInfo.IMEI);
        //设置电话号码
        $("#baby-phoneNum").attr("value",babyInfo.phoneNumber);
        //设置性别
        switch (babyInfo.sex)
        {
            case '0'://当为男时
                {
                    $("#sex1").attr("checked","checked");
                    $("#sex2").attr("checked",false);
                }
                break;
            case '1'://当为女时
            {
                    $("#sex2").attr("checked","checked");
                    $("#sex1").attr("checked",false);
            }
                break;
        }
        //设置IC卡类型
        switch (babyInfo.cardType)
        {
            case '0'://当为2.4G
            {
                $("#gender1").attr("checked","checked");
                $("#gender2").attr("checked",false);
            }
                break;
            case '1'://13.56
            {
                $("#gender2").attr("checked","checked");
                $("#gender1").attr("checked",false);
            }
                break;
        }
        //设置IC卡号码
        $("#tlenum").attr("value",babyInfo.cardNumber);
        //设置IC卡名称
        $("#iccard").attr("value",babyInfo.cardName);

    }
    //设置页面model
    function setBadyInfo(jsontemp) {
    	babyInfo.stuid = GetQueryString('stuid');
    	babyInfo.babyName = jsontemp.ibaby_s_name//姓名
        babyInfo.babyIcon = jsontemp.ibaby_s_img//头像
        babyInfo.account = jsontemp.ibaby_equ_accout;//账户
        babyInfo.password = jsontemp.ibaby_equ_password;//密码
        babyInfo.IMEIOLD = jsontemp.ibaby_imei_code;//IMEI号码旧
        babyInfo.IMEI = jsontemp.ibaby_imei_code;//IMEI号码
        babyInfo.phoneNumber = jsontemp.ibaby_phone_num;//电话号码
        babyInfo.sex = jsontemp.ibaby_s_sex;//性别
        babyInfo.cardType =jsontemp.ibaby_ic_code_type;//IC卡类型
        babyInfo.cardNumberOLD = jsontemp.ibaby_ic_code;//IC卡号旧
        babyInfo.cardNumber = jsontemp.ibaby_ic_code;//IC卡号
        babyInfo.cardName = jsontemp.ibaby_ic_name;//IC卡名称
    }
    //提交函数
    function submittoSever() {
    	
        //babyInfo.babyName = document.getElementById("childname").value;
        babyInfo.account = document.getElementById("baby-account").value;
        babyInfo.password = document.getElementById("baby-password").value;
        babyInfo.IMEI = document.getElementById("baby-imei").value;
        babyInfo.phoneNumber = document.getElementById("baby-phoneNum").value;
        babyInfo.cardNumber = document.getElementById("tlenum").value;
        babyInfo.babyIconCode = document.getElementById("iconInfos").value;
        babyInfo.cardName = document.getElementById("iccard").value;

/*        if(babyInfo.babyName == null || babyInfo.babyName == ''){
            alert("宝贝姓名不能为空");
            return;
        }*/
        if(babyInfo.account == null || babyInfo.account == ''){
            alert("设备账号不能为空");
            return;
        }
        if(babyInfo.password == null || babyInfo.password == ''){
            alert("设备密码不能为空");
            return;
        }
        if(babyInfo.IMEI == null || babyInfo.IMEI == ''){
            alert("设备号不能为空");
            return;
        }
        if(babyInfo.phoneNumber == null || babyInfo.phoneNumber == ''){
            alert("手机号码不能为空");
            return;
        }
/*        if(babyInfo.cardNumber == null || babyInfo.cardNumber == ''){
            alert("IC卡号不能为空");
            return;
        }*/
        //组合网络请求参数
        var parm = {
           stu_id:babyInfo.stuid,
           babyname:babyInfo.babyName,
           account:babyInfo.account,
           password:babyInfo.password,
           imei:babyInfo.IMEI,
           imeiOld:babyInfo.IMEIOLD,
           phone:babyInfo.phoneNumber,
           cardnumber:babyInfo.cardNumber,
           cardnumberOld:babyInfo.cardNumberOLD,
           babyicon:babyInfo.babyIconCode,
           cardname:babyInfo.cardName,
           sex:babyInfo.sex,
           cardtype:babyInfo.cardType
        }
        positionInfo(parm);

    }
    //获取信息
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2]);
        return null;
    }
    //获取用户信息
    function getUserInfo() {
        var openid = GetQueryString('openid');
        var stuId = GetQueryString('stuid');
        setTimeout(function() {
            mui.ajax("/updatechildInfo/findBaby.webapp", {
                data:{
                    openid : openid,
                    stuId : stuId
                },
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                    //进行网络请求回调处理
                    if(data.result == "success"){
                        configPage(data.babyInfo);
                    } else {
                    	mui.toast("数据请求失败");
                    }

                },
                error: function(xhr, type, errorThrown) {
                	mui.toast("数据请求失败");
                }

            });
        }, 100);
    }
    
    
    //发送提交请求
    function positionInfo(Parma) {
    	
    	var openid = GetQueryString('openid');
        var stuId = GetQueryString('stuid');
    	document.getElementById("loads").style.display = "";
    	var mask = mui.createMask();
        setTimeout(function() {
        	mask.show();
            mui.ajax("/updatechildInfo/updeChild.webapp", {
                data:Parma,
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                	mask.close();
                	document.getElementById("loads").style.display = "none";
                   //进行网络请求回调处理
                    if(data.result == "success"){
                        mui.toast("信息修改成功");
                        window.location.href= urls.index + "openid=" + openid + "&" + "stuid=" +stuId;  //返回上一页
                    } else {
                    	mui.toast("信息修改失败");
                    }
                },
                error: function(xhr, type, errorThrown) {}

            });
        }, 100);
    }
    //点击checkbox事件
    function checkBoxClick(type,value) {
    	var openid = GetQueryString('openid');
        var stuId = GetQueryString('stuid');
    	
    	
        switch (type)
        {
            case 'sex'://切换性别
                {
                    babyInfo.sex = value;
                }
                break;
            case 'type'://切换IC卡类型
            {
                    babyInfo.cardType = value;
            }
                break;
            case 'submit'://点击提交
            {
                submittoSever();
            }
                break;
            case 'back':
            {
               window.location.href= urls.index + "openid=" + openid + "&" + "stuid=" +stuId;  //返回上一页
            }
                break;
        }

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
