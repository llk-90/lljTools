/**
 * Created by fengsn on 2018/3/6.
 */
var openid = GetQueryString('openid');
var stuid = GetQueryString('stuid');
var jia = document.getElementById("custodyImg2");
schmodel = new Object();
var time
jia.onclick = function(){
    mui('.mui-popover').popover('toggle');
}

var dateImg  = document.getElementById("dateImg");
var quanlast = dateImg.src.lastIndexOf('/');
//页面星期 图片 文字 改变
var date = new Date();  //当前星期数
//var dateImgstr1 = dateImg.src.substring(0,quanlast+1)+date.getDay()+'.png';


var dateSpan2 = document.getElementById('dateSpan2');
var week = document.getElementById("week");
console.log(123);
console.log(date.getDay());
if(date.getDay()==1){
    dateSpan2.innerText = '星期一';
    week.innerText = '星期一';
    d//ateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    //time = 1
}else if(date.getDay()==2){
    dateSpan2.innerText = '星期二';
    //dateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    week.innerText = '星期二';
    //time = 2
}else if(date.getDay()==3){
    dateSpan2.innerText = '星期三';
    //dateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    week.innerText = '星期三';
    //time = 3
}else if(date.getDay()==4){
    dateSpan2.innerText = '星期四';
    //dateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    week.innerText = '星期四';
    //time = 4
}else if(date.getDay()==5){
    dateSpan2.innerText = '星期五';
    //dateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    week.innerText = '星期五';
    //time = 5
}else if(date.getDay()==6){
    dateSpan2.innerText = '星期六';
    //dateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    week.innerText = '星期六';
    //time = 6
}else{
    dateSpan2.innerText = '星期日';
    //dateImg.src="../../img/zhangzongbao/"+date.getDay()+".png";
    week.innerText = '星期日';
    //time = 0
}
//开关按钮
mui(".mui-switch").switch();
//点击选择时间
var weekes = document.getElementById("weekes");
//seven.style.display='block';
function aaa() {
    if(weekes.style.display=="none"){
        weekes.style.display='block';
    }else{
        weekes.style.display='none';
    }
}
//日期点击事件
var list = document.getElementsByClassName('weekesDay');
//console.log(list);

for(var k=0;k<list.length;k++){
    list[k].onclick = function(){
        week.innerHTML =this.innerHTML;
        document.getElementById("dateSpan2").innerHTML=this.innerHTML;
        weekes.style.display='none';
    }
}
//上学放学时间段选择
var tage
var goTime = document.getElementsByClassName('goTime');
for(var k=0;k<goTime.length;k++){
    goTime[k].onclick = function(e){
        var dtpicker = new mui.DtPicker({
            "type": "time"
        })
        var tt=this;
        dtpicker.show(function(e) {
            tt.innerText = e.h.value+":"+e.i.value;
//                    mui('.mui-popover').popover('toggle',tt);
//                    var impot1 = document.getElementById('impot');
//                    impot1.style.top = '20%';
            set(1)
        })
    }
}
var backTime = document.getElementsByClassName('backTime');
for(var k=0;k<backTime.length;k++) {
    backTime[k].onclick = function () {
        //console.log(this);
        var dtpicker = new mui.DtPicker({
            "type": "time"
        })
        var tt = this;
        dtpicker.show(function (e) {
            tt.innerText = e.h.value + ":" + e.i.value;
//                    mui('.mui-popover').popover('toggle',tt);
//                    var impot2 = document.getElementById('impot');
//                    impot2.style.top = '20%';
            set(1)
        })
    }
    var aa
    //初始化函数
    function initSchool() {
        // initSchModel();
        var openid = GetQueryString('openid');
        //var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
        var stuid = GetQueryString('stuid');
        mui.ajax(baseURL+"/campusManageApp/campusManageInfo.webapp", {
            data: {
                openid: openid,
                stuId: stuid
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            async:false,
          /*  beforeSend:function(){
                if(xval) {
                    xval.settext("加载中，请稍后......");
                }
            },*/
            success: function (data) {
                //xval.remove();
                console.log(data);
                aa = data.schoolTimeRange;
                if (data.statCode == "200") {
                    configDate(data);
                }
                else {
                    mui.toast("获取信息失败")
                }
            },
            error: function (xhr, type, errorThrown) {
                mui.toast("获取信息失败")
            }

        });
    }
}

//初始化数据
function initSchModel() {
    schmodel.isVaild = "0";//是否有效

    schmodel.classSch = getArray(0);//一周课程
    schmodel.sendArray = getArray(1);//一周课程(发送用)
    schmodel.leaveTime = getArray(2);//重点监护时间段
    schmodel.leaveTimeSendAry = getArray(3);//重点监护时间段(发送用)

    schmodel.arrNocPeo1 = "0";//通知监护人一到校通知
    schmodel.arrNocPeo2 = "0";//通知监护人二到校通知
    schmodel.levNocPeo1 = "0";//通知监护人一离校通知
    schmodel.levNocPeo2 = "0";//通知监护人二离校通知

}

//初始化一个数组
function getArray(type) {

    if (type==0)
    {
        var arr = [];
        for (var a = 0;a<7;a++)
        {
            var arr1 = [];
            for (var b = 0;b<8;b++)
            {
                var dic = new Object();
                dic.startTime = "00:00";
                dic.endtime = "00:00";
                arr1[b] = dic;
            }
            arr[a] = arr1;

        }
        return arr;
    }
    else if (type==1)
    {
        var arr = [];
        for (var a = 0;a<56;a++)//56个课程
        {
            var time = "00:00-00:00"
            arr[a] = time;
        }

        return arr;
    }
    else if (type==2)
    {
        var arr = [];
        for (var a = 0;a<6;a++)
        {
            var dic = new Object();
            dic.startTime = "00:00";
            dic.endtime = "00:00";
            arr[a] = dic;
        }
        return arr;
    }
    else
    {

        var arr = [];
        for (var a = 0;a<6;a++)
        {
            var time = "00:00-00:00"
            arr[a] = time;
        }
        return arr;
    }
}


// -------------------------------------------------画面配置相关-----------------------------------------------------------
//配置数据
function configDate(temp) {
    initSchModel();
    schmodel.isVaild = temp.studyForbidden;//上课时间禁用
    schmodel.classSch = unAchieveAry(temp.schoolTimeRange,1);//一周课程
    schmodel.sendArray = temp.schoolTimeRange.split(",");//一周课程
    schmodel.leaveTime = unAchieveAry(temp.schoolHomeTimeRange,2);//重点监护时间段
    schmodel.leaveTimeSendAry = temp.schoolHomeTimeRange.split(",");
    schmodel.arrNocPeo1 = temp.arrNoticPoe1;//通知监护人一到校通知
    schmodel.arrNocPeo2 = temp.arrNoticPoe2;//通知监护人二到校通知
    schmodel.levNocPeo1 = temp.levNoticPoe1;//通知监护人一离校通知
    schmodel.levNocPeo2 = temp.levNoticPoe2;//通知监护人二离校通知
    // configPage();
    set(0);
}

//格式解析方法
function unAchieveAry(Ary,type) {
    if (type==1)//如果是解析星期
    {
        if(Ary=="")return schmodel.classSch;
        var strAry = Ary.split(",");
        strAry = strAry.map(function(e){
            if(e=="")return e + '00:00-00:00';
            return e;
        });

        var tempary = [];//每节课数组
        var index = 0;
        for (var a = 0;a<strAry.length;a++)
        {
            var temppAry = strAry[a].split("-");
            tempary[tempary.length] = temppAry;
        }

        for (var a = 0;a<7;a++)
        {
            for (var b = 0;b<8;b++)
            {
                schmodel.classSch[a][b].startTime = tempary[index][0];
                schmodel.classSch[a][b].endtime = tempary[index][1];
                index++;
            }
        }
        return schmodel.classSch;
    }
    else//如果是解析时间
    {
        if(Ary=="")return schmodel.leaveTime;
        var strAry = Ary.split(",");
        var tempary = [];//每节课数组
        var index = 0;
        for (var a = 0;a<strAry.length;a++)
        {
            var temppAry = strAry[a].split("-");
            tempary[tempary.length] = temppAry;
        }


        for (var a = 0;a<strAry.length;a++)
        {
            schmodel.leaveTime[a].startTime = tempary[index][0];
            schmodel.leaveTime[a].endtime = tempary[index][1];
            index++;
        }
        return schmodel.leaveTime;
    }
}
//课程设置页面
function dump(){
    if(dateSpan2.innerText == "星期一" ){
        time=1;
    }else if(dateSpan2.innerText == "星期二"){
        time=2;
    }else if(dateSpan2.innerText == "星期三"){
        time=3;
    }else if(dateSpan2.innerText == "星期四"){
        time=4;
    }else if(dateSpan2.innerText == "星期五"){
        time=5;
    }else if(dateSpan2.innerText == "星期六"){
        time=6;
    }else if(dateSpan2.innerText == "星期日"){
        time=7;
    }
    //console.log(schmodel.sendArray)
    window.location.href="PalmSchoolClass.html?openid="+openid+"&stuid="+stuid+"&k="+time+"&backurl="+aa;
}

//该页面时间设置
function set(type){
    //$("#time1").html(schmodel.leaveTime[0].startTime)
    //console.log(schmodel.leaveTime)
    //初始化数据赋值
    if(type==0) {
        //设置监护人电话
        document.getElementById("time1").innerHTML = schmodel.leaveTime[0].startTime
        document.getElementById("time2").innerHTML = schmodel.leaveTime[0].endtime
        document.getElementById("time3").innerHTML = schmodel.leaveTime[1].startTime
        document.getElementById("time4").innerHTML = schmodel.leaveTime[1].endtime
        //设置禁用开关
        if(schmodel.isVaild == 1){
            document.getElementById("sswith-0").classList.remove("mui-active");
        }
        else{
            document.getElementById("sswith-0").classList.add("mui-active");
        }
        //设置到校通知
        if(schmodel.arrNocPeo1=="1"){
            $("#arr1").attr("checked",true);
            $("#arr1").attr("name",'1');
        }
        else{
            $("#arr1").attr("checked",false);
            $("#arr1").attr("name",'0');
        }

        if(schmodel.arrNocPeo2=="1"){
            $("#arr2").attr("checked",true);
            $("#arr2").attr("name",'1');
        }
        else{
            $("#arr2").attr("checked",false);
            $("#arr2").attr("name",'0');
        }

        if(schmodel.levNocPeo1=="1"){
            $("#lev1").attr("checked",true);
            $("#lev1").attr("name",'1');
        }
        else{
            $("#lev1").attr("checked",false);
            $("#lev1").attr("name",'0');
        }

        if(schmodel.levNocPeo2=="1"){
            $("#lev2").attr("checked",true);
            $("#lev2").attr("name",'1');
        }
        else{
            $("#lev2").attr("checked",false);
            $("#lev2").attr("name",'0');
        }


    }
    //时间变更后更改发送请求数据
    else{
        schmodel.leaveTime[0].startTime = document.getElementById("time1").innerHTML
        schmodel.leaveTime[0].endtime =  document.getElementById("time2").innerHTML
        schmodel.leaveTime[1].startTime =  document.getElementById("time3").innerHTML
        schmodel.leaveTime[1].endtime = document.getElementById("time4").innerHTML
    }

}

function btnClick(type,value) {
    switch (type)
    {
        case 'vaild'://上课时间段禁用
        {
            if (schmodel.isVaild==0)
            {
                document.getElementById("sswith-0").classList.add("mui-active");
                schmodel.isVaild = "1";
            }
            else {
                document.getElementById("sswith-0").classList.remove("mui-active");
                schmodel.isVaild = "0";
            }
        }
            break;
        case 'arr1'://到校通知家长1
        {
            var isOn = $("#arr1").attr("name");
            if (isOn==0)
            {
                $("#arr1").attr("checked",true);
                $("#arr1").attr("name",'1');
                schmodel.arrNocPeo1 = "1";
            }
            else {
                $("#arr1").attr("checked",false);
                $("#arr1").attr("name",'0');
                schmodel.arrNocPeo1 = "0";
            }
        }
            break;
        case 'arr2'://到校通知家长2
        {
            var isOn = $("#arr2").attr("name");
            if (isOn==0)
            {
                $("#arr2").attr("checked",true);
                $("#arr2").attr("name",'1');
                schmodel.arrNocPeo2 = "1";
            }
            else {
                $("#arr2").attr("checked",false);
                $("#arr2").attr("name",'0');
                schmodel.arrNocPeo2 = "0";
            }
        }
            break;
        case 'lev1'://离校通知家长1
        {
            var isOn = $("#lev1").attr("name");
            if (isOn==0)
            {
                $("#lev1").attr("checked",true);
                $("#lev1").attr("name",'1');
                schmodel.levNocPeo1 = "1";
            }
            else {
                $("#lev1").attr("checked",false);
                $("#lev1").attr("name",'0');
                schmodel.levNocPeo1 = "0";
            }
        }
            break;
        case 'lev2'://离校通知家长2
        {
            var isOn = $("#lev2").attr("name");
            if (isOn==0)
            {
                $("#lev2").attr("checked",true);
                $("#lev2").attr("name",'1');
                schmodel.levNocPeo2 = "1";
            }
            else {
                $("#lev2").attr("checked",false);
                $("#lev2").attr("name",'0');
                schmodel.levNocPeo2 = "0";
            }
        }
            break;
    }
}


function Over() {
    mui.init();
    var openid = GetQueryString('openid');
    //var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'加载中', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#59bf6b', size:70, type:'o'});
    var stuid = GetQueryString('stuid');
    //var sendArrayStr = schmodel.sendArray.toString();
    //var leaveTimeSendAryStr = schmodel.leaveTimeSendAry.toString();
    var sendArrayStr
    var leaveTimeSendAryStr = auti();
    if(ReturnTndex != undefined){
        var sendArrayStr = ReturnTndex
    }
    else{
        sendArrayStr = schmodel.sendArray.toString();
    }
    console.log("sendArrayStr:"+sendArrayStr);
    mui.ajax(baseURL+"/campusManageApp/sendCampusManageInfo.webapp", {
        data:{
            openid: openid,
            stuId :stuid,
            studyForbidden:schmodel.isVaild,//上课时间禁用
            schoolTimeRange  :sendArrayStr,//一周课程
            schoolHomeTimeRange :leaveTimeSendAryStr, //重点监护时间段
            arrNocPeo1 : schmodel.arrNocPeo1, //通知监护人一到校通知
            arrNocPeo2 :schmodel.arrNocPeo2,//通知监护人二到校通知
            levNocPeo1 :schmodel.levNocPeo1,//通知监护人一离校通知
            levNocPeo2 : schmodel.levNocPeo2//通知监护人二离校通知
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        async:false,
     /*   beforeSend:function(){
            if(xval) {
                xval.settext("加载中，请稍后......");
            }
        },*/
        success: function(data) {
            console.log(data);
            //xval.remove();
            if(data.result == "200"){
                mui.toast("设置且同步成功")
            }
            else if(data.result == "999"){
                mui.toast("设置失败")
            } else {
                mui.toast("同步失败")
            }
        },
        error: function(xhr, type, errorThrown) {
            mui.toast("设置失败")
        }

    });
}
//时间反解析
var leaveTimeString=""
function auti(){
    for(var i=0;i<schmodel.leaveTime.length;i++){
        if(i!=5) {
            leaveTimeString = leaveTimeString.concat(schmodel.leaveTime[i].startTime + "-" + schmodel.leaveTime[i].endtime + ",")
        }
        else{
            leaveTimeString = leaveTimeString.concat(schmodel.leaveTime[i].startTime + "-" + schmodel.leaveTime[i].endtime)
        }
    }
    return leaveTimeString;
}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var ReturnTndex
$(function(){
    initSchool()
    ReturnTndex = GetRequest().index;
})

    //时间同步星期数展示
//    var pic = document.getElementById("pic");
//    for(var i=1;i<8;i++){
//        if(i==date.getDay()){
//            continue;
//        }
//        var li = document.createElement('li');
//        li.className='xqi';
//        li.innerHTML='<img class="weeks" src="../../img/zhangzongbao/'+i+'.png" alt="">';
//        pic.appendChild(li);
//    }
    //最后一个日子加style属性
//    var xqiList = document.getElementsByClassName('xqi');
//    xqiList[5].style.marginRight='0';

    //时间同步设置点击变绿设置
//    var weekList = document.getElementsByClassName('weeks');
//    for(var i=0;i<weekList.length;i++){
//        weekList[i].onclick = function(){
//            //console.log(this.src.indexOf('-'));
//            if(this.src.indexOf('-')==-1){
//                var last = this.src.lastIndexOf('/');
//                var str = this.src.substring(0,last+1);
//                var newstr = str + this.src.substring(last+1,last+2)+'-1.png';
//                this.src = newstr;
//            }else{
//                var last = this.src.lastIndexOf('/');
//                var str = this.src.substring(0,last+1);
//                var newstr = str + this.src.substring(last+1,last+2)+'.png';
//                this.src = newstr;
//            }
//        }
//        //var num = weekList[i].src.lastIndexOf('/');
//        //console.log(weekList[i].src);
//        //console.log(weekList[i].src.substring(num+1,num+2));
//    }

//    var classSZ = document.getElementById("inClass-sz");
//    var timeInstall = document.getElementById("timeInstall");
//    function  chuxian(){
//        classSZ.style.display = 'none';
//        timeInstall.style.display = 'block';
//    }
//
//    function queren(){
//        classSZ.style.display = 'block';
//        timeInstall.style.display = 'none';
//    }
