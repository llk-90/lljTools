fa/**
 * Created by roger on 2018/1/17.
 */
(function($, doc) {
    $.init();
    $.ready(function() {

        var _getParam = function(obj, param) {
            return obj[param] || '';
        };
        //普通示例
        var userPicker = new $.PopPicker();
        userPicker.setData([{
            value: 'm',
            text: '男'
        }, {
            value: 'f',
            text: '女'
        }]);
        var sexValueButton = doc.getElementById('sexValue');

        var sexValue = doc.getElementById('sexValue');

        sexValueButton.addEventListener('tap', function(event) {
            userPicker.show(function(items) {
                sexValue.innerText = JSON.stringify(items[0].text).charAt(1);
                //返回 false 可以阻止选择框的关闭
                //return false;
            });
        }, false);


    });
})(mui, document);
