/**
 * Created by fengsn on 2018/2/1.
 */
//点击事件相应
function romoteClick(type) {
    switch (type)
    {
        case 'xiumian':
        {
            toastmode("xiumian");
        }
            break;
        case 'jiantinga':
        {
            postNetworkRequest("2");
        }
            break;
        case 'jiantingb':
        {
            postNetworkRequest("3");
        }
            break;
        case 'close':
        {
            toastmode("close")
        }
            break;
        case 'recover':
        {
            toastmode("huifu")
        }
            break;
        case 'huanxin':
        {
            toastmode("huanxing");
        }
            break;
        case 'back':
        {
            history.back();
        }
            break;

    }
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
var r = window.location.search.substr(1).match(reg);
if(r != null) return unescape(r[2]);
return null;
}
//发起网络请求
function postNetworkRequest(temp) {
    //var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
    var openid = GetQueryString('openid');
    var stuid = GetQueryString('stuid');
    //console.log("openid:"+openid)
    mui.init();
    setTimeout(function() {
        mui.ajax(baseURL+"/remoteControlApp/RemoteControl.webapp", {
            data:{
                openid : openid,
                stuId :stuid,
                temp:temp
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'POST', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            async:false,
          /*  beforeSend:function(){
                if(xval) {
                    xval.settext("加载中，请稍后......");
                }
            },*/
            success: function(data) {
                console.log(data);
                //xval.remove();
                if(data.statCode==="200"){
                    mui.toast("请求发送成功");
                }
                else {
                    mui.toast("请求发送失败1");
                }
            },
            error: function(xhr, type, errorThrown) {
                mui.toast("请求发送失败2");
            }

        });
    }, 100);
}

function toastmode(type) {
    //var info = document.getElementById("info");
    switch (type)
    {
        case 'xiumian':
        {
            mui.confirm('远程休眠？',function(e) {
                if (e.index == 0) {
                    cancle();
                } else {
                    console.log("78789798")
                    //点击联系客服弹出框上的“否”按钮'
                    // 点击确认按钮;
                    postNetworkRequest("1");
                }
            });
        }
            break;
        case 'huanxing':
        {
            mui.confirm('远程唤醒？',function(e) {
                if (e.index == 0) {
                    //点击联系客服弹出框上的“否”按钮'
                    cancle();
                } else {
                    // 点击联系客服弹出框上的“是”按钮';
                    postNetworkRequest("6");
                }
            });
        }
            break;
        case 'huifu':
        {
            mui.confirm('恢复出厂设置？',function(e) {
                if (e.index == 0) {
                    //点击联系客服弹出框上的“否”按钮'
                    cancle();
                } else {
                    // 点击联系客服弹出框上的“是”按钮';
                    postNetworkRequest("5");
                }
            });
        }
            break;
        case 'close':
        {
            mui.confirm('远程关闭？',function(e) {
                if (e.index == 0) {
                    //点击联系客服弹出框上的“否”按钮'
                    cancle();
                } else {
                    // 点击联系客服弹出框上的“是”按钮';
                    postNetworkRequest("4");
                }
            });
        }
            break;

    }

};