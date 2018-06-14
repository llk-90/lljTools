/* 
寮瑰嚭灞傜粍浠�
DEMO
 $('body').popup({
   title:'鎻愮ず',
   formId:'form1',
   id:'pop-1'
 });
 鎵嬪姩鍏抽棴
 $("#pop-1").trigger("close");
 */
(function ($) {
    //闃熷垪
    var queue = [];
    //榛樿鍊奸厤缃�
    var defaults = {
        id:'',
        formId:null,
        title:"鎻愮ず",
        message:"",
        cnacel:"鍙栨秷",
        onCancel: function(){},
        ok:"纭",
        onOk: function(){},
        cancelOnly:false,
        okClass:'button',
        cancelClass:'button',
        onShow:function(){},
        onHide:function(){},
        closeOnOk:true,
        hideTitle:false,
        //閲嶅啓鏍峰紡
        popClass:''
    };
    //寮瑰嚭灞傜被
    var Popup = (function () {
        var Popup = function (containerEl, opts) {
            this.container = containerEl;
            if (!this.container) {
                this.container = document.body;
            }
            try {
                if (typeof (opts) === "string" || typeof (opts) === "number"){
                    opts = {
                        message: opts,
                        cancelOnly: "true",
                        cnacel: "鍏抽棴",
                        hideTitle:true
                    };
                }
                var _this = this;
                var opts = $.extend({},defaults,opts);
                if(!opts.title){
                    opts.hideTitle = true;
                }
                if(!opts.id){
                    opts.id='popup-' + Math.floor(Math.random()*1000);
                }
                for(var k in opts){
                    _this[k] = opts[k];
                }
                queue.push(this);
                if (queue.length == 1){
                    this.show();
                }
            } catch (e) {
                console.log("閰嶇疆閿欒锛�" + e);
            }

        };

        Popup.prototype = {

            show: function () {
                var _this = this;
                var markup = '<div id="' + this.id + '" class="car-popup hidden '+ this.popClass + '">';
                if(!_this.hideTitle){
                    markup += '<header>' + this.title + '</header>';
                }
                markup +='<div class="content-body">' + this.message + '</div>'+
                         '<footer style="clear:both;">'+
                             '<a href="javascript:;" class="car-popup-cancel ' + this.cancelClass + '">' + this.cnacel + '</a>'+
                             '<a href="javascript:;" class="car-popup-ok ' + this.okClass + '"  >' + this.ok + '</a>'+
                        ' </footer>'+
                     '</div></div>';
                $(this.container).append($(markup));
                //娣诲姞澶栭儴琛ㄥ崟
                if(this.formId){
                    var $content =  $(this.container).find('.content-body');
                    var $form = $('#'+this.formId);
                    this.$formParent = $form.parent();
                    $form.show();
                    $form.appendTo($content);
                }

                var $wrap = $("#" + this.id);
                $wrap.bind("close", function () {
                    _this.hide();
                });

                if (this.cancelOnly) {
                    $wrap.find('.car-popup-cancel').hide();
                }
                $wrap.find('A').each(function () {
                    var button = $(this);
                    button.bind('click', function (e) {
                        if (button.hasClass('car-popup-cancel')) {
                            _this.onCancel.call(_this.onCancel, _this);
                            _this.hide();
                        } else if(button.hasClass('car-popup-ok')){
                            _this.onOk.call(_this.onOk, _this);
                            if (_this.closeOnOk)
                                _this.hide();
                        }
                        e.preventDefault();
                    });
                });
                _this.positionPopup();
                Mask.show(0.3);
                $wrap.bind("orientationchange", function () {
                    _this.positionPopup();
                });

                //force header/footer showing to fix CSS style bugs
                $wrap.find("header").show();
                $wrap.find("footer").show();
                setTimeout(function(){
                    $wrap.removeClass('hidden');
                    _this.onShow(_this);
                },50);
            },

            hide: function () {
                var _this = this;
                $('#' + _this.id).addClass('hidden');
                Mask.hide();
                if(!$.os.ie&&!$.os.android){
                    setTimeout(function () {
                        _this.remove();
                    }, 250);
                } else{
                    _this.remove();
                }
            },

            remove: function () {
                var _this = this;
                if(_this.onHide){
                    _this.onHide.call();
                }
                var $wrap = $("#" + _this.id);
                if(_this.formId){

                    var $form = $('#'+_this.formId);
                    $form.appendTo(_this.$formParent);
                }

                $wrap.unbind("close");
                $wrap.find('.car-popup-ok').unbind('click');
                $wrap.find('.car-popup-cancel').unbind('click');
                $wrap.unbind("orientationchange").remove();
                queue.splice(0, 1);
                if (queue.length > 0)
                    queue[0].show();
            },
            positionPopup: function () {
                var $wrap = $('#' + this.id);
                var w0 = $(window).width()||360
                    ,h0 = $(window).height()||500
                    ,w1 = $wrap[0].clientWidth||300
                    ,h1 = $wrap[0].clientHeight||100;

                $wrap.css("bottom", "0px")
                     .css("left", "0px");
            }
        };
        return Popup;
    })();
    //閬僵绫�-鍗曚緥
    var Mask = {
        isShow : false
        ,show:function(opacity){
            if (this.isShow){
                return;
            }
            $('#car-pop-mask').show().bind("touchstart", function (e) {
                e.preventDefault();
            }).bind("touchmove", function (e) {
                e.preventDefault();
            });
            this.isShow = true;
        }
        ,hide:function(){
            this.isShow = false;
            $('#car-pop-mask').unbind("touchstart")
                .unbind("touchmove")
                .remove();
        }
    };

    //娉ㄥ唽鍒板璞�
    $.fn.popup = function (opts) {
        return new Popup(this[0], opts);
    };
    
})(Zepto);