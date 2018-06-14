/**
 * 
 */

   function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2]);
        return null;
    }
$(document).ready(function(){ 
	 var UseNum = GetQueryString('UseNum');
	 window.useNum=UseNum;
	document.getElementById('UserName').innerHTML=UseNum;
}); 

function AddFridend(){
	$('#myModal').modal('show')
	
}

function addFri(){
	var fridendNum=document.getElementById("Fri-Num").value;
	 var htmlContent1 ="<p class='row'onclick='charWindow("+fridendNum+")'>" +
	 		"<img src='../InstantMessaging/img/humen.png' " +
	 		" style='width:32px;height:32px;margin:20px;'  >"+fridendNum+"</p>";
	 
     var table = document.body.querySelector('#fridendCont');
     var html = htmlContent1 ;
     //拼接代码
     var div = document.createElement('p');
     //创建 一个新的div
       div.innerHTML = html;
       table.appendChild(div);
}
function BackLogin(){
	window.location.href= "Login.html" ;
}
function charWindow(friendname){
	var name=window.useNum;
	window.location.href= "Char.html?"+ "UseNum=" + name + "&" +  "FriName="+ friendname;
 
}
 