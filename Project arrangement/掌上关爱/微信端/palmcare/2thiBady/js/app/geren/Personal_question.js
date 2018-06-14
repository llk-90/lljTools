 $(function () {
    FrameBodyClick();
    $('.plus_icon').on('click', function () {
    	window.location.href  = "../../html/shouye/index.html?openid=" + userInfo.openid;
    });
});