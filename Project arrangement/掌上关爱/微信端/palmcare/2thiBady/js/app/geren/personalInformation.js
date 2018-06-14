/**
 * Created by George on 2018/3/13.
 */
var userInfo = new Object();//初始化用户obj
//页面初始化回调函数//userInfo.openId
$(document).ready(function(){
    userInfo.openId = GetQueryString("openid");
    $.ajax(baseURL+"/personal/getPersonalInfoAll.webapp",{
        data:{
            openid: userInfo.openId
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        crossDomain:true,
        success: function(data) {
            //成功回调
            console.log("this is ready()");
            if (data.errorcode.code==0){
                if(null!=data.UserName&&data.UserName!=""){
                    document.getElementById("StudengName").innerHTML=data.UserName;
                }else{
                    $("#StudengName").parent().remove();
                }
                if(null!=data.ClassName&&data.ClassName!=""){
                    document.getElementById("Class").innerHTML=data.ClassName;
                }else{
                    $("#Class").parent().remove();
                }
                if(null!=data.IcNo&&data.IcNo!=""){
                    document.getElementById("ICCode").innerHTML=data.IcNo;
                }else{
                    $("#ICCode").parent().remove();
                }
                if(null!=data.LoginName&&data.LoginName!=""){
                    document.getElementById("LoginName").innerHTML=data.LoginName;
                }else{
                    $("#LoginName").parent().remove();
                }
                if(null!=data.ParUserName&&data.ParUserName!=""){
                    document.getElementById("Parentname").innerHTML=data.ParUserName;
                }else{
                    $("#Parentname").parent().remove();
                }
                if(null!=data.ParEMail&&data.ParEMail!=""){
                    document.getElementById("ParentMail").innerHTML=data.ParEMail;
                }else{
                    $("#ParentMail").parent().remove();
                }
                if(null!=data.SeqStudent&&data.SeqStudent!=""){
                    document.getElementById("SeqStudent").innerHTML=data.SeqStudent;
                }else{
                    $("#SeqStudent").parent().remove();
                }
                if(null!=data.SchoolName&&data.SchoolName!=""){
                    document.getElementById("School").innerHTML=data.SchoolName;
                }else{
                    $("#School").parent().remove();
                }
                if(null!=data.phone_num&&data.phone_num!=""){
                    document.getElementById("ParentPhone").innerHTML=data.phone_num;
                }else{
                    $("#ParentPhone").parent().remove();
                }
            }
            else {
                //其他错误，显示error信息
                mui.toast(data.errorcode.resultSucMsg)
            }


        },
        error: function(e) {
            console.log(e);
            //失败回调
            mui.toast(e);
        }
    });
})



