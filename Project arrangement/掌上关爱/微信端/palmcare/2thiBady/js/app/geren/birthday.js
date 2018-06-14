/**
 * Created by roger on 2018/1/17.
 */
var timeButton = document.getElementById("timeButton");

function fun(){
    var myDate = new Date();
    var dtPicker = new mui.DtPicker({
        type: "date",//设置日历初始视图模式
        beginDate: new Date(1918, 04, 25),//设置开始日期
        endDate: new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()),//设置结束日期
        labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语
        customData: {
            h: [
                { value: 'AM', text: 'AM' },
                { value: 'PM', text: 'PM' }
            ]
        }//时间/日期别名
    });
    dtPicker.show(function (selectItems) {
        //console.log(selectItems.y);//{text: "2016",value: 2016}
        //console.log(selectItems.m);//{text: "05",value: "05"}
        timeButton.innerText = selectItems;
    })
}