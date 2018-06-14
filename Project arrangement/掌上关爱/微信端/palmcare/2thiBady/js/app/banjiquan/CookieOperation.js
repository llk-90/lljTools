function addClassMomentCookie(c_name,value,expirems)
{
    /*var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)*/
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expirems);
    document.cookie = c_name + "=" + value + ((expirems == null) ? "" : ";expires=" + exdate.toUTCString());
}
function getClassMomentCookie(name)
{
    var strCookie=document.cookie;
    var arrCookie=strCookie.split(";");
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]==name){
            return arr[1];
        }
    }
    return "";
}

function deleteClassMomentCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=v;expires=" + exp.toUTCString();
}