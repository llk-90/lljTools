 $(function () {
	 $(".mui-icon i").parent().removeClass("mui-icon-jia");
	 $(".mui-icon i").css("font-size","1em");
	 $(".mui-icon i").css("margin-top","5px");
    $('.plus_icon').on('click', function () {
    	$(".mui-icon .mui-icon-jia").removeClass(".mui-icon-jia");
    	window.location.href  = "../../html/shouye/index.html?openid=" + GetQueryString('openid');
    });
});