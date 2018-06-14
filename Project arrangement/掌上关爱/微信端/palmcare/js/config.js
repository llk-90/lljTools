/**
 * 只能在微信打开
 */
var useragent = navigator.userAgent;
//alert(useragent);
/*if((!isMicroMessenger()) //不是微信浏览器
    ||
    ((!isIOS()) //不是iPhone
        &&
        (!isAndroid()) //不是android
    )
    ||isDevTools() //是开发工具
) {
    // 这里警告框会阻塞当前页面继续加载
    alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
    // 以下代码是用javascript强行关闭当前页面
    var opened = window.open('about:blank', '_self');
    opened.opener = null;
    opened.close();
}*/

function isMicroMessenger() {
    return useragent.indexOf('MicroMessenger') >= 0;
}

function isIOS() {
    return useragent.indexOf('iPhone') >= 0 || useragent.indexOf('iPad') >= 0;
}

function isAndroid() {
    return useragent.indexOf('Android') >= 0 || useragent.indexOf('android') >= 0;
}

function isDevTools() {
    return useragent.indexOf('wechatdevtools') > 0;
}

/**
 * 隐藏分享按钮
 */
function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
}

if(typeof WeixinJSBridge == "undefined") {
    if(document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if(document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}