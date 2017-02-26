 /*
 Date: 2014-01-21 
 */
function login() {
    return location.href = "/user/login.html";
}
function regist() {
    return location.href = "/user/register.html";
}
function createCookie(a, b, c, d) {
    var d = d ? d : "/";
    if (c) {
        var e = new Date;
        e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c);
        var f = "; expires=" + e.toGMTString()
    } else
        var f = "";
    document.cookie = a + "=" + b + f + "; path=" + d
}
function readCookie(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d]; " " == e.charAt(0); )
            e = e.substring(1, e.length);
        if (0 == e.indexOf(b))
            return e.substring(b.length, e.length)
    }
    return null
}
function addToFavorite() {
    var a = "http://www.jd.com/", b = "\u4eac\u4e1cJD.COM-\u7f51\u8d2d\u4e0a\u4eac\u4e1c\uff0c\u7701\u94b1\u53c8\u653e\u5fc3";
    document.all ? window.external.AddFavorite(a, b) : window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(b, a, "") : alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c!\n\u8bf7\u60a8\u4f7f\u7528\u83dc\u5355\u680f\u6216Ctrl+D\u6536\u85cf\u672c\u7ad9\u3002"), createCookie("_fv", "1", 30, "/;domain=jd.com")
}
function search(a) {
    var b = "http://search.jd.com/Search?keyword={keyword}&enc={enc}{additional}", c = search.additinal || "", d = document.getElementById(a), e = d.value;
    if (e = e.replace(/^\s*(.*?)\s*$/, "$1"), e.length > 100 && (e = e.substring(0, 100)), "" == e)
        return window.location.href = window.location.href, void 0;
    var f = 0;
    "undefined" != typeof window.pageConfig && "undefined" != typeof window.pageConfig.searchType && (f = window.pageConfig.searchType);
    var g = "&cid{level}={cid}", h = "string" == typeof search.cid ? search.cid : "", i = "string" == typeof search.cLevel ? search.cLevel : "", j = "string" == typeof search.ev_val ? search.ev_val : "";
    switch (f) {
        case 0:
            break;
        case 1:
            i = "-1", c += "&book=y";
            break;
        case 2:
            i = "-1", c += "&mvd=music";
            break;
        case 3:
            i = "-1", c += "&mvd=movie";
            break;
        case 4:
            i = "-1", c += "&mvd=education";
            break;
        case 5:
            var k = "&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";
            switch (i) {
                case "51":
                    g = k.replace(/\[cid2]/, ""), g = g.replace(/\{cid1}/g, "5272");
                    break;
                case "52":
                    g = k.replace(/\{cid1}/g, "5272"), g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                    break;
                case "61":
                    g = k.replace(/\[cid2]/, ""), g = g.replace(/\{cid1}/g, "5273");
                    break;
                case "62":
                    g = k.replace(/\{cid1}/g, "5273"), g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                    break;
                case "71":
                    g = k.replace(/\[cid2]/, ""), g = g.replace(/\{cid1}/g, "5274");
                    break;
                case "72":
                    g = k.replace(/\{cid1}/g, "5274"), g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                    break;
                case "81":
                    g = k.replace(/\[cid2]/, ""), g = g.replace(/\{cid1}/g, "5275");
                    break;
                case "82":
                    g = k.replace(/\{cid1}/g, "5275"), g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}")
            }
            b = "http://search.e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";
            break;
        case 6:
            i = "-1", b = "http://music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}"
    }
    if ("string" == typeof h && "" != h && "string" == typeof i) {
        var l = /^(?:[1-8])?([1-3])$/;
        i = "-1" == i ? "" : l.test(i) ? RegExp.$1 : "";
        var m = g.replace(/\{level}/, i);
        m = m.replace(/\{cid}/g, h), c += m
    }
    if ("string" == typeof j && "" != j && (c += "&ev=" + j), "undefined" != typeof $o.click && $o.click !== !1 && "undefined" != typeof $o.lastKeyword && $o.lastKeyword !== !1)
        try {
            JA.tracker.ngloader("search.000002", {prefix: $o.lastKeyword,keyword: e,pos: $o.click})
        } catch (n) {
        }
    e = encodeURIComponent(e), sUrl = b.replace(/\{keyword}/, e), sUrl = sUrl.replace(/\{enc}/, "utf-8"), sUrl = sUrl.replace(/\{additional}/, c), ("undefined" == typeof search.isSubmitted || 0 == search.isSubmitted) && (setTimeout(function() {
        window.location.href = sUrl
    }, 10), search.isSubmitted = !0)
}
function getRandomDomain(a) {
    var b, a = String(a);
    switch (a.match(/(\d)$/)[1] % 5) {
        case 0:
            b = 10;
            break;
        case 1:
            b = 11;
            break;
        case 2:
            b = 12;
            break;
        case 3:
            b = 13;
            break;
        case 4:
            b = 14;
            break;
        default:
            b = 10
    }
    return "http://img{0}.360buyimg.com/".replace("{0}", b)
}
function setWebBILinkCount(a) {
    try {
        if (a.length > 0) {
            var b = document.createElement("script");
            b.type = "text/javascript", b.src = "http://counter.360buy.com/aclk.aspx?key=" + a, document.getElementsByTagName("head")[0].appendChild(b)
        }
    } catch (c) {
    }
}
function compare() {
    if (null == $("#compare").get(0) && ($("body").prepend('<div id="compare" class="compare"><div class="mt"><h5>\u5546\u54c1\u6bd4\u8f83</h5><div class="extra" onclick="clearCompare()"></div></div><div class="comPro"><ul class="mc" id="comProlist"></ul><div class="mb"><input type="button" value="\u5bf9\u6bd4\u6240\u9009\u5546\u54c1" class="btn" id="compareImg" onclick="openCompare()"></div></div></div>'), $("#compare").css({position: "absolute",top: "160px",right: "0px",zIndex: "1"}), isCoo()), $.browser.msie) {
        var a = document.documentElement.scrollTop, b = .3 * (a - initScrollY);
        b = b > 0 ? Math.ceil(b) : Math.floor(b), $("#compare").get(0).style.top = parseInt($("#compare").get(0).style.top) + b + "px", initScrollY += b, setTimeout("compare()", 50)
    } else
        window.onscroll = function() {
            $("#compare").get(0).style.top = parseInt($("#compare").get(0).style.top) + "px", $("#compare").get(0).style.position = "fixed"
        }
}
function clearCompare() {
    $("#comProlist").empty(), $("#compare").hide(), createCookie("compare", ""), proIDs = new Array
}
function addToCompare(a, b, c) {
    $("#compare").show(), $(".comPro").show();
    var d = proIDs.join(".");
    return -1 != d.indexOf(b) ? (alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u5df2\u7ecf\u9009\u62e9\u6b64\u5546\u54c1\uff01"), void 0) : (proIDs.length < 4 ? (proIDs.push(b), $("#comProlist").append("<li id='check_" + b + "'><a title='\u5220\u9664' class='close' onclick='reduceCompare(" + b + ")'></a>" + c + "</li>"), writeCompare(b, c)) : alert("\u5bf9\u4e0d\u8d77\uff0c\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u56db\u79cd\u5546\u54c1\u8fdb\u884c\u5bf9\u6bd4\uff01"), void 0)
}
function reduceCompare(a) {
    $("#check_" + a).remove(), $.each(proIDs, function(b, c) {
        a == c && proIDs.splice(b, 1)
    });
    var b = readCookie("compare"), c = b.indexOf(a), d = b.indexOf("|||", c) + 3, e = b.substring(c, d), f = b.replace(e, "");
    createCookie("compare", f), 0 == proIDs.length && $(".comPro").hide()
}
function openCompare() {
    switch (proIDs.length) {
        case 1:
            alert("\u5bf9\u4e0d\u8d77\uff0c\u6700\u5c11\u9009\u62e9\u4e24\u79cd\u5546\u54c1\u8fdb\u884c\u5bf9\u6bd4\uff01");
            break;
        case 2:
            window.open("http://www.360buy.com/pcompare.aspx?s1=" + proIDs[0] + "&s2=" + proIDs[1]);
            break;
        case 3:
            window.open("http://www.360buy.com/pcompare.aspx?s1=" + proIDs[0] + "&s2=" + proIDs[1] + "&s3=" + proIDs[2]);
            break;
        case 4:
            window.open("http://www.360buy.com/pcompare.aspx?s1=" + proIDs[0] + "&s2=" + proIDs[1] + "&s3=" + proIDs[2] + "&s4=" + proIDs[3]);
            break;
        default:
            return alert("\u8bf7\u9009\u62e92-4\u4ef6\u5546\u54c1\u8fdb\u884c\u5bf9\u6bd4\uff01"), void 0
    }
}
function writeCompare(a, b) {
    var c = readCookie("compare");
    null == c && (c = ""), c += a + "||" + escape(b) + "|||", createCookie("compare", c)
}
function isCoo() {
    var a = readCookie("compare");
    if (a) {
        for (var b = a.split("|||"), c = "", d = 0; d < b.length - 1; d++)
            c += "<li id='check_" + b[d].split("||")[0] + "'><a title='\u5220\u9664' class='close' onclick='reduceCompare(" + b[d].split("||")[0] + ")'></a>" + unescape(b[d].split("||")[1]) + "</li>", proIDs.push(b[d].split("||")[0]);
        $("#comProlist").html(c), $("#compare").show(), $(".comPro").show()
    }
}
function asyncScript(a, b) {
    if ("function" == typeof a)
        var b = a, a = null;
    if (a) {
        if ("string" != typeof a)
            return;
        var c = document.createElement("script");
        c.type = "text/javascript", c.async = !0, c.src = a;
        var d = document.getElementsByTagName("head")[0];
        if (d.appendChild(c), b) {
            if ("function" != typeof b)
                return;
            c.onload = function() {
                b()
            }
        }
    } else {
        if (!b)
            return;
        setTimeout(function() {
            b()
        }, 0)
    }
}
function getRandomObj(a, b) {
    for (var c = 0, d = 0; d < a.length; d++)
        c += b[d] || 1, b[d] || b.push(1);
    for (var e = Math.ceil(Math.random() * c), f = [], g = [], d = 1; c + 1 > d; d++)
        f.push(d);
    for (var d = 0; d < a.length; d++)
        g[d] = f.slice(0, b[d]), f.splice(0, b[d]);
    for (var d = 0; d < g.length; d++)
        for (var h = 0; h < g[d].length; h++)
            if (e == g[d][h])
                return a[d]
}
function setRandomAds(a, b, c, d) {
    var e, f = getRandomObj(a, b), g = document.getElementById(c);
    f && (d && screen.width >= 1280 ? (f.width = f.width2, f.url = f.url2) : (f.width = f.width, f.url = f.url), e = "<a href='" + f.link + "' target='_blank'><img width='" + f.width + "' height='" + f.height + "' alt='" + f.alt + "' app='image:poster' src='" + f.url + "' /></a>", g && (g.innerHTML = e))
}
function sBuilder() {
    this.strings = new Array, this.length = 0, this.append = function(a) {
        this.strings.push(a), this.length += a.length
    }, this.toString = function(a, b, c) {
        var a = a ? a : "", d = this.strings.join(a);
        return b && c && (d = d.substr(b, c)), d
    }
}
window.pageConfig = window.pageConfig || {}, pageConfig.wideVersion = function() {
    return screen.width >= 1210
}(), pageConfig.wideVersion && pageConfig.compatible && (document.getElementsByTagName("body")[0].className = "root61"), pageConfig.FN_getDomain = function() {
    var a = location.hostname;
    return /360buy.com/.test(a) ? "360buy.com" : "jd.com"
}, pageConfig.FN_GetUrl = function(a, b) {
    return "string" == typeof a ? a : pageConfig.FN_GetDomain(a) + b + ".html"
}, pageConfig.FN_StringFormat = function() {
    var a = arguments[0], b = arguments.length;
    if (b > 0)
        for (var c = 0; b > c; c++)
            a = a.replace(new RegExp("\\{" + c + "\\}", "g"), arguments[c + 1]);
    return a
}, pageConfig.FN_GetDomain = function(a) {
    var b = "http://{0}.jd.com/{1}";
    switch (a) {
        case 1:
            b = this.FN_StringFormat(b, "item", "");
            break;
        case 2:
            b = this.FN_StringFormat(b, "book", "");
            break;
        case 3:
            b = this.FN_StringFormat(b, "mvd", "");
            break;
        case 4:
            b = this.FN_StringFormat(b, "e", "");
            break;
        case 7:
            b = this.FN_StringFormat(b, "music", "")
    }
    return b
}, pageConfig.FN_GetImageDomain = function(a) {
    var b, a = String(a);
    switch (a.match(/(\d)$/)[1] % 5) {
        case 0:
            b = 10;
            break;
        case 1:
            b = 11;
            break;
        case 2:
            b = 12;
            break;
        case 3:
            b = 13;
            break;
        case 4:
            b = 14;
            break;
        default:
            b = 10
    }
    return "http://img{0}.360buyimg.com/".replace("{0}", b)
}, pageConfig.FN_ImgError = function(a) {
    for (var b = a.getElementsByTagName("img"), c = 0; c < b.length; c++)
        b[c].onerror = function() {
            var a = "", b = this.getAttribute("data-img");
            if (b) {
                switch (b) {
                    case "1":
                        a = "err-product";
                        break;
                    case "2":
                        a = "err-poster";
                        break;
                    case "3":
                        a = "err-price";
                        break;
                    default:
                        return
                }
                this.src = "http://misc.360buyimg.com/lib/img/e/blank.gif", this.className = a
            }
        }
}, pageConfig.FN_SetPromotion = function(a) {
    if (0 != a) {
        var b = "\u9650\u91cf,\u6e05\u4ed3,\u9996\u53d1,\u6ee1\u51cf,\u6ee1\u8d60,\u76f4\u964d,\u65b0\u54c1,\u72ec\u5bb6,\u4eba\u6c14,\u70ed\u5356", c = b.split(",")[parseInt(a) - 1], d = "<b class='pi{0}'>{1}</b>";
        switch (c.length) {
            case 1:
                d = d.replace("{0}", " pix1 pif1");
                break;
            case 2:
                d = d.replace("{0}", " pix1");
                break;
            case 4:
                d = d.replace("{0}", " pix1 pif4")
        }
        return d.replace("{1}", c)
    }
}, pageConfig.FN_GetRandomData = function(a) {
    for (var b, c = 0, d = 0, e = [], f = 0; f < a.length; f++)
        b = a[f].weight ? parseInt(a[f].weight) : 1, e[f] = [], e[f].push(c), c += b, e[f].push(c);
    d = Math.ceil(c * Math.random());
    for (var f = 0; f < e.length; f++)
        if (d > e[f][0] && d <= e[f][1])
            return a[f]
}, pageConfig.FN_GetCompatibleData = function(a) {
    var b = screen.width < 1210;
    return b && (a.width = a.widthB ? a.widthB : a.width, a.height = a.heightB ? a.heightB : a.height, a.src = a.srcB ? a.srcB : a.src), a
}, pageConfig.getHashProbability = function(a, b) {
    function c(a) {
        for (var b = 0, c = 0; c < a.length; c++)
            b = (b << 5) - b + a.charCodeAt(c), b &= b;
        return b
    }
    return Math.abs(c(a)) % b
}, pageConfig.FN_InitSlider = function(a, b) {
    var c = function(a, b) {
        return a.group - b.group
    };
    b.sort(c);
    var d, e, f, g, h = b[0].data, i = [], j = 3 == h.length ? "style2" : "style1", k = screen.width < 1210;
    i.push('<div class="slide-itemswrap"><ul class="slide-items"><li class="'), i.push(j), i.push('" data-tag="'), i.push(b[0].aid), i.push('">');
    for (var l = 0; l < h.length; l++)
        d = h[l], e = k ? d.widthB : d.width, f = k ? d.heightB : d.height, g = k ? d.srcB : d.src, i.push('<div class="fore'), i.push(l + 1), i.push('"><a target="_blank" href="'), i.push(d.href), i.push('"><img data-img="2" src="'), i.push(g), i.push('" width="'), i.push(e), i.push('" height="'), i.push(f), i.push('" alt="'), i.push(d.alt), i.push('" /></a></div>');
    i.push('</li></ul></div><div class="slide-controls"><span class="curr">1</span></div>'), document.getElementById(a).innerHTML = i.join("")
};
var CookieUtil = {};
CookieUtil.setASCIICookie = function(a, b, c, d, e, f) {
    "string" == typeof a && "string" == typeof b && (b = escape(b), CookieUtil.setCookie(a, b, c, d, e, f))
}, CookieUtil.setUnicodeCookie = function(a, b, c, d, e, f) {
    "string" == typeof a && "string" == typeof b && (b = encodeURIComponent(b), CookieUtil.setCookie(a, b, c, d, e, f))
}, CookieUtil.setCookie = function(a, b, c, d, e, f) {
    if ("string" == typeof a && "string" == typeof b) {
        var g = a + "=" + b;
        c && (g += "; expires=" + c.toGMTString()), d && (g += "; path=" + d), e && (g += "; domain=" + e), f && (g += "; secure"), document.cookie = g
    }
}, CookieUtil.getUnicodeCookie = function(a) {
    if (getCookie(a), "string" == typeof a) {
        var b = getCookie(a);
        return null == b ? null : decodeURIComponent(b)
    }
    var c = document.cookie;
    return c
}, CookieUtil.getASCIICookie = function(a) {
    if (getCookie(a), "string" == typeof a) {
        var b = getCookie(a);
        return null == b ? null : unescape(b)
    }
    var c = document.cookie;
    return c
}, CookieUtil.getCookie = function(a) {
    var b = document.cookie;
    if ("string" == typeof a) {
        var c = "(?:; )?" + a + "=([^;]*);?", d = new RegExp(c);
        return d.test(b) ? RegExp.$1 : null
    }
    return b
}, CookieUtil.deleteCookie = function(a, b, c) {
    CookieUtil.setCookie(a, "", new Date(0), b, c)
};
var searchlog = function() {
    var a = "http://sstat." + pageConfig.FN_getDomain() + "/scslog?args=", b = "{keyword}^#psort#^#page#^#cid#^" + encodeURIComponent(document.referrer), c = "2", d = "", e = "", f = function() {
        var f = "", g = "", h = "", i = "0";
        if (arguments.length > 0)
            if (0 == arguments[0])
                f = a + c + "^" + b + "^^^58^^" + e + "^" + d;
            else if (1 == arguments[0]) {
                f = 10 != c ? a + "1^" + b + "^" : a + "11^" + b + "^";
                for (var j = 1; j < arguments.length; j++)
                    f += encodeURI(arguments[j]) + "^";
                arguments.length > 3 && "51" == arguments[3] && (g = arguments[1]), arguments.length > 3 && "55" == arguments[3] && (h = arguments[1]), arguments.length > 3 && "56" == arguments[3] && (i = arguments[1]);
                for (var j = 0, k = 5 - arguments.length; k > j; j++)
                    f += "^";
                f += e + "^" + d
            }
        f = f.replace("#cid#", g), f = f.replace("#psort#", h), f = f.replace("#page#", i), $.getScript(f)
    };
    return f
}();
if (function(a) {
    a.extend(a.browser, {client: function() {
            return {width: document.documentElement.clientWidth,height: document.documentElement.clientHeight,bodyWidth: document.body.clientWidth,bodyHeight: document.body.clientHeight}
        },scroll: function() {
            return {width: document.documentElement.scrollWidth,height: document.documentElement.scrollHeight,bodyWidth: document.body.scrollWidth,bodyHeight: document.body.scrollHeight,left: document.documentElement.scrollLeft + document.body.scrollLeft,top: document.documentElement.scrollTop + document.body.scrollTop}
        },screen: function() {
            return {width: window.screen.width,height: window.screen.height}
        },isIE6: a.browser.msie && 6 == a.browser.version,isMinW: function(b) {
            return Math.min(a.browser.client().bodyWidth, a.browser.client().width) <= b
        },isMinH: function(b) {
            return a.browser.client().height <= b
        }})
}(jQuery), function(a) {
    a.fn.hoverForIE6 = function(b) {
        var c = a.extend({current: "hover",delay: 10}, b || {});
        a.each(this, function() {
            var b = null, d = null, e = !1;
            a(this).bind("mouseover", function() {
                if (e)
                    clearTimeout(d);
                else {
                    var f = a(this);
                    b = setTimeout(function() {
                        f.addClass(c.current), e = !0
                    }, c.delay)
                }
            }).bind("mouseout", function() {
                if (e) {
                    var f = a(this);
                    d = setTimeout(function() {
                        f.removeClass(c.current), e = !1
                    }, c.delay)
                } else
                    clearTimeout(b)
            })
        })
    }
}(jQuery), function($) {
    $.extend({_jsonp: {scripts: {},counter: 1,charset: "gb2312",head: document.getElementsByTagName("head")[0],name: function(callback) {
                var name = "_jsonp_" + (new Date).getTime() + "_" + this.counter;
                this.counter++;
                var cb = function(json) {
                    eval("delete " + name), callback(json), $._jsonp.head.removeChild($._jsonp.scripts[name]), delete $._jsonp.scripts[name]
                };
                return eval(name + " = cb"), name
            },load: function(a, b) {
                var c = document.createElement("script");
                c.type = "text/javascript", c.charset = this.charset, c.src = a, this.head.appendChild(c), this.scripts[b] = c
            }},getJSONP: function(a, b) {
            var c = $._jsonp.name(b), a = a.replace(/{callback};/, c);
            return $._jsonp.load(a, c), this
        }})
}(jQuery), function(a) {
    a.fn.jdTab = function(b, c) {
        "function" == typeof b && (c = b, b = {});
        var d = a.extend({type: "static",auto: !1,source: "data",event: "mouseover",currClass: "curr",tab: ".tab",content: ".tabcon",itemTag: "li",stay: 5e3,delay: 100,mainTimer: null,subTimer: null,index: 0}, b || {}), e = a(this).find(d.tab).eq(0).find(d.itemTag), f = a(this).find(d.content);
        if (e.length != f.length)
            return !1;
        var g = d.source.toLowerCase().match(/http:\/\/|\d|\.aspx|\.ascx|\.asp|\.php|\.html\.htm|.shtml|.js|\W/g), h = function(a, b) {
            d.subTimer = setTimeout(function() {
                k(), b ? (d.index++, d.index == e.length && (d.index = 0)) : d.index = a, d.type = null != e.eq(d.index).attr(d.source) ? "dynamic" : "static", j()
            }, d.delay)
        }, i = function() {
            d.mainTimer = setInterval(function() {
                h(d.index, !0)
            }, d.stay)
        }, j = function() {
            switch (e.eq(d.index).addClass(d.currClass), d.type) {
                default:
                case "static":
                    var a = "";
                    break;
                case "dynamic":
                    var a = null == g ? e.eq(d.index).attr(d.source) : d.source;
                    e.eq(d.index).removeAttr(d.source)
            }
            c && c(a, f.eq(d.index), d.index), f.eq(d.index).show()
        }, k = function() {
            e.eq(d.index).removeClass(d.currClass), f.eq(d.index).hide()
        };
        e.each(function(b) {
            a(this).bind(d.event, function() {
                return clearTimeout(d.subTimer), clearInterval(d.mainTimer), h(b, !1), !0
            }).bind("mouseleave", function() {
                d.auto && i()
            })
        }), "dynamic" == d.type && h(d.index, !1), d.auto && i()
    }
}(jQuery), function(a) {
    a.fn.jdSlide = function(b) {
        var c, d, e, f = a.extend({width: null,height: null,pics: [],index: 0,type: "num",current: "curr",delay1: 100,delay2: 5e3}, b || {}), g = this, h = 0, i = !0, j = !0, k = f.pics.length, l = function() {
            var b = "<ul style='position:absolute;top:0;left:0;'><li><a href='" + f.pics[0].href + "' target='_blank'><img src='" + f.pics[0].src + "' width='" + f.width + "' height='" + f.height + "' /></a></li></ul>";
            g.css({position: "relative"}).html(b), a(function() {
                p()
            })
        };
        l();
        var m = function() {
            var a = [];
            a.push("<div>");
            for (var b, d, h = 0; k > h; h++) {
                switch (b = h == f.index ? f.current : "", f.type) {
                    case "num":
                        d = h + 1;
                        break;
                    case "string":
                        d = f.pics[h].alt;
                        break;
                    case "image":
                        d = "<img src='" + f.pics[h].breviary + "' />"
                }
                a.push("<span class='"), a.push(b), a.push("'><a href='"), a.push(f.pics[h].href), a.push("' target='_blank'>"), a.push(d), a.push("</a></span>")
            }
            a.push("</div>"), g.append(a.join("")), g.find("span").bind("mouseover", function() {
                j = !1, clearTimeout(c), clearTimeout(e);
                var a = g.find("span").index(this);
                f.index != a && (e = setInterval(function() {
                    i && n(a)
                }, f.delay1))
            }).bind("mouseleave", function() {
                j = !0, clearTimeout(c), clearTimeout(e), c = setTimeout(function() {
                    n(f.index + 1, !0)
                }, f.delay2)
            })
        }, n = function(a, b) {
            a == k && (a = 0), d = setTimeout(function() {
                g.find("span").eq(f.index).removeClass(f.current), g.find("span").eq(a).addClass(f.current), o(a, b)
            }, 20)
        }, o = function(a, b) {
            var e = parseInt(h), l = Math.abs(e + f.index * f.height), m = Math.abs(a - f.index) * f.height, p = Math.ceil((m - l) / 4);
            l == m ? (clearTimeout(d), b ? (f.index++, f.index == k && (f.index = 0)) : f.index = a, i = !0, i && j && (clearTimeout(c), c = setTimeout(function() {
                n(f.index + 1, !0)
            }, f.delay2))) : (f.index < a ? (h = e - p, g.find("ul").css({top: h + "px"})) : (h = e + p, g.find("ul").css({top: h + "px"})), i = !1, d = setTimeout(function() {
                o(a, b)
            }, 20))
        }, p = function() {
            for (var a = [], b = 1; k > b; b++)
                a.push("<li><a href='"), a.push(f.pics[b].href), a.push("' target='_blank'><img src='"), a.push(f.pics[b].src), a.push("' width='"), a.push(f.width), a.push("' height='"), a.push(f.height), a.push("' /></a></li>");
            g.find("ul").append(a.join("")), c = setTimeout(function() {
                n(f.index + 1, !0)
            }, f.delay2), f.type && m()
        }
    }
}(jQuery), $.browser.isIE6)
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (err) {
    }
var initScrollY = 0, proIDs = new Array, pannel = {};
pannel.gotop = {settings: {element: null,target: "#header"},init: function(a, b) {
        var c = this;
        $.extend(this.settings, a || {}), b && b();
        var d = function() {
            screen.width >= 1280 ? c.render(0) : c.render(1)
        };
        d(), $(window).bind("scroll", function() {
            d()
        }).bind("resize", function() {
            d()
        })
    },render: function(a) {
        var b, c, d = $(this.settings.element), e = $(this.settings.target), f = $.browser.scroll().top + $.browser.client().height - d.height() - 10 + "px";
        switch (a) {
            case 0:
                c = e.width() >= 1200 ? 1200 : 980, b = e.offset().left + c + "px", $.browser.isIE6 ? d.css({left: b,top: f}) : d.css({left: b,bottom: "0"});
                break;
            case 1:
                $.browser.isIE6 ? d.css({right: "0",top: f}) : d.css({right: "0",bottom: "0"})
        }
    }}, String.prototype.format = function() {
    var a = this, b = arguments.length;
    if (b > 0)
        for (var c = 0; b > c; c++)
            a = a.replace(new RegExp("\\{" + c + "\\}", "g"), arguments[c]);
    return a
};
var loguri = "http://csc.jd.com/log.ashx?type1=$type1$&type2=$type2$&data=$data$&pin=$pin$&referrer=$referrer$&callback=?";
callback1 = function() {
}, log = function(a, b) {
    var c = "";
    for (i = 2; i < arguments.length; i++)
        c = c + arguments[i] + "|||";
    var d = loguri.replace(/\$type1\$/, escape(a));
    d = d.replace(/\$type2\$/, escape(b)), d = d.replace(/\$data\$/, escape(c)), d = d.replace(/\$pin\$/, escape(decodeURIComponent(readCookie("pin")))), d = d.replace(/\$referrer\$/, escape(document.referrer)), $.getJSON(d, callback1);
    var e = ("https:" == document.location.protocol ? "https://mercuryssl" : "http://mercury") + ".jd.com/log.gif" + "?t=other.000000" + "&m=UA-J2011-1" + "&v=" + encodeURIComponent("t1=" + a + "$t2=" + b + "$p0=" + c) + "&ref=" + encodeURIComponent(document.referrer) + "&rm=" + (new Date).getTime(), f = new Image(1, 1);
    f.src = e
}, mark = function(a, b) {
    log(1, b, a)
}, /jd\.com|360buy\.com/.test(location.hostname) && (document.domain = pageConfig.FN_getDomain());
