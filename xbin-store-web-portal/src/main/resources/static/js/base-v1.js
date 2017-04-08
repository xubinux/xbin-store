 /*
 Date: 2014-01-21 
 */
function login() {
    return location.href = "http://localhost:8088/page/login";
}
function regist() {
    return location.href = "http://localhost:8088/page/register";
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
    var b = "http://localhost:8102/search.html?q=" + encodeURIComponent(document.getElementById(a).value);
    return window.location.href = b;
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
                this.src = "/images/blank.gif", this.className = a
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
}, pageConfig.FN_InitSlider = function(a, b) {
    var c = function(a, b) {
        return a.group - b.group
    };
    b.sort(c);
    var d, e = b[0].data, f = [], g = 3 == e.length ? "style2" : "style1";
    f.push('<div class="slide-itemswrap"><ul class="slide-items"><li class="'), f.push(g), f.push('" data-tag="'), f.push(b[0].aid), f.push('">');
    for (var h = 0; h < e.length; h++)
        d = this.FN_GetCompatibleData(e[h]), f.push('<div class="fore'), f.push(h + 1), f.push('" width="'), f.push(d.width), f.push('" height="'), f.push(d.height), f.push('"><a target="_blank" href="'), f.push(d.href), f.push('" title="'), f.push(d.alt), f.push('"><img src="'), 0 == h ? f.push(d.src) : (f.push('/images/blank.gif" style="background:url('), f.push(d.src), f.push(") no-repeat center 0;")), f.push('" width="'), f.push(d.width), f.push('" height="'), f.push(d.height), f.push('" /></a></div>');
    f.push('</li></ul></div><div class="slide-controls"><span class="curr">1</span></div>'), document.getElementById(a).innerHTML = f.join("")
}, pageConfig.getHashProbability = function(a, b) {
    function c(a) {
        for (var b = 0, c = 0; c < a.length; c++)
            b = (b << 5) - b + a.charCodeAt(c), b &= b;
        return b
    }
    return Math.abs(c(a)) % b
}, pageConfig.goToMobile = function() {
    var a, b = navigator.userAgent.toLowerCase(), c = document.referrer, d = /ipad/, e = /mobile|ios|iphone|android|windows phone|uc|mqqbrowser/, f = readCookie("goToMobile"), g = document.getElementById("shortcut-2013"), h = document.createElement("div");
    h.className = "w", h.innerHTML = '<div id="m-tips" style="white-space:nowrap;padding:4px 0;">\u60a8\u6b63\u5728\u7528\u624b\u673a\u8bbf\u95ee\u7535\u8111\u7248\u4eac\u4e1c\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6700\u4f73\u6d4f\u89c8\u6548\u679c\uff0c\u5efa\u8bae\u60a8\u8bbf\u95ee\u89e6\u5c4f\u7248\u3002<a href="#none" id="back-to-m" style="color:#005EA7;">[\u5207\u6362\u81f3\u89e6\u5c4f\u7248]</a></div>', /m\.jd\.com/.test(c) ? (createCookie("goToMobile", "2", 10, "/;domain=www.jd.com"), document.getElementById("m-tips") || (g.parentNode.insertBefore(h, g), a = document.getElementById("back-to-m"), a.onclick = function() {
        createCookie("goToMobile", "1", 10, "/;domain=www.jd.com"), location.href = "http://m.jd.com"
    })) : f ? "1" === f && (location.href = "http://m.jd.com/") : e.test(b) && !d.test(b) ? (createCookie("goToMobile", "1", 10, "/;domain=www.jd.com"), location.href = "http://m.jd.com/") : createCookie("goToMobile", "0", 10, "/;domain=www.jd.com")
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
/jd\.com|360buy\.com/.test(location.hostname) && (document.domain = pageConfig.FN_getDomain());
