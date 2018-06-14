/**
 * Created by fengsn on 2018/1/19.
 */
var object = [{statu:0},{statu:1},{statu:1}]

$(function () {
    console.log(11)
    console.log(object.length);

    //locad()

});

function locad(){
    var card0 = "<div class='card'>" +
        "<img src='../../img/buka/card0.png' style='width: 100%;margin-left:0rem;'>" +
        "</div>" ;
    var card1 = "<div class='card'>" +
        "<img src='../../img/buka/card1.png' style='width: 100%;margin-left:0rem;'>" +
        "</div>" ;

    var card2 = "<div class='card'>" +
        "<img src='../../img/buka/card2.png' style='width: 100%;margin-left:0rem;'>" +
        "</div>" ;
    for(var i=0;i<object.length;i++) {
        if(object[i].statu == 0) {
            $("#cardBox").append(card0);
        }
        else if(object[i].statu ==1){
            $("#cardBox").append(card1);
        }
        else{
            $("#cardBox").append(card2);
        }
    }
}

function replace(){
    $(location).attr('href','http://localhost:63342/GuanAIWorkspace/html/geren/personalInformation.html');
}
