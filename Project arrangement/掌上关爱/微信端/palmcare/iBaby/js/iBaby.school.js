/**
 * Created by fcn1 on 2017/6/28.
 */
{
    var schmodel = new Object();
    var nowday;
    var nowclass;
    var isStart = true;
    var liscenTime =0;
    var isShow = false;
    var newDayCopy = [];
    
    function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
    
    //初始化函数
    function initSchool() {
        mui.init();
        initSchModel();
        var openid = GetQueryString('openid');
        var stuid = GetQueryString('stuid');
        mui.ajax("/campusManageApp/campusManageInfo.webapp", {
            data:{
                openid : openid,
                stuId :stuid
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
                if(data.statCode == "200"){
                	configDate(data);
                }
                else {
                	mui.toast("获取信息失败")
                }
            },
            error: function(xhr, type, errorThrown) {
                mui.toast("获取信息失败")
            }

        });
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
    
    //上传数据给服务器
    function updateToSever() {
        mui.init();
        var openid = GetQueryString('openid');
        var stuid = GetQueryString('stuid');
        
        var sendArrayStr = schmodel.sendArray.toString();
        var leaveTimeSendAryStr = schmodel.leaveTimeSendAry.toString();
        mui.ajax("/campusManageApp/sendCampusManageInfo.webapp", {
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
            success: function(data) {
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
             configPage();
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
         

         //配置页面
       function configPage() {
    	   
           //配置重点监护时间显示
           for (var a = 0;a<6;a++)
           {
               document.getElementById("levbac-"+a).innerText = schmodel.leaveTime[a].startTime+"-"+schmodel.leaveTime[a].endtime;
           }
           //配置联系人设置
           if (schmodel.arrNocPeo1=='1')
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

           if (schmodel.arrNocPeo2=='1')
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

           if (schmodel.levNocPeo1=='1')
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

           if (schmodel.levNocPeo2=="1")
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
           //配置是否有效
           if (schmodel.isVaild)
           {
               $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
               $("#swith-0").attr("name",'1');
               schmodel.isVaild = "1";
           }
           else {
               $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
               $("#swith-0").attr("name",'0');
               schmodel.isVaild = "0";
           }

       }
    // -------------------------------------------------点击事件相关-----------------------------------------------------------
    //按钮点击事件
    function btnClick(type,value) {
        switch (type)
        {
            case 'vaild'://上课时间段禁用
                {
                    var isOn = $("#swith-0").attr("name");
                    if (isOn==0)
                    {
                        $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-on.png");
                        $("#swith-0").attr("name",'1');
                        schmodel.isVaild = "1";
                    }
                    else {
                        $("#swith-0").attr("src","../iBaby/images/iBaby.common/Switch-off.png");
                        $("#swith-0").attr("name",'0');
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
    //弹出配置右侧弹框
    function showTimeConfig(type) {


        newDayCopy.splice(0,newDayCopy.length);//清空选择数组
        //如果是显示
        nowday = Number(type);
        isShow = true;
        $("#changepsw").show();
        $("#changepsw").animate({marginLeft:'0px'});
        for (var a = 0;a<8;a++)
        {
            $("#div-copy-"+a).css("borderColor","rgba(0,0,0,0)");
            $("#div-copy-"+a).css("borderWidth","0");
            document.getElementById("div-class-"+a).innerText = schmodel.classSch[nowday][a].startTime+"-"+schmodel.classSch[nowday][a].endtime;
        }


    }
    //复制数组 第一个参数为实际值 第二个参数为按钮id
    function copyDay(temp,idstr) {

        if (newDayCopy.length==0)
        {
            newDayCopy[0] = temp;
            $("#"+idstr).css("borderColor","#AF0A00");
            $("#"+idstr).css("borderWidth","2");


        }
        else
            {
                for (var a = 0;a<newDayCopy.length;a++)
                {
                    var value = newDayCopy[a];
                    if (value==temp)//如果原来有相等的  说明需要删除
                    {
                        newDayCopy.splice(a,1);
                        $("#"+idstr).css("borderColor","rgba(0,0,0,0)");
                        $("#"+idstr).css("borderWidth","0");
                        break;
                    }
                    else if (value!=temp&&a==newDayCopy.length-1)
                    {
                        //如果遍历到最后一个也没有发现,需要添加
                        newDayCopy[a+1] = temp;
                        $("#"+idstr).css("borderColor","#AF0A00");
                        $("#"+idstr).css("borderWidth","2");
                        break;
                    }
                    else
                        {
                            continue;
                        }
                }


            }



    }
    //右侧弹窗保存点击事件
    function classSave() {

        isShow = false;
        $("#changepsw").animate({marginLeft:'100%'});
        $("#changepsw").hide();

        for (var a = 0;a<newDayCopy.length;a++)
        {
            var day = newDayCopy[a];
            if (day==nowday) continue;
            schmodel.classSch[day].splice(0,8);
            for (var b=0;b<schmodel.classSch[nowday].length;b++)
            {
                schmodel.classSch[day][b] = schmodel.classSch[nowday][b];
            }
        }

    }
    //显示时间选择器通过Kind确定是第几个重点监护时间段
    function showTimePickWithKind(kind) {
        liscenTime = Number(kind);//给重点监听赋值;
        var dtpicker = new mui.DtPicker({
            type: "time"
        })
        showToast("请选择开始时间");
        dtpicker.show(function(e) {
            schmodel.leaveTime[liscenTime].startTime = e.text;
            var dtpicker1 = new mui.DtPicker({
                type: "time"
            })
            showToast("请选择结束时间");
            dtpicker1.show(function(f) {
                schmodel.leaveTime[liscenTime].endtime = f.text;
                //对发送数组赋值
                schmodel.leaveTimeSendAry[liscenTime] = schmodel.leaveTime[liscenTime].startTime+"-"+schmodel.leaveTime[liscenTime].endtime;
                document.getElementById("levbac-"+liscenTime).innerText = schmodel.leaveTime[liscenTime].startTime+"-"+schmodel.leaveTime[liscenTime].endtime;
            })
        })

    }
    //展示时间选择框
    function showTimeChoose(type,value) {

        if (type==0)
        {
            nowclass = Number(value);//给当前课程赋值
        }
        else
            {
                liscenTime = Number(value);//给重点监听赋值;
            }
        if (isShow)
        {
            document.getElementById("time-hour").innerText = schmodel.classSch[nowday][nowclass].startTime.split(":")[0];
            document.getElementById("time-min").innerText = schmodel.classSch[nowday][nowclass].startTime.split(":")[1];
        }
        else
            {
                document.getElementById("time-hour").innerText = schmodel.leaveTime[liscenTime].startTime.split(":")[0];
                document.getElementById("time-min").innerText = schmodel.leaveTime[liscenTime].startTime.split(":")[1];
            }
        hiddenTiemChoose();
        isStart = true;
        $("#div-btn-start").css("background-color","#11BBB9");
        $("#div-btn-start").css("color","white");
        $("#div-btn-end").css("background-color","inherit");
        $("#div-btn-end").css("color","black");
        $("#time-choose").animate({width:'95%', height:'70%'});
        $("#time-choose").show();
    }
    //隐藏时间选择框
    function hiddenTiemChoose() {

        $("#time-choose").animate({width:'0%', height:'0%'});
        $("#time-choose").hide();
    }
    //时间选择器js点击事件
    function timeChooseClick(temp) {
        var Show = isShow;
        if (!Show)//如果是选择重点监护路段
        {
            switch (temp)
            {
                case 'hourup'://小时增加
                {
                    var hourstr = document.getElementById("time-hour").innerText;
                    var hour = Number(hourstr);
                    if (hour==23)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-hour").innerText = "00";
                    }
                    else
                    {
                        if ((hour+1)<10)
                        {
                            document.getElementById("time-hour").innerText = "0"+ String(hour+1) ;
                        }
                        else
                        {
                            document.getElementById("time-hour").innerText =String(hour+1) ;
                        }

                    }
                }
                    break;
                case 'minup'://分钟增加
                {
                    var minstr = document.getElementById("time-min").innerText;
                    var min = Number(minstr);
                    if (min==59)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-min").innerText = "00";
                    }
                    else
                    {
                        if ((min+1)<10)
                        {
                            document.getElementById("time-min").innerText = "0"+ String(min+1) ;
                        }
                        else
                        {
                            document.getElementById("time-min").innerText =String(min+1) ;
                        }

                    }
                }
                    break;
                case 'hourdown'://小时减小
                {
                    var hourstr = document.getElementById("time-hour").innerText;
                    var hour = Number(hourstr);
                    if (hour==0)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-hour").innerText = "23";
                    }
                    else
                    {
                        if ((hour-1)<10)
                        {
                            document.getElementById("time-hour").innerText = "0"+ String(hour-1) ;
                        }
                        else
                        {
                            document.getElementById("time-hour").innerText =String(hour-1) ;
                        }

                    }
                }
                    break;
                case 'mindown'://分钟减小
                {
                    var minstr = document.getElementById("time-min").innerText;
                    var min = Number(minstr);
                    if (min==0)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-min").innerText = "59";
                    }
                    else
                    {
                        if ((min-1)<10)
                        {
                            document.getElementById("time-min").innerText = "0"+ String(min-1) ;
                        }
                        else
                        {
                            document.getElementById("time-min").innerText =String(min-1) ;
                        }

                    }
                }
                    break;
                case 'starttime':
                {
                    isStart = true;
                    $("#div-btn-start").css("background-color","#11BBB9");
                    $("#div-btn-start").css("color","white");
                    $("#div-btn-end").css("background-color","inherit");
                    $("#div-btn-end").css("color","black");
                    document.getElementById("time-hour").innerText = schmodel.leaveTime[liscenTime].startTime.split(":")[0];
                    document.getElementById("time-min").innerText = schmodel.leaveTime[liscenTime].startTime.split(":")[1];
                    return;
                }
                    break;
                case 'endtime':
                {
                    isStart = false;
                    $("#div-btn-end").css("background-color","#11BBB9");
                    $("#div-btn-end").css("color","white");
                    $("#div-btn-start").css("background-color","inherit");
                    $("#div-btn-start").css("color","black");
                    document.getElementById("time-hour").innerText = schmodel.leaveTime[liscenTime].endtime.split(":")[0];
                    document.getElementById("time-min").innerText = schmodel.leaveTime[liscenTime].endtime.split(":")[1];
                    return;
                }
                    break;
                case 'save':
                {
                     hiddenTiemChoose();
                }
                    break;
            }

            //进行模型赋值
            if (isStart==true)
            {
                schmodel.leaveTime[liscenTime].startTime = document.getElementById("time-hour").innerText +":"+ document.getElementById("time-min").innerText;
            }
            else
            {
                schmodel.leaveTime[liscenTime].endtime = document.getElementById("time-hour").innerText +":"+  document.getElementById("time-min").innerText;
            }
            //对发送数组赋值
            schmodel.leaveTimeSendAry[liscenTime] = schmodel.leaveTime[liscenTime].startTime+"-"+schmodel.leaveTime[liscenTime].endtime;
            document.getElementById("levbac-"+liscenTime).innerText = schmodel.leaveTime[liscenTime].startTime+"-"+schmodel.leaveTime[liscenTime].endtime;

        }
        else//如果是选择课程
        {
            switch (temp)
            {
                case 'hourup'://小时增加
                {
                    var hourstr = document.getElementById("time-hour").innerText;
                    var hour = Number(hourstr);
                    if (hour==23)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-hour").innerText = "00";
                    }
                    else
                    {
                        if ((hour+1)<10)
                        {
                            document.getElementById("time-hour").innerText = "0"+ String(hour+1) ;
                        }
                        else
                        {
                            document.getElementById("time-hour").innerText =String(hour+1) ;
                        }

                    }
                }
                    break;
                case 'minup'://分钟增加
                {
                    var minstr = document.getElementById("time-min").innerText;
                    var min = Number(minstr);
                    if (min==59)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-min").innerText = "00";
                    }
                    else
                    {
                        if ((min+1)<10)
                        {
                            document.getElementById("time-min").innerText = "0"+ String(min+1) ;
                        }
                        else
                        {
                            document.getElementById("time-min").innerText =String(min+1) ;
                        }

                    }
                }
                    break;
                case 'hourdown'://小时减小
                {
                    var hourstr = document.getElementById("time-hour").innerText;
                    var hour = Number(hourstr);
                    if (hour==0)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-hour").innerText = "23";
                    }
                    else
                    {
                        if ((hour-1)<10)
                        {
                            document.getElementById("time-hour").innerText = "0"+ String(hour-1) ;
                        }
                        else
                        {
                            document.getElementById("time-hour").innerText =String(hour-1) ;
                        }

                    }
                }
                    break;
                case 'mindown'://分钟减小
                {
                    var minstr = document.getElementById("time-min").innerText;
                    var min = Number(minstr);
                    if (min==0)//如果等于23点再次点击应该等于0点
                    {
                        document.getElementById("time-min").innerText = "59";
                    }
                    else
                    {
                        if ((min-1)<10)
                        {
                            document.getElementById("time-min").innerText = "0"+ String(min-1) ;
                        }
                        else
                        {
                            document.getElementById("time-min").innerText =String(min-1) ;
                        }

                    }
                }
                    break;
                case 'starttime':
                {
                    isStart = true;
                    $("#div-btn-start").css("background-color","#11BBB9");
                    $("#div-btn-start").css("color","white");
                    $("#div-btn-end").css("background-color","inherit");
                    $("#div-btn-end").css("color","black");
                    document.getElementById("time-hour").innerText = schmodel.classSch[nowday][nowclass].startTime.split(":")[0];
                    document.getElementById("time-min").innerText = schmodel.classSch[nowday][nowclass].startTime.split(":")[1];
                    return;
                }
                    break;
                case 'endtime':
                {
                    isStart = false;
                    $("#div-btn-end").css("background-color","#11BBB9");
                    $("#div-btn-end").css("color","white");
                    $("#div-btn-start").css("background-color","inherit");
                    $("#div-btn-start").css("color","black");
                    document.getElementById("time-hour").innerText = schmodel.classSch[nowday][nowclass].endtime.split(":")[0];
                    document.getElementById("time-min").innerText = schmodel.classSch[nowday][nowclass].endtime.split(":")[1];
                    return;
                }
                    break;
                case 'save':
                {
                    hiddenTiemChoose();
                }
                    break;
            }

            //进行模型赋值
            if (isStart==true)
            {
                schmodel.classSch[nowday][nowclass].startTime = document.getElementById("time-hour").innerText +":"+ document.getElementById("time-min").innerText;
                // alert("开始"+schmodel.classSch[nowday][nowclass].startTime);
            }
            else
            {
                schmodel.classSch[nowday][nowclass].endtime = document.getElementById("time-hour").innerText +":"+  document.getElementById("time-min").innerText;
                // alert("开始"+schmodel.classSch[nowday][nowclass].startTime);
            }
            //对发送数组赋值
            schmodel.sendArray[nowday*8+nowclass] = schmodel.classSch[nowday][nowclass].startTime+"-"+schmodel.classSch[nowday][nowclass].endtime;
            document.getElementById("div-class-"+nowclass).innerText = schmodel.classSch[nowday][nowclass].startTime+"-"+schmodel.classSch[nowday][nowclass].endtime;
        }
    }

}
