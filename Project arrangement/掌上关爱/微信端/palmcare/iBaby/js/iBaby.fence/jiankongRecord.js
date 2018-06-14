var lng;
var lat;
var stuId;
var strDate;
var area;
var backData;
function getRecordMsg(){
	var url = location.search; //获取url中"?"符后的字串 
	if (url.indexOf("?") != -1) { 
	var urlParame= url.substr(1);
	strs = urlParame.split("&");

	for(var i = 0; i < strs.length; i ++) {
		var parame1=strs[0].split("=")[1];
//		lng=strs[1].split("=")[1];
//		lat=strs[2].split("=")[1];
		stuId=strs[1].split("=")[1];
		strDate=strs[2].split("=")[1];
	}
	var yueAndDayAndweek=decodeURI(parame1); //解码(中文)

	var yueAndDay=yueAndDayAndweek.substring(0,6);


	var date=new Date;
	//获取当前是几几年
	var year=date.getFullYear()+"年"; 

	//获取如：2017-06-28
	var yearAndyueAndDay=year+yueAndDay;
	var year=yearAndyueAndDay.replace("年","-"); 
	var yue=year.replace("月","-"); 
	var date=yue.replace("日",""); 

	$("#date").prepend(yueAndDay);
	$("#span").prepend(date);
	}
	
	mui.ajax("/weilan/selectWeilanRecord.webapp", {
		data: {
			stuId:stuId,
			date:strDate
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			if(data.statCode ="200"){
				if(data.alarmInfoList.length==0){
					var str="无监护记录。";
					$("#span").append(str);	
				}else{
					var str="监护记录如下:";
					$("#span").append(str);	
					//监控记录详情
					var table=document.getElementById('table');
					var tr1=document.createElement("tr");  	
					tr1.setAttribute("style","text-align: center; border-bottom: 1px solid #E8E8E8; border-top: 1px solid #E8E8E8;");
					
					var th1=document.createElement("th");  	
					th1.setAttribute("style","width: 20%; font-size: auto;");
					th1.innerText="名称";
					
					var th2=document.createElement("th");  	
					th2.setAttribute("style","width: 30%; font-size: auto; font-weight: 10px;");
					th2.innerText="地址";
					
					var th3=document.createElement("th");  	
					th3.setAttribute("style","font-size: auto; width: 30%;");
					th3.innerText="触发时间";
					
					
					var th4=document.createElement("th");  	
					th4.setAttribute("style","width: 30%; font-size: auto;");
					th4.innerText="触发情况";
					
					tr1.appendChild(th1);
					tr1.appendChild(th2);
					tr1.appendChild(th3);
					tr1.appendChild(th4);
					table.appendChild(tr1);
					mui.each(data.alarmInfoList, function(i, listValues) {
						backData=data.alarmInfoList;
						var str=listValues.areaDesc;
						var stateNum=str.substring(0,1);
						if(stateNum=="1"){
							var strState="进入"
						}else if(stateNum=="2"){
							var strState="离开"
						}else{
							var strState="进入，离开"
						}
						var name=str.substring(48);
						area=str.substring(2,21);
						
						var tr2=document.createElement("tr");  	
						tr2.setAttribute("style","text-align: center; border-bottom: 1px solid #E8E8E8;");
						
						var td5=document.createElement("td");  	
						td5.innerText=name;
						
						
						var td6=document.createElement("td");
						maps(area,i);
						td6.setAttribute("id","td"+i);
						
						var td7=document.createElement("td");  	
						td7.innerText=listValues.alarmTime;
						
						var td8=document.createElement("td");  	
						td8.innerText=strState;
						
						tr2.appendChild(td5);
						tr2.appendChild(td6);
						tr2.appendChild(td7);
						tr2.appendChild(td8);
					    table.appendChild(tr2);
					});
				}
				
				$("#record_count").html(data.totalSize);
			}
			else
				{
                    mui.toast("获取信息失败");
				}
			
			
		},
		error: function(xhr, type, errorThrown) {
			mui.toast("系统正在维护,请稍后重试！！！");
		}
	});
	
}


////逆地理编码（根据坐标，查询具体地址）
function maps(area,num){
	//创建地图
	var map = new AMap.Map('container');

	AMap.plugin('AMap.Geocoder', function () {
	   var geocoder = new AMap.Geocoder({
	       radius: 1000,
	       extensions: "all"   
	   });
	   geocoder.getAddress(area, function (status, result) {
	   	geocoder_CallBack(result,num);
	   });
	});
}
function geocoder_CallBack(data,num) {
	
		document.getElementById("td"+num).innerHTML = data.regeocode.formattedAddress; //返回地址描述;
}


function back(){
	//window.location.href="../iBaby/iBaby.fence_index.html?openid="+""+"&stuid="+stuId;
	history.go(-1);
}
