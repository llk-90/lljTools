/**
 * Created by Wbb on 2018/4/13.
 */
var flag = false;
var obj;

//获取单选值
var radddio = document.getElementById("radddio");
var radio = radddio.getElementsByTagName("input");
var radio2 = document.getElementsByClassName("regular-radio");
var numCount=15;


$(function () {
    var IcNo = GetQueryString("IcNo");
    $("#agreedCheck").attr("checked","checked");
    $("#num").val(1);
    $("#money").text('¥  ' + numCount + '.00');
    // 地址选择器遮罩层打开与关闭
    $("#myschool").click(function (e) {
        $("#addressSelectWrapper").show();
        initAddress();
        e.stopPropagation();
    });
    $(document).click(function () {
        $("#addressSelectWrapper").hide();
    });
    $("#cancel").click(function () {
        $("#addressSelectWrapper").hide();
    });
    $("#addressSelect").click(function (e) {
        e.stopPropagation();
    });
});

//初始化地址选择
function initAddress() {
    $("#Addr").cityLinkage({
        containerId: 'addressSelectWrapper',
        getSelectedCode: function () {
            return $("#Addr").data("code");
        },
        callback: function (data) {
            $("#Addr").val(data.addr).data("code", data.town.code);
        }
    });

}

function checkShow() {

}

//    选择学校
function toSchool() {
    window.location.href = "../login/schoolChoose.html";
}

var school = [];
var className = [];
;
var Stuname = [];
var IcNo = [];
var userclass;
var linkman;
var ClassID;
var SchoolID;
var studentIdNum;
(function ($, doc) {
    $.init();
    $.ready(function () {

        var userclass = new $.PopPicker();
        var showUserPickerButton1 = doc.getElementById('class');
        var list = [];
        var openId = GetQueryString("openId");
        studentIdNum = GetQueryString("studentId");
        IcNo = GetQueryString("IcNo");
        document.getElementById("stuIdNum").value = studentIdNum;
    });


})(mui, document);

var checkFlag = true;

//图片选择
function cho() {
}

function countCardNum(abc) {
    numCount = $(abc).val() * 15;
    if ($(abc).val() < 1) {
        numCount = 15;
    }
    $("#money").text('¥  ' + numCount + '.00');
}

//卡片数量不能小于0
function cardNum() {
    if ($("#num").val() < 1) {
        $("#num").val(1);
    }
}

//提交
function ons() {
    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
    var mobile = $("#phoneNum").val();
    if (mobile == null || mobile == "" || !reg.exec(mobile)) {
        connect()
    }
    else {
        alert("发送");
    }
}

//弹框
function connect() {
    //var info = document.getElementById("info");
    var btnArray = ['是', '否'];
    mui.confirm('请填写正确格式的手机号码', '提交失败', btnArray, function (e) {
        if (e.index == 0) {
            // 点击联系客服弹出框上的“是”按钮';
        } else {
            //点击联系客服弹出框上的“否”按钮'
            cancle();
        }
    });
};


//</sc/*****************************点击获取验证码************************************/

//var p1 = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
var p1 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
var issend = true;
var verifyCode = "";
//↓↓↓↓修改 4.17，使刷新不会中断倒计时↓↓↓↓
var maxtime;
if (window.name == '') {
    maxtime = 2 * 60;
} else {
    maxtime = window.name;
    // sendMessage(maxtime);
}

var mytime;

//↑↑↑↑修改 4.17，使刷新不会中断倒计时↑↑↑↑
function sendMessage(t) {
    var openId = GetQueryString('openId');
    var phoneNum = document.getElementById("phoneNum");
    if (issend) {
        if (phoneNum.value != null && phoneNum.value.length != 0) {
            if (!p1.test(phoneNum.value)) {
                phoneNum.value = '';
                alert('请输入正确的手机号码');
                phoneNum.focus();
                return;
            } else {
                var xval = getBusyOverlay('viewport', {
                    color: 'white',
                    opacity: 0.75,
                    text: '加载中',
                    style: 'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'
                }, {color: '#59bf6b', size: 70, type: 'o'});
                issend = false;
                mui.ajax(baseURL + '/weixiplusBing/getCode', {
                    data: {
                        phone_num: phoneNum.value,
                        openId: openId
                    },
                    dataType: 'json',
                    type: 'post',
                    timeout: 10000,
                    async: false,
                    beforeSend: function () {
                        if (xval) {
                            xval.settext("加载中，请稍后......");
                        }
                    },
                    success: function (data) {
                        if (data.errorcode.code == 0) {
                            xval.remove();
                            mui.toast('验证码下发成功');
                            var now_time = new Date();
                            mytime = now_time.getMilliseconds()
                            for (var i = 1; i <= t; i++) {
                                window.setTimeout("update(" + i + "," + t + ")", i * 1000);
                            }
                        }
                        else {
                            mui.toast('验证码下发失败');
                        }
                    },
                    error: function (xhr, type, errorThrown) {
                        mui.toast('网络异常，稍后再试!');
                    }
                });
            }
        } else {
            alert('手机号码不能为空!');
            return;
        }
    }
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

var className = document.getElementById("class2");

function sub() {
    var cardType;
    for (var i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
            cardType = radio2[i].value;
        }
    }

    var openId = GetQueryString('openid');

    var card_num = $("#num").val();
    var contact_person = $("#linkman").val();
    var phone_num = $("#phoneNum").val();
    var address = $("#local").val();
    var verifycode = $("#myCheckNum").val();

    ClassID = $("#class2").val();
    var stuId = $("#stuIdNum").val();

    var formData = new FormData($("#saveMoment")[0]);

    formData.append("openId", openId);
    formData.append("cardType", cardType);
    formData.append("SchoolID", SchoolID);
    formData.append("className", className.value);
    formData.append("card_num", card_num);
    formData.append("contact_person", contact_person);
    formData.append("phone_num", phone_num);
    formData.append("address", address);
    formData.append("verifycode", verifycode);
    formData.append("stuid", stuId);
    formData.append("money", numCount);
    formData.append("IcNo", IcNo);

    $.ajax({
        url: baseURL + '/buka/submit.webapp',
        data: formData,
        type: 'POST',
        method: 'POST',
        timeout: 10000,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (data) {
            if (data.resultSucCode == 200) {
                window.location.href = data.url;
            }
            else {
                //当返回参数不正确时直接显示错误码
                mui.toast(data.errorcode.errMsg)
            }
        },
        error: function (xhr, type, errorThrown) {
            mui.toast('网络异常，稍后再试!');
        }
    });
}

//选中图片数量,用于限制图片上传数量
var imagenum = 0;
//监听页面宽度
var width = $(window).width();

function chooseImage(e) {
    $(e).next().click();
};

//检查文件类型和大小
function checkFile(file) {
    var filetypes = [".jpg", ".png", ".gif", ".ps", ".jpeg"];
    var filemaxsize = 1024 * 2;//2M
    var flag = false;
    var size = Math.round(file.size * 100 / (1024 * 1024)) / 100;
    var type = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (filetypes && filetypes.length > 0) {
        for (var i = 0; i < filetypes.length; i++) {
            if (filetypes[i] == type) {
                flag = true;
                break;
            }
        }
    }
    if (!flag) {
        alert("不接受此文件类型。");
        return false;
    }
    if (size > filemaxsize) {
        alert("附件大小不能大于" + filemaxsize / 1024 + "M。");
        return false;
    }
    if (size <= 0) {
        alert("附件大小不能为0M。");
        target.value = "";
        return false;
    }
    console.log("文件大小：" + size + "M，文件类型：" + type);
    return true;
}

//获取文件路径
function getObjectURL(file) {
    var url = null;
    if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.creaconsole.log(123);
        teObjectURL(file);
    }
    return url;
}

//图片预览
function showIllegalImage(e) {
    var src = "";
    $.each(e.files, function (index, obj) {
        var isNext = checkFile(obj);
        if (isNext) {
            imagenum++;
            var objURL = getObjectURL(obj);
            document.getElementById("pic1").innerHTML = '<div class="image" style="position:relative;height: auto;list-style-type: none; display: inline-block; width: 22.5%;margin:2% 1.2%;" touchstart="return false">' +
                '<img onclick="deletePic(this)" src="../../img/banjiquan/del.png" style="position: absolute;z-index: 99;width: 18px;top:0;right:0;">' +
                '<img style="height:' + width / 5.8 + 'px;width:' + width / 5.8 + 'px;z-index:-1;" src="' + objURL + '">' +
                '</div>';
        }
    });
    if (src.length != 0) {
        $("#preview").css({"display": "block"});
        $("#preview").append(src);
    }
}


function deletePic(e) {
    imagenum--;
    if (imagenum == 0) {
        $(e).parent().css({"display": "none"});
    }
    $(e).parent().remove();
}