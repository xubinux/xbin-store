 /*
 Date: 2014-09-25 3:59:11 [PM] 
 */
function StringBuilder() {
    this.strings = new Array, this.length = 0
}
function jdThickBoxclose() {
    $(".thickclose").trigger("click")
}
function getparam() {
    for (var a = "", b = "", c = (new Object, location.search.substring(1)), d = c.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].indexOf("=");
        if (-1 != f) {
            {
                d[e].substring(0, f)
            }
            "sid" == d[e].substring(0, f) && (a = unescape(d[e].substring(f + 1))), "t" == d[e].substring(0, f) && (b = unescape(d[e].substring(f + 1)))
        }
    }
    return "" != a || "" != b ? "&sid=" + escape(a) + "&t=" + escape(b) : ""
}
function mlazyload(a) {
    var b = {defObj: null,defHeight: 0,fn: null};
    b = $.extend(b, a || {});
    var c = (b.defHeight, "object" == typeof b.defObj ? b.defObj : $(b.defObj));
    if (!(c.length < 1)) {
        var d = function() {
            var a = document, c = "ipad" == navigator.userAgent.toLowerCase().match(/iPad/i) ? window.pageYOffset : Math.max(a.documentElement.scrollTop, a.body.scrollTop);
            return a.documentElement.clientHeight + c - b.defHeight
        }, e = function() {
            c.offset().top <= d() && !c.attr("load") && (c.attr("load", "true"), b.fn && b.fn())
        };
        e(), $(window).bind("scroll", function() {
            e()
        })
    }
}
function getHashProbability(a, b) {
    function c(a) {
        for (var b = 0, c = 0; c < a.length; c++)
            b = (b << 5) - b + a.charCodeAt(c), b &= b;
        return b
    }
    return Math.abs(c(a)) % b
}
function clothingAbTest() {
    if ("home" == pageConfig.navId) {
        var a = CookieUtil.getCookie("__jda");
        if (a) {
            var b = getHashProbability(a, 1e4), c = $("#_JD_ALLSORT div.fore6"), d = c.find(".subitem .fore1 dt a"), e = c.find(".subitem .fore2 dt a");
            5e3 >= b ? (c.find("h3").html('<a href="http://channel.jd.com/1315-1342.html" clstag="homepage|keycount|home2013|0606a4">\u7537\u88c5</a>\u3001<a href="http://channel.jd.com/1315-1343.html" clstag="homepage|keycount|home2013|0606a3">\u5973\u88c5</a>\u3001<a href="http://channel.jd.com/1315-1345.html" clstag="homepage|keycount|home2013|0606a5">\u5185\u8863</a>\u3001<a href="http://channel.jd.com/jewellery.html" clstag="homepage|keycount|home2013|0606a6">\u73e0\u5b9d</a>'), d.attr("clstag", "homepage|keycount|home2013|0606b3"), e.attr("clstag", "homepage|keycount|home2013|0606b4")) : (c.find("h3").html('<a href="http://channel.jd.com/clothing.html" clstag="homepage|keycount|home2013|0606a1">\u670d\u9970\u5185\u8863</a>\u3001<a href="http://channel.jd.com/jewellery.html" clstag="homepage|keycount|home2013|0606a2">\u73e0\u5b9d\u9996\u9970</a>'), d.attr("clstag", "homepage|keycount|home2013|0606b1"), e.attr("clstag", "homepage|keycount|home2013|0606b2"))
        }
    }
}
!function() {
    var a = document.getElementById("nav-dapeigou");
    a && (a.innerHTML = '<a href="http://channel.jd.com/chaoshi.html">\u4eac\u4e1c\u8d85\u5e02</a>')
}(), "undefined" == typeof pageConfig.FN_getDomain && (pageConfig.FN_getDomain = function() {
    var a = location.hostname;
    return /360buy.com/.test(a) ? "360buy.com" : "jd.com"
}), function() {
    var a = $("#service-2013 a[href='http://en.360buy.com/']");
    a.length && a.attr("href", "http://help.en.360buy.com/help/question-2.html")
}(), function() {
    var a = $("#footer-2013 a[href='http://about.58.com/fqz/index.html']");
    a.length && a.attr("href", "http://www.bj.cyberpolice.cn/index.do")
}(), "object" != typeof JSON && (JSON = {}), function() {
    function f(a) {
        return 10 > a ? "0" + a : a
    }
    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g, h = gap, i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
            case "string":
                return quote(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i)
                    return "null";
                if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                    for (f = i.length, c = 0; f > c; c += 1)
                        g[c] = str(c, i) || "null";
                    return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                }
                if (rep && "object" == typeof rep)
                    for (f = rep.length, c = 0; f > c; c += 1)
                        "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                else
                    for (d in i)
                        Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "", indent = "", "number" == typeof c)
            for (d = 0; c > d; d += 1)
                indent += " ";
        else
            "string" == typeof c && (indent = c);
        if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
            throw new Error("JSON.stringify");
        return str("", {"": a})
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e)
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), eval(function(a, b, c, d, e, f) {
    if (e = function(a) {
        return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    }, !"".replace(/^/, String)) {
        for (; c--; )
            f[e(c)] = d[c] || e(c);
        d = [function(a) {
                return f[a]
            }], e = function() {
            return "\\w+"
        }, c = 1
    }
    for (; c--; )
        d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
    return a
}("(4($){$.R($.7,{3:4(c,b,d){9 e=2,q;5($.O(c))d=b,b=c,c=z;$.h($.3.j,4(i,a){5(e.8==a.8&&e.g==a.g&&c==a.m&&(!b||b.$6==a.7.$6)&&(!d||d.$6==a.o.$6))l(q=a)&&v});q=q||Y $.3(2.8,2.g,c,b,d);q.u=v;$.3.s(q.F);l 2},T:4(c,b,d){9 e=2;5($.O(c))d=b,b=c,c=z;$.h($.3.j,4(i,a){5(e.8==a.8&&e.g==a.g&&(!c||c==a.m)&&(!b||b.$6==a.7.$6)&&(!d||d.$6==a.o.$6)&&!2.u)$.3.y(a.F)});l 2}});$.3=4(e,c,a,b,d){2.8=e;2.g=c||S;2.m=a;2.7=b;2.o=d;2.t=[];2.u=v;2.F=$.3.j.K(2)-1;b.$6=b.$6||$.3.I++;5(d)d.$6=d.$6||$.3.I++;l 2};$.3.p={y:4(){9 b=2;5(2.m)2.t.16(2.m,2.7);E 5(2.o)2.t.h(4(i,a){b.o.x(a)});2.t=[];2.u=Q},s:4(){5(2.u)l;9 b=2;9 c=2.t,w=$(2.8,2.g),H=w.11(c);2.t=w;5(2.m){H.10(2.m,2.7);5(c.C>0)$.h(c,4(i,a){5($.B(a,w)<0)$.Z.P(a,b.m,b.7)})}E{H.h(4(){b.7.x(2)});5(2.o&&c.C>0)$.h(c,4(i,a){5($.B(a,w)<0)b.o.x(a)})}}};$.R($.3,{I:0,j:[],k:[],A:v,D:X,N:4(){5($.3.A&&$.3.k.C){9 a=$.3.k.C;W(a--)$.3.j[$.3.k.V()].s()}},U:4(){$.3.A=v},M:4(){$.3.A=Q;$.3.s()},L:4(){$.h(G,4(i,n){5(!$.7[n])l;9 a=$.7[n];$.7[n]=4(){9 r=a.x(2,G);$.3.s();l r}})},s:4(b){5(b!=z){5($.B(b,$.3.k)<0)$.3.k.K(b)}E $.h($.3.j,4(a){5($.B(a,$.3.k)<0)$.3.k.K(a)});5($.3.D)1j($.3.D);$.3.D=1i($.3.N,1h)},y:4(b){5(b!=z)$.3.j[b].y();E $.h($.3.j,4(a){$.3.j[a].y()})}});$.3.L('1g','1f','1e','1b','1a','19','18','17','1c','15','1d','P');$(4(){$.3.M()});9 f=$.p.J;$.p.J=4(a,c){9 r=f.x(2,G);5(a&&a.8)r.g=a.g,r.8=a.8;5(14 a=='13')r.g=c||S,r.8=a;l r};$.p.J.p=$.p})(12);", 62, 82, "||this|livequery|function|if|lqguid|fn|selector|var|||||||context|each||queries|queue|return|type||fn2|prototype|||run|elements|stopped|false|els|apply|stop|undefined|running|inArray|length|timeout|else|id|arguments|nEls|guid|init|push|registerPlugin|play|checkQueue|isFunction|remove|true|extend|document|expire|pause|shift|while|null|new|event|bind|not|jQuery|string|typeof|toggleClass|unbind|addClass|removeAttr|attr|wrap|before|removeClass|empty|after|prepend|append|20|setTimeout|clearTimeout".split("|"), 0, {})), new function(a) {
    var b = a.separator || "&", c = a.spaces === !1 ? !1 : !0, d = (a.suffix === !1 ? "" : "[]", a.prefix === !1 ? !1 : !0), e = d ? a.hash === !0 ? "#" : "?" : "", f = a.numbers === !1 ? !1 : !0;
    jQuery.query = new function() {
        var a = function(a, b) {
            return void 0 != a && null !== a && (b ? a.constructor == b : !0)
        }, d = function(a) {
            for (var b, c = /\[([^[]*)\]/g, d = /^(\S+?)(\[\S*\])?$/.exec(a), e = d[1], f = []; b = c.exec(d[2]); )
                f.push(b[1]);
            return [e, f]
        }, g = function(b, c, d) {
            var e = c.shift();
            if ("object" != typeof b && (b = null), "" === e)
                if (b || (b = []), a(b, Array))
                    b.push(0 == c.length ? d : g(null, c.slice(0), d));
                else if (a(b, Object)) {
                    for (var f = 0; null != b[f++]; )
                        ;
                    b[--f] = 0 == c.length ? d : g(b[f], c.slice(0), d)
                } else
                    b = [], b.push(0 == c.length ? d : g(null, c.slice(0), d));
            else if (e && e.match(/^\s*[0-9]+\s*$/)) {
                var h = parseInt(e, 10);
                b || (b = []), b[h] = 0 == c.length ? d : g(b[h], c.slice(0), d)
            } else {
                if (!e)
                    return d;
                var h = e.replace(/^\s*|\s*$/g, "");
                if (b || (b = {}), a(b, Array)) {
                    for (var i = {}, f = 0; f < b.length; ++f)
                        i[f] = b[f];
                    b = i
                }
                b[h] = 0 == c.length ? d : g(b[h], c.slice(0), d)
            }
            return b
        }, h = function(a) {
            var b = this;
            return b.keys = {}, a.queryObject ? jQuery.each(a.get(), function(a, c) {
                b.SET(a, c)
            }) : jQuery.each(arguments, function() {
                var a = "" + this;
                a = a.replace(/^[?#]/, ""), a = a.replace(/[;&]$/, ""), c && (a = a.replace(/[+]/g, " ")), jQuery.each(a.split(/[&;]/), function() {
                    try {
                        var a = decodeURIComponent(this.split("=")[0]), c = decodeURIComponent(encodeURIComponent(this.split("=")[1]))
                    } catch (d) {
                    }
                    a && (f && (/^[+-]?[0-9]+\.[0-9]*$/.test(c) ? c = parseFloat(c) : /^[+-]?[0-9]+$/.test(c) && (c = parseInt(c, 10))), c = c || 0 === c ? c : !0, c !== !1 && c !== !0 && "number" != typeof c && (c = c), b.SET(a, c))
                })
            }), b
        };
        return h.prototype = {queryObject: !0,has: function(b, c) {
                var d = this.get(b);
                return a(d, c)
            },GET: function(b) {
                if (!a(b))
                    return this.keys;
                for (var c = d(b), e = c[0], f = c[1], g = this.keys[e]; null != g && 0 != f.length; )
                    g = g[f.shift()];
                return "number" == typeof g ? g : g || ""
            },get: function(b) {
                var c = this.GET(b);
                return a(c, Object) ? jQuery.extend(!0, {}, c) : a(c, Array) ? c.slice(0) : c
            },SET: function(b, c) {
                var e = a(c) ? c : null, f = d(b), h = f[0], i = f[1], j = this.keys[h];
                return this.keys[h] = g(j, i.slice(0), e), this
            },set: function(a, b) {
                return this.copy().SET(a, b)
            },REMOVE: function(a) {
                return this.SET(a, null).COMPACT()
            },remove: function(a) {
                return this.copy().REMOVE(a)
            },EMPTY: function() {
                var a = this;
                return jQuery.each(a.keys, function(b) {
                    delete a.keys[b]
                }), a
            },load: function(a) {
                var b = a.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"), c = a.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new h(a.length == c.length ? "" : c, a.length == b.length ? "" : b)
            },empty: function() {
                return this.copy().EMPTY()
            },copy: function() {
                return new h(this)
            },COMPACT: function() {
                function b(c) {
                    function d(b, c, d) {
                        a(b, Array) ? b.push(d) : b[c] = d
                    }
                    var e = "object" == typeof c ? a(c, Array) ? [] : {} : c;
                    return "object" == typeof c && jQuery.each(c, function(c, f) {
                        return a(f) ? (d(e, c, b(f)), void 0) : !0
                    }), e
                }
                return this.keys = b(this.keys), this
            },compact: function() {
                return this.copy().COMPACT()
            },toString: function() {
                var c = [], d = [], f = function(b, c, d) {
                    if (a(d) && d !== !1) {
                        var e = [encodeURIComponent(c)];
                        d !== !0 && (e.push("="), e.push(encodeURIComponent(d))), b.push(e.join(""))
                    }
                }, g = function(a, b) {
                    var c = function(a) {
                        return b && "" != b ? [b, "[", a, "]"].join("") : [a].join("")
                    };
                    jQuery.each(a, function(a, b) {
                        "object" == typeof b ? g(b, c(a)) : f(d, c(a), b)
                    })
                };
                return g(this.keys), d.length > 0 && c.push(e), c.push(d.join(b)), c.join("")
            }}, new h(location.search, location.hash)
    }
}(jQuery.query || {}), eval(function(a, b, c, d, e, f) {
    if (e = function(a) {
        return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    }, !"".replace(/^/, String)) {
        for (; c--; )
            f[e(c)] = d[c] || e(c);
        d = [function(a) {
                return f[a]
            }], e = function() {
            return "\\w+"
        }, c = 1
    }
    for (; c--; )
        d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
    return a
}("n.5=v(a,b,c){4(7 b!='w'){c=c||{};4(b===o){b='';c.3=-1}2 d='';4(c.3&&(7 c.3=='p'||c.3.q)){2 e;4(7 c.3=='p'){e=x y();e.z(e.A()+(c.3*B*r*r*C))}s{e=c.3}d=';3='+e.q()}2 f=c.8?';8='+(c.8):'';2 g=c.9?';9='+(c.9):'';2 h=c.t?';t':'';6.5=[a,'=',D(b),d,f,g,h].E('')}s{2 j=o;4(6.5&&6.5!=''){2 k=6.5.F(';');G(2 i=0;i<k.m;i++){2 l=n.H(k[i]);4(l.u(0,a.m+1)==(a+'=')){j=I(l.u(a.m+1));J}}}K j}};", 47, 47, "||var|expires|if|cookie|document|typeof|path|domain|||||||||||||length|jQuery|null|number|toUTCString|60|else|secure|substring|function|undefined|new|Date|setTime|getTime|24|1000|encodeURIComponent|join|split|for|trim|decodeURIComponent|break|return".split("|"), 0, {})), Function.prototype.overwrite = function(a) {
    var b = a;
    return b.original || (b.original = this), b
}, Date.prototype.toString = Date.prototype.toString.overwrite(function(a) {
    var b = new String;
    return "string" == typeof a && (b = a, b = b.replace(/yyyy|YYYY/, this.getFullYear()), b = b.replace(/yy|YY/, this.getFullYear().toString().substr(2, 2)), b = b.replace(/MM/, this.getMonth() >= 9 ? this.getMonth() + 1 : "0" + (this.getMonth() + 1)), b = b.replace(/M/, this.getMonth()), b = b.replace(/dd|DD/, this.getDate() > 9 ? this.getDate() : "0" + this.getDate()), b = b.replace(/d|D/, this.getDate()), b = b.replace(/hh|HH/, this.getHours() > 9 ? this.getHours() : "0" + this.getHours()), b = b.replace(/h|H/, this.getHours()), b = b.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes() : "0" + this.getMinutes()), b = b.replace(/m/, this.getMinutes()), b = b.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds() : "0" + this.getSeconds()), b = b.replace(/s|S/, this.getSeconds())), b
}), String.prototype.format = function() {
    var a = this;
    return arguments.length > 0 && (parameters = $.makeArray(arguments), $.each(parameters, function(b, c) {
        a = a.replace(new RegExp("\\{" + b + "\\}", "g"), c)
    })), a
}, StringBuilder.prototype.append = function(a) {
    this.strings.push(a), this.length += a.length
}, StringBuilder.prototype.toString = function(a, b) {
    return this.strings.join("").substr(a, b)
}, function($) {
    $.jmsajax = function(a) {
        var b = {type: "POST",dataType: "msjson",data: {},beforeSend: function(a) {
                a.setRequestHeader("Content-type", "application/json; charset=utf-8")
            },contentType: "application/json; charset=utf-8",error: function(a) {
                alert("Status: " + (a.statusText ? a.statusText : "Unknown") + "\nMessage: " + msJSON.parse(a.responseText ? a.responseText : "Unknown").Message)
            }}, a = $.extend(b, a);
        if (a.method && (a.url += "/" + a.method), a.data)
            if ("GET" == a.type) {
                var c = "";
                for (var d in a.data)
                    "" != c && (c += "&"), c += d + "=" + msJSON.stringify(a.data[d]);
                a.url += "?" + c, c = null, a.data = "{}"
            } else
                "POST" == a.type && (a.data = msJSON.stringify(a.data));
        if (a.success && a.dataType && "msjson" == a.dataType) {
            var e = a.success;
            a.success = function(b, c) {
                var d = dateparse(b);
                a.version ? a.version >= 3.5 && (d = d.d) : 0 == b.indexOf('{"d":') && (d = d.d), e(d, c)
            }
        }
        return $.ajax(a)
    }, dateparse = function(a) {
        try {
            return msJSON.parse(a, function(a, b) {
                var c;
                return "string" == typeof b && b.indexOf("Date") >= 0 && (c = /^\/Date\(([0-9]+)\)\/$/.exec(b)) ? new Date(parseInt(c[1], 10)) : b
            })
        } catch (b) {
            return null
        }
    }, msJSON = function() {
        function f(a) {
            return 10 > a ? "0" + a : a
        }
        function quote(a) {
            return escapeable.lastIndex = 0, escapeable.test(a) ? '"' + a.replace(escapeable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + (+a.charCodeAt(0)).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }
        function str(a, b) {
            var c, d, e, f, g, h = gap, i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i)
                        return "null";
                    if (i.toUTCString)
                        return '"\\/Date(' + i.getTime() + ')\\/"';
                    if (gap += indent, g = [], "number" == typeof i.length && !i.propertyIsEnumerable("length")) {
                        for (f = i.length, c = 0; f > c; c += 1)
                            g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1)
                            d = rep[c], "string" == typeof d && (e = str(d, i, rep), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i)
                            Object.hasOwnProperty.call(i, d) && (e = str(d, i, rep), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapeable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, rep;
        return {stringify: function(a, b, c) {
                var d;
                if (gap = "", indent = "", "number" == typeof c)
                    for (d = 0; c > d; d += 1)
                        indent += " ";
                else
                    "string" == typeof c && (indent = c);
                if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
                    throw new Error("JSON.stringify");
                return str("", {"": a})
            },parse: function(text, reviver) {
                function walk(a, b) {
                    var c, d, e = a[b];
                    if (e && "object" == typeof e)
                        for (c in e)
                            Object.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                    return reviver.call(a, b, e)
                }
                var j;
                if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + (+a.charCodeAt(0)).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                throw new SyntaxError("JSON.parse")
            }}
    }()
}(jQuery);
var TrimPath;
!function() {
    null == TrimPath && (TrimPath = new Object), null == TrimPath.evalEx && (TrimPath.evalEx = function(src) {
        return eval(src)
    });
    var UNDEFINED;
    null == Array.prototype.pop && (Array.prototype.pop = function() {
        return 0 === this.length ? UNDEFINED : this[--this.length]
    }), null == Array.prototype.push && (Array.prototype.push = function() {
        for (var a = 0; a < arguments.length; ++a)
            this[this.length] = arguments[a];
        return this.length
    }), TrimPath.parseTemplate = function(a, b, c) {
        null == c && (c = TrimPath.parseTemplate_etc);
        var d = parse(a, b, c), e = TrimPath.evalEx(d, b, 1);
        return null != e ? new c.Template(b, a, d, e, c) : null
    };
    try {
        String.prototype.process = function(a, b) {
            var c = TrimPath.parseTemplate(this, null);
            return null != c ? c.process(a, b) : this
        }
    } catch (e) {
    }
    TrimPath.parseTemplate_etc = {}, TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro", TrimPath.parseTemplate_etc.statementDef = {"if": {delta: 1,prefix: "if (",suffix: ") {",paramMin: 1},"else": {delta: 0,prefix: "} else {"},elseif: {delta: 0,prefix: "} else if (",suffix: ") {",paramDefault: "true"},"/if": {delta: -1,prefix: "}"},"for": {delta: 1,paramMin: 3,prefixFunc: function(a, b, c, d) {
                if ("in" != a[2])
                    throw new d.ParseError(c, b.line, "bad for loop statement: " + a.join(" "));
                var e = a[1], f = "__LIST__" + e;
                return ["var ", f, " = ", a[3], ";", "var __LENGTH_STACK__;", "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();", "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;", "if ((", f, ") != null) { ", "var ", e, "_ct = 0;", "for (var ", e, "_index in ", f, ") { ", e, "_ct++;", "if (typeof(", f, "[", e, "_index]) == 'function') {continue;}", "__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var ", e, " = ", f, "[", e, "_index];"].join("")
            }},forelse: {delta: 0,prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",suffix: ") {",paramDefault: "true"},"/for": {delta: -1,prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"},"var": {delta: 0,prefix: "var ",suffix: ";"},macro: {delta: 1,prefixFunc: function(a) {
                var b = a[1].split("(")[0];
                return ["var ", b, " = function", a.slice(1).join(" ").substring(b.length), "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("")
            }},"/macro": {delta: -1,prefix: " return _OUT_arr.join(''); };"}}, TrimPath.parseTemplate_etc.modifierDef = {eat: function() {
            return ""
        },escape: function(a) {
            return String(a).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")
        },capitalize: function(a) {
            return String(a).toUpperCase()
        },"default": function(a, b) {
            return null != a ? a : b
        }}, TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape, TrimPath.parseTemplate_etc.Template = function(a, b, c, d, e) {
        this.process = function(a, b) {
            null == a && (a = {}), null == a._MODIFIERS && (a._MODIFIERS = {}), null == a.defined && (a.defined = function(b) {
                return void 0 != a[b]
            });
            for (var c in e.modifierDef)
                null == a._MODIFIERS[c] && (a._MODIFIERS[c] = e.modifierDef[c]);
            null == b && (b = {});
            var f = [], g = {write: function(a) {
                    f.push(a)
                }};
            try {
                d(g, a, b)
            } catch (h) {
                if (1 == b.throwExceptions)
                    throw h;
                var i = new String(f.join("") + "[ERROR: " + h.toString() + (h.message ? "; " + h.message : "") + "]");
                return i.exception = h, i
            }
            return f.join("")
        }, this.name = a, this.source = b, this.sourceFunc = c, this.toString = function() {
            return "TrimPath.Template [" + a + "]"
        }
    }, TrimPath.parseTemplate_etc.ParseError = function(a, b, c) {
        this.name = a, this.line = b, this.message = c
    }, TrimPath.parseTemplate_etc.ParseError.prototype.toString = function() {
        return "TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message
    };
    var parse = function(a, b, c) {
        a = cleanWhiteSpace(a);
        for (var d = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"], e = {stack: [],line: 1}, f = -1; f + 1 < a.length; ) {
            var g = f;
            for (g = a.indexOf("{", g + 1); g >= 0; ) {
                var h = a.indexOf("}", g + 1), i = a.substring(g, h), j = i.match(/^\{(cdata|minify|eval)/);
                if (j) {
                    var k = j[1], l = g + k.length + 1, m = a.indexOf("}", l);
                    if (m >= 0) {
                        var n;
                        n = 0 >= m - l ? "{/" + k + "}" : a.substring(l + 1, m);
                        var o = a.indexOf(n, m + 1);
                        if (o >= 0) {
                            emitSectionText(a.substring(f + 1, g), d);
                            var p = a.substring(m + 1, o);
                            "cdata" == k ? emitText(p, d) : "minify" == k ? emitText(scrubWhiteSpace(p), d) : "eval" == k && null != p && p.length > 0 && d.push("_OUT.write( (function() { " + p + " })() );"), g = f = o + n.length - 1
                        }
                    }
                } else if ("$" != a.charAt(g - 1) && "\\" != a.charAt(g - 1)) {
                    var q = "/" == a.charAt(g + 1) ? 2 : 1;
                    if (0 == a.substring(g + q, g + 10 + q).search(TrimPath.parseTemplate_etc.statementTag))
                        break
                }
                g = a.indexOf("{", g + 1)
            }
            if (0 > g)
                break;
            var h = a.indexOf("}", g + 1);
            if (0 > h)
                break;
            emitSectionText(a.substring(f + 1, g), d), emitStatement(a.substring(g, h + 1), e, d, b, c), f = h
        }
        if (emitSectionText(a.substring(f + 1), d), 0 != e.stack.length)
            throw new c.ParseError(b, e.line, "unclosed, unmatched statement(s): " + e.stack.join(","));
        return d.push("}}; TrimPath_Template_TEMP"), d.join("")
    }, emitStatement = function(a, b, c, d, e) {
        var f = a.slice(1, -1).split(" "), g = e.statementDef[f[0]];
        if (null == g)
            return emitSectionText(a, c), void 0;
        if (g.delta < 0) {
            if (b.stack.length <= 0)
                throw new e.ParseError(d, b.line, "close tag does not match any previous statement: " + a);
            b.stack.pop()
        }
        if (g.delta > 0 && b.stack.push(a), null != g.paramMin && g.paramMin >= f.length)
            throw new e.ParseError(d, b.line, "statement needs more parameters: " + a);
        if (null != g.prefixFunc ? c.push(g.prefixFunc(f, b, d, e)) : c.push(g.prefix), null != g.suffix) {
            if (f.length <= 1)
                null != g.paramDefault && c.push(g.paramDefault);
            else
                for (var h = 1; h < f.length; h++)
                    h > 1 && c.push(" "), c.push(f[h]);
            c.push(g.suffix)
        }
    }, emitSectionText = function(a, b) {
        if (!(a.length <= 0)) {
            for (var c = 0, d = a.length - 1; c < a.length && "\n" == a.charAt(c); )
                c++;
            for (; d >= 0 && (" " == a.charAt(d) || "	" == a.charAt(d)); )
                d--;
            if (c > d && (d = c), c > 0) {
                b.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
                var e = a.substring(0, c).replace("\n", "\\n");
                "\n" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), b.push(e), b.push('");')
            }
            for (var f = a.substring(c, d + 1).split("\n"), g = 0; g < f.length; g++)
                emitSectionTextLine(f[g], b), g < f.length - 1 && b.push('_OUT.write("\\n");\n');
            if (d + 1 < a.length) {
                b.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
                var e = a.substring(d + 1).replace("\n", "\\n");
                "\n" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), b.push(e), b.push('");')
            }
        }
    }, emitSectionTextLine = function(a, b) {
        for (var c = "}", d = -1; d + c.length < a.length; ) {
            var e = "${", f = "}", g = a.indexOf(e, d + c.length);
            if (0 > g)
                break;
            "%" == a.charAt(g + 2) && (e = "${%", f = "%}");
            var h = a.indexOf(f, g + e.length);
            if (0 > h)
                break;
            emitText(a.substring(d + c.length, g), b);
            var i = a.substring(g + e.length, h).replace(/\|\|/g, "#@@#").split("|");
            for (var j in i)
                i[j].replace && (i[j] = i[j].replace(/#@@#/g, "||"));
            b.push("_OUT.write("), emitExpression(i, i.length - 1, b), b.push(");"), d = h, c = f
        }
        emitText(a.substring(d + c.length), b)
    }, emitText = function(a, b) {
        null == a || a.length <= 0 || (a = a.replace(/\\/g, "\\\\"), a = a.replace(/\n/g, "\\n"), a = a.replace(/"/g, '\\"'), b.push('_OUT.write("'), b.push(a), b.push('");'))
    }, emitExpression = function(a, b, c) {
        var d = a[b];
        if (0 >= b)
            return c.push(d), void 0;
        var e = d.split(":");
        c.push('_MODIFIERS["'), c.push(e[0]), c.push('"]('), emitExpression(a, b - 1, c), e.length > 1 && (c.push(","), c.push(e[1])), c.push(")")
    }, cleanWhiteSpace = function(a) {
        return a = a.replace(/\t/g, "    "), a = a.replace(/\r\n/g, "\n"), a = a.replace(/\r/g, "\n"), a = a.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1")
    }, scrubWhiteSpace = function(a) {
        return a = a.replace(/^\s+/g, ""), a = a.replace(/\s+$/g, ""), a = a.replace(/\s+/g, " "), a = a.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1")
    };
    TrimPath.parseDOMTemplate = function(a, b, c) {
        null == b && (b = document);
        var d = b.getElementById(a), e = d.value;
        return null == e && (e = d.innerHTML), e = e.replace(/</g, "<").replace(/>/g, ">"), TrimPath.parseTemplate(e, a, c)
    }, TrimPath.processDOMTemplate = function(a, b, c, d, e) {
        return TrimPath.parseDOMTemplate(a, d, e).process(b, c)
    }
}(), function($) {
    $.extend({_jsonp: {scripts: {},counter: 1,charset: "UTF-8",head: document.getElementsByTagName("head")[0],name: function(callback) {
                var name = "_jsonp_" + (new Date).getTime() + "_" + this.counter;
                this.counter++;
                var cb = function(json) {
                    eval("delete " + name), callback(json), $._jsonp.head.removeChild($._jsonp.scripts[name]), delete $._jsonp.scripts[name]
                };
                return eval(name + " = cb"), name
            },load: function(a, b) {
                var c = document.createElement("script");
                c.type = "text/javascript", c.charset = this.charset, c.src = a, this.head.appendChild(c), this.scripts[b] = c
            }},
          getJSONP: function(a, b) {
            var c = $._jsonp.name(b), a = a.replace(/{callback};/, c);
            return $._jsonp.load(a, c), this
          }})
}(jQuery), function(a) {
    a.fn.Jdropdown = function(b, c) {
        if (this.length) {
            "function" == typeof b && (c = b, b = {});
            var d = a.extend({event: "mouseover",current: "hover",delay: 0}, b || {}), e = "mouseover" == d.event ? "mouseout" : "mouseleave";
            a.each(this, function() {
                var b = null, f = null, g = !1;
                a(this).bind(d.event, function() {
                    if (g)
                        clearTimeout(f);
                    else {
                        var e = a(this);
                        b = setTimeout(function() {
                            e.addClass(d.current), g = !0, c && c(e)
                        }, d.delay)
                    }
                }).bind(e, function() {
                    if (g) {
                        var c = a(this);
                        f = setTimeout(function() {
                            c.removeClass(d.current), g = !1
                        }, d.delay)
                    } else
                        clearTimeout(b)
                })
            })
        }
    }
}(jQuery), function(a) {
    a.fn.dropdown = function(b, c) {
        var b = a.extend({className: "item",current: "hover",enterDelay: 10,leaveDelay: 300,onmouseleave: null}, b);
        a.each(this, function() {
            function d() {
                function a(a, b) {
                    return (b.y - a.y) / (b.x - a.x)
                }
                var b = g.offset(), c = {x: b.left,y: b.top}, d = {x: b.left + g.outerWidth(),y: c.y}, e = {x: b.left,y: b.top + g.outerHeight()}, f = {x: b.left + g.outerWidth(),y: e.y};
                if (loc = i[i.length - 1], prevLoc = i[0], !loc)
                    return 0;
                if (prevLoc || (prevLoc = loc), prevLoc.x < b.left || prevLoc.x > f.x || prevLoc.y < b.top || prevLoc.y > f.y)
                    return 0;
                if (j && loc.x == j.x && loc.y == j.y)
                    return 0;
                var h = d, k = f, l = a(loc, h), m = a(prevLoc, h), n = a(loc, k), o = a(prevLoc, k);
                return m > l && n > o ? prevLoc.x - c.x < 25 ? 0 : (j = loc, 300) : (j = null, 0)
            }
            var e, f, g = a(this), h = g.find("." + b.className), i = [], j = null, k = 3, l = !1;
            g.bind("mouseenter", function() {
                clearTimeout(e)
            });
            var m = null, n = null;
            g.bind("mouseleave", function() {
                l && (e = setTimeout(function() {
                    h.removeClass(b.current)
                }, b.leaveDelay)), b.onmouseleave && b.onmouseleave(), m = null
            }), h.bind("mouseenter", function() {
                var e = a(this), g = this, i = function() {
                    m = jQuery.inArray(g, h), h.removeClass(b.current), e.addClass(b.current), l = !0, c && c(e)
                };
                f = setTimeout(function() {
                    0 == d(e) && (i(), clearTimeout(n))
                }, b.enterDelay), n = setTimeout(function() {
                    m != jQuery.inArray(g, h) && i()
                }, 700)
            }), h.bind("mouseleave", function() {
                a(this);
                clearTimeout(f), clearTimeout(n)
            }), a(document).mousemove(function(a) {
                i.push({x: a.pageX,y: a.pageY}), i.length > k && i.shift()
            })
        })
    }
}(jQuery), function(a) {
    a.fn.Jtab = function(b, c) {
        if (this.length) {
            "function" == typeof b && (c = b, b = {});
            var d = a.extend({type: "static",auto: !1,event: "mouseover",currClass: "curr",source: "data-tag",hookKey: "data-widget",hookItemVal: "tab-item",hookContentVal: "tab-content",stay: 5e3,delay: 100,threshold: null,mainTimer: null,subTimer: null,index: 0,compatible: !1}, b || {}), e = a(this).find("*[" + d.hookKey + "=" + d.hookItemVal + "]"), f = a(this).find("*[" + d.hookKey + "=" + d.hookContentVal + "]"), g = d.source.toLowerCase().match(/http:\/\/|\d|\.aspx|\.ascx|\.asp|\.php|\.html\.htm|.shtml|.js/g);
            if (e.length != f.length)
                return !1;
            var h = function(a, b) {
                d.subTimer = setTimeout(function() {
                    e.eq(d.index).removeClass(d.currClass), d.compatible && f.eq(d.index).hide(), b ? (d.index++, d.index == e.length && (d.index = 0)) : d.index = a, d.type = null != e.eq(d.index).attr(d.source) ? "dynamic" : "static", j()
                }, d.delay)
            }, i = function() {
                d.mainTimer = setInterval(function() {
                    h(d.index, !0)
                }, d.stay)
            }, j = function() {
                switch (e.eq(d.index).addClass(d.currClass), d.compatible && f.eq(d.index).show(), d.type) {
                    default:
                    case "static":
                        var a = "";
                        break;
                    case "dynamic":
                        var a = g ? d.source : e.eq(d.index).attr(d.source);
                        e.eq(d.index).removeAttr(d.source)
                }
                c && c(a, f.eq(d.index), d.index)
            };
            e.each(function(b) {
                a(this).bind(d.event, function() {
                    clearTimeout(d.subTimer), clearInterval(d.mainTimer), h(b, !1)
                }).bind("mouseleave", function() {
                    d.auto && i()
                })
            }), "dynamic" == d.type && h(d.index, !1), d.auto && i()
        }
    }
}(jQuery), function(a) {
    a.fn.Jlazyload = function(b, c) {
        if (this.length) {
            var d, e, f = a.extend({type: null,offsetParent: null,source: "data-lazyload",placeholderImage: "/images/blank.gif",placeholderClass: "loading-style2",threshold: 200}, b || {}), g = this, h = function(a) {
                for (var b = a.scrollLeft, c = a.scrollTop, d = a.offsetWidth, e = a.offsetHeight; a.offsetParent; )
                    b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
                return {left: b,top: c,width: d,height: e}
            }, i = function() {
                var a = document.documentElement, b = document.body, c = window.pageXOffset ? window.pageXOffset : a.scrollLeft || b.scrollLeft, d = window.pageYOffset ? window.pageYOffset : a.scrollTop || b.scrollTop, e = a.clientWidth, f = a.clientHeight;
                return {left: c,top: d,width: e,height: f}
            }, j = function(a, b) {
                var c, d, e, g, h, i, j = f.threshold ? parseInt(f.threshold) : 0;
                return c = a.left + a.width / 2, d = b.left + b.width / 2, e = a.top + a.height / 2, g = b.top + b.height / 2, h = (a.width + b.width) / 2, i = (a.height + b.height) / 2, Math.abs(c - d) < h + j && Math.abs(e - g) < i + j
            }, k = function(a, b, d) {
                f.placeholderImage && f.placeholderClass && d.attr("src", f.placeholderImage).addClass(f.placeholderClass), a && (d.attr("src", b).removeAttr(f.source), c && c(b, d))
            }, l = function(b, d, e) {
                if (b) {
                    var g = a("#" + d);
                    g.html(e.val()).removeAttr(f.source), e.remove(), c && c(d, e)
                }
            }, m = function(a, b, d) {
                a && (d.removeAttr(f.source), c && c(b, d))
            }, n = function() {
                e = i(), g = g.filter(function() {
                    return a(this).attr(f.source)
                }), a.each(g, function() {
                    var b = a(this).attr(f.source);
                    if (b) {
                        var c = f.offsetParent ? h(a(f.offsetParent).get(0)) : e, d = h(this), g = j(c, d);
                        switch (f.type) {
                            case "image":
                                k(g, b, a(this));
                                break;
                            case "textarea":
                                l(g, b, a(this));
                                break;
                            case "module":
                                m(g, b, a(this))
                        }
                    }
                })
            }, o = function() {
                g.length > 0 && (clearTimeout(d), d = setTimeout(function() {
                    n()
                }, 10))
            };
            n(), f.offsetParent ? a(f.offsetParent).bind("scroll", function() {
                o()
            }) : a(window).bind("scroll", function() {
                o()
            }).bind("reset", function() {
                o()
            })
        }
    }
}(jQuery), function(a) {
    a.Jtimer = function(b, c) {
        var d = a.extend({pids: null,template: null,reset: null,mainPlaceholder: "timed",subPlaceholder: "timer",resetPlaceholder: "reset",iconPlaceholder: "icon",finishedClass: "",timer: []}, b || {}), e = function(a) {
            var b = a.split(" "), c = b[0].split("-"), d = b[1].split(":");
            return new Date(c[0], c[1] - 1, c[2], d[0], d[1], d[2])
        }, f = function(a) {
            return String(a).length < 2 && (a = "0" + a), a
        }, g = function(b, c) {
            if (c != {} && c && c.start && c.end) {
                var g, h, i, j = e(c.start), k = e(c.server), l = e(c.end), m = (j - k) / 1e3, n = (l - k) / 1e3, o = "#" + d.mainPlaceholder + b, p = "#" + d.subPlaceholder + c.qid, q = "#" + d.resetPlaceholder + c.qid;
                if (0 >= m) {
                    var r = d.template.process(c);
                    a(o).html(r)
                }
                d.timer[c.qid] = setInterval(function() {
                    return m > 0 ? (clearInterval(d.timer[c.qid]), void 0) : (n > 0 ? (g = Math.floor(n / 3600), h = Math.floor((n - 3600 * g) / 60), i = (n - 3600 * g) % 60, a(p).html("\u5269\u4f59<b>" + f(g) + "</b>\u5c0f\u65f6<b>" + f(h) + "</b>\u5206<b>" + f(i) + "</b>\u79d2"), n--) : (a(p).html("\u62a2\u8d2d\u7ed3\u675f\uff01"), d.iconPlaceholder && (iconElement = "#" + d.iconPlaceholder + c.qid, a(iconElement).attr("class", d.finishedClass).html("\u62a2\u5b8c")), d.reset && (a(p).append('<a href="javascript:void(0)" id="' + q.substring(1) + '">\u5237\u65b0</a>'), a(q).bind("click", function() {
                        a.each(d.timer, function() {
                            clearInterval(this)
                        }), d.reset()
                    })), clearInterval(d.timer[c.qid])), void 0)
                }, 1e3)
            }
        }, h = function(a, b) {
            return e(a.end) - e(a.server) - (e(b.end) - e(b.server))
        };
        a.ajax({url: "http://qiang.jd.com/HomePageNewLimitBuy.ashx?callback=?",data: {ids: d.pids},dataType: "jsonp",success: function(b) {
                b && b.data && (b.data.sort(h), a.each(b.data, function(a) {
                    g(a + 1, b.data[a])
                })), c && c()
            }})
    }
}(jQuery), function(a) {
    a.fn.Jslider = function(b, c) {
        if (this.length) {
            "function" == typeof b && (c = b, b = {});
            var d = a.extend({auto: !1,reInit: !1,data: [],defaultIndex: 0,slideWidth: 0,slideHeight: 0,slideDirection: 1,speed: "normal",stay: 5e3,delay: 150,maxAmount: null,template: null,showControls: !0}, b || {}), e = a(this), f = null, g = null, h = null, i = null, j = null, k = function() {
                var a;
                d.maxAmount && d.maxAmount < d.data.length && d.data.splice(d.maxAmount, d.data.length - d.maxAmount), "object" == typeof d.data && (d.data.length ? (a = {}, a.json = d.data) : a = d.data);
                var b = d.template;
                if (d.reInit) {
                    var i, j = b.controlsContent.process(a);
                    a.json = a.json.slice(1), i = b.itemsContent.process(a), e.find(".slide-items").eq(0).append(i), e.find(".slide-controls").eq(0).html(j)
                } else {
                    var k = b.itemsWrap.replace("{innerHTML}", b.itemsContent) + b.controlsWrap.replace("{innerHTML}", b.controlsContent), m = k.process(a);
                    e.html(m)
                }
                f = e.find(".slide-items"), g = e.find(".slide-controls"), h = g.find("span"), l(), n(), c && c(e)
            }, l = function() {
                h.bind("mouseover", function() {
                    var a = h.index(this);
                    a != d.defaultIndex && (clearTimeout(j), clearInterval(i), j = setTimeout(function() {
                        m(a)
                    }, d.delay))
                }).bind("mouseleave", function() {
                    clearTimeout(j), clearInterval(i), n()
                }), f.bind("mouseover", function() {
                    clearTimeout(j), clearInterval(i)
                }).bind("mouseleave", function() {
                    n()
                })
            }, m = function(b) {
                h.each(function(c) {
                    c == b ? a(this).addClass("curr") : a(this).removeClass("curr")
                });
                var c = 0, e = 0;
                if (3 == d.slideDirection) {
                    var g = f.children(), i = g.eq(d.defaultIndex), j = g.eq(b);
                    i.css({zIndex: 0}), j.css({zIndex: 1}), i.fadeOut("fast"), j.fadeIn("slow"), d.defaultIndex = b
                } else
                    1 == d.slideDirection ? (f.css({width: d.slideWidth * d.data.length}), c = -d.slideWidth * b) : e = -d.slideHeight * b, f.animate({top: e + "px",left: c + "px"}, d.speed, function() {
                        d.defaultIndex = b
                    })
            }, n = function() {
                d.auto && (i = setInterval(function() {
                    var a = d.defaultIndex;
                    a++, a == d.data.length && (a = 0), m(a)
                }, d.stay))
            };
            k()
        }
    }
}(jQuery), jQuery.fn.pagination = function(a, b) {
    return b = jQuery.extend({items_per_page: 10,num_display_entries: 10,current_page: 0,num_edge_entries: 0,link_to: "#",prev_text: "Prev",next_text: "Next",ellipse_text: "...",prev_show_always: !0,next_show_always: !0,callback: function() {
            return !1
        }}, b || {}), this.each(function() {
        function c() {
            return Math.ceil(a / b.items_per_page)
        }
        function d() {
            var a = Math.ceil(b.num_display_entries / 2), d = c(), e = d - b.num_display_entries, f = g > a ? Math.max(Math.min(g - a, e), 0) : 0, h = g > a ? Math.min(g + a, d) : Math.min(b.num_display_entries, d);
            return [f, h]
        }
        function e(a, c) {
            g = a, f();
            var d = b.callback(a, h);
            return d || (c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0), d
        }
        function f() {
            h.empty();
            var a = d(), f = c();
            1 == f && $(".Pagination").css({display: "none"});
            var i = function(a) {
                return function(b) {
                    return e(a, b)
                }
            }, j = function(a, c) {
                if (a = 0 > a ? 0 : f > a ? a : f - 1, c = jQuery.extend({text: a + 1,classes: ""}, c || {}), a == g)
                    var d = $("<a href='javascript:void(0)' class='current'>" + c.text + "</a>");
                else
                    var d = $("<a>" + c.text + "</a>").bind("click", i(a)).attr("href", b.link_to.replace(/__id__/, a));
                c.classes && d.addClass(c.classes), h.append(d)
            };
            if (b.prev_text && (g > 0 || b.prev_show_always) && j(g - 1, {text: b.prev_text,classes: "prev"}), a[0] > 0 && b.num_edge_entries > 0) {
                for (var k = Math.min(b.num_edge_entries, a[0]), l = 0; k > l; l++)
                    j(l);
                b.num_edge_entries < a[0] && b.ellipse_text && jQuery("<span>" + b.ellipse_text + "</span>").appendTo(h)
            }
            for (var l = a[0]; l < a[1]; l++)
                j(l);
            if (a[1] < f && b.num_edge_entries > 0) {
                f - b.num_edge_entries > a[1] && b.ellipse_text && jQuery("<span>" + b.ellipse_text + "</span>").appendTo(h);
                for (var m = Math.max(f - b.num_edge_entries, a[1]), l = m; f > l; l++)
                    j(l)
            }
            b.next_text && (f - 1 > g || b.next_show_always) && j(g + 1, {text: b.next_text,classes: "next"})
        }
        var g = b.current_page;
        a = !a || 0 > a ? 1 : a, b.items_per_page = !b.items_per_page || b.items_per_page < 0 ? 1 : b.items_per_page;
        var h = jQuery(this);
        this.selectPage = function(a) {
            e(a)
        }, this.prevPage = function() {
            return g > 0 ? (e(g - 1), !0) : !1
        }, this.nextPage = function() {
            return g < c() - 1 ? (e(g + 1), !0) : !1
        }, f()
    })
}, function(a) {
    a.extend(a.browser, {client: function() {
            return {width: document.documentElement.clientWidth,height: document.documentElement.clientHeight,bodyWidth: document.body.clientWidth,bodyHeight: document.body.clientHeight}
        },scroll: function() {
            var a = document.documentElement.scrollTop, b = document.body.scrollTop, c = document.documentElement.scrollLeft, d = document.body.scrollLeft, e = a ? a : b, f = c ? c : d;
            return {width: document.documentElement.scrollWidth,height: document.documentElement.scrollHeight,bodyWidth: document.body.scrollWidth,bodyHeight: document.body.scrollHeight,left: f,top: e}
        },screen: function() {
            return {width: window.screen.width,height: window.screen.height}
        },isIE6: a.browser.msie && 6 == a.browser.version,isMinW: function(b) {
            return Math.min(a.browser.client().bodyWidth, a.browser.client().width) <= b
        },isMinH: function(b) {
            return a.browser.client().height <= b
        }})
}(jQuery), function(a) {
    a.fn.jdPosition = function(b) {
        var c = a.extend({mode: null}, b || {});
        switch (c.mode) {
            default:
            case "center":
                var d = a(this).outerWidth(), e = a(this).outerHeight(), f = (a.browser.isMinW(d), a.browser.isMinH(e));
                a(this).css({left: a.browser.scroll().left + Math.max((a.browser.client().width - d) / 2, 0) + "px",top: a.browser.isIE6 ? a.browser.scroll().top <= a.browser.client().bodyHeight - e ? a.browser.scroll().top + Math.max((a.browser.client().height - e) / 2, 0) + "px" : (a.browser.client().height - e) / 2 + "px" : f ? a.browser.scroll().top : a.browser.scroll().top + Math.max((a.browser.client().height - e) / 2, 0) + "px"});
                break;
            case "auto":
                break;
            case "fixed":
        }
    }
}(jQuery), function(a) {
    a.fn.jdThickBox = function(b, c) {
        "function" == typeof b && (c = b, b = {});
        var d, e = a.extend({type: "text",source: null,width: null,height: null,title: null,_frame: "",_div: "",_box: "",_con: "",_loading: "thickloading",close: !1,_close: "",_fastClose: !1,_close_val: "\xd7",_titleOn: !0,_title: "",_autoReposi: !1,_countdown: !1,_thickPadding: 10,_wrapBorder: 1}, b || {}), f = "function" != typeof this ? a(this) : null, g = function() {
            clearInterval(d), a(".thickframe").add(".thickdiv").remove(), a(".thickbox").empty().remove(), e._autoReposi && a(window).unbind("resize.jdThickBox").unbind("scroll.jdThickBox")
        };
        if (e.close)
            return g(), !1;
        var h = function(a) {
            return "" != a ? a.match(/\w+/) : ""
        }, i = function(b) {
            0 == a(".thickframe").length || 0 == a(".thickdiv").length ? (a("<iframe class='thickframe' id='" + h(e._frame) + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no'></iframe>").appendTo(a(document.body)), a("<div class='thickdiv' id='" + h(e._div) + "'></div>").appendTo(a(document.body))) : a(".thickframe").add(".thickdiv").show(), a("<div class='thickbox' id='" + h(e._box) + "'><div class='thickwrap'></div></div>").appendTo(a(document.body)), a(".thickwrap") && (a(".thickwrap").css("width", e.width + 2 * e._thickPadding), e._wrapBorder = 1), e._titleOn && k(b), a("<div class='thickcon' id='" + h(e._con) + "' style='width:" + e.width + "px;height:" + e.height + "px;'></div>").appendTo(a(".thickwrap")), e._countdown && j(), a(".thickcon").addClass(e._loading), n(), l(), m(b), e._autoReposi && a(window).bind("resize.jdThickBox", n).bind("scroll.jdThickBox", n), e._fastClose && a(document.body).bind("click.jdThickBox", function(b) {
                b = b ? b : window.event;
                var c = b.srcElement ? b.srcElement : b.target;
                "thickdiv" == c.className && (a(this).unbind("click.jdThickBox"), g())
            })
        }, j = function() {
            var b = e._countdown;
            a("<div class='thickcountdown' style='width:" + e.width + "'><span id='jd-countdown'>" + b + "</span>\u79d2\u540e\u81ea\u52a8\u5173\u95ed</div>").appendTo(a(".thickwrap")), d = setInterval(function() {
                b--, a("#jd-countdown").html(b), 0 == b && (b = e._countdown, g())
            }, 1e3)
        }, k = function(b) {
            e.title = null == e.title && b ? b.attr("title") : e.title, a("<div class='thicktitle' id='" + h(e._title) + "' style='width:" + e.width + "'><span>" + e.title + "</span></div>").appendTo(a(".thickwrap"))
        }, l = function() {
            null != e._close && (a("<a href='#' class='thickclose' id='" + h(e._close) + "'>" + e._close_val + "</a>").appendTo(a(".thickwrap")), a(".thickclose").one("click", function() {
                return g(), !1
            }))
        }, m = function(b) {
            switch (e.source = null == e.source ? b.attr("href") : e.source, e.type) {
                default:
                case "text":
                    a(".thickcon").html(e.source), a(".thickcon").removeClass(e._loading), c && c();
                    break;
                case "html":
                    a(e.source).clone().appendTo(a(".thickcon")).show(), a(".thickcon").removeClass(e._loading), c && c();
                    break;
                case "image":
                    e._index = null == e._index ? f.index(b) : e._index, a(".thickcon").append("<img src='" + e.source + "' width='" + e.width + "' height='" + e.height + "'>"), e.source = null, a(".thickcon").removeClass(e._loading), c && c();
                    break;
                case "ajax":
                case "json":
                    c && c(e.source, a(".thickcon"), function() {
                        a(".thickcon").removeClass(e._loading)
                    });
                    break;
                case "iframe":
                    a("<iframe src='" + e.source + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no' style='width:" + e.width + "px;height:" + e.height + "px;border:0;'></iframe>").appendTo(a(".thickcon")), a(".thickcon").removeClass(e._loading), c && c()
            }
        }, n = function() {
            var b = 2 * e._thickPadding + parseInt(e.width);
            if (a(".thickcon").css({width: e.width,height: e.height,paddingLeft: e._thickPadding,paddingRight: e._thickPadding}), setTimeout(function() {
                a(".thickbox").css({width: b + 2 * e._wrapBorder,height: parseInt(e._titleOn ? a(".thicktitle").outerHeight() : 0) + parseInt(a(".thickcon").outerHeight()) + 2 * e._wrapBorder})
            }, 100), a(".thickbox").jdPosition({mode: "center"}), a.browser.isIE6) {
                {
                    var c = a(".thickbox").outerWidth(), d = a(".thickbox").outerHeight(), f = a.browser.isMinW(c);
                    a.browser.isMinH(d)
                }
                a(".thickframe").add(".thickdiv").css({width: f ? c : "100%",height: Math.max(a.browser.client().height, a.browser.client().bodyHeight) + "px"})
            }
        };
        null != f ? f.click(function() {
            return i(a(this)), !1
        }) : i()
    }, a.jdThickBox = a.fn.jdThickBox
}(jQuery), function(a) {
    a.fn.jdMarquee = function(b, c) {
        "function" == typeof b && (c = b, b = {});
        var d, e = a.extend({deriction: "up",speed: 10,auto: !1,width: null,height: null,step: 1,control: !1,_front: null,_back: null,_stop: null,_continue: null,wrapstyle: "",stay: 5e3,delay: 20,dom: "div>ul>li".split(">"),mainTimer: null,subTimer: null,tag: !1,convert: !1,btn: null,disabled: "disabled",pos: {ojbect: null,clone: null}}, b || {}), f = this.find(e.dom[1]), g = this.find(e.dom[2]);
        if ("up" == e.deriction || "down" == e.deriction) {
            var h = f.eq(0).outerHeight(), i = e.step * g.eq(0).outerHeight();
            f.css({width: e.width + "px",overflow: "hidden"})
        }
        if ("left" == e.deriction || "right" == e.deriction) {
            var j = g.length * g.eq(0).outerWidth();
            f.css({width: j + "px",overflow: "hidden"});
            var i = e.step * g.eq(0).outerWidth()
        }
        var k = function() {
            var a = "<div style='position:relative;overflow:hidden;z-index:1;width:" + e.width + "px;height:" + e.height + "px;" + e.wrapstyle + "'></div>";
            switch (f.css({position: "absolute",left: 0,top: 0}).wrap(a), e.pos.object = 0, d = f.clone(), f.after(d), e.deriction) {
                default:
                case "up":
                    f.css({marginLeft: 0,marginTop: 0}), d.css({marginLeft: 0,marginTop: h + "px"}), e.pos.clone = h;
                    break;
                case "down":
                    f.css({marginLeft: 0,marginTop: 0}), d.css({marginLeft: 0,marginTop: -h + "px"}), e.pos.clone = -h;
                    break;
                case "left":
                    f.css({marginTop: 0,marginLeft: 0}), d.css({marginTop: 0,marginLeft: j + "px"}), e.pos.clone = j;
                    break;
                case "right":
                    f.css({marginTop: 0,marginLeft: 0}), d.css({marginTop: 0,marginLeft: -j + "px"}), e.pos.clone = -j
            }
            e.auto && (l(), f.hover(function() {
                n(e.mainTimer)
            }, function() {
                l()
            }), d.hover(function() {
                n(e.mainTimer)
            }, function() {
                l()
            })), c && c(), e.control && p()
        }, l = function(a) {
            n(e.mainTimer), e.stay = a ? a : e.stay, e.mainTimer = setInterval(function() {
                m()
            }, e.stay)
        }, m = function() {
            n(e.subTimer), e.subTimer = setInterval(function() {
                s()
            }, e.delay)
        }, n = function(a) {
            null != a && clearInterval(a)
        }, o = function(b) {
            b ? (a(e._front).unbind("click"), a(e._back).unbind("click"), a(e._stop).unbind("click"), a(e._continue).unbind("click")) : p()
        }, p = function() {
            null != e._front && a(e._front).click(function() {
                a(e._front).addClass(e.disabled), o(!0), n(e.mainTimer), e.convert = !0, e.btn = "front", m(), e.auto || (e.tag = !0), q()
            }), null != e._back && a(e._back).click(function() {
                a(e._back).addClass(e.disabled), o(!0), n(e.mainTimer), e.convert = !0, e.btn = "back", m(), e.auto || (e.tag = !0), q()
            }), null != e._stop && a(e._stop).click(function() {
                n(e.mainTimer)
            }), null != e._continue && a(e._continue).click(function() {
                l()
            })
        }, q = function() {
            e.tag && e.convert && (e.convert = !1, "front" == e.btn && ("down" == e.deriction && (e.deriction = "up"), "right" == e.deriction && (e.deriction = "left")), "back" == e.btn && ("up" == e.deriction && (e.deriction = "down"), "left" == e.deriction && (e.deriction = "right")), e.auto ? l() : l(4 * e.delay))
        }, r = function(a, b, c) {
            c ? (n(e.subTimer), e.pos.object = a, e.pos.clone = b, e.tag = !0) : e.tag = !1, e.tag && (e.convert ? q() : e.auto || n(e.mainTimer)), ("up" == e.deriction || "down" == e.deriction) && (f.css({marginTop: a + "px"}), d.css({marginTop: b + "px"})), ("left" == e.deriction || "right" == e.deriction) && (f.css({marginLeft: a + "px"}), d.css({marginLeft: b + "px"}))
        }, s = function() {
            var b = "up" == e.deriction || "down" == e.deriction ? parseInt(f.get(0).style.marginTop) : parseInt(f.get(0).style.marginLeft), c = "up" == e.deriction || "down" == e.deriction ? parseInt(d.get(0).style.marginTop) : parseInt(d.get(0).style.marginLeft), g = Math.max(Math.abs(b - e.pos.object), Math.abs(c - e.pos.clone)), k = Math.ceil((i - g) / e.speed);
            switch (e.deriction) {
                case "up":
                    g == i ? (r(b, c, !0), a(e._front).removeClass(e.disabled), o(!1)) : (-h >= b && (b = c + h, e.pos.object = b), -h >= c && (c = b + h, e.pos.clone = c), r(b - k, c - k));
                    break;
                case "down":
                    g == i ? (r(b, c, !0), a(e._back).removeClass(e.disabled), o(!1)) : (b >= h && (b = c - h, e.pos.object = b), c >= h && (c = b - h, e.pos.clone = c), r(b + k, c + k));
                    break;
                case "left":
                    g == i ? (r(b, c, !0), a(e._front).removeClass(e.disabled), o(!1)) : (-j >= b && (b = c + j, e.pos.object = b), -j >= c && (c = b + j, e.pos.clone = c), r(b - k, c - k));
                    break;
                case "right":
                    g == i ? (r(b, c, !0), a(e._back).removeClass(e.disabled), o(!1)) : (b >= j && (b = c - j, e.pos.object = b), c >= j && (c = b - j, e.pos.clone = c), r(b + k, c + k))
            }
        };
        ("up" == e.deriction || "down" == e.deriction) && h >= e.height && h >= e.step && k(), ("left" == e.deriction || "right" == e.deriction) && j >= e.width && j >= e.step && k()
    }
}(jQuery), $.login = function(a) {
    a = $.extend({loginService: "http://passport." + pageConfig.FN_getDomain() + "/loginservice.aspx?callback=?",loginMethod: "Login",loginUrl: "https://passport." + pageConfig.FN_getDomain() + "/new/login.aspx",returnUrl: location.href,automatic: !0,complete: null,modal: !1}, a || {}), "" != a.loginService && "" != a.loginMethod && $.getJSON(a.loginService, {method: a.loginMethod}, function(b) {
        null != b && (null != a.complete && a.complete(b.Identity), !b.Identity.IsAuthenticated && a.automatic && "" != a.loginUrl && (a.modal ? jdModelCallCenter.login() : location.href = a.loginUrl + "?ReturnUrl=" + escape(a.returnUrl)))
    })
}, function(a) {
    a.jdCalcul = function(b) {
        var c = null, b = b.join(","), d = "http://qiang.jd.com/HomePageNewLimitBuy.ashx?callback=?&ids=" + b, e = "http://item.jd.com/", f = function(b) {
            var c = a.extend({contentid: "#limit",clockid: "#clock",rankid: "#rank",limitid: "#limitbuy"}, b || {});
            if (!(b == {} || "" == b || null == c.start || "" == c.start || null == c.end || "" == c.end || c.pros.length < 1)) {
                c.start = g(c.start), c.start = a.browser.mozzia ? Date.parse(c.start) : c.start, c.server = g(c.server), c.server = a.browser.mozzia ? Date.parse(c.server) : c.server, c.end = g(c.end), c.end = a.browser.mozzia ? Date.parse(c.end) : c.end, c.contentid = a(c.contentid + c.qid), c.clockid = a(c.clockid + c.qid), c.rankid = a(c.rankid + c.qid), c.limitid = a(c.limitid + c.qid);
                var d, f, h, i, j = (c.start - c.server) / 1e3, k = (c.end - c.server) / 1e3, l = function() {
                    var b = '<li><div class="p-img"><a href="{6}{0}.html" target="_blank"><img src="{1}" width="100" height="100" /></a>{2}</div><div class="p-name"><a href="{6}{0}.html" target="_blank">{3}</a></div><div class="p-price">\u62a2\u8d2d\u4ef7\uff1a<strong>{4}</strong>{5}</div></li>', d = "<ul>";
                    a.each(c.pros, function(a) {
                        var f = c.pros[a].id, g = c.pros[a].tp, h = "<div class='pi9'></div>", i = unescape(c.pros[a].mc), j = c.pros[a].qg, k = "(" + c.pros[a].zk + "\u6298)";
                        d += b.replace(/\{0\}/g, f).replace("{1}", g).replace("{2}", h).replace("{3}", i).replace("{4}", j).replace("{5}", k).replace(/\{6\}/g, e)
                    }), d += "</ul>", c.contentid.html(d)
                }, m = function() {
                    j > 0 || (k > 0 ? (d = Math.floor(k / 3600), f = Math.floor((k - 3600 * d) / 60), h = (k - 3600 * d) % 60, c.clockid.html("\u5269\u4f59<b>" + d + "</b>\u5c0f\u65f6<b>" + f + "</b>\u5206<b>" + h + "</b>\u79d2"), k--) : (c.clockid.html("\u62a2\u8d2d\u7ed3\u675f"), clearInterval(i), c.limitid.hide(), c.rankid.length > 0 && c.rankid.show()))
                };
                0 >= j && k > 0 && (l(), c.rankid.length > 0 && c.rankid.hide(), c.limitid.show()), m(), i = setInterval(function() {
                    m()
                }, 1e3)
            }
        }, g = function(a) {
            var b = a.split(" "), c = b[0].split("-"), d = b[1].split(":");
            return new Date(c[0], c[1] - 1, c[2], d[0], d[1], d[2])
        };
        a.ajax({url: d,dataType: "jsonp",success: function(b) {
                b && (c = b.data, a.each(c, function(a) {
                    f(c[a])
                }))
            }})
    }
}(jQuery);
var jdRecent = {element: $("#recent ul"),jsurl: "http://www.jd.com/lishiset.aspx?callback=jdRecent.setData&id=",cookiename: "_recent",list: $.cookie("_recent"),url: location.href,init: function() {
        var a = this.url.match(/\/(\d{6}).html/), b = null != a && -1 != a[0].indexOf("html") ? a[1] : "";
        if (this.list && null != this.list && "" != this.list)
            "" == b || -1 != this.list.indexOf(b) ? this.list = this.list : (this.list.split(".").length >= 10 && (this.list = this.list.replace(/.\d+$/, "")), this.list = b + "." + this.list);
        else {
            if ("" == b)
                return this.getData(0);
            this.list = b
        }
        $.cookie(this.cookiename, this.list, {expires: 7,path: "/",domain: "jd.com",secure: !1}), this.getData(this.list)
    },clear: function() {
        $.cookie(this.cookiename, "", {expires: 7,path: "/",domain: "jd.com",secure: !1})
    },getData: function(a) {
        if (0 == a)
            return this.element.html("<li><div class='norecode'>\u6682\u65e0\u8bb0\u5f55!</div></li>"), void 0;
        var b = a.split(".");
        for (i in b)
            0 == i && this.element.empty(), $.getJSONP(this.jsurl + b[i], this.setData)
    },setData: function(a) {
        this.element.append("<li><div class='p-img'><a href='" + a.url + "'><img src='" + a.img + "' /></a></div><div class='p-name'><a href='" + a.url + "'>" + decodeURIComponent(a.name) + "</a></div></li>")
    }};
$("#clearRec").click(function() {
    jdRecent.clear(), jdRecent.getData(0)
}), mlazyload({defObj: "#recent",defHeight: 50,fn: function() {
        1 == jdRecent.element.length && jdRecent.init()
    }});
var jdModelCallCenter = {settings: {clstag1: 0,clstag2: 0},tbClose: function() {
        0 != $(".thickbox").length && jdThickBoxclose()
    },login: function() {
        this.tbClose();
        var a = this, b = navigator.userAgent.toLowerCase(), c = "ucweb" == b.match(/ucweb/i) || "rv:1.2.3.4" == b.match(/rv:1.2.3.4/i);
        return c ? (location.href = "https://passport." + pageConfig.FN_getDomain() + "/new/login.aspx?ReturnUrl=" + escape(location.href), void 0) : (setTimeout(function() {
            $.jdThickBox({type: "iframe",title: "\u60a8\u5c1a\u672a\u767b\u5f55",source: "http://passport.jd.com/uc/popupLogin2013?clstag1=" + a.settings.clstag1 + "&clstag2=" + a.settings.clstag2 + "&r=" + Math.random(),width: 390,height: 450,_title: "thicktitler",_close: "thickcloser",_con: "thickconr"})
        }, 20), void 0)
    },regist: function() {
        var a = this;
        this.tbClose(), setTimeout(function() {
            $.jdThickBox({type: "iframe",title: "\u60a8\u5c1a\u672a\u767b\u5f55",source: "http://reg.jd.com/reg/popupPerson?clstag1=" + a.settings.clstag1 + "&clstag2=" + a.settings.clstag2 + "&r=" + Math.random(),width: 390,height: 450,_title: "thicktitler",_close: "thickcloser",_con: "thickconr"})
        }, 20)
    },init: function() {
//        var a = this;
//        $.ajax({url: ("https:" == document.location.protocol ? "https://" : "http://") + "passport." + pageConfig.FN_getDomain() + "/new/helloService.ashx?m=ls&sso=0",dataType: "jsonp",success: function(b) {
//                a.tbClose(), b && b.info && $("#loginbar").html(b.info), a.settings.fn()
//            }})
    }};
$.extend(jdModelCallCenter, {autoLocation: function(a) {
        $.login({modal: !0,complete: function(b) {
                null != b && null != b.IsAuthenticated && b.IsAuthenticated && (window.location = a)
            }})
    }}), $.extend(jdModelCallCenter, {doAttention: function(a) {
        var b = "http://t.jd.com/product/followProduct.action?productId=" + a;
        $.login({modal: !0,complete: function(a) {
                if (null != a && null != a.IsAuthenticated && a.IsAuthenticated) {
                    var c = 510, d = 440;
                    $.jdThickBox({type: "iframe",source: b + "&t=" + Math.random(),width: c,height: d,title: "\u63d0\u793a",_box: "attboxr",_con: "attconr",_countdown: !1}, function() {
                    })
                }
            }})
    }}), $(".btn-coll").livequery("click", function() {
    var a = $(this), b = parseInt(a.attr("id").replace("coll", ""));
    $.extend(jdModelCallCenter.settings, {clstag1: "login|keycount|5|3",clstag2: "login|keycount|5|4",id: b,fn: function() {
            jdModelCallCenter.doAttention(this.id)
        }}), jdModelCallCenter.settings.fn()
}), "undefined" != typeof pageConfig && (pageConfig.isHome = function() {
    return pageConfig.navId && "home" == pageConfig.navId && location.href.indexOf("www.jd.com") >= 0
}()), $.bigiframe = function(a, b, c) {
    if (a && $.browser.msie && 6 == $.browser.version) {
        if ("undefined" == typeof b)
            var b = a.outerWidth();
        if ("undefined" == typeof c)
            var c = a.outerHeight();
        var d = '<iframe src="javascript:false;" frameBorder="0" style="width:' + b + "px;height:" + c + 'px;position:absolute;z-index:-1;opacity:0;filter:alpha(opacity=0);top:0;left:0;" id="bigiframe">';
        a.append(d), a.bind("mouseenter", function() {
            a.find("#bigiframe").show()
        }).bind("mouseleave", function() {
            a.find("#bigiframe").hide()
        })
    }
};
//http://d.360buy.com/configs/get?type=JSON
var category = {OBJ: $("#_JD_ALLSORT"),
		//URL_Serv: "http://manage.taotao.com/web/itemcat/all?callback=category.getDataService",
		URL_Serv: "http://127.0.0.1:8081/rest/itemcat/all?callback=category.getDataService",
		//URL_Serv: "http://localhost:8082/category.json",
		URL_BrandsServ: "http://d.360buy.com/brandVclist2/get?callback=category.getBrandService&ids=a,9211,9212^b,9214,9215^c,9217,9218^d,9220,9221^e,9223,9224^f,9226,9227^g,9229,9230^h,9232,9233^m,9235,9236^i,9238,9239^j,9241,9242^p,9244,9245^k,9247,9248^l,9250,9251",
		FN_GetLink: function(a, b) {
	        var c, d;
	        switch (a) {
	            case 1:
	                c = b.u, d = b.n;
	                break;
	            case 2:
	                c = b.split("|")[0], d = b.split("|")[1]
	        }
        return "" == c ? d : (/^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-.\/?%&=]*)?$/.test(c) || (c = c.replace(/-000$/, ""), c = c.match(/^\d*-\d*$/) ? "http://channel.jd.com/" + c + ".html" : "http://www.taotao.com" + c + ".html"), '<a href="' + c + '">' + d + "</a>")
    },FN_SetLink: function(a) {
        var b = "", c = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0604e"' : "", d = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0603e"' : "", e = pageConfig.isHome ? 'clstag="homepage|keycount|home2013|0605e"' : "";
        switch (a) {
            case "c":
                b = '<div class="categorys-links" ' + c + '><a href="http://group.jd.com/index/20000001.htm" target="_blank"><img src="http://img13.360buyimg.com/da/jfs/t328/179/568110786/5477/d602dfd5/54180c0eN5ddce4d3.png" /></a></div>';
                break;
            case "b":
                b = '<div class="categorys-links" id="categorys-links-cellphone" ' + d + '><a href="http://sale.jd.com/act/UaSsnjAKQNeyiY.html" target="_blank">JDPhone\u8ba1\u5212</a></div>';
                break;
            case "d":
                b = '<div class="categorys-links" id="categorys-links-jzc" ' + e + '><a href="http://channel.jd.com/jiazhuang.html" target="_blank">\u5bb6\u88c5\u57ce</a></div>'
        }
        return b
    },DATA_Simple: {1: [{l: "http://book.jd.com/",n: "\u56fe\u4e66"}, {l: "http://mvd.jd.com/",n: "\u97f3\u50cf"}, {l: "http://e.jd.com/",n: "\u6570\u5b57\u5546\u54c1"}],2: [{l: "http://channel.jd.com/electronic.html",n: "\u5bb6\u7528\u7535\u5668"}],3: [{l: "http://shouji.jd.com/",n: "\u624b\u673a"}, {l: "http://channel.jd.com/digital.html",n: "\u6570\u7801"}, {l: "http://mobile.jd.com/index.do",n: "\u4eac\u4e1c\u901a\u4fe1"}],4: [{l: "http://channel.jd.com/computer.html",n: "\u7535\u8111\u3001\u529e\u516c"}],5: [{l: "http://channel.jd.com/home.html",n: "\u5bb6\u5c45"}, {l: "http://channel.jd.com/furniture.html",n: "\u5bb6\u5177"}, {l: "http://channel.jd.com/decoration.html",n: "\u5bb6\u88c5"}, {l: "http://channel.jd.com/kitchenware.html",n: "\u53a8\u5177"}],6: [{l: "http://channel.jd.com/1315-1342.html",n: "\u7537\u88c5"}, {l: "http://channel.jd.com/1315-1343.html",n: "\u5973\u88c5"}, {l: "http://channel.jd.com/1315-1345.html",n: "\u5185\u8863"}, {l: "http://channel.jd.com/jewellery.html",n: "\u73e0\u5b9d"}],7: [{l: "http://channel.jd.com/beauty.html",n: "\u4e2a\u62a4\u5316\u5986"}],8: [{l: "http://channel.jd.com/shoes.html",n: "\u978b\u9774"}, {l: "http://channel.jd.com/bag.html",n: "\u7bb1\u5305"}, {l: "http://channel.jd.com/watch.html",n: "\u949f\u8868"}, {l: "http://channel.jd.com/1672-2615.html",n: "\u5962\u4f88\u54c1"}],9: [{l: "http://channel.jd.com/sports.html",n: "\u8fd0\u52a8\u6237\u5916"}],10: [{l: "http://channel.jd.com/auto.html",n: "\u6c7d\u8f66\u7528\u54c1"}],11: [{l: "http://channel.jd.com/baby.html",n: "\u6bcd\u5a74"}, {l: "http://channel.jd.com/toys.html",n: "\u73a9\u5177\u4e50\u5668"}],12: [{l: "http://channel.jd.com/food.html",n: "\u98df\u54c1\u996e\u6599"}, {l: "http://channel.jd.com/wine.html",n: "\u9152\u7c7b"}, {l: "http://channel.jd.com/freshfood.html",n: "\u751f\u9c9c"}],13: [{l: "http://channel.jd.com/health.html",n: "\u8425\u517b\u4fdd\u5065"}],14: [{l: "http://caipiao.jd.com/",n: "\u5f69\u7968"}, {l: "http://trip.jd.com/",n: "\u65c5\u884c"}, {l: "http://chongzhi.jd.com/",n: "\u5145\u503c"}, {l: "http://piao.jd.com/",n: "\u7968\u52a1"}]},TPL_Simple: '{for item in data}<div class="item fore${parseInt(item_index)}">    <span data-split="1" {if pageConfig.isHome} clstag="homepage|keycount|home2013|06{if parseInt(item_index)+1>9}${parseInt(item_index)+1}{else}0${parseInt(item_index)+1}{/if}a"{/if}>        <h3>{for sItem in item}{if sItem_index!=0}\u3001{/if}<a href="${sItem.l}">${sItem.n}</a>{/for}</h3>        <s></s>    </span></div>{/for}<div class="extra"><a href="http://www.jd.com/allSort.aspx">\u5168\u90e8\u5546\u54c1\u5206\u7c7b</a></div>',FN_InitSimple: function() {
       /* var a, b = {}, c = $("#categorys-2013");
        b.data = this.DATA_Simple, c.addClass("categorys-2014"), a = this.TPL_Simple.process(b);
        var d = $("#_JD_ALLSORT");
        d.html(a), $.bigiframe(d)*/
    },FN_GetData: function() {
    	//使用jsonp来实现跨域请求
        $.getJSONP(this.URL_Serv, category.getDataService);
    	//直接使用ajax请求json数据
    	/*$.getJSON(this.URL_Serv, function(json){
    		category.getDataService(json);
    	});*/
    },FN_GetBrands: function() {
      //  $.getJSONP(this.URL_BrandsServ, category.getBrandService)
    },FN_RefactorJSON: function(a, b) {
        for (var c = a.length / b, d = [], e = 0; c > e; e++)
            d.push({tabs: [],increment: null,count: b,skuids: []});
        for (var f = 0, g = 0; g < a.length; g++)
            g % b == 0 && f++, d[f - 1].tabs.push(a[g]), d[f - 1].increment = f, d[f - 1].skuids.push(a[g].wid);
        return d
    },renderItem: function(a) {
        var b = '<div class="item fore${index+1}">    <span data-split="1" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}a"{/if}><h3>${n}</h3><s></s></span>    <div class="i-mc">        <div onclick="$(this).parent().parent().removeClass(\'hover\')" class="close">\xd7</div>        <div class="subitem" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}b"{/if}>            {for subitem in i}            <dl class="fore${parseInt(subitem_index)+1}">                <dt>${category.FN_GetLink(1,subitem)}</dt>                <dd>{for link in subitem.i}<em>${category.FN_GetLink(2,link)}</em>{/for}</dd>            </dl>            {/for} </div> </div></div>', c = '<div class="item item-col2 fore${index+1}">    <span data-split="1" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}a"{/if}><h3>${n}</h3><s></s></span>    <div class="i-mc">        <ul class="hide title-list lh">            <li class="fore1"><a href="http://chongzhi.jd.com/">\u5145\u503c\u7f34\u8d39</a></li>            <li class="fore2"><a href="http://caipiao.jd.com/">\u4eac\u4e1c\u5f69\u7968</a></li>            <li class="fore3"><a href="http://channel.jd.com/4938-12316.html">\u57f9\u8bad\u6559\u80b2</a></li>            <li class="fore4"><a href="http://jipiao.jd.com/ticketquery/flightHotcity.action">\u4f18\u9009\u673a\u7968</a></li>            <li class="fore5"><a href="http://channel.jd.com/4938-12300.html">\u65c5\u884c\u7b7e\u8bc1</a></li>            <li class="fore6"><a href="http://game.jd.com/">\u4eac\u4e1c\u6e38\u620f</a></li>        </ul>        <div onclick="$(this).parent().parent().removeClass(\'hover\')" class="close">\xd7</div>        <div class="subitem" {if pageConfig.isHome}clstag="homepage|keycount|home2013|0${601+parseInt(index)}b"{/if}>            {for item in i}            <div class="sub-item-col sub-item-col${item_index} fl">                {for subitem in item.tabs}                <dl class="fore${parseInt(subitem_index)+1}">                    <dt>${category.FN_GetLink(1,subitem)}</dt>                    <dd>{for link in subitem.i}<em>${category.FN_GetLink(2,link)}</em>{/for}</dd>                </dl>                {/for}					{if item_index==1}<div class="cat-right-con" id="JD_sort_${t}" clstag="homepage|keycount|home2013|0614c"><div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>{/if}            </div>            {/for}        </div>    </div></div>';
        return "l" == a.t ? c.process(a) : b.process(a)
    },FN_GetBrands: function() {
      //  $.getJSONP(this.URL_BrandsServ, category.getBrandService)
    },getDataService: function(a) {
        var b = [], c = this;
        $.each(a.data, function(a) {
            this.index = a, "l" == this.t && (this.i = c.FN_RefactorJSON(this.i, 7)), b.push(c.renderItem(this, a))
        });
        b.push('<div class="extra"><a {if pageConfig.isHome}clstag="homepage|keycount|home2013|0614a"{/if} href="http://www.jd.com/allSort.aspx">\u5168\u90e8\u5546\u54c1\u5206\u7c7b</a></div>'), this.OBJ.attr("load", "1").html(b.join("")), $.bigiframe(this.OBJ), this.FN_GetBrands();
        var d = this, e = this.OBJ.outerWidth(), f = this.OBJ.outerHeight();
        $("#_JD_ALLSORT").dropdown({delay: 0,onmouseleave: function() {
                $("#_JD_ALLSORT .item").removeClass("hover")
            }}, function(a) {
            var b, c, g = document.documentElement.scrollTop + document.body.scrollTop, h = $("#nav-2013").offset().top + 39;
            h >= g ? (c = a.hasClass("fore13") ? 3 : 3, g = c) : (b = a.offset().top, g = g > b - 5 ? b - h - 10 : Math.max(3, g - h));
            var i = a.find(".i-mc");
            if (i.css({top: g + "px"}), d.OBJ.find("iframe")) {
                var j = i.outerWidth() + e, k = i.outerHeight() > f ? i.outerHeight() : f;
                d.OBJ.find("iframe").css({width: j,height: k,top: g})
            }
        })
    },getRightAreaTPL: function(a) {
        var b = "", c = "", d = "", e = "";
        return b = this.FN_SetLink(a), c = '{if p.length!=0}<dl class="categorys-promotions">    <dd>        <ul>            {for item in p}            <li>                <a href="${item.u}" target="_blank">                {if item.i}                    <img src="${item.i}" width="194" height="70" title="${item.n}" style="margin-bottom: 4px;" />                {else}                    ${item.n}                {/if}                </a>            </li>            {/for}        </ul>    </dd></dl>{/if}', d = '{if b.length!=0}<dl class="categorys-brands">    {if id=="k"}        <dt>\u63a8\u8350\u54c1\u724c\u51fa\u7248\u5546/\u4e66\u5e97</dt>    {else}        {if id=="l"}        <dt>\u63a8\u8350\u4ea7\u54c1</dt>        {else}        <dt>\u63a8\u8350\u54c1\u724c</dt>        {/if}    {/if}    <dd>        <ul>            {for item in b} <li><a href="${item.u}" target="_blank">${item.n}</a></li> {/for}        </ul>    </dd></dl>{/if}', e = /c|b|d/.test(a) ? b + d + c : b + c + d
    },getBrandService: function(a) {
        var b = this, c = a.data;
        this.OBJ.attr("load", "2"), $.each(c, function() {
            var a = this.id, c = b.getRightAreaTPL(a);
            $("#JD_sort_" + a).html(c.process(this))
        }), $(".cat-right-con").each(function(a) {
            pageConfig.isHome && ($(this).find(".categorys-promotions").attr("clstag", "homepage|keycount|home2013|0" + (601 + a) + "c"), $(this).find(".categorys-brands").attr("clstag", "homepage|keycount|home2013|0" + (601 + a) + "d"))
        })
    },FN_Init: function() {
        if (this.OBJ.length) {
            this.OBJ.attr("load") || (window.pageConfig && 0 != window.pageConfig.pageId && this.FN_InitSimple(), $("#categorys").length ? $("#categorys").Jdropdown({delay: 200}) : $("#categorys-2013").Jdropdown({delay: 200}));
            var a = this;
            this.OBJ.one("mouseover", function() {
                var b = a.OBJ.attr("load");
                if (b) {
                    if (1 != b)
                        return;
                    a.FN_GetBrands()
                } else
                    a.FN_GetData()
            })
        }
    }}, UC = {DATA_Cookie: "aview",TPL_UnRegist: '<div class="prompt">            <span class="fl">\u60a8\u597d\uff0c\u8bf7<a href="javascript:login()" clstag="homepage|keycount|home2013|04a">\u767b\u5f55</a></span>            <span class="fr"></span>        </div>',TPL_Regist: '<div class="prompt">                <span class="fl"><strong>${Name}</strong></span>                <span class="fr"><a href="http://home.jd.com/">\u53bb\u6211\u7684\u4eac\u4e1c\u9996\u9875&nbsp;&gt;</a></span>            </div>',TPL_OList: {placeholder: '<div id="jduc-orderlist"></div>',fragment: '<div class="orderlist">                <div class="smt">                    <h4>\u6700\u65b0\u8ba2\u5355\u72b6\u6001\uff1a</h4>                    <div class="extra"><a href="http://order.jd.com/center/list.action" target="_blank">\u67e5\u770b\u6240\u6709\u8ba2\u5355&nbsp;&gt;</a></div>                </div>                <div class="smc">                    <ul>                        {for item in orderList}                        <li class="fore${parseInt(item_index)+1}">                            <div class="p-img fl">                                {for image in item.OrderDetail}                                    {if image_index<2}                                        <a href="http://www.jd.com/product/${image.ProductId}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(image.ProductId)}n5/${image.ImgUrl}" width="50" height="50" alt="${image.ProductName}" /></a>                                    {/if}                                {/for}                                {if item.OrderDetail.length>2}                                    <a href="${item.passKeyUrl}" target="_blank" class="more">\u66f4\u591a</a>                                {/if}                            </div>                            <div class="p-detail fr">                                \u8ba2\u5355\u53f7\uff1a${item.OrderId}<br />                                \u72b6\u3000\u6001\uff1a<span>${UC.FN_SetState(item.OrderState)}</span><br />                                \u3000\u3000\u3000\u3000<a href="${item.passKeyUrl}">\u67e5\u770b\u8be6\u60c5</a>                            </div>                        </li>                        {/for}                    </ul>                </div>            </div>'},TPL_UList: '<div class="uclist">                <ul class="fore1 fl">                    <li><a target="_blank" clstag="homepage|keycount|home2013|04b" href="http://order.jd.com/center/list.action">\u5f85\u5904\u7406\u8ba2\u5355<span id="num-unfinishedorder"></span></a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04c" href="http://jd2008.jd.com/user_spzx.aspx">\u54a8\u8be2\u56de\u590d<span id="num-consultation"></span></a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04d" href="http://t.jd.com/product/followProductList.action?isReduce=true">\u964d\u4ef7\u5546\u54c1<span id="num-reduction"></span></a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|shouhou" href="http://myjd.jd.com/repair/orderlist.action">\u8fd4\u4fee\u9000\u6362\u8d27</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04e" href="http://quan.jd.com/user_quan.action">\u4f18\u60e0\u5238<span id="num-ticket"></span></a></li>                </ul>                <ul class="fore2 fl">                    <li><a target="_blank" clstag="homepage|keycount|home2013|04i" href="http://t.jd.com/home/follow">\u6211\u7684\u5173\u6ce8&nbsp;&gt;</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|04g" href="http://bean.jd.com/myJingBean/list">\u6211\u7684\u4eac\u8c46&nbsp;&gt;</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|licai" href="http://trade.jr.jd.com/centre/browse.action">\u6211\u7684\u7406\u8d22&nbsp;&gt;</a></li>                    <li><a target="_blank" clstag="homepage|keycount|home2013|baitiao" href="http://baitiao.jd.com/creditUser/list">\u6211\u7684\u767d\u6761&nbsp;&gt;</a></li>                </ul>            </div>',TPL_VList: {placeholder: '<div class="viewlist">                <div class="smt" clstag="homepage|keycount|home2013|04k">                    <h4>\u6700\u8fd1\u6d4f\u89c8\u7684\u5546\u54c1\uff1a</h4>                    <div style="float:right;padding-right:9px;"><a style="border:0;color:#005EA7" href="http://my.jd.com/history/list.html" target="_blank">\u67e5\u770b\u6d4f\u89c8\u5386\u53f2&nbsp;&gt;</a></div>                </div>                <div class="smc" id="jduc-viewlist" clstag="homepage|keycount|home2013|04j">                    <div class="loading-style1"><b></b>\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div>                    <ul class="lh hide"></ul>                </div>            </div>',fragment: '{for item in list}<li><a href="http://item.jd.com/${item.wid}.html" target="_blank" title="${item.wname}"><img src="${pageConfig.FN_GetImageDomain(item.wid)}n5/${item.imgUrl}" width="50" height="50" alt="${item.wname}" /></a></li>{/for}'},FN_SetState: function(a) {
        var a = a;
        return a.length > 4 && (a = "<span title=" + a + ">" + a.substr(0, 4) + "...</span>"), a
    },FN_InitNewVList: function(a) {
        for (var b, c = a ? a.split("|") : [], d = c.length, e = [], f = 0; d > f; )
            e.push(c[f].split(".")[1]), f++;
        b = e.join(","), $.getJSONP("http://my.jd.com/product/info.html?ids=" + b + "&jsoncallback=UC.FN_ShowVList")
    },FN_InitVList: function(a) {
        for (var b = JSON.parse(a), c = b.length, d = ",", e = 0; c > e; e++)
            new RegExp(b[e].s).test(d) || (d += b[e].s + ",");
        d = d.replace(/(^,*)|(,*$)/g, ""), $.getJSONP("http://my.jd.com/product/info.html?ids=" + d + "&jsoncallback=UC.FN_ShowVList")
    },FN_ShowVList: function(a) {
        if (a) {
            var b = $("#jduc-viewlist").find(".loading-style1");
            a.length = a.length > 5 ? 5 : a.length;
            var c = {list: a};
            b.length > 0 && b.hide();
            var d = this.TPL_VList.fragment.process(c);
            $("#jduc-viewlist").find("ul").eq(0).html(d).show()
        }
    },FN_setWords: function(a) {
        var b = '<font style="color:{0}">({1})</font>', c = "";
        return c = 0 == a ? "#ccc" : "#c00", pageConfig.FN_StringFormat(b, c, a)
    },FN_InitOList: function() {
        $.ajax({url: "http://minijd.360buy.com/getOrderList",dataType: "jsonp",success: function(a) {
                if (a && 0 == a.error && a.orderList) {
                    var b = UC.TPL_OList.fragment.process(a);
                    $("#jduc-orderlist").html(b)
                }
            }}), $.ajax({url: "http://minijd.360buy.com/getHomeCount",dataType: "jsonp",success: function(a) {
                a && 0 == a.error && $("#num-unfinishedorder").html(UC.FN_setWords(a.orderCount))
            }}), $.ajax({url: "http://comm.360buy.com/index.php?mod=Consultation&action=havingReplyCount",dataType: "jsonp",success: function(a) {
                a && $("#num-consultation").html(UC.FN_setWords(a.cnt))
            }}), $.ajax({url: "http://follow.soa.jd.com/product/queryForReduceProductCount.action?",dataType: "jsonp",success: function(a) {
                a && a.data > 0 && $("#num-reduction").html(UC.FN_setWords(a.data))
            }}), $.ajax({url: "http://quan.jd.com/getcouponcount.action",dataType: "jsonp",success: function(a) {
                a && $("#num-ticket").html(UC.FN_setWords(a.CouponCount))
            }})
    }}, MCART = {DATA_Cookie: "cn",DATA_Amount: readCookie("cn") || "0",URL_Serv: "http://cart.jd.com/cart/miniCartServiceNew.action",TPL_Iframe: '<iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" id="settleup-iframe"></iframe>',TPL_NoGoods: '<div class="prompt"><div class="nogoods"><b></b>\u8d2d\u7269\u8f66\u4e2d\u8fd8\u6ca1\u6709\u5546\u54c1\uff0c\u8d76\u7d27\u9009\u8d2d\u5427\uff01</div></div>',TPL_List: {wrap: '<div id="settleup-content"><div class="smt"><h4 class="fl">\u6700\u65b0\u52a0\u5165\u7684\u5546\u54c1</h4></div><div class="smc"></div><div class="smb ar">\u5171<b>${Num}</b>\u4ef6\u5546\u54c1\u3000\u5171\u8ba1<strong>\uffe5 ${TotalPromotionPrice.toFixed(2)}</strong><br><a href="http://cart.jd.com/cart/cart.html?r=${+new Date}" title="\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97" id="btn-payforgoods">\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97</a></div></div>',sigle: '<ul id="mcart-sigle">{for list in TheSkus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}" data-type="RemoveProduct" href="#delete">\u5220\u9664</a>      </div>      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>{/for}</ul>',gift: '<ul id="mcart-gift">{for list in TheGifts}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.MainSKU.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.MainSKU.Id)}n5/${list.MainSKU.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><a href="http://item.jd.com/${list.MainSKU.Id}.html" title="${list.MainSKU.Name}" target="_blank">${list.MainSKU.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.MainSKU.Id}" data-type="RemoveProduct" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Skus}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>',suit: '{for suit in TheSuit}<ul id="mcart-suit">  <li class="dt">      <div class="fl"><span>[\u5957\u88c5]</span> ${suit.Name}</div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(suit.PromotionPrice*suit.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for list in suit.Skus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${suit.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}',mj: '{for mj in ManJian}<ul id="mcart-mj">  <li class="dt">      <div class="fl"><span class="hl-green">\u6ee1\u51cf</span>{if mj.ManFlag} \u5df2\u8d2d\u6ee1{if mj.ManNum>0}${mj.ManNum}\u4ef6{else}${mj.ManPrice}\u5143{/if}\uff0c\u5df2\u51cf${mj.JianPrice}\u5143{else}\u8d2d\u6ee1{if mj.ManNum>0}${mj.ManNum}\u4ef6{else}${mj.ManPrice}\u5143{/if}\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u51cf\u4f18\u60e0{/if}</div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(mj.PromotionPrice*mj.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for list in mj.Skus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${mj.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}',mz: '{for mz in ManZeng}<ul id="mcart-mz">  <li class="dt">      <div class="fl"><span class="hl-orange">\u6ee1\u8d60</span>          {if mz.ManFlag}              \u5df2\u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u60a8{if mz.ManGifts.length>0}\u5df2{else}\u53ef{/if}\u9886\u8d60\u54c1          {else}              \u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u5373\u53ef\u9886\u53d6\u8d60\u54c1          {/if}      </div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(mz.PromotionPrice*mz.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for gift in mz.ManGifts}<li class="dt-mz"><a href="${gift.Id}" target="_blank">[\u8d60\u54c1]${gift.Name}</a>\xd7${gift.Num}</li>{/for}  {for list in mz.Skus}  <li>      <div class="p-img fl"><a href="http://item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="http://item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${mz.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="http://item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}'},FN_BindEvents: function() {
        var a = this;
        $("#settleup-content .delete").bind("click", function() {
            var b = $(this).attr("data-id").split("|"), c = $(this).attr("data-type"), d = {method: c,cartId: b[0]};
            b && (b.length > 1 && b[1] && (d.targetId = b[1]), $.ajax({url: MCART.URL_Serv,data: d,dataType: "jsonp",success: function(b) {
                    b.Result && a.FN_Refresh()
                }}))
        })
    },FN_Refresh: function() {
        var a = document.getElementById("settleup") ? $("#settleup dl") : $("#settleup-2013 dl"), b = a.find("dd").eq(0), c = function(a) {
            var c = a.Cart, d = c.TheSkus.length + c.TheSuit.length + c.TheGifts.length + c.ManJian.length + c.ManZeng.length, e = MCART.TPL_List.sigle.process(a.Cart), f = MCART.TPL_List.gift.process(a.Cart), g = MCART.TPL_List.suit.process(a.Cart), h = MCART.TPL_List.mz.process(a.Cart), i = MCART.TPL_List.mj.process(a.Cart);
            if (d > 0 ? (b.html(MCART.TPL_List.wrap.process(a.Cart)), b.find("#settleup-content .smc").html(e + f + g + i + h), $("#settleup-url").attr("href", "http://cart.jd.com/cart/cart.html?r=" + +new Date)) : b.html(MCART.TPL_NoGoods), $.browser.msie && 6 == $.browser.version) {
                var j = $("#settleup-content");
                j.before(MCART.TPL_Iframe);
                var k = $("#settleup-iframe");
                k.height(j.height())
            }
            MCART.FN_BindEvents()
        };
        $.ajax({url: MCART.URL_Serv,data: {method: "GetCart"},dataType: "jsonp",success: function(a) {
                c(a)
            }}), MCART.DATA_Amount = readCookie(MCART.DATA_Cookie), null != MCART.DATA_Amount && $("#shopping-amount").html(MCART.DATA_Amount).parent().show()
    }}, NotifyPop = {_saleNotify: "http://skunotify." + pageConfig.FN_getDomain() + "/pricenotify.html?",_stockNotify: "http://skunotify." + pageConfig.FN_getDomain() + "/storenotify.html?",init: function(a) {
        var b, c = this, d = this.serializeUrl(location.href), e = /from=weibo/.test(location.href) ? location.search.replace(/\?/, "") : "";
        /from=weibo/.test(location.href) && (b = d.param.type, this.setThickBox(b, e)), a.livequery("click", function() {
            var a = ($(this).attr("id"), $(this).attr("data-type") || 2);
            return c.sku = $(this).attr("data-sku"), c.checkLogin(function(b) {
                b.IsAuthenticated ? (c._userPin = b.Name, c.setThickBox(a, e)) : (jdModelCallCenter.settings.fn = function() {
                    c.checkLogin(function(b) {
                        b.IsAuthenticated && (c._userPin = b.Name, c.setThickBox(a, e))
                    })
                }, jdModelCallCenter.login())
            }), !1
        }).attr("href", "#none").removeAttr("target")
    },serializeUrl: function(a) {
        var b, c, d, e, f = a.indexOf("?"), g = a.substr(0, f), h = a.substr(f + 1), i = h.split("&"), j = i.length, k = {};
        for (b = 0; j > b; b++)
            c = i[b].split("="), d = c[0], e = c[1], k[d] = e;
        return {url: g,param: k}
    },checkLogin: function(a) {
        "function" == typeof a && $.getJSON("http://passport." + pageConfig.FN_getDomain() + "/loginservice.aspx?method=Login&callback=?", function(b) {
            b.Identity && a(b.Identity)
        })
    },setThickBox: function(a, b) {
        var c, d, e, f = {skuId: this.sku,pin: this._userPin,webSite: 1,origin: 1,source: 1}, g = this.serializeUrl(location.href);
        /blogPin/.test(location.href) && (f.blogPin = g.param.blogPin), 1 == a && (c = "\u964d\u4ef7\u901a\u77e5", d = this._saleNotify, e = 250), 2 == a && (c = "\u5230\u8d27\u901a\u77e5", d = this._stockNotify, e = 210, f.storeAddressId = readCookie("ipLoc-djd") || "0-0-0"), d += b ? b : $.param(f), $.jdThickBox({type: "iframe",source: decodeURIComponent(d) + "&nocache=" + +new Date,width: 500,height: e,title: c,_box: "notify_box",_con: "notify_con",_title: "notify_title"})
    }};
!function() {
    pageConfig.FN_ImgError(document), $("img[data-lazyload]").Jlazyload({type: "image",placeholderClass: "err-product"}), category.FN_Init(), document.getElementById("shortcut") ? $("#shortcut .menu").Jdropdown({delay: 50}) : ($("#biz-service").Jdropdown({delay: 50}, function() {
        $.ajax({url: "http://www.jd.com/hotwords.aspx?position=new-index-002",dataType: "script",scriptCharset: "gb2312",cache: !0})
    }), $("#site-nav").Jdropdown({delay: 50}, function() {
        $.ajax({url: "http://www.jd.com/hotwords.aspx?position=new-index-003",dataType: "script",scriptCharset: "gb2312",cache: !0})
    })), document.getElementById("navitems") ? $("#navitems li").Jdropdown() : $("#navitems-2013 li").Jdropdown()
    		
//    		$.ajax({url: ("https:" == document.location.protocol ? "https://" : "http://") + "passport." + pageConfig.FN_getDomain() + "/new/helloService.ashx?m=ls",
//    			dataType: "jsonp",scriptCharset: "gb2312",success: function(a) {
//            a && a.info && $("#loginbar").html(a.info), a && a.sso && $.each(a.sso, function() {
//                $.getJSON(this);
//                
//            })
//        }}), 
        
//        document.getElementById("settleup") ? (null != MCART.DATA_Amount && ($("#settleup s").eq(0).addClass("shopping"), $("#shopping-amount").html(MCART.DATA_Amount)), $("#settleup dl").Jdropdown({delay: 200}, function() {
//        //MCART.FN_Refresh(), $("#settleup-url").attr("href", "http://cart.jd.com/cart/cart.html?r=" + +new Date)
//    }
//        
//        )) : (null != MCART.DATA_Amount && $("#shopping-amount").html(MCART.DATA_Amount), $("#settleup-2013 dl").Jdropdown({delay: 200}, function() {
//        MCART.FN_Refresh(), $("#settleup-url").attr("href", "http://cart.jd.com/cart/cart.html?r=" + +new Date)
//    }));
    var a = document.getElementById("my360buy") ? $("#my360buy") : $("#my360buy-2013");
    a.find("dl").Jdropdown({delay: 100}, function(a) {
        a.attr("load") || $.login({automatic: !1,complete: function(b) {
                if (b) {
                    var c = a.find("dd").eq(0), d = "", e = readCookie(UC.DATA_Cookie);
                    b.IsAuthenticated ? (d += UC.TPL_Regist.process(b), d += UC.TPL_OList.placeholder, d += UC.TPL_UList) : (d += UC.TPL_UnRegist, d += UC.TPL_UList), e && (d += UC.TPL_VList.placeholder), c.html(d), a.attr("load", "1"), setTimeout(function() {
                        a.removeAttr("load")
                    }, 6e4), /\[\{/.test(e) ? UC.FN_InitVList(e) : UC.FN_InitNewVList(e), UC.FN_InitOList()
                }
            }})
    }), document.onkeyup = function(a) {
        var b = document.activeElement.tagName.toLowerCase();
        if ("input" != b && "textarea" != b) {
            var a = a ? a : window.event, c = a.keyCode || a.which;
            switch (c) {
                case 68:
                    window.pageConfig.clientViewTop || (window.pageConfig.clientViewTop = 0), window.pageConfig.clientViewTop += document.documentElement.clientHeight, window.scrollTo(0, pageConfig.clientViewTop);
                    break;
                case 83:
                    window.scrollTo(0, 0), window.pageConfig.clientViewTop = 0, document.getElementById("key").focus();
                    break;
                case 84:
                    window.scrollTo(0, 0), window.pageConfig.clientViewTop = 0
            }
        }
    }
}();
var $o = function() {
//    function a() {
//        this.length = 0, this.index = -1, this.iLastModified = 0, this.lastKeyword = !1
//    }
//    var b = {};
//    b.replace = function(a, b) {
//        return a.replace(/#{(.*?)}/g, function() {
//            var a = arguments[1];
//            return "undefined" != typeof b[a] ? b[a] : arguments[0]
//        })
//    }, String.prototype.isEmpty = function() {
//        return 0 == this.length
//    };
//    var c = '<a style="color:#005AA0" onclick="$o.del(event)">\u5220\u9664</a>', d = "\u641c\u7d22\u5386\u53f2", e = '<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" history="1"><div class="search-item" style="color:#005AA0">#{keyword}</div><div class="search-count">' + d + "</div></li>", f = '<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)"><div class="search-item">#{keyword}</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></li>', g = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" cid="#{cid}" cLevel="#{cLevel}" onclick="$o.clickItem(this)"><div class="search-item">\u5728<strong>#{cname}</strong>\u5206\u7c7b\u4e2d\u641c\u7d22</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>#{categorys}', h = '<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)"><div class="search-item">#{keyword}</div><div class="search-count" #{style}>\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>#{categorys}</li>', i = "http://dd.search.jd.com/?key=#{keyword}", j = "#FFDFC6", k = "#FFF", l = $("#key"), m = $("#shelper");
//    a.prototype.init = function() {
//        this.length = 0, this.index = -1, this.click = !1
//    }, a.prototype.hideTip = function() {
//        this.init(), this.lastKeyword = !1, m.html("").hide()
//    }, a.prototype.clickItem = function(a) {
//        var b = a.getAttribute("cid");
//        search.cid = null != b && "" != b ? b : null;
//        var c = a.getAttribute("cLevel");
//        search.cLevel = null != c && "" != c ? c : null;
//        var d = a.getAttribute("ev_val");
//        search.ev_val = null == d || $.trim(d).isEmpty() ? null : d;
//        var e = a.getAttribute("title");
//        null == e || $.trim(e).isEmpty() || l.val(e), search.additinal = "&suggest=" + a.getAttribute("suggest-pos"), this.click = a.id.substr(2) - m.find("li[history='1']").length, search("key")
//    }, a.prototype.mouseenter = function(a) {
//        var a = $(a);
//        a.attr("history") && a.find(".search-count").html(c), a.css("background", j);
//        var b = a.attr("id").split("_"), e = parseInt(b[1], 10);
//        if (e != this.index) {
//            if (this.index > -1) {
//                var f = $("#d_" + this.index);
//                f.css("background", k), f.attr("history") && f.find(".search-count").html(d)
//            }
//            this.index = e
//        }
//    }, a.prototype.mouseleave = function(a) {
//        a.css("background", k), a.attr("history") && a.find(".search-count").html(d)
//    }, a.prototype.selectItemNode = function(a) {
//        var b = this, e = $("#d_" + b.index + ":visible");
//        e.css("background-color", k), e.attr("history") && e.find(".search-count").html(d), -1 == b.index && -1 == a && (a = 0), b.index = (b.length + b.index + a) % b.length;
//        var f = $("#d_" + b.index);
//        if (f.length > 0) {
//            f.attr("history") && f.find(".search-count").html(c), f.css("background-color", j);
//            var g = f.attr("title");
//            null == g || $.trim(g).isEmpty() || l.val(g);
//            var h = f.attr("cid");
//            search.cid = null != h && "" != h ? h : null;
//            var i = f.attr("cLevel");
//            search.cLevel = null != i && "" != i ? i : null, search.ev_val = null, search.additinal = "&suggest=" + f.attr("suggest-pos"), b.click = b.index - m.find("li[history='1']").length
//        }
//    }, a.prototype.input = function() {
//        var a = this;
//        a.timeoutId && clearTimeout(a.timeoutId), a.timeoutId = setTimeout(function() {
//            var c = $.trim(l.val());
//            if (c === a.lastKeyword || !(c || readCookie("pin") || readCookie("_tp")))
//                return !1;
//            a.lastKeyword = c;
//            var d = b.replace(i, {keyword: encodeURIComponent(c)});
//            $.ajax({url: d,dataType: "jsonp",scriptCharset: "utf-8",jsonp: "callback",success: function(b) {
//                    return function(c) {
//                        a.iLastModified > b || (a.iLastModified = b, a.onloadItems(c))
//                    }
//                }((new Date).getTime())})
//        }, 150)
//    }, a.prototype.keydown_up = function(a) {
//        var b = this, c = a || window.event;
//        0 == l.length && (l = $("#key")), 0 == m.length && (m = $("tie"));
//        var d = c.keyCode;
//        switch (d) {
//            case 38:
//                b.selectItemNode(-1);
//                break;
//            case 40:
//                b.selectItemNode(1);
//                break;
//            case 27:
//                b.hideTip();
//                break;
//            case 37:
//                break;
//            case 39:
//                break;
//            default:
//                $.browser.mozilla || b.input()
//        }
//    }, a.prototype.onloadItems = function(a) {
//        if (0 == a.length)
//            return this.hideTip(), void 0;
//        var c = this;
//        c.init();
//        var d = "", i = 0;
//        window.pageConfig && window.pageConfig.searchType && (i = window.pageConfig.searchType);
//        for (var j = 0, k = "", n = !1, o = 0, p = $.trim(l.val()), q = 0, r = a.length; r > q; q++) {
//            var s = a[q];
//            if (s) {
//                var t = $.trim(s.keyword), u = t.toLowerCase().indexOf(p.toLowerCase()), v = t;
//                if (0 == u && (v = p + "<strong>" + t.substring(u + p.length) + "</strong>"), "string" != typeof s.cid || $.trim(s.cid).isEmpty()) {
//                    var w = "";
//                    k += 0 == s.amount ? b.replace(e, {id: o,title: s.keyword,keyword: v,amount: s.amount,suggest_pos: j}) : b.replace(f, {id: o,title: s.keyword,keyword: v,amount: s.amount,suggest_pos: j,style: w}), o++, j++
//                } else {
//                    if (0 == n) {
//                        n = !0;
//                        var w = 'style="visibility:hidden"', x = 0;
//                        s.oamount && s.oamount > 0 && (x = s.oamount, w = ""), k += b.replace(h, {id: o,title: s.keyword,keyword: v,amount: x,suggest_pos: j,style: w}), o++, j++
//                    }
//                    if ("string" == typeof s.cname && $.trim(s.cname).isEmpty())
//                        continue;
//                    var y = s.level;
//                    if (!y)
//                        continue;
//                    if (0 == i) {
//                        if ("string" == typeof y && /^[1-8]4$/.test(y))
//                            continue
//                    } else if (5 == i) {
//                        if ("string" == typeof y && !/^[5-8]2$/.test(y))
//                            continue
//                    } else if (1 == i || 2 == i || 3 == i || 4 == i)
//                        continue;
//                    var z = "item1", A = b.replace(g, {id: o,title: s.keyword,cid: s.cid,cLevel: s.level,className: z,cname: s.cname,amount: s.amount,suggest_pos: j - 1});
//                    k = b.replace(k, {categorys: A}), o++
//                }
//            }
//        }
//        c.length = o, d = b.replace(k, {categorys: ""}), "" != d ? (d += '<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>', m.html(d).show(), m.find('[id^="d_"]').bind("mouseleave", function() {
//            c.mouseleave($(this))
//        }).bind("mouseenter", function() {
//            c.mouseenter($(this))
//        })) : m.html("").hide()
//    }, a.prototype.bind_input = function() {
//        $.browser.mozilla ? (l.bind("keydown", function(a) {
//            n.keydown_up(a)
//        }), l.bind("input", function(a) {
//            n.input(a)
//        })) : l.bind("keyup", function(a) {
//            n.keydown_up(a)
//        }), l.focus(function() {
//            setTimeout(function() {
//                n.input()
//            }, 10)
//        }), m.parent().bind("mouseenter", function() {
//            n.e_position = !0, n.timeoutId && clearTimeout(n.timeoutId)
//        }).bind("mouseleave", function() {
//            n.e_position = !1, n.timeoutId = setTimeout(function() {
//                n.hideTip()
//            }, 500)
//        }), $(document).click(function() {
//            n.e_position || n.hideTip()
//        })
//    }, a.prototype.del = function(a) {
//        var b = this;
//        a = a ? a : window.event, window.event ? (a.cancelBubble = !0, a.returnValue = !1) : (a.stopPropagation(), a.preventDefault());
//        var c = $(a.srcElement ? a.srcElement : a.target), d = c.parent().parent().attr("title");
//        $.ajax({url: "http://search.jd.com/suggest.php?op=del&callback=?&key=" + encodeURIComponent(d),dataType: "jsonp",scriptCharset: "utf-8",beforeSend: function() {
//                c.parent().parent().hide()
//            },success: function() {
//                b.lastKeyword = !1, l.focus()
//            }})
//    };
//    var n = new a;
//    return n.bind_input(), n
}();
pageConfig.FN_InitSidebar = function() {
    $("#toppanel").length || $(document.body).prepend('<div class="w ld" id="toppanel"></div>'), $("#toppanel").append('<div id="sidepanel" class="hide"></div>');
    var a = $("#sidepanel");
    this.scroll = function() {
        var b = this;
        $(window).bind("scroll", function() {
            var b = document.body.scrollTop || document.documentElement.scrollTop;
            0 == b ? a.hide() : a.show()
        }), b.initCss(), $(window).bind("resize", function() {
            b.initCss()
        })
    }, this.initCss = function() {
        var b, c = pageConfig.compatible ? 1210 : 990;
        screen.width >= 1210 && (b = $.browser.msie && $.browser.version <= 6 ? {right: "-26px"} : {right: (document.documentElement.clientWidth - c) / 2 - 26 + "px"}, a.css(b))
    }, this.addCss = function(b) {
        a.css(b)
    }, this.addItem = function(b) {
        a.append(b)
    }, this.setTop = function() {
        this.addItem("<a href='#' class='gotop' title='\u4f7f\u7528\u5feb\u6377\u952eT\u4e5f\u53ef\u8fd4\u56de\u9876\u90e8\u54e6\uff01'><b></b>\u8fd4\u56de\u9876\u90e8</a>")
    }
}, pageConfig.FN_InitContrast = function(a, b, c) {
    var a = a || "_contrast", c = c || "list", b = b || "http://misc.360buyimg.com/contrast/js/contrast.js?ver=" + +new Date, d = readCookie(a + "_status");
    return pageConfig.isInitContrast ? !1 : ("show" != d && "side" != d || 1 != !!readCookie(a) ? $(".btn-compare").bind("click", function() {
        var d = this.getAttribute("skuid");
        $.getScript(b, function() {
            Contrast && Contrast.init(c, a).showPopWin(d)
        })
    }) : $.getScript(b, function() {
        Contrast && Contrast.init(c, a)
    }), pageConfig.isInitContrast = 1, void 0)
};
