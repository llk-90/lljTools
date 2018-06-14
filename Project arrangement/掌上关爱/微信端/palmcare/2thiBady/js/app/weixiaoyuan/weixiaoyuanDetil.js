/**
 * Created by fengsn on 2018/3/15.
 */
var morebig = document.getElementById('morebig');
var obj = document.getElementById('article');
var bottem = document.getElementById('bottem');
var total_height =  obj.scrollHeight;//文章总高度
var show_height = obj.offsetHeight//定义原始显示高度

if(total_height>show_height){
    morebig.style.display = 'block';

}else{
    morebig.style.display = 'none';
}
function  aClick(){
    obj.style.height = total_height + 'px';
    morebig.style.display = 'none';
    bottem.style.display = 'block';
}
$(function (){
        mui("nav").on("tap","a",function(){
            window.top.location.href=this.href+"?openid="+openid;
        });
})