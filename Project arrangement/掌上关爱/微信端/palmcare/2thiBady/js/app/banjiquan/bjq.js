// var classId=102176751;
// var key=""
var classId;
var key = "";
var uid;
var pageSize = 5;
var pageCount = 1;
var usertype;
var userInfo;
//get screen width
var width;
var openid;

/**
 * The Function which be enactive when this page load
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            callback: pulldownRefresh
        },
        up: {
            auto: true,
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    },
    gestureConfig: {
        tap: true,
        longtap: true
    }
});


$(function () {
    var height = $(window).height();
    width = $(window).width();
    $("#addMoment").css({"width": height / 15});

    mui('body').on('tap', '.makeAComment', function (thingsHappen) {
        showJudgeBtn(thingsHappen.srcElement);
    });
    mui('body').on('tap', '.thumbOfMoment', function (thingsHappen) {
        likeOrUnlikeComment(thingsHappen.srcElement);
    });
    mui('body').on('longtap', '.bjq-list', function (thingsHappen) {
        deleteAMoment(thingsHappen.srcElement);
    });
    mui('body').on('longtap', '.comment-list', function (thingsHappen) {
        deleteAComment(thingsHappen.srcElement);
    });
    mui('body').on('tap', '.comment-list', function (thingsHappen) {
        showReplyInput(thingsHappen.srcElement)
    });
    mui('body').on('tap', '#addMoment', function () {
        if (null != userInfo.ParUserName && '' != userInfo.ParUserName) {
            window.location.href = 'add.html?openid=' + openid + '&uid=' + uid + '&classId=' + classId + '&usertype=' + usertype;
        } else {
            mui.toast("该家长ID不存在！");
        }
    });
    mui('body').on('tap', 'a', function () {
        var pointedLocation='';
        if(this.href.animVal==undefined){
            pointedLocation=this.href;
        }else {
            pointedLocation=this.href.animVal;
        }
        window.location.href = pointedLocation + "?openid=" + openid;
    });

})


/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
    setTimeout(function () {
        key = "";
        pageCount = 1;
        location.reload();
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh();//refresh completed
    }, 1500);
}

var count = 0;

/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
    loadListData();
}


//获取url传递参数
function getBasicInfo() {
    var url = location.search; //获取url中含"?"符后的字串
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        $.each(strs, function (index, obj) {
            var key = obj.split("=")[0];
            var value = obj.split("=")[1];
            if (key == "openid") {
                openid = value;
            } else if (key == "uid") {
                uid = value;
            } else if (key == "classId") {
                classId = value;
            } else if (key == "usertype") {
                usertype = value;
            }
        })
    }
    getInfoByOpenId(openid);
}

function getInfoByOpenId(catchedOpenId) {
    $.ajax({
        type: "POST",
        url: '/classMoment/getInfoByOpenId.webapp',
        data: {
            openid: catchedOpenId,
        },
        dataType: 'json',
        cache: false,
        async: false,
        success: function (data) {
            if (data.errMsg == "OK") {
                uid = data.uid;
                classId = data.classId;
                usertype = 1;
                getUserInfo();
            }
        }
    });
}

function getUserInfo() {
    $.ajax({
        type: "POST",
        url: '/classMoment/getUserInfo.webapp',
        data: {
            uid: uid,
            usertype: usertype
        },
        dataType: 'json',
        cache: false,
        async: false,
        success: function (data) {
            if (data.errMsg == "OK") {
                userInfo = data.userInfo;
            }
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function getHtmlContent(data) {
    var allNews = "";
    $.each(data, function (index, obj) {
        key = obj.key;
        var objstr = JSON.stringify(obj)
        var head_photo = obj.HeadImage;
        if (head_photo == null || head_photo.trim() == "" || head_photo == undefined) {
            head_photo = "../../img/banjiquan/mylogo.jpg";
        }
        //var uid = obj.ParentId;
        var username = obj.ParUserName;
        var create_time = obj.create_time;
        // var user_type = obj.user_type;
        var content = obj.content;
//         		 var reg = new RegExp("\r\n","g");//g,表示全部替换。
//        		 content.replace(reg,"<br/>");
        var image = obj.picture;
        var upvote = obj.upvote_id;
        var commentsList = obj.commentList;
        var imageli = "";
        var sign = "";
        var upvotetext = "";
        var commentsText = "";
        // if(user_type==2){
        //     sign = '<div class="right_icon">老师</div>';
        // }
        if (image.length != 0) {
            $.each(image, function (index, ob) {
                var url = ob;
                imageli = imageli + '<img src="' + url + '">';
            })
        }
        if (upvote.length != 0) {
            $.each(upvote, function (indexa, obj1) {
                upvotetext = upvotetext + obj1.ParUserName + "、";
                if (indexa > 3) {
                    if (indexa == 4) {
                        upvotetext = upvotetext + obj1.ParUserName + "、";
                        return false;
                    }
                    upvotetext = upvotetext.slice(0, upvotetext.length - 1) + " ... " + "、";
                    return false;
                }
            })
        }
        if (commentsList.length != 0) {
            $.each(commentsList, function (indexa, objc) {
                //console.log(obj)
                if (objc.reply_id) {
                    commentsText = commentsText + '<label class="comment-list comment_' + obj.key + indexa + '" data-cid="' + obj.key + indexa + '">' +
                        '<span data-uid="' + objc.uid + '">' + objc.postUsername + '</span>回复<span>' + objc.replyUsername + '：</span>' + objc.content + '</label>';
                } else {
                    commentsText = commentsText + '<label class="comment-list comment_' + obj.key + indexa + '" data-cid="' + obj.key + indexa + '" data-pid="' + objc.uid + '">' +
                        '<span data-uid="' + objc.uid + '">' + objc.postUsername + '：</span>' + objc.content + '</label>';
                }
            })
        }
        commentsText = commentsText;//onblur="removeBtn(this)"
        allNews = allNews +
            '<div class="banjiquan delete_' + index + '" param="' + index + '"  data-key="' + obj.key + '" data-pid="' + obj.ParentId + '" dataid="' + obj.id + '">' +
            '<div style="display: none">' + objstr + '</div>' +
            '<div class="bjq-list">' +
            '<div class="bjq-list-header">' +
            '<span>' + create_time + '</span>' +
            '<i><img src="' + head_photo + '"></i>' +
            '<h1>' + username + '</h1>' +
            '</div>' +
            //style="text-indent: 2em;"
            '<div class="bjq-list-content classMomentContent" >' + content +
            '</div>' +
            '<div class="bjq-list-pic">' + imageli +
            '</div>' +
            '<div class="bjq-list-zan" style="width: 80%;display: flex">' +
            '<div style="height: 20px;width: 20%"><img style="width: 20px;height: 20px;" src="../../img/banjiquan/good-filling.png" class="thumbOfMoment" data-islike="' + obj.is_like + '" />' +
            '<div style="width: 20px;height: 20px;float: right">' + upvote.length + '</div></div>' +
            '<a class="bjq-list-content" style="float: right" >' + upvotetext.slice(0, upvotetext.length - 1) + '</a>' +
            '</div>' + sign +
            '<div style="width: 20px;height: 20px;float: right;margin-top:10px;border: 1px" >' +
            '<img class="makeAComment" style="z-index: 999; width: 20px;height: 20px;margin-left: 0 px;vertical-align: middle;" src="../../img/banjiquan/comment.png"  data-type="0">' +
            //  '<i class="mui-icon mui-icon-compose"></i>'+
            '</div>' +
            '</div>' +
            '<div class="bjq-huifu" data-replydia="0">' + commentsText +
            '</div>' +
            /*'<div style="display:none" class="replyInput">'+
                '<input type="text" class="mui-input-clear" style="width:80%" placeholder="Please enter a comment&hellip;"/>'+
                '<input type="hidden"/>'+
                '<button type="button" class="mui-btn mui-btn-success" style="float: right;" onclick="replyThisComment(this);">确认</button>'+
            '</div>'+*/
            '</div>'
    });
    return allNews;
}

function showJudgeBtn(e) {
    var temp = document.getElementById("replyAComment");
    if (temp != null) {
        temp.remove();
    }
    $(e).parent().parent().next().append("<label id='replyAComment'><input type=\"text\" style=\"margin:0 auto;width: 60%\" class=\"mui-input-clear\" placeholder=\"请输入评论......\">" +
        "<button type=\"button\" class=\"mui-btn mui-btn-warning\" style=\"width: 15%;margin-right: 2%;height: 40px;color: white;font-size: 1.1em;margin-left: 5%;\" onclick='commentThisMomet(this)'>评论</button>" +
        "<button type=\"button\" class=\"mui-btn mui-btn-warning\" style=\"width: 15%;height: 40px;color: white;font-size: 1.1em;\" onclick='cancelOperation(this)'>取消</button></label>");
}

function cancelOperation(e) {
    var that = $(e).parent().parent();
    $(e).parent().parent().prev().children().eq(3).children("img").attr("data-type", "0");
    $(e).parent().empty();
    if (that.children().length == 0) {
        that.css({"display": "none"});
    }
}

function getDetailMsg(e) {
    var jsonstr = $(e).parent().parent().children().eq(0).text();
    var moment = JSON.parse(jsonstr);
    addClassMomentCookie(moment.key, jsonstr);
    //var str = getClassMomentCookie(moment.key);
    // $.cookie(moment.key , jsonstr , { expires: 1 });
    // console.log($.cookie(moment.key));
    // var exdate = new Date();
    // exdate.setTime(exdate.getTime() + 10000);
    // document.cookie = moment.key+'='+jsonstr+exdate.toUTCString();
    document;
    // var msg = document.cookie;
    //console.log(str);
    window.location.href = 'detail.html?key=' + moment.key;
}

function likeOrUnlikeComment(qwe) {
    var jsonstr = $(qwe).parent().parent().parent().parent().children().eq(0).text();
    var cjson = JSON.parse(jsonstr);
    var upvoteIds = cjson.upvote_id;
    var is_like = $(qwe).attr("data-islike");
    var afternames = "";
    if (is_like == 1) {
        if (usertype) {
            //家长取消点赞
            for (var i = 0; i < upvoteIds.length; i++) {
                if (upvoteIds[i].ParentId == uid) {
                    upvoteIds.splice(i, 1);
                }
            }
            for (var i = 0; i < upvoteIds.length; i++) {
                afternames = afternames + upvoteIds[i].ParUserName + "、";
            }
            cjson["upvote_id"] = upvoteIds;
            jsonstr = JSON.stringify(cjson);
        }
    } else {
        if (usertype) {
            //家长点赞
            upvoteIds.push({"ParentId": uid});
            cjson["upvote_id"] = upvoteIds;
            jsonstr = JSON.stringify(cjson);
        }
    }
    $.ajax({
        type: "POST",
        url: '/classMoment/updateStatus.webapp',
        data: {"jsonstr": jsonstr},
        dataType: 'json',
        cache: false,
        async: false,
        success: function (data) {
            $(qwe).parent().parent().parent().parent().children().eq(0).text(jsonstr);
            //成功时is_like修改,点赞数量加/减1
            //拼接已修改人
            if (data.errMsg == "OK" && is_like == 0) {
                $(qwe).attr("data-islike", 1);
                $(qwe).next().text(parseInt($(qwe).next().text()) + 1);
                if (usertype == 1) {
                    var upvotetext = userInfo.ParUserName + "、" + $(qwe).parent().next().text();
                    $(qwe).parent().next().text(upvoteTextOverFlow(upvotetext));
                }
            } else if (data.errMsg == "OK" && is_like == 1) {
                $(qwe).attr("data-islike", 0);
                $(qwe).next().text(parseInt($(qwe).next().text()) - 1);
                afternames = afternames.substring(0, afternames.length - 1);
                $(qwe).parent().next().text(upvoteTextOverFlow(afternames));
            } else {
                mui.toast(data.errMsg);
            }
        }
    })
}

function upvoteTextOverFlow(str) {
    //限制长度
    if (str.length != 0) {
        if (str.indexOf("、") != -1) {
            var upvotearr = str.split('、');
            if (upvotearr.length > 3) {
                str = "";
                for (var i = 0; i < 3; i++) {
                    str = str + upvotearr[i] + "、";
                }
                str = str.substring(0, str.length - 1) + "...";
            }
        }
    }
    if (str.charAt(str.length - 1) == "、") {
        str = str.substring(0, str.length - 1)
    }
    return str;
}

function commentThisMomet(e) {
    //var that = $(e);
    var id = $(e).parent().parent().parent().attr("data-id");
    var cjson = getJson($(e).parent().parent().parent());
    var appendCommentBelowMoment = $(e).prev().val();
    var comment;
    if (id == 0 || id == null) {
        comment = {
            "id": "",
            "mid": "",
            "uid": uid,
            "reply_id": "",
            "content": $(e).prev().val(),
            "create_time": "",
            "is_delete": 0,
            "ClassId": classId,
            "usertype": usertype
        };
    } else {
        comment = {
            "id": "",
            "mid": id,
            "uid": uid,
            "reply_id": "",
            "content": $(e).prev().val(),
            "create_time": "",
            "is_delete": 0,
            "ClassId": classId,
            "usertype": usertype
        };
    }
    cjson.commentList.push(comment);
    cjson["commentList"] = cjson.commentList;
    jsonstr = JSON.stringify(cjson);
    if (!($(e).prev().val().trim())) {
        //if content is null , return
        mui.toast("评论不能为空");
        cancelOperation(e);
        return false;
    }
    $.ajax({
        type: "POST",
        url: '/classMoment/updateStatus.webapp',
        data: {"jsonstr": jsonstr},
        dataType: 'json',
        cache: false,
        async: false,
        success: function (data) {
            $(e).parent().parent().parent().children().eq(0).text(jsonstr);
            //成功时is_like修改,点赞数量加/减1
            //拼接已修改人
            if (data.errMsg == "OK") {
                $(e).parent().before('<label data-uid=' + uid + 'class="comment-list"><span>' + userInfo.ParUserName + '：</span>' + appendCommentBelowMoment + '</label>');
                cancelOperation(e);
            } else {
                mui.toast("请重新操作！");
            }
        }
    })
}


//删除一条班级圈
function deleteAMoment(pointedToTheMoment) {
    var delete_Moment = $(pointedToTheMoment).parent().parent();
    var param = $(delete_Moment).attr('param');
    var post_id = $(delete_Moment).attr("data-pid");
    var that = $(delete_Moment);
    if (uid == post_id) {
        var jsonstr = delete_Moment.children().eq(0).text();
        var cjson = JSON.parse(jsonstr);
        var flag = confirm("确认删除该动态 ?");
        if (flag == true) {
            cjson["is_delete"] = 1;
            jsonstr = JSON.stringify(cjson);
            $.ajax({
                type: "POST",
                url: '/classMoment/updateStatus.webapp',
                data: {"jsonstr": jsonstr},
                dataType: 'json',
                cache: false,
                async: true,
                success: function (data) {
                    if (data.errMsg == "OK") {
                        that.remove();
                        mui.toast("删除成功！");
                    } else {
                        mui.toast(data.errMsg);
                    }
                }
            })
        }
    }


    $('.bjq-huifu').each(function (index, e) {
        if ($(this).children().length == 0) {
            $(this).css({"display": "none"});
        }
    });
}

function getJson(e) {
    var str = $(e).children().eq(0).text();
    return JSON.parse(str);
}


function deleteAComment(pointedAtComment) {
    var post_id = $(pointedAtComment).attr("data-pid");
    var thisCommentIndex = $(pointedAtComment).index();
    if (userInfo.ParentId == post_id) {
        if (confirm("确认删除此评论 ?")) {
            var cjson = getJson($(pointedAtComment).parent().parent());
            var comment = cjson.commentList;
            for (var i = 0; i < comment.length; i++) {
                if (thisCommentIndex == i) {
                    comment[i]["is_delete"] = 1;
                }
            }
            var jsonstr = JSON.stringify(cjson);
            $.ajax({
                type: "POST",
                url: '/classMoment/updateStatus.webapp',
                data: {"jsonstr": jsonstr},
                dataType: 'json',
                cache: false,
                async: false,
                success: function (data) {
                    //成功时is_like修改,点赞数量加/减1
                    //拼接已修改人
                    if (data.errMsg == "OK") {
                        $(pointedAtComment).parent().parent().children().eq(0).text(jsonstr);
                        $(pointedAtComment).remove();
                    } else {
                        mui.toast("请重新操作！");
                    }
                }
            })
        }
    }
}

function showReplyInput(e) {
    var temp = document.getElementById("replyAComment");
    if (temp != null) {
        temp.remove();
    }

    var pid = $(e).children().eq(0).attr("data-uid");
    if (pid != uid) {
        var pusername = $(e).children().eq(0).text();
        if (pusername.indexOf("：") != -1) {
            pusername = pusername.substring(0, pusername.length - 1);
        }
        $(e).parent().append("<label id='replyAComment'><input type=\"text\" style=\"margin:0 auto;width: 60%\" class=\"mui-input-clear\" placeholder=\"回复@" + pusername + "\">" +
            "<button type=\"button\" class=\"mui-btn mui-btn-warning\" style=\"width: 15%;margin-right: 2%;height: 40px;color: white;font-size: 1.1em;margin-left: 5%;\" " +
            "onclick=replyThisComment(this," + pid + ",'" + pusername + "');>回复</button>" +
            "<button type=\"button\" class=\"mui-btn mui-btn-warning\" style=\"width: 15%;height: 40px;color: white;font-size: 1.1em;\" onclick='cancelOperation(this)'>取消</button>" +
            "</label>");
        $(e).parent().attr("data-replydia", 1);
    }

}

function replyThisComment(e, pid, username) {
    var id = $(e).parent().parent().parent().attr("data-id");
    var cjson = getJson($(e).parent().parent().parent());
    var index = $(e).parent().parent().children().length + 1;
    console.log("Before:");
    console.log(cjson);
    var comment;
    if (id == 0 || id == null) {
        comment = {
            "id": "",
            "mid": "",
            "uid": uid,
            "reply_id": pid,
            "content": $(e).prev().val(),
            "create_time": "",
            "is_delete": 0,
            "ClassId": classId,
            "usertype": usertype
        };
    } else {
        comment = {
            "id": "",
            "mid": id,
            "uid": uid,
            "reply_id": pid,
            "content": $(e).prev().val(),
            "create_time": "",
            "is_delete": 0,
            "ClassId": classId,
            "usertype": usertype
        };
    }
    cjson.commentList.push(comment);
    cjson["commentList"] = cjson.commentList;
    jsonstr = JSON.stringify(cjson);
    console.log("After:" + jsonstr);
    if (!($(e).prev().val().trim())) {
        //if content is null , return
        mui.toast("回复内容不能为空");
        return false;
    }
    $.ajax({
        type: "POST",
        url: '/classMoment/updateStatus.webapp',
        data: {"jsonstr": jsonstr},
        dataType: 'json',
        cache: false,
        async: false,
        success: function (data) {
            $(e).parent().parent().parent().children().eq(0).text(jsonstr);
            console.log(data);
            //成功时is_like修改,点赞数量加/减1
            //拼接已修改人
            if (data.errMsg == "OK") {
                $(e).parent().before('<label class="comment-list comment_' + cjson.key + index + '" data-cid="' + cjson.key + index + '">' +
                    '<span data-uid="' + userInfo.ParentId + '">' + userInfo.ParUserName + '</span>回复<span>' + username + '：</span>' + data.content + '</label>');
                $(e).parent().parent().attr("data-replydia", 0)
                $(e).parent().remove();
            } else {
                mui.toast("请重新操作！");
            }
        }
    })
}

function loadListData() {
    var getKeyFrom = document.getElementById("bjqcontent");
    if (getKeyFrom.lastElementChild != null) {
        key = getKeyFrom.lastElementChild.getAttribute("data-key");
    }
    mui.ajax("/classMoment/getMsg.webapp", {
        data: {
            classId: classId,
            key: key,
            pageSize: pageSize,
            pageCount: pageCount,
            usertype: usertype,
            uid: uid
        },
        //async: true,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 100000, //超时时间设置为10秒；
        crossDomain: true,
        success: function (data) {
            if (key != null || key.trim() != "") {
                pageCount++;
            }
            mui('#pullrefresh').pullRefresh().endPullupToRefresh();
            if (data.errMsg == "OK" || data.data.length < 5) {
                mui('#pullrefresh').pullRefresh().endPullupToRefresh(true);
            }
            $("#bjqcontent").append(getHtmlContent(data.data));

        },
        error: function (e,xhr) {
            console.log(xhr);
            console.log(e);
            mui.toast("暂无最新动态！");
        }

    });
}