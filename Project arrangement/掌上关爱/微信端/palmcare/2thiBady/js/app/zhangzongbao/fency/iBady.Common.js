/**
 * Created by fcn1 on 2017/6/26.
 */
{
    var isLoad;
    function showToast(text) {
        $("#tsk").css({"background-color":"rgba(0,0,0,0.3)","font-size":"1.0em","height":"43px","line-height": "43px"});
        $("#tsk").show();
        $("#tsk").text(text);

        setTimeout("hiddenToast()", 2000);
    }
    //隐藏Toast窗体
    function hiddenToast() {
        $("#tsk").hide();
    }
    //显示加载指示器
    function showLoadMask() {
        $("#tsk").show();
        $("#tsk").text("加载中……");
        isLoad = true;
    }
    //隐藏加载指示器
    function hiddenLoadMask() {
        $("#tsk").hide();
        isLoad = false;
    }
    //获取相应数值
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2]);
        return null;
    }
    //显示和隐藏修改用户密码
    function showorHiddenPassword(type) {
        //如果是显示
        if (type=='show')
        {
            $("#changepsw").show();
            $("#changepsw").animate({marginLeft:'0px'});

            // $("#changepsw").animated({marginLeft:'0px'});

        }
        else
            {

                $("#changepsw").animate({marginLeft:'100%'});
                $("#changepsw").show();
            }
    }
}