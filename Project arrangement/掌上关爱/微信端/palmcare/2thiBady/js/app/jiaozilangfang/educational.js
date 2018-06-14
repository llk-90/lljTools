/**
 * Created by roger on 2018/1/23.
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
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
});


$(function () {
	 $(".mui-icon i").parent().removeClass("mui-icon-jia");
	 $(".mui-icon i").css("font-size","1em");
	 $(".mui-icon i").css("margin-top","5px");
});

var pageCount = 0;
var openid = GetQueryString("openId");
//上拉
function pullupRefresh() {

                setTimeout(function() {
                    $.ajax(baseURL+"/weixiplusEducationInfo/getInfoList.webapp", {
                        data: {
                            openId:openid,
                            pageCount:pageCount
                        },
                        dataType: 'json',
                        type: 'post',
                        timeout: 10000, //超时时间设置为10秒；
                        crossDomain: true,
                        async:false,
                        success: function (data){
                            if(data.errorcode.code==0){
                                addfirst1(data);
                                pageCount++;
                            }
                            else {
                                mui.toast(data.errorcode.errMsg);
                            }
                        },
                        error: function(e) {
                            console.log(e);
                            mui.toast("服务器正在维护");
                        }
                    });
                }, 1000);
}
mui("ul").on("tap","a",function(){

    window.top.location.href=this.href+"&openid="+openid;
});
mui("ul").on("tap","li",function(){

    var liid = this.id.replace("li","");
    window.top.location.href="educationalDetil.html?InfoId="+liid;
});
mui("nav").on("tap","a",function(){
    window.top.location.href=this.href+"?openid="+openid;
});

function addfirst1(data){
    //console.log(data.educationInfoList.length==0);
    //console.log(pageCount);
    //if(data.educationInfoList.length<5){
    mui('#pullrefresh').pullRefresh().endPullupToRefresh((data.educationInfoList.length<5)); //参数为true代表没有更多数据了。

    //if(data.educationInfoList.length<5){
    //    mui.toast("没有更多数据了");
    //}
    //    mui.toast(data.errorcode.errMsg);
    //}
    var table = document.body.querySelector('.mui-table-view');
    //var cells = document.body.querySelectorAll('.mui-table-view-cell');
    //var newCount = cells.length>0?5:5;//首次加载5条，满屏
    for (var i = 0; i < data.educationInfoList.length; i++) {
        var li = document.createElement('li');
        li.setAttribute("style","margin-bottom:10px")
        li.className = 'main';
        li.id = "li"+data.educationInfoList[i].id;
        li.innerHTML = ' <img src="'+ data.educationInfoList[i].icon+'"alt=""><a href="educationalDetil.html?InfoId=' +data.educationInfoList[i].id+'"><span class="title" style="color: #DB3652">'+data.educationInfoList[i].title+'</span></a>' +
            '<div class="contant" style="color: darkgray"><p>'+data.educationInfoList[i].content+'</p></div>' +
            '<div class="autime"><span class="author" style="color: #DB3652">'+data.educationInfoList[i].author+'&nbsp;|&nbsp;</span><span class="time" style="color: #DB3652">'+getDateDiff(data.educationInfoList[i].create_time)+'</span></div>';
        table.appendChild(li);
    }
}
$(".main").click(function(){
    var item = $(this).index();  //获取索引下标 也从0开始
    var textword = $(this).text();  //文本内容
    mui.toast("下标索引值为：" + item +"\n"+ "文本内容是："+textword); //  \n换行
})

function addfirst(data){
    //mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
    var table = document.body.querySelector('.mui-table-view');
    //var cells = document.body.querySelectorAll('.mui-table-view-cell');
    //var newCount = cells.length>0?5:5;//首次加载5条，满屏
    table.innerHTML="";
    for (var i = 0; i < data.educationInfoList.length; i++) {
        var li = document.createElement('li');
        li.setAttribute("style","margin-bottom:10px")
        li.className = 'main';
        li.id = "li"+data.educationInfoList[i].id;
        li.innerHTML = ' <img src="'+ data.educationInfoList[i].icon+'"alt=""><a href="educationalDetil.html?InfoId=' +data.educationInfoList[i].id+'"><span class="title" style="color: #DB3652">'+data.educationInfoList[i].title+'</span></a>' +
            '<div class="contant" style="color: darkgray"><p>'+data.educationInfoList[i].content+'</p></div>' +
            '<div class="autime"><span class="author" style="color: #DB3652">'+data.educationInfoList[i].author+'&nbsp;|&nbsp;</span><span class="time" style="color: #DB3652">'+getDateDiff(data.educationInfoList[i].create_time)+'</span></div>';
        table.appendChild(li);
    }
}

function addData() {

        $.ajax(baseURL+"/weixiplusEducationInfo/getInfoList.webapp", {
            data: {
                openId:openid,
                pageCount:0
            },
            dataType: 'json',
            type: 'post',
            timeout: 10000, //超时时间设置为10秒；
            crossDomain: true,
            async:false,
            success: function (data){
                if(data.errorcode.code==0){
                    pageCount = 1;
                    addfirst(data);
                    //mui('#pullrefresh').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。
                    mui('#pullrefresh').pullRefresh().refresh(true);
                }
                else {
                    mui.toast(data.errorcode.errMsg);
                }
            },
            error: function(e) {
                console.log(e);
                mui.toast("服务器正在维护");
            }
        });
    //var table = document.body.querySelector('.mui-table-view111');
    //var cells = document.body.querySelectorAll('.mui-table-view-cell');
    //for(var i = cells.length, len = i + 5; i < len; i++) {
    //    var li = document.createElement('li');
    //    li.className = 'main';
    //    li.innerHTML = '<img src="../../img/jiaozilangfang/p1.jpg" alt=""> <span class="title">中国青年工匠闪耀世界舞台</span>' +
    //                   '<div class="contant"><p>以前从未参加过舞蹈节目比赛的罗大帅，第一次参赛就登上世界的舞台，而且把金牌捧回来...</p></div>' +
    //                   '<div class="autime"><span class="author">罗浙&nbsp;|&nbsp;</span><span class="time">2017-11-15</span></div>';
    //    //下拉刷新，新纪录插到最前面；
    //    table.insertBefore(li, table.firstChild);
    //}
}
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {

    setTimeout(function() {
        addData();
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
        mui.toast("已刷新数据");
    }, 1500);
}
