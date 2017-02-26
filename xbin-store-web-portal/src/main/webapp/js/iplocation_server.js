/*##20130301##*/
pageConfig.product.urlskuid=pageConfig.product.skuid;
$("#product-intro .clearfix").attr("clstag","");
var locPageHost = pageConfig.FN_getDomain();
var iplocjsversion = "1.0";
/* 图片滚动 */
var scrollVisible_noitem = pageConfig.wideVersion&&pageConfig.compatible ? 5 : 4,
    scrollVisible_itemover = pageConfig.wideVersion&&pageConfig.compatible ? 6 : 4;
(function(a){a.fn.imgScroll=function(b){return this.each(function(){var e=a.extend({evtType:"click",visible:1,showControl:true,showNavItem:false,navItemEvtType:"click",navItemCurrent:"current",showStatus:false,direction:"x",next:".next",prev:".prev",disableClass:"disabled",speed:300,loop:false,step:1,ie6DisableClass:"disableIE6"},b);var l=a(this),q=l.find("ul"),p=q.find("li"),h=e.width||p.outerWidth(),d=e.height||p.outerHeight(),u=p.length,c=e.visible,j=e.step,i=parseInt((u-c)/j),v=0,m=l.css("position")=="absolute"?"absolute":"relative",x=p.css("float")!=="none",t=a('<div class="scroll-nav-wrap"></div>'),f=e.direction=="x"?"left":"top",k=e.direction=="x",r=typeof e.prev=="string"?a(e.prev):e.prev,s=typeof e.next=="string"?a(e.next):e.next,w=a.browser.isIE6?e.ie6DisableClass:"";e.loop=false;function o(){if(!x){p.css("float","left")}q.css({position:"absolute",left:0,top:0});l.css({position:m,width:e.direction=="x"?c*h:p.outerWidth(),height:e.direction=="x"?d:c*d,overflow:"hidden"});r.addClass(e.disableClass+w);if(e.loop){}else{if((u-c)%j!==0&&u>c){var A=j-(u-c)%j;q.append(p.slice(0,A).clone());u=q.find("li").length;i=parseInt((u-c)/j)}}if(k){q.css("width",u*h)}else{q.css("height",u*d)}if(!e.showControl&&u<=c){s.hide();r.hide()}else{s.show();r.show()}if(u<=c){s.addClass(e.disableClass);r.addClass(e.disableClass)}else{r.addClass(e.disableClass);s.removeClass(e.disableClass)}if(e.showNavItem){for(var y=0;y<=i;y++){var z=y==0?e.navItemCurrent:"";t.append('<em class="'+z+'">'+(y+1)+"</em>")}l.after(t);t.find("em").bind(e.navItemEvtType,function(){var B=parseInt(this.innerHTML);g((B-1)*j)})}if(e.showStatus){l.after('<span class="scroll-status">'+1+"/"+(i+1)+"</span>")}}function g(y){if(q.is(":animated")){return false}if(y<0){r.addClass(e.disableClass+w);return false}if(y+c>u){s.addClass(e.disableClass);return false}v=y;q.animate(e.direction=="x"?{left:-((y)*h)}:{top:-((v)*d)},e.speed,function(){if(y>0){r.removeClass(e.disableClass+w)}else{r.addClass(e.disableClass+w)}if(y+c<u){s.removeClass(e.disableClass)}else{s.addClass(e.disableClass)}n(y)})}function n(y){t.find("em").removeClass(e.navItemCurrent).eq(y/j).addClass(e.navItemCurrent);if(e.showStatus){a(".scroll-status").html(((y/j)+1)+"/"+(i+1))}}o();if(u>c){s.click(function(){g(v+j)});r.click(function(){g(v-j)})}})}}(jQuery));
// 获得数字价格
var getPriceNum = function(skus, $wrap, perfix, callback) {
    skus = typeof skus === 'string' ? [skus]: skus;
    $wrap = $wrap || $('body');
    perfix = perfix || 'J-p-';
    $.ajax({
        url: 'http://p.3.cn/prices/mgets?skuIds=J_' + skus.join(',J_') + '&type=1',
        dataType: 'jsonp',
        success: function (r) {
            if (!r && !r.length) {
                return false;
            }
            for (var i = 0; i < r.length; i++) {
                var sku = r[i].id.replace('J_', '');
                var price = parseFloat(r[i].p, 10);

                if (price > 0) {
                    $wrap.find('.'+ perfix + sku).html('￥' + r[i].p + '');
                } else {
                    $wrap.find('.'+ perfix + sku).html('暂无报价');
                }

                if ( typeof callback === 'function' ) {
                    callback(sku, price, r);
                }
            }
        }
    });
};
/* ---------- 埋点公用 ---------- */
function log (type1, type2, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
//    var data = '';
//    for (i = 2; i < arguments.length; i++) {
//        data = data + arguments[i] + '|||';
//    }
//    var pin = decodeURIComponent(escape(getCookie("pin")));
//    var loguri = "http://csc.jd.com/log.ashx?type1=$type1$&type2=$type2$&data=$data$&pin=$pin$&referrer=$referrer$&jinfo=$jinfo$&callback=?";
//    var url = loguri.replace(/\$type1\$/, escape(type1));
//    url = url.replace(/\$type2\$/, escape(type2));
//    url = url.replace(/\$data\$/, escape(data));
//    url = url.replace(/\$pin\$/, escape(pin));
//    url = url.replace(/\$referrer\$/, escape(document.referrer));
//    url = url.replace(/\$jinfo\$/, escape(''));
//    $.getJSON(url, function() {});
//    var traceurl = ("https:" == document.location.protocol ? "https://mercuryssl" : "http://mercury") + ".jd.com/log.gif"
//                    + "?t=other.000000"
//                    + "&m=UA-J2011-1"
//                    + "&v=" + encodeURIComponent('t1='+type1+'$t2='+type2+'$p0='+data)
//                    + "&ref=" + encodeURIComponent(document.referrer)
//                    + "&rm=" + (new Date).getTime();
//    var d = new Image(1, 1);
//    d.src = traceurl;       
}
/**
 * 新版-点击流统计-页面pv和显示次数
 * wpid 主商品三级分类，没有为空串''
 * psku 主商品sku，没有为空串''，根据它来判断此商品为pop还是非pop
 * markId 推荐位标记，找张斌要
 * op s:显示、p:pv
 */
function clsPVAndShowLog(wpid, psku, markId, op) {
    var key = wpid + "." + markId + "." + skutype(psku) + "." + op;
    log('d', 'o', key);
}
function clsClickLog(wpid, psku, rsku, markId, num, reCookieName) {
    var key = wpid + "." + markId + "." + skutype(psku);
    appendCookie(reCookieName, rsku, key);
    log('d', 'o', key + ".c");
}
function appendCookie(reCookieName, sku, key) {
    var reWidsCookies = eval('(' + getCookie(reCookieName) + ')');
    if (reWidsCookies == null || reWidsCookies == '') {
        reWidsCookies = new Object();
    }
    if (reWidsCookies[key] == null) {
        reWidsCookies[key] = '';
    }
    var pos = reWidsCookies[key].indexOf(sku);
    if (pos < 0) {
        reWidsCookies[key] = reWidsCookies[key] + "," + sku;
    }
    setCookie(reCookieName, $.toJSON(reWidsCookies), 15);
}
function skutype(sku) {
    if (sku) {
        var len = sku.toString().length;
        return len==10 ? 1 : 0;
    }
    return 0;
}
function setCookie(name, value, date) {
    var Days = date;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=."+locPageHost;
}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}
function reClick(type2, pwid, sku, num) {
    name = "reWids" + type2;
    reWids = getCookie(name);
    if (reWids != null) {
        reWids = reWids.toString();
        var pos = reWids.indexOf(sku);
        if (pos < 0) {
            reWids = reWids + "," + sku;
        }
    }
    else {
        reWids = sku;
    }
    setCookie(name, reWids, 15);

    sku = sku.split("#");
    log(3, type2, sku[0]);
    //log('RC', 'CK', type2, pwid, sku[0], num);
}

function readPinCookie(name) {
    //读取cookies函数
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return arr[2];
    return '';
}

/**
 * 点击流统计，调用例如：clsLog("3425&special","","174620#988",4,"reWidsBookSpecial")
 * @param type2 三级分类
 * @param pwid  当前商品wid，没有为空串''
 * @param sku   推荐商品wid
 * @param num   位置，从0开始
 * @param reCookieName   cookieName
 */
function clsLog(type2, pwid, sku, num, reCookieName) {
    var reWidsClubCookies = eval('(' + getCookie(reCookieName) + ')');
    if (reWidsClubCookies == null || reWidsClubCookies == '') {
        reWidsClubCookies = new Object();
    }
    if (reWidsClubCookies[type2] == null) {
        reWidsClubCookies[type2] = '';
    }
    var pos = reWidsClubCookies[type2].indexOf(sku);
    if (pos < 0) {
        reWidsClubCookies[type2] = reWidsClubCookies[type2] + "," + sku;
    }
    setCookie(reCookieName, $.toJSON(reWidsClubCookies), 15);
    sku = sku.split("#");
    log(3, type2, sku[0]);
    //log('RC', 'CK', type2, pwid, sku[0], num);
}
function mark(b,a){ log(1,a,b);}
/* ---------- 埋点公用 end ---------- */
var noItemOver = {
    // 无货、下柜页面推荐列表
    init: function( type ) {

        this.type = type || 1;  //3c为1、日百为2


        this.outOfStockTPL = ''
            +'<div class="w">'
            +'    <div id="out-of-stock" class="m m2 hide">'
            +'        <div class="mt">'
            +'            <h2>其它类似商品</h2>'
            +'        </div>'
            +'        <div class="mc">'
            +'            <div id="noitem-related-list">'
            +'                <div class="noitem-related-list">'
            +'                    <a href="javascript:;" class="spec-control disabled" id="noitem-forward"></a>'
            +'                    <a href="javascript:;" class="spec-control" id="noitem-backward"></a>'
            +'                    <div id="noitem-list">'
            +'                            <div class="iloading">正在加载中，请稍候...</div>'
            +'                    </div>'
            +'                </div>'
            +'            </div>'
            +'        </div>'
            +'    </div>'
            +'</div>';

        var isNoItem = $('#product-intro').hasClass('product-intro-noitem'),
            isOver = $('#product-intro').hasClass('product-intro-itemover');

        if ( !isNoItem && !isOver ) {

            $('#out-of-stock,#noitem-related-list,#itemover-related-list,#itemover1-related-list').remove();
            return false;
        }
        if ( isNoItem ) {
            this.noItem();
        }
        //if ( isOver ) {
            //this.itemOver();
        //}

    },
    noItem: function( isItemOver ) {
//        var imgStr = isItemOver ? '<img height="100" width="100" src="${pageConfig.FN_GetImageDomain(list.skuId)}n4/${list.imgUrl}">' : '<img height="130" width="130" src="${pageConfig.FN_GetImageDomain(list.skuId)}n3/${list.imgUrl}">';
//        // 无货推荐列表[老服务]
//        var noItem_TPL_OLD = '{for list in html}'
//            +'<li class="fore fore${list_index}" data-push="${}">'
//            +'  <div class="p-img">'
//            +'      <a target="_blank" href="${list.skuId}.html">'+imgStr+'</a>'
//            +'  </div>'
//            +'  <div class="p-name">'
//            +'      <a target="_blank" title="${list.name}" href="${list.skuId}.html">${list.Name}</a>'
//            +'  </div>'
//            +'  <div class="p-price">'
//            +'      <strong class="J-p-${list.skuId}"></strong>'
//            +'  </div>'
//            +'</li>'
//            +'{/for}';
//        var url = 'http://d.360buy.com/nostockrecomm/get?productId=' + pageConfig.product.skuid,
//            _this = this,
//            isItemOver = isItemOver || false;
//
//
//        log( pageConfig.product.cat[0] + "&SORecPage", 'Show');
//
//        $.ajax({
//            url: url,
//            dataType: 'jsonp',
//            data: {
//                productId: pageConfig.product.skuid
//            },
//            success: function( data ) {
//
//
//                if ( data && (typeof data.html !== 'undefined') && data.html !== null && data.html.length > 0 ) {
//
//                    if ( isItemOver ) {
//                        if ( $('#noitem-related-list').length < 1 ) {
//                            $('#choose').after('<div id="noitem-related-list"><p>其它类似商品</p><div class="noitem-related-list"><div class="iloading">正在加载中，请稍候...</div></div>');
//                        } else {
//                            $('#itemover-related-list').show();
//                        }
//                    } else {
//                        if ( $('#out-of-stock').length < 1 ) {
//                            $('#product-intro').parent().after(_this.outOfStockTPL);
//                        } else {
//                            $('#out-of-stock').show();
//                        }
//                    }
//
//
//                    $('#noitem-related-list .noitem-related-list').html( '<a href="javascript:;" class="spec-control disabled" id="noitem-forward"></a><a href="javascript:;" class="spec-control" id="noitem-backward"></a><div id="noitem-list"><ul>' + noItem_TPL_OLD.process( data ) + '</ul></div>' );
//                    $('#noitem-related-list').attr('loaded', 'true');
//
//
//                    //图片滚动【无货页面】
//                    $('#noitem-list').imgScroll({
//                        visible: scrollVisible_itemover,
//                        showControl: true,
//                        speed: 200,
//                        step: scrollVisible_itemover,
//                        loop: false,
//                        prev: '#noitem-forward',
//                        next: '#noitem-backward',
//                        disableClass: 'disabled'
//                    });
//
//                } else if ( !data || data.html == null || data.html.length < 1 ) {
//                    _this.noItemNoData(isItemOver);
//                }
//            }
//        });
    },
    itemOver: function() {
        // 浏览了 - 还浏览3c
        var listBrosweBroswe_TPL = '<li onclick="reClick(1, '+pageConfig.product.skuid+',\'${wid}#${wmeprice}\', [#]);">'
            +'  <div class="p-img">'
            +'      <a target="_blank" title="${name}" href="${wid}.html"><img height="100" width="100" alt="${name}" src="${pageConfig.FN_GetImageDomain(wid)}n4/${imgurl}"></a>'
            +'  </div>'
            +'  <div class="p-name">'
            +'      <a target="_blank" title="${name}" href="${wid}.html">${name}</a>'
            +'  </div>'
            +'  <div class="p-price">'
            +'      <strong class="J-p-${wid}"></strong>'
            +'  </div>'
            +'</li>';

        var urlRelated = 'http://simigoods.jd.com/SoldOutRecJsonData.aspx?ip='+ getCookie("ipLocation") +'&wids='+ pageConfig.product.skuid;
        var urlBroswerBuy = 'http://simigoods.jd.com/ThreeCCombineBuying/ThreeCBroswerBroswerJsonData.aspx?ip=' + getCookie('ipLocation') + '&wids=' + pageConfig.product.skuid;
        var _this = this;

        _this.noItem( true );

        //下柜页看了还买了
        $.ajax({
            url: urlBroswerBuy,
            dataType: 'jsonp',
            success: function(data) {
                var resHTML = [];
                pageConfig.product.listBrosweBroswe = [];

                //log('RemovedArk', 'Show');
                log('R1','Show');

                if ( data == null ) {
                    return false;
                }
                for ( var i = 0; i < data.length; i++ ) {
                    resHTML.push( listBrosweBroswe_TPL.process(data[i]).replace('[#]', i) );
                    pageConfig.product.listBrosweBroswe.push(data[i].wid);
                }
                $('#itemover1-related-list').show();
                $('#itemover1-related-list .itemover1-related-list').html( '<a href="javascript:;" class="spec-control disabled" id="itemover1-forward"></a><a href="javascript:;" class="spec-control disabled" id="itemover1-backward"></a><div id="itemover1-list"><ul>' + resHTML.join('') + '</ul></div>' );

                getPriceNum(pageConfig.product.listBrosweBroswe, $('#itemover1-related-list'));

                //图片滚动【下柜页面-看了还买了】
                $('#itemover1-list').imgScroll({
                    visible: scrollVisible_itemover,
                    showControl: false,
                    speed: 200,
                    step: scrollVisible_itemover,
                    loop: false,
                    prev: '#itemover1-forward',
                    next: '#itemover1-backward',
                    disableClass: 'disabled',
                    width: 130,
                    height:165
                });
            }
        });
    },
    noItemNoData: function( isItemOver ) {
        var _this = this;
        var outStock = $('#out-of-stock .mc');
        var rid = pageConfig.product.type == 1 ? 103000 : 102000;

        if(!outStock.length) {
            $('#product-intro').parent().after(_this.outOfStockTPL);
        }
        if (!isItemOver) {
            setTimeout(function() {

                if (typeof Grecommend === 'undefined') return;

				var rec_103000 = new Grecommend(G.sku, rid, readCookie('ipLoc-djd'), $('#out-of-stock #noitem-list'), 20);
				log(pageConfig.product.cat[0] + "&SORec", 'Show');
            }, 500);
        }
        
        return;

        var imgStr = isItemOver ? '<img height="100" width="100" src="${pageConfig.FN_GetImageDomain(list.wid)}n4/${list.imgurl}">' : '<img height="130" width="130" src="${pageConfig.FN_GetImageDomain(list.wid)}n3/${list.imgurl}">';
        // 无货推荐列表[新服务]
        var noItem_TPL = '{for list in MySoldOut}'
            +'<li data-push="${pageConfig.product.noItemData.push(list.wid)}" class="fore fore${list_index}" onclick="reClick2(\''+pageConfig.product.cat[0]+'&SORec\','+pageConfig.product.skuid+', \'${list.wid}#${list.wmeprice}\', ${list_index})">'
            +'  <div class="p-img">'
            +'      <a target="_blank" href="${list.wid}.html">'+imgStr+'</a>'
            +'  </div>'
            +'  <div class="p-name">'
            +'      <a target="_blank" title="${list.name}" href="${list.wid}.html">${list.name}</a>'
            +'  </div>'
            +'  <div class="p-price">'
            +'      <strong class="J-p-${list.wid}"></strong>'
            +'  </div>'
            +'</li>'
            +'{/for}';

        // 没有推荐数据时调用新数据接口
        var url = 'http://simigoods.jd.com/SoldOutRecJsonData.aspx?ip='+ getCookie("ipLocation") +'&wids='+ pageConfig.product.skuid,
            _this = this;

        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(data) {
                pageConfig.product.noItemData = [];

                if ( data.MySoldOut !== null && data !== null ) {

                    if ( isItemOver ) {
                        if ( $('#noitem-related-list').length < 1 ) {
                            $('#choose').after('<div id="noitem-related-list"><p>其它类似商品</p><div class="noitem-related-list"><div class="iloading">正在加载中，请稍候...</div></div>');
                        }
                    } else {
                        if ( $('#out-of-stock').length < 1 ) {
                            $('#product-intro').parent().after(_this.outOfStockTPL);
                        } else {
                            $('#out-of-stock').show();
                        }
                    }

                    log(pageConfig.product.cat[0] + "&SORec", 'Show');


                    $('#noitem-related-list').attr('iplocation', getCookie("ipLocation"));

                    if ( isItemOver ) {
                        $('#itemover-related-list').show().find('.itemover-related-list').html('<a href="javascript:;" class="spec-control disabled" id="itemover-forward"></a><a href="javascript:;" class="spec-control disabled" id="itemover-backward"></a><div id="itemover-list"><ul>' + noItem_TPL.process(data) + '</ul></div>');

                        getPriceNum(pageConfig.product.noItemData, $('#itemover-related-list'));

                        //图片滚动【下柜页面-其它类似商品】
                        $('#itemover-list').imgScroll({
                            visible: scrollVisible_itemover,
                            showControl: true,
                            speed: 200,
                            step: scrollVisible_itemover,
                            loop: false,
                            prev: '#itemover-forward',
                            next: '#itemover-backward',
                            disableClass: 'disabled',
                            width: 130,
                            height:165
                        });


                    } else {
                        $('#noitem-related-list .noitem-related-list').html( '<a href="javascript:;" class="spec-control disabled" id="noitem-forward"></a><a href="javascript:;" class="spec-control" id="noitem-backward"></a><div id="noitem-list"><ul>' + noItem_TPL.process(data) + '</ul></div>' );


                        getPriceNum(pageConfig.product.noItemData, $('#noitem-related-list .noitem-related-list'));

                        //图片滚动【无货页面】
                        $('#noitem-list').imgScroll({
                            visible: scrollVisible_noitem,
                            showControl: true,
                            speed: 200,
                            step: scrollVisible_noitem,
                            loop: false,
                            prev: '#noitem-forward',
                            next: '#noitem-backward',
                            disableClass: 'disabled'
                        });
                    }
                }

            }
        });
    }

};


var iplocation = {"北京": { id: "1", root: 0, djd: 1,c:72 },"上海": { id: "2", root: 1, djd: 1,c:78 },"天津": { id: "3", root: 0, djd: 1,c:51035 },"重庆": { id: "4", root: 3, djd: 1,c:113 },"河北": { id: "5", root: 0, djd: 1,c:142 },"山西": { id: "6", root: 0, djd: 1,c:303 },"河南": { id: "7", root: 0, djd: 1,c:412 },"辽宁": { id: "8", root: 0, djd: 1,c:560 },"吉林": { id: "9", root: 0, djd: 1,c:639 },"黑龙江": { id: "10", root: 0, djd: 1,c:698 },"内蒙古": { id: "11", root: 0, djd: 0,c:799 },"江苏": { id: "12", root: 1, djd: 1,c:904 },"山东": { id: "13", root: 0, djd: 1,c:1000 },"安徽": { id: "14", root: 1, djd: 1,c:1116 },"浙江": { id: "15", root: 1, djd: 1,c:1158 },"福建": { id: "16", root: 2, djd: 1,c:1303 },"湖北": { id: "17", root: 0, djd: 1,c:1381 },"湖南": { id: "18", root: 2, djd: 1,c:1482 },"广东": { id: "19", root: 2, djd: 1,c:1601 },"广西": { id: "20", root: 2, djd: 1,c:1715 },"江西": { id: "21", root: 2, djd: 1,c:1827 },"四川": { id: "22", root: 3, djd: 1,c:1930 },"海南": { id: "23", root: 2, djd: 1,c:2121 },"贵州": { id: "24", root: 3, djd: 1,c:2144 },"云南": { id: "25", root: 3, djd: 1,c:2235 },"西藏": { id: "26", root: 3, djd: 0,c:2951 },"陕西": { id: "27", root: 3, djd: 1,c:2376 },"甘肃": { id: "28", root: 3, djd: 1,c:2487 },"青海": { id: "29", root: 3, djd: 0,c:2580 },"宁夏": { id: "30", root: 3, djd: 1,c:2628 },"新疆": { id: "31", root: 3, djd: 0,c:2652 },"台湾": { id: "32", root: 2, djd: 0,c:2768 },"香港": { id: "42", root: 2, djd: 0,c:2754 },"澳门": { id: "43", root: 2, djd: 0,c:2770 },"钓鱼岛": { id: "84", root: 2, djd: 0,c:84 }};
var provinceCityJson = {"1":[{"id":72,"name":"朝阳区"},{"id":2800,"name":"海淀区"},{"id":2801,"name":"西城区"},{"id":2802,"name":"东城区"},{"id":2803,"name":"崇文区"},{"id":2804,"name":"宣武区"},{"id":2805,"name":"丰台区"},{"id":2806,"name":"石景山区"},{"id":2807,"name":"门头沟"},{"id":2808,"name":"房山区"},{"id":2809,"name":"通州区"},{"id":2810,"name":"大兴区"},{"id":2812,"name":"顺义区"},{"id":2814,"name":"怀柔区"},{"id":2816,"name":"密云区"},{"id":2901,"name":"昌平区"},{"id":2953,"name":"平谷区"},{"id":3065,"name":"延庆县"}],"2":[{"id":2813,"name":"徐汇区"},{"id":2815,"name":"长宁区"},{"id":2817,"name":"静安区"},{"id":2820,"name":"闸北区"},{"id":2822,"name":"虹口区"},{"id":2823,"name":"杨浦区"},{"id":2824,"name":"宝山区"},{"id":2825,"name":"闵行区"},{"id":2826,"name":"嘉定区"},{"id":2830,"name":"浦东新区"},{"id":2833,"name":"青浦区"},{"id":2834,"name":"松江区"},{"id":2835,"name":"金山区"},{"id":2837,"name":"奉贤区"},{"id":2841,"name":"普陀区"},{"id":2919,"name":"崇明县"},{"id":78,"name":"黄浦区"}],"3":[{"id":51035,"name":"东丽区"},{"id":51036,"name":"和平区"},{"id":51037,"name":"河北区"},{"id":51038,"name":"河东区"},{"id":51039,"name":"河西区"},{"id":51040,"name":"红桥区"},{"id":51041,"name":"蓟县"},{"id":51042,"name":"静海县"},{"id":51043,"name":"南开区"},{"id":51044,"name":"塘沽区"},{"id":51045,"name":"西青区"},{"id":51046,"name":"武清区"},{"id":51047,"name":"津南区"},{"id":51048,"name":"汉沽区"},{"id":51049,"name":"大港区"},{"id":51050,"name":"北辰区"},{"id":51051,"name":"宝坻区"},{"id":51052,"name":"宁河县"}],"4":[{"id":113,"name":"万州区"},{"id":114,"name":"涪陵区"},{"id":115,"name":"梁平县"},{"id":119,"name":"南川区"},{"id":123,"name":"潼南县"},{"id":126,"name":"大足区"},{"id":128,"name":"黔江区"},{"id":129,"name":"武隆县"},{"id":130,"name":"丰都县"},{"id":131,"name":"奉节县"},{"id":132,"name":"开县"},{"id":133,"name":"云阳县"},{"id":134,"name":"忠县"},{"id":135,"name":"巫溪县"},{"id":136,"name":"巫山县"},{"id":137,"name":"石柱县"},{"id":138,"name":"彭水县"},{"id":139,"name":"垫江县"},{"id":140,"name":"酉阳县"},{"id":141,"name":"秀山县"},{"id":48131,"name":"璧山县"},{"id":48132,"name":"荣昌县"},{"id":48133,"name":"铜梁县"},{"id":48201,"name":"合川区"},{"id":48202,"name":"巴南区"},{"id":48203,"name":"北碚区"},{"id":48204,"name":"江津区"},{"id":48205,"name":"渝北区"},{"id":48206,"name":"长寿区"},{"id":48207,"name":"永川区"},{"id":50950,"name":"江北区"},{"id":50951,"name":"南岸区"},{"id":50952,"name":"九龙坡区"},{"id":50953,"name":"沙坪坝区"},{"id":50954,"name":"大渡口区"},{"id":50995,"name":"綦江区"},{"id":51026,"name":"渝中区"},{"id":51027,"name":"高新区"},{"id":51028,"name":"北部新区"},{"id":4164,"name":"城口县"}],"5":[{"id":142,"name":"石家庄市"},{"id":148,"name":"邯郸市"},{"id":164,"name":"邢台市"},{"id":199,"name":"保定市"},{"id":224,"name":"张家口市"},{"id":239,"name":"承德市"},{"id":248,"name":"秦皇岛市"},{"id":258,"name":"唐山市"},{"id":264,"name":"沧州市"},{"id":274,"name":"廊坊市"},{"id":275,"name":"衡水市"}],"6":[{"id":303,"name":"太原市"},{"id":309,"name":"大同市"},{"id":318,"name":"阳泉市"},{"id":325,"name":"晋城市"},{"id":330,"name":"朔州市"},{"id":336,"name":"晋中市"},{"id":350,"name":"忻州市"},{"id":368,"name":"吕梁市"},{"id":379,"name":"临汾市"},{"id":398,"name":"运城市"},{"id":3074,"name":"长治市"}],"7":[{"id":412,"name":"郑州市"},{"id":420,"name":"开封市"},{"id":427,"name":"洛阳市"},{"id":438,"name":"平顶山市"},{"id":446,"name":"焦作市"},{"id":454,"name":"鹤壁市"},{"id":458,"name":"新乡市"},{"id":468,"name":"安阳市"},{"id":475,"name":"濮阳市"},{"id":482,"name":"许昌市"},{"id":489,"name":"漯河市"},{"id":495,"name":"三门峡市"},{"id":502,"name":"南阳市"},{"id":517,"name":"商丘市"},{"id":527,"name":"周口市"},{"id":538,"name":"驻马店市"},{"id":549,"name":"信阳市"},{"id":2780,"name":"济源市"}],"8":[{"id":560,"name":"沈阳市"},{"id":573,"name":"大连市"},{"id":579,"name":"鞍山市"},{"id":584,"name":"抚顺市"},{"id":589,"name":"本溪市"},{"id":593,"name":"丹东市"},{"id":598,"name":"锦州市"},{"id":604,"name":"葫芦岛市"},{"id":609,"name":"营口市"},{"id":613,"name":"盘锦市"},{"id":617,"name":"阜新市"},{"id":621,"name":"辽阳市"},{"id":632,"name":"朝阳市"},{"id":6858,"name":"铁岭市"}],"9":[{"id":639,"name":"长春市"},{"id":644,"name":"吉林市"},{"id":651,"name":"四平市"},{"id":2992,"name":"辽源市"},{"id":657,"name":"通化市"},{"id":664,"name":"白山市"},{"id":674,"name":"松原市"},{"id":681,"name":"白城市"},{"id":687,"name":"延边州"}],"10":[{"id":727,"name":"鹤岗市"},{"id":731,"name":"双鸭山市"},{"id":737,"name":"鸡西市"},{"id":742,"name":"大庆市"},{"id":753,"name":"伊春市"},{"id":757,"name":"牡丹江市"},{"id":765,"name":"佳木斯市"},{"id":773,"name":"七台河市"},{"id":776,"name":"黑河市"},{"id":782,"name":"绥化市"},{"id":793,"name":"大兴安岭地区"},{"id":698,"name":"哈尔滨市"},{"id":712,"name":"齐齐哈尔市"}],"11":[{"id":799,"name":"呼和浩特市"},{"id":805,"name":"包头市"},{"id":810,"name":"乌海市"},{"id":812,"name":"赤峰市"},{"id":823,"name":"乌兰察布市"},{"id":835,"name":"锡林郭勒盟"},{"id":848,"name":"呼伦贝尔市"},{"id":870,"name":"鄂尔多斯市"},{"id":880,"name":"巴彦淖尔市"},{"id":891,"name":"阿拉善盟"},{"id":895,"name":"兴安盟"},{"id":902,"name":"通辽市"}],"12":[{"id":904,"name":"南京市"},{"id":911,"name":"徐州市"},{"id":919,"name":"连云港市"},{"id":925,"name":"淮安市"},{"id":933,"name":"宿迁市"},{"id":939,"name":"盐城市"},{"id":951,"name":"扬州市"},{"id":959,"name":"泰州市"},{"id":965,"name":"南通市"},{"id":972,"name":"镇江市"},{"id":978,"name":"常州市"},{"id":984,"name":"无锡市"},{"id":988,"name":"苏州市"}],"13":[{"id":2900,"name":"济宁市"},{"id":1000,"name":"济南市"},{"id":1007,"name":"青岛市"},{"id":1016,"name":"淄博市"},{"id":1022,"name":"枣庄市"},{"id":1025,"name":"东营市"},{"id":1032,"name":"潍坊市"},{"id":1042,"name":"烟台市"},{"id":1053,"name":"威海市"},{"id":1058,"name":"莱芜市"},{"id":1060,"name":"德州市"},{"id":1072,"name":"临沂市"},{"id":1081,"name":"聊城市"},{"id":1090,"name":"滨州市"},{"id":1099,"name":"菏泽市"},{"id":1108,"name":"日照市"},{"id":1112,"name":"泰安市"}],"14":[{"id":1151,"name":"黄山市"},{"id":1159,"name":"滁州市"},{"id":1167,"name":"阜阳市"},{"id":1174,"name":"亳州市"},{"id":1180,"name":"宿州市"},{"id":1201,"name":"池州市"},{"id":1206,"name":"六安市"},{"id":2971,"name":"宣城市"},{"id":1114,"name":"铜陵市"},{"id":1116,"name":"合肥市"},{"id":1121,"name":"淮南市"},{"id":1124,"name":"淮北市"},{"id":1127,"name":"芜湖市"},{"id":1132,"name":"蚌埠市"},{"id":1137,"name":"马鞍山市"},{"id":1140,"name":"安庆市"}],"15":[{"id":1158,"name":"宁波市"},{"id":1273,"name":"衢州市"},{"id":1280,"name":"丽水市"},{"id":1290,"name":"台州市"},{"id":1298,"name":"舟山市"},{"id":1213,"name":"杭州市"},{"id":1233,"name":"温州市"},{"id":1243,"name":"嘉兴市"},{"id":1250,"name":"湖州市"},{"id":1255,"name":"绍兴市"},{"id":1262,"name":"金华市"}],"16":[{"id":1303,"name":"福州市"},{"id":1315,"name":"厦门市"},{"id":1317,"name":"三明市"},{"id":1329,"name":"莆田市"},{"id":1332,"name":"泉州市"},{"id":1341,"name":"漳州市"},{"id":1352,"name":"南平市"},{"id":1362,"name":"龙岩市"},{"id":1370,"name":"宁德市"}],"17":[{"id":1432,"name":"孝感市"},{"id":1441,"name":"黄冈市"},{"id":1458,"name":"咸宁市"},{"id":1466,"name":"恩施州"},{"id":1475,"name":"鄂州市"},{"id":1477,"name":"荆门市"},{"id":1479,"name":"随州市"},{"id":3154,"name":"神农架林区"},{"id":1381,"name":"武汉市"},{"id":1387,"name":"黄石市"},{"id":1396,"name":"襄阳市"},{"id":1405,"name":"十堰市"},{"id":1413,"name":"荆州市"},{"id":1421,"name":"宜昌市"},{"id":2922,"name":"潜江市"},{"id":2980,"name":"天门市"},{"id":2983,"name":"仙桃市"}],"18":[{"id":1482,"name":"长沙市"},{"id":1488,"name":"株洲市"},{"id":1495,"name":"湘潭市"},{"id":1499,"name":"韶山市"},{"id":1501,"name":"衡阳市"},{"id":1511,"name":"邵阳市"},{"id":1522,"name":"岳阳市"},{"id":1530,"name":"常德市"},{"id":1540,"name":"张家界市"},{"id":1544,"name":"郴州市"},{"id":1555,"name":"益阳市"},{"id":1560,"name":"永州市"},{"id":1574,"name":"怀化市"},{"id":1586,"name":"娄底市"},{"id":1592,"name":"湘西州"}],"19":[{"id":1601,"name":"广州市"},{"id":1607,"name":"深圳市"},{"id":1609,"name":"珠海市"},{"id":1611,"name":"汕头市"},{"id":1617,"name":"韶关市"},{"id":1627,"name":"河源市"},{"id":1634,"name":"梅州市"},{"id":1709,"name":"揭阳市"},{"id":1643,"name":"惠州市"},{"id":1650,"name":"汕尾市"},{"id":1655,"name":"东莞市"},{"id":1657,"name":"中山市"},{"id":1659,"name":"江门市"},{"id":1666,"name":"佛山市"},{"id":1672,"name":"阳江市"},{"id":1677,"name":"湛江市"},{"id":1684,"name":"茂名市"},{"id":1690,"name":"肇庆市"},{"id":1698,"name":"云浮市"},{"id":1704,"name":"清远市"},{"id":1705,"name":"潮州市"}],"20":[{"id":3168,"name":"崇左市"},{"id":1715,"name":"南宁市"},{"id":1720,"name":"柳州市"},{"id":1726,"name":"桂林市"},{"id":1740,"name":"梧州市"},{"id":1746,"name":"北海市"},{"id":1749,"name":"防城港市"},{"id":1753,"name":"钦州市"},{"id":1757,"name":"贵港市"},{"id":1761,"name":"玉林市"},{"id":1792,"name":"贺州市"},{"id":1806,"name":"百色市"},{"id":1818,"name":"河池市"},{"id":3044,"name":"来宾市"}],"21":[{"id":1827,"name":"南昌市"},{"id":1832,"name":"景德镇市"},{"id":1836,"name":"萍乡市"},{"id":1842,"name":"新余市"},{"id":1845,"name":"九江市"},{"id":1857,"name":"鹰潭市"},{"id":1861,"name":"上饶市"},{"id":1874,"name":"宜春市"},{"id":1885,"name":"抚州市"},{"id":1898,"name":"吉安市"},{"id":1911,"name":"赣州市"}],"22":[{"id":2103,"name":"凉山州"},{"id":1930,"name":"成都市"},{"id":1946,"name":"自贡市"},{"id":1950,"name":"攀枝花市"},{"id":1954,"name":"泸州市"},{"id":1960,"name":"绵阳市"},{"id":1962,"name":"德阳市"},{"id":1977,"name":"广元市"},{"id":1983,"name":"遂宁市"},{"id":1988,"name":"内江市"},{"id":1993,"name":"乐山市"},{"id":2005,"name":"宜宾市"},{"id":2016,"name":"广安市"},{"id":2022,"name":"南充市"},{"id":2033,"name":"达州市"},{"id":2042,"name":"巴中市"},{"id":2047,"name":"雅安市"},{"id":2058,"name":"眉山市"},{"id":2065,"name":"资阳市"},{"id":2070,"name":"阿坝州"},{"id":2084,"name":"甘孜州"}],"23":[{"id":3690,"name":"三亚市"},{"id":3698,"name":"文昌市"},{"id":3699,"name":"五指山市"},{"id":3701,"name":"临高县"},{"id":3702,"name":"澄迈县"},{"id":3703,"name":"定安县"},{"id":3704,"name":"屯昌县"},{"id":3705,"name":"昌江县"},{"id":3706,"name":"白沙县"},{"id":3707,"name":"琼中县"},{"id":3708,"name":"陵水县"},{"id":3709,"name":"保亭县"},{"id":3710,"name":"乐东县"},{"id":3711,"name":"三沙市"},{"id":2121,"name":"海口市"},{"id":3115,"name":"琼海市"},{"id":3137,"name":"万宁市"},{"id":3173,"name":"东方市"},{"id":3034,"name":"儋州市"}],"24":[{"id":2144,"name":"贵阳市"},{"id":2150,"name":"六盘水市"},{"id":2155,"name":"遵义市"},{"id":2169,"name":"铜仁市"},{"id":2180,"name":"毕节市"},{"id":2189,"name":"安顺市"},{"id":2196,"name":"黔西南州"},{"id":2205,"name":"黔东南州"},{"id":2222,"name":"黔南州"}],"25":[{"id":4108,"name":"迪庆州"},{"id":2235,"name":"昆明市"},{"id":2247,"name":"曲靖市"},{"id":2258,"name":"玉溪市"},{"id":2270,"name":"昭通市"},{"id":2281,"name":"普洱市"},{"id":2291,"name":"临沧市"},{"id":2298,"name":"保山市"},{"id":2304,"name":"丽江市"},{"id":2309,"name":"文山州"},{"id":2318,"name":"红河州"},{"id":2332,"name":"西双版纳州"},{"id":2336,"name":"楚雄州"},{"id":2347,"name":"大理州"},{"id":2360,"name":"德宏州"},{"id":2366,"name":"怒江州"}],"26":[{"id":3970,"name":"阿里地区"},{"id":3971,"name":"林芝地区"},{"id":2951,"name":"拉萨市"},{"id":3107,"name":"那曲地区"},{"id":3129,"name":"山南地区"},{"id":3138,"name":"昌都地区"},{"id":3144,"name":"日喀则地区"}],"27":[{"id":2428,"name":"延安市"},{"id":2442,"name":"汉中市"},{"id":2454,"name":"榆林市"},{"id":2468,"name":"商洛市"},{"id":2476,"name":"安康市"},{"id":2376,"name":"西安市"},{"id":2386,"name":"铜川市"},{"id":2390,"name":"宝鸡市"},{"id":2402,"name":"咸阳市"},{"id":2416,"name":"渭南市"}],"28":[{"id":2525,"name":"庆阳市"},{"id":2534,"name":"陇南市"},{"id":2544,"name":"武威市"},{"id":2549,"name":"张掖市"},{"id":2556,"name":"酒泉市"},{"id":2564,"name":"甘南州"},{"id":2573,"name":"临夏州"},{"id":3080,"name":"定西市"},{"id":2487,"name":"兰州市"},{"id":2492,"name":"金昌市"},{"id":2495,"name":"白银市"},{"id":2501,"name":"天水市"},{"id":2509,"name":"嘉峪关市"},{"id":2518,"name":"平凉市"}],"29":[{"id":2580,"name":"西宁市"},{"id":2585,"name":"海东地区"},{"id":2592,"name":"海北州"},{"id":2597,"name":"黄南州"},{"id":2603,"name":"海南州"},{"id":2605,"name":"果洛州"},{"id":2612,"name":"玉树州"},{"id":2620,"name":"海西州"}],"30":[{"id":2628,"name":"银川市"},{"id":2632,"name":"石嘴山市"},{"id":2637,"name":"吴忠市"},{"id":2644,"name":"固原市"},{"id":3071,"name":"中卫市"}],"31":[{"id":4110,"name":"五家渠市"},{"id":4163,"name":"博尔塔拉蒙古自治州阿拉山口口岸"},{"id":15945,"name":"阿拉尔市"},{"id":15946,"name":"图木舒克市"},{"id":2652,"name":"乌鲁木齐市"},{"id":2654,"name":"克拉玛依市"},{"id":2656,"name":"石河子市"},{"id":2658,"name":"吐鲁番地区"},{"id":2662,"name":"哈密地区"},{"id":2666,"name":"和田地区"},{"id":2675,"name":"阿克苏地区"},{"id":2686,"name":"喀什地区"},{"id":2699,"name":"克孜勒苏州"},{"id":2704,"name":"巴音郭楞州"},{"id":2714,"name":"昌吉州"},{"id":2723,"name":"博尔塔拉州"},{"id":2727,"name":"伊犁州"},{"id":2736,"name":"塔城地区"},{"id":2744,"name":"阿勒泰地区"}],"32":[{"id":2768,"name":"台湾市"}],"42":[{"id":2754,"name":"香港特别行政区"}],"43":[{"id":2770,"name":"澳门市"}],"84":[{"id":1310,"name":"钓鱼岛"}]};
var cName = "ipLocation";
var currentLocation = "北京";
var stockServiceDomain = "http://st.3.cn",rmsurl="http://rms.shop.jd.com",dcashurl="http://yfei.shop.jd.com/json/pop/fare.action";
//try{if(location.href.indexOf("localtest=true")>0){stockServiceDomain = "http://webstock.jd.com";rmsurl="http://rms.shop.360buy.net";dcashurl="http://yfei.shop.jd.net/json/pop/fare.action";}}catch(e){}
//cookie operate
function getCookie(name) {var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));if (arr != null) return unescape(arr[2]);return null;}
function setNewCookie(name,value,expires,path,domain,secure){if(!path){path="/"}if(!domain){domain="jd.com"}if(!secure){secure=false}var today=new Date();today.setTime(today.getTime());if(expires){expires=expires*1000*60*60*24}var expires_date=new Date(today.getTime()+(expires));document.cookie=name+'='+escape(value)+((expires)?';expires='+expires_date.toGMTString():'')+((path)?';path='+path:'')+((domain)?';domain='+domain:'')+((secure)?';secure':'')};function deleteCookie(name,path,domain){if(getCookie(name))document.cookie=name+'='+((path)?';path='+path:'')+((domain)?';domain='+domain:'')+';expires=Thu, 01-Jan-1970 00:00:01 GMT'};
if(warestatus!=1&&warestatus!=2){
    $("#product-intro").attr("class","product-intro-itemover");
    $('#out-of-stock,#noitem-related-list').remove();
}
$.pbuyurl="";
$.haveShow=0;$._ptload=false;$._ptloadcon="";$.easybuy_button=$("#choose-btn-easybuy");$.divide_button=$("#choose-btn-divide");$.notice_button=$("#choose-btn-notice");$.append_button=$("#choose-btn-append .btn-append");
$.getShopUrl=function(r){if(pageConfig.product.isFlashPurchase)return "#none";if(r.url)return r.url;return "http://mall.jd.com/index-"+r.id+".html";};
var openCheck = pageConfig.product.cat[2]==798||pageConfig.product.cat[2]==878||pageConfig.product.cat[2]==880;
var iconDesc = null;
var useNewEasybuy = true,useEasyBuy=pageConfig.product.skuid<1950000000&&pageConfig.product.skuid>2000000000;
function checkApecialAttr(attr){
	if(pageConfig.product.specialAttrs&&pageConfig.product.specialAttrs.length>0){
		for(var i=0,j=pageConfig.product.specialAttrs.length;i<j;i++){
			if(attr==pageConfig.product.specialAttrs[i]){
				return true;
			}
		}
	}
	return false;
}
function changeTenToTwo(Num){
	var flag=true;
	var result = "";
	while(flag){
		result = Num%2+result;
		Num = parseInt(Num/2);
		if (Num == 0){
			flag = false;
		}
	}
	return result;
}
function checkIsWeChatStock(){
	if(pageConfig.product.specialAttrs&&pageConfig.product.specialAttrs.length>0){
		var array,tmp;
		for(var i=0,j=pageConfig.product.specialAttrs.length;i<j;i++){
			if(pageConfig.product.specialAttrs[i]=="isWeChatStock-0"||pageConfig.product.specialAttrs[i]=="isWeChatStock-n"){
				return false;
			}
			if(pageConfig.product.specialAttrs[i].indexOf("isWeChatStock")>-1){
				array = pageConfig.product.specialAttrs[i].split("-");
				if(array.length == 2 && new Number(array[1])>0){
					tmp = changeTenToTwo(parseInt(array[1]))+"";
					if (tmp.length<4){
						return true;
					}
					tmp = tmp.substr(tmp.length-4,1);
					if (tmp == "0"){
						return true;
					}
					else{
						return false;
					}
				}
			}
		}
	}
	return false;
}
var zkHtml = null;pageConfig.product.isFlashPurchase=checkApecialAttr("isFlashPurchase");pageConfig.product.isPOPFlashPurchase=pageConfig.product.SG=="1";pageConfig.product.isLOC2=checkApecialAttr("isLOC-2");pageConfig.product.isLOC=checkApecialAttr("isLOC")||pageConfig.product.isLOC2;pageConfig.product.isLSP=checkApecialAttr("isLSP");pageConfig.product.isClosePCShow=checkIsWeChatStock();pageConfig.product.isXnzt=checkApecialAttr("isXnzt");pageConfig.product.isHYKHSP=checkApecialAttr("HYKHSP-2");
//loc
var locSkuEndDate = null;
function getLocSkuDateCallBack(r){
	if(r&&r.expiryEndDate){
		var d = new Date(r.expiryEndDate);
		var y = d.getFullYear();
		var m = d.getMonth()+1;m = (m<10?"0":"")+m;
		var dd = d.getDate();dd = (dd<10?"0":"")+dd;
		var h = d.getHours();h = (h<10?"0":"")+h;
        var mi  = d.getMinutes();mi = (mi<10?"0":"")+mi;
        var s = d.getSeconds();s = (s<10?"0":"")+s;
		locSkuEndDate = "有效期至 "+y+"-"+m+"-"+dd;
		if($("#loc_enddate").length>0){$("#loc_enddate").html(locSkuEndDate);}
	}
}
function getLocSkuDate(){
	$.getJSONP(rmsurl+"/json/locWare/getLocWareBySkuId.action?callback=getLocSkuDateCallBack&skuId="+pageConfig.product.skuid+"&t="+new Date().getTime());
}
if(pageConfig.product.isLOC){getLocSkuDate();}
//FlashPurchase
var Countdown = {
    init: function(seconds, callback) {
        this.seconds = seconds;
        this.timer = null;

        this.callback = callback || function() {};

        this.loopCount();
    },
    loopCount: function() {
        var _this = this;
        this.timer = setInterval(function() {

            var res = _this.formatSeconds(_this.seconds);

            if (res.d === 0 && res.h === 0 && res.m === 0 && res.s === 0) {
                clearInterval(_this.timer);
            } else {
                _this.seconds--;
            }
            _this.callback(res);
        }, 1000);
    },
    formatSeconds: function(seconds) {
        var days = Math.floor(seconds / 86400);
        var hours = Math.floor((seconds % 86400) / 3600);
        var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
        var seconds = ((seconds % 86400) % 3600) % 60;
        return {
            d: days,
            h: hours,
            m: minutes,
            s: seconds
        };
    }
};
function flashPurchase (seconds) {
    var countDownEl = $("#red-countdown");
	if(seconds > 0){
		Countdown.init(seconds, function(res) {
			if(res.d>0||res.h>0||res.m>0||res.s>0){countDownEl.html('（剩余'+res.d + '天' + res.h + '时' + res.m + '分' + res.s + '秒）');}else{countDownEl.html('（已结束）');}
		});
	}
	else if(seconds <= 0){
		countDownEl.html('（已结束）');
	}
}
function flashPurchaseChange(){
	$("#summary-price .dt").html("闪 购 价：");
	$('<em id="red-discount" class="hl_red_bg"><span id="red-zhekou"></span><span id="red-countdown"></span></em>').insertAfter("#jd-price");
	$("#notice-downp").remove();
	if($('#summary-countdown').length==0){
		$.ajax({
			url: 'http://rms.shop.360buy.com/json/upDown/queryWareTaskUpDownTimeBySkuId.action?skuId=' + pageConfig.product.skuid,
			dataType: 'jsonp',
			success: function(r) {
				if (r&&r.downTime&&r.nowTime){var seconds = Math.floor( (parseInt(r.downTime, 10) - parseInt(r.nowTime, 10))/1000 );flashPurchase(seconds);}			
			}
		})
	}
}
function flashPurchaseChange1(){
	$('<em id="red-discount" class="hl_red_bg" style="display:none;margin-left:5px;"><span id="red-countdown"></span></em>').insertAfter("#jd-price");
	$("#notice-downp").remove();
	if($('#summary-countdown').length==0){
		$.ajax({
			url: 'http://red.jd.com/item/remainTime.html?skuid=' + pageConfig.product.skuid,
			dataType: 'jsonp',
			success: function(r) {
				if(r){
					r=r.split(',');var json={},tmp=null;
					for(var i=0,j=r.length;i<j;i++){tmp=r[i].split(":");if(tmp.length==2){json[tmp[0]]=tmp[1]}}
					if(json.startedFlag+""=="1"&&new Number(json.remainTime)>0){$("#red-discount").show();var seconds = Math.floor(json.remainTime/1000 );flashPurchase(seconds);}
				}			
			}
		})
	}
}
if(pageConfig.product.isFlashPurchase){flashPurchaseChange();}
else if(pageConfig.product.isPOPFlashPurchase){flashPurchaseChange1();}
//\\FlashPurchase
$.getDeliver = function(p){
    var r=p.D;
    iconDesc = "";
    if (p.ir&&p.ir.length>0){
        iconDesc += '';
        for (var i=0,j=p.ir.length;i<j;i++){
            if (p.ir[i].resultCode==1){
				if(!p.ir[i].helpLink){p.ir[i].helpLink="#"}
                iconDesc += '<a href="'+p.ir[i].helpLink+'" '+(p.ir[i].helpLink=='#'?'':'target="_blank"')+' class="'+p.ir[i].iconCode+'" title="'+p.ir[i].iconTip+'">\u3000</a>';
            }
        }
    }
    dCashDescInfo.loadStockCnt ++;
    /*if(!r||r.type==0){
        var noDCash = aboutSelfDeliveCash(1);
        if(noDCash){
            iconDesc += noDCash;
        }
    }*/
    if (iconDesc){
        iconDesc = '<span id="promise-ico">支持：'+iconDesc+'</span>';
    }
    if(pageConfig.product.skuid<1000000000){
//        $("#summary-service").html("");
//        if (p.PopType==999||p.Ext.indexOf("factoryShip")!=-1){
//            $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由厂家或供应商提供和配送。"+iconDesc+"</div>").appendTo("#summary-service");
//        }else{
//            var upenCheckStr = "";
//            if (p.code==1&&openCheck&&!iconDesc&&!checkApecialAttr("YuShou")){
//                upenCheckStr = "，支持货到付款、开箱验机";
//            }
//            $("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由 京东 发货并提供售后服务"+upenCheckStr+"。"+iconDesc+"</div>").appendTo("#summary-service");
//        }
    }
    if (pageConfig.product.skuid>1000000000){   
        if (r){
            showVenderServiceInfo(r);
        }
    }
};
function getDeliveCash(r){
	if(r&&r.dtype==undefined){
		for(var i=0,j=r.length;i<j;i++){
			if (r[i].freihtType==1){
				r = r[i];break;
			}
		}
	}
    if(r){
        if(r.dtype == 0&&new Number(r.dcash)>0){
            $("#store-prompt span").html("，运费："+r.dcash+"元 <a href='http://help.jd.com/help/question-892.html#help2215' class='free_delivery_policy' title='了解配送费收取标准'></a>");
        }
        else if(r.dtype == 1&&new Number(r.dcash)>0&&new Number(r.ordermin)>0){
            $("#store-prompt span").html("，店铺单笔订单不满"+r.ordermin+"元，收运费："+r.dcash+"元 <a href='http://help.jd.com/help/question-892.html#help2215' class='free_delivery_policy'></a>");
        }
        if(typeof $.fn.Jtips !== 'undefined'){
             $('.free_delivery_policy').Jtips({
                width:150,
                autoClose: true,
                oLeft: -8,
                position:'bottom',
                content:'<a href="http://help.jd.com/help/question-892.html#help2215" target="_blank">了解配送费收取标准</a>',
                event: 'mouseover',
                close: true
            });
        }
    }
}
var changeDescShopUrl=true;
var requestDeliveCash = false; 
function getPOPDeliveCash(){
    if (requestDeliveCash){
        try{
			if(dcashurl){
				$.getJSONP(dcashurl+"?venderId="+pageConfig.product.venderId+"&skuId="+pageConfig.product.skuid+"&provinceId="+currentAreaInfo.currentProvinceId+"&cityId="+currentAreaInfo.currentCityId+"&buyNum="+$("#buy-num").val()+"&vType="+(pageConfig.product.isLSP?2:1)+"&callback=getDeliveCash");
			}
			else{
				$.getJSONP("http://fare.shop.jd.com/json/pop/fare.action?venderId="+pageConfig.product.venderId+"&skuId="+pageConfig.product.skuid+"&provinceId="+currentAreaInfo.currentProvinceId+"&cityId="+currentAreaInfo.currentCityId+"&buyNum="+$("#buy-num").val()+"&callback=getDeliveCash");
			}
        }catch(e){}
    }
}
function showVenderServiceInfo(r){
//    requestDeliveCash = false;
//    if (r){
//        if(!r.deliver)r.deliver=r.vender;
//        currentVenderInfoJson = r;
//        var unshowtypes = "0,1,2,4,5";
//        if (unshowtypes.indexOf(r.type) != -1){
//                if($("#summary-service").length==0){$("<li id='summary-service'></li>").insertAfter("#summary-stock");}
//                $("#summary-service").html("");
//                var key=r.id+"_"+r.type;
//                var dfinfo=(r.vid.length!=7&&r.df&&r.df!="null")?("从 "+r.df+" "):"负责";
//                var shinfo=r.po=="false"?"京东提供售后服务。":"并提供售后服务。"; //sop & sopl
//				if(pageConfig.product.isFlashPurchase){
//					if(r.type==0){
//						requestDeliveCash = true;
//						getPOPDeliveCash();
//					}
//					$("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由 京东 负责发货，<a href='#none'>"+r.vender+"</a> 完成售后服务。"+iconDesc+"</div>").appendTo("#summary-service");
//				}
//				else{
//					if(r.type==0){
//						if(pageConfig.product.isLOC){
//							$("<div class='dt'>服\u3000\u3000务：</div><div class='dd'><span id='promise-ico'><a class='"+(pageConfig.product.isLOC2?"pico-onlineserver":"shouhoudaojia")+"' href='#none'></a></span>由<a href='"+$.getShopUrl(r)+"' target='_blank' clstag='shangpin|keycount|product|bbtn' class='hl_red'>"+r.vender+"</a>提供服务和售后"
//							+"<span id='loc_enddate'>"+(locSkuEndDate?("，"+locSkuEndDate):"。")+"</span>"+"</div>").appendTo("#summary-service");
//						}
//						else{
//							requestDeliveCash = true;
//							getPOPDeliveCash();
//							$("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由<a href='"+$.getShopUrl(r)+"' target='_blank' clstag='shangpin|keycount|product|bbtn' class='hl_red'>"+r.vender+"</a>"+dfinfo+"发货，"
//							+shinfo+iconDesc+"</div>").appendTo("#summary-service");
//						}
//					}
//					else if(r.type==1){
//						$("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由 京东 发货并提供售后服务。"+iconDesc+"</div>").appendTo("#summary-service");
//					}
//					else if(r.type==2){
//						$("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由<a href='"+$.getShopUrl(r)+"' "+(pageConfig.product.isFlashPurchase?"":"target='_blank'")+" clstag='shangpin|keycount|product|bbtn' class='hl_red'>"+r.vender+"</a>"+dfinfo+"发货，京东提供售后服务。"+iconDesc+"</div>").appendTo("#summary-service");
//					}
//					else if(r.type==5){
//						$("<div class='dt'>服\u3000\u3000务：</div><div class='dd'>由<a href='"+$.getShopUrl(r)+"' "+(pageConfig.product.isFlashPurchase?"":"target='_blank'")+" clstag='shangpin|keycount|product|bbtn' class='hl_red'>"+r.vender+"</a>"+dfinfo+"发货，"+shinfo+iconDesc+"</div>").appendTo("#summary-service");
//					}
//				}
//                if(pageConfig.product.yfinfo&&pageConfig.product.yfinfo.service){
//                    $("<div class='dt'>\u3000\u3000</div><div class='dd'>"+pageConfig.product.yfinfo.service+"</div>").appendTo("#summary-service");
//                }
//                if(r.type!=4){
//                    if($("#product-intro .itemover-title button").length==0&&$("#product-intro .itemover-title h3").length>0)$("<button type='button' clstag='shangpin|keycount|product|bbtn'>进入卖家店铺</button>").appendTo("#product-intro .itemover-title h3");
//                    $("#product-intro .itemover-title button").unbind("click").click(function(){window.location=$.getShopUrl(r);});
//                }   
//                if (changeDescShopUrl){
//                    var shoplinkhtml="<a href='"+$.getShopUrl(r)+"' target='_blank'>"+r.vender+"</a>";
//                    var descShopLinkDom=$("#product-detail-1 .detail-list li").eq(2);
//                    if (descShopLinkDom.html().indexOf("店铺：")>-1&&(descShopLinkDom.find("a").html()!=r.vender||descShopLinkDom.find("a").attr("href")!=$.getShopUrl(r))){
//                        descShopLinkDom.html("店铺："+shoplinkhtml);
//                    }
//                }
//        }
//    }
}
var areaSurportDelive = true;
function getStockDescWords(state,isPurchase,skuid,skukey,arrivalDate,isNotice,ext,provinceId,rn,pr){
    if (state == -1){
        areaSurportDelive = false;
        pageConfig.product.havestock = false;
        $('body').addClass('no-stock');
        return "<strong>该地区暂不支持配送</strong>";
    }
    var text = "";
    var yfInfo = "";
    areaSurportDelive = true;
    dCashDescInfo.dCash = false;
    if (skuid<1000000000){
        if((provinceId==26||provinceId==31)&&(state!=0&&state!=34)&&ext&&ext.indexOf("PianYuanYunFei")>-1){
            yfInfo = "，<span title='钻石级别以上用户不用付运费' style='cursor:pointer'>单件运费：￥10.00</span>";
            dCashDescInfo.dCash = true;
        }
    }
	var promiseresult = null;
	if (pr&&pr.resultCode==1&&pr.promiseResult){
		promiseresult = pr.promiseResult;
	}
    if (state == 33){
        pageConfig.product.havestock = true;
        if (rn&&rn>0){
            text = "<strong>有货</strong>，仅剩"+rn+"件"+(promiseresult?("，"+promiseresult):"")+"<span></span>";  
        }
        else{
            text = "<strong>有货</strong>"+(promiseresult?("，"+promiseresult):(pageConfig.product.isLOC||(ext&&ext.indexOf("YuShou")>-1||(pageConfig.product.yfinfo&&pageConfig.product.yfinfo.service))?"":"，下单后立即发货"))+"<span></span>";      
        }
    }
    else if (state == 34 || state == 0){
        pageConfig.product.havestock = false;
        $('body').addClass('no-stock');
        text = "<strong>无货</strong>，此商品暂时售完"+(isNotice?"，<a href='#none' id='notify-stock' target='_blank'>到货通知</a>":"");
        if (skuid&&skuid.length == 8 && !isPurchase){
            text = "<strong>无货</strong>，此商品不再销售，欢迎选购其它商品";
        }
    }
    else if (state == 39 || state == 40){
        pageConfig.product.havestock = true;
        text = "<strong>有货</strong>，"+((promiseresult&&state == 40)?promiseresult:"下单后2-6天发货")+"<span></span>";
    }
    else if (state == 36){
        pageConfig.product.havestock = true;
        $('body').removeClass('no-stock');
        text = "<strong>预订</strong>，"+(arrivalDate?"预计"+arrivalDate+"日后有货，现在可下单":"商品到货后发货，现在可下单")+"<span></span>";
    }
    text += yfInfo;
    return text;
}
//NO Stock
var reCookieName = "reWidsSORec";
function reClick2(type2, pwid, sku, num) {
    var reWidsClubCookies = eval('(' + getCookie(reCookieName) + ')');
    if (reWidsClubCookies == null || reWidsClubCookies == '') reWidsClubCookies = new Object();
    if (reWidsClubCookies[type2] == null) reWidsClubCookies[type2] = '';
    var pos = reWidsClubCookies[type2].indexOf(sku);
    if (pos < 0) reWidsClubCookies[type2] = reWidsClubCookies[type2] + "," + sku;
    if(!!JSON&&JSON.stringify)setNewCookie(reCookieName, JSON.stringify(reWidsClubCookies), 2, "/", locPageHost, false);
    sku = sku.split("#");
    if (window.log){log(3, type2, sku[0]);log('RC', 'CK', type2, pwid, sku[0], num);}
}
//Notify
function getBuyUrl(skuId){
    var count = $("#buy-num").val();
    if(!count)count=1;
	if(pageConfig.product.isHYKHSP)return "http://eve.jd.com/redirect.action?wid="+skuId+"&btype=30";
	if(pageConfig.product.isLOC){
		return "http://cart.jd.com/cart/dynamic/gateForSubFlow.action?wids="+skuId+"&nums="+count+"&subType=22";
	}
    if(eleSkuIdKey) return "http://gate.jd.com/InitCart.aspx?pid="+skuId+"&pcount="+count+"&ptype=1";
    if($.pbuyurl)return $.pbuyurl;
    if($.append_button.attr("href")!="#none")return $.append_button.attr("href");
    if (pageConfig.product.cat[2] == 4833) return "http://chongzhi.jd.com/order/order_place.action?skuId=" + skuId + "";
    if (pageConfig.product.cat[2] == 4835 || pageConfig.product.cat[2] == 4836) return "http://card.jd.com/order/order_place.action?skuId=" + skuId + "";
    return "http://gate.jd.com/InitCart.aspx?pid="+skuId+"&pcount="+count+"&ptype=1";
}
function chooseType() {
    var shoppingselect = $('#choose-type .item'),
        amount = $('#choose-amount'),
        buyLink = $('#choose-btn-append .btn-append'),
        selectItem = $('#choose-type .selected').eq(0); 
    if ( !selectItem.attr('data') ) {
        return false;
    }       
    if ( shoppingselect.length > 0 ) {
        amount.hide();
    }
    shoppingselect.bind('click', function (i) {
        if ( $('#choose-btn-append').hasClass('disabled') ) {
            return false;
        }
        var data = $(this).attr('data').split('|'),
            link = buyLink.attr( 'href' );
        var newlink = data[1].replace(/wid=\d{6,}/, 'wid=' + pageConfig.product.skuid );        
        shoppingselect.removeClass('selected');
        $(this).addClass('selected');
        $('#choose .result').html(data[0]);
        amount.addClass(data[2]);
        buyLink.attr('href', newlink);
    });
    if ( selectItem.length > 0 ) {
        var data = selectItem.attr('data').split('|'),
            newlink = data[1].replace(/wid=\d{6,}/, 'wid=' + pageConfig.product.skuid );
        buyLink.attr('href', newlink);
    }
    if ( shoppingselect.length == 1 && selectItem.length < 1 ) {
        shoppingselect.addClass('selected');
        buyLink.attr( 'href', shoppingselect.attr('data').split('|')[1].replace(/wid=\d{6,}/, 'wid=' + pageConfig.product.skuid ) );
    }
}
var choose_btn_gift = null;
function setGiftTips (isGift, areaText) {
	if(checkApecialAttr("isSupportCard")){
		var tipsEl = $('#summary-tips .dd');
		var giftTipsEl = $('#gift-tips');
		var giftTipsHtml = (areaText || '北京地区') + '支持礼品包装' + '<a href="http://cart.gift.jd.com/cart/addGiftToCart.action?pid='+pageConfig.product.skuid+'&pcount=1&ptype=1" target="_blank">&nbsp;&nbsp;详情 <s class="s-arrow">&gt;&gt;</s></a>';
		if (isGift) {
			if (giftTipsEl.length > 0) {
				giftTipsEl.html(giftTipsHtml);
			} else {
				tipsEl.html('<div id="gift-tips" class="hl_red">'+ giftTipsHtml +'</div>'); 
			}

			tipsEl.parent().show();
		} else {
			giftTipsEl.remove();
		}
	}
}
function SetNotifyByNoneStock(stockstatus,ext) {
//    if (!choose_btn_gift||choose_btn_gift.length==0){
//        choose_btn_gift = $("#choose-btn-gift .btn-gift");
//    }
//	pageConfig.product.YuShou=false;
//	if(pageConfig.product.isLOC){
//		$.append_button.addClass(" btn-append-buynow").html("立即购买<b></b>");
//		$(".nav-minicart-btn").addClass(" nav-minicart-buynow").find("a").html("立即购买");
//	}//
//    if (stockstatus!=34&&stockstatus!=0&&warestatus==1&&pageConfig.product.skuid!=938747&&pageConfig.product.skuid!=938749){
//        if(pageConfig&&pageConfig.product)pageConfig.product.isStock=true;
//        $("#choose-btn-append,#choose-btn-gift").removeClass("disabled");
//        if(choose_btn_gift.attr("href")=="#none"&&choose_btn_gift.attr("href1"))choose_btn_gift.attr("href",choose_btn_gift.attr("href1"));
//        if($("#choose-btn-subsidy .btn-subsidies").length>0){$("#choose-btn-append").addClass("choose-btn-append-lite");}
//        $("#product-intro").attr("class","");
//        $('#out-of-stock,#noitem-related-list').remove();
//        if($("#choose-noresult").length>0){$("#choose-noresult").remove();}
//        $.easybuy_button.show();
//        $.divide_button.show();
//        if(pageConfig.product.skuid<1000000000){$.notice_button.hide()}
//        if($.append_button.length>0){
//            if( $('#choose-type .item').length>0){      
//                chooseType();
//                $.append_button.attr("onclick","").attr("title","").unbind("click").click(function() {  mark(pageConfig.product.skuid, 2) }); //购物车 
//				if(pageConfig.product.isLOC){
//					$("#choose-btn-append .btn-append,.nav-minicart-btn").attr("href","#none");
//				}
//            }
//            else{
//				if(pageConfig.product.isLOC){
//					$("#choose-btn-append .btn-append,.nav-minicart-btn").attr("href","#none").attr("title","");
//				}
//				else{
//					$.append_button.attr("href",getBuyUrl(pageConfig.product.skuid)).attr("onclick","").attr("title","").unbind("click").click(function() { /*BuyUrl(pageConfig.product.skuid);*/ mark(pageConfig.product.skuid, 2) }); //购物车
//				}
//            }
//        }
//        if($(".nav-minicart-btn").length>0)$(".nav-minicart-btn").show(); //mini购物车
//        $("#choose-btn-subsidy").show();
//        if ((ext&&ext.indexOf("YuShou")>-1)||checkApecialAttr("isKO")){
//			pageConfig.product.YuShou=true;
//            if(!window.Qiang){
//                //$.ajax({url:"http://misc.360buyimg.com/product/js/2012/qiang.js?t=20140527",dataType:'script',cache:true});
//            }
//            else{
//                if ( Qiang&&Qiang.init ) {
//                        Qiang.init(G.sku, G.key);
//                    }
//            }
//            //if($("#choose-type .selected").attr("data-id")=="100")
//            if(pageConfig.product.cat[2] !== 655 || $("#choose-type .selected").attr("data-id")=="100") {
//                $.append_button.hide();
//                $.easybuy_button.hide();
//                $.divide_button.hide();
//            }
//        }
//		else if(ext&&ext.indexOf("is3GRealName")>-1){
//			var newUrl = "http://eve.jd.com/redirect.action?wid="+pageConfig.product.skuid+"&btype=16&pid="+currentAreaInfo.currentProvinceId+"&cid="+currentAreaInfo.currentCityId;
//            $.append_button.attr("href",newUrl).attr("onclick","").attr("title","").unbind("click").click(function() { mark(pageConfig.product.skuid, 2) }); //购物车
//		}
//		if(pageConfig.product.isLOC){
//			$.append_button.addClass(" btn-append-buynow").html("立即购买<b></b>");
//			$(".nav-minicart-btn").addClass(" nav-minicart-buynow").find("a").html("立即购买");
//			$("#choose-btn-append .btn-append,.nav-minicart-btn").click(function(){
//				$.extend(jdModelCallCenter.settings, {
//					clstag1: 0,
//					clstag2: 0,
//					id: pageConfig.product.skuid,
//					fn: function () {
//						$.login({
//							modal: true,
//							complete: function (result) {
//								if (result != null && result.IsAuthenticated != null && result.IsAuthenticated) {								
//									window.location=getBuyUrl(pageConfig.product.skuid);
//								}
//							}
//						})
//					}
//				});
//				jdModelCallCenter.settings.fn();
//			});
//		}//
//		if(pageConfig.product.isClosePCShow){
//			$("#choose-btn-append,#choose-btn-gift").addClass("disabled").removeClass('choose-btn-append-lite');
//			if($.append_button.length>0){$.append_button.attr("href","#none").attr("onclick","").attr("title","").unbind("click"); }//购物车
//		}
//        if(window.noItemOver)noItemOver.init();
//        return;
//    }
//    if(pageConfig&&pageConfig.product)pageConfig.product.isStock=false;
//    $("#choose-btn-append,#choose-btn-gift").addClass("disabled").removeClass('choose-btn-append-lite');
//    if(choose_btn_gift.attr("href"))choose_btn_gift.attr("href1",choose_btn_gift.attr("href")).attr("href","#none");
//    $("#product-intro").attr("class","product-intro-noitem");
//    if($("#choose-noresult").length==0&&areaSurportDelive&&pageConfig.product.skuid!=938747&&pageConfig.product.skuid!=938749){$("<li id='choose-noresult'><div class='dd'><strong>所选地区该商品暂时无货，非常抱歉！</strong></div></li>").insertAfter("#choose-result");}
//    else if(!areaSurportDelive){$("#choose-noresult").remove();}
//    $.easybuy_button.hide();
//    $.divide_button.hide();
//    if($.append_button.length>0){$.append_button.show();if($.append_button.attr("href")!="#none"){$.pbuyurl=$.append_button.attr("href")}$.append_button.attr("href","#none").attr("onclick","").attr("title","商品已无货").unbind("click"); }//购物车
//    if($(".nav-minicart-btn").length>0)$(".nav-minicart-btn").hide(); //mini购物车
//    $("#choose-btn-subsidy").hide();
//    if($.notice_button.length==0&&pageConfig.product.skuid<1000000000&&areaSurportDelive&&pageConfig.product.skuid!=938747&&pageConfig.product.skuid!=938749){
//        $("<div id='choose-btn-notice' class='btn'><a id='notify-btn' class='btn-notice' href='http://notify.home.jd.com/email.action?type=2&id=" + pageConfig.product.skuid + "&key=" + pageConfig.product.skuidkey + "' target='_blank'>到货通知<b></b></a></div>").insertAfter("#choose-btn-append");
//        $.notice_button=$("#choose-btn-notice");
//    }
//    if(pageConfig.product.isNotice){$.notice_button.show()}else{$.notice_button.hide()}
//    if ((ext&&ext.indexOf("YuShou")>-1)||checkApecialAttr("isKO")){
//		pageConfig.product.YuShou=true;
//        if(!window.Qiang){
//            $.ajax({url:"http://misc.360buyimg.com/product/js/2012/qiang.js?t=20140527",dataType:'script',cache:true}); 
//        }
//        else{
//            if ( Qiang&&Qiang.init ) {
//                    Qiang.clear();
//                    Qiang.init(G.sku, G.key);
//                }
//        } 
//        //if($("#choose-type .selected").attr("data-id")=="100")
//        if(pageConfig.product.cat[2] !== 655 || $("#choose-type .selected").attr("data-id")=="100") {
//            $.append_button.hide();
//            $.easybuy_button.hide();
//            $.divide_button.hide();
//        }
//    }
//    if(window.noItemOver)noItemOver.init(pageConfig.product.type);
};
//stock callback
var currentVenderInfoJson = null;
function cleanKuohao(str){
    if(str&&str.indexOf("(")>0){
        str = str.substring(0,str.indexOf("("));
    }
    if(str&&str.indexOf("（")>0){
        str = str.substring(0,str.indexOf("（"));
    }
    return str;
}
pageConfig.product.giftTipsPros={"1":"北京","3":"天津","5":"河北","6":"山西","13":"山东","19":"广东","16":"福建","20":"广西","22":"四川","4":"重庆","24":"贵州","25":"云南","26":"西藏","23":"海南","7":"河南","17":"湖北","18":"湖南","21":"江西","8":"辽宁","10":"黑龙江","9":"吉林","11":"内蒙古","27":"陕西","28":"甘肃","29":"青海","30":"宁夏","31":"新疆","12":"江苏","15":"浙江","14":"安徽","2":"上海"};
pageConfig.product.isNotice = pageConfig.product.cat[2]!=12360 && pageConfig.product.skuid<1000000000;
function setOldForNew(proId,cityId){
	var area = {"1":"北京","2":"上海","1601":"广州"};//&&(area[proId+""]||area[cityId+""])
	var summary_tips=$("#summary-tips");
	if (pageConfig.product.cat[2]==655){
		if ($("#oldfornew-tips").length==0){
			summary_tips.find(".dd").append("<div id=\"oldfornew-tips\" class=\"hl_red\">以旧换新，最高抵扣3000元<a target=\"_blank\" href=\"http://huishou.jd.com\" clstag=\"shangpin|keycount|product|huishou\">&nbsp;&nbsp;详情<s class=\"s-arrow\">>></s></a></div>");
		}else{
			$("#oldfornew-tips").show();
		}
		summary_tips.show();
	}
	else{
		$("#oldfornew-tips").hide();
	}
}
function getProvinceStockCallback(result,choosetype) {
    var setSer = false;
    if (currentPageLoad.notSet&&currentPageLoad.isLoad){
        setSer = false;
    }
    else if (!currentPageLoad.isLoad){
        setSer = true;
		setCommonCookies(currentAreaInfo.currentProvinceId,currentLocation,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,currentAreaInfo.currentTownId,setSer);
    }
    if ( typeof Refresh !== 'undefined' ) {Refresh.init()} 
    //变换sku需要变化广告词及相关信息
    if (pageConfig.product.isChangeSku){
		if(pageConfig.product.skuid<=0)pageConfig.product.isNotice=false;
        refreshPageInfos();
    }
    if (currentPageLoad.isLoad){
        currentPageLoad.isLoad=false;
    }
    pageConfig.product.havestock = true;
    $('body').removeClass('no-stock');
    var stockdesc="<strong>现货</strong>";
    if (result.stock) {     
        if(result.stock.D&&result.stock.D.id){
            pageConfig.product.popInfo = result;
        }
        stockdesc = (result.stock.StockStateName=="统计中"|| result.stock.StockStateName=="无货")?"<strong class='store-over'>无货</strong>":("<strong>"+result.stock.StockStateName+"</strong>");
        var address = currentAreaInfo.currentProvinceName+currentAreaInfo.currentCityName+currentAreaInfo.currentAreaName+currentAreaInfo.currentTownName;
        $("#store-selector .text div").html(currentAreaInfo.currentProvinceName+cleanKuohao(currentAreaInfo.currentCityName)+cleanKuohao(currentAreaInfo.currentAreaName)+cleanKuohao(currentAreaInfo.currentTownName)).attr("title",address);
        pageConfig.product.yfinfo={};
        if(result.stock.D&&result.stock.D.prompt){
            var proarray=result.stock.D.prompt.split("|");
            if (proarray[0]&&new Number(proarray[0])>0){
                pageConfig.product.yfinfo={nofree:true,cash:proarray[0]};
            }
            if(proarray[1]){
                pageConfig.product.yfinfo.service=proarray[1];
            }
        }
        $("#store-prompt").html(getStockDescWords(result.stock.code==2?-1:result.stock.StockState,true,pageConfig.product.skuid,pageConfig.product.skuidkey,result.stock.ArrivalDate,pageConfig.product.isNotice,result.stock.Ext,currentAreaInfo.currentProvinceId,result.stock.rn,result.stock.pr)
            +(pageConfig.product.yfinfo.nofree?"，<span style='cursor:pointer' title='一个店铺购买多件商品，只收取一次运费'>运费：<span style='color:#f00;'>￥"+pageConfig.product.yfinfo.cash+"</span><span>":""));
        $.getDeliver(result.stock);
		if(!choosetype){
			if ( typeof pageConfig.product.onAreaChange === 'function' ) {
				pageConfig.product.onAreaChange(currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId);
			}
			else{
				pageConfig.product.onAreaChangeExecute = true;
			}
		}
        SetNotifyByNoneStock(result.stock.StockState,result.stock.Ext);
		if(useEasyBuy)newEasyBuyInit();
		if(!choosetype){
			setGiftTips(pageConfig.product.giftTipsPros[currentAreaInfo.currentProvinceId+""],pageConfig.product.giftTipsPros[currentAreaInfo.currentProvinceId+""]+"地区");
			setOldForNew(currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId);
		}
    }
    if (pageConfig.product.skuid>1000000000){
            if(!$._ptload){
                $._ptload=true;
                window._showPopTemplete=function(r){
                    if(result.stock.StockState==36){
                        if(r&&r.reserveDeliveryDay){
                            $._ptloadcon=r.reserveDeliveryDay;
                            $("#store-prompt").html(stockdesc+"，"+"此商品为预订商品，下单后在"+$._ptloadcon);
                        }
                    }
                    if(r&&r.wareTemplateContent)$("<div>"+r.wareTemplateContent+"</div>").insertBefore("#product-detail-1 .detail-content:first");
                    if(r&&r.wareTemplateBottomContent)$("<div>"+r.wareTemplateBottomContent+"</div>").insertAfter("#product-detail-1 .detail-content:last");
                };
                $.getJSONP(rmsurl+"/json/wareTemplate/queryWareTemplateContent.action?skuId="+pageConfig.product.skuid+"&jsoncallback=_showPopTemplete",_showPopTemplete);
            }else{
                if($._ptloadcon)$("#store-prompt").html(stockdesc+"，"+"此商品为预订商品，下单后在"+$._ptloadcon);
            }
    }
}
/**
新地址列表数据及时间绑定
**/
function getAreaList(result,idName,level){
    if (idName && level){
        $("#"+idName).html("");
        var html = ["<ul class='area-list'>"];
        var longhtml = [];
        var longerhtml = [];
        if (result&&result.length > 0){
            for (var i=0,j=result.length;i<j ;i++ ){
                result[i].name = result[i].name.replace(" ","");
                if(result[i].name.length > 12){
                    longerhtml.push("<li class='longer-area'><a href='#none' data-value='"+result[i].id+"'>"+result[i].name+"</a></li>");
                }
                else if(result[i].name.length > 5){
                    longhtml.push("<li class='long-area'><a href='#none' data-value='"+result[i].id+"'>"+result[i].name+"</a></li>");
                }
                else{
                    html.push("<li><a href='#none' data-value='"+result[i].id+"'>"+result[i].name+"</a></li>");
                }
            }
        }
        else{
            html.push("<li><a href='#none' data-value='"+currentAreaInfo.currentFid+"'> </a></li>");
        }
        html.push(longhtml.join(""));
        html.push(longerhtml.join(""));
        html.push("</ul>");
        $("#"+idName).html(html.join(""));
        $("#"+idName).find("a").click(function(){
            resetBindMouseEvent();
            var areaId = $(this).attr("data-value");
            var areaName = $(this).html();
            var level = $(this).parent().parent().parent().attr("data-area");
            JdStockTabs.eq(level).find("a").attr("title",areaName).find("em").html(areaName.length>6?areaName.substring(0,6):areaName);
            level = new Number(level)+1;
            if (level=="2"){
                currentAreaInfo.currentCityId = areaId;
                currentAreaInfo.currentCityName = areaName;
                currentAreaInfo.currentAreaId = 0;
                currentAreaInfo.currentAreaName = "";
                currentAreaInfo.currentTownId = 0;
                currentAreaInfo.currentTownName = "";
            }
            else if (level=="3"){
                if (requestLevel == 4 && currentAreaInfo.currentAreaId != areaId){
                    requestLevel = 3;
                }
                currentAreaInfo.currentAreaId = areaId;
                currentAreaInfo.currentAreaName = areaName;
                currentAreaInfo.currentTownId = 0;
                currentAreaInfo.currentTownName = "";
            }
            else if (level=="4"){
                currentAreaInfo.currentTownId = areaId;
                currentAreaInfo.currentTownName = areaName;
            }
            currentLocation = currentAreaInfo.currentProvinceName;
            GetStockInfoOrNextAreas(pageConfig.product.skuidkey,currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,currentAreaInfo.currentTownId,pageConfig.product.cat[2],level);
        });
        //页面初次加载
        if (currentPageLoad.isLoad){
            var tempDom = $("#"+idName+" a[data-value='"+currentPageLoad.areaCookie[level-1]+"']");
            if (tempDom.length == 0){
                tempDom = $("#"+idName+" a").eq(0);
            }
            if(currentPageLoad.areaCookie&&currentPageLoad.areaCookie[level-1]&&currentPageLoad.areaCookie[level-1]>0&&tempDom.length>0){
                //本地cookie有该级地区ID
                tempDom.click();
            }
            else{
                $("#"+idName+" a:first").click();
            }
        }
    }
}
/**
下级地址回调方法
**/
function getAreaListcallback(result){
    var level = currentAreaInfo.currentLevel;
    getAreaList(result,getIdNameByLevel(level),level);
}
/**
根据父地址及地址等级获取下级地址列表
**/
function getChildAreaHtml(fid,level){
    var idName = getIdNameByLevel(level);
    if (idName){
        $("#stock_province_item,#stock_city_item,#stock_area_item,#stock_town_item").hide();
        $("#"+idName).show().html("<div class='iloading'>正在加载中，请稍候...</div>");
        JdStockTabs.show().removeClass("curr").eq(level-1).addClass("curr").find("em").html("请选择");
        for (var i=level,j=JdStockTabs.length;i<j ;i++ ){
            JdStockTabs.eq(i).hide();
        }
        currentAreaInfo.currentLevel = level;
        if(level == 2 && provinceCityJson[fid+""]){
            getAreaListcallback(provinceCityJson[fid+""]);
        }
        else{
            currentAreaInfo.currentFid = fid;
            $.getJSONP("http://d.360buy.com/area/get?fid="+fid+"&callback=getAreaListcallback");
        }
    }
}
function getIdNameByLevel(level){
    var idName = "";
    if (level == 1){
        idName = "stock_province_item";
    }
    else if (level == 2){
        idName = "stock_city_item";
    }
    else if (level == 3){
        idName = "stock_area_item";
    }
    else if (level == 4){
        idName = "stock_town_item";
    }
    return idName;
}
//需要的地址层级
var requestLevel = 1;
//是否分区商品
var isAreaProduct = false;
if(!eleRegion) var eleRegion=null;
if(!eleSkuIdKey) var eleSkuIdKey=null;
function initrequestLevel(){
    requestLevel = 3;
    isAreaProduct = false;
    if(eleSkuIdKey){
        requestLevel = 3;
        isAreaProduct = true;
    }
}
//当前地域信息
var currentAreaInfo;
//初始化当前地域信息
function CurrentAreaInfoInit(){
    currentAreaInfo =  {"currentLevel": 1,"currentProvinceId": 1,"currentProvinceName":"北京","currentCityId": 0,"currentCityName":"","currentAreaId": 0,"currentAreaName":"","currentTownId":0,"currentTownName":""};
}
//回调方法
function getStockCallback_new(result,choosetype){
    if (result.stock&&(result.stock.code==3||result.stock.code==4)&&result.stock.level>1){
        //需要进一步计算，且需要地区层级大于1
        requestLevel = result.stock.level;
        if (currentAreaInfo.currentRequestLevel<result.stock.level){
            GetStockInfoOrNextAreas(pageConfig.product.skuidkey,currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,currentAreaInfo.currentTownId,pageConfig .product.cat[2],currentAreaInfo.currentRequestLevel);
        }
    }
    else{
        reBindStockEvent();
        for (var i=currentAreaInfo.currentRequestLevel,j=JdStockTabs.length;i<j;i++){
            JdStockTabs.eq(i).hide();
            JdStockContents.eq(i).hide();
        }
        getProvinceStockCallback(result,choosetype);
    }
}
function getStockCallback(result){
	getStockCallback_new(result,false);
}
function getStockCallback1(result){
	getStockCallback_new(result,true);
}
//自营免运费
function aboutSelfDeliveCash(type,flag){
    if((pageConfig.product.skuid+"").length<10||flag){
        if(dCashDescInfo.loadPriceCnt==dCashDescInfo.loadStockCnt&&dCashDescInfo.bigger39&&!dCashDescInfo.dCash){
            if(type == 1){ //stock
                return '<a href="http://help.jd.com/help/question-892.html#help2215" target="_blank" class="free_delivery" title="了解配送费收取标准"></a>';
            }
            else if (type == 2){ //price
                if($("#promise-ico").length>0){
                    if($("#promise-ico .free_delivery").length==0){
                        $('<a href="http://help.jd.com/help/question-892.html#help2215" target="_blank" class="free_delivery" title="了解配送费收取标准"></a>').appendTo("#promise-ico");
                    }
                }
                else{
                    $('<span id="promise-ico">支持：<a href="http://help.jd.com/help/question-892.html#help2215" target="_blank" class="free_delivery" title="了解配送费收取标准"></a></span>').appendTo("#summary-service .dd");
                }
            }
        }
    }
}
function easybuysubmit(r){
	if(r&&r.success&&r.jumpUrl){
		 window.location=r.jumpUrl;
	}
	else if(r&&!r.success&&r.message){
		$.jdThickBox({
			width: 400,
			height: 200,
			title: '提示',
			source: '<div style="padding:10px"><img class="fl" style="margin-right:10px;" src="http://misc.360buyimg.com/jd2008/skin/df/i/remind.png" /><span style="font:bold 16px arial;color:#005ea8">'+r.message+'</span></div>'
		});
		$("#btn-easybuy-submit").show();
		$("#btn-easybuy-submit-ing").hide();
	}
}
var checkLogin = function(cb) {
	if ( typeof cb !== 'function' ) { return; }
	$.getJSON('http://passport.jd.com/loginservice.aspx?method=Login&callback=?', function(r) {
		if ( r.Identity ) {
			cb(r.Identity);
		}
	});
};

function newEasyBuyInit(){
	if(dCashDescInfo.loadPriceCnt==dCashDescInfo.loadStockCnt){
		if(itemEasyBuy.bigger10&&pageConfig.product.isStock&&!pageConfig.product.YuShou
			&&pageConfig.product.cat[1]!=794&&pageConfig.product.cat[1]!=6880&&pageConfig.product.cat[1]!=703&&pageConfig.product.cat[0]!=4938&&pageConfig.product.cat[2]!=6980&&!pageConfig.product.isHeyue&&!pageConfig.product.isLOC&&!pageConfig.product.isXnzt&&!pageConfig.product.isLSP){
			checkLogin(function(r) { 
				if(r&&r.IsAuthenticated){
					$.easybuy_button.html("<a id='btn-easybuy-submit' class='btn-easybuy' href='#none'>轻松购<b></b></a>");
					$("#btn-easybuy-submit").click(function () {
						$("#btn-easybuy-submit").hide().after("<a id='btn-easybuy-submit-ing' class='btn-easybuy css3-btn-gray' href='#none'>提交中<b></b></a>");
						$.extend(jdModelCallCenter.settings, {
							clstag1: 0,
							clstag2: 0,
							id: pageConfig.product.skuid,
							fn: function () {
								$.login({
									modal: true,
									complete: function (result) {
										if (result != null && result.IsAuthenticated != null && result.IsAuthenticated) {								
											$.getJSONP("http://easybuy.jd.com/skuDetail/submitEasybuyOrder.action?callback=easybuysubmit&skuId="+pageConfig.product.skuid+"&num="+$("#buy-num").val());
										}
										else{
											$("#btn-easybuy-submit").show();
											$("#btn-easybuy-submit-ing").hide();
										}
									}
								})
							}
						});
						jdModelCallCenter.settings.fn();
					});
				}
				else{
					$("#btn-easybuy-submit").remove();
					$("#btn-easybuy-submit-ing").remove();
				}
			});
		}
		else{
			$.easybuy_button.html("");
		}
	}
}
var dCashDescInfo={loadPriceCnt:0,loadStockCnt:0,bigger39:true,dCash:false};
var itemEasyBuy={bigger10:true};
//设置sku价格
function cnp(r){
    var price = "";
    dCashDescInfo.loadPriceCnt ++;
    if (r&&r.length>0){
        if (new Number(r[0].p)>0){  
            price = "￥"+r[0].p;
            pageConfig.product.jp = r[0].p;
            pageConfig.product.mp = r[0].m;
            if(new Number(r[0].p)<39){
                dCashDescInfo.bigger39 = false;
            }else{
                dCashDescInfo.bigger39 = true;
			}
            if(new Number(r[0].p)<10){
                itemEasyBuy.bigger10 = false;
            }else{
                itemEasyBuy.bigger10 = true;
			}
            //aboutSelfDeliveCash(2);
			if(useEasyBuy)newEasyBuyInit();
        }
    }
    if (!price){
        price = "暂无报价";
    }
    $("#summary-price .p-price,#mini-jd-price").html(price);
	if(new Number(r[0].m)>0){
		$("#summary-market").show();
		$("#page_maprice").html("￥"+r[0].m);
	}else{
		$("#summary-market").hide();
	}
    try{
        if(new Number(r[0].p)>0&&new Number(r[0].m)>0){
            var n = new Number(r[0].p)/new Number(r[0].m);
            n = new Number(n).toFixed(2)<n?parseInt(n*100)+1:parseInt(n*100);
            n = new Number(n/10).toFixed(1);
			if(pageConfig.product.isFlashPurchase||((pageConfig.product.skuid+"").length==10&&(pageConfig.product.cat[0]== 1713||pageConfig.product.cat[0]==4051||pageConfig.product.cat[0]==4052||pageConfig.product.cat[0]==4053))){
				$("#red-zhekou").html(n+"折");
			}
        }
    }catch(e){}
}
function setPriceData(skuid,area) {
    //$.getJSONP("http://p.3.cn/prices/get?skuid=J_"+skuid+"&type=1"+(area?"&area="+area:"")+"&callback=cnp");
}
function getAreaSkuState(skuid){
    if(!eleSkuIdKey) return warestatus;
    for (var i=0,j=eleSkuIdKey.length;i<j;i++){
        if (eleSkuIdKey[i].SkuId == skuid && eleSkuIdKey[i].state != undefined){
            return eleSkuIdKey[i].state;
        }
    }
    return 1;
}
//根据地区变换sku及相应信息
function getSkuId_new(cid,aid){
    if(eleSkuIdKey&&eleSkuIdKey.length>0){
        var areas = null;
        for (var i=0,j=eleSkuIdKey.length;i<j ;i++ ){
            if(eleSkuIdKey[i].area&&eleSkuIdKey[i].area[cid+""]){
                areas = eleSkuIdKey[i].area[cid+""];
                if (areas.length==0||areas[0]+""=="0"){
                    return eleSkuIdKey[i].SkuId;
                }
                else if (areas.length>0){
                    for(var a=0,b=areas.length;a<b;a++){
                        if(areas[a]+""==aid+""){
                            return eleSkuIdKey[i].SkuId;
                        }
                    }
                }
            }
        }
    }
    return 0;
}
function getCurrentSkuId(provinceId,cityId,areaId){
    var currentSkuId = pageConfig.product.skuid;
    if (isAreaProduct && provinceId > 0 && cityId > 0 && areaId > 0){
        currentSkuId = 0;
        if(eleRegion){
            var provinceCitys = eleRegion[provinceId+""];
            if (provinceCitys && provinceCitys.citys && provinceCitys.citys.length>0){
                for (var i=0,j=provinceCitys.citys.length; i<j; i++){
                    if (provinceCitys.citys[i].IdCity == cityId){
                        currentSkuId = provinceCitys.citys[i].SkuId;
                        break;
                    }
                }
            }
        }
        else{
            currentSkuId = getSkuId_new(cityId,areaId);
        }
    }
    return currentSkuId;
}
function chooseSkuToArea(provinceId,cityId,areaId){
    var currentSkuId = pageConfig.product.skuid;
    var currentSkuKey = pageConfig.product.skuidkey;
    if (isAreaProduct && provinceId > 0 && cityId > 0 && areaId > 0){
        currentSkuId = 0;
        currentSkuKey = "";
        if(eleRegion){
            var provinceCitys = eleRegion[provinceId+""];
            if (provinceCitys && provinceCitys.citys && provinceCitys.citys.length>0){
                for (var i=0,j=provinceCitys.citys.length; i<j; i++){
                    if (provinceCitys.citys[i].IdCity == cityId){
                        currentSkuId = provinceCitys.citys[i].SkuId;
                        break;
                    }
                }
            }
        }
        else{
            currentSkuId = getSkuId_new(cityId,areaId);
        }
        if (eleSkuIdKey&&eleSkuIdKey.length>0){
            for (var i=0,j=eleSkuIdKey.length;i<j;i++){
                if (eleSkuIdKey[i].SkuId == currentSkuId){
                    currentSkuKey = eleSkuIdKey[i].Key;
                    break;
                }
            }
        }
    }
    if (currentSkuId && currentSkuKey){
        if (currentSkuId == pageConfig.product.skuid){
            pageConfig.product.isChangeSku = false;
        }
        else{
            //变换地区后sku不同
            pageConfig.product.isChangeSku = true;
        }
    }
    //设定该商品上下柜状态
    warestatus = getAreaSkuState(currentSkuId);
    //上一次选择的sku
    pageConfig.product.prevSku = pageConfig.product.skuid;
    //变换到对应分区的sku
    pageConfig.product.skuid = currentSkuId;
    pageConfig.product.skuidkey = currentSkuKey;
    if (useAreaPrice&&!pricePageLoad){  //按地区加载价格且不是初始加载
        setPriceData(pageConfig.product.skuid,[provinceId,cityId,areaId].join("_")); //改变价格
    }
    pricePageLoad = false;
    return currentSkuKey;
}
function refreshPageInfos(){
    //setCXAdvertisement(pageConfig.product.skuid,pageConfig.product.skuidkey);//广告词
    try {
        if(window.fq_init)fq_init();
        if($("#Tip_apply").length>0&&fq_serverSite)$("#Tip_apply").attr("href",fq_serverSite + "ShoppingCart_fqInit.aspx?skuId=" + pageConfig.product.skuid + "&skuCount=1");//分期   
        $("#choose-btn-divide").html("");
        if(window.setIM)setIM();
    } catch (e) {
    }
}
function getTJAreaSku(r){
	$("#local-seller,#local-seller1,#jd-seller,#jd-seller1").remove();
    if(r&&r.resultCode==1&&r.skuId&&r.skuId!=pageConfig.product.skuid+''){
        //setCommonCookies(currentAreaInfo.currentProvinceId,currentLocation,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,0,true);
		if($("#ypds-list").length==0){
			if ($("#brand-bar-pop").length > 0){
				$('<div class="m fr" id="ypds-list"></div>').appendTo("#brand-bar-pop");
			}
			else{
				$('<div class="m fr" id="ypds-list"></div>').appendTo("#brand-bar");
			}
		}
		if((r.skuId+"").length==10){
			if($("#local-seller").length==0){
				$('<div class="mt" id="local-seller"><span class="fl"><b>本地在售卖家</b></span></div><div class="mc" id="local-seller1"><ul><li id="J_'+r.skuId+'"><div class="fl"><a target="_blank" href="http://item.jd.com/'
				+r.skuId+'.html" clstag="shangpin|keycount|product|yipinduoshang">太原唐久大卖场</a></div><div class="lh hl_red"></div></li></ul></div>').appendTo("#ypds-list");
				$.ajax({
					url:"http://p.3.cn/prices/get?skuid=J_"+r.skuId+"&type=1&area="+currentAreaInfo.currentProvinceId+"_"+currentAreaInfo.currentCityId+"_"+currentAreaInfo.currentAreaId,
					dataType:"jsonp",
					type:"get",
					success:function(r){
						if(r&&r.length>0){
							var price="暂无报价";
							if (new Number(r[0].p)>0){  
								price = "￥"+r[0].p;
							}
							$("#"+r[0].id+" .hl_red").html(price);
						}
					}
				});
			}
		}
		else{
			if($('#J_'+r.skuId).length>0)return;
			$('<div class="mt" id="jd-seller"><span class="fl"><b>其它在售卖家</b></span></div><div class="mc" id="jd-seller1"><ul><li id="J_'+r.skuId+'"><div class="fl"><a target="_blank" href="http://item.jd.com/'
			+r.skuId+'.html" clstag="shangpin|keycount|product|yipinduoshang">京东商城</a></div><div class="lh hl_red"></div></li></ul></div>').appendTo("#ypds-list");
			$.ajax({
				url:"http://p.3.cn/prices/get?skuid=J_"+r.skuId+"&type=1&area="+currentAreaInfo.currentProvinceId+"_"+currentAreaInfo.currentCityId+"_"+currentAreaInfo.currentAreaId,
				dataType:"jsonp",
				type:"get",
				success:function(r){
					if(r&&r.length>0){
						var price="暂无报价";
						if (new Number(r[0].p)>0){  
							price = "￥"+r[0].p;
						}
						$("#"+r[0].id+" .hl_red").html(price);
					}
				}
			});
		}
    }
}
pageConfig.product.stockExtraParam = "{\"originid\":\"1\"}";
//获取配送库存信息或下一级地址
function GetCurrentStock(){
	if($("#choose-type .item").length>0){	
		var data_id=$("#choose-type .selected").attr("data-id");
		var extraParam = "{\"originid\":\"1\"}";
		if(data_id&&data_id!="100"){
			extraParam="{\"originid\":\"1\",\"heYueJi\":\"1\"}";
		}
		if(pageConfig.product.stockExtraParam!=extraParam){
			pageConfig.product.stockExtraParamChange=true;
		}
		else{
			pageConfig.product.stockExtraParamChange=false;
		}
		if($("#choose-type .item").length>1||pageConfig.product.stockExtraParamChange){
			GetStockInfoOrNextAreas(pageConfig.product.skuidkey,currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId,0,pageConfig.product.cat[2],3,true);
		}
	}
}
function GetStockInfoOrNextAreas(skuKey,provinceId,cityId,areaId,townId,sortId,curLevel,choosetype){
        try{
            pageConfig.product.currentProvinceId = provinceId;
            currentAreaInfo.currentProvinceId = provinceId;
            currentAreaInfo.currentCityId = cityId;
            currentAreaInfo.currentAreaId = areaId;
            currentAreaInfo.currentTownId = townId;
            curLevel = new Number(curLevel);
            if (curLevel == requestLevel){
                currentAreaInfo.currentLevel = curLevel; //
                currentAreaInfo.currentRequestLevel = curLevel;  // 
                //分区商品需要找到分区对应的sku
                if (areaId > 0&&townId<=0){
                    skuKey = chooseSkuToArea(provinceId,cityId,areaId);
                }
                if(pageConfig.product.TJ=='1'&&provinceId>0&&cityId>0&&areaId>0){
                    $.getJSONP("http://d.360buy.com/goodsrelation/get?callback=getTJAreaSku&skuId="+pageConfig.product.skuid+"&provinceId="+provinceId+"&cityId="+cityId+"&countryId="+areaId);
                }
                pageConfig.product.skuidkey = skuKey;
                JdStockTabs.removeClass("curr").eq(curLevel-1).addClass("curr");
                JdStockTabs.find("a").removeClass("hover").eq(curLevel-1).addClass("hover");
                if (skuKey&&provinceId!=84&&warestatus==1){
					var data_id=$("#choose-type .selected").attr("data-id");
					var callbackMethod = "getStockCallback";
					var extraParam = "{\"originid\":\"1\"}";
					if(data_id&&data_id!="100"){
						extraParam="{\"originid\":\"1\",\"heYueJi\":\"1\"}";
					}
					pageConfig.product.stockExtraParam=extraParam;
					if(choosetype){
						callbackMethod = "getStockCallback1";
					}
					if(pageConfig.product.isLSP){
						$.getJSONP(stockServiceDomain+"/oto.html?callback="+callbackMethod+"&skuid="+pageConfig.product.skuid+"&provinceid="+provinceId+"&cityid="+cityId+"&areaid="+areaId+"&townid="+townId+"&vid="+pageConfig.product.venderId
						+"&sortid1="+pageConfig .product.cat[0]+"&sortid2="+pageConfig .product.cat[1]+"&sortid3="+pageConfig .product.cat[2]+"&extraParam="+extraParam);
					}
					else{
						$.getJSONP(stockServiceDomain+"/gds.html?callback="+callbackMethod+"&skuid="+skuKey+"&provinceid="+provinceId+"&cityid="+cityId+"&areaid="+areaId+"&townid="
                        +townId+"&sortid1="+pageConfig .product.cat[0]+"&sortid2="+pageConfig .product.cat[1]+"&sortid3="+pageConfig .product.cat[2]+"&extraParam="+extraParam);  
					}
                }
                else{
                    getStockCallback({"stock":{"IsPurchase":false,"ArrivalDate":null,"Ext":"","PopType":0,"StockStateName":"无货","code":1,"StockState":0}});
                }
				setCXAdvertisement(pageConfig.product.skuid, pageConfig.product.skuidkey);
				checkColorSizeStock(provinceId,cityId,areaId);
            }
            else if (curLevel < requestLevel){ //还需要获取下级地址
                currentAreaInfo.currentLevel = curLevel +1;
                JdStockTabs.removeClass("curr").eq(curLevel).addClass("curr");
                JdStockTabs.find("a").removeClass("hover").eq(curLevel).addClass("hover");
                getChildAreaHtml(arguments[curLevel],curLevel +1);
            }
        }catch(err){
        }
}
function setCommonCookies(provinceId,provinceName,cityId,areaId,townId,isWriteAdds){
//    setNewCookie("ipLocation", provinceName, 30, "/", locPageHost, false);
//    setNewCookie("areaId", provinceId, 10, "/", locPageHost, false);
//    var adds = provinceId+"-"+cityId+"-"+areaId+"-"+townId;
//    setNewCookie("ipLoc-djd", adds, 30, "/", locPageHost, false);
//    if (!isUseServiceLoc||!isWriteAdds){
//    }
//    else{
//        $.ajax({url:"http://uprofile.jd.com/u/setadds",type:"get",dataType:"jsonp",data:{adds:adds}});
//    }
}
//根据省份ID获取名称
function getNameById(provinceId){
    for(var o in iplocation){
        if (iplocation[o]&&iplocation[o].id==provinceId){
            return o;
        }
    }
    return "北京";
}
//初始化
var currentPageLoad = {"isLoad":true,"areaCookie":[1,72,0,0]};
//切换标签控件
var JdStockTabs = null;
var JdStockContents = null;
var provinceHtml = '<div data-widget="tabs" class="m JD-stock" id="JD-stock">'
                                +'<div class="mt">'
                                +'    <ul class="tab">'
                                +'        <li data-index="0" data-widget="tab-item" class="curr"><a href="#none" class="hover"><em>请选择</em><i></i></a></li>'
                                +'        <li data-index="1" data-widget="tab-item" style="display:none;"><a href="#none" class=""><em>请选择</em><i></i></a></li>'
                                +'        <li data-index="2" data-widget="tab-item" style="display:none;"><a href="#none" class=""><em>请选择</em><i></i></a></li>'
                                +'        <li data-index="3" data-widget="tab-item" style="display:none;"><a href="#none" class=""><em>请选择</em><i></i></a></li>'
                                +'    </ul>'
                                +'    <div class="stock-line"></div>'
                                +'</div>'
                                +'<div class="mc" data-area="0" data-widget="tab-content" id="stock_province_item">'
                                +'    <ul class="area-list">'
                                +'       <li><a href="#none" data-value="1">北京</a></li><li><a href="#none" data-value="2">上海</a></li><li><a href="#none" data-value="3">天津</a></li><li><a href="#none" data-value="4">重庆</a></li><li><a href="#none" data-value="5">河北</a></li><li><a href="#none" data-value="6">山西</a></li><li><a href="#none" data-value="7">河南</a></li><li><a href="#none" data-value="8">辽宁</a></li><li><a href="#none" data-value="9">吉林</a></li><li><a href="#none" data-value="10">黑龙江</a></li><li><a href="#none" data-value="11">内蒙古</a></li><li><a href="#none" data-value="12">江苏</a></li><li><a href="#none" data-value="13">山东</a></li><li><a href="#none" data-value="14">安徽</a></li><li><a href="#none" data-value="15">浙江</a></li><li><a href="#none" data-value="16">福建</a></li><li><a href="#none" data-value="17">湖北</a></li><li><a href="#none" data-value="18">湖南</a></li><li><a href="#none" data-value="19">广东</a></li><li><a href="#none" data-value="20">广西</a></li><li><a href="#none" data-value="21">江西</a></li><li><a href="#none" data-value="22">四川</a></li><li><a href="#none" data-value="23">海南</a></li><li><a href="#none" data-value="24">贵州</a></li><li><a href="#none" data-value="25">云南</a></li><li><a href="#none" data-value="26">西藏</a></li><li><a href="#none" data-value="27">陕西</a></li><li><a href="#none" data-value="28">甘肃</a></li><li><a href="#none" data-value="29">青海</a></li><li><a href="#none" data-value="30">宁夏</a></li><li><a href="#none" data-value="31">新疆</a></li><li><a href="#none" data-value="32">台湾</a></li><li><a href="#none" data-value="42">香港</a></li><li><a href="#none" data-value="43">澳门</a></li><li><a href="#none" data-value="84">钓鱼岛</a></li>'
                                +'    </ul>'
                                +'</div>'
                                +'<div class="mc" data-area="1" data-widget="tab-content" id="stock_city_item"></div>'
                                +'<div class="mc" data-area="2" data-widget="tab-content" id="stock_area_item"></div>'
                                +'<div class="mc" data-area="3" data-widget="tab-content" id="stock_town_item"></div>'
                                +'</div>';
var mouseEventChange = false;
function resetBindMouseEvent(){
    if (!mouseEventChange&&!currentPageLoad.isLoad){
        mouseEventChange = true;
        $("#store-selector").unbind("mouseout");
        $("#store-selector").unbind("mouseover").bind("mouseover",function(){
            $("#store-selector").addClass("hover");
        });
    }
}
function reBindStockEvent(){
    $("#store-selector").removeClass("hover");
    //mouseEventChange = false;
    /*$("#store-selector").unbind("mouseout").bind("mouseout",function(){
        $("#store-selector").removeClass("hover");
    });*/
}
var pricePageLoad = false; //是否已经初始化加载价格
var useAreaPrice = true;
function getStockInfoByArea(ipLoc){//获取地区库存
    if(!ipLoc){
        ipLoc = getCookie("ipLoc-djd");
    }
    currentPageLoad.notSet = false;
    if (!ipLoc) {
        currentPageLoad.notSet = true;
    }
    ipLoc = ipLoc?ipLoc.split("-"):[1,72,0,0];
    if (useAreaPrice&&ipLoc.length>2&&new Number(ipLoc[2])>0){
        pricePageLoad = true;
        setPriceData(getCurrentSkuId(ipLoc[0],ipLoc[1],ipLoc[2]),[ipLoc[0],ipLoc[1],ipLoc[2]].join("_")); //初始化加载价格
    }
    currentPageLoad.areaCookie = ipLoc;
    currentAreaInfo.currentProvinceName = getNameById(ipLoc[0]);
    currentLocation = currentAreaInfo.currentProvinceName;
    var province = iplocation[currentLocation];
    province = province?province:{ id: "1", root: 0, djd: 1,c:72 };
    currentAreaInfo.currentProvinceId = province.id;
    JdStockTabs.eq(0).find("em").html(currentAreaInfo.currentProvinceName);
    GetStockInfoOrNextAreas(pageConfig.product.skuidkey,province.id,0,0,0,pageConfig.product.cat[2],1);
}
var isUseServiceLoc = true; //是否默认使用服务端地址
(function(){
    if($(".product-intro-itemover").length>0){
        if(window.noItemOver)noItemOver.init(pageConfig.product.type);
        return;
    }
    CurrentAreaInfoInit();
    initrequestLevel();
    $(provinceHtml).insertBefore("#store-selector .content .clr");
    $("#store-selector").mouseover(function(){$(this).addClass("hover");}).mouseout(function(){$(this).removeClass("hover");}); 
    JdStockTabs = $("#JD-stock .tab li");
    JdStockContents = $("#JD-stock div[data-widget='tab-content']");
    JdStockTabs.bind('click',function(){
        var level = $(this).attr("data-index");
        level = new Number(level);
        JdStockTabs.removeClass("curr").eq(level).addClass("curr");
        JdStockTabs.find("a").removeClass("hover").eq(level).addClass("hover");
        JdStockContents.hide().eq(level).show();
    });
	var ipLocTmp = getCookie("ipLoc-djd");
	if (ipLocTmp){
		//getStockInfoByArea(ipLocTmp);
	}
	else{
//		if (isUseServiceLoc){
//			try{
//				$.ajax({
//					url:"http://uprofile.jd.com/u/getadds",
//					type:"get",
//					dataType:"jsonp",
//					timeout:500,
//					success:function(r){
//						if (r&&r.adds&&r.adds!="null"){
//							var ipLoc = r.adds;
//							getStockInfoByArea(ipLoc);
//							ipLoc = ipLoc.split("-");
//							var province=0,city=0,area=0,town=0,proName='';
//							if(ipLoc[0]&&new Number(ipLoc[0])>0){
//								province = ipLoc[0];
//								proName = getNameById(province);
//								if(ipLoc[1]&&new Number(ipLoc[1])>0){
//									city = ipLoc[1];
//									if(ipLoc[2]&&new Number(ipLoc[2])>0){
//										area = ipLoc[2];
//										if(ipLoc[3]&&new Number(ipLoc[3])>0){
//											town = ipLoc[3];
//										}
//									}
//								}
//								setCommonCookies(province,proName,city,area,town,false);
//							}
//						}
//						else{
//							getStockInfoByArea(null);
//						}
//					},
//					error:function(XMLHttpRequest, textStatus, errorThrown){
//						getStockInfoByArea(null);
//					}
//				});
//			}catch(e){}
//		}
	}
    $("#stock_province_item a").unbind("click").click(function() {
        currentPageLoad.isLoad = false;
        resetBindMouseEvent();
        try{
            CurrentAreaInfoInit();
            currentAreaInfo.currentProvinceId = $(this).attr("data-value");
            currentAreaInfo.currentProvinceName = $(this).html();
            currentLocation = currentAreaInfo.currentProvinceName;
            JdStockTabs.eq(0).find("em").html(currentAreaInfo.currentProvinceName);
            initrequestLevel();
            GetStockInfoOrNextAreas(pageConfig.product.skuidkey,currentAreaInfo.currentProvinceId,0,0,0,pageConfig .product.cat[2],1);
        }
        catch (err){
        }
    }).end();
    $("#store-selector .close").unbind("click").bind("click",function(){
        reBindStockEvent();
    });
    //服务信息
})();
/*#$%#@!%*/
(function(iplocation){
    var serializeUrlCommon=function(url) {
        var sep = url.indexOf('?'),
            link = url.substr( 0, sep),
            params = url.substr( sep+1 ),
            paramArr = params.split('&'),
            len = paramArr.length,i,
            res = {},curr,key,val;

        for ( i=0; i<len; i++) {
            curr = paramArr[i].split('=');
            key = curr[0];
            val = curr[1];

            res[key] = val;
        }

        return {
            url: link,
            param: res
        }
    };
    if ( /storeAddressId/.test(location.href)) {
            // 拿url上storeAddressId的值，写入cookie
            var url=serializeUrlCommon(location.href);
            if (url.param['storeAddressId']){
                var pca=url.param['storeAddressId'].split('_');
                if(pca){
                    var proname="";
                    var area="";
                    if(pca[0] && parseInt(pca[0]) == pca[0]) {
                        for(var o in iplocation){
                            if(iplocation[o].id==pca[0]){
                                proname=o;
                                area=pca[0];
                                break;
                            }
                        }
                    }
                    if(pca[1] && parseInt(pca[1]) == pca[1] && parseInt(pca[1])>0) {
                        area += "-"+pca[1];
                    }
                    else if(area){
                        area += "-0";
                    }
                    if(pca[2] && parseInt(pca[2]) == pca[2] && parseInt(pca[2])>0) {
                        area += "-"+pca[2];
                    }
                    else if(area){
                        area += "-0";
                    }
                    if(proname){
                        setNewCookie("ipLocation", proname, 30, "/", locPageHost, false);
                    }
                    if(area){
                        setNewCookie("ipLoc-djd", area, 30, "/", locPageHost, false);
                    }
                }
            }
    }
})(iplocation);
// 标题广告词
function setproductad(r){
    if (r&&r.length>0){
		if($("#sku_adwords").length==0){
			$("#name strong").append("<div id=\"sku_adwords\"></div>");
		}
        $("#sku_adwords").html(r[0].ad?r[0].ad:"");
    }
}
function setproductadwords(r){
    if (r&&r.AdWordList&&r.AdWordList.length>0&&r.AdWordList[0]){
		if($("#sku_adwords").length==0){
			$("#name strong").append("<div id=\"sku_adwords\"></div>");
		}
        $("#sku_adwords").html(r.AdWordList[0].waretitle?r.AdWordList[0].waretitle:"");
    }
}
function setCXAdvertisement(skuid, skuidkey) {  
//    $("#sku_adwords").html("");
//    $.getJSONP("http://ad.3.cn/ads/mgets?skuids=AD_"+skuid+"&areaCode="+[currentAreaInfo.currentProvinceId,currentAreaInfo.currentCityId,currentAreaInfo.currentAreaId].join("_")+"&callback=setproductad");
}
//setCXAdvertisement(pageConfig.product.skuid, pageConfig.product.skuidkey); 
//颜色尺码
var cur_same_colorsize_stock={};
cur_same_colorsize_stock.check=(pageConfig.product.urlskuid+"").length==10&&"1318|1315".indexOf(pageConfig.product.cat[0]+"")>-1;
cur_same_colorsize_stock.load=0;
cur_same_colorsize_stock.skusinit=0;
cur_same_colorsize_stock.choose=0;
var choose_color=$("#choose-color a");var choose_colori=$("#choose-color .item");
var choose_version=$("#choose-version .item");
var alert_choose_version=$("#choose-version .dt").html();alert_choose_version=alert_choose_version?alert_choose_version.replace("：",""):"";
var alert_choose_color=$("#choose-color .dt").html();alert_choose_color=alert_choose_color?alert_choose_color.replace("：",""):"";
var alert_choose="所选"+alert_choose_color.replace("选择","")+"该"+alert_choose_version.replace("选择","")+"商品在该地区无货";
var alert_choose1="所选"+alert_choose_version.replace("选择","")+"该"+alert_choose_color.replace("选择","")+"商品在该地区无货";
var csobj={};var scobj={};
var checkColorSize=function(){},changeColorSize=function(){};
var only_one_color=null,only_one_size=null;
if(choose_color.length>0||choose_version.length>0){
    if(ColorSize&&ColorSize.length>0){
        var cs=null;
        for (var i=0,j=ColorSize.length;i<j;i++){
			if(!ColorSize[i].Color){ColorSize[i].Color=" "}
			if(!ColorSize[i].Size){ColorSize[i].Size=" "}
            cs=ColorSize[i];
            if(!csobj[cs.Color])csobj[cs.Color]={};
            csobj[cs.Color][cs.Size]=cs.SkuId;
            if(!scobj[cs.Size])scobj[cs.Size]={};
            scobj[cs.Size][cs.Color]=cs.SkuId;
        }
		if(choose_color.length==0){
			only_one_color=ColorSize[0].Color;
		}
		if(choose_version.length==0){
			only_one_size=ColorSize[0].Size;
		}
    }
    checkColorSize=function(c,s){
        if(csobj[c]&&csobj[c][s]){
			if(cur_same_colorsize_stock[csobj[c][s]+""]&&cur_same_colorsize_stock[csobj[c][s]+""].stock==34){
				return 0;
			}
            return csobj[c][s];
		}
        return 0;
    }
    changeColorSize=function(flag){
        var cur_color=$("#choose-color .selected a").attr("title");
		if(only_one_color){
			cur_color=only_one_color;
		}
        if(cur_color&&csobj[cur_color]){
            var version=null;
            var choose_version_obj=null;
            for(var i=0,j=choose_version.length;i<j;i++){
                choose_version_obj=$(choose_version[i]).find("a").eq(0);
                version=choose_version_obj.text();
                if(!(version&&csobj[cur_color][version])
					||((csobj[cur_color][version]!=pageConfig.product.urlskuid||cur_same_colorsize_stock.choose)
					&&cur_same_colorsize_stock[csobj[cur_color][version]+""]&&cur_same_colorsize_stock[csobj[cur_color][version]+""].stock==34)){
                    $(choose_version[i]).attr("class","item disabled");
                    $(choose_version[i]).find("b").hide();
                    choose_version_obj.css("cursor","not-allowed").attr("title",alert_choose);
                }
                else{
                    if($(choose_version[i]).attr("class")=="item disabled")$(choose_version[i]).attr("class","item");
                    $(choose_version[i]).find("b").show();
                    choose_version_obj.css("cursor","pointer").attr("title",choose_version_obj.text());
                }
                $(choose_version[i]).find("i").remove();
            }
        }
        var cur_version = $("#choose-version .selected a").text();
		if(only_one_size){
			cur_version=only_one_size;
		}
        if(cur_version&&scobj[cur_version]){
            var color=null;
			var choose_color_obj=null;
            for(var i=0,j=choose_colori.length;i<j;i++){
				choose_color_obj=$(choose_colori[i]).find("a").eq(0);
                color=$($(choose_colori[i]).find("a")[0]).attr("title");
                if(!(color&&scobj[cur_version][color])
					||(scobj[cur_version][color]!=pageConfig.product.urlskuid
					&&cur_same_colorsize_stock[scobj[cur_version][color]+""]&&cur_same_colorsize_stock[scobj[cur_version][color]+""].stock==34)){
                    $(choose_colori[i]).attr("class","item disabled");
                    $(choose_colori[i]).find("b").hide();
					if(only_one_size){choose_color_obj.css("cursor","not-allowed").attr("title",alert_choose);}
                }
                else{
                    if($(choose_colori[i]).attr("class")=="item disabled")$(choose_colori[i]).attr("class","item");
                    $(choose_colori[i]).find("b").show();
                }
            }
        }
        else{
            $("#choose-color .disabled").attr("class","item");
        }
        $("<i></i>").insertBefore("#choose-version .disabled a");
		$("#choose-result").show().find(".dd").html("<em>已选择</em>"+(cur_color&&cur_color!=" "?"<strong>“"+cur_color+"”</strong>":"")+(cur_color&&cur_color!=" "&&cur_version&&cur_version!=" "?"，":"")+(cur_version&&cur_version!=" "?"<strong>“"+cur_version+"”</strong>":"")
			+(cur_color?"":"<span class='item-warnning'><s></s>请"+alert_choose_color+"</span>")+(cur_version?"":"<span class='item-warnning'><s></s>请"+alert_choose_version+"</span>"));
		if(!cur_color){
			$("#choose-color").addClass("item-hl-bg");
		}
		else{
			$("#choose-color").removeClass("item-hl-bg");
		}
		if(!cur_version){
			$("#choose-version").addClass("item-hl-bg");
		}
		else{
			$("#choose-version").removeClass("item-hl-bg");
		}
        if(!flag){
            if($("#choose-noresult").length>0){$("#choose-noresult").remove();}
            $.easybuy_button.hide();
            $.divide_button.hide();
            $.notice_button.hide();
            if($.append_button.length>0)$.append_button.attr("href","#none").attr("onclick","").unbind("click"); //购物车
            if($(".nav-minicart-btn").length>0)$(".nav-minicart-btn").hide(); //mini购物车
            $("#choose-btn-subsidy").hide();
        }
    }	
    $("#choose-color a").attr("href","#none").unbind("click").click(function(){
        if($($(this).parent()).attr("class")=="item disabled"&&only_one_size)return;
		cur_same_colorsize_stock.choose=1;
        $("#choose-color .selected").attr("class","item");
        $($(this).parent()).attr("class","item selected");
        var c=$(this).attr("title");
        var s=$("#choose-version .selected a");
        if(s.length>0){s=s.text()}else{s=null}
		if(only_one_size){s=only_one_size}
        var sid=0;
        sid=checkColorSize(c,s);
        if(sid>0){window.location=sid+".html";}else{
            changeColorSize();
        }
    });
    $("#choose-version a").attr("href","#none").unbind("click").click(function(){
        if($($(this).parent()).attr("class")=="item disabled")return;
		cur_same_colorsize_stock.choose=1;
        var s=$(this).text();
        var c=$("#choose-color .selected a");
        if(c.length>0){c=c.attr("title")}else{c=null}
		if(only_one_color){c=only_one_color}
        var sid=0;
        sid=checkColorSize(c,s);
        if(sid>0){window.location=sid+".html";}else{
            changeColorSize();
        }
    });
}
var cur_same_colorsize = [];
function checkColorSizeStock(pid,cid,aid){
	if(window.ColorSize&&ColorSize.length>1){
		if(!cur_same_colorsize_stock.skusinit){
			for(var i=0,j=ColorSize.length;i<j;i++){
				if(ColorSize[i].SkuId+""==pageConfig.product.urlskuid+""){
					if ($("#choose-color .dd .selected").length==0){
						$("#choose-color a[title='"+ColorSize[i].Color+"']").parent().addClass(" selected");
					}
					if ($("#choose-version .dd .selected").length==0){
						$("#choose-version a[title='"+ColorSize[i].Size+"']").parent().addClass(" selected");
					}
				}
				cur_same_colorsize.push(ColorSize[i].SkuId+"");
			}
			cur_same_colorsize = cur_same_colorsize.join("");
			cur_same_colorsize_stock.skusinit=1;
		}
		if (cur_same_colorsize_stock.check){
			$.ajax({type:"get",dataType:"jsonp",url:stockServiceDomain+"/gsis.html",data:{"type":"multistocks","skuids":cur_same_colorsize,"provinceid":pid,"cityid":cid,"areaid":aid},success:function(r){
				for(var i=0,j=ColorSize.length;i<j;i++){
					if(r[ColorSize[i].SkuId+""]){
						ColorSize[i].stock=r[ColorSize[i].SkuId+""];
					}
					else{
						ColorSize[i].stock = 33;
					}
					cur_same_colorsize_stock[ColorSize[i].SkuId+""]=ColorSize[i];
				}
				changeColorSize(true);
				cur_same_colorsize_stock.load=1;
			}});
		}
		else {
			if(!cur_same_colorsize_stock.load){
				changeColorSize(true);
				cur_same_colorsize_stock.load=1;
			}
		}
	}
}
/******************/
var spuSort={"1316":"1-个护化妆","1620":"1-家居家装","5025":"1-钟表","6219":"2-水具酒具","6233":"1-玩具乐器","6994":"1-宠物生活","6196":"1-厨具","1319":"1-母婴","1320":"1-食品饮料、保健食品",
			"1315":"1-服饰内衣","4837":"3-办公文具","1466":"2-体育娱乐","1467":"2-成人用品","1463":"2-运动器械","6728":"1-汽车用品","1713":"1-图书"};
if(true&&(spuSort[pageConfig.product.cat[0]+""]||spuSort[pageConfig.product.cat[1]+""]||spuSort[pageConfig.product.cat[2]+""])){
var spuServiceUrl = "http://spu.jd.com/json.html?cond=";
var spuPageUrl = "http://spu.jd.com/"+pageConfig.product.skuid+".html";
function showProvinceStockDeliver(r){
    if(!r||r.totalCount<2)return;
	if($("#ypds-list").length==0){
		if ($("#brand-bar-pop").length > 0){
			$('<div class="m fr" id="ypds-list"></div>').appendTo("#brand-bar-pop");
		}
		else{
			$('<div class="m fr" id="ypds-list"></div>').appendTo("#brand-bar");
		}
	}
    var spuVenderInfos = '';
    var topCount = 0;
	var cutCount = 0;
    for (var i=0,j=r.skuStockVenders.length;i<j;i++){
        if (pageConfig.product.skuid+"" != r.skuStockVenders[i].skuId && topCount < 3){
			if(r.skuStockVenders[i].venderId==46875){ //屏蔽TJ
				cutCount ++;
			}
			else{
				spuVenderInfos += '<li id="J_'+r.skuStockVenders[i].skuId+'"><div class="fl"><a href="http://item.jd.com/'+r.skuStockVenders[i].skuId+'.html" clstag="shangpin|keycount|product|yipinduoshang" target="_blank">'+((r.skuStockVenders[i].venderId&&(r.skuStockVenders[i].skuId+"").length==10)?r.skuStockVenders[i].venderName:'京东商城')+'</a></div><div class="lh hl_red"></div></li>';				
				if($('#jd-seller1 #J_'+r.skuStockVenders[i].skuId).length>0)$("#jd-seller,#jd-seller1").remove();
				topCount ++;
			}
        }
    }
    $('<div id="ypds-info"><a href="'+spuPageUrl+'" class="hl_blue" target="_blank">'+(r.totalCount-cutCount)+'个卖家在售</a><span class="hl_red">\u3000￥'+(r.minPrice+"")+'</span> 起</div>').insertAfter("#choose"); 
    spuVenderInfos = '<div class="mt"><span class="fl"><b>'+(pageConfig.product.cat[0]==1713?('<a href="'+spuPageUrl+'" target="_blank"><font style="color:#005EA7">'+(r.totalCount-cutCount)+'个卖家在售</font></a>'):'其他在售卖家')+'</b></span><span class="extra"><a href="'
                          +spuPageUrl+'" class="hl_blue" target="_blank">查看全部</a></span></div><div class="mc"><ul>'+spuVenderInfos;
    spuVenderInfos += '</ul></div>';
    $(spuVenderInfos).appendTo("#ypds-list");
    var sellerArray = $("#ypds-list li");
	var skuIds = [];
    for (var i=0,j=sellerArray.length;i<j;i++){
		skuIds.push(sellerArray.eq(i).attr("id"));
    }
	if(skuIds.length>0){
		$.ajax({
				url:"http://p.3.cn/prices/mgets?callback=?",
				data:{skuIds:skuIds.join(","),type:1},
				dataType:"jsonp",
				success:function(r){
					if(r&&r.length>0){
						for (var i=0,j=r.length;i<j;i++){
							$("#"+r[i].id+" .hl_red").html(new Number(r[i].p)>0?("￥"+r[i].p):"暂无报价");
						}
					}
				}
			});
	}
}
(function(){
    $.getJSONP(spuServiceUrl+"1_4_1_0_0_"+(pageConfig.product.cat[0]==1713?"1":"0")+"_"+pageConfig.product.skuid+"_1&callback=showProvinceStockDeliver");
})();
}
(function(){if($("#product-detail-2 table tr").length>0)$("<div class='detail-correction'>"+$("#product-detail-1 .detail-correction").html()+"</div>").insertBefore("#product-detail-2 table");})();
/*****/
function changeSpPrice(id){
    var val=$("#"+id).val();
    var min=$("#sp-price").val();
    var max=$("#sp-price1").val();
    if(parseInt(val)>0&&parseInt(val)+""==val){
    }else{$("#"+id).val("");}
}
function getImgFullPath(skuid,src,type){
    if(src&&src.toUpperCase().indexOf("HTTP:")==-1){
        src = "http://img1"+(new Number(skuid))%5+".360buyimg.com/n"+type+"/"+src;
    }
    return src;
}
(function(){
    if(!window.itemShopJsona&&!window.itemShopJsonb)return;
    var shopTempArray=[];
    var leftDom = $("#related-sorts").parent();
    if(window.itemShopJsona&&itemShopJsona.searchLink){
        var shopSearchHtml='<div id="sp-search" class="m m2" clstag="shangpin|keycount|product|pop-03">'
                    +'<div class="mt"><h2>店内搜索</h2></div>'
                    +'<div class="mc">'
                        +'<p class="sp-form-item1"><label for="sp-keyword">关键字：</label><span><input type="text" id="sp-keyword"/ onkeydown="javascript:if(event.keyCode==13){pageConfig.searchClick(1);}"></span></p>'
                        +'<p class="sp-form-item2"><label for="sp-price">价&#x3000;格：</label><span><input type="text" id="sp-price" onkeyup="changeSpPrice(\'sp-price\');" onkeydown="javascript:if(event.keyCode==13){pageConfig.searchClick(1);}"/> 到 <input type="text" id="sp-price1" onkeyup="changeSpPrice(\'sp-price1\');" onkeydown="javascript:if(event.keyCode==13){pageConfig.searchClick(1);}"/></span></p>'
                        +'<p class="sp-form-item3"><label for="">&#x3000;&#x3000;&#x3000;</label><span><input type="submit" value="搜索" id="btnShopSearch"/></span></p>'
                    +'</div>'
                +'</div>';
        shopTempArray.push(shopSearchHtml);
    }
    if(window.itemShopJsonb&&itemShopJsonb.shopCategory&&itemShopJsonb.shopCategory.length>0){
        var shopSortsHtml='<div id="sp-category" class="m m2" clstag="shangpin|keycount|product|pop-04">'
                +'<div class="mt"><h2>店内分类</h2></div>'
                +'<div class="mc">{content}</div>'
            +'</div>';
        var categoryContent=[];
        for (var i=0,j=itemShopJsonb.shopCategory.length;i<j;i++){
            categoryContent.push("<dl><dt"+((itemShopJsonb.shopCategory[i].childs&&itemShopJsonb.shopCategory[i].childs.length>0)?"":" class='sp-single'")
                +"><a href='"+(itemShopJsonb.shopCategory[i].url?itemShopJsonb.shopCategory[i].url:"#none")+"' target='_blank'><s></s>"+itemShopJsonb.shopCategory[i].title+"</a></dt>");
            if(itemShopJsonb.shopCategory[i].childs&&itemShopJsonb.shopCategory[i].childs.length>0){
                for (var t=0,h=itemShopJsonb.shopCategory[i].childs.length;t<h;t++){
                    categoryContent.push("<dd><a href='"+(itemShopJsonb.shopCategory[i].childs[t].url?itemShopJsonb.shopCategory[i].childs[t].url:"#none")+"' target='_blank'>"+itemShopJsonb.shopCategory[i].childs[t].title+"</a></dd>");
                }
            }
            categoryContent.push("</dl>");
        }
        shopTempArray.push(shopSortsHtml.replace("{content}",categoryContent.join("")));
    }
    if(window.itemShopJsonb&&itemShopJsonb.hotSale&&itemShopJsonb.hotSale.length==5){
        var shopHotSaleHtml='<div id="sp-hot-sale" class="m m2 m3" clstag="shangpin|keycount|product|pop-05">'
                    +'<div class="mt"><h2>热门销售</h2>'
                    +'</div>'
                    +'<div class="mc"><ul>{content}</ul></div>'
                +'</div>';
        var hotSaleContent=[];
        for (var i=0,j=itemShopJsonb.hotSale.length;i<j;i++){
            hotSaleContent.push('<li class="fore'+(i+1)+'">'
                            +'<div class="p-img"><a href="http://item.jd.com/'+itemShopJsonb.hotSale[i].skuId+'.html" title="'+itemShopJsonb.hotSale[i].goodsName+'" target="_blank"><img alt="'+itemShopJsonb.hotSale[i].goodsName+'" data-lazyload="'+getImgFullPath(itemShopJsonb.hotSale[i].skuId,itemShopJsonb.hotSale[i].goodsImg,2)+'"></a></div>'
                            +'<div class="p-name"><a href="http://item.jd.com/'+itemShopJsonb.hotSale[i].skuId+'.html" target="_blank" title="'+itemShopJsonb.hotSale[i].goodsName+'">'+itemShopJsonb.hotSale[i].goodsName+'</a></div>'
                            +'<div class="p-info p-bfc">'
                                +'<div class="p-count fl"><s>'+(i+1)+'</s><b>热销'+itemShopJsonb.hotSale[i].saleCount+'件</b></div>'
                                +'<div class="p-price fr"><strong p="J_'+itemShopJsonb.hotSale[i].skuId+'"></strong></div>'
                            +'</div></li>');
        }
        shopTempArray.push(shopHotSaleHtml.replace("{content}",hotSaleContent.join("")));
    }
    if(window.itemShopJsonb&&itemShopJsonb.hotFocus&&itemShopJsonb.hotFocus.length==5){
        var shopHotFocusHtml='<div id="sp-hot-fo" class="m m2 m3" clstag="shangpin|keycount|product|pop-06">'
                    +'<div class="mt"><h2>热门关注</h2></div>'
                    +'<div class="mc"><ul>{content}</ul></div>'
                +'</div>';
        var hotFocusContent=[];
        for (var i=0,j=itemShopJsonb.hotFocus.length;i<j;i++){
            hotFocusContent.push('<li class="fore'+(i+1)+'">'
                            +'<div class="p-img"><a href="http://item.jd.com/'+itemShopJsonb.hotFocus[i].skuId+'.html" title="'+itemShopJsonb.hotFocus[i].goodsName+'" target="_blank"><img alt="'+itemShopJsonb.hotFocus[i].goodsName+'" data-lazyload="'+getImgFullPath(itemShopJsonb.hotFocus[i].skuId,itemShopJsonb.hotFocus[i].goodsImg,2)+'"></a></div>'
                            +'<div class="p-name"><a href="http://item.jd.com/'+itemShopJsonb.hotFocus[i].skuId+'.html" target="_blank" title="'+itemShopJsonb.hotFocus[i].goodsName+'">'+itemShopJsonb.hotFocus[i].goodsName+'</a></div>'
                            +'<div class="p-info p-bfc">'
                                +'<div class="p-count fl"><s>'+(i+1)+'</s><b>'+itemShopJsonb.hotFocus[i].focusCount+'人关注</b></div>'
                                +'<div class="p-price fr"><strong p="J_'+itemShopJsonb.hotFocus[i].skuId+'"></strong></div>'
                            +'</div></li>');
        }
        shopTempArray.push(shopHotFocusHtml.replace("{content}",hotFocusContent.join("")));
    }
    if(window.itemShopJsona&&itemShopJsona.shopRec&&itemShopJsona.shopRec.length>0){
        var shopRecommHtml='<div id="sp-reco" class="m m2 m3" clstag="shangpin|keycount|product|pop-07">'
                    +'<div class="mt"><h2>店长推荐</h2></div>'
                    +'<div class="mc"><ul>{content}</ul></div>'
                +'</div>';
        var shopRecContent=[];
        for (var i=0,j=itemShopJsona.shopRec.length;i<j;i++){
            shopRecContent.push('<li class="fore'+(i+1)+'">'
                            +'<div class="p-img"><a href="http://item.jd.com/'+itemShopJsona.shopRec[i].skuId+'.html" title="'+itemShopJsona.shopRec[i].goodsName+'" target="_blank"><img alt="'+itemShopJsona.shopRec[i].goodsName+'" data-lazyload="'+getImgFullPath(itemShopJsona.shopRec[i].skuId,itemShopJsona.shopRec[i].goodsImg,2)+'"></a></div>'
                            +'<div class="p-name"><a href="http://item.jd.com/'+itemShopJsona.shopRec[i].skuId+'.html" target="_blank" title="'+itemShopJsona.shopRec[i].goodsName+'">'+itemShopJsona.shopRec[i].goodsName+'</a></div>'
                            +'<div class="p-info p-bfc">'
                               // +'<div class="p-count fl"></div>'
                                +'<div class="p-price"><strong p="J_'+itemShopJsona.shopRec[i].skuId+'"></strong></div>'
                            +'</div></li>');
        }
        shopTempArray.push(shopRecommHtml.replace("{content}",shopRecContent.join("")));
    }
    if(window.itemShopJsona&&itemShopJsona.shopAd){
        shopTempArray.push('<div id="sp-ad" class="m" clstag="shangpin|keycount|product|pop-08"><a href="'+itemShopJsona.shopAd.adUrl+'" target="_blank" title="'+itemShopJsona.shopAd.title+'"><img data-lazyload="'+itemShopJsona.shopAd.adImg+'" alt="'+itemShopJsona.shopAd.title+'"/></a></div>');
    }
    if(shopTempArray.length>0){
        leftDom.eq(0).html("").prepend(shopTempArray.join(""));
        pageConfig.searchClick=function(type){
            var keyword=$("#sp-keyword").val();
            if(keyword){keyword=encodeURIComponent(encodeURIComponent(keyword));}
            var minprice=$("#sp-price").val();
            var maxprice=$("#sp-price1").val();
            if (keyword||minprice||maxprice){
                window.open(itemShopJsona.searchLink+"?orderBy=5&keyword="+keyword+"&minPrice="+minprice+"&maxPrice="+maxprice,"_blank");
            }
            else{
                if(type == 1) return;
                window.open(itemShopJsona.searchLink+"?orderBy=5","_blank");
            }
        };
        $("#btnShopSearch").click(pageConfig.searchClick);
        $("#sp-hot-sale img").Jlazyload({type:"image",placeholderClass:"err-product"});
        $("#sp-hot-fo img").Jlazyload({type:"image",placeholderClass:"err-product"});
        $("#sp-reco img").Jlazyload({type:"image",placeholderClass:"err-product"});
        $("#sp-ad img").Jlazyload({type:"image"});
        var containers=$("#sp-hot-sale,#sp-hot-fo,#sp-reco");
        var priceDoms=containers.find(".p-price strong");
        var pids=[];
        for(var i=0,j=priceDoms.length;i<j;i++){
            pids.push(priceDoms.eq(i).attr("p"));
        }
        $.ajax({type:"get",
                dataType:"jsonp",
                url:"http://p.3.cn/prices/mgets",
                data:{type:1,skuIds:pids.join(",")},
                success:function(r){
                    if(r&&r.length>0){
                        for(var i=0,j=r.length;i<j;i++){
                            containers.find("strong[p='"+r[i].id+"']").html(new Number(r[i].p)>0?("￥"+r[i].p):"暂无报价");
                        }
                    }
                }
        });
    }
})();
var turl=$("#product-detail-5 .item-detail a:last").attr("href"); 
if(turl&&$("#product-detail-5 .link_1:last").html()=='请点击这儿查询......'){$("#product-detail-5 .link_1:last").attr("href",turl);}
if($(".right div[id='comment']").length==2)$(".right div[id='comment']").eq(1).remove();
if(typeof jsf=='undefined'||!jsf)jsf={};
if((pageConfig.product.skuid+"").length==6||(pageConfig.product.skuid+"").length==7){
	jsf.loadScript = function (url, callback){
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		script.onreadystatechange = callback;
		script.onload = callback;
		head.appendChild(script);
	}
//	$.ajax({type:"get",
//			dataType:"jsonp",
//			url:"http://x.jd.com/ShowInterface?ad_ids=57:1&urlcid3="+pageConfig.product.cat[2]+"&ad_type=8&spread_type=1&debug=0&location_info=0",
//			success:function(data){
//				 if (data) {
//					if (data.errcode == 0) {
//						try{
//							$('<div id="ad_market_1" class="m"></div>').appendTo(".left:first");
//							var el = document.getElementById('ad_market_1');
//							var data2 =/<script type=\"text\/javascript\">(.*?)<\/script>/gim.exec(data.data);
//							if (data2) {
//								var data3 = data2[1];
//								var dataHtml = data.data.replace(/<script type=\"text\/javascript\">.*?<\/script>/gmi,'');
//								el.innerHTML = dataHtml;
//								eval(data3);
//							}else {
//								el.innerHTML = data.data;
//							}
//							if (data.scriptsrc) {
//								jsf.loadScript(data.scriptsrc);
//							}
//						}catch (e){}
//					}
//				}
//			}
//	});
}
if((pageConfig.product.skuid+"").length==10&&(pageConfig.product.cat[0]==9847||pageConfig.product.cat[1]==1621)){
	var obj=$("#product-detail-1 .detail-list li");obj.eq(4).hide();
	if(pageConfig.product.cat[1]==1621){
		var closeShow={"尺寸":1,"被子重量":1,"适用床尺寸":1,"适用床品规格":1,"厚度":1,"规格尺寸":1,"毯子尺寸":1};
		for(var i=6,j=obj.length;i<j;i++){
			var s=obj.eq(i).html();if(closeShow[s.substr(0,s.indexOf("：")).trim()]){obj.eq(i).hide();}
		}
	}
}