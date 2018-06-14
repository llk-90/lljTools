/**
 * Created by Administrator on 2018/1/11 0011.
 */
function init()
{
   var value = GetQueryString("type")
    var mainstr = GetQueryString("mainstr")
    var substr = GetQueryString("substr")
    if (value==0)
    {
        $("#markimg").attr('src',"../../img/common/success.png");
        document.getElementById("alert0").innerText = "成功"
        document.getElementById("alert1").innerText = "绑定成功"
    }
    else
    {
        $("#markimg").attr('src',"../../img/common/fail.png");
        document.getElementById("alert0").innerText = "失败"
        document.getElementById("alert1").innerText = "绑定失败"
    }


}