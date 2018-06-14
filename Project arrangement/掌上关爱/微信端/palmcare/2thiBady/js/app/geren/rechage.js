/**
 * Created by roger on 2018/1/17.
 */

var rechargeNum,mchId,outTradeNo,stat,openId;

function minePage(type){
    switch(type){
        case 0:{
            window.location.href = "../../html/geren/recharge.html?openid="+openid;
        }
            break;
        case 1:{
            window.location.href = "../../html/geren/Personal_bill.html?openid="+openid;
        }
            break;
        case 2:{

        }
            break;
        case 3:{

        }
            break;
        case 4:{

        }
            break;
        case 5:{

        }
            break;
        case 6:{

        }
            break;
    }
}
function recharge(num,idNum)
{

    rechargeNum = num;

    for(var i=0;i<6;i++)
    {
        document.getElementById("a"+i).style.backgroundColor = "#FFFFFF";
        document.getElementById("a"+i).style.borderColor = "#58C770";
        document.getElementById("a"+i).style.color = "#58C770";
    }
    console.log(document.getElementById(idNum))

    document.getElementById("a"+idNum).style.borderColor = "#58C770";
    document.getElementById("a"+idNum).style.backgroundColor = "#58C770";
    document.getElementById("a"+idNum).style.color = "#FFFFFF";

}

function naviToHistory()
{
    window.location.href ="../geren/Personal_bill.html"
}
var  userInfo = new Object;

/**
 *获取充值链接
 */
function saveMoney()
{

    if(rechargeNum==0||rechargeNum==null)
    {
        mui.toast("请选择支付金额")
        return
    }
    if(typeof(openid)=="undefined"){

        mui.toast("学生信息获取失败");

    }
	var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
    $.ajax(baseURL+"/xft/recharge.webapp", {
        data:{
            money:rechargeNum,
            openId:openid,
            IcNo:userInfo.ic_num
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async:false,
        beforeSend:function(){
            if(xval) {
                xval.settext("加载中，请稍后......");
            }
        },
        success: function(data) {
            xval.remove();
            if (data.resultSucCode==200)
            {
                window.location.href = data.url;

            }
            else
            {
                //当返回参数不正确时直接显示错误码
                mui.toast(data.resultSucMsg)
            }

        },
        error: function(xhr, type, errorThrown) {
            xval.remove();
            mui.toast("请稍后重试！")
        }

    });
}
$( document ).ready(
    function () {
        openid= GetQueryString('openid');
        setCookie("openId",openid,1);
        outTradeNo = GetQueryString('out_trade_no');
        stat = GetQueryString('status');
        initUesrInfo();
        getUesrInfo();
    }
)
function initUesrInfo()
{
    userInfo.userName = "";
    userInfo.balance = 0;
    userInfo.className = "";
    userInfo.heardImg = "";
    userInfo.ic_num = "";
    $.get("/xft/confirmPayment.webapp", {out_trade_no:outTradeNo,trade_status:stat});

}
function getUesrInfo()
{
	var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
    $.ajax(baseURL+"/weixiplusCommon/getRegistInfoList.webapp", {
        data:{
            openId:openid
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async:false,
        beforeSend:function(){
            if(xval) {
                xval.settext("加载中，请稍后......");
            }
        },
        success: function(data) {

            if (data.errorcode.code==0)
            {
                xval.remove();
                userInfo.userName = data.infolist[0].StuName;
                userInfo.className = data.infolist[0].ClassName;
                userInfo.balance = data.infolist[0].balance=="undefined"?0:data.infolist[0].balance;
                userInfo.heardImg = data.infolist[0].heardImg;
                userInfo.ic_num = data.infolist[0].icno;
                document.getElementById("StuName").innerText = data.infolist[0].StuName
                document.getElementById("ClassName").innerText =data.infolist[0].ClassName
                document.getElementById("balanceNum").innerText =userInfo.balance
                document.getElementById("icno").innerText =data.infolist[0].icno


            }
            else
            {
                xval.remove();
                //当返回参数不正确时直接显示错误码
                mui.toast(data.errorcode.errMsg)
            }

        },
        error: function(e) {
            console.log(e);
            xval.remove();
            mui.toast("请稍后重试！")
        }

    });
}