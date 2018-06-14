var openid;
var studentId;
var weilan_list = [];
var disabled;
var weilanName;
var desc;
function create() {
	 
	   var url = location.search; //获取url中"?"符后的字串
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	    	  openid=strs[0].split("=")[1];
	    	  studentId=strs[1].split("=")[1];
	      }
	   }
	 
	   mui.ajax("/weilan/getDate.webapp", {
				data: {},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					if(data.result ="succ"){
						//监控记录
						var div=document.getElementById('div_record');
						mui.each(data.recordDate, function(i, listValues) {
							//监控记录的值
							var a= document.createElement('a');
							a.setAttribute("class","pos-lay");
							a.setAttribute("id",listValues.substring(9));
							a.setAttribute("href","#");
							a.setAttribute("onclick","record(this)");
							a.setAttribute("style","font-size: 15px;");
						    
							var span=document.createElement("span");
							span.setAttribute("class","span1")
							//獲取日期
							span.innerText=listValues.substring(0,9);
							
							a.appendChild(span);
							div.appendChild(a);
						});
					}
					else
						{
                            mui.toast("获取信息失败");
						}
					
					
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("获取信息失败");
				}
			});
			
			//获取围栏名称
			mui.ajax("/weilan/selectWeilanName.webapp", {
				data: {
					studentId:studentId
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					if(data.result ="succ"){
						//监控区域
						var ui=document.getElementById('infoFen');
						mui.each(data.fencinglist, function(i, listValues) {
							//监控區域
							ui.setAttribute("class","box-ct");
							var li= document.createElement('li');
							
							var div=document.createElement("div");
							div.setAttribute("class","div_name");
							div.setAttribute("id",listValues.fencingId);
							div.innerText=decodeURI(listValues.fencingName);
							
							//隐藏输入框：存放desc(经纬度，半径)
							var input=document.createElement("input");
							input.setAttribute("type","hidden");
							input.setAttribute("id",listValues.desc);
							
							if(i<5){
								var span= document.createElement('a');
								span.setAttribute("onclick","updateWeilan(this)");
								span.setAttribute("class","update_add");
								span.setAttribute("style","display: block;margin-left: 53%;margin-right:10px;border:none;padding-left: -20px;padding-right: -20px;");
								span.innerText="修改";
								//去除点击事件
								//$("span").removeAttr("onclick");
								li.appendChild(div);
								div.appendChild(input);
								li.appendChild(span);
							}else{
								var a1= document.createElement('a');
								a1.setAttribute("onclick","delete_weilan(this)");
								a1.setAttribute("class","delete");
								a1.setAttribute("style","display: block;margin-left: 37%;border:none;padding-left: -20px;padding-right: -20px;");
								a1.innerHTML="删除"+"  ";
								var a2= document.createElement('a');
								a2.setAttribute("onclick","updateWeilan(this)");
								a2.setAttribute("class","update_add");
								a2.setAttribute("style","display: block;margin-left:6%;border:none;padding-left: -20px;padding-right: -20px;");
								a2.innerText="修改";
								li.appendChild(div);
								div.appendChild(input);
								li.appendChild(a1);
								li.appendChild(a2); 
							}
		

						
							ui.appendChild(li);
						});
					}
					else
						{
                            mui.toast("获取信息失败");
						}
					
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("获取信息失败");
				}
			});
	};

	
var fencingId;
//删除围栏信息
function delete_weilan(t){
	var name=$(t).prev().text();
    fencingId=$(t).prev().attr("id");
	//获取围栏名称
	mui.ajax("/weilan/deleteWeilanMsg.webapp", {
		data: {
			studentId:studentId,
			fencingId:fencingId
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			if(data.statCode =="200"){
				mui.toast("删除成功");
				window.location.reload();
			}
			else
				{
                    mui.toast("删除失败！！！");
				}
		},
		error: function(xhr, type, errorThrown) {
			mui.toast("服务器正在维护,请稍后重试！！！");
		}
	});
};

//监护记录详细
function record(t){
	var value=t.children[0].innerText;
	var strDate=$(t).attr("id");
//	var lng="106.555";
//	var lat="29.565";
	//window.location.href="../iBaby/jiankong_record.html?"+"value="+value+"&lng="+lng+"&lat="+lat+"&stuId="+studentId+"&strDate="+strDate;
	window.location.href="../iBaby/jiankong_record.html?"+"value="+value+"&stuId="+studentId+"&strDate="+strDate+"&openid="+openid;
}	
	
function updateWeilan(t){
	  var fencingId=$(t).parent("li").children("div").attr("id");
	  var value=$(t).parent("li").children("div").text();
	  //获取经纬度，半径
	  var strDesc=$(t).parent("li").children("div").children("input").attr("id");
	   strs = strDesc.split(","); 
	   for(var i = 0; i < strs.length; i++) {
			// 纠偏后的经纬度
	    	var lng=strs[3];
	    	var lat=strs[4];
	    	var radius=strs[2];
	      }
	   if("li"==$(t).parent("li").attr("class")){
		   window.location.href="../iBaby/iBaby.fence_update.html?"+"update=修改"+"&value="+value+"&fencingId="+fencingId+"&stuId="+studentId+"&lng="+lng+"&lat="+lat+"&radius="+radius+"&disabled=true"+"&openid="+openid;
	   }else{
		   window.location.href="../iBaby/iBaby.fence_update.html?"+"update=修改"+"&value="+value+"&fencingId="+fencingId+"&stuId="+studentId+"&lng="+lng+"&lat="+lat+"&radius="+radius+"&disabled=false"+"&openid="+openid;
	   }
	}

function addWeilan(){
		window.location.href="../iBaby/iBaby.fence_update.html?"+"update=添加"+"&stuId="+studentId+"&openid="+openid;
	}

//上传监护列表
function synMobile() {
    //查询条件待定
	if (isLoad) return;
	showLoadMask();
    mui.ajax("/weilan/syncAlarmArea.webapp", {
        data: {
        	studentId:studentId
        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
        	hiddenLoadMask();
        	window.location.reload();
            if("200"==data.statCode){
                mui.toast("上传成功");
            }
            else
            	{
                    mui.toast("上传失败");
				}
        },
        error: function(xhr, type, errorThrown) {
            mui.toast("上传失败");
        	window.location.reload();
            hiddenLoadMask();
        }
    });
}

function back(){
	window.location.href="../iBaby/iBaby.index.html?openid="+openid+"&stuId="+studentId;
}