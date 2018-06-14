/**
 * Created by fengsn on 2018/1/23.
 */

var num = 5;

$(function(){
    List()
});

function addChild(i,name){
    console.log("i:"+i);
    var child = " <div class='from-child'>"+
    "<div class='icon' style='margin-top: 6.2%'><img src='../../img/zhangzongbao/person.png' style='width: 50%'></div>"+
       "<div style='width: 30%;height: 4rem;display: flex;flex-direction: column;justify-content: space-around;'>"+
       "<label class='from-child-label'>"+"宝贝姓名"+"</label>"+
        "</div>"+
        "<div style='width: 60%;height: 4rem;display: flex;flex-direction:row;justify-content: space-around'>"+
        "<div  class='from-child-child'>"+
        "<label class='from-child-label' id='li"+i+"' style='border-right: 0px' onclick='show("+i+")'>"+name+"</label>"+
        "</div>"+
        "<div id='baby"+i+"' style='width: 20%;height: 50%;margin-top: 8%;display: flex;flex-direction: column;justify-content: center;margin-left: 4%;visibility:hidden'>"+
        "<img src='../../img/zhangzongbao/对勾.png' style='width: 50%'>"+
        "</div>"+
        "</div>"+
        "</div>"
     $("#mui-card").append(child)
}

function  show(i){

    $("#baby"+i).css("visibility","visible");
    console.log( $("#baby"+i).attr("visibility"))
    for(var j=0;j<num;j++){
        if(j!=i){
            $("#baby"+j).css("visibility","hidden");
        }
    }
    console.log(i);
    var name = document.getElementById("li"+i).innerHTML;
    console.log(name);
    updateCurr(name)
}

function List(){
    var stuid = GetQueryString('stuid');
    setTimeout(function() {
        var d = {
            openid : GetQueryString('openid')
        };
        mui.ajax(baseURL+"/addchildInfo/list.webapp", {
            data: d,
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
             if(data.list.length>0){
            	 for(var i=0;i<data.list.length;i++){
            		 if(data.list[i].ibaby_s_id==stuid){
            			 addChild(i,data.list[i].ibaby_s_name);
            		 }
            	 }
             }else{
            	 mui.toast("查询数据失败！！！");
             }
            },
            error: function(xhr, type, errorThrown) {
            }
        });
    }, 100);

}

function updateCurr(name) {
    //document.getElementById("loads").style.display = "";
    var openid = GetQueryString('openid');
    //var openid = GetQueryString('stuid');
        mui.ajax(baseURL+"/addchildInfo/switchChild.webapp", {
            data: {
                openid : openid,
                child_name: name
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            async: true,
            success: function(data) {
                console.log(data);
                canSave = 1;
                if (data.result == "success") {
                    var url = "Palm_treasure.html?openid="
                        + openid + "&stuid="+ data.stu_id;
                    setTimeout("window.location.href= '" + url + "'",
                        100)
                } else {
                    mui.toast("切换失败");
                }
            },
            error: function() {
                mui.toast("切换失败");
            }
        });
}
