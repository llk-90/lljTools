
/**
 * Created by roger on 2018/1/17 0012.
 */
mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            style:'circle',
            offset:'100px',
            callback: pulldownRefresh
        },
        up: {
            auto:true,
            //contentrefresh: '正在加载...',
            contentrefresh: '',
            callback: pullupRefresh
        }
    }

});

function minePage(type){
	
	var regPos = /^\d+(\.\d+)?$/; //非负浮点数
	var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    switch(type){
        case 0:{
            //充值
			if(regPos.test(userInfo.balance) || regNeg.test(userInfo.balance)){
				window.location.href = "../../html/geren/recharge.html?openid="+userInfo.openid;	
			}
		}
            break;
        case 1:{
            window.location.href = "../../html/geren/Personal_bill.html?openid="+userInfo.openid;
        }
            break;
    }
}



$(document).ready(function(){
    initUserInfo();
    getUesrInfo();
    $(".mui-icon i").parent().removeClass("mui-icon-jia");
    $(".mui-icon i").css("font-size","1em");
    $(".mui-icon i").css("margin-top","5px");
    $(".yuan").attr("href","../../html/shouye/index.html");
    // 鉴于轮盘功能可用，特将此方法注释
    mui("nav").on("tap","a",function(){
        window.top.location.href=this.href+"?openid="+userInfo.openid;
    });
})

var count = 0;
function pullupRefresh() {
    count += 1;
    loadListData();
}
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {

    count = 0;
    loadListData(count);
    mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
    getUesrInfo();
    //mui.toast("已刷新数据");
}


//*****************************************网络加载**********************************************

var  userInfo   = new Object();

function getimgs(type)
{
    switch (type){
        case 0:{
            return "../../img/geren/food.png";
        }
            break;
        case 1:{
            return "";
        }
            break;
    }
}
function initUserInfo()
{
    userInfo.heardImg = " ";
    userInfo.userName = " ";
    userInfo.balance = " ";
    userInfo.className = " ";
    userInfo.list = [];
    userInfo.ic_num ="";
    userInfo.openid = GetQueryString("openid")
}

//鉴于轮盘功能可用，特将此方法注释
// mui('body').on('tap','a',function(){
//     window.top.location.href=this.href;
// });


function getUesrInfo()
{
    mui.ajax(baseURL+"/weixiplusCommon/getRegistInfoList.webapp", {
        data:{
            openId:userInfo.openid
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async:false,
        success: function(data) {
            console.log(data.resultSucCode);
            if (data.errorcode.code==0)
            {
                userInfo.userName = data.infolist[0].StuName;
                userInfo.className = data.infolist[0].ClassName;
                userInfo.balance = data.infolist[0].balance==undefined?"NotFound":data.infolist[0].balance;
                userInfo.heardImg = data.infolist[0].heardImg;
                userInfo.ic_num = data.infolist[0].icno;
                document.getElementById("StuName").innerText = userInfo.userName
                document.getElementById("ClassName").innerText =userInfo.className
                document.getElementById("balanceNum").innerText =userInfo.balance
                loadListData();
            }
            else
            {
                //当返回参数不正确时直接显示错误码
                mui.toast(data.errorcode.code)
            }

        },
        error: function(xhr, type, errorThrown) {
            mui.toast("服务器正在维护，请稍后重试！")
        }

    });
}
function loadListData()
{
    if (typeof(userInfo.ic_num)=="undefined"){
        return;
    }
    mui.ajax("/xft/xyoperHis.webapp", {
        data:{
            IcNo:userInfo.ic_num
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        crossDomain:true,
        async:false,
        success: function(data) {
            mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
            if (data.resultSucCode=="200")
            {
                loadPage(data.userHistory);
            }
            else
            {
                //当返回参数不正确时直接显示错误码
                //mui.toast(data.resultSucCode)
                mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
            }

        },
        error: function(e) {
            console.log(e);
            mui.toast("服务器正在维护，请稍后重试！")
            mui('#pullrefresh').pullRefresh().endPulldownToRefresh();

        }

    });

}
//加载页面
function loadPage(data)
{

    var table = document.body.querySelector('.mui-table-view111');
    var cells = document.body.querySelectorAll('.mui-table-view-cell');
    if (data.length<=20)
    {    //当数据小于20个时直接显示无更多数据
        mui('#pullrefresh').pullRefresh().endPullupToRefresh(true); //参数为true代表没有更多数据了。
    }
    if (count==0)
    {//当进行下拉刷新时，先将所有内容清空

        var  childs = table.childNodes;
        for(var i = childs.length - 1; i > 0; i--) {
            //alert(childs[i].nodeName);
            table.removeChild(childs[i]);
        }


    }


    for (var  i = 0;i<data.length;i++)
    {
        var li = document.createElement('li');
        li.innerHTML = '<span class="mui-icon mui-icon-chi"></span><h1><i>'+data[i].JE+'元'+'</i>'+data[i].GrpName+'</h1><h2><i>'+'剩余 :'+ data[i].LeftJE +'元'+'</i>'+getDateDiff(data[i].PayTime)+'</h2>';
        //下拉刷新，新纪录插到最前面；
        table.appendChild(li);
    }


}
