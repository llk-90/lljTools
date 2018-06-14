/**
 * Created by Administrator on 2018/1/12 0012.
 */
//创建用户信息
var userInfo = new Object();

function inituserInfo() {
    userInfo.heardAvert = "";
    userInfo.parentName = "";
    userInfo.stuName = "";
    userInfo.loginTime = "";
    userInfo.infobalance = "";
    userInfo.IcNo = "";
    userInfo.openId = "";
    userInfo.StudentId = "";
}

function minePage(type) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    switch (type) {
        case 0: {
            //充值
            if (regPos.test(userInfo.infobalance) || regNeg.test(userInfo.infobalance)) {
                window.location.href = "../../html/geren/recharge.html?openid=" + userInfo.openId;
            }

        }
            break;
        case 1: {
            //账单
            window.location.href = "../../html/geren/Personal_bill.html?openid=" + userInfo.openId;
        }
            break;
        case 2: {
            //个人信息
            window.location.href = "../../html/geren/personalInformation.html?openid=" + userInfo.openId;
        }
            break;
        case 3: {
            //地址管理
            window.location.href = "../../html/geren/location.html?openid=" + userInfo.openId;
        }
            break;
        case 4: {
            //学生管理
            window.location.href = "../../html/geren/student.html?openid=" + userInfo.openId;
        }
            break;
        case 5: {
            //联系客服
        }
            break;
        case 6: {
            //常见问题
            window.location.href = "../../html/geren/Personal_question.html?openid=" + userInfo.openId;
        }
            break;
    }
}

function onload() {
	inituserInfo();
	 userInfo.openId = GetQueryString("openid");
    $.ajax(baseURL + "/weixiplusCommon/getRegistInfoList.webapp", {
        data: {
            openId: userInfo.openId
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        crossDomain: true,
        success: function (data) {
            console.log(data);
            if (data.errorcode.code == 0) {
                IcNo = data.infolist[0].IcNo;
                if (data.infolist[0].IcNo == undefined && data.infolist[0].IcNo == "" && data.infolist[0].IcNo == null) {
                    userInfo.IcNo = "无卡";
                }
                userInfo.heardAvert = data.infolist[0].avert;
                userInfo.IcNo = data.infolist[0].icno;
                userInfo.infobalance = data.infolist[0].balance == undefined || "" || null ? "0" : data.infolist[0].balance;
                userInfo.stuName = data.infolist[0].StuName;
                userInfo.parentName = data.infolist[0].ParUserName;
                userInfo.StudentId = data.infolist[0].StudentId;
                configView();
            }
            else {
                //mui.toast(data.errorcode.errMsg);
            }
        },
        error: function (e) {
            console.log(e.responseText)
        }

    });
}
function showAlert() {
    alert(4544)
}
function configView() {
    document.getElementById("StuName").innerText = userInfo.stuName;
    document.getElementById("parentName").innerText = userInfo.parentName;
    var now = new Date();
    document.getElementById("loginTime").innerText = "登录时间：" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    document.getElementById("balance").innerText = "校卡余额：" + userInfo.infobalance + "  元";
    document.getElementById("idno_num").innerText = "学生ID :" + userInfo.StudentId;
    document.getElementById("icno_num").innerText = "学生卡号 :" + userInfo.IcNo;
    if (userInfo.infobalance != "0") {
        if (userInfo.infobalance <= 30) {
            //mui.toast("余额不足30元，请及时充值")
        }
    }
}

function unbind() {
    var openid = GetQueryString("openid");
    if (confirm("是否解绑")) {
        $.ajax("/weixinplusUnBing/unbingUserInfo.webapp", {
            data: {
                openId: openid,
                IcNo: userInfo.IcNo
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            crossDomain: true,
            success: function (data) {
                if (data.errorcode.code == 0) {
                    alert("解绑成功，请按关闭按钮后重试！");
                    window.location.href = "../../html/login/BingPage.html?openid=" + openid;
                }
            },
            error: function (e) {
                mui.toast("服务器正在维护");
            }

        });
    }
}

function connect() {
    mui.alert('86-400-000-1111', '客服电话', function() {
    });
};
 
