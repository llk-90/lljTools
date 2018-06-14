/**
 * Created by fengsn on 2018/1/17.
 */
var num = 5;
var name = "深圳市南山区科技园";
var flag = true;
var data1 = null;
var data2 = null;
var data3 = null;
var data4 = null;
var data5 = null;
$(function () {
    //地址名
    localName();
    //循环添加用户地址信息
    localInfo();
});

//加入用户地址
function localInfo(){
    var that = this;
    var name1 = null;
    name1 = that.name;
    if(name1.length>6){
        name1 = name1.substring(0,6);
    }
    console.log(that.name1);
    for (var i=0;i<num;i++)
    {
        var txt1="<div class='location' style='border-radius: 10px' id="+i+">"+
            "<div class='gps-position-top'>" +
            "<div class='gps-position-Name'>" +
            "<div class='gps-position-Name-image'>" +
            " <img src='../../img/geren/local.png' style='width:1.8rem'>" +
            "</div>" +
            "<div class='gps-position-Name-local' style='border: 0px'> <input id='input"+i+"' style='font-size: 1.2rem;width:100%;margin-top: -0.5rem;border: 0px' readonly='readonly' value="+name1+"..."+">"+"</input></div>" +
            "</div>" +
            "<div class='gps-position-edit'> <img id='img"+i+"' src='../../img/geren/edit.png' style='width:1.5rem' onclick='localEdit("+i+")'></div>" +
            "<div class='gps-position-delete'> <img src='../../img/geren/delete.png' style='width:1.5rem' onclick='localdelete("+i+")'></div>" +
            "</div>"+
            "</div>"+
            "</div>";
        $("body").append(txt1);
        $("#input"+i).data("name",name);
    }

};
function localEdit(i){
    if(flag) {
        data1 = i;
        $("#input"+data1).attr("onclick",'overlay2('+data1+')')

        var button = "<div class='gps-button' id='button1' style='padding-top: 1rem'>"  +
            "<button type='button' class='mui-btn mui-btn-warning mui-btn-block' style='border-radius: 5px;margin-top: 2rem;background-color:#ffb242' onclick='confirm("+i+")'>确认修改</button>" +
            "</div>"
        $("#"+i).append(button)
        $("#input"+data1).removeAttr("readonly")
        $("#input"+data1).val($("#input"+data1).data("name"));
        flag = false;
    }
    else {
        $("#button1").remove();
        $("#input"+data1).attr("onclick","")
        $("#input" + data1).attr("readonly", "readonly")
        if ($("#input" + data1).data("name").length >= 9) {
            $("#input" + data1).val($("#input" + data1).data("name").substring(0, 6) + "...");
        }
        else {
            $("#input" + data1).val($("#input" + data1).data("name"));
        }
        flag = true;

    }
}

// 点击确认修改
function confirm(i){
    $("#button1").remove();
    $("#input"+i).attr("readonly","readonly")
    var localName = $("#input"+i).val();
    $("#input"+i).data("name",localName);
    console.log("name"+ localName)
    if($("#input"+i).val().length>=9){
        localName = localName.substring(0,6);
        localName = localName.concat("...")
        $("#input"+i).val(localName);
    }
    $("#input"+i).val(localName);
    flag = true;
}

//地址删除
function localdelete(){

    //var info = document.getElementById("info");
    var btnArray = ['是', '否'];
    mui.confirm('确认联系客服？', '联系客服', btnArray, function(e) {
        if (e.index == 0) {
            // 点击联系客服弹出框上的“是”按钮';

        } else {
            //点击联系客服弹出框上的“否”按钮'

        }
    });

}

//截取地址名
function localName(name){
    var that = this;
    name = that.name;
    if(name.length>6){
        name = name.substring(0,6);
    }
    $("#localName").prepend(name)
}