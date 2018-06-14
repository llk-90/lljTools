/*window.location.href="../iBaby/iBaby.fence_update.html?" +
""+"update=修改"+"&value="+value+"&fencingId="+fencingId+"&stuId="+studentId+"&lng="+lng+"&lat="+lat+"&radius="+radius;*/
var stuId;// 学生ID
var addOrUpdate;
var openid;
var lng="120.165";//纬度
var lat="30.277";//经度
var radius;
var fencingId;
var map;
var cirel;
var marker;
// 创建数据模型
var locModel = new Object();
// 初始化模型
function initModel() {
	locModel.name = "";
	locModel.radius = "";
	locModel.arr = false;
	locModel.lev = true;
	locModel.choose = 2;// 都不选为0 进入为1 离开为2 全选为3
	
	//创建高德地图
    map = new AMap.Map('allmap', {
        zoom: 17,
        resizeEnable: true
    });
}
function getUrlParame() {
// 获取url中的参数
	initModel();
	var url = location.search; // 获取url中"?"符后的字串
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs=str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			// 添加围栏信息所带的参数
			if(strs.length<=3){
			 var parame1=strs[0].split("=")[1];
			 var parame2=strs[1].split("=")[1];
			 var parame3=strs[2].split("=")[1];
			 addOrUpdate=decodeURI(parame1);
			 if("添加"==addOrUpdate){
				 stuId=decodeURI(parame2);
				 openid=parame3;
			 }
			}
			// 修改围栏信息所带的参数
			if(strs.length>3){
			 var parame0=strs[0].split("=")[1];
			 var parame1=strs[1].split("=")[1];
		     var parame2=strs[2].split("=")[1];
		     var parame3=strs[3].split("=")[1];
		     var parame4=strs[4].split("=")[1];
		     var parame5=strs[5].split("=")[1];
		     var parame6=strs[6].split("=")[1];
		     var parame8=strs[8].split("=")[1];
		     addOrUpdate=decodeURI(parame0);
		     if("修改"==addOrUpdate){
			 value=decodeURI(parame1); // 解码(中文)
			 fencingId=decodeURI(parame2);
			 stuId=decodeURI(parame3);
			 lat=decodeURI(parame4); 
			 lng=decodeURI(parame5);
			 radius=decodeURI(parame6);
			 openid=decodeURI(parame8);
			 $("#name").val(value);
			 $("#radius").val(radius);
		     }
		}
	  }
   }
	createMap();  
}
	
// 创建地图
function createMap(){

    //添加地图控件
    AMap.plugin(['AMap.ToolBar'],function(){
        map.addControl(new AMap.ToolBar(
        		{
        			position:'lt',
        		}));
    })
    //加载输入提示插件  
    map.plugin(["AMap.Autocomplete","AMap.PlaceSearch"], function() {  
    	var autoOptions = {
                input:"map-input"
            };
            var auto = new AMap.Autocomplete(autoOptions);
            var placeSearch = new AMap.PlaceSearch({
                map: map
            });  //构造地点查询类
            AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
            function select(e) {
                placeSearch.setCity(e.poi.adcode);
                placeSearch.search(e.poi.name);  //关键字查询查询
            }
    });
    

    // //添加围栏信息时的地图显示
    if("添加"==addOrUpdate){
        map.setCity("深圳");
        clickMap();
    }
    //修改围栏地图时的地图显示
    if("修改"==addOrUpdate){
    	clickMap();
        map.setZoomAndCenter(15, [lng, lat]);
        // 在新中心点添加 marker
        if (!cirel)
        {
            cirel = new AMap.Circle({
                center: new AMap.LngLat(lng, lat),// 圆心位置
                radius: radius, //半径
                strokeColor: "#F33", //线颜色
                strokeOpacity: 0, //线透明度
                strokeWeight: 0, //线粗细度
                fillColor: "#ee2200", //填充颜色
                fillOpacity: 0.35//填充透明度
            });
            cirel.setMap(map);
        }
        else
        {
            var  center = new AMap.LngLat(lng, lat);
            cirel.setCenter(center);
            cirel.setRadius(radius);
            cirel.setMap(map);
        }

        if (marker)
        {
            marker.setMap(null);
        }
        marker = new AMap.Marker({
            map: map,
            position: [lng, lat]
        });

    }
//    addSearchInput();
}

//点击事件地图
function clickMap(){

    map.on('click', function(e) {
        var radius = document.getElementById("radius").value.length==0?100:document.getElementById("radius").value;
        lng = e.lnglat.getLng();
        lat = e.lnglat.getLat();
        if (!cirel)
        {
            cirel = new AMap.Circle({
                center: new AMap.LngLat(lng, lat),// 圆心位置
                radius: radius, //半径
                strokeColor: "#F33", //线颜色
                strokeOpacity: 0, //线透明度
                strokeWeight: 0, //线粗细度
                fillColor: "#ee2200", //填充颜色
                fillOpacity: 0.35//填充透明度
            });
            cirel.setMap(map);
        }
        else
        {
            var  center = new AMap.LngLat(lng, lat);
            cirel.setCenter(center);
            cirel.setRadius(radius);
            cirel.setMap(map);
        }

        if (marker)
        {
            marker.setMap(null);
        }
        marker = new AMap.Marker({
            map: map,
            position: [lng, lat]
        });

    });
	
}
// // 定义一个控件类,即function
// function ZoomControl(){
//     // 默认停靠位置和偏移量
//     this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
//     this.defaultOffset = new BMap.Size(0, 0);
// }
//创建自定义控件
function addSearchInput() {
    var autoOptions = {
        input:"map-input"
    };
    var auto = new AMap.Autocomplete();
    var placeSearch = new AMap.PlaceSearch({
        map: map
    });  //构造地点查询类
    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
    function select(e) {
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name);  //关键字查询查询
    }
}

function searchClick() {
/*	loc = document.getElementById("map-input").value;
	var MSearch;  
	map.plugin(["AMap.PlaceSearch"], function() {          
        MSearch = new AMap.PlaceSearch({ //构造地点查询类  
            pageSize:10,  
            pageIndex:1,  
            city:"深圳" 
        });   
        //AMap.event.addListener(MSearch, "complete", keywordSearch_CallBack);//返回地点查询结果  
        MSearch.search(loc); //关键字查询  
    }); */
	loc = document.getElementById("map-input").value;
	AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: "深圳", //城市
            map: map//,
            //panel: "panel"
        });
        //关键字查询
        placeSearch.search(loc, function(status, result) {
        });
    });
}

// 围栏状态改变点击事件
function TargetClick(temp) {
	if(temp==0)
	{
		locModel.arr = !locModel.arr;
	}
	else
	{
        locModel.lev = !locModel.lev;
	}
}


// 修改或添加围栏信息
function saveOrUpdateWeilanInfo(){
	    if (checkUploadDate()==false) return;
		 mui.ajax("/weilan/addOrUpdateWeilanMsg.webapp", {
	   		data: {
                fencingId:fencingId,
	   		 stuId:stuId,
	   	     addOrUpdate:addOrUpdate,
	   	     weilanName:locModel.name,
	   		 weilanRadius:locModel.radius,
	   		 state:locModel.choose,
	   	     lng:lng,
	   		 lat:lat
	   		},
	   		dataType: 'json', // 服务器返回json格式数据
	   		type: 'post', // HTTP请求类型
	   		timeout: 10000, // 超时时间设置为10秒；
	   		success: function(data) {
	   			if(data.statCode =="200"&&"修改"==data.addOrUpdate){
	   				showToast("修改成功！！！");
	   				setTimeout(function(){
	   					window.location.href="../iBaby/iBaby.fence_index.html?openid="+openid+"&stuid="+stuId;
	   					},1000);
	   			  }
	   			if(data.statCode =="200"&&"添加"==data.addOrUpdate){
	   				showToast("添加成功！！！");
	   				setTimeout(function(){
	   					window.location.href="../iBaby/iBaby.fence_index.html?openid="+openid+"&stuid="+stuId;
	   					},1000);
	   			    }
	   		  },
	   			error: function(xhr, type, errorThrown) {
	   				showToast("服务器正在维护");
			  }
	   });
	        
}
// 上传检查参数
function checkUploadDate() {
	// 如果名称为空或者半径为空
	var name = document.getElementById("name").value;
    	
    var radius = document.getElementById("radius").value;
    if (name.length==0||name==null)
    {
    	showToast("请输入名称");
    	return false;
	}
    if(name.length>6){
    	showToast("请输入6个字符的名称");
    	return false;
    }
    if (radius.length==0||radius==null)
    {
        showToast("请输入半径");
        return false;
    }
    if (radius>9999)
    {
    	showToast("请输入4位数的半径");
    	return false;
    }
    if (locModel.lev==false&&locModel.arr==false)
    {
        showToast("请至少选择一种触发事件");
        return false;
	}
    locModel.name = name;
    locModel.radius = radius;
    var lev = locModel.lev?1:0;
    var arr = locModel.arr?1:0;
    locModel.choose = (lev<<1) | arr;
    return true;
}

// 返回事件
function back(){
	history.go(-1);
	//window.location.href="../iBaby/iBaby.fence_index.html?openid="+openid+"&stuid="+stuId;
}
