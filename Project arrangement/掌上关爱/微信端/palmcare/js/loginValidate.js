mui.ready(function() {
    var bodyDisplay = $("body").css("display");
    mui.ajax("/loginValidate/isLogin.webapp", {
        data: {},
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        async:false,
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            if (data&&data.isLogin==false) {
            	window.location.assign(data.toURL);
            }else{
                $("body").css("display",bodyDisplay);
            }
        },
        error: function() {

        }
    });
});