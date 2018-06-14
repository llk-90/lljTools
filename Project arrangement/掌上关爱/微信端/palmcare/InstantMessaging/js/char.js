/**
 * 
 */

$(document).ready(function(){ 
	 var UseNum = GetQueryString('UseNum');
	 var FriName = GetQueryString('FriName');
	 window.useNum=UseNum;
	 window.FriName=FriName;
	 document.getElementById('friName').innerHTML=window.FriName;
}); 
var socket;
if (!window.WebSocket) {
	window.WebSocket = window.MozWebSocket;
}
if(window.WebSocket){
	socket=new WebSocket("ws://localhost:8888/ws");
	socket.onmessage=function(event){
		var message=event.data;
		 AcceptMeg(message);
	};
	socket.onopen=function(event){
		console.log("连接开启");
	};
	socket.onclose=function(event){
		console.log("连接被关闭");
	};
}else{
	console.log("你的浏览器不支持 WebSocket！");
}
 
function send(){
	if (!window.WebSocket) {
		return;
	}
	if (socket.readyState == WebSocket.OPEN) {
		var message=$("#Content").val();
		socket.send(message);
		SendMeg();
	} else {
		alert("连接没有开启.");
	}
}

 
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}
function AcceptMeg(msg){
	var friname= window.FriName;
	var div = document.createElement('div');
	   div.setAttribute("style", "font-size:25px;text-align:right;height:10%;text-align:left;");
	   div.setAttribute("class", "col-sm-12");
	   div.innerHTML= friname+":"+msg;
	   var table = document.body.querySelector('#CharShow');
	   table.appendChild(div);
}
function SendMeg(){
	var name=window.useNum;
	var Con=$("#Content").val();
	var div = document.createElement('div');
	   div.setAttribute("style", "font-size:25px;text-align:right;height:10%;");
	   div.setAttribute("class", "col-sm-12");
	   div.innerHTML=name+":"+Con;
	   var table = document.body.querySelector('#CharShow');
	   table.appendChild(div);
	   $('#Content').val('');
}
function backIndex(){
	window.location.href= "IMindex.html?"+ "UseNum="+ useNum ;
}