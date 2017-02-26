 /*
 item.jd.com Compressed by uglify 
 Author:keelii 
 Date: 2014-10-21 5:57:53 [PM] 
 */
function insertScript(t, e) {
    var i = document.getElementsByTagName("head")[0], s = document.createElement("script");
    if (s.setAttribute("type", "text/javascript"), e)
        for (var a in e)
            e.hasOwnProperty(a) && s.setAttribute(a, e[a]);
    s.setAttribute("src", t), i.appendChild(s)
}
function onNumChange() {
    var t = Number($("#buy-num").val()), e = $("#gift-tips a"), i = e.attr("href");
    e.length && e.attr("href", i.replace(/pcount=\d+/, "pcount=" + t))
}
function sendRequest(t) {
    var e = new Image;
    e.setAttribute("src", t), e = null
}
function strtotime(t, e) {
    function i(t, e, i) {
        var s, a = c[e];
        a !== void 0 && (s = a - r.getDay(), 0 === s ? s = 7 * i : s > 0 && "last" === t ? s -= 7 : 0 > s && "next" === t && (s += 7), r.setDate(r.getDate() + s))
    }
    function s(t) {
        var e = t.split(" "), s = e[0], a = e[1].substring(0, 3), n = /\d+/.test(s), o = "ago" === e[2], c = ("last" === s ? -1 : 1) * (o ? -1 : 1);
        if (n && (c *= parseInt(s, 10)), l.hasOwnProperty(a) && !e[1].match(/^mon(day|\.)?$/i))
            return r["set" + l[a]](r["get" + l[a]]() + c);
        if ("wee" === a)
            return r.setDate(r.getDate() + 7 * c);
        if ("next" === s || "last" === s)
            i(s, a, c);
        else if (!n)
            return !1;
        return !0
    }
    var a, n, o, r, c, l, d, p, m, u;
    if (!t)
        return null;
    if (t = t.replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase(), "now" === t)
        return null === e || isNaN(e) ? 0 | (new Date).getTime() / 1e3 : 0 | e;
    if (!isNaN(a = Date.parse(t)))
        return 0 | a / 1e3;
    if ("now" === t)
        return (new Date).getTime() / 1e3;
    if (!isNaN(a = Date.parse(t)))
        return a / 1e3;
    if (n = t.match(/^(\d{2,4})-(\d{2})-(\d{2})(?:\s(\d{1,2}):(\d{2})(?::\d{2})?)?(?:\.(\d+)?)?$/))
        return o = n[1] >= 0 && 69 >= n[1] ? +n[1] + 2e3 : n[1], new Date(o, parseInt(n[2], 10) - 1, n[3], n[4] || 0, n[5] || 0, n[6] || 0, n[7] || 0) / 1e3;
    if (r = e ? new Date(1e3 * e) : new Date, c = {sun: 0,mon: 1,tue: 2,wed: 3,thu: 4,fri: 5,sat: 6}, l = {yea: "FullYear",mon: "Month",day: "Date",hou: "Hours",min: "Minutes",sec: "Seconds"}, p = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)", m = "([+-]?\\d+\\s" + p + "|" + "(last|next)\\s" + p + ")(\\sago)?", n = t.match(RegExp(m, "gi")), !n)
        return !1;
    for (u = 0, d = n.length; d > u; u++)
        if (!s(n[u]))
            return !1;
    return r.getTime() / 1e3
}
function mktime() {
    var t = new Date, e = arguments, i = 0, s = ["Hours", "Minutes", "Seconds", "Month", "Date", "FullYear"];
    for (i = 0; s.length > i; i++)
        if (e[i] === void 0)
            e[i] = t["get" + s[i]](), e[i] += 3 === i;
        else if (e[i] = parseInt(e[i], 10), isNaN(e[i]))
            return !1;
    return e[5] += e[5] >= 0 ? 69 >= e[5] ? 2e3 : 100 >= e[5] ? 1900 : 0 : 0, t.setFullYear(e[5], e[3] - 1, e[4]), t.setHours(e[0], e[1], e[2]), (t.getTime() / 1e3 >> 0) - (0 > t.getTime())
}
function monthDay(t, e) {
    var i, s, a, n = new Date(1e3 * t), o = new Date(1e3 * e), r = n.getFullYear(), c = n.getMonth() + 1, l = n.getDate(), d = o.getFullYear(), p = o.getMonth() + 1, m = o.getDate(), u = "", h = 12 * (d - r) + p - c;
    return i = Math.floor(h / 12), s = h % 12, s = 0 === s - Math.floor(s) ? s + 1 : s, a = (mktime(0, 0, 0, p, m, d) - mktime(0, 0, 0, p, l, d)) / 86400, 0 > a && (s -= 1), 0 > s && (i -= 1), i > 0 && (u += i + "\u5e74"), s > 0 && (u += s + "\u4e2a\u6708"), u
}
function el_top_middle(t, e, i) {
    var s = t.outerWidth(), a = t.outerHeight();
    e && (s = e), i && (a = i);
    var n = function() {
    };
    n.doc = function() {
        return "BackCompat" == document.compatMode ? document.body : document.documentElement
    }, n.clientWidth = function() {
        return n.doc().clientWidth
    }, n.clientHeight = function() {
        return n.doc().clientHeight
    }, n.docWidth = function() {
        return Math.max(n.doc().clientWidth, n.doc().scrollWidth)
    }, n.docHeight = function() {
        return Math.max(n.doc().clientHeight, n.doc().scrollHeight)
    };
    var o = n.docHeight() != n.clientHeight() ? 16 : 0, r = $(document).scrollTop(), c = (n.clientHeight() - a) / 2 + r, l = (n.clientWidth() - o - s) / 2;
    t.css({left: l,top: c})
}
function showBaitiaoFq() {
//    var t = document.getElementById("Fqfk_Tip");
//    $("#InitCartUrl").attr("href"), t.style.width = "500px";
//    var e = 502, i = 358, s = '        <div id="Fqfk_Tip" class="Tip360" style="width:auto;">            <div class="Tip_Title">                <em>                    <img src="' + fq_serverSite + 'skin/images/tip_close.jpg" class="Tip_Close"/>                </em>\u767d\u6761/\u5206\u671f            </div>            <div class="Tip_Content" id="Tip_fq0">                <div id="baitiaofenqi" style="position:relative;width:482px;height:330px;">                </div>            </div>        </div>', a = ("<div id='c04tip' class='clearfix' style='z-index:20000;position:absolute;width:" + (e + 5) + "px;height:" + (i + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + e + "px;height:" + i + "px;z-index:20001;'>{HTML}</div></div>").replace("{HTML}", s), n = $(a);
//    n.append(s), $(document.body).prepend(n), $("#Fqfk_Tip").show(), el_top_middle($("#c04tip"), 502, 358), $.ajax({url: "http://nfa.jd.com/loadFa.js?aid=2_163_5702",dataType: "script",cache: !0}), $(".Tip_Close").click(function() {
//        $("#c04tip").remove()
//    })
}
function showNaBaitiao() {
//    var t = 502, e = 358, i = $("<div id='c04tip' class='clearfix' style='z-index:20000;position:absolute;width:" + (t + 5) + "px;height:" + (e + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + t + "px;height:" + e + "px;z-index:20001;'></div></div>"), s = '        <div id="Fqfk_Tip" class="Tip360" style="width:auto;width:500px;height:310px;">            <div class="Tip_Title">                <em><img src="http://jd2008.jd.com/purchase/skin/images/tip_close.jpg" class="Tip_Close"></em> \u62ff\u767d\u6761            </div>            <div class="Tip_Content" id="nabaitiao"></div>        </div>';
//    i.append(s), $(document.body).prepend(i), $("#Fqfk_Tip").show(), el_top_middle($("#c04tip"), 502, 358), $(".Tip_Close").click(function() {
//        $("#c04tip").remove()
//    }), $.ajax({url: "http://nfa.jd.com/loadFa.js?aid=2_163_5480",dataType: "script",cache: !0})
}
function showTip100(proobj) {
    var TipDivW = $(proobj).width(), TipDivH = $(proobj).height();
    TipDivW = 502, TipDivH = 358;
    var TipDiv = $("<div id='c04tip' class='clearfix' style='z-index:20000;position:absolute;width:" + eval(TipDivW + 5) + "px;height:" + eval(TipDivH + 5) + "px;'><div style='position:absolute;margin:5px 0 0 5px;width:" + TipDivW + "px;height:" + TipDivH + "px;z-index:20001;'></div></div>");
    fq_returnData && fq_formatData(fq_returnData), TipDiv.append($(proobj)), 0 == $("#c04tip").length && $(document.body).prepend(TipDiv), $(proobj).show(), el_top_middle($("#c04tip"), 502, 358), $("#Tip_apply,#Tip_continue,.Tip_Close").click(function() {
        $("#c04tip").remove(), $("#choose-btn-coll").after('<div id="Fqfk_Tip" class="Tip360"></div>')
    })
}
function fq_showFq_html(t) {
    if (null != t) {
        if (0 == t.json.length)
            return;
        if (0 == t.json.length)
            return;
        if (null != t.json[0].error)
            return;
        document.getElementById(fq_btnPanel).innerHTML = '<a href="javascript:;" class="btn-divide" onclick="showTip100(\'#Fqfk_Tip\')">\u5206\u671f\u4ed8\u6b3e<b></b></a>', fq_returnData = t
    }
}
function fq_formatData() {
//    var t = document.getElementById("Fqfk_Tip"), e = $("#InitCartUrl").attr("href");
//    t.style.width = "500px";
//    var i = "http://baitiao.jd.com/creditUser/list?from=dpy", s = '<div class="Tip_Title">            <em>                <img src="' + fq_serverSite + 'skin/images/tip_close.jpg" class="Tip_Close"/>            </em>\u767d\u6761/\u5206\u671f        </div>        <div class="Tip_Content" id="Tip_fq0">            <div style="position:relative;width:482px;height:310px;">                <img src="http://img13.360buyimg.com/da/jfs/t157/107/261896691/42066/92e14669/5385b7edNa8b9b2a3.png" />                <a href="http://help.jd.com/help/question-71.html#help211" title="\u94f6\u884c\u5206\u671f" style="position: absolute;bottom:3px;width:410px;height:32px;left:60px;background: url(http://misc.360buyimg.com/lib/img/e/blank.gif);"></a>                <a href=' + e + ' title="\u52a0\u5165\u8d2d\u7269\u8f66" style="position:absolute;top:61px;right:11px;width:98px;height:24px;background: url(http://misc.360buyimg.com/lib/img/e/blank.gif);" clstag="shangpin|keycount|product|initcarturlbt"></a>                <a href=' + i + ' title="\u7acb\u5373\u6fc0\u6d3b" style="position:absolute;top:61px;left:146px;width:67px;height:24px;background: url(http://misc.360buyimg.com/lib/img/e/blank.gif);"></a>            </div>        </div>';
   // t.innerHTML = s
}
function getCookie(t) {
    var e = document.cookie.match(RegExp("(^| )" + t + "=([^;]*)(;|$)"));
    return null != e ? unescape(e[2]) : null
}
function setSearch(t, e) {
    var i = pageConfig.wideVersion && pageConfig.compatible ? 5 : 4, s = t || s;
    $.ajax({url: "http://api.search.jd.com/?key=" + s + "&pagesize=" + i + "&filt_type=wyn,L1M1;wstate,L1M1" + e,dataType: "jsonp",success: function(t) {
            var e = t.Summary.key;
            pageConfig.product.searchList = [], null !== t.Product && t.Product.length > 0 && (1 > $("#search-result").length && $("#product-intro").parent().before('<div class="w"><div id="search-result" class="m m2" clstag="shangpin|keycount|product|exrs"><div class="mt"></div><div class="mc search-item"></div></div></div>'), $("#search-result").show(), $("#search-result .search-item").html(search_TPL.process(t)), $("#search-result .mt").html('<h2>\u5728\u4eac\u4e1c\u5546\u57ce\u4e2d\u67e5\u770b\u5176\u5b83\u201c<a target="_blank" href="http://search.jd.com/Search?keyword=' + e + '">' + e + '</a>\u201d\u7684\u641c\u7d22\u7ed3\u679c\uff1a</h2><div class="extra"><a target="_blank" href="http://search.jd.com/Search?keyword=' + e + '">\u67e5\u770b\u66f4\u591a\u641c\u7d22\u7ed3\u679c</a></div>'), G.getPriceNum(pageConfig.product.searchList, null, $("#search-result")), $(".search-item dl .p-img a").click(function() {
                var t = $(this).parents("dl").attr("skuid");
                $.getScript("http://sstat.jd.com/scslog?args=1^" + encodeURIComponent(e) + "^^1^^" + encodeURIComponent(document.referrer) + "^" + t + "^0^101^^0^0")
            }), $(".search-item dl .p-name a").click(function() {
                var t = $(this).parents("dl").attr("skuid");
                $.getScript("http://sstat.jd.com/scslog?args=1^" + encodeURIComponent(e) + "^^1^^" + encodeURIComponent(document.referrer) + "^" + t + "^0^101^^0^0")
            }))
        }})
}
function seoBanner(t, e) {
    $.ajax({url: "http://seo.jd.com/adrpc/source.action",data: {cateid: G.cat[0],type: 5,ison: 1 === warestatus ? !0 : !1},dataType: "jsonp",success: function(t) {
            var i = '<div class="w">    <div class="m m2">        <div class="mt hide"></div>        <div class="mc"><a href="${ad.target}" target="_blank" title="${ad.title}"><img src="${ad.img}" width="${width}" height="${height}" alt="${ad.title}" /></a></div>    </div></div>';
            t && t.result && 1 === t.result ? (t.width = pageConfig.compatible && pageConfig.wideVersion ? 1210 : 990, t.height = 110, $("#product-intro").parent().before(i.process(t))) : G.isJd ? setSearch(searchEngineSource.k, e) : /utm_source=organic/.test(location.href) || setSearch(searchEngineSource.k, e)
        }})
}
function getSuitInfoService(t) {
    if (null !== t.packResponseList && t.packResponseList.length > 0) {
        var e = pageConfig.wideVersion && pageConfig.compatible ? 12 : 8;
        $("#favorable-suit").show(), $("#favorable-suit .mc").html(suit_TPL.tabs.process(t) + suit_TPL.cons.process(t)), $("#favorable-suit .mc").Jtab({event: e >= t.packResponseList.length ? "mouseover" : "click",delay: 300,compatible: !0,currClass: "scurr"}, function(t, e) {
            var i = e.attr("packprice"), s = e.attr("data-cat"), a = e.attr("packlistprice"), n = e.attr("discount"), o = e.find(".fitting-price"), r = e.find(".orign-price"), c = e.find(".fitting-saving"), l = e.find(".infos .p-name a,.infos .btns a"), d = [G.sku];
            "" !== i && "" !== a && (o.html(parseFloat(i).toFixed(2)), r.html(parseFloat(a).toFixed(2)), c.html(parseFloat(n).toFixed(2))), e.find(".suits li[data-sku]").each(function() {
                d.push($(this).attr("data-sku"))
            }), l.attr("href", "http://www.jd.com/suit/show.html?suitId=" + s + "&skuIds=" + d.join(",")), e.find("img[data-src]").each(function() {
                var t = $(this), e = t.attr("data-src");
                e && t.attr("src", e).removeAttr("data-src")
            }), G.getNewCLK({name: "yhtz",action: "0",csku: d,sku: G.sku})
        }), $("#favorable-suit .scurr").trigger("click").trigger("mouseover"), G.removeLastAdd()
    }
}
function setPopInfo(t) {
    if (t && (Recommend.getDaPeiGou(G.sku, t.vid), EvaluateGradeNew.init(t), !G.isJd && "undefined" != typeof warestatus && 1 != warestatus)) {
        var e = $("#product-detail-1 .detail-list li").eq(2);
        e.html().indexOf("\u5e97\u94fa\uff1a") > -1 && e.html('\u5e97\u94fa\uff1a<a href="' + t.url + '" target="_blank">' + t.vender + "</a>")
    }
}
function renew() {
//    $.ajax({url: "http://d.360buy.com/oldfornew/get?skuId=" + pageConfig.product.skuid,dataType: "jsonp",success: function(t) {
//            var e = '<div class="renew-arrgrment" style="line-height:200%;height:190px;overflow-y:auto;">    <p>\u5c0a\u656c\u7684\u5ba2\u6237\uff1a</p>    <p>\u60a8\u597d\uff01\u6b22\u8fce\u60a8\u53c2\u52a0\u4eac\u4e1c\u5546\u57ce\u201c\u7535\u8111\u4ee5\u65e7\u6362\u65b0\u201d\u6d3b\u52a8\u3002\u4e3a\u4e86\u4fdd\u8bc1\u60a8\u80fd\u591f\u6b63\u5e38\u4eab\u53d7\u4ee5\u65e7\u6362\u65b0\u6d3b\u52a8\u4f18\u60e0\uff0c\u8bf7\u60a8\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u6d3b\u52a8\u7ec6\u5219\uff0c\u786e\u8ba4\u65e0\u8bef\u540e\u518d\u63d0\u4ea4\u4ee5\u65e7\u6362\u65b0\u8ba2\u5355\u3002</p>     <ul>        <li>1. \u6d3b\u52a8\u53c2\u4e0e\u5730\u533a\uff1a\u6240\u6709\u4eac\u4e1c\u81ea\u8425\u914d\u9001\u8986\u76d6\u8303\u56f4\uff0c\u5177\u4f53\u8303\u56f4\u8bf7\u67e5\u770b\u4eac\u4e1c\u5e2e\u52a9\u4e2d\u5fc3\uff1b</li>        <li>2. \u4eac\u4e1c\u5546\u57ce\u53c2\u52a0\u6d3b\u52a8\u4ea7\u54c1\uff1a\u4ee5\u4ea7\u54c1\u9875\u9762\u4fe1\u606f\u663e\u793a\u4e3a\u51c6\uff1b</li>        <li>3. \u60a8\u53c2\u52a0\u4ee5\u65e7\u6362\u65b0\u7535\u8111\u8981\u6c42\uff1a\u4efb\u4f55\u54c1\u724c\uff0c\u53ef\u4ee5\u6b63\u5e38\u5f00\u673a\u7684\u7b14\u8bb0\u672c\u7535\u8111\uff1b\u4e0d\u7b26\u5408\u6b64\u6807\u51c6\u7684\u65e7\u7535\u8111\uff0c\u4e0d\u80fd\u53c2\u4e0e\u201c\u4ee5\u65e7\u6362\u65b0\u201d\u6d3b\u52a8\uff1b</li>        <li>4. \u5177\u4f53\u6d3b\u52a8\u89c4\u5219\uff1a\u4ee5\u4eac\u4e1c\u5546\u57ce\u7f51\u7ad9\u9875\u9762\u516c\u793a\u4e3a\u51c6\uff1b</li>        <li>5. \u7b7e\u6536\u6d41\u7a0b\uff1a\u7b7e\u7f72\u4eac\u4e1c\u7535\u8111\u4ee5\u65e7\u6362\u65b0\u53d6\u8d27\u5355\uff0c\u5e76\u628a\u65e7\u7535\u8111\u4ea4\u4ed8\u4eac\u4e1c\u914d\u9001\u5458\uff1b</li>        <li>6. \u9000\u6362\u8d27\u6d41\u7a0b\uff1a\u53c2\u52a0\u6b64\u201c\u4ee5\u65e7\u6362\u65b0\u201d\u65b9\u5f0f\u8d2d\u4e70\u7684\u7b14\u8bb0\u672c\u7535\u8111\u5982\u7533\u8bf7\u9000\u8d27\uff0c\u4eac\u4e1c\u4ec5\u6309\u7167\u6d88\u8d39\u8005\u5b9e\u9645\u652f\u4ed8\u91d1\u989d\u9000\u6b3e\uff0c\u4eac\u4e1c\u4e0d\u518d\u5411\u6d88\u8d39\u8005\u8fd4\u8fd8\u65e7\u7b14\u8bb0\u672c\u7535\u8111\u3002</li>    </ul></div><div class="renew-btn">    <a href="#none" class="css3-btn">\u540c\u610f\u534f\u8bae</a></div>';
//            t && t.isOldForNew && ($("#choose-btns").prepend('<div id="choose-btn-renew" class="btn"><a href="javascript:;" class="btn-renew">\u53c2\u52a0\u4ee5\u65e7\u6362\u65b0<b></b></a></div>'), $("#choose-btn-renew").jdThickBox({type: "text",width: 570,height: 240,title: "\u4ee5\u65e7\u6362\u65b0\u534f\u8bae",_title: "renew_agreement_title",source: e,_con: "renew_aggrement",_close: "close_me"}, function() {
//                $(".renew-btn .css3-btn").attr("href", "http://trade.jd.com/order/getOrderInfo.action?pid=" + pageConfig.product.skuid + "&pcount=" + $("#buy-num").val() + "&rid=" + +new Date)
//            }))
//        }})
}
function onlineService(t, e, i) {
    function s(t) {
        return encodeURIComponent(encodeURIComponent(t))
    }
    var a = pageConfig.product.skuid;
    a || (a = $("ul[id='summary'] span").html().replace("\u5546\u54c1\u7f16\u53f7\uff1a", ""));
    var n = unescape(G.name);
    n = s(n);
    var o = $("#name strong").html();
    o = s(o);
    var r = $("#store-selector .text").text(), c = $("#store-prompt strong").html(), l = r + "\uff08" + c + "\uff09";
    l = s(l), e = s(e);
    var d = $("span[class^='star']").attr("class").replace("star sa", ""), p = 100;
    try {
        p = $("a[href='#comment']").html().replace("(\u5df2\u6709", "").replace("\u4eba\u8bc4\u4ef7)", "")
    } catch (m) {
    }
    var u = 100;
    try {
        u = $("#i-comment .rate strong").text().replace("%", "")
    } catch (m) {
    }
    var h = s(pageConfig.product.src), f = jQuery.cookie("_recent");
    f || (f = "");
    var g = "";
    try {
        g = $("strong[class='p-price'] img").attr("src")
    } catch (m) {
    }
    g = g ? s(g) : "", i || (i = "chat.jd.com");
    var v = "http://" + i + "/index.action?", b = {pid: a,price: g,stock: l,score: d,commentNum: p,imgUrl: h,wname: n,advertiseWord: o,seller: e,evaluationRate: u,recent: f,code: t,area: s($("#store-selector .text").text()),size: s($("#choose-version .dd .selected a").text()),services: s($("#summary-service .dd").html())};
    pageConfig.product.popInfo && pageConfig.product.popInfo.stock && (b.verderId = pageConfig.product.popInfo.stock.D.vid), open(v + decodeURIComponent($.param(b)), a, "status=no,toolbar=no,menubar=no,location=no,titlebar=no,resizable=yes,width=1018px,height=590")
}
function setImButton(t) {
//    var e = t || G.sku;
//    $.ajax({url: "http://chat1.jd.com/api/checkChat?",data: {pid: e,returnCharset: "utf-8"},dataType: "jsonp",success: function(t) {
//            if (t) {
//                pageConfig.im = t;
//                var i = t.seller, s = t.code;
//                if (i && "" != i && (i = i.replace("&qt;", "'").replace("&dt;", '"')), 1 > $("#brand-bar-pop").length && ($("#j-im").length > 0 && $("#j-im").remove(), $("#summary-grade .dd #j-im").length > 0 && $("#summary-grade .dd #j-im").remove(), (1 == s || 2 == s || 3 == s || 9 == s) && $("#summary-grade .dd").append('<a id="j-im" class="djd-im" href="#none" clstag="shangpin|keycount|product|imbtn"><b>\u8054\u7cfb\u5ba2\u670d</b></a>')), 1 == s)
//                    $("#online-service").show(), $("#j-im").attr("title", i + " \u8054\u7cfb\u5ba2\u670d"), $("#j-im").click(function() {
//                        onlineService(1, i, t.chatDomain)
//                    });
//                else if (2 == s) {
//                    $("#online-service").show();
//                    var a = e.length >= 10 ? " \u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2" : " \u5382\u5546\u552e\u524d\u54a8\u8be2\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2";
//                    $("#j-im").addClass("d-offline").html("<b>\u7559\u8a00\u54a8\u8be2</b>").attr("title", i + a).unbind("click")
//                } else
//                    (3 == s || 9 == s) && ($("#online-service").show().find("b").html("\u8054\u7cfb\u5ba2\u670d"), $("#j-im").addClass("d-offline").html("<b>\u7559\u8a00\u54a8\u8be2</b>").attr("title", i + " \u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u6b64\u5904\u7ed9\u5546\u5bb6\u7559\u8a00\uff0c\u5e76\u5728\u3010\u6211\u7684\u4eac\u4e1c->\u6d88\u606f\u7cbe\u7075\u3011\u4e2d\u67e5\u770b\u56de\u590d").click(function() {
//                        onlineService(3, i, t.chatDomain)
//                    }))
//            }
//        }})
}
function log(t, e) {
    var s = "";
    for (i = 2; arguments.length > i; i++)
        s = s + arguments[i] + "|||";
    var a = decodeURIComponent(escape(getCookie("pin"))), n = "http://csc.360buy.com/log.ashx?type1=$type1$&type2=$type2$&data=$data$&pin=$pin$&referrer=$referrer$&jinfo=$jinfo$&callback=?", o = n.replace(/\$type1\$/, escape(t));
    o = o.replace(/\$type2\$/, escape(e)), o = o.replace(/\$data\$/, escape(s)), o = o.replace(/\$pin\$/, escape(a)), o = o.replace(/\$referrer\$/, escape(document.referrer)), o = o.replace(/\$jinfo\$/, escape("")), $.getJSON(o, function() {
    });
    var r = ("https:" == document.location.protocol ? "https://mercuryssl" : "http://mercury") + ".jd.com/log.gif" + "?t=other.000000" + "&m=UA-J2011-1" + "&v=" + encodeURIComponent("t1=" + t + "$t2=" + e + "$p0=" + s) + "&ref=" + encodeURIComponent(document.referrer) + "&rm=" + (new Date).getTime(), c = new Image(1, 1);
    c.src = r
}
function clsPVAndShowLog(t, e, i, s) {
    var a = t + "." + i + "." + skutype(e) + "." + s;
    log("d", "o", a)
}
function clsClickLog(t, e, i, s, a, n) {
    var o = t + "." + s + "." + skutype(e);
    appendCookie(n, i, o), log("d", "o", o + ".c")
}
function appendCookie(reCookieName, sku, key) {
    var reWidsCookies = eval("(" + getCookie(reCookieName) + ")");
    (null == reWidsCookies || "" == reWidsCookies) && (reWidsCookies = {}), null == reWidsCookies[key] && (reWidsCookies[key] = "");
    var pos = reWidsCookies[key].indexOf(sku);
    0 > pos && (reWidsCookies[key] = reWidsCookies[key] + "," + sku), setCookie(reCookieName, $.toJSON(reWidsCookies), 15)
}
function skutype(t) {
    if (t) {
        var e = ("" + t).length;
        return 10 == e ? 1 : 0
    }
    return 0
}
function setCookie(t, e, i) {
    var s = i, a = new Date;
    a.setTime(a.getTime() + 1e3 * 60 * 60 * 24 * s), document.cookie = t + "=" + escape(e) + ";expires=" + a.toGMTString() + ";path=/;domain=.jd.com"
}
function getCookie(t) {
    var e = document.cookie.match(RegExp("(^| )" + t + "=([^;]*)(;|$)"));
    return null != e ? unescape(e[2]) : null
}
function clsLog(t, e, i, s, a) {
    appendCookie(a, i, t), i = i.split("#")[0], log(3, t, i)
}
function mark(t, e) {
    log(1, e, t)
}
function CombineShare(t) {
    this.$el = t.$el, this.imgs = "string" == typeof t.imgs ? [t.imgs] : t.imgs, this.onbeforeOpen = t.onbeforeOpen || function() {
    }, t.title.length > 27 && (t.title = t.title.substr(0, 27) + "..."), this.shareParam = {sid: t.sid,rid: t.rid,title: t.title,content: t.content,imgUrl: this.imgs[0],url: t.url}, this.shareMap = {T2: {name: "sina",text: "\u65b0\u6d6a\u5fae\u535a",url: "http://share.jd.com/sina/login.action"},T3: {name: "qqWeibo",text: "\u817e\u8baf\u5fae\u535a",url: "http://share.jd.com/qqweibo/login.action"},T4: {name: "renren",text: "\u4eba\u4eba\u7f51",url: "http://share.jd.com/renren/login.action"},T5: {name: "kaixin",text: "\u5f00\u5fc3\u7f51",url: "http://share.jd.com/kaixin001/login.action"},T6: {name: "douban",text: "\u8c46\u74e3\u7f51",url: "http://share.jd.com/douban/login.action"}}, this.init()
}
if (G === void 0)
    var G = window.G = {};
(function(t) {
    "object" == typeof pageConfig.product && (t.sku = pageConfig.product.skuid, t.key = pageConfig.product.skuidkey, t.url = pageConfig.product.href, t.src = pageConfig.product.src, t.name = pageConfig.product.name, t.mdPerfix = 1 == pageConfig.product.type ? "CR" : "GR", t.mbPerfix = 1 == pageConfig.product.type ? "3C" : "GM", t.mp = pageConfig.product.mp, t.jp = pageConfig.product.jp, t.cat = pageConfig.product.cat, t.orginSku = pageConfig.product.orginSkuid || t.sku, t.isJd = 1e9 > t.sku, t.isPop = t.sku > 1e9, t.isCellphone = 655 == pageConfig.product.cat[2] || 6881 == pageConfig.product.cat[2] || 6882 == pageConfig.product.cat[2], t.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, t.isObject = function(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }, t.isEmptyObject = function(t) {
        var e;
        for (e in t)
            return !1;
        return !0
    }, t.isNothing = function(e) {
        return t.isArray(e) ? 1 > e.length : !e
    }, t.getRandomArray = function(t, e) {
        return e = e || 1, t.sort(function() {
            return Math.random() - .5
        }), t.slice(0, e)
    }), t.getPriceNum = function(t, e, i, s, a) {
        t = "string" == typeof t ? [t] : t, i = i || $("body"), s = s || "J-p-";
        var n = "";
        if (null !== e && (n = readCookie("ipLoc-djd") ? "&area=" + readCookie("ipLoc-djd").replace(/-/g, "_") : "&area=1"), void 0 !== t) {
            var o = "http://p.3.cn/prices/mgets?type=1&skuIds=J_" + t.join(",J_") + n;
            $.ajax({url: o,dataType: "jsonp",success: function(t) {
                    if (!t && !t.length)
                        return !1;
                    for (var e = 0; t.length > e; e++) {
                        if (!t[e].id)
                            return !1;
                        var n = t[e].id.replace("J_", ""), r = parseFloat(t[e].p);
                        parseFloat(t[e].m), r > 0 ? i.find("." + s + n).html("\uffe5" + t[e].p) : i.find("." + s + n).html("\u6682\u65e0\u62a5\u4ef7"), "function" == typeof a && a(n, t[e], o)
                    }
                }})
        }
    }, t.serializeUrl = function(t) {
        var e, i, s, a, n = t.indexOf("?"), o = t.substr(0, n), r = t.substr(n + 1), c = r.split("&"), l = c.length, d = {};
        for (e = 0; l > e; e++)
            i = c[e].split("="), s = i[0], a = i[1], d[s] = a;
        return {url: o,param: d}
    }, t.setScroll = function(t) {
        var e = "string" == typeof t ? $(t) : $("body");
        e.find(".p-scroll").each(function() {
            var t = $(this).find(".p-scroll-wrap"), e = $(this).find(".p-scroll-next"), i = $(this).find(".p-scroll-prev");
            t.find("li").length > 4 && t.imgScroll({showControl: !0,width: 30,height: 30,visible: 4,step: 1,prev: i,next: e})
        })
    }, t.thumbnailSwitch = function(t, e, i, s, a) {
        var n = t.find("img"), o = a || "mouseover";
        n.bind(o, function() {
            var s = $(this), a = s.attr("src"), n = a.replace(/\/n\d\//, i);
            e.attr("src", n), t.removeClass("curr"), s.parent().addClass("curr")
        })
    }, t.getCommentNum = function(t, e) {
        var i = pageConfig.product.commentCount;
        return i !== void 0 ? e(i) : (window.getCommentCount = function(t) {
            "function" == typeof e && e(t), t && pageConfig.product && (pageConfig.product.commentCount = t);
            try {
                delete window.getCommentCount
            } catch (i) {
            }
        }
//        , $.ajax({url: "http://club.jd.com/ProductPageService.aspx?method=GetCommentSummaryBySkuId&referenceId=" + t + "&callback=getCommentCount",dataType: "script",cache: !0})
        , void 0)
    }, t.getCommentData = function(t, e, i, s, a) {
        t = t || [], e = e || $("body").eq(0), i = i || "p-comm-", s = s || "(\u5df2\u6709{NUM}\u4eba\u8bc4\u4ef7)", $.ajax({url: "http://club.jd.com/clubservice.aspx?method=GetCommentsCount&referenceIds=" + t,dataType: "jsonp",success: function(t) {
                var e;
                if (t && t.CommentsCount.length) {
                    e = t.CommentsCount.length;
                    for (var n = 0; e > n; n++)
                        $("." + i + t.CommentsCount[n].SkuId).find(".star").removeClass("sa5").addClass("sa" + t.CommentsCount[n].AverageScore), $("." + i + t.CommentsCount[n].SkuId).html(s.replace("{NUM}", t.CommentsCount[n].CommentCount)), a && a(t.CommentsCount[n].SkuId, t.CommentsCount[n])
                }
            }})
    }, t.getUserLevel = function(t) {
        switch (t) {
            case 50:
                return "\u6ce8\u518c\u7528\u6237";
            case 56:
                return "\u94c1\u724c\u7528\u6237";
            case 59:
                return "\u6ce8\u518c\u7528\u6237";
            case 60:
                return "\u94dc\u724c\u7528\u6237";
            case 61:
                return "\u94f6\u724c\u7528\u6237";
            case 62:
                return "\u91d1\u724c\u7528\u6237";
            case 63:
                return "\u94bb\u77f3\u7528\u6237";
            case 64:
                return "\u7ecf\u9500\u5546";
            case 65:
                return "VIP";
            case 66:
                return "\u4eac\u4e1c\u5458\u5de5";
            case -1:
                return "\u672a\u6ce8\u518c";
            case 88:
                return "\u53cc\u94bb\u7528\u6237";
            case 90:
                return "\u4f01\u4e1a\u7528\u6237";
            case 103:
                return "\u4e09\u94bb\u7528\u6237";
            case 104:
                return "\u56db\u94bb\u7528\u6237";
            case 105:
                return "\u4e94\u94bb\u7528\u6237"
        }
        return "\u672a\u77e5"
    }, t.getNewUserLevel = function(t) {
        switch (t) {
            case 50:
                return "\u6ce8\u518c\u7528\u6237";
            case 56:
                return "\u94dc\u724c\u7528\u6237";
            case 59:
                return "\u6ce8\u518c\u7528\u6237";
            case 60:
                return "\u94f6\u724c\u7528\u6237";
            case 61:
                return "\u94f6\u724c\u7528\u6237";
            case 62:
                return "\u91d1\u724c\u7528\u6237";
            case 63:
                return "\u94bb\u77f3\u7528\u6237";
            case 64:
                return "\u7ecf\u9500\u5546";
            case 110:
                return "VIP";
            case 66:
                return "\u4eac\u4e1c\u5458\u5de5";
            case -1:
                return "\u672a\u6ce8\u518c";
            case 88:
                return "\u94bb\u77f3\u7528\u6237";
            case 90:
                return "\u4f01\u4e1a\u7528\u6237";
            case 103:
                return "\u94bb\u77f3\u7528\u6237";
            case 104:
                return "\u94bb\u77f3\u7528\u6237";
            case 105:
                return "\u94bb\u77f3\u7528\u6237"
        }
        return "\u672a\u77e5"
    }, t.calculatePrice = function(t, e) {
        for (var i = $(t).parents(e), s = i.find(".master input").attr("wmeprice"), a = i.find("input:checked"), n = a.length, o = i.find(".infos .res-totalprice"), r = i.find(".infos .res-jdprice"), c = 0, l = 0, d = "http://cart.jd.com/cart/dynamic/reBuyForOrderCenter.action?wids={SKUS}&nums={NUMS}", p = i.find(".btn-buy"), m = [], u = 0; a.length > u; u++)
            c += parseFloat(a.eq(u).attr("wmaprice")), l += parseFloat(a.eq(u).attr("wmeprice")), m.push(a.eq(u).attr("skuid"));
        "" == s || 0 >= Number(s) || 0 >= Number($(t).attr("wmeprice")) ? (o.text("\u6682\u65e0\u62a5\u4ef7"), r.text("\u6682\u65e0\u62a5\u4ef7")) : (o.hasClass("saving") || o.text("\uffe5 " + c.toFixed(2)), r.text("\uffe5 " + l.toFixed(2)), p.attr("href", d.replace("{SKUS}", m.join(",")).replace("{NUMS}", m.join(",").replace(/\d+/g, 1))), i.find(".infos .p-name span").html("" + (n - 1)))
    }, t.sortFitting = function(t, e, i) {
        var s = $(i), a = e, n = s.find(".suits"), o = s.find(".stab li"), r = s.find(".suits .lh"), c = n.find('li[data-cat="' + a + '"]');
        if ("all" == e) {
            var l = parseInt(n.attr("data-count"));
            n.find("li").show(), r.css("width", 166 * l), l > 4 && n.css("overflow-x", "scroll")
        } else
            n.find("li").hide(), c.show();
        if (o.removeClass("scurr"), $(t).addClass("scurr"), 1 == !!$(t).attr("data-count")) {
            var d = parseInt($(t).attr("data-count"));
            n.css("overflow-x", 4 >= d ? "hidden" : "scroll"), r.css("width", 166 * d)
        }
        n.scrollLeft(0), G.removeLastAdd()
    }, t.removeLastAdd = function(t) {
        var t = t || $(".suits");
        t.find("li").removeClass("last-item"), t.find("li:visible:last").addClass("last-item")
    }, t.getNewCLK = function(t, e) {
        var i = "http://mercury.jd.com/log.gif?", s = "src=" + t.name + "$action=" + t.action;
        t.csku && (s += "$csku=" + t.csku.join(",")), t.sku && (s += "$sku=" + t.sku), t.index !== void 0 && (s += "$index=" + t.index);
        var a = {t: t.id || (1 == pageConfig.product.type ? "rec.993003" : "rec.993001"),v: s,m: t.m || "UA-J2011-1",ref: t.ref || document.referrer,random: t.random || Math.random()};
        return e !== void 0 ? i + $.param(a) : (sendRequest(i + $.param(a)), void 0)
    }, t.checkLogin = function(t) {
        "function" == typeof t && $.getJSON("http://passport.jd.com/loginservice.aspx?method=Login&callback=?", function(e) {
            e.Identity && t(e.Identity)
        })
    }, t.insertStyles = function(t) {
        var e = document, i = e.getElementsByTagName("head"), s = e.createElement("style"), a = e.createElement("link");
        if (/\.css$/.test(t))
            a.rel = "stylesheet", a.type = "text/css", a.href = t, i.length ? i[0].appendChild(a) : e.documentElement.appendChild(a);
        else {
            if (s.setAttribute("type", "text/css"), s.styleSheet)
                s.styleSheet.cssText = t;
            else {
                var n = e.createTextNode(t);
                s.appendChild(n)
            }
            i.length && i[0].appendChild(s)
        }
    }, t.showServiceDesc = function(t) {
        var e = "", i = RegExp("-" + t + "-"), s = "-27-28-31-32-67-68-69-70-78-79-42-64-65-66-71-72-73-74-80-81-", a = "-2-3-4-44-49-", n = "-6-7-41-47-", o = "-9-48-60-", r = "-15-16-17-18-45-46-61-63-", s = "-11-", c = "-52-53-54-57-58-59-75-82-83-84-";
        return i.test(s) && (e = "\u7531\u539f\u5382\u4e3a\u60a8\u63d0\u4f9b\u670d\u52a1\uff0c\u5b98\u65b9\u54c1\u8d28\u4fdd\u8bc1\uff0c\u670d\u52a1\u65e0\u5fe7"), i.test(a) && (e = "\u81ea\u5382\u5546\u4fdd\u4fee\u671f\u7ed3\u675f\u8d77\uff0c\u5ef6\u957f\u60a8\u7231\u673a\u7684\u4fdd\u4fee\u65f6\u95f4"), i.test(n) && (e = "\u63d0\u4f9b\u7531\u4e8e\u610f\u5916\u4e8b\u6545\u5bfc\u81f4\u7231\u673a\u6545\u969c\u7684\u4fdd\u4fee\u670d\u52a1"), i.test(o) && (e = "\u7231\u673a\u6545\u969c\u65e0\u9700\u7ef4\u4fee\uff0c\u76f4\u63a5\u514d\u8d39\u66f4\u6362\u65b0\u673a"), i.test(r) && (e = "\u4e13\u4e1a\u5de5\u7a0b\u5e08\u4e0a\u95e8\u4e3a\u60a8\u63d0\u4f9b\u5b89\u88c5\u8c03\u8bd5\u670d\u52a1"), i.test(s) && (e = "\u4e13\u5bb6\u5728\u7ebf\uff0c\u8fdc\u7a0b\u534f\u52a9\u60a8\u89e3\u51b3\u8f6f\u4ef6\u4f7f\u7528\u95ee\u9898"), i.test(c) && (e = "\u514d\u8d39\u63d0\u4f9b1\u6b21\u5c4f\u5e55\u4fee\u590d\uff0c\u8ba9\u5c4f\u788e\u4e0d\u518d\u5fc3\u788e\u3002"), e
    }, t.clsLog = function(t, e, i, s, a) {
        var n = new Image, o = "http://mercury.jd.com/log.gif?t=rec." + t + "&v=" + encodeURIComponent("src=rec$action=" + e + "$enb=1$sku=" + i + "$csku=" + s + "$index=" + (a || 0) + "$expid=0") + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random();
        n.setAttribute("src", o)
    }, t.Countdown = {init: function(t, e) {
            this.seconds = t, this.timer = null, this.callback = e || function() {
            }, this.loopCount()
        },loopCount: function() {
            var t = this, e = t.formatSeconds(t.seconds);
            t.callback(e), this.timer = setInterval(function() {
                var e = t.formatSeconds(t.seconds);
                0 === e.d && 0 === e.h && 0 === e.m && 0 === e.s ? clearInterval(t.timer) : t.seconds--, t.callback(e)
            }, 1e3)
        },formatSeconds: function(t) {
            var e = Math.floor(t / 86400), i = Math.floor(t % 86400 / 3600), s = Math.floor(t % 86400 % 3600 / 60), t = t % 86400 % 3600 % 60;
            return {d: e,h: i,m: s,s: t}
        }}, t.onAttr = function(t, e) {
        var i = pageConfig.product.specialAttrs;
        if (i && i.length) {
            for (var s = 0; i.length > s; s++)
                if (i[s] == t)
                    return e(), !0;
            return !1
        }
        return !1
    }
})(G), pageConfig.serviceYB = "enabled", pageConfig.btnBaiTiaoFq = "enabled", function(t) {
    t.fn.floatNav = function(e) {
//        var i = t.extend({start: null,end: null,fixedClass: "nav-fixed",anchor: null,targetEle: null,range: 0,onStart: function() {
//            },onEnd: function() {
//            }}, e), s = t(this), a = s.height(), n = s.width(), o = t('<div class="float-nav-wrap"/>');
//        return s.css({height: a,width: n}), s.parent().hasClass("float-nav-wrap") || s.wrap(o.css("height", a)), t(window).bind("scroll", function() {
//            var e = t(document).scrollTop(), a = s.find("a").eq(0).attr("href"), n = i.start || s.parent(".float-nav-wrap").offset().top, o = i.targetEle ? t(i.targetEle).offset().top : 1e4;
//            e > n && (i.end || o) - i.range > e ? (s.addClass(i.fixedClass), i.anchor && a !== i.anchor && s.find(".toggle-link").attr("href", i.anchor), i.onStart && i.onStart()) : (s.removeClass(i.fixedClass), i.anchor && s.find(".toggle-link").attr("href", "javascript:;"), i.onEnd && i.onEnd())
//        }), this
    }
}(jQuery), function(t) {
    var e = function(e, i) {
        this.opts = t.extend({start: null,end: null,startThrehold: 0,stopThrehold: 0,onStart: function() {
            },onEnd: function() {
            },onScroll: function() {
            }}, i), this.$o = t(e), this.init()
    };
    e.prototype = {init: function() {
            this.bindEvent(), t(window).bind("scroll", function() {
                t(this).trigger("onscroller")
            })
        },bindEvent: function() {
            var e, i = this;
            t(window).bind("onscroller", function() {
                clearTimeout(e), e = setTimeout(function() {
                    i.onScroll(), clearTimeout(e)
                }, 300)
            })
        },onScroll: function() {
            var e = t(document).scrollTop(), i = this.opts.start || this.$o.offset().top, s = this.opts.end || i + this.$o.outerHeight(), a = t(window).height();
            e > i + this.opts.startThrehold && s - a - this.opts.stopThrehold > e ? this.opts.onStart(this) : this.opts.onEnd(this), this.opts.onScroll(this)
        }}, t.fn.scroller = function(i, s) {
        return this.each(function() {
            var a = new e(this, i, s);
            t(this).data("scroller", a)
        })
    }
}(jQuery), function(t) {
    var e = function(e, i, s) {
        this.opts = t.extend({content: e.title || "",width: null,oTop: 0,oLeft: 5,zIndex: 1,event: null,position: "top",close: !1,autoClose: !1}, i), this.$obj = t(e), this.callback = s || function() {
        }, this.init()
    };
    e.prototype = {init: function() {
            var t = Math.random().toString(16).substring(2);
            this.id = "TIP-" + t, this.insertStyles('.Jtips { position: relative; float:left; display:none; } .Jtips-close { position:absolute; color:#ff6600; font:12px "simsun"; cursor:pointer; } .Jtips-top .Jtips-close { right:1px; top:0px; } .Jtips-bottom .Jtips-close { right:1px; top:5px; } .Jtips-left .Jtips-close { right:6px; top:1px; } .Jtips-right .Jtips-close { right:1px; top:1px; } .Jtips-arr { position: absolute; background-image:url(http://misc.360buyimg.com/product/skin/2012/i/arrow.gif); background-repeat:no-repeat; overflow:hidden; } .Jtips-top { padding-bottom: 5px; } .Jtips-top .Jtips-arr { left:10px; bottom:0; width:11px; height:6px; background-position:0 -5px; _bottom:-1px; } .Jtips-bottom { padding-top: 5px; } .Jtips-bottom .Jtips-arr { top:0; left:10px; width:11px; height:6px; background-position:0 0; } .Jtips-left { padding-right: 5px;  } .Jtips-left .Jtips-arr { right:0; top:10px; width:6px; height:11px; background-position:-5px 0;} .Jtips-right {padding-left: 5px; } .Jtips-right .Jtips-arr {top:10px; left:0; width:6px; height:11px; background-position:0 0;  } .Jtips-con { float:left; padding:10px; background:#fffdee; border:1px solid #edd28b; color:#ff6501; -moz-box-shadow: 0 0 2px 2px #eee; -webkit-box-shadow: 0 0 2px 2px #eee; box-shadow: 0 0 2px 2px #eee; } .Jtips-con a,.Jtips-con a:hover,.Jtips-con a:visited { color:#005fab; text-decoration:none; } .Jtips-con a:hover { text-decoration: underline; }'), this.setTips(), null !== this.opts.event && this.bindEvent()
        },insertStyles: function(t) {
            var e = document, i = e.getElementsByTagName("head"), s = e.createElement("style"), a = e.createElement("link");
            if (/\.css$/.test(t))
                a.rel = "stylesheet", a.type = "text/css", a.href = t, i.length ? i[0].appendChild(a) : e.documentElement.appendChild(a);
            else {
                if (s.setAttribute("type", "text/css"), s.styleSheet)
                    s.styleSheet.cssText = t;
                else {
                    var n = e.createTextNode(t);
                    s.appendChild(n)
                }
                i.length && i[0].appendChild(s)
            }
        },bindEvent: function() {
            var t = this;
            this.opts.autoClose ? this.$obj.hover(function() {
                t.show()
            }, function() {
                t.hide()
            }) : this.$obj.unbind(this.opts.event).bind(this.opts.event, function() {
                t.show()
            })
        },bindClose: function(t) {
            var e = this;
            t.find(".Jtips-close").bind("click", function() {
                e.remove()
            })
        },getPosition: function() {
            var t = this.$obj;
            return {w: t.outerWidth(),h: t.outerHeight(),oTop: t.offset().top,oLeft: t.offset().left}
        },setPosition: function(t, e) {
            var i = this.getPosition();
            if (t.css({position: "absolute","z-index": this.opts.zIndex}), "left" === e && t.css({top: i.oTop - 10 + this.opts.oTop,left: i.oLeft - this.tips.outerWidth() - this.opts.oLeft}), "right" === e && t.css({left: i.oLeft + i.w + this.opts.oLeft,top: i.oTop - 10 + this.opts.oTop}), "top" === e && t.css({left: i.oLeft - 10 + this.opts.oLeft,top: i.oTop - this.tips.outerHeight() - this.opts.oTop}), "bottom" === e && t.css({left: i.oLeft - 10 + this.opts.oLeft,top: i.oTop + i.h + this.opts.oTop}), this.opts.autoClose) {
                var s = this.$obj.css("position");
                this.$obj.css({position: "static" == s ? "relative" : s}), t.css({left: this.opts.oLeft,top: this.$obj.outerHeight()})
            }
        },setTips: function() {
            var e = this.opts.close ? '<div class="Jtips-close">&times;</div>' : "", i = t('<div data-tipID="' + this.id + '" class="Jtips Jtips-' + this.opts.position + '"><div class="Jtips-arr"></div>' + e + '<div class="Jtips-con">' + this.opts.content + "</div></div>"), s = this;
            1 > t('[data-tipID="' + this.id + '"]').length && (this.tips = i, this.opts.autoClose ? this.$obj.append(i) : t("body").eq(0).append(i), this.tips.css("width", this.opts.width || i.width()).find(".Jtips-con").css("width", (this.opts.width || i.width()) - 20), this.setPosition(i, this.opts.position), this.bindClose(i), t(window).resize(function() {
                s.setPosition(i, s.opts.position)
            }), "function" == typeof this.callback && this.callback.apply(this.$obj, [i]))
        },show: function() {
            this.tips.show()
        },hide: function() {
            this.tips.hide()
        },remove: function() {
            this.tips.remove()
        }}, t.fn.Jtips = function(i, s) {
        return this.each(function() {
            var a = new e(this, i, s);
            t(this).data("Jtips", a)
        })
    }
}(jQuery), function(t) {
    t.fn.jqueryzoom = function(e) {
        // var i = {xzoom: 200,yzoom: 200,offset: 10,position: "right",lens: 1,preload: 1};
        e && t.extend(i, e);
        var s = "";
        t(this).hover(function() {
            function e(t) {
                this.x = t.pageX, this.y = t.pageY
            }
            var a = t(this).offset().left, n = t(this).offset().top, o = t(this).find("img").get(0).offsetWidth, r = t(this).find("img").get(0).offsetHeight;
            s = t(this).find("img").attr("alt");
            var c = t(this).find("img").attr("jqimg");
            t(this).find("img").attr("alt", ""), 0 == t("div.zoomdiv").get().length && (t(this).after("<div class='zoomdiv'><img class='bigimg' src='" + c + "'/></div>"), t(this).append("<div class='jqZoomPup'>&nbsp;</div>")), t("div.zoomdiv").width(i.xzoom), t("div.zoomdiv").height(i.yzoom), t("div.zoomdiv").show(), i.lens || t(this).css("cursor", "crosshair"), t(document.body).mousemove(function(s) {
                mouse = new e(s);
                var c = t(".bigimg").get(0).offsetWidth, l = t(".bigimg").get(0).offsetHeight, d = "x", p = "y";
                if (isNaN(p) | isNaN(d)) {
                    var p = c / o, d = l / r;
                    t("div.jqZoomPup").width(i.xzoom / (1 * p)), t("div.jqZoomPup").height(i.yzoom / (1 * d)), i.lens && t("div.jqZoomPup").css("visibility", "visible")
                }
                xpos = mouse.x - t("div.jqZoomPup").width() / 2 - a, ypos = mouse.y - t("div.jqZoomPup").height() / 2 - n, i.lens && (xpos = a > mouse.x - t("div.jqZoomPup").width() / 2 ? 0 : mouse.x + t("div.jqZoomPup").width() / 2 > o + a ? o - t("div.jqZoomPup").width() - 2 : xpos, ypos = n > mouse.y - t("div.jqZoomPup").height() / 2 ? 0 : mouse.y + t("div.jqZoomPup").height() / 2 > r + n ? r - t("div.jqZoomPup").height() - 2 : ypos), i.lens && t("div.jqZoomPup").css({top: ypos,left: xpos}), scrolly = ypos, t("div.zoomdiv").get(0).scrollTop = scrolly * d, scrollx = xpos, t("div.zoomdiv").get(0).scrollLeft = scrollx * p
            })
        }, function() {
            t(this).children("img").attr("alt", s), t(document.body).unbind("mousemove"), i.lens && t("div.jqZoomPup").remove(), t("div.zoomdiv").remove()
        }), count = 0, i.preload && (t("body").append("<div style='display:none;' class='jqPreload" + count + "'>360buy</div>"), t(this).each(function() {
            var e = t(this).children("img").attr("jqimg"), i = jQuery("div.jqPreload" + count).html();
            jQuery("div.jqPreload" + count).html(i + '<img src="' + e + '">')
        }))
    }
}(jQuery);
var suit_TPL = {tabs: '<ul class="stab lh">{for item in packResponseList}<li class="fore${parseInt(item_index)+1}{if item_index==0} scurr{/if}" data-widget="tab-item" data-cat="${item.packId}" data-suit="${item.packName}" title="${item.packName}">{if G.cat[2]==694}${item.packName.substr(0, 6)}{else}\u4f18\u60e0\u5957\u88c5${parseInt(item_index)+1}{/if}</li>{/for}</ul>',cons: '{for item in packResponseList}<div data-widget="tab-content" packPrice="${item.packPrice.amount}" packListPrice="${parseFloat((item.baseDiscount||0)+item.packPrice.amount).toFixed(2)}" discount="${(item.baseDiscount||item.discount.amount)}" data-cat="${item.packId}" class="stabcon{if parseInt(item_index) !== 0} none{/if}"><div class="master">    <s></s>    <div class="p-img">        <a href="http://item.jd.com/' + G.sku + '.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(' + G.sku + ")}n4/" + pageConfig.product.src + '" height="100" width="100"></a>' + "    </div>" + '    <div class="p-name">' + '        <a href="http://item.jd.com/' + G.sku + '.html" target="_blank">' + G.name + "</a>" + "    </div>" + "</div>" + '<div class="suits">' + '    <ul class="lh" style="width:${(item.productList.length-1)*165}px">' + "{for itemList in item.productList}" + "{if itemList.skuId == G.sku}" + "{else}" + '        <li data-sku="${itemList.skuId}" onclick=\'G.getNewCLK({ name: "yhtz", action: "1", sku:${G.sku}, csku:[${itemList.skuId}], index:${itemList_index} })\'>' + "            <s></s>" + '            <div class="p-img">' + '                <a href="http://item.jd.com/${itemList.skuId}.html" target="_blank"><img alt="" {if Number(item_index)!=0}data-{/if}src="${pageConfig.FN_GetImageDomain(itemList.skuId)}n4/${itemList.skuPicUrl}" alt="" height="100" width="100"></a>' + "            </div>" + '            <div class="p-name">' + '                <a href="http://item.jd.com/${itemList.skuId}.html" target="_blank">${itemList.skuName}</a>' + "            </div>" + "        </li>" + "{/if}" + "{/for}" + "    </ul>" + "</div>" + '<div class="infos">' + "    <s></s>" + '    <div class="p-name">' + '        <a href="http://www.jd.com/suite/${item.packId}-${skuId}.html">${item.packName}</a>' + "    </div>" + '    <div class="p-price">\u5957&nbsp;&nbsp;\u88c5&nbsp;&nbsp;\u4ef7\uff1a' + '        <strong class="fitting-price">${parseFloat(item.packPrice.amount).toFixed(2)}</strong>' + "    </div>" + '    <div class="p-price">\u4eac \u4e1c \u4ef7\uff1a' + '        <del class="orign-price">${parseFloat((item.baseDiscount||0)+item.packPrice.amount).toFixed(2)}</del>' + "    </div>" + '    <div class="p-saving">\u7acb\u5373\u8282\u7701\uff1a' + '        <span class="fitting-saving">${parseFloat(item.baseDiscount||item.discount.amount).toFixed(2)}</span>' + "    </div>" + '    <div class="btns">' + '        <a class="btn-buy" href="http://jd2008.jd.com/purchase/initcart.aspx?pId=${item.packId}&pCount=1&pType=2" clstag="shangpin|keycount|product|{if G.isPop}popbuysuit{else}zybuysuit{/if}">\u8d2d\u4e70\u5957\u88c5</a>' + "    </div>" + "</div>" + "</div>" + "{/for}"}, recoFittings_TPL = {tabs: '<li class="fore scurr" onclick="G.sortFitting(this, \'all\', \'#tab-reco\')">\u5168\u90e8\u914d\u4ef6</li>{for item in fittingType}<li class="fore${parseInt(item_index)+1}" data-count="${item.number}" data-cat="${item.sort}" onclick="G.sortFitting(this, ${item.sort}, \'#tab-reco\')">${item.name}(${item.number})</li>{/for}',cons: '<div class="master">    <s></s>    <div class="p-img">        <a href="http://item.jd.com/${master.skuid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(master.skuid)}n4/${master.pic}" height="100" width="100"></a>    </div>    <div class="p-name">        <a href="http://item.jd.com/${master.skuid}.html" target="_blank">${master.name}</a>    </div>    <div class="p-price"><input id="inp_${G.sku}_reco" type="checkbox" onclick="return false;" onchange="return false" wmeprice="{if master.price==""}0.00{else}${master.price}{/if}" wmaprice="${master.discount}" skuid="${master.skuid}" checked/> ${master.price}</div></div><div class="suits" data-count="${fittings.length}" style="overflow-x:{if parseInt(fittings.length)>(pageConfig.wideVersion&&pageConfig.compatible ? 4:3)}scroll{else}hidden{/if}">    <ul class="lh" style="width:${parseInt(fittings.length)*165}px">        {for item in fittings}        <li data-cat="${item.sort}" data-push="${pageConfig.product.cbRecoFittings.push(item.skuid)}" onclick=\'G.getNewCLK({ name: "tjpj", action: "1", sku:${G.sku}, csku: [${item.skuid}], index:${item_index}  })\'>            <s></s>            <div class="p-img">                <a href="http://item.jd.com/${item.skuid}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.skuid)}n4/${item.pic}" alt="" height="100" skuidth="100"></a>            </div>            <div class="p-name">                <a href="http://item.jd.com/${item.skuid}.html" target="_blank">${item.name}</a>            </div>            <div class="choose">                <input type="checkbox" id="inp_${item.skuid}" onclick="G.calculatePrice(this, \'#tab-reco\')" wmaprice="${item.discount}" wmeprice="${item.price}" skuid="${item.skuid}" />                <label for="inp_${item.skuid}" class="p-price">                    <strong class="J-p-${item.skuid}"></strong>                </label>            </div>        </li>        {/for}    </ul></div><div class="infos">    <s></s>    <div class="p-name">        <em>\u5df2\u9009\u62e9<span>0</span>\u4e2a\u914d\u4ef6</em>    </div>    <div class="p-price">\u642d&nbsp;&nbsp;\u914d&nbsp;&nbsp;\u4ef7\uff1a        <strong class="res-jdprice">{if master.price==""}\u6682\u65e0\u62a5\u4ef7{else}\uffe5 ${master.price}{/if}</strong>    </div>    <div class="p-saving">\u83b7\u5f97\u4f18\u60e0\uff1a        <span class="res-totalprice saving">\uffe5 ${master.discount}</span>    </div>    <div class="btns">        <a class="btn-buy" href="http://cart.jd.com/cart/dynamic/reBuyForOrderCenter.action?wids=${master.skuid}&nums=1" clstag="shangpin|keycount|product|tuijianpeijianbt">\u7acb\u5373\u8d2d\u4e70</a>    </div></div>'}, suitRecommendNew_TPL = '<div class="stabcon"><div class="master">    <s></s>    <div class="p-img">        <a href="http://item.jd.com/${G.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(G.sku)}n4/${G.src}" height="100" width="100"></a>    </div>    <div class="p-name">        <a href="http://item.jd.com/${G.sku}.html" target="_blank">${G.name}</a>    </div>    <div class="p-price none"><input type="checkbox" id="inp_${G.sku}_hot" onclick="return false;" onchange="return false" wmaprice="${G.mp}" wmeprice="${G.jp}" skuid="${G.sku}" checked/> ${G.jp}</div></div><div class="suits" style="overflow-x:{if parseInt(data.length)>(pageConfig.wideVersion&&pageConfig.compatible ? 4:3)}scroll{else}hidden{/if}">    <ul class="lh" style="width:${parseInt(data.length)*165}px">        {for item in data}        <li data-clk="${item.clk}" data-push="${pageConfig.product.cbCombineBuying.push(item.sku)}" onclick="reClick(\'${G.mdPerfix}3\', \'${G.sku}\', \'${item.sku}#${item.jp}\', \'${item_index}\');">            <s></s>            <div class="p-img">                <a href="http://item.jd.com/${item.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.sku)}n4/${item.img}" alt="" height="100" width="100"></a>            </div>            <div class="p-name">                <a href="http://item.jd.com/${item.sku}.html" target="_blank">${item.t}</a>            </div>            <div class="choose">                <input type="checkbox" id="inp_${item.sku}" onclick="G.calculatePrice(this, \'#tab-hot\')" wmaprice="${item.mp}" wmeprice="${item.jp}" skuid="${item.sku}" />                <label for="inp_${item.sku}" class="p-price">                    <strong class="J-p-${item.sku}"></strong>                </label>            </div>        </li>        {/for}    </ul></div><div class="infos" onclick="{for item in data}reClick(\'${G.mdPerfix}3\', \'${G.sku}\', \'${item.sku}#${item.jp}\', \'${item_index}\');{/for}">    <s></s>    <div class="p-name">        <a onclick="log(\'${G.mbPerfix}PopularBuy\',\'click\')" href="http://cart.jd.com/cart/dynamic/reBuyForOrderCenter.action?wids=${G.sku}&nums=1">\u8d2d\u4e70\u4eba\u6c14\u7ec4\u5408</a>    </div>    <div class="p-price">\u603b\u4eac\u4e1c\u4ef7\uff1a        <strong class="res-jdprice">\uffe5 ${G.jp}</strong>    </div>    <div class="p-saving">\u603b\u53c2\u8003\u4ef7\uff1a        <del class="res-totalprice">\uffe5 ${G.mp}</del>    </div>    <div class="btns">        <a onclick="log(\'${G.mbPerfix}PopularBuy\',\'click\')" class="btn-buy" href="http://cart.jd.com/cart/dynamic/reBuyForOrderCenter.action?wids=${G.sku}&nums=1" clstag="shangpin|keycount|product|renqizuhebt">\u8d2d\u4e70\u7ec4\u5408</a>    </div></div><div class="clb"></div></div>', addToCart_TPL = '<ul class="lh">    {for item in data}    {if Number(item.jp)>=0}    <li data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}" class="fore1" data-clk="${item.clk}">        <div class="p-img"><a target="_blank" href="http://item.jd.com/${item.sku}.html"><img height="100" width="100" alt="${item.t}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.sku)}n4/${item.img}"></a></div>        <div class="p-name"><a target="_blank" href="http://item.jd.com/${item.sku}.html"" title="${item.t}">${item.t}</a></div>        <div class="p-price"><strong class="J-p-${item.sku}">\uffe5${item.jp}</strong></div>    </li>    {/if}    {/for}</ul>', noStock = '<ul>    {for item in data}    {if Number(item.jp)>=0}    <li style="width:225px" data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}" class="fore1" data-clk="${item.clk}" onclick="reClick2(\'${pageConfig.product.cat[0]+"&SORec"}\',\'${pageConfig.product.skuid}\', \'${item.sku}#${item.jp}\', ${item_index})">        <div class="p-img"><a target="_blank" href="http://item.jd.com/${item.sku}.html"><img height="130" width="130" alt="${item.t}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.sku)}n3/${item.img}"></a></div>        <div class="p-name"><a target="_blank" href="http://item.jd.com/${item.sku}.html"" title="${item.t}">${item.t}</a></div>        <div class="p-price"><strong class="J-p-${item.sku}">\uffe5${item.jp}</strong></div>    </li>    {/if}    {/for}</ul>', itemDisabledReco = '<ul>    {for item in data}    {if Number(item.jp)>=0}    <li style="width:225px;height:225px;" data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}" class="fore1" data-clk="${item.clk}">        <div class="p-img"><a target="_blank" href="http://item.jd.com/${item.sku}.html"><img height="130" width="130" alt="${item.t}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.sku)}n3/${item.img}"></a></div>        <div class="p-name" style="text-align:left;"><a target="_blank" href="http://item.jd.com/${item.sku}.html"" title="${item.t}">${item.t}</a></div>        <div class="p-price" style="text-align:left;"><strong class="J-p-${item.sku}">\uffe5${item.jp}</strong></div>        <div class="p-comm"><a href="http://club.jd.com/review/${item.sku}-1-1.html" class="p-comm-${item.sku}"></a><div>    </li>    {/if}    {/for}</ul>', itemDisabled = '<p>\u7c7b\u4f3c\u5546\u54c1</p><div class="controls">{for list in json}<a class="{if list_index==0}curr{/if}" data-widget="tab-item" href="#none">${Number(list_index)+1}</a>{/for}</div><div class="itemover-related-list">    {for list in json}    <ul class="lh {if list_index!=0} hide{/if}" data-widget="tab-content">        {for item in list.tabs}        {if Number(item.jp)>=0}        <li data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}" class="fore1" data-clk="${item.clk}">            <div class="p-img"><a target="_blank" href="http://item.jd.com/${item.sku}.html"><img height="160" width="160" alt="${item.t}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.sku)}n2/${item.img}"></a></div>            <div class="p-name"><a target="_blank" href="http://item.jd.com/${item.sku}.html"" title="${item.t}">${item.t}</a></div>            <div class="p-price"><strong class="J-p-${item.sku}">\uffe5${item.jp}</strong></div>        </li>        {/if}        {/for}    </ul>    {/for}</div>', listBuyBuyNew_TPL = '<ul>  {for item in data}  <li class="fore${Number(item_index)+1}" data-clk="${item.clk}" onclick="reClick(\'${G.mdPerfix}2\',\'${G.sku}\',\'${item.sku}#${item.jp}\',${item_index});" class="fore${parseInt(arguments[2])+1}" data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}">      <div class="p-img">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html"><img height="100" width="100" alt="${item.t}" data-lazyload="${pageConfig.FN_GetImageDomain(item.sku)}n4/${item.img}"></a>      </div>      <div class="p-name">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html">${item.t}</a>      </div>      <div class="p-price">          <strong class="J-p-${item.sku}">${item.jp}</strong>      </div>  </li>  {/for}</ul>', listBrosweBrosweNew_TPL = '<ul>  {for item in data}  <li class="fore${Number(item_index)+1}" data-clk="${item.clk}" onclick="reClick(1,\'\',\'${item.sku}\',${item_index});" class="fore${parseInt(arguments[2])+1}" data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}">      <div class="p-img">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html"><img height="100" width="100" alt="${item.t}" data-lazyload="${pageConfig.FN_GetImageDomain(item.sku)}n4/${item.img}"></a>      </div>      <div class="p-name">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html">${item.t}</a>      </div>      <div class="p-price">          <strong class="J-p-${item.sku}">${item.jp}</strong>      </div>  </li>  {/for}</ul>', listBrosweBuyNew_TPL = '<ul>  {for item in data}  <li class="fore${Number(item_index)+1}" data-clk="${item.clk}" onclick="reClick(\'${G.mdPerfix}1\', ${G.sku}, \'${item.sku}#${item.jp}\', ${item_index});" class="fore${parseInt(arguments[2])+1}" data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}">      <div class="p-img">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html"><img height="100" width="100" alt="${item.t}" data-lazyload="${pageConfig.FN_GetImageDomain(item.sku)}n4/${item.img}"></a>      </div>      <div class="p-name">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html">${item.t}</a>      </div>      <div class="p-price">          <strong class="J-p-${item.sku}">${item.jp}</strong>      </div>  </li>  {/for}</ul>', listBrosweBuyPOP_TPL = '<ul>  {for item in data}  <li class="fore${Number(item_index)+1}" data-clk="${item.clk}" onclick="reClick(\'${G.mdPerfix}1\', ${G.sku}, \'${item.sku}#${item.jp}\', ${item_index});" class="fore${parseInt(arguments[2])+1}" data-push="${pageConfig.product.GrecommendSkus.push(item.sku)}">      <div class="p-img">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html"><img height="160" width="160" alt="${item.t}" data-lazyload="${pageConfig.FN_GetImageDomain(item.sku)}n2/${item.img}"></a>      </div>      <div class="p-name">          <a target="_blank" title="${item.t}" href="http://item.jd.com/${item.sku}.html">${item.t}</a>      </div>      <div class="p-price">          <strong class="J-p-${item.sku}">${item.jp}</strong>      </div>  </li>  {/for}</ul>', newCommentRate_TPL = '<div id="i-comment">    <div class="rate">        <strong>${productCommentSummary.goodRateShow}<span>%</span></strong>        <br> <span>\u597d\u8bc4\u5ea6</span>     </div>     <div class="percent">        <dl>             <dt>\u597d\u8bc4<span>(${productCommentSummary.goodRateShow}%)</span></dt>             <dd> <div style="width: ${productCommentSummary.goodRateShow}px;"></div></dd>         </dl>         <dl>             <dt>\u4e2d\u8bc4<span>(${productCommentSummary.generalRateShow}%)</span></dt>             <dd class="d1"><div style="width: ${productCommentSummary.generalRateShow}%;"> </div></dd>         </dl>         <dl>             <dt>\u5dee\u8bc4<span>(${productCommentSummary.poorRateShow}%)</span></dt>            <dd class="d1">             <div style="width: ${productCommentSummary.poorRateShow}%;"> </div></dd>         </dl>     </div>     {if typeof hotCommentTagStatistics!="undefined" && hotCommentTagStatistics.length>0}    <div class="actor-new">        <dl>            <dt>\u4e70\u5bb6\u5370\u8c61\uff1a</dt>            <dd class="p-bfc">                {for tag in hotCommentTagStatistics}<q class="comm-tags"><span>${tag.name}</span><em>(${tag.count})</em></q>{/for}            </dd>        </dl>        <div class="clr"></div> <b></b>    </div>    {elseif typeof topFiveCommentVos!="undefined"}    <div class="actor">         <em>\u53d1\u8868\u8bc4\u4ef7\u5373\u53ef\u83b7\u5f97\u4eac\u8c46\uff0c\u524d\u4e94\u4f4d\u8bc4\u4ef7\u7528\u6237\u53ef\u83b7\u5f97\u53cc\u500d\u4eac\u8c46\uff1a</em><a href="http://help.jd.com/help/question-890.html" target="_blank">\u8be6\u89c1\u4eac\u8c46\u89c4\u5219</a>        <ul>            {for User in topFiveCommentVos}             <li><span>+{if User.integral==null}0{else}${User.integral}{/if}</span><div class="u-name">${parseInt(User_index)+1}. <a href="http://club.jd.com/userreview/${User.uid}-1-1.html" target="_blank">${User.nickname}</a></div></li>            {/for}         </ul>        <div class="clr"></div>         <b></b>    </div>    {/if}    <div class="btns">         <div>\u60a8\u53ef\u5bf9\u5df2\u8d2d\u5546\u54c1\u8fdb\u884c\u8bc4\u4ef7</div>         <a href="http://club.jd.com/mycomments.aspx?pid=${productCommentSummary.productId}" class="btn-comment" target="_blank">\u53d1\u8bc4\u4ef7\u62ff\u4eac\u8c46</a>        <div><em class="hl_red">\u524d\u4e94\u540d\u53ef\u83b7\u53cc\u500d\u4eac\u8c46</em><a href="http://help.jd.com/help/question-890.html" target="_blank">[\u89c4\u5219]</a></div>    </div></div>', newCommentList_TPL = '{for list in comments}<div class="item">  <div class="user">      <div class="u-icon"> {if !list.anonymousFlag||list.anonymousFlag!=1}<a title="\u67e5\u770bTA\u7684\u5168\u90e8\u8bc4\u4ef7" href="http://me.jd.com/${list.uid}.html" target="_blank">{/if} <img height="50" width="50" upin="${list.pin}" src="http://{if typeof list.userImageUrl!=="undefined"}${list.userImageUrl}{else}misc.360buyimg.com/lib/img/u/${list.userLevelId}.gif{/if}" alt="${list.nickname}"/> {if !list.anonymousFlag||list.anonymousFlag!=1}</a>{/if}      </div>      <div class="u-name"> {if !list.anonymousFlag||list.anonymousFlag!=1}<a href="http://me.jd.com/${list.uid}.html" target="_blank">{/if}      {if !G.isNothing(list.nickname)}          ${list.anonymousFlag&&list.anonymousFlag==1 ?  list.nickname.replace(list.nickname.substring(1, list.nickname.length - 1 ), "***") : list.nickname}      {else}          ${list.pin}      {/if}      {if !list.anonymousFlag||list.anonymousFlag!=1}</a>{/if}</div> <span class="u-level"><span style="color:{if !G.isNothing(list.userLevelColor)}${list.userLevelColor}{/if}"> ${list.userLevelName}</span> {if !G.isNothing(list.userProvince)}<span class="u-address">${list.userProvince}</span>{/if}</span>  </div>  <div class="i-item" data-guid="${list.guid}" data-top="${list.top}">      <div class="o-topic">           {if list.top}<strong class="topic topic-best">\u7cbe\u534e</strong>{/if}          <span class="star sa${list.score}"></span><span><a class="date-comment" title="\u67e5\u770b\u8bc4\u4ef7\u8be6\u60c5" href="http://club.jd.com/repay/${list.referenceId}_${list.guid}_1.html" target="_blank">${list.creationTime.replace(/:[0-9][0-9]$/, "")}</a><em class="fr hl_blue">${list.userClientShow}</em></span>          <strong class="topic"><a href="http://club.jd.com/repay/${list.referenceId}_${list.guid}_1.html" target="_blank">${list.title}</a></strong>      </div>      <div class="comment-content">          {if !G.isNothing(list.commentTags)}          <dl>              <dt>\u6807&#12288;&#12288;\u7b7e\uff1a</dt>              <dd>                  {for tag in list.commentTags}                  <q data-tid="${tag.id}" class="comm-tags" href="#none"><span>${tag.name}</span><em></em></q>                  {/for}              </dd>          </dl>          {/if}          {if !G.isNothing(list.pros)}          <dl>              <dt>\u4f18\u70b9\uff1a</dt>               <dd> ${list.pros}</dd>          </dl>          {/if}           {if !G.isNothing(list.cons)}          <dl>              <dt>\u4e0d\u8db3\uff1a</dt>               <dd> ${list.cons}</dd>          </dl>          {/if}           {if !G.isNothing(list.content)}           <dl>              <dt>\u5fc3\u5f97\uff1a</dt>               <dd> ${list.content}</dd>          </dl>          {/if}            {if list.mergeOrderStatus>0&&!G.isNothing(list.images)}            <dl> <dt>\u7528\u6237\u6652\u5355\uff1a</dt>            <dd>                <div class="comment-show-pic">                                  <table cellspacing="10"><tr>                  {for image in list.images}                      {if parseInt(image_index)<3}                      <td><a class="comment-show-pic-wrap" href="http://club.jd.com/bbsDetail/${list.showOrderComment.referenceId}_${list.showOrderComment.guid}_1.html" target="_blank" clstag="shangpin|keycount|product|shaipic"><img alt="" src="${image.imgUrl}" alt="${list.nickname} \u7684\u6652\u5355\u56fe\u7247" /></a></td>                      {/if}                  {/for}                  </tr></table>                                <span clstag="shangpin|keycount|product|shaitext"><em class="fl" style="color:#9C9A9C;margin-right:5px;">\u5171${list.images.length}\u5f20\u56fe\u7247</em><a href="http://club.jd.com/bbsDetail/${list.showOrderComment.referenceId}_${list.showOrderComment.guid}_1.html" target="_blank" class="p-simsun">\u67e5\u770b\u6652\u5355&gt;</a></span>                </div>            </dd>            {/if}          <div class="dl-extra">              {if !G.isNothing(list.productColor)}              <dl>                  <dt>\u989c\u8272\uff1a</dt>                  <dd>${list.productColor}</dd>              </dl>              {/if}              {if !G.isNothing(list.productSize)}              <dl>                  <dt>\u578b\u53f7\uff1a</dt>                  <dd>${list.productSize}</dd>              </dl>              {/if}              {if true}              {for attr in productAttr}                  {if !G.isNothing(list[attr.key])}                  <dl>                      <dt>{if attr.type=="baby_date"}{if list[attr.key] > strtotime(list.creationTime)}\u6000\u5b55\u5468\u671f{else}\u5b9d\u5b9d\u5e74\u9f84{/if}{else}${attr.name}{/if}\uff1a</dt>                      <dd>                          {if attr.type=="baby_date"}                              {if list[attr.key] > strtotime(list.creationTime)}                                 \u6000\u5b55 ${ Math.ceil(40-(list[attr.key]-strtotime(list.creationTime))/7/86400) }\u5468                              {else}                                  ${monthDay( list[attr.key], strtotime(list.creationTime, null, true), list_index )}                              {/if}                          {else}                              ${list[attr.key]} ${attr.unit}                          {/if}                      </dd>                  </dl>                  {/if}              {/for}              {/if}          </div><s class="clr"></s>          {if typeof list.referenceTime !=="undefined"}          <dl>              <dt>\u8d2d\u4e70\u65e5\u671f\uff1a</dt>              <dd>${list.referenceTime.split(" ")[0]}</dd>          </dl>          {/if}      </div>      <div class="btns">          <a class="btn-reply btn-toggle fr" data-id="${list.id}" href="#none">\u56de\u590d(<em>${list.replyCount}</em>)</a>          <div class="useful fr" id="${list.guid}">              <a name="agree" class="btn-agree" title="${list.usefulVoteCount}" href="#none">\u6709\u7528(${list.usefulVoteCount})</a>              <!--<a name="oppose" class="btn-oppose" title="${list.uselessVoteCount}" href="#none">\u6ca1\u7528(${list.uselessVoteCount})</a>-->          </div>      </div>      <div class="item-reply reply-lz" data-name="{if !G.isNothing(list.nickname)}${list.anonymousFlag&&list.anonymousFlag==1 ?  list.nickname.replace(list.nickname.substring(1, list.nickname.length - 1 ), "***") : list.nickname}{else}${list.pin}{/if}" data-uid="{list.uid}">          <strong></strong>          <div class="reply-list">               <div id="btn-toggle-${_type}-${list.id}" class="replay-form none">                   <div class="arrow"> <em>\u25c6</em><span>\u25c6</span></div>                   <div class="reply-wrap">                       <p><em>\u56de\u590d</em>  <span class="u-name">                           ${list.anonymousFlag&&list.anonymousFlag==1 ?  list.nickname.replace(list.nickname.substring(1, list.nickname.length - 1 ), "***") : list.nickname}                       \uff1a</span></p>                       <div class="reply-input">                           <div class="fl"><input type="text"></div>                           <a href="#none" class="reply-btn btn-gray p-bfc reply-btn-lz" data-nick="${list.nickname}" data-guid="${list.guid}" data-replyId="${list.id}">\u56de\u590d</a>                           <div class="clr"></div>                       </div>                   </div>               </div>          </div>      </div>      {for reply in list.replies}      <div class="item-reply hide-default {if list.top} hide{/if}" data-index="${list.replyCount-parseInt(reply_index)}" data-name="${reply.nickname}" data-uid="${reply.uid}">          <strong>${list.replyCount-parseInt(reply_index)}</strong>          <div class="reply-list">              <div class="reply-con">                  <span class="u-name">                      {if reply.userClient==98&&!G.isNothing(reply.venderShopInfo)}                          <a class="parentReplyFrom" href="${reply.venderShopInfo.appName}" target="_blank">${reply.venderShopInfo.title}<b class="sj"></b></a>                      {else}                          <a target="_blank" href="http://club.jd.com/userreview/${reply.uid}-1-1.html">                              ${reply.nickname}                              {if reply.userClient==99}<b></b>{/if}                          </a>                      {/if}                      {if parseInt(reply.parentId, 10)>0}                          <em>\u56de\u590d</em>                          {if !G.isNothing(reply.parent)&&reply.parent.userClient==98&&!G.isNothing(reply.parent.venderShopInfo)}                              <a class="parentReplyFrom" href="${reply.parent.venderShopInfo.appName}" target="_blank">${reply.parent.venderShopInfo.title}<b class="sj"></b></a>                          {else}                              {if !G.isNothing(reply.parent)}<a target="_blank" href="http://club.jd.com/userreview/${reply.parent.uid}-1-1.html">{if parseInt(reply.parentId, 10)<0}${list.nickname}{else}${reply.parent.nickname}{if reply.parent.userClient==99}<b></b>{/if}{/if}</a>{/if}                          {/if}                      {/if}\uff1a                  </span>                  <span class="u-con">${reply.content}</span>              </div>              <div class="reply-meta">                  <span class="reply-left fl">${reply.creationTimeString.replace(/:[0-9][0-9]$/, "")}</span>                  <a class="p-bfc btn-toggle hl_blue" data-id="${reply.id}" href="#none">\u56de\u590d</a>              </div>              <div id="btn-toggle-${_type}-${reply.id}" class="replay-form none">                  <div class="arrow">                      <em>\u25c6</em><span>\u25c6</span>                  </div>                  <div class="reply-wrap">                      <p><em>\u56de\u590d</em> <span class="u-name">${reply.nickname}\uff1a</span></p>                      <div class="reply-input">                          <div class="fl"><input type="text" /></div>                          <a href="#none" class="reply-btn btn-gray p-bfc" data-nick="${reply.nickname}" data-guid="${list.guid}" data-replyId="${reply.id}">\u56de\u590d</a>                          <div class="clr"></div>                      </div>                  </div>              </div>          </div>      </div>      {/for}      {if list.replyCount > 5}      <div class="ac">           <a class="hl_blue" href="http://club.jd.com/repay/${productCommentSummary.productId}_${list.guid}_1.html" title="\u67e5\u770b\u5168\u90e8\u56de\u590d" target="_blank">\u67e5\u770b\u5168\u90e8\u56de\u590d&gt;&gt;</a>      </div>      {/if}   </div>  <div class="corner tl"></div></div>{forelse}    {if score == 0}     <div class="norecode">         \u6682\u65e0\u5546\u54c1\u8bc4\u4ef7\uff01<span style="hl-red">\u4e89\u62a2\u4ea7\u54c1\u8bc4\u4ef7\u524d5\u540d\uff0c\u524d5\u4f4d\u8bc4\u4ef7\u7528\u6237\u53ef\u83b7\u5f97\u591a\u500d\u4eac\u8c46\u54e6\uff01</span>\uff08<a href="http://help.jd.com/help/question-890.html" target="_blank">\u8be6\u89c1\u4eac\u8c46\u89c4\u5219</a>\uff09\uff01    </div>    <div class="extra clearfix">        <div class="join">            \u53ea\u6709\u8d2d\u4e70\u8fc7\u8be5\u5546\u54c1\u7684\u7528\u6237\u624d\u80fd\u8fdb\u884c\u8bc4\u4ef7\u3002&nbsp;&nbsp;<a target="_blank" href="http://club.jd.com/Simplereview/${productCommentSummary.productId}.html" name="http://club.jd.com/Simplereview/${productCommentSummary.productId}.html" id="A1">[\u53d1\u8868\u8bc4\u4ef7]</a>&nbsp;&nbsp;<a target="_blank" href="http://club.jd.com/allreview/1-1.html">[\u6700\u65b0\u8bc4\u4ef7]</a>        </div>    </div>     {elseif score == 3}         <div class="norecode"> \u6682\u65e0\u597d\u8bc4\uff01</div>     {elseif score == 2}         <div class="norecode"> \u6682\u65e0\u4e2d\u8bc4\uff01</div>     {elseif score == 1}         <div class="norecode"> \u6682\u65e0\u5dee\u8bc4\uff01</div>     {elseif score == 4}         <div class="norecode"> \u6682\u65e0\u6652\u5355\u8bc4\u4ef7\uff01</div>    {/if}{/for}<div class="clearfix">    {if productCommentSummary.commentCount}<div class="fl" style="padding:8px 0 0 120px;"><a href="http://club.jd.com/review/${productCommentSummary.productId}-0-1-0.html" target="_blank" class="hl_blue">[\u67e5\u770b\u5168\u90e8\u8bc4\u4ef7]</a></div>{/if}    <div class="pagin fr" clstag="shangpin|keycount|product|fanye" id="commentsPage${score}">    </div></div>', discuss_TPL = '<table width="100%" cellspacing="0" cellpadding="0" border="0">    <tbody>        <tr>            <th class="col1">\u4e3b\u9898</th>            <th class="col2">\u56de\u590d/\u6d4f\u89c8</th>            <th class="col3">\u4f5c\u8005</th>            <th class="col4">\u65f6\u95f4</th>        </tr>        {for comment in discussComments.Comments}        {if Number(comment_index) < 10}        <tr>            <td class="col1">                <div class="topic">                    {if comment.referenceType == "Order"}                    <b class="icon shai"></b>                    {elseif comment.referenceType == "User"}                    <b class="icon lun"></b>                    {elseif comment.referenceType == "Question"}                    <b class="icon wen"></b>                    {elseif comment.referenceType == "Friend"}                    <b class="icon quan"></b>                    {/if}                    <a href="http://club.jd.com/bbsDetail/${comment.referenceId}_${comment.id}_1.html" target="_blank">${comment.title}</a>                </div>            </td>            <td class="col2">${comment.replyCount}/${comment.viewCount}</td>            <td class="col3">                <div class="u-name">                    <a target="_blank" title="${comment.uRemark}" href="http://me.jd.com/${comment.uid}.html">{if comment.uRemark}${comment.uRemark}{else}${comment.userId}{/if}</a>                </div>            </td>            <td class="col4">${comment.creationTime}</td>        </tr>        {/if}        {/for}    </tbody></table><table id="discuss-comment" width="100%" cellspacing="0" cellpadding="0" border="0"></table>{if discussComments.CommentCount <= 0}    {if parseInt(ReferenceType) == 1}        <div class="norecode">\u6682\u65e0\u8ba8\u8bba\u5e16\uff01</div>    {elseif parseInt(ReferenceType) == 2}        <div class="norecode">\u6682\u65e0\u95ee\u7b54\u5e16\uff01</div>    {elseif parseInt(ReferenceType) == 3}        <div class="norecode">\u6682\u65e0\u5708\u5b50\u8d34\uff01</div>    {elseif parseInt(ReferenceType) == 4}        <div class="norecode">\u6682\u65e0\u6652\u5355\u5e16\uff01</div>    {else}        <div class="norecode">\u6682\u65e0\u7f51\u53cb\u8ba8\u8bba\uff01</div>    {/if}{/if}<div class="extra clearfix">    {if discussComments.CommentCount > 0}    <div class="total">          <span>\u5171${Discuss.count=discussComments.CommentCount}\u4e2a\u8bdd\u9898</span>&nbsp;&nbsp;           <a target="_blank" href="http://club.jd.com/bbs/${referenceId}-1-0-${ReferenceType}.html">\u6d4f\u89c8\u5168\u90e8\u8bdd\u9898&gt;&gt;</a>    </div>    {/if}    <div class="contact">        \u6709\u95ee\u9898\u8981\u4e0e\u5176\u4ed6\u7528\u6237\u8ba8\u8bba\uff1f<a target="_blank" href="http://club.jd.com/bbs/${referenceId}-1.html" name="http://club.jd.com/bbs/${referenceId}-1.html" id="userComment${ReferenceType}">[\u53d1\u8868\u5e16\u5b50]</a>    </div></div>', consult_TPL = '{if !!Consultations}    {for Consultation in Consultations}    <div class="item{if Consultation_index% 2 == 1} odd{/if}">        <div class="user">            <span class="u-name">\u7f51\u3000\u3000\u53cb\uff1a${Consultation.UNickNme}</span>             <!--<span class="u-level" name="${Consultation.UserId}"></span>-->             <span class="u-level" ><font style="color:${Consultation.UserLevelColor}"> ${Consultation.UserLevelName} </font></span>             <span class="date-ask">${Consultation.CreationTime}</span>        </div>        <dl class="ask">            <dt><b></b>\u54a8\u8be2\u5185\u5bb9\uff1a</dt>            <dd><a target="_blank" href="http://club.jd.com/consultation/${Consultation.ProductId}-${Consultation.Id}.html">${Consultation.Content}</a></dd>        </dl>        <dl class="answer">            {for Reply in Consultation.Replies}            <dt>                <b></b>                {if Reply.sst == 2}\u5356\u5bb6\u56de\u590d\uff1a {else}\u4eac\u4e1c\u56de\u590d\uff1a{/if}             </dt>            <dd>                <div class="content">${Reply.sword}</div>                <div class="date-answer">${Reply.sinsdate}</div>            </dd>            {/for}        </dl>    </div>    {/for}{else}    <div class="norecode">\u6682\u65e0\u8be5\u7c7b\u54a8\u8be2\uff01</div>{/if}<div class="extra clearfix">    <div class="total hide-pop">        \u5171<strong>${SearchParameter.Count}</strong>\u6761&nbsp;&nbsp;         <a href="http://club.jd.com/allconsultations/${SearchParameter.ProductId}-1-1.html" target="_blank">\u6d4f\u89c8\u6240\u6709\u54a8\u8be2\u4fe1\u606f&gt;&gt;</a>     </div>    <div class="join">        \u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7{if $("#j-im").length}\u54a8\u8be2&nbsp;&nbsp;<a id="j-im-extra" class="djd-im hide" clstag="shangpin|keycount|product|imbtn"><b>\u8054\u7cfb\u5ba2\u670d</b></a><span class="hide-pop">\uff0c\u6216</span>{/if}        <a id="consultation" href="http://club.jd.com/allconsultations/${SearchParameter.ProductId}-1-1.html#form1">[\u53d1\u8868\u54a8\u8be2]</a>    </div></div>', consult_search_TPL = '{for item in list}<div class="item search-result-item">    <div class="user">        <span class="u-name">\u7f51\u3000\u3000\u53cb\uff1a${item.nickname}</span>        <span class="date-ask">${item.sindate}</span>    </div>    <dl class="ask">        <dt><b></b>\u54a8\u8be2\u5185\u5bb9\uff1a</dt>        <dd>${item.sword}</dd>    </dl>    <dl class="answer">        <dt><b></b>\u4eac\u4e1c\u56de\u590d\uff1a</dt>        <dd>{if item.sword!==""}${item.sword2}{/if}</dd>    </dl>    <div id="${item.sid}" class="useful">\u60a8\u5bf9\u6211\u4eec\u7684\u56de\u590d\uff1a        <a name="2" href="#none" class="btn-pleased">\u6ee1\u610f</a>        (<span>${item.zantong}</span>)\u3000        <a name="2" href="#none" class="btn-unpleased">\u4e0d\u6ee1\u610f</a>        (<span>${item.fd}</span>)    </div></div>{/for}', search_TPL = '{for list in Product}<dl skuid="${list.wareid}" data-push="${pageConfig.product.searchList.push(list.wareid)}">    <dt class="p-img"><a target="_blank" href="http://item.jd.com/${list.wareid}.html"><img width="50" height="50" src="${pageConfig.FN_GetImageDomain(list.wareid)}n5/${list.Content.imageurl}" alt=""></a></dt>    <dd class="p-name"><a target="_blank" href="http://item.jd.com/${list.wareid}.html">${list.Content.warename}</a></dd>    <dd class="p-price"><strong class="J-p-${list.wareid}"></strong></dd></dl>{/for}', fq_serverSite = "http://jd2008.jd.com/purchase/", fq_serverSiteService = "http://jd2008.jd.com/purchaseservice/", fq_serverUrl = "ajaxServer/ForMiniCart_fq.aspx", fq_btnPanel = "choose-btn-divide", fq_skuId = "", fq_TipHtml = "", isFqOpen = !0, fq_returnData = null, isIe = window.ActiveXObject ? !0 : !1, Grecommend = function(t, e, i, s, a) {
    this.sku = t, this.rid = e, this.locId = i, this.lim = a || 6, this.pin = readCookie("pin"), this.pid = null === i ? 1 : i.split("-")[0], this.el = s;
    var n = this;
    return 1713 == pageConfig.product.cat[0] ? !1 : ("#tab-hot" === s.selector || "#out-of-stock #noitem-list" === s.selector ? n.init() : $(s.selector).parent().wrap('<div data-lazyload="true"></div>').parent().Jlazyload({type: "module"}, function() {
        n.init()
    }), void 0)
};
Grecommend.prototype = {init: function() {
        var t = readCookie("__jda");
        this.uuid = t ? "-" == t.split(".")[1] ? -1 : t.split(".")[1] : -1, this.get(this.rid)
    },get: function(t) {
        var e = this, i = {sku: this.sku,p: t || this.rid,lid: this.pid,lim: this.lim,uuid: this.uuid,ec: "utf-8"};
        if (pageConfig.product)
            for (var s = 0; pageConfig.product.cat.length > s; s++)
                i["c" + (s + 1)] = pageConfig.product.cat[s];
        this.pin && (i.pin = this.pin)
//        , 
//        $.ajax({url: "http://diviner.jd.com/diviner?" + decodeURIComponent($.param(i)),dataType: "jsonp",scriptCharset: "utf-8",success: function(t) {
//                e.set(t)
//            }})
    },set: function(t) {
        function e(t, e) {
            for (var i = t.length / e, s = [], a = 0; i > a; a++)
                s.push({tabs: [],increment: null,count: e,skuids: []});
            for (var n = 0, o = 0; t.length > o; o++)
                0 == o % e && n++, s[n - 1].tabs.push(t[o]), s[n - 1].increment = n, s[n - 1].skuids.push(t[o].wid);
            return s
        }
        function i() {
            pageConfig.product.cbCombineBuying = [pageConfig.product.skuid], a.attr("loaded", "true").html(suitRecommendNew_TPL.process(t)), log(G.mdPerfix + "3", "Show"), Recommend.switchTab("#th-hot"), G.removeLastAdd(), $("#tab-hot .master input").attr("skuid", pageConfig.product.skuid), G.getPriceNum(pageConfig.product.cbCombineBuying, readCookie("ipLoc-djd"), a, null, function(t, e) {
                a.find('input[skuid="' + t + '"]').attr("wmeprice", e.p), a.find('input[skuid="' + t + '"]').attr("wmaprice", e.m), G.calculatePrice($("#tab-hot .master input")[0], "#tab-hot")
            })
        }
        var s = this, a = s.el;
        if (pageConfig.product.GrecommendSkus = [], t.success && t.data && t.data.length > 0) {
            if (105e3 === this.rid && this.el.html(listBrosweBrosweNew_TPL.process(t)).parent().show(), 102004 === this.rid && this.el.html(listBrosweBrosweNew_TPL.process(t)).parent().show(), 103001 === this.rid && this.el.html(listBrosweBuyNew_TPL.process(t)).parent().show(), 102003 === this.rid && this.el.html(listBrosweBuyNew_TPL.process(t)).parent().show(), 103002 === this.rid && (this.el.html(listBuyBuyNew_TPL.process(t)).parent().show(), log(G.mdPerfix + "2", "Show")), 102002 === this.rid && this.el.html(listBuyBuyNew_TPL.process(t)).parent().show(), 102001 === this.rid && (1315 == G.cat[0] || 11729 == G.cat[0] ? (pageConfig.product.cbCombineBuying = [pageConfig.product.skuid], s.set1315(t)) : i()), 103003 === this.rid && i(), 902029 === this.rid && this.el.html(listBrosweBuyPOP_TPL.process(t)).parent().show(), (102001 === this.rid || 103003 === this.rid) && G.getPriceNum(pageConfig.product.GrecommendSkus, null, this.el), 303001 === this.rid && this.el.html(addToCart_TPL.process(t)).parent().show(), 103e3 === this.rid || 102e3 === this.rid) {
                this.el.html(noStock.process(t)), $("#out-of-stock").show();
                var n = pageConfig.wideVersion && pageConfig.compatible ? 5 : 4;
                $("#noitem-list").imgScroll({visible: n,showControl: !0,step: n,loop: !1,prev: "#noitem-forward",next: "#noitem-backward",disableClass: "disabled"})
            }
            if (902011 === this.rid) {
                var o = pageConfig.wideVersion && pageConfig.compatible ? 4 : 3;
                t.json = e(t.data, o), this.el.html(itemDisabled.process(t)), this.el.parents(".clearfix").eq(0).attr("data-widget", "tabs").Jtab({compatible: !0,auto: !0})
            }
            if (902018 === this.rid) {
                var a = $("#noitem-list");
                this.el.html(itemDisabledReco.process(t)), $("#out-of-stock").show();
                var n = pageConfig.wideVersion && pageConfig.compatible ? 5 : 4;
                a.imgScroll({visible: n,showControl: !0,step: n,loop: !1,prev: "#noitem-forward",next: "#noitem-backward",disableClass: "disabled"}), G.getCommentData(pageConfig.product.GrecommendSkus, a, null)
            }
            G.getPriceNum(pageConfig.product.GrecommendSkus, readCookie("ipLoc-djd"), this.el), this.el.find("img").Jlazyload({type: "image"}), this.setTrackCode(t.impr)
        }
    },set1315: function(t) {
        function e(t) {
            if (t) {
                var e = $("#pop-box .p-scroll-wrap"), i = $("#pop-box .p-scroll-next"), s = $("#pop-box .p-scroll-prev");
                e.find("li").length > 4 && e.imgScroll({showControl: !0,width: 30,height: 30,visible: 4,step: 1,prev: s,next: i})
            } else
                G.setScroll("#stabcon_pop")
        }
        function i(e, i) {
            var e = e;
            if (i)
                var s = i.split("|"), a = s[1], p = s[2];
            $("#pop-box").length > 0 && $("#pop-box").attr("data-ind", e), r.clear().show(e, function() {
                var i = $("#pop-list-" + e), s = i.attr("data-sku"), r = i.find("a.curr").attr("title");
                d(e), n.del(), l.get(e), o(e, a || null, t), c.get(s, a || r, e, p)
            })
        }
        var s = $("#tab-hot"), a = {set: function(t, e) {
                1 > $("#p-selected-" + t).length ? $("#pop-list-" + t).find(".p-scroll").hide().before('<div id="p-selected-' + t + '" class="p-selected">\u5df2\u9009\u62e9\uff1a' + e.split("|")[1] + "\uff0c" + e.split("|")[2] + ' <a data-ind="' + t + '" class="p-modify" href="#none">\u4fee\u6539</a></div>') : $("#p-selected-" + t).html("\u5df2\u9009\u62e9\uff1a" + e.split("|")[1] + "\uff0c" + e.split("|")[2] + ' <a data-ind="' + t + '" class="p-modify" href="#none">\u4fee\u6539</a>'), $(".p-modify").unbind("click").bind("click", function() {
                    i(parseInt(this.getAttribute("data-ind")), e)
                }), $("#p-selected-" + t).attr("data-res", e)
            }}, n = {set: function(t) {
                var e = t || $("#stabcon_pop .pop-list");
                e.find(".p-scroll").each(function() {
                    var t = $(this), e = t.prev(".p-img").find("img"), i = t.find(".p-scroll-wrap a");
                    G.thumbnailSwitch(i, e, "/n2/", "curr")
                })
            },del: function(t) {
                var e = t || $("#stabcon_pop .pop-list");
                e.find(".p-scroll").each(function() {
                    $(this).find(".p-scroll-wrap img").unbind("mouseover")
                })
            }}, o = function(t, e) {
            var i = $("#p-scroll .p-scroll-wrap a"), s = $("#pop-list-" + t).find(".p-img img"), a = $("#pop-list-" + t).attr("data-sku");
            i.unbind("click").bind("click", function() {
                var e = ($(this), $(this).find("img").attr("src")), n = $(this).attr("title");
                c.get(a, n, t, null), i.removeClass("curr"), $(this).addClass("curr"), s.attr("src", e.replace("/n5/", "/n2/")), $("#pop-list-" + t).attr("data-res") && $("#pop-list-" + t).removeAttr("data-res")
            }), e && i.each(function() {
                $(this).attr("title") == e && $(this).trigger("click")
            })
        }, r = {show: function(t, e) {
                $("#pop-box").css({left: t * $("#stabcon_pop .pop-list").outerWidth() - $("#stabcon_pop .suits").scrollLeft(),visibility: "visible"}), "function" == typeof e && e(t)
            },hide: function() {
                return $("#pop-box").css("visibility", "hidden"), this
            },clear: function() {
                var t = ($("#pop-box"), $("#p-scroll,#p-size,#p-tips"));
                return t.html(""), this.isClear = !0, n && n.set(), this
            }}, c = {sClick: function(t, e) {
                var i = $("#p-size a"), s = $("#pop-list-" + t), a = this;
                i.click(function() {
                    var t = $(this).attr("data-resku"), e = $("#p-scroll .p-scroll-wrap .curr").attr("title"), n = $(this).attr("title"), o = $(this).attr("wmaprice"), r = $(this).attr("wmeprice");
                    i.removeClass("selected"), $(this).addClass("selected"), a.clearTips("#p-noselected"), s.attr("data-res", [t, e, n, o, r].join("|"))
                }), e && $("#p-size a").each(function() {
                    $(this).attr("title") == e && $(this).trigger("click")
                })
            },noSize: function(t, e) {
                $("#p-size").addClass("nosizes").html(""), $("#pop-list-" + t).attr("data-res", [e.Subcodesku[0].Sku, $("#pop-box .curr").attr("title"), "\u65e0\u5c3a\u7801", e.Subcodesku[0].WMeprice, e.Subcodesku[0].WMaprice].join("|"))
            },get: function(t, e, i, s, a) {
                var n = this, o = {ip: getCookie("ipLocation"),sku: t,color: encodeURI(e)};
                $("#pop-list-" + i).find(".no-scroll").length > 0 && (o = {ip: getCookie("ipLocation"),sku: t}), window.fetchJSON_sizeList = function(e) {
                    1 > e.Subcodesku.length ? (n.setTips('<p id="p-nostock">\u8be5\u5546\u54c1\u5df2\u4e0b\u67b6\u6216\u65e0\u8d27</p>'), $("#p-size").html("")) : 1 == e.Subcodesku.length && 0 == !!e.Subcodesku[0].sizename || "\u65e0" == e.Subcodesku[0].sizename ? (n.noSize(i, e), n.clearTips("#p-nostock")) : (n.set(e, t, i, s), n.clearTips("#p-nostock")), "function" == typeof a && a(e)
                }, $.ajax({url: "http://prs.jd.com/Pop/CodeServiceSize.aspx?callback=fetchJSON_sizeList",dataType: "script",cache: !0,data: o})
            },set: function(t, e, i, s) {
                var a = '{for list in Subcodesku}<a href="#none" data-resku="${list.Sku}" wmaprice="${list.WMaprice}" wmeprice="${list.WMeprice}" title="${list.sizename}">${list.sizename}</a>{/for}';
                $("#p-size").html(a.process(t)), this.sClick(i, s)
            },setTips: function(t) {
                "" == $("#p-tips").html() && $("#p-tips").html(t)
            },clearTips: function(t) {
                $("#pop-box").find(t).remove()
            }}, l = {get: function(t) {
                $("#p-scroll").append($("#pop-list-" + t).find(".p-scroll").clone().show()), this.set(t)
            },set: function() {
                e(!0)
            }}, d = function(t) {
            var t = t;
            $("#p-selected-ok").unbind("click").bind("click", function() {
                var e = $("#pop-box");
                if (e.find("#p-scroll .curr").attr("title"), 1 > $("#pop-box .curr").length)
                    c.setTips('<p id="p-noselected">\u8bf7\u9009\u62e9\u989c\u8272</p>');
                else if (1 > $("#pop-box .selected").length && !$("#p-size").hasClass("nosizes"))
                    c.setTips('<p id="p-noselected">\u8bf7\u9009\u62e9\u5c3a\u7801</p>');
                else {
                    a.set(t, $("#pop-list-" + t).attr("data-res")), r.hide().clear();
                    var i = $("#pop-list-" + t), s = i.attr("data-res").split("|"), n = s[0], o = s[3], l = s[4], d = i.find(".p-price img");
                    d.attr("src"), i.find("input:checkbox").attr({skuid: n,wmaprice: o,wmeprice: l,checked: !0}), G.calculatePrice($("#pop-list-" + t).find("input:checkbox")[0], "#tab-hot")
                }
            }), $("#p-selected-cancel").click(function() {
                r.hide().clear(), 1 > $("#p-selected-" + t).length && $("#pop-list-" + t).find("input:checkbox").attr("checked", !1)
            })
        };
        if (t.success) {
            var p = '<div id="stabcon_pop" class="stabcon stabcon_big"><div class="master">    <s></s>    <div class="p-img">        <a href="http://item.jd.com/${G.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(G.sku)}n2/${G.src}" height="160" width="160"></a>    </div>    <div class="p-name">        <a href="http://item.jd.com/${G.sku}.html" target="_blank">${G.name}</a>    </div>    <div class="p-price none"><input type="checkbox" id="inp_${G.sku}_hot" onclick="return false;" onchange="return false" wmaprice="${pageConfig.product.mp}" wmeprice="${pageConfig.product.jp}" skuid="${G.sku}" checked/> ${pageConfig.product.jp}</div></div><div class="pop-wrap"><div id="pop-box" class="">    <div id="p-scroll"></div>    <div id="p-size"></div>    <div id="p-tips"></div>    <div id="p-size-btn">        <a href="#none" id="p-selected-ok">\u786e\u5b9a</a><a id="p-selected-cancel" href="#none">\u53d6\u6d88</a>    </div></div><div class="suits" style="overflow-x:{if parseInt(data.length)>(pageConfig.wideVersion&&pageConfig.compatible ? 3:2)}scroll;{else}hidden;{/if}">    <ul class="lh" style="width:${parseInt(data.length)*200+20}px">        {for item in data}        <li data-push="${pageConfig.product.cbCombineBuyingPop.push(item.sku)}" class="pop-list {if parseInt(item_index)+1==parseInt(data.length)} last-item{/if}" id="pop-list-${item_index}" data-sku="${item.sku}" data-ind="${item_index}" onclick="reClick(\'${G.mdPerfix}3\', \'${G.sku}\', \'${item.sku}#${item.jp}\', \'${item_index}\');" data-clk="${item.clk}">            <s></s>            <div class="p-img">                <a href="http://item.jd.com/${item.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.sku)}n2/${item.img}" alt="" height="160" width="160"></a>            </div>            <div class="p-scroll">                <a href="javascript:;" class="p-scroll-btn p-scroll-prev">&lt;</a>                <div class="p-scroll-wrap">                    <ul>                    {for color in item.subsku}                        {if parseInt(color_index)==0}<li><a href="javascript:;" class="no-scroll curr" title="${item.popco}"><img data-img="1" width="25" height="25" alt="" src="${pageConfig.FN_GetImageDomain(item.sku)}n5/${item.img}"></a></li>{/if}                        <li><a href="javascript:;" class="{if parseInt(color_index)==0}curr{/if}" data-sku="${item.sku}" title="${color.hit}"><img data-img="1" width="25" height="25" alt="" src="${pageConfig.FN_GetImageDomain(item.sku)}n5/${color.img}" data-img="1"></a></li>                    {forelse}                        <li><a href="javascript:;" class="no-scroll curr" title="\u65e0"><img data-img="1" width="25" height="25" alt="" src="${pageConfig.FN_GetImageDomain(item.sku)}n5/${item.img}"></a></li>                    {/for}                    </ul>                </div>                <a href="javascript:;" class="p-scroll-btn p-scroll-next">&gt;</a>            </div>            <div class="p-name">                <a href="http://item.jd.com/${item.sku}.html" target="_blank">${item.t}</a>            </div>            <div class="choose">                <input type="checkbox" data-nocolor="${item.subsku.length<1}" id="inp_${item.sku}" class="{if parseInt(item.subsku.length)==0}no-pop-win{/if}" wmaprice="${item.wmaprice}" wmeprice="${item.jp}" skuid="${item.sku}" />                <label for="inp_${item.sku}" class="p-price">                    <strong class="J-p-${item.sku}"></strong>                </label>            </div>        </li>        {/for}    </ul></div></div><div class="infos" onclick="{for item in data}reClick(\'${G.mdPerfix}3\', \'${G.sku}\', \'${item.sku}#${item.jp}\', \'${item_index}\');{/for}">    <s></s>    <div class="p-name">        <a onclick="log(\'${G.mbPerfix}PopularBuy\',\'click\')" href="http://jd2008.jd.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${G.sku}">\u8d2d\u4e70\u4eba\u6c14\u7ec4\u5408</a>    </div>    <div class="p-price">\u603b\u4eac\u4e1c\u4ef7\uff1a        <strong class="res-jdprice">\uffe5 ${pageConfig.product.jp}</strong>    </div>    <div class="p-saving">\u603b\u53c2\u8003\u4ef7\uff1a        <del class="res-totalprice">\uffe5 ${pageConfig.product.mp}</del>    </div>    <div class="btns">        <a onclick="log(\'${G.mbPerfix}PopularBuy\',\'click\')" class="btn-buy" href="http://jd2008.jd.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${G.sku}">\u8d2d\u4e70\u7ec4\u5408</a>    </div></div><div class="clb"></div></div>';
            pageConfig.product.cbCombineBuyingPop = [], s.attr("loaded", "true").html(p.process(t)), pageConfig.FN_ImgError($("#tab-hot")[0]), $("#stabcon_pop .suits").scroll(function() {
                if ("visible" == $("#pop-box").css("visibility")) {
                    var t = parseInt($("#pop-box").attr("data-ind"));
                    $("#pop-list-" + t).find("input:checkbox").attr("checked", !1), r.clear().hide()
                }
            }), n.set(), e(!1), $("#stabcon_pop ul input:checkbox").click(function() {
                var t = $(this), e = t.attr("data-nocolor"), s = t.parents(".pop-list"), a = s.attr("data-ind");
                if ("visible" == $("#pop-box").css("visibility")) {
                    var o = parseInt($("#pop-box").attr("data-ind"));
                    $("#pop-list-" + o).find("input:checkbox").attr("checked", !1), r.clear().hide()
                }
                "true" == e ? G.calculatePrice(t[0], "#tab-hot") : 1 == $(this).attr("checked") ? i(a) : ($("#p-selected-" + a) && ($("#p-selected-" + a).remove(), $("#pop-list-" + a).find(".p-scroll").show(), n.set($("#pop-list-" + a))), G.calculatePrice(t[0], "#tab-hot"))
            }), log(G.mdPerfix + "3", "Show"), Recommend.switchTab("#th-hot"), G.getPriceNum(pageConfig.product.cbCombineBuyingPop, null, s, null, function(t, e) {
                s.find('input[skuid="' + t + '"]').attr("wmeprice", e.p), s.find('input[skuid="' + t + '"]').attr("wmaprice", e.m)
            })
        }
    },setTrackCode: function(t) {
        var e = this.el.find("li"), i = this, s = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
        e.each(function() {
            var t = $(this).attr("data-clk");
            $(this).bind("click", function(e) {
                var a = $(e.target);
                (a.is("a") || a.is("img") || a.is("span")) && i.newImage(t + s, !0), a.is("input") && 1 == a.attr("checked") && i.newImage(t + s, !0)
            })
        }), this.newImage(t + s, !0)
    },newImage: function(t, e, i) {
        var s = new Image;
        t = e ? t + "&random=" + Math.random() + new Date : t, s.onload = function() {
            i !== void 0 && i(t)
        }, s.setAttribute("src", t)
    }};
var Recommend = {init: function(t) {
        this.type = t, this.renderHTML(), this.renderRecoFittingsHTML(), this.getSuits()
    },getSuits: function() {
//        G.isPop ? $.ajax({url: "http://misc.360buyimg.com/product/js/2012/suits.js",dataType: "script",scriptCharset: "gb2312",cache: !0,success: function() {
//                "undefined" != typeof Suits && Suits.init(G.sku)
//            }}) : $.ajax({url: "http://pi.3.cn/suitinfo/get",data: {id: G.sku,origin: 1},dataType: "script",cache: !0,scriptCharset: "utf-8"})
    },renderRecoFittingsHTML: function() {
//        var t = G.sku, e = 6728 == G.cat[0] || 653 == G.cat[1] || 830 == G.cat[1], i = "-672-6864-1105-717-720-718-719-798-", s = RegExp("-" + G.cat[2] + "-").test(i);
//        return !G.isJd && e ? !1 : (655 == G.cat[2] ? $.ajax({url: "http://rs.jd.com/accessorie/newServiceWhite.jsonp?sku=" + G.sku + "&callback=Recommend.cbNewFittings",dataType: "script",cache: !0,scriptCharset: "utf-8"}) : 830 == G.cat[1] ? $.ajax({url: "http://rs.jd.com/accessorie/accessoryByAccessory.jsonp?sku=" + G.sku + "&callback=Recommend.cbNewFittings",dataType: "script",cache: !0,scriptCharset: "utf-8"}) : G.cat[2] > 830 && 835 > G.cat[2] || 5012 === G.cat[2] ? $.ajax({url: "http://misc.360buyimg.com/product/js/2012/fittingsCamera.js?ver=20140424",dataType: "script",cache: !0,success: function() {
//                fittingsCamera.init(pageConfig.product.skuid, pageConfig.product.cat[2], 1)
//            }}) : s ? $.ajax({url: "http://misc.360buyimg.com/product/js/2012/fittingsCamera.js?ver=20140424",dataType: "script",cache: !0,success: function() {
//                fittingsCamera.init(pageConfig.product.skuid, pageConfig.product.cat[2], 2)
//            }}) : 6728 == G.cat[0] && G.isJd ? $.ajax({url: "http://misc.360buyimg.com/product/js/2012/fittingsAuto.js?ver=20140424",dataType: "script",cache: !0}) : $.getJSONP("http://d.360buy.com/fittingInfo/get?skuId=" + t + "&callback=Recommend.cbRecoFittings"), void 0)
    },cbNewFittings: function(t) {
        var e = $("#tab-reco"), i = {accessoryList: []}, s = {tabs: '<div class="tab-cat stab">    <ul>        {if pageConfig.product.cat[1]!=830}            <li id="tab-cat-0" class="fl scurr" data-widget="tab-item" data-cat="\u914d\u4ef6\u9009\u8d2d\u4e2d\u5fc3|3">\u7cbe\u9009\u914d\u4ef6</li>            {for tab in accessoryList}            <li id="tab-cat-${parseInt(tab_index)+1}" class="fl" data-widget="tab-item" data-cat="${tab.thirdName}|${tab.thirdTypeId}">${tab.thirdName}</li>            {/for}        {else}            {for tab in accessoryList}            <li id="tab-cat-${parseInt(tab_index)+1}" class="{if Number(tab_index)==0}scurr{/if} fl" data-widget="tab-item" data-cat="${tab.thirdName}|${tab.thirdTypeId}">${tab.thirdName}</li>            {/for}        {/if}    </ul></div>',cons: '<div id="newFittign-tab"  data-widget="tabs"><div class="master">    <s></s>    <div class="p-img">        <a href="http://item.jd.com/${mainproduct.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(mainproduct.sku)}n4/${mainproduct.imageUrl}" height="100" width="100"></a>    </div>    <div class="p-name">        <a href="http://item.jd.com/${mainproduct.sku}.html" target="_blank">${mainproduct.name}</a>    </div>    <div class="p-price"><input id="inp_${mainproduct.sku}_reco" type="checkbox" onclick="return false;" onchange="return false" wmeprice="{if mainproduct.price==""}0.00{else}${mainproduct.price}{/if}" wmaprice="${mainproduct.maPrice}" skuid="${mainproduct.sku}" checked/> ${mainproduct.price}</div></div><div class="suits" style="width:${pageConfig.wideVersion&&pageConfig.compatible?(4*165-40):(3*128)}px;overflow-x:{if G.cat[1]!=830}auto{else}hidden{/if};overflow-y:hidden;">    {for tab in accessoryList}    <ul id="newFitting-${parseInt(tab_index)+1}" data-cat="${tab.thirdName}" style="width:${G.cat[1]==830?165*tab.accessoryList.length:660}px;" class="{if G.cat[1]==830}{if Number(tab_index)!=0}hide{/if}{else}hide{/if} lh" data-widget="tab-content">        {if G.cat[1]==830}            {for list in tab.accessoryList}            <li data-push="${pageConfig.product.cbNewFittings.push(list.sku)}" {if (parseInt(list_index)+1)==tab.accessoryList.length} class="last_item"{/if} onclick=\'${pageConfig.setFittingsClk(G.cat[2], G.sku, list.sku, 50, list_index, "rodGlobalTrack")}\'>                <s></s>                <div class="p-img">                    <a href="http://item.jd.com/${list.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.sku)}n4/${list.imageUrl}" alt="" height="100" width="100"></a>                </div>                <div class="p-name">                    <a href="http://item.jd.com/${list.sku}.html" target="_blank">${list.name}</a>                </div>                <div class="choose">                    <input type="checkbox" id="inp_${list.sku}" onclick="G.calculatePrice(this, \'#tab-reco\')" wmaprice="${list.maPrice}" wmeprice="${list.price}" skuid="${list.sku}" />                    <label for="inp_${list.sku}" class="p-price">                        <strong class="J-p-${list.sku}"></strong>                    </label>                </div>            </li>            {/for}        {else}            <div class="iloading">\u52a0\u8f7d\u4e2d...</div>        {/if}    </ul>    {/for}</div><div class="infos">    {if pageConfig.product.cat[1]!=830}<div id="more-fitting-link"><a class="hl_link" href="http://rs.jd.com/accessorie/center.html?sku=${G.sku}&thirdTypeId=3" target="_blank">\u8fdb\u5165\u914d\u4ef6\u9009\u8d2d\u4e2d\u5fc3</a><span>&gt;<b></b></span></div>{/if}    <s></s>    <div class="p-name">        <em>\u5df2\u9009\u62e9<span>0</span>\u4e2a\u914d\u4ef6</em>    </div>    <div class="p-price">\u642d&nbsp;&nbsp;\u914d&nbsp;&nbsp;\u4ef7\uff1a        <strong class="res-jdprice">{if mainproduct.price==""}\u6682\u65e0\u62a5\u4ef7{else}\uffe5 ${parseFloat(mainproduct.price).toFixed(2)}{/if}</strong>    </div>    <div class="p-saving">\u53c2&nbsp;&nbsp;\u8003&nbsp;&nbsp;\u4ef7\uff1a        <span class="res-totalprice">\uffe5 ${parseFloat(mainproduct.maPrice).toFixed(2)}</span>    </div>    <div class="btns">        <a class="btn-buy" href="http://jd2008.jd.com/purchase/OrderFlowService.aspx?action=AddSkus&wids=${G.sku}">\u7acb\u5373\u8d2d\u4e70</a>    </div></div></div>',item: '{for item in accessoryList}<li data-push="${pageConfig.product.cbNewFittings.push(item.sku)}" {if (parseInt(item_index)+1)==accessoryList.length} class="last_item"{/if}  onclick=\'${pageConfig.setFittingsClk(G.cat[2], G.sku, item.sku, 34, item_index)};\'>    <s></s>    <div class="p-img">        <a href="http://item.jd.com/${item.sku}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(item.sku)}n4/${item.imageUrl}" alt="" height="100" skuidth="100"></a>    </div>    <div class="p-name">        <a href="http://item.jd.com/${item.sku}.html" target="_blank">${item.name}</a>    </div>    <div class="choose">        <input type="checkbox" id="inp_m_${item.sku}" onclick="G.calculatePrice(this, \'#tab-reco\')" wmaprice="${item.maPrice}" wmeprice="${item.price}" skuid="${item.sku}" />        <label for="inp_m_${item.sku}" class="p-price">            <strong class="J-p-${item.sku}"></strong>        </label>    </div>    {if isExtra==true}    <div class="p-more{if (parseInt(item_index)+1)!==accessoryList.length} hide{/if}"><a class="hl_link" href="http://rs.jd.com/accessorie/center.html?sku=${G.sku}&thirdTypeId=${item.thirdType}" target="_blank"></a></div>    {else}    <div class="p-more"><a class="hl_link" href="http://rs.jd.com/accessorie/center.html?sku=${G.sku}&thirdTypeId=${item.thirdType}" target="_blank">\u66f4\u591a${item.thirdName}</a></div>    {/if}</li>{/for}'};
        if (pageConfig.product.cbNewFittings = [pageConfig.product.skuid], pageConfig.setFittingsClk = function(t, e, i, s, a) {
            var n = {cid: t,mainSku: e,itemSku: i,id: s,ind: a,str: "rodGlobalTrack"};
            return 830 === G.cat[1] && (n.cid = "", n.mainSku = ""), n.rid = 830 === G.cat[1] ? 402002 : 402001, 'clsClickLog("${cid}", "${mainSku}", "${itemSku}", ${id}, "${ind}", "${str}");G.clsLog(${rid}, "1", ${G.sku}, ${itemSku}, ${ind});'.process(n)
        }, 655 == G.cat[2] ? (clsPVAndShowLog("655", G.sku, 34, "p"), G.clsLog(402001, "0", G.sku, pageConfig.product.cbNewFittings.join(","))) : G.clsLog(402002, "0", G.sku, pageConfig.product.cbNewFittings.join(",")), t.accessoryByAccessList && (t.accessoryList = t.accessoryByAccessList, t.accessoryByAccessList = null), t && t.accessoryList && t.accessoryList.length > 0) {
            if (e.attr("loaded", "true").html(s.cons.process(t)), 830 != pageConfig.product.cat[1]) {
                for (var a = 0; t.accessoryList.length > a; a++)
                    t.accessoryList[a].accessoryList.length = 4, t.accessoryList[a].accessoryList[0].thirdType = t.accessoryList[a].thirdTypeId, t.accessoryList[a].accessoryList[0].thirdName = t.accessoryList[a].thirdName, i.accessoryList.push(t.accessoryList[a].accessoryList[0]), i.isExtra = !1;
                $("#newFittign-tab .suits").prepend('<ul id="newFitting-0" class="lh" data-widget="tab-content" style="width:' + 165 * i.accessoryList.length + 'px">' + s.item.process(i) + "</ul>")
            }
            $("#newFittign-tab").prepend(s.tabs.process(t)).Jtab({event: "click",compatible: !0,currClass: "scurr"}, function(t, i, a) {
                var n = $("#newFittign-tab .suits"), o = $("#tab-cat-" + a).attr("data-cat").split("|")[1], r = $("#tab-cat-" + a).attr("data-cat").split("|")[0], c = $("#more-fitting-link a");
                if (830 != G.cat[1])
                    if (c.attr("href", "http://rs.jd.com/accessorie/center.html?sku=" + G.sku + "&thirdTypeId=" + o).html("\u8fdb\u5165" + r), n.scrollLeft(0), 0 !== a) {
                        if ("1" == $("#newFitting-" + a).attr("loaded"))
                            return;
                        window.fetchJSON_fittingExtra = function(t) {
                            var i = pageConfig.wideVersion && pageConfig.compatible ? 4 : 3;
                            t.isExtra = !0, t.accessoryList = t.accessoryList.slice(0, i), $("#newFitting-" + a).html(s.item.process(t)).attr("loaded", "1"), $("#newFitting-" + a).find(".hl_link").html("\u66f4\u591a" + $("#tab-cat-" + a).html());
                            try {
                                delete window.fetchJSON_fittingExtra
                            } catch (n) {
                            }
                            G.getPriceNum(pageConfig.product.cbNewFittings, readCookie("ipLoc-djd"), e, null, function(t, i) {
                                e.find('input[skuid="' + t + '"]').attr("wmeprice", i.p), e.find('input[skuid="' + t + '"]').attr("wmaprice", i.m), G.calculatePrice($("#tab-reco .master input")[0], "#tab-reco")
                            })
                        }, $.ajax({url: "http://rs.jd.com/accessorie/newServiceList.jsonp?sku=" + G.sku + "&thirdTypeId=" + o + "&callback=fetchJSON_fittingExtra",dataType: "script",cache: "true",scriptCharset: "utf-8"}), $("#newFittign-tab .suits").removeAttr("style").css({width: pageConfig.wideVersion && pageConfig.compatible ? 620 : 384,overflow: pageConfig.wideVersion && pageConfig.compatible ? "hidden" : "auto"})
                    } else
                        $("#newFittign-tab .suits").removeAttr("style").css({width: pageConfig.wideVersion && pageConfig.compatible ? 620 : 384,overflowX: "auto"})
            }), clsPVAndShowLog("655", G.sku, 34, "s"), this.switchTab("#th-fitting"), G.removeLastAdd(), $("#tab-reco .master input").attr("skuid", pageConfig.product.skuid), G.getPriceNum(pageConfig.product.cbNewFittings, readCookie("ipLoc-djd"), e, null, function(t, i) {
                e.find('input[skuid="' + t + '"]').attr("wmeprice", i.p), e.find('input[skuid="' + t + '"]').attr("wmaprice", i.m), G.calculatePrice($("#tab-reco .master input")[0], "#tab-reco")
            })
        }
    },renderHTML: function() {
        switch (1 == this.type ? new Grecommend(G.sku, 105e3, readCookie("ipLoc-djd"), $("#browse-browse .mc")) : new Grecommend(G.sku, 102004, readCookie("ipLoc-djd"), $("#browse-browse .mc")), this.type) {
            case 1:
                new Grecommend(G.sku, 103002, readCookie("ipLoc-djd"), $("#buy-buy .mc")), new Grecommend(G.sku, 103001, readCookie("ipLoc-djd"), $("#view-buy .mc")), new Grecommend(G.sku, 103003, readCookie("ipLoc-djd"), $("#tab-hot"));
                break;
            case 2:
                new Grecommend(G.sku, 102002, readCookie("ipLoc-djd"), $("#buy-buy .mc")), new Grecommend(G.sku, 102003, readCookie("ipLoc-djd"), $("#view-buy .mc")), 1315 == G.cat[0] || 11729 == G.cat[0] ? new Grecommend(G.sku, 102001, readCookie("ipLoc-djd"), $("#tab-hot"), 12) : new Grecommend(G.sku, 102001, readCookie("ipLoc-djd"), $("#tab-hot"), 12);
                break;
            default:
        }
    },getDaPeiGou: function(t, e) {
        var t = t || G.sku, i = this, s = '<ul class="lh">    {for list in cbList}    <li class="fore${parseInt(list_index)+1}" clstag="shangpin|keycount|product|dapeip${parseInt(list_index)+1}">        <div class="p-img">            <a target="_blank" title="${list.title}" href="http://dapeigou.jd.com/collocateDetail.html?cid=${list.c_id}&s=${list.sku_ids.join(\',\')}">                <img height="130" width="130" alt="" src="${list.url}">            </a>        </div>        <div class="p-name ac">            <a target="_blank" title="${list.title}" href="http://dapeigou.jd.com/collocateDetail.html?cid=${list.c_id}&s=${list.sku_ids.join(\',\')}">${list.title}</a>        </div>    </li>    {/for}</ul>';
        $.ajax({url: "http://rs.jd.com/collocationBuy/service.jsonp?sku=" + t + "&venderId=" + e,dataType: "jsonp",success: function(t) {
                t && t.cbList && t.cbList.length > 0 ? ($("#tab-dpg").html(s.process(t)), i.switchTab("#th-dpg")) : $("#tab-dpg .iloading").removeClass("iloading").html("\u6682\u65e0\u6570\u636e")
            }})
    },switchTab: function(t) {
        var e = $(t), i = $("#recommend"), s = $('#recommend .mc[loaded="true"]'), a = s.length > 0;
        i.show(), e.show(), "#th-service" != t ? e.trigger("click") : a || e.trigger("click")
    },cbRecoFittings: function(t) {
        var e = $("#tab-reco");
        pageConfig.product.cbRecoFittings = [pageConfig.product.skuid], t && t.fittings && t.fittings.length > 0 && (e.attr("loaded", "true").html('<ul class="stab lh">' + recoFittings_TPL.tabs.process(t) + '</ul><div class="stabcon">' + recoFittings_TPL.cons.process(t) + "</div>"), this.switchTab("#th-fitting"), G.removeLastAdd(), G.getPriceNum(pageConfig.product.cbRecoFittings, readCookie("ipLoc-djd"), e, null, function(t, i) {
            e.find('input[skuid="' + t + '"]').attr("wmeprice", i.p), e.find('input[skuid="' + t + '"]').attr("wmaprice", i.m), G.calculatePrice($("#tab-reco .master input")[0], "#tab-reco", 1)
        }), G.getNewCLK({name: "tjpj",action: "0",csku: pageConfig.product.cbRecoFittings,sku: G.sku}))
    }}, setAmount = {min: 1,max: 199,count: 1,countEl: $("#buy-num"),buyLink: $("#choose-btn-append .btn-append"),targetLink: $("#choose-btn-append .btn-append"),matchCountKey: ["pcount", "pCount", "num"],add: function() {
        return this.count >= this.max ? !1 : (this.count++, this.countEl.val(this.count), this.setBuyLink(), void 0)
    },reduce: function() {
        return this.count <= this.min ? !1 : (this.count--, this.countEl.val(this.count), this.setBuyLink(), void 0)
    },modify: function() {
        var t = parseInt(this.countEl.val(), 10);
        return "" == this.countEl.val() ? !1 : isNaN(t) || this.min > t || t > this.max ? (this.countEl.val(this.count), !1) : (this.count = t, this.setBuyLink(), void 0)
    },setBuyLink: function() {
        var t = this;
        t.targetLink.each(function() {
            var e, i, s = $(this), a = s.attr("href"), n = a.split("?")[1];
            (function() {
                for (var o = 0; t.matchCountKey.length > o; o++)
                    if (i = RegExp(t.matchCountKey[o] + "=\\d+"), i.test(n))
                        return e = a.replace(i, t.matchCountKey[o] + "=" + t.count), s.attr("href", e), !1
            })()
        }), window.getPOPDeliveCash && getPOPDeliveCash(), onNumChange()
    }};
$.extend(jdModelCallCenter, {usefulComment: function(t) {
        $.login({modal: !0,complete: function(e) {
                if (e.IsAuthenticated) {
//                    var i = t.parent().attr("id"), s = "agree" == t.attr("name");
//                    "true" != t.attr("enabled") ? $.ajax({type: "GET",url: "http://club.jd.com/index.php",data: {mod: "ProductComment",action: "saveCommentUserfulVote",commentId: i,isUseful: s},dataType: "jsonp",success: function(e) {
//                            if (t.attr("enabled", "true"), 1 == e.status) {
//                                var i = parseInt(t.attr("title")) + 1;
//                                t.attr("title", i), s ? t.html("\u6709\u7528(" + i + ")") : t.html("\u6ca1\u7528(" + i + ")")
//                            } else
//                                alert("\u4e00\u4e2a\u8bc4\u4ef7\u53ea\u80fd\u70b9\u4e00\u6b21\u5466")
//                        }}) : alert("\u4e00\u4e2a\u8bc4\u4ef7\u53ea\u80fd\u70b9\u4e00\u6b21\u5466")
                }
            }}), mark(G.sku, 5)
    }}), $(".btn-agree,.btn-oppose").livequery("click", function() {
    var t = $(this);
    $.extend(jdModelCallCenter.settings, {object: t,fn: function() {
            jdModelCallCenter.usefulComment(this.object)
        }}), jdModelCallCenter.settings.fn()
});
var consultationServiceUrl = "";
$("#btnReferSearch").livequery("click", function() {
    Consult.search(G.sku, $("#txbReferSearch").val(), 1, 6)
}), $("#txbReferSearch").livequery("keydown", function(t) {
    13 == t.keyCode && Consult.search(G.sku, $("#txbReferSearch").val(), 1, 6)
}), $("#backConsultations").livequery("click", function() {
    $("#consult .tab li.curr").trigger("click")
}), $("#login").livequery("click", function() {
    $.login()
});
var Refresh = {init: function() {
        return G.isCellphone ? !1 : ("undefined" != typeof Promotions ? (Promotions.init(), pageConfig.promotionInited = !0) : pageConfig.promotionInited = !1, this.rFittings(), this.rCombine(), void 0)
    },rFittings: function() {
        var t, e = $("#tab-reco");
        pageConfig.product.cbNewFittings !== void 0 && (t = pageConfig.product.cbNewFittings), pageConfig.product.fittingsAuto !== void 0 && (t = pageConfig.product.fittingsAuto), pageConfig.product.cbRecoFittings !== void 0 && (t = pageConfig.product.cbRecoFittings), t !== void 0 && t.length > 1 && (t.push(pageConfig.product.skuid), $("#recommend .master input").attr("skuid", pageConfig.product.skuid), G.getPriceNum(t, readCookie("ipLoc-djd"), null, null, function(t, i) {
            e.find('input[skuid="' + t + '"]').attr("wmeprice", i.p), e.find('input[skuid="' + t + '"]').attr("wmaprice", i.m), G.calculatePrice($("#tab-reco .master input")[0], "#tab-reco")
        }))
    },rCombine: function() {
        var t = $("#tab-hot");
        pageConfig.product.cbCombineBuying !== void 0 && (pageConfig.product.cbCombineBuying.push(pageConfig.product.skuid), G.getPriceNum(pageConfig.product.cbCombineBuying, readCookie("ipLoc-djd"), null, null, function(e, i) {
            t.find('input[skuid="' + e + '"]').attr("wmeprice", i.p), t.find('input[skuid="' + e + '"]').attr("wmaprice", i.m), G.calculatePrice($("#tab-hot .master input")[0], "#tab-hot")
        }))
    }}, CommentListNew = {loadFirstPage: !1,init: function(t) {
        var e = $("#comments-list").find(".mt"), i = '<div id="comment-sort" class="extra"> <select > <option value="3">\u70ed\u5ea6\u6392\u5e8f</option> <option value="1">\u65f6\u95f4\u6392\u5e8f</option> </select> </div>';
        1 > $("#comment-sort").length && e.append(i), this.commList = $("#comments-list"), this.commRate = $("#comment"), this.wrap = $("#comment-0"), this.sku = t || G.sku, this.bindSelect(e), this.commList.find(".tab li em").html("(0)")
    },bindSelect: function(t) {
        var e = this;
        t.find("select").change(function() {
            var t = parseInt($(this).val(), 10);
            e.sort !== t && (e.sort = t, e.getData(e.wrap, e.type, e.page))
        })
    },bindHover: function() {
        this.commList.find(".item-reply").hover(function() {
            $(this).find(".reply-meta a").css("visibility", "visible")
        }, function() {
            "none" === $(this).find(".replay-form").css("display") && $(this).find(".reply-meta a").css("visibility", "hidden")
        })
    },bindReply: function() {
        var t = this;
        this.commList.find(".btn-toggle").unbind("click").bind("click", function() {
            var e = $(this), i = e.parents(".i-item"), s = e.attr("data-id");
            e.hasClass("btn-toggle") && $("#btn-toggle-" + t.type + "-" + s).toggle().find("input")[0].focus(), e.hasClass("btn-reply") && "true" === i.attr("data-top") && i.find(".hide-default").toggle()
        }), this.bindHover(), this.commList.find(".reply-btn").unbind("click").bind("click", function(e) {
            var i = $(e.target), s = i.attr("data-guid"), a = i.attr("data-replyId"), n = i.attr("data-nickname"), o = i.parents(".reply-input").find("input").val(), r = {};
            if (i.hasClass("reply-btn"))
                return t.currReply = i, o = o.replace(/</g, "<").replace(/>/g, ">"), a = i.hasClass("reply-btn-lz") ? "" : a, r = {guid: s,content: o,replyId: a,nickname: n}, "" === o.replace(/\s+/, "") ? (alert("\u8bf7\u8f93\u5165\u56de\u590d\u5185\u5bb9"), void 0) : (G.checkLogin(function(e) {
                    e.IsAuthenticated ? t.reply(r) : (jdModelCallCenter.settings.fn = function() {
                        G.checkLogin(function(e) {
                            e.IsAuthenticated && t.reply(r)
                        })
                    }, jdModelCallCenter.login())
                }), void 0)
        })
    },reply: function(t) {
        var e = this, i = {mod: "Club2013.ProductCommentReply",action: "saveProductCommentReply",commentId: t.guid,content: t.content,parentId: t.replyId}, s = t.content.replace(/[\u4e00-\u9fa5]/g, "XX");
        return "" === t.content.replace(/\s+/, "") ? (alert("\u8bf7\u8f93\u5165\u56de\u590d\u5185\u5bb9"), !1) : 1 > s.length || s.length > 800 ? (alert("\u56de\u590d\u5185\u5bb9\u5e94\u57281~400\u4e2a\u5b57\u4ee5\u5185"), !1) : ($.ajax({url: "http://club.jd.com/index.php?",data: i,dataType: "jsonp",success: function(i) {
                1 === i.status ? (i.data.nickname = t.nickname, e.setReplyItem(i.data)) : i.info && alert(i.info)
            }}), void 0)
    },setReplyItem: function(t) {
        var e, i = this, s = i.currReply.parents(".i-item").eq(0), a = s.find(".reply-lz"), n = i.currReply.parents(".reply-list").eq(0), o = n.find(".parentReplyFrom"), r = this.currReply.parents(".item-reply").eq(0), c = a.next();
        t._type = this.type, t.commentReply.guid = s.attr("data-guid"), t.commentReply.index = e = c.length > 0 ? parseInt(c.attr("data-index"), 10) + 1 : 1, t.toname = r.attr("data-name"), t.touid = r.attr("data-uid"), o.length > 0 && (t.replyHTML = $("<div>").append(o.clone()).html());
        var l = '<div class="item-reply hide-default" data-index="${commentReply.index}" data-name="${commentReply.nickname}" data-uid="${commentReply.uid}">          <strong>${commentReply.index}</strong>          <div class="reply-list">              <div class="reply-con">                  <span class="u-name">                      <a href="http://club.jd.com/userreview/${commentReply.uid}-1-1.html" target="_blank">${commentReply.nickname}{if commentReply.userClient==99}<b></b>{/if}</a>                      {if parseInt(commentReply.parentId, 10)>0}                          <em>\u56de\u590d</em>                          {if typeof replyHTML!=="undefined"}                              ${replyHTML}                          {else}                              <a class="parentReplyTo" target="_blank" href="http://club.jd.com/userreview/${touid}-1-1.html">{if parseInt(commentReply.parentId, 10)<0}{else}${toname}{/if}</a>                          {/if}                      {/if}\uff1a                  </span>                  <span class="u-con">${commentReply.content}</span>              </div>              <div class="reply-meta">                  <span class="reply-left fl">${commentReply.creationTimeString.replace(/:[0-9][0-9]$/, "")}</span>                  <a class="btn-toggle p-bfc" data-id="${commentReply.id}" href="#none">\u56de\u590d</a>              </div>              <div id="btn-toggle-${_type}-${commentReply.id}" class="replay-form none">                  <div class="arrow">                      <em>\u25c6</em><span>\u25c6</span>                  </div>                  <div class="reply-wrap">                      <p><em>\u56de\u590d</em> <span class="u-name">${commentReply.nickname}\uff1a</span></p>                      <div class="reply-input">                          <div class="fl"><input type="text" /></div>                          <a href="#none" class="reply-btn btn-gray p-bfc" data-guid="${commentReply.guid}" data-replyId="${commentReply.id}">\u56de\u590d</a>                          <div class="clr"></div>                      </div>                  </div>              </div>          </div>      </div>';
        a.after($(l.process(t)).fadeIn()), s.find(".btns .btn-reply em").html(e), this.currReply.hasClass("reply-btn-lz") || this.currReply.parents(".replay-form").eq(0).hide(), this.currReply.parents(".reply-input").find("input").val(""), this.bindReply()
    },getData: function(t, e, i, s) {
        var a = this;
        this.wrap = t, this.type = e || 0, this.page = i, this.sType = s || 3, this.commRateLoaded = !1, this.url = "http://club.jd.com/productpage/p-{skuId}-s-{commType}-t-{sortType}-p-{currPage}.html", this.url = this.url.replace("{skuId}", this.sku).replace("{commType}", this.type).replace("{sortType}", this.sType).replace("{currPage}", this.page), $.ajax({url: this.url,dataType: "jsonp",success: function(t) {
                a.setData(t)
            }})
    },setABTest: function(t) {
        var e = document.getElementsByTagName("head")[0], i = document.createElement("script");
        t && t.jwotest_product !== void 0 && (1 > $("#gemini_comment_sort" + t.jwotest_product).length && $("body").append('<div id="gemini_comment_sort' + t.jwotest_product + '"></div>'), i.type = "text/javascript", i.async = !0, i.id = "gemini_divide_script", i.setAttribute("param", "[{t:24}]"), i.setAttribute("cTime", "1387864948704"), i.src = "http://api.gemini.jd.com/gemini/gemini_v1.0.js", e.appendChild(i))
    },setData: function(t) {
        return t || (this.wrap.html("\u3000\u6682\u65e0\u8bc4\u8bba"), this.commRate.find(".mc").html("\u3000\u6682\u65e0\u8bc4\u8bba")), t.comments === void 0 ? (this.wrap.html('<div class="norecode"> \u6682\u65e0\u5546\u54c1\u8bc4\u4ef7\uff01</div>'), void 0) : (this.commRateLoaded === !1 && this.setCommRate($("#comment"), t), t._type = this.type, this.setCommentCount(t), this.wrap.html(newCommentList_TPL.process(t)), this.bindReply(), this.setPageNav(t), this.loadFirstPage = !0, void 0)
    },setPageNav: function(t) {
        var e = this, i = "";
        switch (this.type) {
            case 0:
                i = "commentCount";
                break;
            case 1:
                i = "poorCount";
                break;
            case 2:
                i = "generalCount";
                break;
            case 3:
                i = "goodCount";
                break;
            case 4:
                i = "showCount";
                break;
            default:
                i = "commentCount"
        }
        $("#commentsPage" + t.score).pagination(t.productCommentSummary[i], {items_per_page: 10,num_display_entries: 5,current_page: e.page,num_edge_entries: 2,link_to: "#comments-list",prev_text: "\u4e0a\u4e00\u9875",next_text: "\u4e0b\u4e00\u9875",ellipse_text: "...",prev_show_always: !1,next_show_always: !1,callback: function(i) {
                e.getData(e.wrap, t.score, i, e.sType)
            }})
    },setCommentCount: function(t) {
        var e = this.commList.find(".tab li em"), i = t.productCommentSummary;
        e.eq(0).html("(" + i.commentCount + ")"), e.eq(1).html("(" + i.goodCount + ")"), e.eq(2).html("(" + i.generalCount + ")"), e.eq(3).html("(" + i.poorCount + ")"), e.eq(4).html("(" + i.showCount + ")")
    },setCommRate: function(t, e) {
        t.find(".mc").html(newCommentRate_TPL.process(e)), this.commRateLoaded = !0
    }}, Discuss = {getData: function(t, e) {
        var i = this, s = "http://club.jd.com/clubservice/newcomment-", a = "", n = e;
        switch (this.obj = n, t) {
            case 0:
                a = "Club";
                break;
            case 1:
                a = "Order";
                break;
            case 2:
                a = "User";
                break;
            case 3:
                a = "Question";
                break;
            case 4:
                a = "Friend"
        }
        window.fetchJSON_Discuss = function(t) {
            n.html(discuss_TPL.process(t)), i.getDiscussComment()
        }, $.getJSONP(s + a + "-" + G.orginSku + ".html?callback=fetchJSON_Discuss")
    },getDiscussComment: function() {
        var t = this, e = "http://club.jd.com/clubservice/newcomment-Commp." + G.cat[2] + "-" + G.sku + ".html";
        $.ajax({url: e,dataType: "jsonp",success: function(e) {
                e.discussComments && e.discussComments.Comments && e.discussComments.Comments.length && t.setDiscussComment(e.discussComments)
            }})
    },setDiscussComment: function(t) {
        var e = $("#discuss-comment"), i = '<tbody>    {for item in Comments}    <tr>        <td class="col1">            <div class="topic">                <b class="icon lun"></b>                <a href="http://club.jd.com/CommunityGroupDetail/${item.id}_1.html" target="_blank">${item.title}</a>            </div>        </td>        <td class="col2">${item.replyCount}/${item.viewCount}</td>        <td class="col3">            <div class="u-name">                <a target="_blank" title="${comment.uRemark}" href="http://me.jd.com/${item.uid}.html">{if item.uRemark}${item.uRemark}{else}${item.nickname}{/if}</a>            </div>        </td>        <td class="col4">${item.creationTime}</td>    </tr>    {/for}</tbody>';
        e.html(i.process(t)), this.obj.find(".norecode").hide(), this.obj.find(".total span").html("\u5171" + (this.count + t.CommentCount) + "\u4e2a\u8bdd\u9898")
    }}, Consult = {getData: function(t, e) {
        window.fetchJSON_Consult = function(t) {
            if (e.html(consult_TPL.process(t)), void 0 !== pageConfig.im) {
                var i = pageConfig.im, s = i.code, a = i.seller;
                if (1 == s)
                    $("#j-im-extra").css("display", "inline-block"), $("#j-im-extra").attr("title", a + " \u8054\u7cfb\u5ba2\u670d"), $("#j-im-extra").click(function() {
                        onlineService(1, a, i.chatDomain)
                    });
                else if (2 == s) {
                    $("#j-im-extra").css("display", "inline-block");
                    var n = pid.length >= 10 ? " \u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2" : " \u5382\u5546\u552e\u524d\u54a8\u8be2\u76ee\u524d\u4e0d\u5728\u7ebf\uff01\u8d2d\u4e70\u4e4b\u524d\uff0c\u5982\u6709\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u9875\u201c\u5168\u90e8\u8d2d\u4e70\u54a8\u8be2\u201d\u4e2d\u5411\u4eac\u4e1c\u5ba2\u670d\u53d1\u8d77\u54a8\u8be2";
                    $("#j-im-extra").addClass("d-offline").html("<b>\u7559\u8a00\u54a8\u8be2</b>").attr("title", a + n).unbind("click")
                } else
                    (3 == s || 9 == s) && ($("#j-im-extra").css("display", "inline-block").find("b").html("\u7ed9\u5ba2\u670d\u7559\u8a00"), $("#j-im-extra").addClass("d-offline").html("<b>\u7559\u8a00\u54a8\u8be2</b>").attr("title", a + " \u5ba2\u670d\u76ee\u524d\u4e0d\u5728\u7ebf\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u6b64\u5904\u7ed9\u5546\u5bb6\u7559\u8a00\uff0c\u5e76\u5728\u3010\u6211\u7684\u4eac\u4e1c->\u6d88\u606f\u7cbe\u7075\u3011\u4e2d\u67e5\u770b\u56de\u590d").click(function() {
                        onlineService(3, a, i.chatDomain)
                    }))
            }
        }, $.getJSONP("http://club.jd.com/clubservice/newconsulation-" + G.orginSku + "-" + (t + 1) + ".html?callback=fetchJSON_Consult")
    },setExtraData: function(t, e) {
        $.jmsajax({url: "/newsserver.asmx",method: "PayExplain",data: {id: "A-product-0" + (t - 3)},success: function(i) {
                if (null != i) {
                    var s = pageConfig.compatible && pageConfig.wideVersion ? 770 : 1450;
                    6 === t ? $("#consult-6").html('<iframe src="http://psfw.jd.com/help/deliveryService.html" style="margin-top:10px;width:100%;height:' + s + 'px;border:none;"></iframe>') : e.html(i)
                }
            }})
    },search: function(t, e, i) {
        var s = "http://search.jd.com/sayword?", i = i || 0, t = t || G.orginSku, a = this;
        $.ajax({url: s,dataType: "jsonp",data: {wid: t,keyword: encodeURI(e),page: i,ps: 5},success: function(t) {
                var e = '<div class="clb"><div id="ReferPagenation" class="pagin fr none"></div></div>';
                if (t.length > 0) {
                    var s = 0 >= t[0].list.length || 0 >= t[0].total ? "\uff0c\u8bd5\u8bd5\u66f4\u7b80\u77ed\u7684\u5173\u952e\u8bcd\u6216\u66f4\u6362\u5173\u952e\u8bcd" : "", n = '<div id="consult-result" class="result clearfix"><div class="fl">\u5171\u641c\u7d22\u5230<strong>' + t[0].total + "</strong>\u6761\u76f8\u5173\u54a8\u8be2" + s + '\u3000<a id="backConsultations" href="#none">\u8fd4\u56de</a></div><div class="fr"><em>\u58f0\u660e\uff1a\u4ee5\u4e0b\u56de\u590d\u4ec5\u5bf9\u63d0\u95ee\u80053\u5929\u5185\u6709\u6548\uff0c\u5176\u4ed6\u7f51\u53cb\u4ec5\u4f9b\u53c2\u8003\uff01</em></div></div>';
                    if ($("#consult .tabcon:visible").html(n + "" + consult_search_TPL.process(t[0]) + e), 0 >= t[0].list.length || 0 >= t[0].total)
                        return !1;
                    $("#ReferPagenation").show().pagination(t[0].total, {items_per_page: 5,num_display_entries: 5,current_page: i - 1,num_edge_entries: 0,link_to: "#consult",prev_text: "\u4e0a\u4e00\u9875",next_text: "\u4e0b\u4e00\u9875",ellipse_text: "...",prev_show_always: !1,next_show_always: !1,callback: function(t) {
                            a.search(G.orginSku, $("#txbReferSearch").val(), t + 1, 6)
                        }})
                }
            }})
    }}, Repository = {init: function(t) {
        var t = t || G.sku;
        this.t = null, this.getKeywords(), this.content = $(".detail-content").eq(0)
    },setKeywords: function(t) {
        var e = (this.content.html(), $("body").eq(0)), i = '<b class="wiki-arr">\u25c7</b><div class="wiki-inner">  <dl><dt>${keyword}</dt>      <dd>${description}</dd>  </dl>  <div class="wiki-more"><a href="${href}" clstag="shangpin|keycount|product|xxjs" target="_blank">\u67e5\u770b\u8be6\u7ec6\u4ecb\u7ecd</a></div></div>', s = "";
        if (null !== t && t.length > 0) {
            for (var a = 0; t.length > a; a++)
                t[a].id = "wiki-keyword-" + a, this.content.html($(".detail-content").eq(0).html().replace(RegExp(t[a].keyword), '<span data-id="' + t[a].knid + '" class="wiki-words" id="' + "wiki-keyword-" + a + '" style="border-bottom:1px dotted;padding-bottom:2px;">' + t[a].keyword + "</span>")), s = i.process(t[a]), e.append($('<div class="wiki-pop hide" id="des-wiki-keyword-' + a + '">' + s + "</div>"));
            $("img[data-lazyload]").Jlazyload({type: "image",placeholderClass: "err-product"}), this.keyWordHover()
        }
    },log: function(t) {
        $.ajax({url: "http://wiki.jd.com/statistics/termFloat.action?",data: {id: t,t: +new Date},dataType: "script",cache: !0})
    },keyWordHover: function() {
        var t = this, e = $(".detail-content .wiki-words");
        $(".wiki-pop dl"), e.each(function() {
            var e = this.id, i = $(this).attr("data-id"), s = $(this);
            s.hover(function() {
                var s = $("#product-detail"), a = s.offset().left, n = s.outerWidth(), o = $(this).offset().left, r = o - a > n / 2 ? 310 : 110, c = o - a > n / 2 ? o - 300 : o - 100, l = $(this).offset().top, d = $(this).outerHeight();
                $("#des-" + e).length > 0 && ($("#des-" + e).show().css({left: c,top: l + d - 1}), $("#des-" + e).find("b").css({marginLeft: r})), t.t = setTimeout(function() {
                    t.log(i)
                }, 500)
            }, function(e) {
                var i = this.id, s = e.relatedTarget;
                return s.id == "des-" + i ? !1 : ($("#des-" + i).hide(), clearTimeout(t.t), void 0)
            }), $("#des-" + e).hover(function() {
            }, function(t) {
                var i = t.relatedTarget;
                return i.id == "des-" + e ? !1 : ($(this).hide(), void 0)
            })
        })
    },getKeywords: function() {
        var t = this;
        $.ajax({url: "http://wiki.jd.com/product/" + G.sku + "/keywords.html",dataType: "jsonp",success: function(e) {
                t.setKeywords(e)
            }})
    }}, EvaluateGradeNew = {init: function(t) {
        var e = this;
        return e.popInfo = t, G.isJd ? !1 : (e.getGradeDetail(t.vid), e.getAddress(t.vid), e.setShopInfo(t), e.setGlobalBuy(t), void 0)
    },bindEvent: function() {
        return $("#evaluate s").click(function() {
            $(this).toggleClass("fold"), $("#evaluate-detail").toggle()
        }), this
    },getAddress: function(t) {
        $.getJSONP("http://rms.shop.jd.com/json/pop/popcompany.action?callback=EvaluateGradeNew.setAddress&venderID=" + t)
    },setAddress: function(t) {
        var e = $("#online-service");
        t && (t.companyName || t.firstAddr || t.secAddr) && (e.after('<dl id="pop-company"><dt>\u516c\u53f8\u540d\u79f0\uff1a</dt><dd></dd></dl><dl id="pop-address"><dt>\u6240&nbsp;\u5728&nbsp;\u5730\uff1a</dt><dd></dd></dl>'), $("#pop-company dd").html(t.companyName), $("#pop-address dd").html(t.firstAddr + "&nbsp;" + t.secAddr), pageConfig.wideVersion && pageConfig.compatible && $("#online-service dt").css("margin-bottom", 10))
    },setGlobalBuy: function(t) {
        var e = $("#brand-bar-pop");
        t.vid && 7 == ("" + t.vid).length && e.prepend('<div id="global-buy"><em><img src="http://misc.360buyimg.com/product/skin/2012/i/haiwai.gif" alt="\u6d77\u5916\u8d2d\u8ba4\u8bc1\u5546\u5bb6" /></em></div>')
    },getGrade: function() {
        var t = $(".evaluate-grade"), e = $(".heart-red");
        return window.fetchJSON_Eva = function(i) {
            e.removeClass("h4").addClass("h" + Math.round(parseFloat(i.result))), t.html(parseFloat(i.result) + "\u5206")
        }, $.getJSONP("http://club.jd.com/clubservice/merchantcomment/" + G.sku + ".html?callback=fetchJSON_Eva"), this
    },getGradeDetail: function(t) {
        $.getJSONP("http://rms.shop.jd.com/json/popscore/scorefact.action?callback=EvaluateGradeNew.setGradeDetail&venderID=" + t)
    },calcTrends: function(t) {
        var e = "", i = "", s = this.data;
        return 1 === t && (s.f20 === s.f35 && (e = "eva-eq"), s.f20 > s.f35 && (e = "eva-up", i = "\u8ba1\u7b97\u89c4\u5219\uff1a\uff08\u5546\u5bb6\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206\uff09/\uff08\u540c\u884c\u4e1a\u5546\u5bb6\u6700\u9ad8\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206\uff09"), s.f20 < s.f35 && (e = "eva-down", i = "\u8ba1\u7b97\u89c4\u5219\uff1a\uff08\u540c\u884c\u4e1a\u5e73\u5747\u5206-\u5546\u5bb6\u5f97\u5206\uff09/\uff08\u540c\u884c\u4e1a\u5e73\u5747\u5206-\u540c\u884c\u4e1a\u5546\u5bb6\u6700\u4f4e\u5f97\u5206\uff09")), 2 === t && (s.f21 === s.f36 && (e = "eva-eq"), s.f21 > s.f36 && (e = "eva-up", i = "\u8ba1\u7b97\u89c4\u5219\uff1a\uff08\u5546\u5bb6\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206\uff09/\uff08\u540c\u884c\u4e1a\u5546\u5bb6\u6700\u9ad8\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206\uff09"), s.f21 < s.f36 && (e = "eva-down", i = "\u8ba1\u7b97\u89c4\u5219\uff1a\uff08\u540c\u884c\u4e1a\u5e73\u5747\u5206-\u5546\u5bb6\u5f97\u5206\uff09/\uff08\u540c\u884c\u4e1a\u5e73\u5747\u5206-\u540c\u884c\u4e1a\u5546\u5bb6\u6700\u4f4e\u5f97\u5206\uff09")), 3 === t && (s.f22 === s.f37 && (e = "eva-eq"), s.f22 > s.f37 && (e = "eva-up", i = "\u8ba1\u7b97\u89c4\u5219\uff1a\uff08\u5546\u5bb6\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206\uff09/\uff08\u540c\u884c\u4e1a\u5546\u5bb6\u6700\u9ad8\u5f97\u5206-\u540c\u884c\u4e1a\u5e73\u5747\u5206\uff09"), s.f22 < s.f37 && (e = "eva-down", i = "\u8ba1\u7b97\u89c4\u5219\uff1a\uff08\u540c\u884c\u4e1a\u5e73\u5747\u5206-\u5546\u5bb6\u5f97\u5206\uff09/\uff08\u540c\u884c\u4e1a\u5e73\u5747\u5206-\u540c\u884c\u4e1a\u5546\u5bb6\u6700\u4f4e\u5f97\u5206\uff09")), {trends: e,title: i}
    },setGradeDetail: function(t) {
        this.data = t;
        var e = '<div id="evaluate-detail" class="m">    {if f23<1}        <div style="padding-bottom:10px">\u5356\u5bb6\u6682\u672a\u6536\u5230\u4efb\u4f55\u8bc4\u4ef7</div><style type="text/css">#brand-bar-pop #online-service{border-top:1px solid #ddd;}</style>    {else}        <div class="mt"><style type="text/css">#brand-bar-pop #evaluate{display:block;}</style>            <div class="fl">\u8bc4\u5206\u660e\u7ec6</div>            <div class="p-bfc">\u4e0e\u884c\u4e1a\u76f8\u6bd4</div>        </div>        <div class="mc">            <dl>                <dt>\u5546\u54c1\u8bc4\u5206\uff1a</dt>                <dd>                    <span class="eva-grade" title="${f20}">${f20.toFixed(10).substr(0,4)}<b>\u5206</b></span>                    <span class="eva-percent ${EvaluateGradeNew.calcTrends(1).trends}" title="${EvaluateGradeNew.calcTrends(1).title}"><s></s>{if EvaluateGradeNew.calcTrends(1)=="eva-eq"}-----{else}${(f46*100).toFixed(10).substr(0,4)}%{/if}</span>                </dd>            </dl>            <dl>                <dt>\u670d\u52a1\u8bc4\u5206\uff1a</dt>                <dd>                    <span class="eva-grade" title="${f21}">${f21.toFixed(10).substr(0,4)}<b>\u5206</b></span>                    <span class="eva-percent ${EvaluateGradeNew.calcTrends(2).trends}" title="${EvaluateGradeNew.calcTrends(2).title}"><s></s>{if EvaluateGradeNew.calcTrends(2)=="eva-eq"}-----{else}${(f47*100).toFixed(10).substr(0,4)}%{/if}</span>                </dd>            </dl>            <dl>                <dt>\u65f6\u6548\u8bc4\u5206\uff1a</dt>                <dd>                    <span class="eva-grade" title="${f22}">${f22.toFixed(10).substr(0,4)}<b>\u5206</b></span>                    <span class="eva-percent ${EvaluateGradeNew.calcTrends(3).trends}" title="${EvaluateGradeNew.calcTrends(3).title}"><s></s>{if EvaluateGradeNew.calcTrends(3)=="eva-eq"}-----{else}${(f48*100).toFixed(10).substr(0,4)}%{/if}</span>                </dd>            </dl><div class="line"></div>        </div>    {/if}</div>';
        if (null !== t) {
            1 > $("#evaluate s").length && $("#evaluate").append("<s></s>"), this.bindEvent();
            var i = this.popInfo ? "http://mall.jd.com/shopLevel-" + this.popInfo.id + ".html" : "#none";
            $("#evaluate").after(e.process(t)).find("dt").html("\u7efc\u5408\u8bc4\u5206\uff1a"), $(".evaluate-grade strong").html('<a href="' + i + '" target="_blank">' + t.f23.toFixed(10).substr(0, 3) + "</a>").attr("title", t.f23), $(".heart-red").removeClass("h5").addClass("h" + parseInt(t.f23)), pageConfig.product.isFlashPurchase && ($("#evaluate,#evaluate-detail,#enter-shop a").hide(), $("#seller dd").html($("#seller dd").text()))
        }
    },setShopInfo: function(t) {
        t.vender && t.url && $("#seller dd a").html(t.vender).attr({href: t.url,title: t.vender}), $("#enter-shop a").attr("href", t.url).attr("clstag", "shangpin|keycount|product|pop-01"), t.linkphone && "" == $("#hotline dd").html() && ($("#hotline dd").html(t.linkphone), $("#hotline").show())
    }}, JdService = {init: function(t, e, i) {
        this.sku = t, this.resObj = {}, this.currSku = null, this.obj = e || $("#choose-service .dd"), this.fn = i || function() {
        }, this.url = "", this.typeMap = {t2: "ycbs",t3: "ycbs",t4: "ycbs",t6: "ywbh",t7: "ywbh",t9: "yhdx"}, this.itemTPL = '<div class="item">    {if arguments[2][0]&&arguments[2][1]==0}        <ins class="yb-item-more">\u66f4\u591a</ins>    {/if}    <b></b>    <a class="yb-link" href="http://fuwu.jd.com" target="_blank"><i class="yb-ico"></i></a>    <a href="#none" class="yb-item {if arguments[2][0]&&arguments[2][1]==0} yb-item-first{/if}" id="yb-pid-${platformPid}" data-type="${sortId}" data-sku="${platformPid}" title="${G.showServiceDesc(sortId)}">${sortName} \uffe5${price}</a></div>', this.TPL = '<div class="service-type-yb">    {if r1.length>0}        <div class="yb-item-cat yb-item-cat-r1">            ${JdService.itemTPL.process(r1[0], [r1.length>1, 0])}            <div class="yb-item-hide">                {for item in r1}                    {if item_index!=0}${JdService.itemTPL.process(item, [r1.length>1])}{/if}                {/for}            </div>        </div>    {/if}    {if r2.length>0}        <div class="yb-item-cat yb-item-cat-r2">            ${JdService.itemTPL.process(r2[0], [r2.length>1, 0])}            <div class="yb-item-hide">                {for item in r2}                    {if item_index!=0}${JdService.itemTPL.process(item, [r2.length>1])}{/if}                {/for}            </div>        </div>    {/if}    {if r3.length>0}        <div class="yb-item-cat yb-item-cat-r3">            ${JdService.itemTPL.process(r3[0], [r3.length>1, 0])}            <div class="yb-item-hide">                {for item in r3}                    {if item_index!=0}${JdService.itemTPL.process(item, [r3.length>1])}{/if}                {/for}            </div>        </div>    {/if}    {if r4.length>0}        <div class="yb-item-cat yb-item-cat-r4">            ${JdService.itemTPL.process(r4[0], [r4.length>1, 0])}            <div class="yb-item-hide">                {for item in r4}                    {if item_index!=0}${JdService.itemTPL.process(item, [r4.length>1])}{/if}                {/for}            </div>        </div>    {/if}    {if r5.length>0}        <div class="yb-item-cat yb-item-cat-r5">            ${JdService.itemTPL.process(r5[0], [r5.length>1, 0])}            <div class="yb-item-hide">                {for item in r5}                    {if item_index!=0}${JdService.itemTPL.process(item, [r5.length>1])}{/if}                {/for}            </div>        </div>    {/if}    <div class="yb-item-cat yb-item-detail"><a class="hl_blue" target="_blank" href="http://sale.jd.com/act/1pChm0RcanBPYXIS.html?erpad_source=erpad">\u8be6\u60c5</a></div></div>', this.yb_TPL = '        <div class="service-type-yb">            {for data in list}            <div class="yb-item-cat ${data.cName}">                <div class="item">                    {if data.items.length > 1}<ins class="yb-item-more">\u66f4\u591a</ins>{/if}                    <b></b>                    <a class="yb-link" href="http://fuwu.jd.com" target="_blank"><i class="yb-ico"></i></a>                    <a href="#none" class="yb-item {if data.items.length > 1} yb-item-first{/if}" id="yb-pid-${data.items[0].platformPid}" data-type="${data.items[0].sortId}" data-sku="${data.items[0].platformPid}" title="${G.showServiceDesc(data.items[0].sortId)}">${data.items[0].sortName} \uffe5${data.items[0].price}</a>                </div>                {if data.items.length > 1}                <div class="yb-item-hide">                    {for yb in data.items}                    {if Number(yb_index)>0}                    <div class="item">                        <b></b>                        <a class="yb-link" href="http://fuwu.jd.com" target="_blank"><i class="yb-ico"></i></a>                        <a href="#none" class="yb-item" id="yb-pid-${yb.platformPid}" data-type="${yb.sortId}" data-sku="${yb.platformPid}" title="${G.showServiceDesc(yb.sortId)}">${yb.sortName} \uffe5${yb.price}</a>                    </div>                    {/if}                    {/for}                </div>                {/if}            </div>            {/for}            <div class="yb-item-cat yb-item-detail">                <a class="hl_blue" target="_blank" href="http://sale.jd.com/act/1pChm0RcanBPYXIS.html?erpad_source=erpad">\u8be6\u60c5</a>            </div>        </div>', this.get()
    },bindEvent: function() {
        var t = this;
        this.obj.find(".service-type-yb .item a").bind("click", function() {
            var e = $(this), i = e.attr("data-sku"), s = (e.attr("data-type"), e.parent(".item")), a = e.parents(".yb-item-cat");
            s.hasClass("selected") ? s.removeClass("selected") : (a.find(".item").removeClass("selected"), s.addClass("selected")), t.currSku = i, t.currEl = e, t.calResult()
        })
    },addCurrStyle: function(t) {
        var e = t.parents(".service-type").eq(0), i = e.find(".item");
        i.removeClass("selected"), t.parent(".item").eq(0).addClass("selected")
    },removeCurrStyle: function(t) {
        t.parent(".item").eq(0).removeClass("selected")
    },get: function() {
//        var t = this;
//        $.ajax({url: "http://d.360buy.com/yanbao2/get?skuId=" + this.sku,dataType: "jsonp",success: function(e) {
//                e && t.set(e)
//            }})
    },set: function(t) {
        var e, i, s = {list: t}, a = t.length, n = {list: []};
        for (e = 0; a > e; e++)
            i = RegExp("-" + t[e].sortId + "-"), i.test("-2-3-4-44-49-") ? (n.list[0] || (n.list[0] = {}, n.list[0].items = [], n.list[0].cName = "yb-item-cat-r0"), n.list[0].items.push(t[e])) : i.test("-6-7-41-47--") ? (n.list[1] || (n.list[1] = {}, n.list[1].items = [], n.list[1].cName = "yb-item-cat-r1"), n.list[1].items.push(t[e])) : i.test("-9-48-60-") ? (n.list[2] || (n.list[2] = {}, n.list[2].items = [], n.list[2].cName = "yb-item-cat-r2"), n.list[2].items.push(t[e])) : i.test("-11-50-") ? (n.list[3] || (n.list[3] = {}, n.list[3].items = [], n.list[3].cName = "yb-item-cat-r3"), n.list[3].items.push(t[e])) : i.test("-15-16-17-18-45-46-61-63-") ? (n.list[4] || (n.list[4] = {}, n.list[4].items = [], n.list[4].cName = "yb-item-cat-r4"), n.list[4].items.push(t[e])) : i.test("-20-21-22-76-77-85-86-87-") ? (n.list[5] || (n.list[5] = {}, n.list[5].items = [], n.list[5].cName = "yb-item-cat-r5"), n.list[5].items.push(t[e])) : i.test("-27-28-31-32-67-68-69-70-78-79-") ? (n.list[6] || (n.list[6] = {}, n.list[6].items = [], n.list[6].cName = "yb-item-cat-r6"), n.list[6].items.push(t[e])) : i.test("-42-64-65-66-71-72-73-74-80-81-") ? (n.list[7] || (n.list[7] = {}, n.list[7].items = [], n.list[7].cName = "yb-item-cat-r7"), n.list[7].items.push(t[e])) : i.test("-52-53-54-57-58-59-75-82-83-84-") ? (n.list[8] || (n.list[8] = {}, n.list[8].items = [], n.list[8].cName = "yb-item-cat-r8"), n.list[8].items.push(t[e])) : (n.list[9] || (n.list[9] = {}, n.list[9].items = [], n.list[9].cName = "yb-item-cat-r9"), n.list[9].items.push(t[e]));
        if (s.list.length > 0) {
            this.obj.html(this.yb_TPL.process(n)).parent().show(), pageConfig.product.hasYbInfo = !0;
            var o = this.obj.find(".yb-item-cat");
            o.hover(function() {
                $(this).addClass("yb-item-hover")
            }, function() {
                $(this).removeClass("yb-item-hover")
            }), o.each(function() {
                var t = $(this).width();
                $(this).find(".item").css("width", t)
            })
        } else
            this.obj.parent().hide();
        this.bindEvent(), this.itemCount = s.list.length
    },addItem: function(t) {
        this.resObj["p" + t] = t
    },removeItem: function(t) {
        this.resObj["p" + t] = null
    },calResult: function() {
        var t = this.obj.find(".selected"), e = [];
        return t.each(function() {
            var t = $(this).find(".yb-item"), i = t.attr("data-sku");
            i && e.push(i)
        }), "function" == typeof this.fn ? this.fn.apply(this, [e, this.currSku, this.currEl]) : void 0
    }}, NotifyPop = {_saleNotify: "http://skunotify." + pageConfig.FN_getDomain() + "/pricenotify.html?",_stockNotify: "http://skunotify." + pageConfig.FN_getDomain() + "/storenotify.html?",init: function(t, e, i) {
        var s, a = this, n = G.serializeUrl(location.href), o = /from=weibo/.test(location.href) ? location.search.replace(/\?/, "") : "";
        /from=weibo/.test(location.href) && (s = n.param.type, this.setThickBox(s, o)), $(t + "," + e + "," + i).livequery("click", function() {
            var t, e = $(this).attr("id");
            return t = "notify-btn" == e || "notify-stock" == e ? 2 : 1, G.checkLogin(function(e) {
                e.IsAuthenticated ? (a._userPin = e.Name, a.setThickBox(t, o)) : (jdModelCallCenter.settings.fn = function() {
                    G.checkLogin(function(e) {
                        e.IsAuthenticated && (a._userPin = e.Name, a.setThickBox(t, o))
                    })
                }, jdModelCallCenter.login())
            }), !1
        }).attr("href", "#none").removeAttr("target")
    },setThickBox: function(t, e) {
        var i, s, a, n = {skuId: pageConfig.product.skuid,pin: this._userPin,webSite: 1,origin: 1,source: 1}, o = G.serializeUrl(location.href);
        /blogPin/.test(location.href) && (n.blogPin = o.param.blogPin), 1 == t && (i = "\u964d\u4ef7\u901a\u77e5", s = this._saleNotify, a = 250), 2 == t && (i = "\u5230\u8d27\u901a\u77e5", s = this._stockNotify, a = 210, n.storeAddressId = readCookie("ipLoc-djd")), s += e ? e : $.param(n), $.jdThickBox({type: "iframe",source: decodeURIComponent(s) + "&nocache=" + +new Date,width: 500,height: a,title: i,_box: "notify_box",_con: "notify_con",_title: "notify_title"})
    }};
(function() {
    var t = $("#choose-color .selected a,#choose-version .selected a"), e = $("#choose-result .dd"), i = [];
    1 > t.length || $("#product-intro").hasClass("product-intro-noitem") ? $("#choose-result").hide() : (t.each(function() {
        1 == !!$(this).attr("title") && i.push("<strong>\u201c" + $(this).attr("title") + "\u201d</strong>")
    }), i.length > 0 && (e.prepend("<em>\u5df2\u9009\u62e9</em>" + i.join("\uff0c")), $("#choose-result").show()))
})(), function() {
    var t = "-4835-4836-4833-7073-9393-12276-12278-12279-", e = G.cat[2];
    RegExp("-" + e + "-").test(t) && $("#choose-amount").hide(), (4835 == e || 4836 == e) && (setAmount.urlPerfix = "http://card.jd.com/order/order_place.action?", setAmount.data = null, setAmount.data = {skuId: G.sku}), 4833 == e && (setAmount.urlPerfix = "http://chongzhi.jd.com/order/order_place.action?", setAmount.data = null, setAmount.data = {skuId: G.sku})
}(), G.onAttr("HYKHSP", function() {
//    var t = "http://eve.jd.com/redirect.action?wid=" + G.sku + "&btype=0&r=" + Math.random(), e = $("#InitCartUrl");
//    e.attr({href: t,"data-origin": encodeURIComponent(t)})
}), G.onAttr("isSelfService_17", function() {
    var t = $("#buy-num");
    t.attr("disabled", "true"), setAmount = {}
}), function() {
    var t = function() {
        var t = "";
        try {
            t = window.top.document.referrer
        } catch (e) {
            if (window.parent)
                try {
                    t = window.parent.document.referrer
                } catch (i) {
                    t = ""
                }
        }
        return "" === t && (t = document.referrer), t
    };
    JDS = window.JDS || {}, JDS.strpos = function(t, e, i) {
        var s = (t + "").indexOf(e, i || 0);
        return -1 === s ? !1 : s
    }, JDS.uri = function(t) {
        this.components = {}, this.options = {strictMode: !1,key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],q: {name: "queryKey",parser: /(?:^|&)([^&=]*)=?([^&]*)/g},parser: {strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}}, t && (this.components = this.parseUri(t))
    }, JDS.uri.prototype = {parseUri: function(t) {
            for (var e = this.options, i = e.parser[e.strictMode ? "strict" : "loose"].exec(t), s = {}, a = 14; a--; )
                s[e.key[a]] = i[a] || "";
            return s[e.q.name] = {}, s[e.key[12]].replace(e.q.parser, function(t, i, a) {
                i && (s[e.q.name][i] = a)
            }), s
        },getHost: function() {
            return this.components.hasOwnProperty("host") ? this.components.host : void 0
        },getQueryParam: function(t) {
            return this.components.hasOwnProperty("queryKey") && this.components.queryKey.hasOwnProperty(t) ? this.components.queryKey[t] : void 0
        },isQueryParam: function(t) {
            return this.components.hasOwnProperty("queryKey") && this.components.queryKey.hasOwnProperty(t) ? !0 : !1
        }};
    var e = [{d: "baidu",q: "wd"}, {d: "google",q: "q"}, {d: "images.google",q: "q"}, {d: "images.search.yahoo.com",q: "p"}, {d: "sogou",q: "query"}, {d: "soso",q: "w"}, {d: "bing",q: "q"}, {d: "youdao",q: "q"}, {d: "114so",q: "kw"}, {d: "zhongsou",q: "w"}, {d: "yisou",q: "q"}, {d: "lycos",q: "query"}, {d: "lycos",q: "word"}, {d: "yahoo",q: "q"}, {d: "yahoo",q: "p"}, {d: "search",q: "q"}, {d: "live",q: "q"}, {d: "aol",q: "query"}, {d: "aol",q: "encquery"}, {d: "aol",q: "q"}, {d: "ask",q: "q"}, {d: "cnn",q: "query"}, {d: "teoma",q: "q"}, {d: "yandex",q: "text"}], i = function(t) {
        for (var i = 0, s = e.length; s > i; i++) {
            var a = e[i].d, n = e[i].q, o = t.getHost(), r = t.getQueryParam(n);
            if (!JDS.strpos(o, "360buy") && JDS.strpos(o, a) && t.isQueryParam(n))
                return {d: a,q: n,k: r}
        }
    };
    window.jdSref = t(), window.jdSuri = new JDS.uri(window.jdSref), window.searchEngineSource = i(window.jdSuri)
}(), CombineShare.prototype = {init: function() {
        var t = this;
        this.$el.bind("click", function() {
            $.login({modal: !0,complete: function(e) {
                    e && e.IsAuthenticated && e.IsAuthenticated && t.getThickBox(1)
                }})
        })
    },getThickBox: function(t, e) {
        function i() {
            var t = a.imgs, e = "";
            if (1 > t.length)
                return !1;
            for (var i = 0; t.length > i; i++)
                e += '<li class="' + (0 === i ? "selected" : "") + '"><a href="#none"><img src="' + t[i].replace(/\/n\d/, "/n4") + '" alt="" /><s></s></a></li>';
            return e
        }
        function s() {
            var t = a.shareMap, e = "";
            for (var i in t)
                e += '<label title="' + t[i].text + '" for="share-' + t[i].name + '"><input value="' + i.replace("T", "") + '" id="share-' + t[i].name + '" type="checkbox"><em id="share-ico-' + t[i].name + '">' + t[i].text + "</em></label>";
            return e
        }
        var a = this, n = {};
        n.T1 = '<div id="cb-share1" class="combine-share">    <div class="mt">        <dl>            <dt class="fl">\u5206\u4eab\u5230\uff1a</dt>            <dd class="lh">{SHARELIST}</dd>        </dl>    </div>    <div class="mc">        <textarea id="share-text" name="" cols="30" rows="10" placeholder="\u8bf4\u70b9\u4ec0\u4e48\u5427...">{TEXT}</textarea>        <div class="share-meta clearfix">            <div class="share-link fl"><a class="s-btn s-btn-gray" href="{LINK}" target="_blank"><b class="s-btn"></b>\u5206\u4eab\u94fe\u63a5</a></div>            <div class="share-count lh ar">\u8fd8\u53ef\u4ee5\u8f93\u5165<em>100</em>\u5b57</div>        </div>        {IMGWRAP}    </div>    <div class="mb">        <div class="share-btn">            <a href="#none" class="s-btn s-btn-ok share-btn-ok">\u5206\u4eab</a>        </div>    </div></div>', n.T2 = '<div id="cb-share2" class="combine-share share-msg">    <dl>        <dd class="ld"><h5 class="ac"><strong><s class="share-ico"></s>\u6210\u529f\u5206\u4eab\u5230 {EXT}</strong></h5></dd>    </dl>    <div class="share-btn"><a href="#none" class="s-btn s-btn-gray" onclick="jdThickBoxclose();">\u786e\u5b9a</a></div></div>', n.T3 = '<div id="cb-share3" class="combine-share share-msg share-warning">    <dl>        <dt class="fl share-ico"></dt>        <dd class="ld"><h5>\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u64cd\u4f5c\u3002</h5></dd>    </dl>    <div class="share-btn"><a href="#none" class="s-btn s-btn-gray share-btn-fail">\u786e\u5b9a</a></div></div>', n.T4 = '<div id="cb-share4" class="combine-share share-msg share-warning">    <dl>        <dt class="fl share-ico"></dt>        <dd class="ld"><h5>\u5b57\u6570\u8d85\u51fa\u9650\u5236\u8bf7\u91cd\u65b0\u8f93\u5165</h5></dd>    </dl>    <div class="share-btn"><a href="#none" class="s-btn s-btn-gray share-btn-fail">\u786e\u5b9a</a></div></div>', n.T5 = '<div id="cb-share5" class="combine-share share-warning">    <dl>        <dt class="fl share-ico"></dt>        <dd class="ld"><h5>\u8bf7\u5148\u7ed1\u5b9a\u5206\u4eab\u5e73\u53f0\u8d26\u53f7\u518d\u8fdb\u884c\u5206\u4eab</h5></dd>    </dl>    <div class="share-btn"><a href="#none" class="s-btn s-btn-gray share-btn-rebind">\u786e\u5b9a</a></div></div>', n.IMG = '<p>\u9009\u62e9\u914d\u56fe\uff1a</p><div class="share-imgScroll">    <a id="share-img-prev" class="share-controls s-btn s-btn-gray" href="#none"><s></s></a>    <a id="share-img-next" class="share-controls s-btn s-btn-gray" href="#none"><s></s></a>    <div class="share-img-wrap">        <ul class="lh">{IMGS}</ul>    </div></div>', this.onbeforeOpen && this.onbeforeOpen(this);
        var o = i(), r = s(), c = "";
        c = o ? n["T" + t].replace("{IMGWRAP}", n.IMG).replace("{IMGS}", i()) : n["T" + t].replace("{IMGWRAP}", ""), c = c.replace("{LINK}", this.shareParam.url), c = c.replace("{SHARELIST}", r), this.textNumOverflow && (this.shareParam.content = this.cacheText), this.jp && (this.shareParam.content = this.shareParam.content.replace("{PRICE}", this.jp)), c = c.replace("{TEXT}", this.shareParam.content), e !== void 0 && (c = c.replace("{EXT}", e)), jdThickBoxclose && jdThickBoxclose(), 1 === t && $.jdThickBox({title: "\u5206\u4eab\u7ed9\u597d\u53cb",width: 520,height: o ? 340 : 200,source: c}, function() {
            a.getBindStatus()
        }), 2 === t && $.jdThickBox({title: "\u5206\u4eab\u7ed9\u597d\u53cb",width: 520,height: 100,source: c}), 3 === t && $.jdThickBox({title: "\u5206\u4eab\u7ed9\u597d\u53cb",width: 400,height: 100,source: c}), 4 === t && $.jdThickBox({title: "\u63d0\u793a",width: 400,height: 100,source: c}), 5 === t && $.jdThickBox({title: "\u8d26\u53f7\u7ed1\u5b9a",width: 400,height: 100,source: c}), this.wrap = $("#cb-share" + t), 1 === t && this.updateCount(), this.bindEvent()
    },bindEvent: function() {
        var t = this, e = this.wrap, i = e.find(".share-btn-ok"), s = e.find(".share-btn-fail,.share-btn-rebind"), a = e.find(".share-img-wrap"), n = $("#share-img-prev"), o = $("#share-img-next"), r = a.find("li");
        r.bind("click", function() {
            r.removeClass("selected"), $(this).addClass("selected")
        }), e.find(".mt input").unbind("click").bind("click", function() {
            var e = $(this).val();
            $(this).next().hasClass("actived") || ($(this).next().addClass("actived"), window.open(t.shareMap["T" + e].url))
        }), e.find(".mc textarea").bind("keyup change", function() {
            t.updateCount($(this)), t.cacheText = $(this).val()
        }), i.bind("click", function() {
            t.wrap.find("textarea");
            var e = t.wrap.find(".share-count").hasClass("overflow");
            e ? (t.getThickBox(4), t.textNumOverflow = !0) : (t.goShare(), t.textNumOverflow = !1)
        }), s.unbind("click").bind("click", function() {
            t.getThickBox(1)
        }), a.imgScroll({visible: 4,step: 4,prev: n,next: o,showControl: !0})
    },updateCount: function(t) {
        t = t || this.wrap.find("textarea");
        var e = t.val(), i = e.replace(/[\u4e00-\u9fa5]/g, "jd").length, s = this.wrap.find(".share-count"), a = s.find("em"), n = 100;
        0 > n - Math.ceil(i / 2) ? a.html("0") : a.html(n - Math.ceil(i / 2) + ""), Math.ceil(i / 2) > n ? s.addClass("overflow") : s.removeClass("overflow")
    },getBindStatus: function() {
        var t = this;
        $.ajax({url: "http://share.jd.com/share/getBindStatus.action",dataType: "jsonp",success: function(e) {
                e && e.length && t.setBindStatus(e)
            }})
    },setBindStatus: function(t) {
        for (var e, i, s, a = 0; t.length > a; a++)
            e = t[a].name, i = t[a].status, s = t[a].type, 1 === i && (this.wrap.find("#share-ico-" + e).addClass("actived"), this.wrap.find("#share-" + e).attr("checked", !0))
    },goShare: function() {
        var t = this, e = this.wrap.find("dd input:checked"), i = this.wrap.find(".share-img-wrap .selected img").attr("src"), s = this.wrap.find("#share-text").val(), a = [], n = this.shareParam;
        n.content = s, n.imgUrl = i, e.each(function() {
            var t = $(this).val();
            t && a.push(t)
        }), a.length && (n.type = a.join(","), $.ajax({url: "http://share.jd.com/share/shareItem.action",dataType: "jsonp",data: n,success: function(e) {
                var i = [], s = [];
                if (e && e.code !== void 0 && (-1 === e.code && t.getThickBox(3), 0 === e.code)) {
                    i = e.status.split(",");
                    for (var a = 0; i.length > a; a++)
                        s.push(t.shareMap["T" + i[a]].text);
                    t.getThickBox(2, s.join(","))
                }
            }}))
    }}, G.onAttr("isOnlyIOUsPay", function() {
    function t() {
        /debug/.test(location.href) && prompt("\u9875\u9762\u5c06\u8df3\u8f6c\u5230\uff1a", i.replace(/nums=\d+/, "nums=" + $("#buy-num").val()) + "&r=" + Math.random()), location.href = i.replace(/nums=\d+/, "nums=" + $("#buy-num").val()) + "&r=" + Math.random()
    }
    var e, i = "http://cart.jd.com/cart/dynamic/gateForSubFlow.action?wids=" + G.sku + "&nums=1&subType=25", s = $("#choose-btns"), a = s.find("#choose-btn-easybuy,#choose-btn-divide"), n = s.find("#choose-btn-append"), o = $("#nav-minicart"), r = '        <div id="choose-btn-baitiao" class="btn">            <a href="#none" class="btn-baitiao" clstag="shangpin|keycount|product|btn-dbt">\u6253\u767d\u6761<b></b></a>        </div>        <div id="choose-btn-baitiao-n" class="btn">            <a href="#none" class="btn-baitiao-n" onclick="showNaBaitiao(\'#Fqfk_Tip\')" clstag="shangpin|keycount|product|btn-dbt">\u62ff\u767d\u6761<b></b></a>        </div>';
    s.prepend(r), e = s.find("#choose-btn-baitiao"), a.remove(), n.hide(), o.addClass("nav-minicart-baitiao"), pageConfig.serviceYB = "disabled", pageConfig.btnBaiTiaoFq = "disabled", o.find("a").attr("href", "#none").addClass("btn-baitiao"), jdModelCallCenter.settings.fn = t, $(".btn-baitiao").click(function() {
        $(this).attr("href", "#none"), pageConfig.product.havestock && $.login({modal: !0,complete: function(e) {
                e && e.IsAuthenticated && e.IsAuthenticated && t()
            }})
    })
}), G.onAttr("is7ToReturn-0", function() {
    var t = $("#summary-tips .dd"), e = $("#is7ToReturn-0");
    e.length || (t.append('<div id="is7ToReturn-0" class="hl_red">\u8be5\u5546\u54c1\u4e0d\u652f\u63017\u5929\u65e0\u7406\u7531\u9000\u8d27</div>'), t.parent().show())
}), G.onAttr("isOverseaPurchase-2", function() {
    var t = $("#brand-bar-pop"), e = pageConfig.compatible && pageConfig.wideVersion ? "http://img14.360buyimg.com/da/jfs/t400/299/567388192/6321/25ca849/5423c4e8N677e0ae5.png" : "http://img11.360buyimg.com/da/jfs/t337/347/813006143/5018/2539994f/5423c4efNe43efd80.png";
    t.prepend('<div id="oversea-purchase" class="m"><em><img src="' + e + '" alt="\u6d77\u5916\u76f4\u8d2d-\u8ba4\u8bc1\u5546\u5bb6" /></em></div>')
}), function() {
    function t() {
//        var t = $("#choose-btn-easybuy,#choose-btn-baitiao-fq,#nav-minicart");
       // pageConfig.product.specialAttrs.join("^"), $("#choose-btn-append,#choose-btn-qiang").addClass("disabled"), t.remove(), pageConfig.product.isWeChatStock = !0
    }
    pageConfig.product.isClosePCShow && t()
}(), function() {
//    var t = $("#choose-btn-easybuy"), e = '        <div id="choose-btn-baitiao-fq" clstag="shangpin|keycount|product|baitiao" class="btn">            <a href="#none" class="btn-baitiao-fq" style="width:100px" onclick="showBaitiaoFq(\'#Fqfk_Tip\')" clstag="shangpin|keycount|product|btn-dbt">\u767d\u6761/\u5206\u671f<b style="background:url(http://img10.360buyimg.com/da/jfs/t187/274/284523263/8856/bceb4ca8/5385bac9Nbc69d7f7.png) no-repeat"></b></a>        </div>';
//    G.isJd && "enabled" == pageConfig.btnBaiTiaoFq && t.after(e)
}(), $(function() {
    var t = $("#choose-btn-append"), e = $("#InitCartUrl"), i = $("#recommend .tab"), s = "", a = "";
    pageConfig.product.havestock === void 0 ? (s = "", a = "http://cart.gift.jd.com/cart/addGiftToCart.action?pid=" + pageConfig.product.skuid + "&pcount=" + $("#buy-num").val() + "&ptype=1") : (s = pageConfig.product.havestock ? "" : "disabled", pageConfig.product.havestock ? (s = "", a = "http://cart.gift.jd.com/cart/addGiftToCart.action?pid=" + pageConfig.product.skuid + "&pcount=" + $("#buy-num").val() + "&ptype=1") : (s = "disabled", a = "#none")), 6980 == G.cat[2] && $('#product-detail [data-widget="tab-item"]').eq(3).hide(), $("#online-service").find("b").html("\u8054\u7cfb\u5ba2\u670d"), $("#comments-list li").eq(4).html('<a href="javascript:;">\u6709\u6652\u5355\u7684\u8bc4\u4ef7<em>(0)</em></a>'), $("body").addClass("cat-1-" + G.cat[0] + " cat-2-" + G.cat[1] + " cat-3-" + G.cat[2] + " item-" + G.sku), G.onAttr("HYKHSP-2", function() {
        setTimeout(function() {
            pageConfig.product.havestock && $("#choose-btn-append .btn-append ").addClass("btn-append-zydz")
        }, 400)
    }), function() {
        var t = $("#product-detail .mt").eq(0).find("li");
        t.eq(0).attr("id", "p-con-detail"), t.eq(1).attr("id", "p-con-attr"), t.eq(2).attr("id", "p-con-list"), t.eq(3).attr("id", "p-con-comm"), t.eq(4).attr("id", "p-con-guar"), t.eq(5).attr("id", "p-con-wiki")
    }(), i.find("li").eq(0).attr("id", "th-fitting"), i.find("li").eq(1).attr("id", "th-hot"), i.find("li").eq(2).attr("id", "th-service").hide(), $("#th-fitting a").eq(0).text("\u63a8\u8350\u914d\u4ef6"), $("#summary-grade .dd a").attr("clstag", "shangpin|keycount|product|pingjiabtn"), $("#store-selector").attr("clstag", "shangpin|keycount|product|quyuxuanze"), $("#choose-btn-coll a").attr("clstag", "shangpin|keycount|product|btn-guanzhu"), $("#choose-btn-easybuy").attr("clstag", "shangpin|keycount|product|btn-easybuy"), 1 > $("#th-suits").length && ($("#th-fitting").after('<li data-widget="tab-item" class="none" id="th-suits"><a href="javascript:;">\u4f18\u60e0\u5957\u88c5</a></li>'), $("#tab-reco").after('<div id="tab-suits" class="mc none" data-widget="tab-content"> <div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div> </div>')), 1 > $("#th-dpg").length && ($("#th-service").before('<li data-widget="tab-item" class="none" id="th-dpg"><a href="javascript:;">\u76f8\u5173\u4e3b\u9898\u642d\u914d</a></li>'), $("#tab-services").before('<div id="tab-dpg" class="mc none" data-widget="tab-content"> <div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div> </div>')), $("#j-im").addClass("djd-im").attr("href", "#none"), $("#btnReferSearch").attr("clstag", "shangpin|keycount|product|consult9"), $("#consult .tab li").each(function(t) {
        $(this).attr("clstag", "shangpin|keycount|product|consult0" + (t + 1))
    }), G.isJd && $("body").addClass("JD"), G.isPop && $("body").addClass("POP"), "" != $.trim($("#product-detail-6").html()) && ($("#p-con-wiki").show(), $("#practical-guide").Jtab({event: "click",hookKey: "data-subtab",hookItemVal: "subtab-item",hookContentVal: "subtab-content",compatible: !0})), /gift=true/.test(location.href) && ($("#choose-btns").prepend('<div id="choose-btn-gift" class="btn ' + s + '"><a href="' + a + '" class="btn-gift"><b></b>\u9009\u4f5c\u793c\u7269\u8d2d\u4e70</a></div>'), setAmount.targetLink = $("#choose-btn-append .btn-append,#choose-btn-gift .btn-gift")), (938747 == G.sku || 938749 == G.sku) && (t.addClass("disabled"), e.attr("href", "#none")), $("#view-bigimg").after('<div id="compare" clstag="shangpin|keycount|product|jiaruduibi"><a class="btn-compare btn-compare-s" href="#none" id="comp_{sku}" skuid="{sku}"><span>\u5bf9\u6bd4</span></a></div>'.replace(/{sku}/g, G.sku)), $("#view-bigimg").attr("clstag", "shangpin|keycount|product|chakandatu"), pageConfig.FN_InitContrast(), G.getCommentNum(G.orginSku, function(t) {
        var e = $("#summary-grade .star"), i = $("#summary-grade .dd>a").eq(0), s = $("#p-con-comm");
        if (t && t.CommentCount !== void 0) {
            if (e.removeClass("sa0").addClass("sa" + t.AverageScore), 6980 === G.cat[2])
                return !1;
            i.html("(\u5df2\u6709" + t.CommentCount + "\u4eba\u8bc4\u4ef7)").css("float", "left"), t.CommentCount > 0 && s.find("a").append('<span class="hl_blue"> (' + t.CommentCount + ") </span>")
        } else
            e.removeClass("sa0").addClass("sa5"), i.html("(\u5df2\u67090\u4eba\u8bc4\u4ef7)").css("float", "left")
    }), function() {
        if ("disabled" == pageConfig.serviceYB)
            return !1;
        $("#choose-result").length > 0 ? $("#choose-result").before('<li id="choose-service" class="hide"><div class="dt">\u4eac\u4e1c\u670d\u52a1\uff1a</div><div class="dd"></div></li>') : $("#choose-btns").length > 0 && $("#choose-btns").before('<li id="choose-service" class="hide"><div class="dt">\u4eac\u4e1c\u670d\u52a1\uff1a</div><div class="dd"></div></li>');
        var t = $("#choose-btn-append a"), e = t.attr("href"), i = $("#choose-result .dd"), s = $("#choose-result .dd").html(), a = !1;
        JdService.init(G.sku, $("#choose-service .dd"), function(n) {
            var o = "&ybId=" + n.join(","), r = $("#buy-num").val(), c = [], l = $("#choose-btn-qiang a");
            if (n.length > 0) {
                t.attr("href", e.replace(/pcount=\d+/, "pcount=" + r) + o), i.parent().show();
                for (var d = 0; n.length > d; d++)
                    c.push("<strong>\u201c" + $("#yb-pid-" + n[d]).text() + "\u201d</strong>");
                i.html((s ? s + "\uff0c" : "") + c.join("\uff0c"))
            } else
                t.attr("href", e.replace(/pcount=\d+/, "pcount=" + r)), i.html(s);
            l.length && !a && (a = l.attr("href")), l.length && (n.length > 0 ? l.attr("href", a + o) : l.attr("href", a))
        })
    }(), $(".jqzoom").jqueryzoom({xzoom: 400,yzoom: 400,offset: 10,position: "left",preload: 1,lens: 1}), $("#summary-grade .dd").click(function() {
        var t = $("#comment");
        "true" !== $("#comment").attr("nodata") ? t.show() : $(document).scrollTop($("#comments-list").offset().top + $("#comments-list .mt").height())
    }), function() {
        var t = $("#spec-list li");
        // t.mouseover(function() {
        //     var e = $(this).find("img"), i = e.attr("src");
        //     t.index($(this)), $("#spec-list img").removeClass("img-hover"), e.addClass("img-hover"), $("#spec-n1 img").eq(0).attr({src: i.replace("/n5/", "/n1/"),jqimg: i.replace("/n5/", "/n0/")})
        // })
    }(), G.isPop && $.getJSONP("http://st.3.cn/gvi.html?callback=setPopInfo&type=popdeliver&skuid=" + G.sku), CommentListNew.init(G.sku), Recommend.init(pageConfig.product.type), NotifyPop.init("#summary-price .dd a", "#notify-stock", ".btn-notice"), $(".spec-items").imgScroll({visible: 5,speed: 200,step: 1,loop: !1,prev: "#spec-forward",next: "#spec-backward",disableClass: "disabled"}), $("#recommend").Jtab({event: "click",compatible: !0}), $("#product-detail").Jtab({event: "click",compatible: !0}, function(t, e, i) {
        if ($("#product-detail .mt").removeClass("nav-fixed"), $("#product-detail .mt").removeClass("nav-fixed").floatNav({fixedClass: "nav-fixed",targetEle: "#consult",anchor: "#product-detail",range: 30,onStart: function() {
                $("#nav-minicart").show()
            },onEnd: function() {
                r()
            }}), 3 == i) {
            if (e.css("height", 5).html("<div>a</div>"), $("#promises,#state").hide(), Consult.getData(0, $("#consult-0")), !CommentListNew.loadFirstPage) {
                var s = pageConfig.product.isFlashPurchase ? 2 : isAreaProduct ? 1 : 3;
                CommentListNew.getData($("#comment-0"), 0, 0, s)
            }
            $("#product-detail .mt").floatNav({fixedClass: "nav-fixed",targetEle: "#consult",anchor: "#product-detail",range: 0,onStart: function() {
                    $("#nav-minicart").show()
                },onEnd: function() {
                    r()
                }})
        } else
            $("#promises,#state").show();
        0 === i ? o() : n()
    }), $("#comments-list").Jtab({event: "click",compatible: !0}, function(t, e, i) {
        var s = 0;
        s = 1 === i ? 3 : 3 === i ? 1 : i;
        var a = pageConfig.product.isFlashPurchase ? 2 : isAreaProduct ? 1 : 0;
        CommentListNew.getData(e, s, 0, a)
    }), $("#discuss").Jtab({event: "click",compatible: !0}, function(t, e, i) {
        Discuss.getData(i, e)
    }), $("#consult").Jtab({event: "click",compatible: !0}, function(t, e, i) {
        4 >= i ? Consult.getData(i, e) : Consult.setExtraData(i, e)
    }), $("#ranklist .mc").Jtab({compatible: !0}, function(t, e) {
        var i = e.find("img");
        i.each(function() {
            var t = $(this).attr("data-src");
            t && $(this).attr("src", t).removeAttr("data-src")
        })
    });
    var n = function() {
    }, o = function() {
    }, r = function() {
    }, c = function() {
    }, l = function() {
    };
    if ($('#product-detail [data-widget="tab-item"]').find("a").addClass("toggle-link"), function() {
        function t(t) {
            var e = $(window).height(), i = $("body").scrollTop() || $("html").scrollTop(), s = t.offset().top;
            return e + i > s && s > i
        }
        var e, i, s = $(".detail-content"), a = s.find('[name^="detail-tag-id-"]'), d = [], p = $('#product-detail [data-widget="tab-item"]'), m = p.eq(0);
        return 1 > a.length ? !1 : (p.find("a").addClass("toggle-link"), o = function() {
            return 1 > a.length ? !1 : (m.addClass("p-tab"), 1 > m.find("a>s").length && m.find("a").append("<s></s>"), m.mouseover(function() {
                $(this).addClass("hover")
            }), 1 > m.find(".sub-item").length && (a.each(function() {
                var t = $(this).attr("id"), e = $(this).attr("text");
                d.push('<li data-id="' + t + '"><a data-id="#' + t + '" href="#' + t + '">' + e + "</a></li>")
            }), m.append('<ul class="hide sub-item">' + d.join("") + "</ul>"), e = m.children(), i = m.find("li"), m.find(".sub-item a").unbind("click").bind("click", function(t) {
                $(this).text();
                var e = $(this).attr("data-id"), s = e.replace("#detail-tag-id-", "");
                $("body,html").scrollTop($(e).offset().top - 35), i.remove("hl_red"), $(this).parent().addClass("hl_red"), log("skupage", "cateid", s, G.cat[2], G.cat[1], G.cat[0], G.sku, currentAreaInfo.currentProvinceName, currentAreaInfo.currentCityName), t.preventDefault(), t.stopPropagation()
            })), void 0)
        }, n = function() {
            m.unbind("mouseover mouseenter mouseout").removeClass("hover"), m.children("a").html("\u5546\u54c1\u4ecb\u7ecd<s></s>"), pageConfig.detailListInited = !1
        }, r = function() {
            m.find(".toggle-link").eq(0).html("\u5546\u54c1\u4ecb\u7ecd<s></s>")
        }, c = function() {
            m.addClass("hover")
        }, l = function() {
            m.removeClass("hover")
        }, o(), $("body").scroller({onScroll: function(e) {
                e.$o;
                var s = [];
                if (a.each(function() {
                    var e = $(this);
                    t(e) && s.push(e)
                }), s.length > 0) {
                    var n = s[0].attr("id").replace("detail-tag-id-", "");
                    i.removeClass("hl_red"), i.filter('[data-id="detail-tag-id-' + n + '"]').addClass("hl_red")
                } else
                    i.removeClass("hl_red")
            }}), $("#product-detail").scroller({startThrehold: 110,onStart: function() {
                c()
            },onEnd: function() {
                l()
            }}), void 0)
    }(), mlazyload({defObj: "#consult",defHeight: 0,fn: function() {
            Consult.getData(0, $("#consult-0"))
        }}), mlazyload({defObj: "#comments-list",defHeight: 0,fn: function() {
            if (!CommentListNew.loadFirstPage) {
                var t = pageConfig.product.isFlashPurchase ? 2 : isAreaProduct ? 1 : 0;
                CommentListNew.getData($("#comment-0"), 0, 0, t)
            }
        }}), mlazyload({defObj: "#discuss",defHeight: 0,fn: function() {
            Discuss.getData(0, $("#discuss-1"))
        }}), mlazyload({defObj: "#comments",defHeight: 0,fn: function() {
            if (!CommentListNew.loadFirstPage) {
                var t = pageConfig.product.isFlashPurchase ? 2 : isAreaProduct ? 1 : 0;
                CommentListNew.getData($("#comment-0"), 0, 0, t)
            }
        }}), mlazyload({defObj: "#product-track",defHeight: 100,fn: function() {
            $.ajax({url: "http://misc.360buyimg.com/product/js/2012/footprint.js?ver=20140724",dataType: "script",cache: !0})
        }}), mlazyload({defObj: "#product-detail",defHeight: 0,fn: function() {
            Repository.init(G.sku)
        }}), mlazyload({defObj: "#ranklist",defHeight: 0,fn: function() {
            var t = [], e = $("#ranklist");
            e.find(".p-price strong").each(function() {
                var e = $(this), i = e.attr("class");
                i && t.push(i.replace("J-p-", ""))
            }), G.getPriceNum(t, null, e)
        }}), $("#product-detail .mt").floatNav({fixedClass: "nav-fixed",targetEle: "#consult",anchor: "#product-detail",range: 30,onStart: function() {
            var t = $(".nav-minicart-buynow");
            t.length > 0 && t.find("a").html("\u7acb\u5373\u8d2d\u4e70"), $("#nav-minicart").show()
        },onEnd: function() {
            r()
        }}), $("#nav-minicart").Jdropdown(function(t) {
        var e = pageConfig.product.priceImg || "http://jprice.360buyimg.com/price/gp" + G.sku + "-1-1-1.png";
        t.find(".nav-minicart-btn a").attr("href", $("#choose-btn-append .btn-append").attr("href")), t.find(".p-img img").attr("src", pageConfig.FN_GetImageDomain(G.sku) + "n4/" + pageConfig.product.src), t.find(".p-name").html(G.name), t.find(".p-price img").attr("src", e)
    }), $("#store-selector").Jdropdown(), $(".share-ft").click(function() {
        $(this).toggleClass("share-ft-open"), $(this).parents("#share-list").toggleClass("share-list-open"), $(".share-list-item").toggleClass("share-list-item-all")
    }), $("#comments-list .tab").append('<li class="tab-last"></li>'), renew(), /from=email/.test(location.href) && $.ajax({url: "http://misc.360buyimg.com/product/js/2012/notify.js",dataType: "script",cache: !0,success: function() {
            Notify && Notify.init("#summary-price .dd a", "#notify-stock")
        }}), $(".btn-pleased,.btn-unpleased").livequery("click", function() {
        var t = $(this);
        $.login({complete: function(e) {
//                if (null != e.IsAuthenticated && e.IsAuthenticated) {
//                    var i = parseInt($.query.get("id"));
//                    if (isNaN(i) || 0 == i) {
//                        var e = location.href.match(/(\d+)(.html)/);
//                        null != e && (i = parseInt(e[1]))
//                    }
//                    var s = $(t).parent().attr("id"), a = parseInt($(t).attr("name"));
//                    i > 0 && $.getJSON(consultationServiceUrl, {method: "VoteForConsultation",productId: i,consultationId: s,score: a}, function(e) {
//                        e.Result ? ($(t).text("\u5df2\u6295\u7968"), $(t).next("span").text(parseInt($(t).next("span").text()) + 1)) : $(t).text("\u5df2\u6295\u7968")
//                    })
//                }
            }}), mark(location.href.match(/(\d+).html/)[1], 5)
    }), $("#site-qq,#site-msn,#site-email").parent().remove(), window.pageConfig) {
        var d = new pageConfig.FN_InitSidebar, p = "98523";
        832 === G.cat[2] && (p = "737542"), d.addItem('<a class="research" target="_blank" href="http://surveys.jd.com/index.php?r=survey/index/sid/' + p + '/lang/zh-Hans"><b></b>\u8c03\u67e5\u95ee\u5377</a>'), d.setTop(), d.scroll()
    }
    if (setImButton(G.sku), 1319 === G.cat[0] && $.ajax({url: "http://misc.360buyimg.com/product/js/2012/item.baby.js?ver=20140123",cache: !0,dataType: "script",scriptCharset: "gb2312"}), jdSref && searchEngineSource) {
        var m = "&encode=utf-8";
        if ("baidu" == searchEngineSource.d) {
            var u = document.referrer;
            m = /ie=utf-8/.test(u) ? "&encode=utf-8" : "&encode=gbk"
        } else
            m = RegExp(searchEngineSource.d).test("soso#sogou") ? "&encode=gbk" : "&encode=utf-8";
        pageConfig.disabledSeoBanner = !0, seoBanner(searchEngineSource, m)
    }
    (function() {
       // var t = ["2_163_817", "2_163_818", "2_232_3431", "2_163_3743"];
       // pageConfig.disabledSeoBanner || (t.push("2_163_5395"), t.push("2_163_5394")), 1315 === G.cat[0] && $("#Ad2_100_2272").length > 0 && t.push("2_100_2272"), G.isPop && t.push("2_601_3951"), $.ajax({url: "http://nfa.jd.com/loadFa_toJson.js?aid=" + t.join("-") + "&ver=20131107",dataType: "script",cache: !0}), insertScript("http://static.360buyimg.com/gemini/gemini/gemini_v2.2.1.js", {id: "1399174259281",name: "gemini_divide_script",charset: "utf-8",divideType: "MODULE_INJECT",param: "[{t:'xiaoyumi'}]"})
    })(), mark(G.sku, 1), clsPVAndShowLog("", "", 3, "p"), clsPVAndShowLog("", "", 2, "p"), $("#choose-btn-append .btn-append b").livequery("click", function() {
        JA && JA.tracker.ngloader("item.010002", {sku: G.sku,jp: pageConfig.product.jp})
    }), $("#choose-btn-coll b").click(function() {
        JA && JA.tracker.ngloader("item.010003", {sku: G.sku})
    }), function() {
        var t = pageConfig.product.videoPath, e = $(".detail-content"), i = $("#letv");
        if (t && 1 > i.length) {
            var s = "http://yuntv.letv.com/bcloud.html?uu=abcde12345&vu=" + t + "&pu=12345abcde&auto_play=0&width=750&height=422";
            e.before('<div id="letv"><iframe id="le-video" data-lazyload="' + s + '" frameborder="0" scrolling="no" style="display:block; width:750px; height:422px; margin:0 auto;"></iframe></div>'), $("#letv iframe").Jlazyload({type: "image"})
        }
    }(), function() {
        var t = $("#itemover-related-list"), e = pageConfig.compatible && pageConfig.wideVersion ? 12 : 9;
        if ("undefined" != typeof warestatus && 0 === warestatus) {
            t.show(), t.find("p").html("\u7c7b\u4f3c\u5546\u54c1");
            var i = '<div class="w">    <div id="out-of-stock" class="m m2 hide">        <div class="mt">            <h2>\u642d\u914d\u63a8\u8350</h2>        </div>        <div class="mc">            <div id="noitem-related-list">                <div class="noitem-related-list">                    <a href="javascript:;" class="spec-control disabled" id="noitem-forward"></a>                    <a href="javascript:;" class="spec-control" id="noitem-backward"></a>                    <div id="noitem-list">                            <div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div>                    </div>                </div>            </div>        </div>    </div></div>';
            $("#product-intro").parent().after(i), new Grecommend(G.sku, 902011, readCookie("ipLoc-djd"), t, e), new Grecommend(G.sku, 902018, readCookie("ipLoc-djd"), $("#out-of-stock #noitem-list"), 20)
        }
    }(), function() {
        var t = $("#preview .spec-items li img"), e = [], i = $("#share-list li");
        t.each(function() {
            var t = $(this).attr("src");
            e.push(t)
        });
        var s = "\u6211\u5728@\u4eac\u4e1c \u53d1\u73b0\u4e86\u4e00\u4e2a\u975e\u5e38\u4e0d\u9519\u7684\u5546\u54c1\uff1a" + G.name + "\uff0c\u4eac\u4e1c\u4ef7\uff1a\uffe5 {PRICE}\u3002 \u611f\u89c9\u4e0d\u9519\uff0c\u5206\u4eab\u4e00\u4e0b";
        new CombineShare({sid: 3,rid: G.sku,$el: i,title: s,content: s,url: location.href,imgs: e,onbeforeOpen: function(t) {
                t.jp = pageConfig.product.jp
            }}), i.attr("clstag", "shangpin|keycount|product|fenxiang")
    }(), function() {
        var t = $("#consult-search .form"), e = $("#consult"), i = pageConfig.wideVersion && pageConfig.compatible, s = '            <div id="consult-wrap" class="consult-search">                <b></b>                <div class="consult-pop">                    <input type="text" id="txbReferSearch" placeholder="\u8bf7\u8f93\u5165\u5173\u952e\u8bcd" />                    <input type="button" value="\u641c\u7d22" id="btnReferSearch" class="btn-search" clstag="shangpin|keycount|product|consult9">                    <a class="consult-close hl_blue" href="#none" onclick="closeCounsultSearch()">\u53d6\u6d88</a>                </div>            </div>';
        G.isJd && (s += '            <div class="consult-pub">                <a class="css3-btn" target="_blank" href="http://club.jd.com/allconsultations/' + G.sku + '-1-1.html#form1">\u53d1\u8868\u54a8\u8be2</a>            </div>'), t.remove(), e.addClass("consult-2014"), e.find(".mt").append(s), window.closeCounsultSearch = function() {
            $("#consult-wrap").removeClass("hover"), pageConfig.onConsultSearch = !1
        }, i || (e.find(".consult-search").hover(function() {
            var t = $(this);
            setTimeout(function() {
                t.addClass("hover")
            }, 500)
        }, function() {
            pageConfig.onConsultSearch || $(this).removeClass("hover")
        }).bind("click", function() {
            return $(this).is(".consult-close") ? void 0 : !1
        }), e.find("b").bind("click", function() {
            return $(this).addClass("hover"), pageConfig.onConsultSearch = !0, !1
        }), $("body").bind("click", function() {
            closeCounsultSearch()
        }))
    }(), function() {
        var t = $("#comments-list .mt"), e = RegExp("-" + G.sku + "-"), i = "-1155902-1133857-1169454-1142209-1196479-";
        e.test(i) && t.append('<div class="p-bfc ar"><span class="join-discuss" onclick="$(\'._base_ygg_yqb\').trigger(\'click\')" href="#none">\u52a0\u5165\u8ba8\u8bba</span></div>')
    }()
});
var geminiCustomizedDot = geminiCustomizedDot || [], MBuy = {init: function() {
        this.chooseBtn = $("#choose-btns"), this.setQrcode()
    },setQrcode: function() {
//        var t = this, e = '<div id="m-buy" clstag="shangpin|keycount|product|btn-erweima">    <div class="mt">\u5ba2\u6237\u7aef\u9996\u6b21\u4e0b\u5355</div>    <div id="m-countdown">        <strong class="hl_red">\u90015\u5143\u4eac\u5238</strong>    </div>    <div id="m-qrcode" class="hide">        <span class="close" onclick="$(\'#m-buy\').removeClass(\'hover\')"></span>        <span class="arr"></span>        <div class="m-qrcode-wrap">            <strong>\u5ba2\u6237\u7aef\u9996\u5355\u6ee159\u90015\u5143\u4eac\u5238\u4f4e\u4ef7\u79d2\u6740\u5546\u54c1\u62a2\u4e0d\u505c</strong>            <div id="m-qrcode-box">                <img src="http://misc.360buyimg.com/lib/img/e/blank.gif" width="155" height="155" />            </div>        </div>    </div></div>';
//        return $("#m-buy").length > 0 ? !1 : (this.chooseBtn.append(e), this.mBuy = $("#m-buy"), this.mt = this.mBuy.find(".mt"), this.mBuy.Jdropdown({delay: 200,event: "click"}, function() {
//            "true" !== t.mBuy.attr("loaded") && ($.ajax({url: "http://misc.360buyimg.com/product/js/2012/qrcode.js?ver=20140527",dataType: "script",scriptCharset: "gb2312",cache: !0}), t.mBuy.attr("loaded", "true"))
//        }), void 0)
    },setProm: function(t) {
        var e = this.mBuy.find("#m-countdown");
        if (!(t && t.indexOf(".") > -1))
            return this.mt.html("\u5ba2\u6237\u7aef\u9996\u6b21\u4e0b\u5355"), e.html('<strong class="hl_red">\u90015\u5143\u4eac\u5238</strong>'), void 0;
        t = t.split(",");
        var i = isNaN(Number(t[1])) ? 0 : Number(t[1]) / 1e3;
        Math.floor(i / 86400) > 7 ? (this.mt.html("\u5ba2\u6237\u7aef\u9996\u6b21\u4e0b\u5355"), e.html('<strong class="hl_red">\u90015\u5143\u4eac\u5238</strong>')) : (this.mt.html('<strong class="hl_red">\u624b\u673a\u4e13\u4eab\u4ef7\uff1a' + t[0] + "\u5143</strong>"), i >= 0 && G.Countdown.init(i, function(t) {
            e.html("\u8fd8\u5269\uff1a" + t.d + "\u5929" + t.h + "\u5c0f\u65f6" + t.m + "\u5206")
        }))
    }};
(function() {
    var t = RegExp("-" + G.cat[2] + "-"), e = "-1195-6980-6151-6152-1444-7052-7054-7057-9435-";
    t.test(e) ? MBuy.setProm = function() {
    } : MBuy.init()
})();
var ABTest = function(t, e, i) {
    return this.id = t, this.percent = e, this.base = i || 1e4, this.tested = !1, this.version = {A: 0,B: 0,N: 0}, this.result = {A: [],B: [],N: []}, this
};
ABTest.prototype = {test: function() {
        function t() {
            var t = i.version;
            0;
            for (var e in t)
                0;
            0, i.tested = !0
        }
        function e(e) {
            for (var s = e, a = e.length, n = 0; a > n; n++)
                0;
            t()
        }
        var i = this;
//        window.collectUUUID = function(t) {
//            e(t)
//        }, $.ajax({url: "http://nfa.jd.com/loadFa_toJson.js?aid=2_163_4827-2_163_4828",dataType: "jsonp",cache: !0,success: function() {
//            }})
    },isHitVersion: function(t) {
        t = t || this.id;
        var e, i = this.base * this.percent;
        return "string" != typeof t && (t += ""), t ? (e = this.getHashProbability(t, this.base), i > e ? (this.version.A++, this.result.A.push(t), "A") : e >= i && 2 * i > e ? (this.version.B++, this.result.B.push(t), "B") : (this.version.N++, this.result.N.push(t), "NONE")) : (version.N++, this.result.N.push(t), "NONE")
    },switchVersion: function(t) {
        if (!t || !/A|B|N/.test(t))
            return 0, !1;
        this.tested || 0;
        var e = this.result[t], i = e[Math.floor(Math.random() * e.length)];
        createCookie("__jda", "122270672." + i + ".043878.1386043878.1386043878.1", 10, "/;domain=jd.com"), 0
    },getHashProbability: function(t, e) {
        function i(t) {
            for (var e = 0, i = 0; t.length > i; i++)
                e = (e << 5) - e + t.charCodeAt(i), e &= e;
            return e
        }
        return Math.abs(i(t)) % e
    }}, function() {
    var t = readCookie("__jda"), e = t ? t.split(".")[1] : !1;
    if (e) {
        pageConfig.promABTest = new ABTest(e, .5, 1e4);
        var i = pageConfig.promABTest.isHitVersion();
        "A" === i && 655 === G.cat[2] && (pageConfig.newAmount = !0)
    }
}(), pageConfig.newAmount && function() {
    var t = $(".wrap-input"), e = $("#choose-btn-append"), i = $("#choose-amount"), s = $("#choose-result");
    e.before('<div class="choose-amount fl"></div>'), $(".choose-amount").append(t), $(".btn-reduce").html("-"), $(".btn-add").html("+"), i.remove(), s.remove()
}(), $(function() {
    var t = readCookie("__jda"), e = t ? t.split(".")[1] : !1;
    if (pageConfig.scrollTopABTest = new ABTest(e, .2, 1e4), $("#o-header-2013").outerHeight() + $("#shortcut-2013").outerHeight(), $("body,html"), e) {
        var i = pageConfig.scrollTopABTest.isHitVersion();
        "A" === i && setTimeout(function() {
            $("body,html").animate({scrollTop: $(".breadcrumb").offset().top}, 1)
        }, 1e3)
    }
}), function(t) {
    (t.itemShopJsona && t.itemShopJsona.searchLink || t.itemShopJsonb && t.itemShopJsonb.shopCategory) && ($("#sp-category").after('<div id="browse-browse-pop" class="m m2 hide related-buy"><div class="mt"><h2>\u770b\u4e86\u53c8\u770b</h2></div><div class="mc"></div></div>'), new Grecommend(G.sku, 902029, readCookie("ipLoc-djd"), $("#browse-browse-pop .mc")))
}(window);
