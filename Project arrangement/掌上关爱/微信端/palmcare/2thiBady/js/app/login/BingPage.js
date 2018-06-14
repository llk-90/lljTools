function schoolClick() {

    window.location.href = "../../html/login/schoolChoose.html?openid=" + info.openId
}

//定义存放数组
var info;

function onload() {
    info();
    info.schoolName = getCookie("schoolName").length == 0 ? "" : getCookie("schoolName");
    info.schoolID = getCookie("schoolID").length == 0 ? "" : getCookie("schoolID");
    if (getCookie("schoolName").length != 0 && getCookie("schoolID").length != 0) {
        setCookie("schoolName", "", 1);
        setCookie("schoolID", "", 1);
    }
    var schoolName_test = info.schoolName.length == 0 ? "点击选择学校" : info.schoolName;
    document.getElementById("myschool").value = schoolName_test;

}

function info() {
    info.schoolName = "";
    info.schoolID = "";
    info.studentName = "";
    info.StudentId = "";
    info.phone = "";
    info.activeNum = "";
    info.IcNo = "";
    info.openId = GetQueryString("openid")
    //mui.toast(GetQueryString("openid"));

}

function dobing() {
    var ic_no='';
    var phoneNum = document.getElementById("phone");
    var codeInput = document.getElementById("code_input");
    if (phoneNum.value != null && phoneNum.value.length != 0) {
        if (!p1.test(phoneNum.value)) {
            phoneNum.value = '';
            mui.toast('请输入正确的手机号码');
            phoneNum.focus();
            return;
        }
    } else {
        mui.toast('手机号码不能为空!');
        return;
    }
    if (codeInput.value == null || codeInput.value.length == 0) {
        mui.toast('验证码不能为空');
        return;
    }
    if (document.getElementById("icnum").value == null | document.getElementById("icnum").value.length == 0 | document.getElementById("icnum").value.length == "") {
        ic_no = null;
    } else {
        ic_no = document.getElementById("icnum").value;
    }

    mui.ajax("/weixiplusBing/bingAccountSelect.webapp", {
        data: {
            phone_num: document.getElementById("phone").value,
            name: document.getElementById("stu_name").value,
            ic_num: ic_no,
            schoolID: info.schoolID,
            classID: ClassID,
            verifycode: document.getElementById("code_input").value,
            openId: info.openId
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async: false,
        success: function (data) {
            //window.location.href =  window.location.href="../../html/login/secondconfim.html?icnum="+data.ic_num;
            if (data.errorcode.code == 0) {
                info.StudentId = data.stuID;
                //var title = "请输入您尾号为："+data.ic_num.substring(data.ic_num.length-4,data.ic_num.length)+"的IC卡号";
                //var btnArray = ['取消', '确定'];
                //if(document.getElementById("stu_name").value!="undefined" && document.getElementById("stu_name").value.lengt>0){
                //    mui.prompt(title, '卡号', '绑定确认', btnArray, function(e) {
                //        if (e.index == 1) {
                //            bangding(data);
                //        } else {
                //            mui.toast("用户取消")
                //        }
                //    })
                //}
                bangding(data);
            }
            else {
                mui.toast(data.errorcode.errMsg)
            }

        },
        error: function (xhr, type, errorThrown) {
            mui.toast("服务器正在维护，请稍后重试！")
        }

    });
}

var isinsert = false;

function bangding(data) {
    if (isinsert) {
        return;
    }
    isinsert = true;
    mui.ajax("/weixiplusBing/bingAccount.webapp", {
        data: {
            openId: info.openId,
            stuId: info.StudentId,
            IcNo: data.ic_num,
            parent_Id: data.parentId,
            parent_Name: data.parUserName,
            phone_num: document.getElementById("phone").value

        },
        dataType: 'json', //服务器返回json格式数据
        async: false,
        beforeSend: function () {
            mui('body').progressbar({}).show();
        },
        complete: function () {
            mui('body').progressbar({}).hide();
        },
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function (data) {
            if (data.errorcode.code == 0) {
                window.location.href = window.location.href = "../../html/common/result.html?type=0&mainstr=成功&substr=绑定成功"
            } else {
                mui.toast(data.errorcode.errMsg);
                isinsert = false;
            }


        },
        error: function (xhr, type, errorThrown) {
            isinsert = false;
            mui.toast("服务器正在维护，请稍后重试！")
        }

    });
}


/*****************************点击获取验证码************************************/

var p1 = /^(13[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
var issend = true;
var verifyCode = "";
//↓↓↓↓修改 4.17，使刷新不会中断倒计时↓↓↓↓
var maxtime;
if (window.name == '') {
    maxtime = 2 * 60;
} else {
    maxtime = window.name;
    //sendMessage(maxtime);
}

//↑↑↑↑修改 4.17，使刷新不会中断倒计时↑↑↑↑
function sendMessage(t) {
    var phoneNum = document.getElementById("phone");
    if (issend) {
        if (phoneNum.value != null && phoneNum.value.length != 0) {
            if (!p1.test(phoneNum.value)) {
                phoneNum.value = '';
                mui.toast('请输入正确的手机号码');
                phoneNum.focus();
                return;
            } else {
                issend = false;
                mui.ajax('/weixiplusBing/getCode.webapp', {
                    data: {
                        phone_num: phoneNum.value,
                        openId: info.openId
                    },
                    dataType: 'json',
                    type: 'post',
                    timeout: 10000,
                    async: false,
                    success: function (data) {
                        if (data.errorcode.code == 0) {
                            mui.toast('验证码下发成功');
                            for (var i = 1; i <= t; i++) {
                                window.setTimeout("update(" + i + "," + t + ")", i * 1000);
                            }
                        }
                        else {
                            mui.toast(data.errMsg);
                        }
                    },
                    error: function (xhr, type, errorThrown) {
                        mui.toast('网络异常，稍后再试!');
                    }
                });
            }
        } else {
            mui.toast('手机号码不能为空!');
            return;
        }
    }
}

//访客登录

function vistorLogin() {
    window.location.href = window.location.href = "../../html/shouye/index.html?openid=" + info.openId;
}


function update(num, t) {
    var getCode = document.getElementById("get_code");
    if (num == t) {
        getCode.innerHTML = '重新发送';
        issend = true;
    } else {
        var time = t - num;
        getCode.innerHTML = time + '秒后重发';
    }
}

function getPwd(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}