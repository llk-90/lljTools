fa/**
 * Created by Administrator on 2017/5/7.
 */
$(function () {
    //鍔犺浇鍩庡競浜嬩欢
    $('.container').show();
//閫夋嫨鍩庡競 start
    $('body').on('click', '.city-list p', function () {
        alert($(this).data('id'))
    });
    //鐐瑰嚮绱㈠紩鏌ヨ鍩庡競
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        $(window).scrollTop($('#' + s + '1').offset().top);
        $("#showLetter span").html(s);
        $("#showLetter").show().delay(500).hide(0);
    });
     //涓棿鐨勬爣璁版樉绀�
     $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });

})