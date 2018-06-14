/**
 * Created by Administrator on 2018/1/11 0011.
 */
//var baseURL = "http://127.0.0.1:8080/child";
var baseURL = "";
//var baseURL = "http://192.168.1.100:8080/child";
var p1 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
var clientHeight = 1334;
var clientWidth = 750;
var socket="";
    function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
//获取url指定字符
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;

    function getDateDiff(dateTimeStamp){
            var day = new Date();//当前时间
        var userdTime = day.getHours()*60*60*1000+day.getMinutes()*60*1000+day.getSeconds()*1000;//当前已经经过的毫秒数
        var nowStamp = day.getTime();//获取当前时间戳
        var dayTime = 24*60*60*1000;//一天所需毫秒数
        if ((nowStamp-dateTimeStamp)<=userdTime){
            console.log("今天")
            var day = new Date(dateTimeStamp);
            var month = (day.getMonth()+1)>=10?day.getMonth()+1:"0"+(day.getMonth()+1)
            var niti = day.getDate()>=10?day.getDate():"0"+day.getDate()
            var hour = day.getHours()>=10?day.getHours():"0"+day.getHours()
            var minute = day.getMinutes()>=10?day.getMinutes():"0"+day.getMinutes()
            return "今天"+hour+":"+minute;
        }
        else if ((nowStamp-userdTime-dateTimeStamp)<=dayTime){
            console.log("昨天")
            var day = new Date(dateTimeStamp);
            var month = (day.getMonth()+1)>=10?day.getMonth()+1:"0"+(day.getMonth()+1)
            var niti = day.getDate()>=10?day.getDate():"0"+day.getDate()
            var hour = day.getHours()>=10?day.getHours():"0"+day.getHours()
            var minute = day.getMinutes()>=10?day.getMinutes():"0"+day.getMinutes()
            return "昨天"+hour+":"+minute;
        }
        else {
            console.log("前天")
            var day = new Date(dateTimeStamp);
            var month = (day.getMonth()+1)>=10?day.getMonth()+1:"0"+(day.getMonth()+1)
            var niti = day.getDate()>=10?day.getDate():"0"+day.getDate()
            var hour = day.getHours()>=10?day.getHours():"0"+day.getHours()
            var minute = day.getMinutes()>=10?day.getMinutes():"0"+day.getMinutes()
            return month+"-"+niti+" "+hour+":"+minute;
        }
}
//时间戳转日期
function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        return Y+M+D+h+m+s;
    }
function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}
//关闭通道
function removechannel(){
	//通道存在
	   if(socket!=""){
		   //通道处于活跃状态
       	if(socket.readyState==1){
       		var removeInfo="remove,"+sendid;
       		socket.send(removeInfo);
       		socket.close();
       	}
       }
 
}
function jumpPage(type){
    var openid = GetQueryString("openid");
    removechannel();
    switch(type){
        case 0:{
            //微校园
            window.location.href =  "../weixiaoyuan/weixiaoyuan.html?openid="+openid;
        }
            break;
        case 1:{
            //家校互通
            window.location.href =  "../jiaxiaohutong/interflow.html?openid="+openid;
        }
            break;
        case 2:{
            //班级圈
			//window.location.href = "../banjiquan/bjq.html?openid="+openid;
            window.location.href = "../banjiquan/bjq.html?openid="+openid;        }
            break;
        case 3:{
            //我的
            window.location.href = "../geren/mine.html?openid="+openid;
			
        }
            break;
        case 4:{
             //考勤
            window.location.href = "../kaoqin/attendance.html?openid="+openid;
        }
            break;
        case 5:{
             //请假申请
            window.location.href = "../qingjia/leave_apply.html?openid="+openid;
        }
            break;
        case 6:{
             //首页
            window.location.href = "../shouye/index.html?openid="+openid;
        }
            break;
        case 7:{
            //充值
            window.location.href = "../geren/recharge.html?openid="+openid;
        }
            break;
        case 8:{
            //教子良方
            window.location.href =  "../jiaozilangfang/educational.html?openid="+openid;
        }
            break;
        case 9:{
            //掌踪宝
            window.location.href =  "../zhangzongbao/Palm_treasure.html?openid="+openid;
        }
            break;
        case 10:{
            //业务订阅
            window.location.href =  "../yewudingyue/list.html?openid="+openid;
        }
            break;
    }
}
//登记拜访检测open是学生还是老师
function judge(){
	var openidStr = GetQueryString("openid");
    $.ajax(baseURL+"/visitRegister/judgeType.webapp", {
        data:{
            openId:openidStr
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            console.log(data);
            //1.老师  0.家长
            if (data.flag==1)
            {
                window.location.href='../dengjibaifang/reply.html?openid='+openidStr;
            }
            else
            {
                window.location.href='../dengjibaifang/dengji.html?openid='+openidStr;
            }
        },
        error: function(e) {
            console.log(e)
            mui.toast(e)
        }
    });
}
//请假检测open是学生还是老师
function judge2(){
	var openidStr = GetQueryString("openid");
    $.ajax(baseURL+"/visitRegister/judgeType.webapp", {
        data:{
            openId:openidStr
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            console.log(data);
            //1.老师  0.家长
            if (data.flag==1)
            {
                window.location.href='../qingjia/teaReply.html?openid='+openidStr;
            }
            else
            {
                window.location.href='../qingjia/leaveSchool.html?openid='+openidStr;
            }
        },
        error: function(e) {
            console.log(e)
            mui.toast("无此用户存在！")
        }
    });
}
//作业检测open是学生还是老师
function judge3(){
	var openidStr = GetQueryString("openid");
    $.ajax(baseURL+"/visitRegister/judgeType.webapp", {
        data:{
            openId:openidStr
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            console.log(data);
            //1.老师  0.家长
            if (data.flag==1)
            {
                window.location.href='../kanzuoye/teaHomework.html?openid='+openidStr;
            }
            else
            {
                window.location.href='../kanzuoye/parHomework.html?openid='+openidStr;
            }
        },
        error: function(e) {
            console.log(e)
            mui.toast(e)
        }
    });
}
function reSaizeDom(){
    var WidthRadio =window.screen.width/clientWidth;
    var HeightRadio = window.screen.width/clientHeight;
    var table = document.getElementsByClassName("resize-element");
    for (var i= 0;i<table.length;i++){
        table[i].style.width = table[i].style.width*WidthRadio;
        table[i].style.height = table[i].style.height*HeightRadio;
    }
}
//function putlink(){
//	
//	document.getElementById("item-1").addEventListener("click", function(){
//	  window.location.href = "../geren/mine.html?openid="+openid;
//	});
//	document.getElementById("item-1").href = "javascript:void(0)"; 
//	document.getElementById("item-2").addEventListener("click", function(){
//	  judge3();
//	});
//	document.getElementById("item-2").href = "javascript:void(0)"; 
//	document.getElementById("item-3").addEventListener("click", function(){
//	  judge2();
//	});
//	document.getElementById("item-3").href = "javascript:void(0)"; 
//	document.getElementById("item-4").addEventListener("click", function(){
//	  window.location.href = "../geren/recharge.html?openid="+openid;
//	});
//	document.getElementById("item-4").href = "javascript:void(0)"; 
//}


$(document).ready(function(){
    reSaizeDom();
})