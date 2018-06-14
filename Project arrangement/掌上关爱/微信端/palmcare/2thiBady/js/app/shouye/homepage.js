/**
 * Created by Administrator on 2018/1/30 0030.
 */


var openidStr;
var IcNo;
var studentIdNum;
$(document).ready(function(){
    openidStr =GetQueryString("openid");
    console.log("canshu:"+location.search);
    //var aee =document.getElementById("attendancealable")
    //aee.href = "../../html/kaoqin/attendance.html?openid="+openidStr

    var recharge =document.getElementById("recharge")
    recharge.href = "../../html/geren/recharge.html?openid="+openidStr

    var jioazi =document.getElementById("jiaoziliangfang")
    jioazi.href = "../../html/jiaozilangfang/educational.html?openid="+openidStr

	
	mui('#lowwerPart').on('tap','a',function(){
	    var pointedLocation='';
	    if(this.href.animVal==undefined){
            pointedLocation=this.href;
        }else {
            pointedLocation=this.href.animVal;
        }
    window.location.href = pointedLocation + "?openid=" + openidStr;
});


    $.ajax(baseURL+"/weixiplusHomepage/gethomepageInfo.webapp", {
        data:{
            openId:openidStr
            //openId:'oCBdZw-MApWwJ7cGmy2u4uRD2Cuc'
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            console.log(123);
            //console.log(data)
            console.log(data.resultSucCode)
            IcNo = data.IcNo;
            studentIdNum = data.StudentId;
            if (data.errorcode.code==0)
            {
               configView(data);
            }
            else
            {
                //当返回参数不正确时直接显示错误码
                mui.toast(data.errorcode.errMsg);
            }

        },
        error: function(e) {
            console.log(e)
            mui.toast("服务器正在维护，请稍后重试！");
        }

    });
})

//登记拜访检测open是学生还是老师
function judge(){
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
            mui.toast("服务器正在维护，请稍后重试！");
        }
    });
}
//请假检测open是学生还是老师
function judge2(){
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
            mui.toast("服务器正在维护，请稍后重试！")
        }
    });
}
//作业检测open是学生还是老师
function judge3(){
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
            mui.toast("服务器正在维护，请稍后重试！")
        }
    });
}
function judge4(){
    window.location.href='../buka/replacedDetail.html?openid='+openidStr+"&IcNo="+IcNo;
}


	// var jiaxiao =document.getElementById("nav_yoga")
    //jiaxiao.href = "../../html/jiaozilangfang/educational.html?openid="+openidStr
	
	/// var banjiquan =document.getElementById("nav_mall")
   // banjiquan.href = "../../html/jiaozilangfang/educational.html?openid="+openidStr
	
	// var wode =document.getElementById("nav_person")
    ///wode.href = "../../html/jiaozilangfang/educational.html?openid="+openidStr
function configView(data){
    //配置教子良方显示
    var  table = document.getElementById("education");
    var educdata = data.educationInfoList;
    //下拉刷新，新纪录插到最前面；

    for (var index = 0;index<2;index++){
        var info = educdata[index];
        var aLable = document.createElement('a');
        aLable.innerHTML = ' <img id="fbIcon" src="'+info.icon+'"> <div class="lc1"> <span id="fbTime">'+getDateDiff(info.create_time)+'</span> <h5 id="fbContent">'+info.content+'</h5> </div>';
        aLable.href = "../../html/jiaozilangfang/educationalDetil.html?InfoId="+info.id+"&openId="+openidStr;
        aLable.className = "alink";
        table.appendChild(aLable);
    }
//<a href="../../html/common/noservice.html" class="alink">
//
//    </a>
}
