// var classId=102176751;
// var key=""
var classId;
var key="";
var uid;
var pageSize=5;
var pageCount=1;
var usertype;
var userInfo;
//get screen width
var width;
var openid;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(function () {
    getBasicInfo();
    $.ajax("/classMoment/getMsg.webapp", {
        data: {
            classId: classId,
            key: key,
            pageSize: pageSize,
            pageCount: pageCount,
            usertype: usertype,
            uid: uid
        },
        async: true,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 100000, //超时时间设置为10秒；
        crossDomain: true,
        success: function (replymsg) {
            $("#indexOfClassMomentsShow").append(getHtmlContent(replymsg.data));
            $("#linkToClassMoments").attr("href","../../html/banjiquan/bjq.html?openid="+openid);
        }
    });
})

function getHtmlContent(data) {
    var allNews = "";
    for (var i=0;i<2;i++){
        var head_photo = data[i].HeadImage;
        if(head_photo==null||head_photo.trim()==""||head_photo==undefined){
            head_photo = "../../img/banjiquan/mylogo.jpg";
        }
        var username = data[i].ParUserName;
        var create_time = data[i].create_time;
        var momentContent = data[i].content;
        var momentTitle = data[i].title;
        allNews=allNews+'<a href="../../html/banjiquan/bjq.html?openid='+openid+'" class="alink">\n' +
            '\t<img src="'+head_photo+'">\n' +
            '\t<div class="lc1">\n' +
            '\t\t<span>'+create_time+'</span>\n' +
            '\t\t<h3>'+username+'</h3>\n' +
            '\t\t<p>'+momentContent+'</p>\n' +
            '\t</div>\n' +
            '</a>';
    };
    return allNews;
}

function getUserInfo() {
    getBasicInfo();
    $.ajax({
        type : "POST",
        url : '/classMoment/getUserInfo.webapp',
        data : {
            uid:uid,
            usertype:usertype
        },
        dataType : 'json',
        cache : false,
        async : true,
        success : function(data) {
            if(data.errMsg=="OK"){
                userInfo = data.userInfo;
            }
        }
    });
}

function getBasicInfo() {
    var url = location.search; //获取url中含"?"符后的字串
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        $.each(strs, function(index,obj){
            var key = obj.split("=")[0];
            var value = obj.split("=")[1];
            if(key=="openid"){
                openid = value;
            }else if(key=="uid"){
                uid = value;
            }else if(key=="classId"){
                classId = value;
            }else if(key=="usertype"){
                usertype = value;
            }
        })
    }
    getInfoByOpenId(openid);
}

function getInfoByOpenId(catchedOpenId) {
    $.ajax({
        type : "POST",
        url : '/classMoment/getInfoByOpenId.webapp',
        data : {
            openid:catchedOpenId,
        },
        dataType : 'json',
        cache : false,
        async : false,
        success : function(receivedata) {
            if(receivedata.errMsg=="OK"){
                uid = receivedata.uid;
                classId=receivedata.classId;
				usertype=1;
            }
        }
    });
}