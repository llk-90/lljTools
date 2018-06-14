$(function () {
    $.fn.cropper.noConflict();
});
var $image = $('#image');
// Get the Cropper.js instance after initialized
var cropper = $image.data('cropper');
$image.cropper({
    aspectRatio: 16 / 9,
    crop: function(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
    }
});

mui('body').on('tap', '#pic1 img', function () {
    cutImg();
});

document.addEventListener("plusready", plusReady, false);
var conn = new DBConn();
//post内容
function postAvatar() {
    var uimage = $("#changeAvatar > img").attr("src"); //此时取到的图片已经是base64形式
    console.log(uimage);
    //你的处理代码，改post到服务器了，服务器接收同接收普通post参数一样，只是，存图片的字段改成ntext，这是sql的数据类型，
    //其他数据库同类型，jq的getJSON可能会不执行，因为getJSON是get模式，图片转成base64后，
    //很容易超出最大长度，其实，经过压缩后，一般不会超出的，具体压缩方法下文有
    console.log(Date.now()+"修改个人信息");
    $.ajax({
        type:"post",
        url:server+"?action=updtinfo",
        async:true,
        dataType:"json",
        data:{
            img:uimage,
            phone:$("#txtphone").val(),
            short:$("#txtshort").val(),
            code:$("#txtcode").val()
        },
        success:function(data,ts,xhr){
            //console.log(JSON.stringify(data));
            if(data.success){
                plus.storage.setItem("phone",$("#txtphone").val());
                plus.storage.setItem("phoneshort",$("#txtshort").val());
                plus.storage.setItem("userimg",data.imgurl);
                var person=plus.webview.getWebviewById("personal_child.html");
                mui.fire(person,'refresh',{});
                mui.toast("更新成功");
                mui.back();
            }
            else{
                mui.toast(data.msg);
            }
        },
        error:function(xhr,ts,et){
            console.log("ts:"+ts+"et:"+et);
        }
    });
}

//照片裁剪类
function cutImg() {
    $(".mui-content").hide();
    $("#showEdit").fadeIn();
    var $image = $('#picture > img');
    $image.cropper({
        checkImageOrigin: true,
        aspectRatio: 1 / 1,
        autoCropArea: 0.3,
        zoom: -0.2
    });
    //                  $image.cropper('zoom',-0.5);
}
//确认照片，展示效果
function confirmImg() {
    $("#showEdit").fadeOut();
    var $image = $('#report > img');
    var dataURL = $image.cropper("getCroppedCanvas");
    //              var imgurl = dataURL.toDataURL("image/png", 0.5);
    //换成下边的方法，转成jpeg，但是把质量降低，
    //经测试51k的png，转成0.3质量，大小为3k多，0.5质量大小为4k多，
    //这回应该不会出现卡的情况了，
    //既然差别1k多，还是用0.5的质量，还是要兼顾下显示效果的。
    var imgurl = dataURL.toDataURL("image/jpeg", 0.3);
    $("#pic1 > img").attr("src", imgurl);
    //              $("#divbtn").show();
    $("#mui-content").removeAttr ("display");
}
//旋转照片
function rotateimg() {
    $("#readyimg").cropper('rotate', 90);
}

function rotateimgleft() {
    $("#readyimg").cropper('rotate', -90);
}

function closepop() {
    $("#showEdit").fadeOut();
    var $image = $('#report > img');
    $image.cropper('destroy');
    $(".mui-content").show();
}



function plusReady() {
    //alert(plus.storage.getItem("realname"));
    switch (plus.os.name) {
        case "Android":
            $(".mui-content-logo").addClass("andro-margin-person-edit");
            break;
        case "iOS":
            $(".mui-content-logo").addClass("ios-margin-person-edit");
            break;
        default:
            break;
    }
    //去掉滚动条
    plus.webview.currentWebview().setStyle({
        scrollIndicator: 'none'
    });
    getPersonInfo();
//              plus.storage.removeItem("personalEditTipCount");
    setTimeout(function(){
        tip();
    },1000);
}
function tip(){
    var personalTipCount=plus.storage.getItem("personalEditTipCount");
    //alert(personalTipCount);
    if(personalTipCount!=null){
        var count=parseInt(personalTipCount);
        if(count>3){
            return;
        }
        else{
            plus.storage.setItem("personalEditTipCount",""+(count+1)+"");
        }
    }
    else{
        plus.storage.setItem("personalEditTipCount","1");
    }
    var width=plus.screen.resolutionWidth;
    var right=(width/2)-55;
    $("#topPopover").css({"right":right});
    mui('.mui-popover').popover('show');

    setTimeout(function(){
        mui('.mui-popover').popover('hide');
    },5000);
}
function getPersonInfo() {
    //console.log("ssdddddddddddd");
    $("#txtname").val(plus.storage.getItem("realname"));
    $("#txtcode").val(plus.storage.getItem("loginname"));
    $("#txtphone").val(plus.storage.getItem("phone"));
    $("#txtshort").val(plus.storage.getItem("phoneshort"));
    $("#txtbranch").val(plus.storage.getItem("branchname"));
    if (plus.storage.getItem("communityname").toString().length > 1) {
        $("#txtcomm").val(plus.storage.getItem("communityname"));
        $("#licommunity").show();
    }
    var userimg=plus.storage.getItem("userimg");
    //console.log(userimg);
    if(userimg.length>1){
        $(".touxiang img").attr("src",userimg);
    }
    //console.log("ssssssssss"+$("#changeAvatar > img").attr("src"));
}