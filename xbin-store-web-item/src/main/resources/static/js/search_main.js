if (!window.console) {
    window.console = {};
    window.console.log = window.console.error = function() {
    }
}
if (!window.SEARCH) {
    window.SEARCH = {}
}
window.json_city = {"0": {"1": "北京","2": "上海","3": "天津","4": "重庆","5": "河北","6": "山西","7": "河南","8": "辽宁","9": "吉林","10": "黑龙江","11": "内蒙古","12": "江苏","13": "山东","14": "安徽","15": "浙江","16": "福建","17": "湖北","18": "湖南","19": "广东","20": "广西","21": "江西","22": "四川","23": "海南","24": "贵州","25": "云南","26": "西藏","27": "陕西","28": "甘肃","29": "青海","30": "宁夏","31": "新疆","32": "台湾","42": "香港","43": "澳门","84": "钓鱼岛"},"1": {"72": "朝阳区","2800": "海淀区","2801": "西城区","2802": "东城区","2803": "崇文区","2804": "宣武区","2805": "丰台区","2806": "石景山区","2807": "门头沟","2808": "房山区","2809": "通州区","2810": "大兴区","2812": "顺义区","2814": "怀柔区","2816": "密云区","2901": "昌平区","2953": "平谷区","3065": "延庆县"},"2": {"2813": "徐汇区","2815": "长宁区","2817": "静安区","2820": "闸北区","2822": "虹口区","2823": "杨浦区","2824": "宝山区","2825": "闵行区","2826": "嘉定区","2830": "浦东新区","2833": "青浦区","2834": "松江区","2835": "金山区","2836": "南汇区","2837": "奉贤区","2841": "普陀区","2919": "崇明县","78": "黄浦区"},"3": {"51035": "东丽区","51036": "和平区","51037": "河北区","51038": "河东区","51039": "河西区","51040": "红桥区","51041": "蓟县","51042": "静海县","51043": "南开区","51044": "塘沽区","51045": "西青区","51046": "武清区","51047": "津南区","51048": "汉沽区","51049": "大港区","51050": "北辰区","51051": "宝坻区","51052": "宁河县"},"4": {"113": "万州区","114": "涪陵区","115": "梁平县","119": "南川区","123": "潼南县","126": "大足区","128": "黔江区","129": "武隆县","130": "丰都县","131": "奉节县","132": "开县","133": "云阳县","134": "忠县","135": "巫溪县","136": "巫山县","137": "石柱县","138": "彭水县","139": "垫江县","140": "酉阳县","141": "秀山县","48131": "璧山县","48132": "荣昌县","48133": "铜梁县","48201": "合川区","48202": "巴南区","48203": "北碚区","48204": "江津区","48205": "渝北区","48206": "长寿区","48207": "永川区","50950": "江北区","50951": "南岸区","50952": "九龙坡区","50953": "沙坪坝区","50954": "大渡口区","50995": "綦江区","51026": "渝中区","51027": "高新区","51028": "北部新区","4164": "城口县","3076": "高新区"},"5": {"142": "石家庄市","148": "邯郸市","164": "邢台市","199": "保定市","224": "张家口市","239": "承德市","248": "秦皇岛市","258": "唐山市","264": "沧州市","274": "廊坊市","275": "衡水市"},"6": {"303": "太原市","309": "大同市","318": "阳泉市","325": "晋城市","330": "朔州市","336": "晋中市","350": "忻州市","368": "吕梁市","379": "临汾市","398": "运城市","3074": "长治市"},"7": {"412": "郑州市","420": "开封市","427": "洛阳市","438": "平顶山市","446": "焦作市","454": "鹤壁市","458": "新乡市","468": "安阳市","475": "濮阳市","482": "许昌市","489": "漯河市","495": "三门峡市","502": "南阳市","517": "商丘市","527": "周口市","538": "驻马店市","549": "信阳市","2780": "济源市"},"8": {"560": "沈阳市","573": "大连市","579": "鞍山市","584": "抚顺市","589": "本溪市","593": "丹东市","598": "锦州市","604": "葫芦岛市","609": "营口市","613": "盘锦市","617": "阜新市","621": "辽阳市","632": "朝阳市","6858": "铁岭市"},"9": {"639": "长春市","644": "吉林市","651": "四平市","2992": "辽源市","657": "通化市","664": "白山市","674": "松原市","681": "白城市","687": "延边州"},"10": {"727": "鹤岗市","731": "双鸭山市","737": "鸡西市","742": "大庆市","753": "伊春市","757": "牡丹江市","765": "佳木斯市","773": "七台河市","776": "黑河市","782": "绥化市","793": "大兴安岭地区","698": "哈尔滨市","712": "齐齐哈尔市"},"11": {"799": "呼和浩特市","805": "包头市","810": "乌海市","812": "赤峰市","823": "乌兰察布市","835": "锡林郭勒盟","848": "呼伦贝尔市","870": "鄂尔多斯市","880": "巴彦淖尔市","891": "阿拉善盟","895": "兴安盟","902": "通辽市"},"12": {"904": "南京市","911": "徐州市","919": "连云港市","925": "淮安市","933": "宿迁市","939": "盐城市","951": "扬州市","959": "泰州市","965": "南通市","972": "镇江市","978": "常州市","984": "无锡市","988": "苏州市"},"13": {"2900": "济宁市","1000": "济南市","1007": "青岛市","1016": "淄博市","1022": "枣庄市","1025": "东营市","1032": "潍坊市","1042": "烟台市","1053": "威海市","1058": "莱芜市","1060": "德州市","1072": "临沂市","1081": "聊城市","1090": "滨州市","1099": "菏泽市","1108": "日照市","1112": "泰安市"},"14": {"1151": "黄山市","1159": "滁州市","1167": "阜阳市","1174": "亳州市","1180": "宿州市","1201": "池州市","1206": "六安市","2971": "宣城市","1114": "铜陵市","1116": "合肥市","1121": "淮南市","1124": "淮北市","1127": "芜湖市","1132": "蚌埠市","1137": "马鞍山市","1140": "安庆市"},"15": {"1158": "宁波市","1273": "衢州市","1280": "丽水市","1290": "台州市","1298": "舟山市","1213": "杭州市","1233": "温州市","1243": "嘉兴市","1250": "湖州市","1255": "绍兴市","1262": "金华市"},"16": {"1303": "福州市","1315": "厦门市","1317": "三明市","1329": "莆田市","1332": "泉州市","1341": "漳州市","1352": "南平市","1362": "龙岩市","1370": "宁德市"},"17": {"1432": "孝感市","1441": "黄冈市","1458": "咸宁市","1466": "恩施州","1475": "鄂州市","1477": "荆门市","1479": "随州市","3154": "神农架林区","1381": "武汉市","1387": "黄石市","1396": "襄阳市","1405": "十堰市","1413": "荆州市","1421": "宜昌市","2922": "潜江市","2980": "天门市","2983": "仙桃市"},"18": {"4250": "耒阳市","1482": "长沙市","1488": "株洲市","1495": "湘潭市","1499": "韶山市","1501": "衡阳市","1511": "邵阳市","1522": "岳阳市","1530": "常德市","1540": "张家界市","1544": "郴州市","1555": "益阳市","1560": "永州市","1574": "怀化市","1586": "娄底市","1592": "湘西州"},"19": {"1601": "广州市","1607": "深圳市","1609": "珠海市","1611": "汕头市","1617": "韶关市","1627": "河源市","1634": "梅州市","1709": "揭阳市","1643": "惠州市","1650": "汕尾市","1655": "东莞市","1657": "中山市","1659": "江门市","1666": "佛山市","1672": "阳江市","1677": "湛江市","1684": "茂名市","1690": "肇庆市","1698": "云浮市","1704": "清远市","1705": "潮州市"},"20": {"3168": "崇左市","1715": "南宁市","1720": "柳州市","1726": "桂林市","1740": "梧州市","1746": "北海市","1749": "防城港市","1753": "钦州市","1757": "贵港市","1761": "玉林市","1792": "贺州市","1806": "百色市","1818": "河池市","3044": "来宾市"},"21": {"1827": "南昌市","1832": "景德镇市","1836": "萍乡市","1842": "新余市","1845": "九江市","1857": "鹰潭市","1861": "上饶市","1874": "宜春市","1885": "抚州市","1898": "吉安市","1911": "赣州市"},"22": {"2103": "凉山州","1930": "成都市","1946": "自贡市","1950": "攀枝花市","1954": "泸州市","1960": "绵阳市","1962": "德阳市","1977": "广元市","1983": "遂宁市","1988": "内江市","1993": "乐山市","2005": "宜宾市","2016": "广安市","2022": "南充市","2033": "达州市","2042": "巴中市","2047": "雅安市","2058": "眉山市","2065": "资阳市","2070": "阿坝州","2084": "甘孜州"},"23": {"3690": "三亚市","3698": "文昌市","3699": "五指山市","3701": "临高县","3702": "澄迈县","3703": "定安县","3704": "屯昌县","3705": "昌江县","3706": "白沙县","3707": "琼中县","3708": "陵水县","3709": "保亭县","3710": "乐东县","3711": "三沙市","2121": "海口市","3115": "琼海市","3137": "万宁市","3173": "东方市","3034": "儋州市"},"24": {"2144": "贵阳市","2150": "六盘水市","2155": "遵义市","2169": "铜仁市","2180": "毕节市","2189": "安顺市","2196": "黔西南州","2205": "黔东南州","2222": "黔南州"},"25": {"4108": "迪庆州","2235": "昆明市","2247": "曲靖市","2258": "玉溪市","2270": "昭通市","2281": "普洱市","2291": "临沧市","2298": "保山市","2304": "丽江市","2309": "文山州","2318": "红河州","2332": "西双版纳州","2336": "楚雄州","2347": "大理州","2360": "德宏州","2366": "怒江州"},"26": {"3970": "阿里地区","3971": "林芝地区","2951": "拉萨市","3107": "那曲地区","3129": "山南地区","3138": "昌都地区","3144": "日喀则地区"},"27": {"2428": "延安市","2442": "汉中市","2454": "榆林市","2468": "商洛市","2476": "安康市","2376": "西安市","2386": "铜川市","2390": "宝鸡市","2402": "咸阳市","2416": "渭南市"},"28": {"2525": "庆阳市","2534": "陇南市","2544": "武威市","2549": "张掖市","2556": "酒泉市","2564": "甘南州","2573": "临夏州","3080": "定西市","2487": "兰州市","2492": "金昌市","2495": "白银市","2501": "天水市","2509": "嘉峪关市","2518": "平凉市"},"29": {"2580": "西宁市","2585": "海东地区","2592": "海北州","2597": "黄南州","2603": "海南州","2605": "果洛州","2612": "玉树州","2620": "海西州"},"30": {"2628": "银川市","2632": "石嘴山市","2637": "吴忠市","2644": "固原市","3071": "中卫市"},"31": {"4110": "五家渠市","4163": "博尔塔拉蒙古自治州阿拉山口口岸","15945": "阿拉尔市","15946": "图木舒克市","2652": "乌鲁木齐市","2654": "克拉玛依市","2656": "石河子市","2658": "吐鲁番地区","2662": "哈密地区","2666": "和田地区","2675": "阿克苏地区","2686": "喀什地区","2699": "克孜勒苏州","2704": "巴音郭楞州","2714": "昌吉州","2723": "博尔塔拉州","2727": "伊犁州","2736": "塔城地区","2744": "阿勒泰地区"},"32": {"2768": "台湾市"},"42": {"2754": "香港特别行政区"},"43": {"2770": "澳门市"},"84": {"1310": "钓鱼岛"}};
Array.prototype.unique = function() {
    var d = [], c = {};
    for (var b = 0, a = this.length; b < a; b++) {
        if (!c[this[b]]) {
            d.push(this[b]);
            c[this[b]] = 1
        }
    }
    return d
};
SEARCH.util = {htmlspecialchars: function(a, b) {
        a = a.replace("<", "&lt;").replace(">", "&gt;").replace("&", "&amp;").replace('"', "&quot;");
        return b == true ? a.replace("'", "&#0*39;") : a
    },html_chars_decode: function(a) {
        return !a ? "" : a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0*39;/g, "'")
    },strip_tags: function(a, c) {
        c = (((c || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
        var b = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, d = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return a.replace(d, "").replace(b, function(f, e) {
            return c.indexOf("<" + e.toLowerCase() + ">") > -1 ? f : ""
        })
    },getQueryString: function(b, a) {
        var c = new RegExp("(^|\\?|&)" + b + "=([^&]*)(\\s|&|$)", "i"), d = a ? a : window.location.search;
        if (c.test(d)) {
            return RegExp.$2
        }
        return ""
    },filtUrl: function(l, k, j) {
        var d, g, f;
        switch (arguments.length) {
            case 0:
                return "";
            case 1:
                d = window.location.pathname + window.location.search;
                g = l;
                f = "";
                break;
            case 2:
                d = l;
                g = k;
                f = "";
                break;
            case 3:
                d = l;
                g = k;
                f = j;
                break;
            default:
                break
        }
        var e = new RegExp("(^|\\?|&)" + g + "=([^&#]*)", "gi");
        if (!f) {
            return d.replace(e, "")
        } else {
            if (e.test(d)) {
                return d.replace(e, "$1" + g + "=" + f)
            } else {
                var i = d.indexOf("#"), h = "";
                if (i != -1) {
                    h = d.substr(i);
                    d = d.substr(0, i)
                }
                return d + "&" + g + "=" + f + h
            }
        }
    },get_ware_type: function(b) {
        var a = "general";
        switch (Math.floor(parseInt(b, 10) / 10000000)) {
            case 1:
                a = "book";
                break;
            case 2:
                a = "mvd";
                break;
            case 3:
                a = "ebook";
                break;
            case 6:
                a = "digital_music";
                break;
            case 185:
                a = "ehaoyao";
                break;
            default:
                break
        }
        return a
    },template: function(a, b) {
        if (typeof b != "object") {
            return ""
        }
        return a.replace(/{#(.*?)#}/g, function() {
            var c = arguments[1];
            if ("undefined" != typeof (b[c]) && b[c] != null) {
                return b[c]
            } else {
                return ""
            }
        })
    },sGetScript: function(b, e, d) {
        e = e || "GBK";
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.charset = e;
        a.src = b;
        if (d == true) {
            a.async = true
        }
        var c = document.getElementsByTagName("head")[0];
        c.appendChild(a)
    },bind_attr_href: function(a, b) {
        var d = this, c = typeof (MS.selected_attr) == "undefined" ? $("#select,#filter") : $("#filter");
        c.unbind("click").bind("click", function(h) {
            var f = $(h.target), g = f.attr("href");
            if (!g) {
                f = f.parents("a");
                g = f.attr("href")
            }
            if (g && g != "javascript:;") {
                window.location.href = d.filtUrl(g, a, b);
                return false
            }
        })
    },setCookie: function(g, f, j) {
        var i = j, h = new Date;
        h.setTime(h.getTime() + 24 * i * 60 * 60 * 1000);
        document.cookie = g + "=" + escape(f) + ";expires=" + h.toGMTString() + ";path=/;domain=." + pageConfig.FN_getDomain()
    }};
$.extend({scriptsArray: [],delayLoad: function(g, a, b, k, c) {
        if (c !== undefined) {
            if ($(c).length == 0) {
                return false
            }
        }
        for (var f = 0, d = $.scriptsArray.length; f < d; f++) {
            if ($.scriptsArray[f] == a) {
                if (typeof (k) == "function") {
                    k()
                }
                return true
            }
        }
        var h = document.getElementsByTagName("head")[0], e;
        if (g) {
            e = document.createElement("script");
            e.type = "text/javascript";
            e.charset = b || "gbk";
            e.src = a
        } else {
            e = document.createElement("link");
            e.type = "text/css";
            e.rel = "stylesheet";
            e.href = a
        }
        e.onload = e.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                $.scriptsArray.push(a);
                if (typeof (k) == "function") {
                    k()
                }
            }
        };
        h.appendChild(e);
        return false
    }});
(function(k, l) {
    k.QUERY_KEYWORD = l.util.html_chars_decode(k.QUERY_KEYWORD);
    k.REAL_KEYWORD = l.util.html_chars_decode(k.REAL_KEYWORD);
    //$("#key").val(k.QUERY_KEYWORD);
    if (typeof LogParm == "undefined") {
        LogParm = {ab: 0,result_count: 0}
    }
    LogParm.rec_type = LogParm.rec_type || "0";
    LogParm.ev = LogParm.ev || 0;
    LogParm.cid = LogParm.cid || "";
    LogParm.psort = LogParm.psort || "";
    LogParm.page = LogParm.page || "1";
    LogParm.sig = LogParm.sig || "";
    LogParm.rel_cat2 = LogParm.rel_cat2 || "";
    LogParm.rel_cat3 = LogParm.rel_cat3 || "";
    LogParm.log_id = LogParm.log_id || "";
    LogParm.expand = LogParm.expand || "";
    var d = $("#refilter");
    if (!d.length) {
        return false
    }
    var h = d.find("div.item"), g = d.find("a.more");
    var a = function(m) {
        for (var n = 10, j = h.length; n < j; n++) {
            if (!m) {
                $(h[n]).hide()
            } else {
                $(h[n]).show()
            }
        }
    };
    g.bind("click", function() {
        if (!$(this).attr("s") || $(this).attr("s") == null || $(this).attr("s") == "1") {
            $(this).html("<span>收起</span><b class='close'></b>").attr({s: "0"});
            a(true)
        } else {
            $(this).html("<span>显示全部分类</span><b class='open'></b>").attr({s: "1"});
            a(false)
        }
    });
    d.find("h3").each(function() {
        $(this).click(function() {
            $(this).parent().toggleClass("hover").find(".show-more").toggleClass("hide")
        });
        var i = $(this).next("ul").children("li");
        if (i.not(":hidden").length == 0) {
            $(this).parent().find(".show-more").remove();
            i.css("display", "block")
        }
    });
    d.find("h3 a").click(function(i) {
        i.stopPropagation()
    });
    d.find(".show-more a").click(function() {
        $(this).parent().prev().find("li").css("display", "block");
        $(this).parent().remove()
    });
    if (l.list_category) {
        var f = l.list_category.split(";");
        for (var e = 0, c = f.length; e < c; e++) {
            var b = $("#category-2-" + f[e]).parents("div.item");
            b.addClass("hover").show();
            b.find("li").css("display", "block");
            b.find(".show-more").remove()
        }
    }
    l.cid_style()
})(window, SEARCH);
window.searchlog = function() {
    var k = Array.prototype.slice.call(arguments, 0), a, m = k[0] == 0 ? QUERY_KEYWORD : window.REAL_KEYWORD || QUERY_KEYWORD;
    var n = {sig: LogParm.sig,referer: document.referrer};
    if (k[0] == "e") {
        var g = encodeURIComponent(LogParm.ekey) + "^#psort#^#page#^#cid#^" + encodeURIComponent(window.location.href);
        k.shift();
        k.splice(4, 1, QUERY_KEYWORD);
        n.keyword = LogParm.ekey
    } else {
        var g = encodeURIComponent(m) + "^#psort#^#page#^#cid#^" + encodeURIComponent(window.location.href);
        n.keyword = m
    }
    var b = "http://sstat.jd.com/scslog?args=", c = k.length, l;
    if (c > 0) {
        if (k[0] == 0) {
            n.front_cost = LogParm.front_cost = LogParm.front_cost || "0";
            n.back_cost = LogParm.back_cost = LogParm.back_cost || "0";
            n.ip = LogParm.ip = LogParm.ip || "";
            n.rec_type = LogParm.rec_type;
            n.result_count = LogParm.result_count;
            a = b + LogParm.rec_type + "^" + g + "^^^" + LogParm.result_count + "^" + k[1] + "^" + LogParm.ev + "^" + LogParm.ab + "^" + LogParm.back_cost + "^" + LogParm.front_cost + "^" + LogParm.ip
        } else {
            if (k[0] == 1) {
                if (LogParm.rec_type != 10) {
                    a = b + "1^" + g + "^";
                    n.rec_type = 1
                } else {
                    a = b + "11^" + g + "^";
                    n.rec_type = 11
                }
                for (var d = 1, f = Math.min(5, c); d < f; d++) {
                    a += encodeURI(k[d]) + "^"
                }
                if (c > 3) {
                    if (k[3] == "51") {
                        LogParm.cid = k[1]
                    } else {
                        if (k[3] == "55") {
                            LogParm.psort = k[1]
                        } else {
                            if (k[3] == "56") {
                                LogParm.page = k[1]
                            } else {
                                n.wid = k[1]
                            }
                        }
                    }
                }
                if (c >= 5) {
                    n.word = k[4]
                }
                n.pos = k[2];
                n.type = k[3];
                for (var d = 0, f = (5 - c); d < f; d++) {
                    a += "^"
                }
                a += LogParm.ev + "^" + LogParm.ab
            }
        }
    }
    a = a.replace("#cid#", LogParm.cid);
    a = a.replace("#psort#", LogParm.psort);
    a = a.replace("#page#", LogParm.page);
    n.cid = LogParm.cid;
    n.sort = LogParm.psort;
    n.page = LogParm.page;
    n.ev = LogParm.ev;
    n.ab = LogParm.ab;
    if (k[0] == 0 && (LogParm.rec_type == "0" || LogParm.rec_type == "10")) {
        a += "^" + encodeURIComponent(document.referrer);
        l = encodeURIComponent(LogParm.expand)
    } else {
        a += "^^^^" + encodeURIComponent(document.referrer);
        l = encodeURIComponent(c >= 6 && k[5] != "" ? LogParm.expand + "$" + k[5] : LogParm.expand)
    }
    a += "^" + LogParm.rel_cat2 + "^" + LogParm.rel_cat3 + "^" + LogParm.log_id + "^" + l;
    $.getScript(a + "&sig=" + encodeURIComponent(LogParm.sig));
    try {
        JA.tracker.ngloader("search.000001", n)
    } catch (h) {
    }
};
$(document).ready(function() {
   // $("#key").val(QUERY_KEYWORD);
    //searchlog(0, SEARCH.track_iframe_onebox())
});
GS = window.GS || {};
GS.collocation = [{"爸爸": ["春节", "中秋", "新年", "生日"],"妈妈": ["春节", "中秋", "新年", "生日"],"丈夫": ["春节", "中秋", "新年", "情人节", "生日"],"妻子": ["春节", "中秋", "新年", "情人节", "生日"],"男朋友": ["春节", "中秋", "新年", "情人节", "生日"],"女朋友": ["春节", "中秋", "新年", "情人节", "生日"],"老人": ["春节", "中秋", "新年", "生日"],"小孩": ["春节", "中秋", "新年", "生日"],"领导": ["春节", "中秋", "新年", "生日"]}, {"春节": ["爸爸", "妈妈", "丈夫", "妻子", "男朋友", "女朋友", "老人", "小孩", "领导"],"中秋": ["爸爸", "妈妈", "丈夫", "妻子", "男朋友", "女朋友", "老人", "小孩", "领导"],"新年": ["爸爸", "妈妈", "丈夫", "妻子", "男朋友", "女朋友", "老人", "小孩", "领导"],"情人节": ["丈夫", "妻子", "男朋友", "女朋友"],"生日": ["爸爸", "妈妈", "丈夫", "妻子", "男朋友", "女朋友", "老人", "小孩", "领导"]}, ["春节", "中秋", "新年", "情人节", "生日"], ["爸爸", "妈妈", "丈夫", "妻子", "男朋友", "女朋友", "老人", "小孩", "领导"]];
GS.init = function() {
    this.obj = $("#dialogbox-gift").find("div.gift");
    if (this.obj.length == 0) {
        return false
    }
    var c = "";
    for (var b = 0, a = this.collocation[3].length; b < a; b++) {
        c += '<div><a href="javascript:;" onclick="GS.click(this)" title="' + this.collocation[3][b] + '">' + this.collocation[3][b] + "</a></div>"
    }
    this.obj.find("dl:eq(0) dd").html(c);
    c = "";
    for (var b = 0, a = this.collocation[2].length; b < a; b++) {
        c += '<div><a href="javascript:;" onclick="GS.click(this)" title="' + this.collocation[2][b] + '">' + this.collocation[2][b] + "</a></div>"
    }
    this.obj.find("dl:eq(1) dd").html(c);
    this.obj.children("a").bind("mouseenter", function() {
        if (GS.delytime) {
            clearTimeout(GS.delytime)
        }
        $(this).parent().addClass("hover")
    }).bind("mouseleave", function() {
        GS.delytime = setTimeout(function() {
            GS.obj.removeClass("hover")
        }, 500)
    }).next("div.prompt").bind("mouseenter", function() {
        clearTimeout(GS.delytime)
    }).bind("mouseleave", function() {
        $(this).parent().removeClass("hover")
    })
};
GS.click = function(b) {
    var a = this.obj.find("dl").index($(b).parents("dl"));
    if ($(b).hasClass("curr")) {
        $(b).removeClass("curr");
        this.html(this.collocation[a + 2], a)
    } else {
        $(b).addClass("curr").parent("div").siblings().find("a").removeClass("curr");
        this.html(this.collocation[a][$(b).html()], a)
    }
};
GS.html = function(a, c) {
    c = c === 0 ? 1 : 0;
    var e = "", g, h = this.obj.find("dl:eq(" + c + ")"), f = h.find("a.curr").html();
    for (var d = 0, b = a.length; d < b; d++) {
        if (f == a[d]) {
            g = "curr"
        } else {
            g = ""
        }
        e += '<div><a class="' + g + '" href="javascript:;" onclick="GS.click(this)" title="' + a[d] + '">' + a[d] + "</a></div>"
    }
    h.find("dd").html(e)
};
GS.search = function() {
    var a, b = this.obj.find("dl:eq(0) a.curr").html(), c = this.obj.find("dl:eq(1) a.curr").html();
    if (b && c) {
        a = "送" + b + c + "礼物"
    } else {
        if (b) {
            a = "送" + b + "礼物"
        } else {
            if (c) {
                a = c + "礼物"
            } else {
                return false
            }
        }
    }
    this.obj.removeClass("hover");
    searchlog(1, 0, 0, 26);
    window.open("/Search?keyword=" + encodeURIComponent(a) + "&enc=utf-8")
};
SEARCH.iframe_click = {resolution: 200,iframes: [],interval: null,Iframe: function() {
        this.element = arguments[0];
        this.cb = arguments[1];
        this.hasTracked = false
    },track: function(b, a) {
        this.iframes.push(new this.Iframe(b, a));
        if (!this.interval) {
            var c = this;
            this.interval = setInterval(function() {
                c.checkClick()
            }, this.resolution)
        }
    },checkClick: function() {
        if (document.activeElement) {
            var b = document.activeElement;
            for (var a in this.iframes) {
                if (b === this.iframes[a].element) {
                    if (this.iframes[a].hasTracked == false) {
                        this.iframes[a].cb.apply(window, []);
                        this.iframes[a].hasTracked = true
                    }
                } else {
                    this.iframes[a].hasTracked = false
                }
            }
        }
    }};
SEARCH.track_iframe_onebox = function() {
    var e = this, d = $("#virtualWareIFrame"), b = /^http\:\/\/(.*)\.(jd|360buy)\.com/i, a = "", c = d.attr("src");
    if (d.length && b.test(c)) {
        a = RegExp.$1;
        if (a == "life" && c.indexOf("initRestaurant") > -1) {
            a = "dingzuo"
        } else {
            if (a == "life" && c.indexOf("initTakeOut") > -1) {
                a = "waimai"
            }
        }
        e.iframe_click.track(document.getElementById("virtualWareIFrame"), function() {
            searchlog(1, 0, 0, 59, a)
        })
    }
    return a
};
SEARCH.relate_search = {html: null,init: function() {
        if (this.html === null) {
            var a = QUERY_KEYWORD, b = this;
            $.ajax({url: "http://qpsearch.jd.com/relationalSearch?keyword=" + encodeURIComponent(a).toLocaleLowerCase(),async: true,scriptCharset: "utf-8",dataType: "jsonp",success: function(c) {
                    b.callback(c)
                }})
        } else {
            if (this.html == "") {
                $("#dialogbox-gift").hide()
            } else {
                $("#dialogbox-gift").append(this.html)
            }
        }
    },callback: function(e) {
        if ("string" == typeof (e) && e.length > 0) {
            var g = e.replace(/\*$/, "").split("*"), a = [];
            for (var f = 0, d = g.length; f < d; f++) {
                if ("" == g[f]) {
                    continue
                }
                a.push(g[f])
            }
            var h = '<div class="related-search"><span>相关搜索：</span>';
            for (var f = 0, d = Math.min(7, a.length); f < d; f++) {
                var b = a[f], c = f == 0 ? ' class="fore"' : "", k = f == d - 1 ? "" : "<b></b>";
                h += "<a onclick='searchlog(1, 0, " + f + ', 52, "' + b + "\");' href='Search?keyword=" + encodeURIComponent(b) + "&enc=utf-8'" + c + ">" + b + "</a>" + k
            }
            h += "</div>";
            $("#dialogbox-gift").append(h);
            this.html = h
        } else {
            $("#dialogbox-gift").hide();
            this.html = ""
        }
    }};
SEARCH.get_book_summary = {fragment: ['<div class="img"><img src="{img}" width="280" height="280" alt="" /></div><div class="text"><table cellpadding="0" cellspacing="0" border="0" width="100%">{detaile}</table></div>', '<div class="summary"><div class="i-summary"><div class="close" onclick="$(this).parent().parent().hide()"></div><div class="arrow"></div><div class="con"><div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div></div></div>', "<tr><td>{name}{value}</td></tr>"],dataUrl: "http://d.360buy.com/bookExt/get?skuId=",edataUrl: "http://e.jd.com/ebook/ExteBookService.aspx?stype=search&skuid=",setPosition: function(a) {
        var c = $(a.get(0)).position(), b = window.pageConfig.wideVersion ? 360 : 120;
        c.left > b && a.find(".summary").addClass("direct-left")
    },init: function() {
        var a = this;
        $("#plist").find("li.item-book").not('[done="1"]').each(function(b) {
            this.setAttribute("done", "1");
            var c = $(this);
            c.find("img").bind("mouseover", function() {
                if ($("#plist").hasClass("plist-book")) {
                    return
                }
                var g = c.attr("bookid");
                c.css({"z-index": 4});
                c.find(".summary").length == 1 && c.find(".summary").show();
                if (!g) {
                    return false
                } else {
                    c.append(a.fragment[1]);
                    a.setPosition(c);
                    c.removeAttr("bookid");
                    var d = c.find(".con");
                    var f = (c.attr("e-tag") == "1");
                    var e = (!f ? a.dataUrl : a.edataUrl) + g + "&callback=?";
                    $.getJSON(e, function(q) {
                        q = q || {};
                        if (!q.img) {
                            q.img = c.find("img").attr("src").replace("/n2/", "/n1/")
                        } else {
                            q.img = "http://img10.360buyimg.com/n1/" + q.img
                        }
                        var j = "";
                        var h = "";
                        var l = "";
                        var o = "";
                        var m = f ? $.trim(q.FileFormat) : "";
                        var p = q.Author ? $.trim(q.Author) + " 著 " : "";
                        var k = q.Editer ? $.trim(q.Editer) + " 编 " : "";
                        var n = q.Transfer ? $.trim(q.Transfer) + " 译 " : "";
                        var i = q.Drawer ? $.trim(q.Drawer) + " 绘 " : "";
                        h = $.trim(p + k + n + i);
                        if (!h) {
                            h = "暂无"
                        }
                        if (m) {
                            if (m == "PDF" || m == "EXE" || m == "SWF" || m == "EPUB") {
                                l += '<b class="pc"></b>'
                            }
                            if (m == "EPUB" || m == "PDF") {
                                l += '<b class="iphone"></b><b class="ipad"></b>'
                            }
                            if (m == "APK" || m == "EPUB" || m == "PDF") {
                                l += '<b class="android"></b>'
                            }
                        }
                        if (h) {
                            o += a.fragment[2].replace("{name}", "作　　者：").replace("{value}", h)
                        }
                        if (q.Publishers) {
                            o += a.fragment[2].replace("{name}", "出 &nbsp;版 &nbsp;社：").replace("{value}", q.Publishers)
                        }
                        if (q.PublishTime) {
                            o += a.fragment[2].replace("{name}", "出版时间：").replace("{value}", q.PublishTime)
                        }
                        if (q.BatchNo > 0) {
                            o += a.fragment[2].replace("{name}", "版　　次：").replace("{value}", q.BatchNo)
                        }
                        if (q.Pages) {
                            o += a.fragment[2].replace("{name}", "页　　数：").replace("{value}", q.Pages)
                        }
                        if (q.PrintTime) {
                            o += a.fragment[2].replace("{name}", "印刷时间：").replace("{value}", q.PrintTime)
                        }
                        if (q.Format) {
                            o += a.fragment[2].replace("{name}", "开　　本：").replace("{value}", q.Format)
                        }
                        if (q.Papers) {
                            o += a.fragment[2].replace("{name}", "纸　　张：").replace("{value}", q.Papers)
                        }
                        if (q.PrintNo > 0) {
                            o += a.fragment[2].replace("{name}", "印　　数：").replace("{value}", q.PrintNo)
                        }
                        if (q.WordCount > 0) {
                            o += a.fragment[2].replace("{name}", "字　　数：").replace("{value}", q.WordCount)
                        }
                        if (m) {
                            o += a.fragment[2].replace("{name}", "文件格式：").replace("{value}", m)
                        }
                        if (q.ISBN) {
                            o += a.fragment[2].replace("{name}", "ＩＳＢＮ：").replace("{value}", q.ISBN)
                        }
                        if (q.FileSize > 0) {
                            o += a.fragment[2].replace("{name}", "文件大小：").replace("{value}", q.FileSize + "M")
                        }
                        if (l) {
                            o += a.fragment[2].replace("{name}", '<span class="carrier">\u652F\u6301\u8f7d\u4F53\uff1a</span>').replace("{value}", l)
                        }
                        j = a.fragment[0].replace(/\{img\}/, q.img).replace(/\{detaile\}/, o);
                        d.html(j)
                    })
                }
            }).bind("mouseout", function() {
                c.css({"z-index": 0}).find(".summary").hide()
            })
        })
    }};
SEARCH.get_shop_info = function(b, a) {
    if (b == "") {
        return
    } else {
        var c = this
    }
    $.ajax({url: "shop.php",data: {shop_id: b},dataType: "json",success: function(e) {
            if (typeof e != "object" || !e.name) {
                return
            }
            e.score = e.score || 0;
            e.full_score = (Math.floor(e.score * 10000) / 10000).toFixed(4);
            e.star = Math.round(14 * e.full_score);
            e.score = Math.floor(e.score * 100) / 100;
            e.visible = e.score > 0 ? "" : 'style="visibility:hidden"';
            e.score = e.score.toFixed(2);
            e.title = e.name;
            if (e.brief && e.brief.length > 20) {
                e.brief = e.brief.substr(0, 20) + "..."
            }
            if (!a) {
                e.name = window.pageConfig.wideVersion ? e.name.substr(0, 35) : e.name.substr(0, 20);
                var d = '<div class="store-logo"><a href="{#url#}" onclick="searchlog(1,' + b + ',0,58)" target="_blank"><img data-img="2" data-lazyload="{#logo#}"></a></div><div class="store-info"><h2><a href="{#url#}" title="{#title#}" onclick="searchlog(1,' + b + ',0,58)" target="_blank">{#name#}</a></h2><div class="shop-about">{#brief#}</div></div><div class="store-number" {#visible#}><dl><dd id="evaluate" title="{#full_score#}分">{#evaluate#}</dd></dl></div><a href="{#url#}" class="go-store" onclick="searchlog(1,' + b + ',0,58)" target="_blank">进入店铺</a>';
                var g = ((10 - e.full_score) * 10).toFixed(0);
                e.evaluate = '<em>服务评价：</em><span class="grade"><em style="left:-' + g + 'px"></em></span> ' + (Math.floor(10 * e.full_score) / 10).toFixed(1) + "分";
                d = c.util.template(d, e);
                if (d != "") {
                    $("#flagship-store").html(d).show()
                }
            } else {
                e.name = window.pageConfig.wideVersion ? e.name.substr(0, 14) : e.name.substr(0, 10);
                var f = $("#plist-shop").find('div[shop-id="' + b + '"] > .shop-info');
                if (e.logo) {
                    f.find(".shop-logo").html('<a href="' + e.url + '" title="' + e.title + '" target="_blank"><img data-img="2" width="135" height="45" data-lazyload="' + e.logo + '"></a>').show()
                } else {
                    f.find(".shop-logo").html('<a href="' + e.url + '" title="' + e.title + '" target="_blank"></a>').show()
                }
                f.find(".shop-sname a:eq(0)").html(e.name).attr({title: e.title,href: e.url}).parent().show();
                f.find(".phrase").html(e.brief).show();
                var g = ((10 - e.full_score) * 10).toFixed(0);
                f.find("dl.evaluate > dd").html('<span class="grade"><em style="left:-' + g + 'px"></em></span> ' + (Math.floor(10 * e.full_score) / 10).toFixed(1) + "分").attr("title", e.full_score + "分");
                if (e.visible) {
                    f.find("dl.evaluate").hide()
                } else {
                    f.find("em.evaluate-grade").find("strong").attr("title", e.full_score).find("a").html(e.score)
                }
                f.find("a.go-shop").attr("href", e.url)
            }
            $("img[data-lazyload]").Jlazyload({type: "image",placeholderClass: "err-product"})
        }})
};
SEARCH.get_multi_shops = function() {
    var b = this, a = $("#plist-shop");
    if (!a.length) {
        return false
    }
    a.find("div[shop-id]").not('[done="1"]').each(function() {
        this.setAttribute("done", "1");
        b.get_shop_info(this.getAttribute("shop-id"), true)
    })
};
SEARCH.get_im_info = function(a, b) {
    if (!a || !b) {
        return
    }
    $.ajax({url: "http://chat1.jd.com/api/checkChat?venderList=" + b,dataType: "jsonp",jsonp: "callback",scriptCharset: "utf-8",success: function(m) {
            if (typeof (m) != "object") {
                return
            }
            var d = {}, e = $("#store-selector").find(".text").text(), f = function(u, t, i) {
                var u = u == undefined ? "" : $.trim(u);
                var j = u.match(t), i = i == undefined ? 1 : i;
                return j === null ? "" : j[i]
            };
            for (var k = 0, h = m.length; k < h; k++) {
                d[m[k].shopId] = m[k]
            }
            for (var k = 0, h = a.length; k < h; k++) {
                var q = a.eq(k), s = d[q.attr("shop_id")], o = "", g = {};
                if (!s) {
                    continue
                }
                if (s.code == 1) {
                    o = '<i class="online" title="联系客服"></i>'
                } else {
                    if (s.code == 3) {
                        o = '<i class="offline" title="客服留言"></i>'
                    }
                }
                var n = $.trim(q.siblings(".stocklist").find("span").html());
                n = n == "暂不支持配送" ? n : n.substr(n.length - 2);
                g.stock = e + "（" + n + "）";
                g.pid = q.parent().parent().attr("sku");
                g.score = f(q.siblings(".extra").find("span.star-yellow").attr("class"), /star-yellow\s{1}h(\d+)/);
                g.evaluationRate = f(q.siblings(".extra").find("span.reputation").html(), /\((\d+)%好评\)/);
                g.commentNum = f(q.siblings(".extra").find("a").html(), /已有(\d+)人评价/);
                var r = q.siblings(".p-img").find("img");
                var l = r.attr("src");
                if (l == undefined || l == "http://misc.360buyimg.com/lib/img/e/blank.gif") {
                    l = r.attr("data-lazyload")
                }
                g.imgUrl = f(l, /http\S+?\.com\/\w+?\/(\S+)/);
                g.wname = f(q.siblings(".p-name").find("a").html().replace(/<span[\s\S]+?<\/span>|<font class="skcolor_ljg">|<\/font>/g, ""), /([\s\S]+?)<font style="color:#ff0000"[\s\S]+/);
                g.advertiseWord = $.trim(q.siblings(".p-name").find("font.adwords").html());
                g.seller = $.trim(s.seller);
                g.venderId = s.venderId;
                g.entry = "jd_search";
                var c = "http://chat.jd.com/index.action?";
                for (var p in g) {
                    c += p + "=" + encodeURI(encodeURI(g[p])) + "&"
                }
                q.find("a").html(q.find("a").html() + o).find("i").click((function(i) {
                    return function() {
                        window.open(i);
                        return false
                    }
                })(c))
            }
        }})
};
SEARCH.get_shop_name = function() {
    var e = this, c = $("#plist").find("div.service,div.shop-name").not('[done="1"]').filter("[shop_id]"), d = c.length;
    if (!d) {
        return false
    }
    for (var b = 0, a = []; b < d; b++) {
        c[b].setAttribute("done", "1");
        a.push(c[b].getAttribute("shop_id"))
    }
    $.getJSON("ShopName.php", {ids: a.unique().join(",")}, function(n) {
        if (typeof n != "object") {
            return
        }
        var f = {}, g = [], m = $("#plist").find("ul.list-h").attr("tpl");
        for (var k = 0, h = n.length; k < h; k++) {
            f[n[k].id] = n[k]
        }
        for (var k = 0; k < d; k++) {
            var o = c.eq(k), p = f[o.attr("shop_id")];
            if (!p) {
                continue
            }
            if (m != "1") {
                var l = '<a target="_blank" onclick="searchlog(1,' + p.id + ',0,58)" href="' + p.url + '" title="' + p.title + '">' + p.title + "</a>";
                m == "2" && (l = "由 " + l + " 发货");
                o.html(l);
                m == "3" && g.push($.trim(String(p.venderId)))
            }
        }
        e.get_im_info(c, g.unique().join(","))
    })
};
SEARCH.bind_events = {iplocation: (function(e, k) {
        var b = e("#store-selector");
        if (b.length == 0) {
            return function() {
            }
        }
        var n = '<div data-widget="tabs" class="m JD-stock" id="JD-stock"><div class="mt">    <ul class="tab">        <li data-index="0" data-widget="tab-item" class="curr"><a href="javascript:;" class="hover"><em>请选择</em><i></i></a></li>        <li data-index="1" data-widget="tab-item" style="display:none;"><a href="javascript:;" class=""><em>请选择</em><i></i></a></li>        <li data-index="2" data-widget="tab-item" style="display:none;"><a href="javascript:;" class=""><em>请选择</em><i></i></a></li>        <li data-index="3" data-widget="tab-item" style="display:none;"><a href="javascript:;" class=""><em>请选择</em><i></i></a></li>    </ul>    <div class="stock-line"></div></div><div class="mc" data-area="0" data-widget="tab-content">    <ul class="area-list">       <li><a href="javascript:;" data-value="1">北京</a></li><li><a href="javascript:;" data-value="2">上海</a></li><li><a href="javascript:;" data-value="3">天津</a></li><li><a href="javascript:;" data-value="4">重庆</a></li><li><a href="javascript:;" data-value="5">河北</a></li><li><a href="javascript:;" data-value="6">山西</a></li><li><a href="javascript:;" data-value="7">河南</a></li><li><a href="javascript:;" data-value="8">辽宁</a></li><li><a href="javascript:;" data-value="9">吉林</a></li><li><a href="javascript:;" data-value="10">黑龙江</a></li><li><a href="javascript:;" data-value="11">内蒙古</a></li><li><a href="javascript:;" data-value="12">江苏</a></li><li><a href="javascript:;" data-value="13">山东</a></li><li><a href="javascript:;" data-value="14">安徽</a></li><li><a href="javascript:;" data-value="15">浙江</a></li><li><a href="javascript:;" data-value="16">福建</a></li><li><a href="javascript:;" data-value="17">湖北</a></li><li><a href="javascript:;" data-value="18">湖南</a></li><li><a href="javascript:;" data-value="19">广东</a></li><li><a href="javascript:;" data-value="20">广西</a></li><li><a href="javascript:;" data-value="21">江西</a></li><li><a href="javascript:;" data-value="22">四川</a></li><li><a href="javascript:;" data-value="23">海南</a></li><li><a href="javascript:;" data-value="24">贵州</a></li><li><a href="javascript:;" data-value="25">云南</a></li><li><a href="javascript:;" data-value="26">西藏</a></li><li><a href="javascript:;" data-value="27">陕西</a></li><li><a href="javascript:;" data-value="28">甘肃</a></li><li><a href="javascript:;" data-value="29">青海</a></li><li><a href="javascript:;" data-value="30">宁夏</a></li><li><a href="javascript:;" data-value="31">新疆</a></li><li><a href="javascript:;" data-value="32">台湾</a></li><li><a href="javascript:;" data-value="42">香港</a></li><li><a href="javascript:;" data-value="43">澳门</a></li><li><a href="javascript:;" data-value="84">钓鱼岛</a></li>    </ul></div><div class="mc" data-area="1" data-widget="tab-content"></div><div class="mc" data-area="2" data-widget="tab-content"></div><div class="mc" data-area="3" data-widget="tab-content"></div></div><span class="clr"></span>';
        b.children(".content").html(n);
        var g = b.find("li[data-widget]"), d = b.find('div[data-widget="tab-content"]'), h = 3, c = [], f = true, i;
        function j(q) {
            var p = c[q], o = c[q - 1] || 0;
            return k.json_city[o][p] || ""
        }
        function a(o) {
            e(d[o - 1]).hide();
            e(d[o]).html('<div class="iloading">正在加载中，请稍候...</div>').show()
        }
        function m(r, o, p, q) {
            if (!o) {
                return
            }
            c[r - 1] = o;
            if (k.json_city[o]) {
                l(k.json_city[o], r, p, q)
            } else {
                if (r < h) {
                    a(r);
                    k.getAreaList_callback = function(v) {
                        if (!v) {
                            return
                        }
                        var s = {};
                        for (var u = 0, t = v.length; u < t; u++) {
                            s[String(v[u]["id"])] = v[u]["name"]
                        }
                        k.json_city[String(o)] = s;
                        l(s, r, p, q)
                    };
                    e.getJSONP("http://d.jd.com/area/get?fid=" + o + "&callback=getAreaList_callback")
                } else {
                    l([], r, p, q)
                }
            }
        }
        function l(y, o, A, C) {
            if (!C && (!i[o] || "0" == i[o])) {
                for (var v in y) {
                    break
                }
                i[o] = v
            }
            var u = j(o - 1);
            if (o > 0) {
                e(g[o - 1]).find("a").attr("title", u);
                e(g[o - 1]).find("em").html(u.substr(0, 6))
            }
            if (o >= h) {
                var z = "", D = k.SEARCH;
                for (var v = 0; v < 4; v++) {
                    if (c[v]) {
                        z += c[v] + "-"
                    } else {
                        z += "0-"
                    }
                }
                D.util.setCookie("ipLoc-djd", z.substring(0, z.length - 1), 30);
                D.util.setCookie("ipLocation", k.json_city[0][c[0]], 30);
                if (C) {
                    b.removeClass("hover");
                    k.location.href = k.location.pathname + "?" + D.util.filtUrl(D.base_url, "stock") + "&psort=" + D.psort + "&" + Math.random() + "#filter";
                    return false
                }
                var x = "";
                for (var v = 0, t = 3, q = 0; v < t; v++) {
                    if (k.json_city[q] && c[v] && k.json_city[q][c[v]]) {
                        x += k.json_city[q][c[v]]
                    }
                    q = c[v]
                }
                x = x.substr(0, 13) + "<b/>";
                b.children(".text").html(x);
                return
            } else {
                e(d[o - 1]).hide();
                e(g[o - 1]).removeClass("curr")
            }
            var w = '<ul class="area-list">', r = "", B = "";
            for (var p in y) {
                y[p] = y[p].replace(" ", "");
                if (y[p].length > 12) {
                    B += "<li class='longer-area'><a href='javascript:;' data-value='" + p + "'>" + y[p] + "</a></li>"
                } else {
                    if (y[p].length > 5) {
                        r += "<li class='long-area'><a href='javascript:;' data-value='" + p + "'>" + y[p] + "</a></li>"
                    } else {
                        w += "<li><a href='javascript:;' data-value='" + p + "'>" + y[p] + "</a></li>"
                    }
                }
            }
            w += r + B + "</ul>";
            e(d[o]).html(w).show();
            e(g[o]).addClass("curr").show().find("em").html("请选择");
            if (A) {
                A()
            }
        }
        return function() {
            b = e("#store-selector");
            b.children(".content").html(n);
            g = b.find("li[data-widget]");
            d = b.find('div[data-widget="tab-content"]');
            c = [];
            f = true;
            d.click(function(q) {
                f = false;
                var p = e(q.srcElement || q.target), o = parseInt(p.attr("data-value"), 10);
                if (!o) {
                    return
                }
                m(parseInt(p.parent().parent().parent().attr("data-area")) + 1, o, "", 1);
                return false
            });
            g.click(function(q) {
                f = false;
                var p = e(this), r = parseInt(p.attr("data-index"));
                if (r >= h - 1) {
                    return
                }
                for (var o = r + 1; o < h; o++) {
                    e(g[o]).hide();
                    e(d[o]).hide()
                }
                e(g[r]).addClass("curr");
                e(d[r]).show();
                return false
            });
            i = (readCookie("ipLoc-djd") || "").split("-");
            if (!i[0] || !k.json_city[0][i[0]]) {
                i = ["1"]
            }
            m(1, i[0], (function() {
                var o = 1, p = function() {
                    o++;
                    m(o, i[o - 1], p)
                };
                return p
            })());
            b.mouseover(function() {
                b.addClass("hover")
            }).mouseout(function() {
                if (f) {
                    b.removeClass("hover")
                }
            })
        }
    })($, window),box_search: function() {
        var a = $("#box-search");
        if (!a.length) {
            return
        }
        $.get("hub.php?keyword=" + encodeURIComponent(QUERY_KEYWORD) + "&enc=utf-8", function(b) {
            if (!b) {
                return
            }
            $("#virtualWareIFrame").hide();
            a.after(b).remove();
            $("#complex-onebox").each(function() {
                var c = $(this);
                c.Jtab({compatible: true}, function() {
                    c.find("div.extra").find("a").hide().eq(arguments[2]).show()
                })
            })
        })
    },baby_info: function() {
        if ($("#babyQueryAttr").length == 1) {
            $.delayLoad(false, "http://misc.360buyimg.com/201007/skin/df/cal.css");
            $.delayLoad(true, "http://misc.360buyimg.com/product/js/2013/jQuery.Jcal.min.js", "gbk", SEARCH.get_baby_info)
        }
    },brandFolded: function() {
        if ($.browser.isIE6) {
            $("#select").find(".attr").eq(0).css("border-top", "none")
        }
        var g = $("#select").find("div.brand-attr");
        if (!g.length) {
            return
        }
        var j = $("#brand-search"), h = g.find("div.tabcon"), i = h.children("div"), c = h.hasClass("show-logo"), b = window.pageConfig.wideVersion ? c ? 14 : 15 : c ? 10 : 12, l = g.find("ul.tab"), f = "可搜索拼音、汉字查找品牌", d = false, e;
        i.slice(b).css("display", "none");
        c && i.mouseover(function() {
            $(this).addClass("hover")
        }).mouseout(function() {
            $(this).removeClass("hover")
        });
        if (i.length <= b) {
            return
        }
        function k(o, n) {
            o.addClass("curr").siblings().removeClass("curr");
            j.val(f);
            e = "";
            if (n == "0") {
                i.css("display", "block")
            } else {
                i.css("display", "none").filter("[rel='" + n + "']").css("display", "block")
            }
        }
        var a, m = window.SEARCH;
        l.mouseover(function(o) {
            var n = $(o.target).attr("rel");
            if (n == undefined || e) {
                return
            }
            if (a) {
                clearTimeout(a)
            }
            a = setTimeout(function() {
                k($(o.target), n)
            }, 150)
        }).mouseout(function(n) {
            a && clearTimeout(a)
        }).click(function(o) {
            var n = $(o.target).attr("rel");
            if (n == undefined) {
                return
            }
            k($(o.target), n)
        });
        g.find("span.o-more").click(function() {
            if (!d) {
                h.removeClass().addClass(c ? "tabcon tabcon-multi show-logo height185" : "tabcon tabcon-multi");
                j.parent().removeClass("hide");
                i.css("display", "block");
                l.show()
            } else {
                h.removeClass(c ? "tabcon-multi height185" : "tabcon-multi");
                j.parent().addClass("hide");
                i.slice(0, b).css("display", "block");
                i.slice(b).css("display", "none");
                l.hide().find("li").removeClass("curr").eq(0).addClass("curr")
            }
            d = !d
        });
        window.brand_search_result = function(p) {
            if (typeof p != "object") {
                return
            }
            i.css("display", "none");
            for (var o = 0, n = p.length; o < n; o++) {
                if (p[o].id) {
                    $("#brand_id_" + p[o].id).css("display", "block")
                }
            }
        };
        j.val(f).click(function() {
            if (this.value == f) {
                this.value = "";
                var n = l.find(".curr");
                if (n.attr("rel") != "0") {
                    n.removeClass("curr");
                    l.find("li[rel='0']").addClass("curr");
                    i.css("display", "block")
                }
            }
            searchlog(1, 0, 0, 49)
        }).blur(function() {
            if (this.value == "") {
                this.value = f
            }
        }).keyup(function(o) {
            if (o.keyCode == 13) {
                var n = h.find("div:visible");
                if (n.length == 1) {
                    window.location.href = n.find("a").attr("href");
                    return false
                }
            }
            var p = $.trim(this.value);
            if (p == e) {
                return
            }
            if (p != "") {
                m.util.sGetScript("http://bsearch.jd.com/?callback=brand_search_result&ids=" + m.brand_ids + "&key=" + encodeURIComponent(p), "UTF-8", true)
            } else {
                i.css("display", "block")
            }
            e = p
        })
    },handle_more_multi: function(f) {
        var a = $("div.prop-attrs[done!=1]:visible").not("#babyQueryAttr");
        a.each(function() {
            var h = $(this), j = h.find("li"), i = h.find("ul").width(), g = 0;
            j.each(function() {
                g += $(this).outerWidth(true)
            });
            i < g && h.find("span.o-more").removeClass("hide");
            j.length < 3 && h.find("span.o-multiple").addClass("hide");
            h.attr("done", 1)
        });
        if (!f) {
            var d = $("#select").find("div.brand-attr"), e, c, b;
            if (d.length) {
                e = d.find("div[rel]").length;
                b = d.find("div.tabcon").hasClass("show-logo");
                c = window.pageConfig.wideVersion ? b ? 14 : 15 : b ? 10 : 12;
                if (e < 3) {
                    d.find(".v-option").addClass("hide")
                } else {
                    if (e <= c) {
                        d.find(".o-more").addClass("hide")
                    }
                }
            }
        }
    },bind_more_multi: function() {
        $("span.o-more").click(function(b) {
            var a = $(this);
            a.toggleClass("fold");
            a.parent().prev().toggleClass("v-unfold");
            if (a.attr("class") == "o-more") {
                a.html("<b></b>更多")
            } else {
                a.html("<b></b>收起")
            }
            if (b.hasOwnProperty("originalEvent")) {
                searchlog(1, 0, 0, 50)
            }
        });
        $("div.prop-attrs,div.color-attr").find("span.o-multiple").click(function(c) {
            $("#select").find("a.btn-gray:visible").not(".btn-price-range").click();
            var b = $(this), a = b.parents(".attr");
            b.parent().hide();
            a.addClass("attr-select");
            if (c.hasOwnProperty("originalEvent")) {
                searchlog(1, 0, 0, 24)
            }
        });
        $("div.brand-attr span.o-multiple").click(function(c) {
            $("#select").find("a.btn-gray:visible").not(".btn-price-range,.btn-submit,.tc-btn").click();
            var b = $(this), a = $("div.brand-attr");
            if (!a.find(".o-more").hasClass("fold")) {
                a.find(".o-more").click()
            }
            b.parent().hide();
            a.children().addClass("attr-select");
            a.find(".selected").removeClass("selected");
            a.find(".dd").html("");
            if (c.hasOwnProperty("originalEvent")) {
                searchlog(1, 0, 0, 24)
            }
        });
        $("a.btn-red").click(function() {
            if (!$(this).hasClass("disabled")) {
                searchlog(1, 0, 0, 25);
                window.location.href = window.location.pathname + "?" + MS.submit_url() + "#select"
            }
            return false
        });
        $("a.btn-gray").not(".btn-price-range").click(function(b) {
            var a = $(this), c = a.parents(".attr-select");
            c.find("a.curr").removeClass("curr");
            c.find(".selected").removeClass("selected");
            c.removeClass("attr-select").find("a.btn-red").addClass("disabled");
            delete MS.selected_attr;
            c.find(".v-option").show();
            if (c.find(".o-more").hasClass("fold")) {
                c.find(".o-more").click()
            }
            if (c.parent().hasClass("brand-attr")) {
                c.find(".s-brands").css("display", "none");
                c.find("li[rel]").removeClass("curr").eq(0).addClass("curr")
            }
            if (b.hasOwnProperty("originalEvent")) {
                searchlog(1, 0, 0, 24)
            }
            return false
        })
    },priceSelect: function() {
        var b = $("#select"), a = b.find("input.price-range");
        if (!a.length) {
            return
        }
        a.keypress(function(d) {
            var c = d.keyCode || d.charCode;
            if (c && (c < 48 || c > 57) && c != 46 && c != 8 && c != 37 && c != 39) {
                d.preventDefault()
            }
        }).blur(function(g) {
            var d = $(this), c = $.trim(d.val()), f = new RegExp("^[0-9]+(.[0-9]{2})?$", "g");
            if (!f.test(c)) {
                d.val("")
            }
            g.stopPropagation()
        });
        b.find("a.btn-price-range").click(function() {
            var f = a.eq(0).val(), c = a.eq(1).val(), d = $(this).attr("url");
            f = parseInt(f, 10);
            c = parseInt(c, 10);
            if (!isNaN(f) && !isNaN(c)) {
                if (f > c) {
                    var e = f;
                    f = c;
                    c = e
                }
                searchlog(1, 0, 0, 22, "价格::" + f + "-" + c);
                d = d.replace("min", f).replace("max", c)
            } else {
                if (!isNaN(f)) {
                    searchlog(1, 0, 0, 22, "价格::" + f + "gt");
                    d = d.replace("min", f).replace("-max", "gt")
                } else {
                    if (!isNaN(c)) {
                        searchlog(1, 0, 0, 22, "价格::0-" + c);
                        d = d.replace("min", 0).replace("max", c)
                    } else {
                        return false
                    }
                }
            }
            window.location.href = SEARCH.util.filtUrl(d, "psort", SEARCH.psort)
        })
    },viewTypeSelect: function() {
        var a = window.SEARCH;
        a.view_type = 2;
        if ($("#grid-unselected").hasClass("grid-curr")) {
            a.view_type = 2
        } else {
            if ($("#shop-unselected").hasClass("shop-curr")) {
                a.view_type = 3
            }
        }
        $("#list-unselected").click(function() {
            $(this).addClass("list-curr");
            $("#grid-unselected").removeClass("grid-curr").addClass("grid-unselected");
            $("#plist").addClass("plist-book");
            a.view_type = 1;
            a.util.bind_attr_href("vt", 1)
        });
        $("#grid-unselected").click(function() {
            $(this).addClass("grid-curr");
            $("#list-unselected").removeClass("list-curr").addClass("list-unselected");
            $("#plist").removeClass("plist-book");
            a.view_type = 2;
            a.util.bind_attr_href("vt", 2)
        })
    },reSearch: function() {
        var d = $("#text-stock-search"), c = $("#btn-stock-search"), a = "在结果中搜索";
        function b() {
            if ($.trim(d.val()) != "" && $.trim(d.val()) != a) {
                searchlog(1, 0, 0, 27);
                window.location.href = c.attr("url") + encodeURIComponent($.trim(d.val())) + "#filter";
                return false
            }
        }
        d.focus(function() {
            if ($.trim(d.val()) == a) {
                d.val("")
            }
        }).blur(function() {
            if ($.trim(d.val()) == "") {
                d.val(a)
            }
        }).keydown(function(f) {
            if (f.keyCode == 13) {
                b()
            }
        });
        c.click(function() {
            b()
        })
    },init: function() {
        for (var a in this) {
            a != "init" && this[a]()
        }
        GS.init()
    }};
SEARCH.top_page_html = function(d, e, g, b) {
    if (b) {
        this.page_num = d;
        d = Math.ceil(d / 2);
        e = Math.ceil(e / 2);
        var a = 2 * d - 3, f = 2 * d + 1
    } else {
        var a = d - 1, f = d + 1
    }
    var c = '<span class="text"><i>' + d + "</i>/" + e + "</span>";
    if (d <= 1) {
        c += '<span class="prev-disabled">上一页<b></b></span>'
    } else {
        c += '<a onclick="SEARCH.page(' + a + ')" href="javascript:;" class="prev" title="使用方向键左键也可翻到上一页哦！">上一页<b></b></a>'
    }
    if (d >= e) {
        c += '<span class="next-disabled">下一页<b></b></span>'
    } else {
        c += '<a onclick="SEARCH.page(' + f + ')" href="javascript:;" class="next" title="使用方向键右键也可翻到下一页哦！">下一页<b></b></a>'
    }
    $("#top_pagi").html(c);
    $("#res_count").html(g)
};
SEARCH.bottom_page_html = function(e, k, j) {
    if (j) {
        this.page_num = e;
        e = Math.ceil(e / 2);
        k = Math.ceil(k / 2);
        var d = 2 * e - 3, g = 2 * e + 1
    } else {
        var d = e - 1, g = e + 1
    }
    if (k < 0) {
        return ""
    }
    var a = e - 2, b = Math.min(k, e + 2), f = "";
    if (b < 7) {
        b = Math.min(7, k)
    } else {
        a = b - 4
    }
    if (e <= 1) {
        f += '<span class="prev-disabled">上一页<b></b></span>'
    } else {
        f += '<a onclick="SEARCH.page(' + d + ', true)" href="javascript:;" class="prev" title="使用方向键左键也可翻到上一页哦！">上一页<b></b></a>'
    }
    for (var h = 1; h <= k; h++) {
        if (h <= 2 || h >= a && h <= b) {
            f += h == e ? '<a href="javascript:;" class="current">' + h + "</a>" : '<a onclick="SEARCH.page(' + (j ? 2 * h - 1 : h) + ', true)" href="javascript:;">' + h + "</a>"
        } else {
            if (h < a) {
                f += '<span class="text">…</span>';
                h = a - 1
            } else {
                if (h > b) {
                    f += '<span class="text">…</span>';
                    break
                }
            }
        }
    }
    if (e >= k) {
        f += '<span class="next-disabled">下一页<b></b></span>'
    } else {
        f += '<a onclick="SEARCH.page(' + g + ', true)" href="javascript:;" class="next" title="使用方向键右键也可翻到下一页哦！">下一页<b></b></a>'
    }
    f += '<span class="page-skip"><em>&nbsp;&nbsp;共' + k + '页&nbsp;&nbsp;&nbsp;&nbsp;到第</em><input class="jumpto" type="text" value="' + e + '" onkeydown="javascript:if(event.keyCode==13){SEARCH.page_jump(' + k + "," + j + ');return false;}"/><em>页</em><a class="btn-skipsearch" value="确定" onclick="SEARCH.page_jump(' + k + "," + j + ')" href="javascript:;">确定</a></span>';
    $("#pagin-btm").html(f)
};
SEARCH.page = function(b, a) {
    b = parseInt(b, 10);
    if (b < 1) {
        b = 1
    }
    window.location = "http://localhost:8102/search.html?q="+SEARCH.query+"&page="+b;
//    if (a) {
//        window.scrollTo(0, $("#filter").offset().top)
//    }
   // searchlog(1, b, 0, 56)
};
SEARCH.page_jump = function(b, a) {
    var c = parseInt($("#pagin-btm .jumpto").val(), 10);
    if (isNaN(c)) {
        c = 1
    }
    if (c > b) {
        c = b
    }
    return a ? this.page(2 * c - 1, true) : this.page(c, true), false
};
SEARCH.sort_html = function(c) {
    c = c || "";
    if (c == "0") {
        c = ""
    }
    var b = "<dt>排序：</dt>", a = '<dd class="#class#"><a href="javascript:;" onclick="#click#">#name#</a><b></b></dd>', d = class_name = "";
    if (c == "") {
        class_name = "curr"
    } else {
        d = "SEARCH.sort('')"
    }
    b += a.replace("#class#", class_name).replace("#click#", d).replace("#name#", "相关度");
    class_name = d = "";
    if (c == "3") {
        class_name = "curr down"
    } else {
        d = "SEARCH.sort('3')"
    }
    b += a.replace("#class#", class_name).replace("#click#", d).replace("#name#", "销量");
    if (c == "2") {
        class_name = "price curr up";
        d = "SEARCH.sort('1')"
    } else {
        if (c == "1") {
            class_name = "price curr down";
            d = "SEARCH.sort('2')"
        } else {
            class_name = "";
            d = "SEARCH.sort('2')"
        }
    }
    b += a.replace("#class#", class_name).replace("#click#", d).replace("#name#", "价格");
    class_name = d = "";
    if (c == "4") {
        class_name = "curr"
    } else {
        d = "SEARCH.sort('4')"
    }
    b += a.replace("#class#", class_name).replace("#click#", d).replace("#name#", "评论数");
    if ($("#list-unselected").length > 0) {
        class_name = d = "";
        if (c == "6") {
            class_name = "curr"
        } else {
            d = "SEARCH.sort('6')"
        }
        b += a.replace("#class#", class_name).replace("#click#", d).replace("#name#", "出版时间")
    } else {
        class_name = d = "";
        if (c == "5") {
            class_name = "curr"
        } else {
            d = "SEARCH.sort('5')"
        }
        b += a.replace("#class#", class_name).replace("#click#", d).replace("#name#", "上架时间")
    }
    $("#filter").find("dl.order").html(b)
};
SEARCH.sort = function(a) {
    a = a || "";
    if (a == "0") {
        a = ""
    }
    window.location.hash = this.base_url + "&psort=" + a;
    searchlog(1, a, 0, 55);
    this.util.bind_attr_href("psort", a)
};
SEARCH.scroll = function() {
    var e = this.page_num + 1, d = $("#plist").find("ul.list-h").attr("tpl") + ($("#plist").hasClass("plist-n8") ? "_L" : "_M"), b = $("#scroll_loading"), f = b.attr("data-start"), a = b.attr("data-log-id");
    var c = "s.php?" + this.base_url + "&psort=" + this.psort + "&page=" + e + "&scrolling=y&start=" + f + "&log_id=" + a + "&tpl=" + d;
    this.load(c, true);
    searchlog(1, e, 0, 56)
};
SEARCH.load = function(b, a) {
    if (this.loading) {
        return false
    } else {
        this.loading = true
    }
    var f = this, e = $("#plist"), d = f.util.getQueryString("click", b), c = a ? 1 : d == f.click ? 2 : 3;
    if (c == 3) {
        b = f.util.filtUrl(b, "cs", "y");
        b = f.util.filtUrl(b, "vt", f.view_type == 3 ? "" : f.view_type);
        b = f.util.filtUrl(b, "psort", f.psort)
    } else {
        b = f.util.filtUrl(b, "cs");
        b = f.util.filtUrl(b, "vt", f.view_type)
    }
    $.ajax({url: b.replace(/[\s&]*$/g, ""),timeout: 10000,error: function() {
            if (c == 1) {
                $("#scroll_loading").find("div").html('<b></b>加载失败，请<a href="javascript:void(0)" onclick="SEARCH.load(\'' + b + '\', true)"><font color="blue">重试</font></a>')
            } else {
                $("#search_loading").find("div").css("background", "none").html("加载失败，请<a href=\"javascript:void(0)\" onclick=\"$('#search_loading').remove();SEARCH.load('" + b + '\', false);"><font color="blue">重试</font></a>')
            }
        },beforeSend: function() {
            if (c == 1) {
                $("#scroll_loading").find("div").html("<b></b>正在加载中，请稍候...").find("b").css("display", "block")
            } else {
                e.prepend('<div id="search_loading" class="loading-in"><div>正在加载中，请稍候~~</div></div><div class="clr"></div>');
                if (c == 3) {
                    $("#refilter").find("h2").html('<a href="' + f.top_url + '">查看所有类目</a>');
                    $("#refilter").find("h3 a, li").removeClass("curr");
                    d && $("#category-" + d).length && $("#category-" + d).offset().top > $(window).height() && window.scrollTo(0, $("#select").offset().top);
                    $("#shop-choice").html("").hide();
                    $("#ad_left").html("").hide()
                }
            }
        },success: function(h) {
            if (c == 1) {
                $("#scroll_loading").remove();
                var g = $("#plist-shop").length ? $("#plist-shop") : e.find("ul.list-h");
                g.append(h)
            } else {
                if (c == 2) {
                    e.html(h)
                } else {
                    $(".right-extra").html(h);
                    f.bind_events.init();
                    f.relate_search.init();
                    f.cid_style()
                }
            }
            f.success_js(c)
        },complete: function() {
            f.loading = false
        }})
};
SEARCH.success_js = function(a) {
    this.get_ware_info();
    this.get_multi_shops();
    this.image_scroll('#plist li:not([done="1"]) .p-scroll');
    pageConfig.FN_ImgError(document);
    $("img[data-lazyload]").Jlazyload({type: "image",placeholderClass: "err-product"});
    pageConfig.isInitContrast = false;
    pageConfig.FN_InitContrast();
    $.delayLoad(true, "script/digital_music_download.js?100.js", "utf-8", "", 'li[e-tag!="1"] a.free-download');
    a != 1 && searchlog(0, 0)
};
MS = window.MS || {};
MS.interval_time = 0;
MS.get_last_attr = function(b) {
    if (b) {
        var a = b.split("%40");
        return a[a.length - 2]
    } else {
        return ""
    }
};
MS.attr_click = function(h, c) {
    if ($(h).parents(".attr").hasClass("attr-select")) {
        var j = window.event || arguments.callee.caller.arguments[0];
        if (j.preventDefault) {
            j.preventDefault();
            j.stopPropagation()
        } else {
            j.returnValue = false;
            j.cancelBubble = true
        }
        var k, g, i = $(h), l = i.parents(".attr").parent();
        this.selected_attr = this.selected_attr || [0, {}];
        if (l.attr("class") == "color-attr") {
            k = i;
            g = "curr"
        } else {
            k = i.parent();
            g = "selected"
        }
        i.trigger("blur");
        var f = i.offset(), n = f.left - 50, m = f.top - 26;
        var b = $('<span id="max-notice" style="position:absolute;left:' + n + "px;top:" + m + 'px;z-index:100;border:1px solid #EDD28B;background:#FFFDEE;">已超过可选选项个数最大值喽！</span>');
        if (k.hasClass(g)) {
            this.selected_attr[0]--;
            k.removeClass(g);
            if (i.parent().attr("rel")) {
                $("div.s-brands a").each(function() {
                    if ($(this).attr("title") == i.attr("title")) {
                        $(this).remove();
                        return false
                    }
                })
            }
            delete this.selected_attr[1][c]
        } else {
            if (this.selected_attr[0] >= 5) {
                if ($("#max-notice").is(":visible")) {
                    return false
                }
                b.prependTo("body");
                setTimeout(function() {
                    b.animate({opacity: 0}, 500, function() {
                        b.remove()
                    })
                }, 2000);
                return false
            } else {
                this.selected_attr[0]++;
                k.addClass(g);
                if (i.parent().attr("rel") && (i.parent().siblings().length > (window.pageConfig.wideVersion ? 30 : 24))) {
                    var a = '<a href="' + i.attr("href") + '" icon="' + i.parent().attr("id") + '" title="' + i.attr("title") + '" onclick="MS.selected_brand_click(this);return false;" data="' + c + '">' + i.text() + "</a>";
                    $("div.s-brands").css("display", "block").find(".dd").append(a)
                }
                this.selected_attr[1][c] = this.get_last_attr(SEARCH.util.getQueryString("ev", i.attr("href")))
            }
        }
        this.submit_style(l);
        var d = new Date().getTime();
        if (d - this.interval_time > 800) {
            $.get("WareCount.php?" + this.submit_url(), (function(e) {
                return function(o) {
                    if (MS.LastModified > e || !o) {
                        return
                    }
                    MS.LastModified = e;
                    b.html("当前选择条件下，约有" + o + "个" + SEARCH.search_type).prependTo("body");
                    setTimeout(function() {
                        b.animate({opacity: 0}, 500, function() {
                            b.remove()
                        })
                    }, 2000)
                }
            })(d));
            this.interval_time = d
        }
    } else {
        searchlog(1, 0, 0, 71, c)
    }
};
MS.selected_brand_click = function(c) {
    var b = $(c), a = b.attr("data");
    b.remove();
    this.selected_attr[0]--;
    delete this.selected_attr[1][a];
    $("#" + b.attr("icon")).removeClass("selected");
    this.submit_style($("div.brand-attr"))
};
MS.submit_style = function(a) {
    if (this.selected_attr[0]) {
        a.find("a.btn-red").removeClass("disabled")
    } else {
        a.find("a.btn-red").addClass("disabled");
        if (a.hasClass("brand-attr")) {
            $("div.s-brands").css("display", "none")
        }
    }
};
MS.submit_url = function() {
    var e = "", d = "", c = window.SEARCH, b = c.util.filtUrl(c.base_url, "click");
    for (var a in this.selected_attr[1]) {
        if (this.selected_attr[1][a]) {
            d += this.selected_attr[1][a] + "%7C%7C"
        }
    }
    if (d) {
        var f = d.substring(0, d.indexOf("_") + 1);
        d = d.substring(0, d.lastIndexOf("%7C%7C")).replace(new RegExp(f, "g"), "");
        e += f + d + "%40"
    }
    b += "&psort=" + c.psort;
    b = c.util.filtUrl(b, "ev", c.util.getQueryString("ev", b) + e);
    b = c.util.filtUrl(b, "vt", c.view_type);
    return b
};
(function(a) {
    a.fn.imgScroll = function(b, e) {
        var d = {evtType: "click",visible: 1,direction: "x",next: "#next",prev: "#prev",disableClass: "disabled",disableClassPerfix: false,speed: 300,step: 1,showControl: false,width: null,height: null,navItems: false,navItmesWrapClass: "scroll-nav-wrap",navItemActivedClass: "current"};
        var c = a.extend(d, b);
        return this.each(function() {
            var s = a(this), v = s.find("ul").eq(0), f = v.find("li"), D = f.length, o = null, k = null, j = typeof c.next == "string" ? a(c.next) : c.next, h = typeof c.prev == "string" ? a(c.prev) : c.prev, y = 0, p = c.step, i = c.visible, G = Math.ceil((D - i) / p) + 1, x = c.direction, w = c.evtType, n = c.disableClass, E = c.disableClassPerfix ? "prev-" + n : n, F = c.disableClassPerfix ? "next-" + n : n, r = c.navItems, A = c.navItmesWrapClass, u = c.navItemActivedClass, t = false, q = true, C = (D - i) % p == 0;
            function B(H) {
                if (D >= p + i) {
                    h.addClass(E);
                    j.removeClass(F)
                } else {
                    j.addClass(F)
                }
                if (f.eq(0).css("float") !== "left") {
                    f.css("float", "left")
                }
                o = c.width || f.eq(0).outerWidth();
                k = c.height || f.eq(0).outerHeight();
                s.css({position: s.css("position") == "static" ? "relative" : s.css("position"),width: H == "x" ? o * i : o,height: H == "x" ? k : k * i,overflow: "hidden"});
                v.css({position: "absolute",width: H == "x" ? o * D : o,height: H == "x" ? k : k * D,top: 0,left: 0})
            }
            function m(H, I) {
                if (v.is(":animated")) {
                    return false
                }
                if (q && I || t && !I) {
                    return false
                } else {
                    H = I ? --y : ++y
                }
                v.animate(x == "x" ? {left: H >= (G - 1) ? -(D - i) * o : -H * p * o} : {top: H >= (G - 1) ? -(D - i) * k : -H * p * k}, b.speed, function() {
                    if (D - H * p <= i) {
                        j.addClass(F);
                        t = true
                    } else {
                        j.removeClass(F);
                        t = false
                    }
                    if (H <= 0) {
                        h.addClass(E);
                        q = true
                    } else {
                        h.removeClass(E);
                        q = false
                    }
                    if (r) {
                        z(H)
                    }
                    if (typeof e == "function") {
                        e.apply(s, [H, G, f.slice(H * p, H * p + i), f.slice(H * p + i - p, H * p + i)])
                    }
                })
            }
            function g(J, H) {
                var J = a('<div class="' + J + '"></div>');
                for (var I = 0; I < G; I++) {
                    J.append("<em " + (I == 0 ? " class=" + H : "") + ' title="' + (I + 1) + '">' + (I + 1) + "</em>")
                }
                s.after(J)
            }
            function z(H) {
                if (a("." + A).length > 0) {
                    a("." + A).find("em").removeClass(u).eq(H).addClass(u)
                }
            }
            function l() {
                h.unbind(w).bind(w, function() {
                    m(y, true)
                });
                j.unbind(w).bind(w, function() {
                    m(y, false)
                })
            }
            if (D > i && i >= p) {
                B(x);
                l();
                if (r) {
                    g(A, u)
                }
            } else {
                if (c.showControl) {
                    j.add(h).show()
                } else {
                    j.add(h).hide()
                }
                h.addClass(E);
                j.addClass(F)
            }
        })
    }
})(jQuery);
SEARCH.image_scroll = function(a) {
    var b = $("#plist").hasClass("plist-n2") ? "n2" : $("#plist").hasClass("plist-n8") ? "n8" : "n7";
    $(a).each(function() {
        var d = $(this).find(".p-scroll-wrap"), f = $(this).find(".p-scroll-prev"), e = $(this).find(".p-scroll-next"), c = $(this).find("li").length;
        if (c > 5) {
            f.css("display", "inline");
            e.css("display", "inline");
            d.imgScroll({visible: 5,showControl: false,next: e,prev: f})
        }
        d.find("img").each(function() {
            $(this).mouseover(function() {
                var k = $(this).attr("src"), l = $(this).attr("data-skuid");
                d.find("a").removeClass("curr");
                $(this).parent("a").addClass("curr");
                var j = $(this).parents("li").find(".p-img img").eq(0), i = $(this).parents("li").find(".p-img a").eq(0), h = $(this).parents("li").find(".p-name a").eq(0), g = $(this).parents("li").find(".product-follow a").eq(0);
                j.attr("src", k.replace(/\/n[95]\//, "/" + b + "/"));
                i.attr("href", i.attr("href").replace(/\/\d{6,}/, "/" + l));
                h.attr("href", h.attr("href").replace(/\/\d{6,}/, "/" + l));
                if (g.length > 0) {
                    g.attr("id", g.attr("id").replace(/coll\d{6,}/, "coll" + l))
                }
            })
        })
    });
    $("#plist.plist-" + b).not(".no-preview").find("ul.list-h>li").not('[done="1"]').hover(function() {
        $(this).addClass("hover").find(".product-follow,.shop-name").show();
        $(this).find(".item-wrap").addClass("item-hover")
    }, function() {
        $(this).removeClass("hover").find(".item-wrap").removeClass("item-hover");
        $(this).find(".product-follow,.shop-name").hide()
    }).attr("done", "1")
};
window.surveyShowIndex = 0;
function surveyShow() {
    var a = $.delayLoad(false, "survey/css/surveyShowWindow.css"), b = $.delayLoad(true, "survey/js/surveyShowWindow.js?20140826.js", "utf-8");
    if (surveyShowIndex === 0 && a && b) {
        surveyWindowShow()
    } else {
        if (surveyShowIndex == 1) {
            surveyWindowHide()
        }
    }
}
function ebook_download(b, a) {
    $.login({modal: true,complete: function(c) {
            if (c != null && c.IsAuthenticated != null && c.IsAuthenticated) {
                var d = "http://gw.e.jd.com/downrecord/downrecord_insert.action?ebookId=" + b + "&key=" + a + "&callback=?";
                $.getJSON(d, function(f) {
                    if (f.code == 1) {
                        var e = confirm("如您已安装XBinLeBook客户端，请点击“确定”自动启动客户端\n如您尚未安装XBinLeBook客户端，请点击“取消”将引导您免费安装客户端");
                        if (e == true) {
                            window.location = "LEBK:///Bought"
                        } else {
                            if (confirm('如果您没有安装LeBook客户端，请点击"确定"按钮到XBin网站下载\n如果您不需要安装，请点击"取消"按钮')) {
                                window.open("http://e.jd.com/ebook/lebook_pc.aspx")
                            }
                        }
                        return
                    } else {
                        alert(f.message)
                    }
                })
            }
        }})
}
SEARCH.get_digital_price = function(b, a) {
    $.getJSON("http://p.3.cn/prices/mgets?skuids=" + b + "&area=" + a.replace(/-/g, "_") + "&type=1&callback=?", function(c) {
        SEARCH.set_digital_price_data(c)
    })
};
SEARCH.get_ware_stock = function(b, a) {
    $.getJSON("http://search.jd.com/stock?skus=" + b.replace(/J_/g, "") + "&district=" + a.split("-").slice(0, 3).join("_") + "&callback=?", function(c) {
        SEARCH.set_ware_stock_data(c)
    })
};
SEARCH.get_prompt_adwords = function(a) {
    $.getJSON("http://ad.3.cn/ads/mgets?skuids=" + a.replace(/J_/g, "AD_") + "&callback=?", function(b) {
        SEARCH.set_prompt_adwords_data(b)
    })
};
SEARCH.get_prompt_flag = function(a) {
    $.getJSON("http://pf.3.cn/flags/mgets?skuids=" + a + "&callback=?", function(b) {
        SEARCH.set_prompt_flag_data(b)
    })
};
SEARCH.get_comment_nums = function(a, b) {
    $.getJSON("http://club.jd.com/clubservice/summary-m-" + a.replace(/J_/g, "") + ".html?callback=?", function(c) {
        SEARCH.set_comment_nums_data(c, b)
    })
};
SEARCH.get_presale_info = function() {
    if (!window._enable_presale) {
        return false
    }
    var d = $("#plist"), b = d.find('a[presale="1"]').not('[p-done="1"]');
    if (window._presale_interval) {
        clearInterval(_presale_interval)
    }
    if (b.length == 0) {
        return false
    }
    var f = d.find("ul.list-h").attr("tpl") == "1", e = false, a = function(h, g) {
        h = h.toString();
        return h.length >= g ? h : a("0" + h, g)
    }, c = function(j) {
        var h = Math.floor(j / 86400);
        j -= h * 86400;
        var g = Math.floor(j / 3600);
        j -= g * 3600;
        g = a(g, 2);
        var k = Math.floor(j / 60);
        j -= k * 60;
        k = a(k, 2);
        var i = a(j, 2);
        return h > 0 ? "剩余" + h + "天" + g + "时" + k + "分" : "剩余" + g + "时" + k + "分" + i + "秒"
    };
    b.each(function() {
        this.setAttribute("p-done", "1");
        var h = $(this).parents("li"), g = h.attr("sku");
        if (!g) {
            return false
        }
        $.getJSON("http://soa.yushou.jd.com/yushoulistinfo.action?sku=" + g + "&callback=?", function(o) {
            if (typeof (o) != "object" || o.type == "1" || !o.ret) {
                return false
            }
            var q = o.ret, l = q.d;
            var n = q.s == "0" ? "未开始" : "预售中";
            var s = '<div class="prebuy-time" time="' + l + '"><div class="pt-bg"></div><i></i><span>' + n + "</span><em>" + c(l) + "</em></div>";
            h.find("div.p-img").find("a").append(s);
            if (q.cp) {
                h.find("div.p-price").find("strong").html("￥" + q.cp)
            }
            if (q.cc) {
                h.find("div.p-price").append('<i class="prebuy-num">（已有' + q.cc + "人预定）</i>")
            }
            if (q.t == "2" && q.sa) {
                var k = '<div clstag="" class="sp-stage clearfix">', r;
                for (var p = 0, m = q.sa.length; p < m; p++) {
                    r = "";
                    if (typeof (q.cs) != "undefined") {
                        if ((p + 1) < q.cs) {
                            r = " timeout"
                        } else {
                            if ((p + 1) == q.cs) {
                                r = " curr"
                            }
                        }
                    }
                    k += '<span class="item' + r + '"><a href="javascript:void(0)"><em>满' + q.sa[p].c + "人</em>";
                    k += "<strong>￥" + q.sa[p].m + '</strong></a><i class="bottom"><em></em></i></span>'
                }
                k += "</div>";
                h.find("div.p-price").after(k)
            }
            if (f) {
                h.addClass("prebuy-item").hover(function() {
                    h.addClass("hover")
                }, function() {
                    h.removeClass("hover")
                });
                h.find("a[stock]").html("立即预定")
            }
            e = true
        })
    });
    window._presale_interval = setInterval(function() {
        if (e) {
            d.find("div.prebuy-time").each(function() {
                var g = $(this).attr("time");
                g = parseInt(g, 10) - 1;
                if (g) {
                    $(this).attr("time", g).find("em").html(c(g))
                } else {
                    $(this).remove()
                }
            })
        }
    }, 1000)
};
SEARCH.digital_music_summmary = function() {
    if ($("#list-unselected").length < 1) {
        return false
    }
    var a = "";
    $("#plist").find("div.p-summary").not('[done="1"]').each(function(b) {
        this.setAttribute("done", "1");
        var c = this.id.split("-")[1];
        if (c >= 60000000 && c < 70000000) {
            a += c + ","
        }
    });
    if (a) {
        $.ajax({url: "DigitalMusicSummary.php",cache: false,timeout: 5000,data: {ids: a},dataType: "json",success: function(c) {
                if (!c) {
                    return
                }
                for (var b in c) {
                    c[b] && $("#summary-" + b).html(c[b])
                }
            }})
    }
};
SEARCH.get_ware_info = function() {
    var b = [], a = readCookie("ipLoc-djd") || "";
    $("strong[class^='J_']").not('[done="1"]').each(function() {
        this.setAttribute("done", "1");
        b.push(this.className)
    });
    b = b.join(",");
    if (!b) {
        return
    }
    if (this.enable_merge_request) {
        this.get_ware_info_merge(b, a)
    } else {
        this.get_digital_price(b, a), this.get_ware_stock(b, a), this.get_prompt_adwords(b), this.get_prompt_flag(b), this.get_comment_nums(b)
    }
    this.get_shop_name(), this.digital_music_summmary(), this.get_book_summary.init(), this.get_presale_info()
};
SEARCH.set_digital_price_data = function(c) {
    if (typeof c == "object") {
        for (var b = 0, a = c.length, e = "", f = ""; b < a; b++) {
            if (c[b].p < 0) {
                e = "暂无报价";
                f = ""
            } else {
                if (c[b].p == 0) {
                    e = "免费";
                    f = ""
                } else {
                    e = "￥" + c[b].p;
                    f = c[b].m == undefined || c[b].m == "0" || parseFloat(c[b].p) >= parseFloat(c[b].m) ? "" : "（" + (Math.ceil(c[b].p / c[b].m * 100) / 10).toFixed(1) + "折）"
                }
            }
            $("strong." + c[b].id).html(e).next("span.discount").html(f)
        }
    }
};
SEARCH.set_prompt_flag_data = function(e) {
    if (!e || typeof e !== "object") {
        return
    }
    for (var d = 0, a = e.length; d < a; d++) {
        var g = e[d], f = $("#p" + g.pid);
        f.prepend(b(g.pf, f.find("a").length))
    }
    function b(o, p) {
        if (!o || p == 2) {
            return
        }
        var j = [];
        for (var n = 0, h = o.length; n < h; n++) {
            switch (o[n]) {
                case 1:
                    j[2] = '<a class="pt1" title="本商品正在降价销售中">直降</a>';
                    break;
                case 5:
                    j[3] = '<a class="pt2" title="购买本商品送赠品">赠品</a>';
                    break;
                case 3:
                    j[4] = '<a class="pt3" title="购买本商品返优惠券">返券</a>';
                    break;
                case 4:
                    j[5] = '<a class="pt4" title="购买本商品送京豆">送京豆</a>';
                    break;
                case 11:
                    j[1] = '<a class="pt4" title="会员特价">会员特价</a>';
                    break;
                case 22:
                    j[0] = '<a class="pt4" title="京豆优惠">京豆优惠</a>';
                    break;
                default:
                    break
            }
        }
        var m = [], k = 0, c = p == 1 ? 2 : 4;
        for (var n = 0; n < 6; n++) {
            if (j[n] && ++k <= c) {
                m.push(j[n])
            }
        }
        return m.join("")
    }
};
SEARCH.set_prompt_adwords_data = function(d) {
    if (!d) {
        return
    }
    for (var c = 0, a = d.length; c < a; c++) {
        var f = d[c].id || "", e = $("#" + f), b = SEARCH.util.strip_tags(d[c].ad);
        if (e.length && b !== "") {
            e.parent().attr("title", b);
            e.parents("li").find(".p-img>a").attr("title", b);
            e.html(b)
        }
    }
};
SEARCH.set_comment_nums_data = function(e, d) {
    if (typeof (e) != "object" || typeof (e.CommentsCount) != "object") {
        return false
    }
    if (typeof (d) == "undefined") {
        for (var c = 0, b = e.CommentsCount, a = b.length; c < a; c++) {
            if (typeof (b[c].CommentCount) != "undefined") {
                $("#comment-" + b[c].SkuId).html("已有" + b[c].CommentCount + "人评价")
            }
        }
    } else {
        for (var c = 0, b = e.CommentsCount, a = b.length; c < a; c++) {
            if (typeof (b[c].CommentCount) != "undefined") {
                $("#adv-comment-" + b[c].SkuId).html("已有" + b[c].CommentCount + "人评价");
                $("#adv-star-" + b[c].SkuId).attr("class", "star-yellow h" + b[c].AverageScore)
            }
        }
    }
};
SEARCH.set_ware_stock_data = function(n) {
    if (!n || typeof n != "object") {
        return
    }
    var a = $("a[stock]"), k = readCookie("ipLoc-djd") || "", j = k.split("-"), e = j[0] ? window.json_city[0][j[0]] : "", g = [];
    for (var h = 0, c = a.length; h < c; h++) {
        var p = a.eq(h), o = p.attr("stock"), b = n[o], m = null, d = "btn btn-nostore notice-store";
        if (!b) {
            continue
        } else {
            m = p.parent().siblings(".stocklist")
        }
        switch (b.stockvalue & 65535) {
            case 0:
            case 18:
            case 34:
                m && m.html('<span class="st34">' + e + "无货</span>");
                if (p.attr("data-disable-notice") == "1") {
                    p.before('<a href="javascript:;" class="btn-buy disabled">加入购物车</a>').remove()
                } else {
                    p.attr({href: "javascript:;","class": d,"data-type": 2,"data-sku": o,id: "store" + o}).removeAttr("target").html("<b></b>到货通知");
                    var f = SEARCH.util.get_ware_type(o);
                    (f == "book" || f == "mvd") && g.push(o)
                }
                break;
            case 36:
                m && m.html('<span class="st36">' + e + "预定</span>");
                break;
            case 40:
                m && m.html('<span class="st40">' + e + "有货 <b>下单后2-6天发货</b></span>");
                break;
            default:
                break
        }
    }
    if (!g.length) {
        return
    }
    $.getJSON("WareStock.php?wids=" + g.join(","), function(q) {
        if (typeof q != "object") {
            return
        }
        for (var l in q) {
            q[l] == 0 && $("#store" + l).before('<a href="javascript:;" class="btn-buy disabled">加入购物车</a>').remove()
        }
    })
};
SEARCH.apiArray = [];
SEARCH.apiArray[1] = ["priceValue", SEARCH.set_digital_price_data, SEARCH.get_digital_price, false];
SEARCH.apiArray[2] = ["prommTagValue", SEARCH.set_prompt_flag_data, SEARCH.get_prompt_flag, false];
SEARCH.apiArray[4] = ["ADValue", SEARCH.set_prompt_adwords_data, SEARCH.get_prompt_adwords, false];
SEARCH.apiArray[8] = ["summaryValue", SEARCH.set_comment_nums_data, SEARCH.get_comment_nums, false];
SEARCH.apiArray[16] = ["stockValue", SEARCH.set_ware_stock_data, SEARCH.get_ware_stock, false];
SEARCH.get_ware_info_merge = function(e, c) {
    var b = e.replace(/J_/g, ""), f = this;
    for (var d = 1, a = f.apiArray.length - 1; d <= a; d = d * 2) {
        f.apiArray[d][3] = false
    }
    $.getJSONP("http://search.jd.com/mergesearch?skuids=" + b + "&apiType=1,2,4,8,16&area=" + c.split("-").slice(0, 3).join("_") + "&callback=SEARCH.jsonpcallback");
    setTimeout(function() {
        for (var j = 1, h, g = f.apiArray.length - 1; j <= g; j = j * 2) {
            if (f.apiArray[j][3] == false) {
                f.apiArray[j][3] = true;
                h = f.apiArray[j][2];
                h(e, c)
            }
        }
    }, 1500)
};
SEARCH.jsonpcallback = function(c, e) {
    for (var d = 1, b, a = SEARCH.apiArray.length - 1; d <= a; d = d * 2) {
        if (SEARCH.apiArray[d][0] == c && e != undefined && SEARCH.apiArray[d][3] == false) {
            SEARCH.apiArray[d][3] = true;
            b = SEARCH.apiArray[d][1];
            b(e)
        }
    }
};
SEARCH.get_baby_info = function() {
    var j = $("#babyQueryAttr"), f, a = 0, c = "", h = "", i = j.find(".txt-birthday"), b = new Date(), e = window.SEARCH;
    if (!i.attr("data-init")) {
        i.Jcal({chosendate: (b.getMonth() + 1) + "/" + b.getDate() + "/" + b.getFullYear(),startdate: (b.getMonth() + 1) + "/" + b.getDate() + "/" + (b.getFullYear() - 14),enddate: (b.getMonth() + 1) + "/" + b.getDate() + "/" + (b.getFullYear() + 1),outputFormat: "{y}-{m}-{d}",zIndex: 10,x: 0,y: 0});
        i.attr("data-init", "1")
    }
    function d(p) {
        var p = new Date(p * 1), l = {tip: ""}, o, n;
        o = p < b ? p : b;
        n = p < b ? b : p;
        var r = n.getYear() - o.getYear(), k = n.getMonth() - o.getMonth(), q = n.getDate() - o.getDate();
        if (q < 0) {
            q += 30;
            k -= 1
        }
        if (k < 0) {
            k += 12;
            r -= 1
        }
        if (!r && !k && !q) {
            l = {tip: "即将出生",status: "now"}
        } else {
            if (p < b) {
                l.status = "past";
                if (r) {
                    l.tip = r + "岁" + (k ? k + "个月" : "")
                } else {
                    if (k) {
                        l.tip = k + "个月"
                    }
                    if (q) {
                        l.tip += q + "天"
                    }
                }
            } else {
                l.status = "future";
                if (r) {
                    l.tip = r + "年" + (k ? k + "个月" : "")
                } else {
                    if (k) {
                        l.tip = k + "个月"
                    }
                    if (q) {
                        l.tip += q + "天"
                    }
                }
            }
        }
        if (l.status == "now") {
            j.find(".tc-info").html('您的宝宝<strong>即将出生</strong>啦！<a href="javascript:;" class="tci-change" clstag="search|keycount|search|updatebabyinfo">[ 修改信息 ]</a>')
        } else {
            if (l.status == "past") {
                j.find(".tc-info").html("您的宝宝已经<strong>" + l.tip + '</strong>啦！<a href="javascript:;" class="tci-change" clstag="search|keycount|search|updatebabyinfo">[ 修改信息 ]</a>')
            } else {
                if (l.status == "future") {
                    j.find(".tc-info").html("您的宝宝即将在<strong>" + l.tip + '</strong>后出生！<a href="javascript:;" class="tci-change" clstag="search|keycount|search|updatebabyinfo">[ 修改信息 ]</a>')
                }
            }
        }
        j.find(".tc-info a").click(function() {
            j.find(".query-con").removeClass("hide");
            j.find(".tips-con").addClass("hide")
        });
        $("#babyQueryAttr").removeClass("hide")
    }
    function g(l, k) {
        var m = l + "-" + c + "-" + h + "-" + k;
        $.ajax({url: "http://uprofile.jd.com/u/baby/setinfo?babyinfo=" + m,async: true,dataType: "jsonp",success: function(o) {
                if (!o || o.flag != 2) {
                    alert("Joy,没记住您的选择...");
                    return
                }
                d(l);
                j.find(".query-con").addClass("hide");
                j.find(".tips-con").removeClass("hide");
                if ($("#for_my_bb").hasClass("tc-btn-selected")) {
                    var n = e.util.filtUrl(SEARCH.base_url, "bb_info", l + "-" + k);
                    window.location.href = window.location.pathname + "?" + n
                }
            }})
    }
    $.ajax({url: "http://uprofile.jd.com/u/baby/getinfo?callback=?",async: true,dataType: "jsonp",success: function(l) {
            var l = l.babyinfo.split("-");
            if (!l || !l[0]) {
                j.removeClass("hide").find(".query-con").removeClass("hide");
                return
            }
            f = l[0];
            c = l[1];
            h = l[2];
            a = l[3] || 0;
            j.find(".tips-con").removeClass("hide");
            var k = new Date(f * 1);
            j.find(".query-con .txt-birthday").val(k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate());
            if (a == "1") {
                j.find(".query-con .boy").addClass("selected")
            }
            if (a == "2") {
                j.find(".query-con .girl").addClass("selected")
            }
            d(l[0])
        }});
    $("#for_my_bb").click(function() {
        var k = e.util.filtUrl(e.base_url, "bb_info", $(this).hasClass("tc-btn-selected") ? "" : f + "-" + a);
        window.location.href = window.location.pathname + "?" + k
    });
    j.find(".boy").click(function() {
        $(this).addClass("selected");
        j.find(".girl").removeClass("selected")
    });
    j.find(".girl").click(function() {
        $(this).addClass("selected");
        j.find(".boy").removeClass("selected")
    });
    j.find(".btn-submit").click(function() {
        var k = $.trim(j.find(".txt-birthday").val());
        if (!k) {
            alert("请选择宝宝出生日期");
            return
        }
        if (!/^(\d{4})-(\d{1,2})-(\d{1,2})$/.test(k)) {
            alert('Joy看不懂您写的日期，请按照"年-月-日"格式书写');
            return
        }
        f = new Date(RegExp.$1, RegExp.$2 - 1, RegExp.$3).getTime();
        if (j.find(".boy").hasClass("selected")) {
            a = 1
        }
        if (j.find(".girl").hasClass("selected")) {
            a = 2
        }
        jdModelCallCenter.settings.fn = function() {
            g(f, a)
        };
        $.getJSON("http://passport.jd.com/loginservice.aspx?method=Login&callback=?", function(l) {
            if (l && l.Identity && l.Identity.IsAuthenticated) {
                g(f, a)
            } else {
                jdModelCallCenter.login()
            }
        });
        $(".Jcalendar").remove()
    })
};
SEARCH.get_paipai_ware = function(c) {
    if (!c) {
        return
    }
    var d = this, b = encodeURIComponent(QUERY_KEYWORD), a = "http://se.paipai.com/comm_search?KeyWord=" + b + "&charSet=gbk&PTAG=12468." + c + ".6";
    $.ajax({url: "http://sse1.paipai.com/comm_json?charset=utf-8&dtype=jsonp&dtag=search&KeyWord=" + b + "&PageSize=5&ShowClass=1",dataType: "jsonp",scriptCharset: "utf-8",success: function(h) {
            if (typeof (h) != "object" || h.retCode != "0" || h.data.list.length < 5) {
                return
            }
            var g = '<div class="m m0 paipai-result"><div class="mt"><h2 class="paipai"><i></i>为您在拍拍找到如下结果</h2></div>';
            g += '<div class="mc"><div class="paipai-showall"><strong>' + d.util.htmlspecialchars(QUERY_KEYWORD) + "</strong>";
            g += "共" + h.data.totalNum + '个商品<a target="_blank" href="' + a + '" onclick="log(\'paipai\',\'normal-clk-all\',QUERY_KEYWORD)">查看全部</a></div><ul class="lh">';
            for (var f = 0, e = h.data.list.length; f < e; f++) {
                var m = h.data.list[f], n = d.util.strip_tags(m.title), l = m.link + (m.link.indexOf("?") > -1 ? "&" : "?") + "PTAG=12468." + c + "." + (f + 1), j = " onclick=\"log('paipai','normal-clk',QUERY_KEYWORD,'" + f + "', '" + m.link + "')\"";
                g += '<li><div class="p-img"><a target="_blank" title="' + n + '" href="' + l + '"' + j + '><img height="130" width="130" alt="" src="' + m.img160 + '"></a></div>';
                g += '<div class="p-name"><a target="_blank" title="' + n + '" href="' + l + '"' + j + ">" + m.title.replace(/<em>(.+?)<\/em>/g, '<font class="skcolor_ljg">$1</font>') + "</a></div>";
                g += '<div class="p-comm"><span class="star sa5"></span><br><a target="_blank" href="' + l + '#salesrecords"' + j + ">(销售数量" + m.saleNum + ")</a></div>";
                g += '<div class="p-price"><strong>￥' + m.price + "</strong></div></li>"
            }
            g += "</ul></div></div>";
            $("#bottom_pager").after(g);
            log("paipai", "normal-show", QUERY_KEYWORD, h.data.totalNum, h.data.list.length, window.location.href)
        }})
};
SEARCH.get_adv_info = function(f, d, c, b, e) {
    var g = this, a = encodeURIComponent(window.REAL_KEYWORD || window.QUERY_KEYWORD);
    $.ajax({url: "http://x.jd.com/Search?ad_type=7&ad_ids=291:" + f + ",292:4&keyword=" + a + "&page=" + d + "&urlcid3=" + c,dataType: "jsonp",success: function(s) {
            if (typeof (s) != "object" || !s["291"].length && !s["292"].length) {
                $("#ad_left").html("").hide();
                $("#shop-choice").html("").hide();
                return false
            }
            var p = e == "_3" ? "190" : "160", q = '<li class="fore">';
            q += '<div class="p-img"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},81);JA.tracker.adclick(\'{#monitor_url#}\');"><img width="' + p + '" height="' + p + '" data-img="1" data-lazyload="http://img1{#index#}.360buyimg.com/cms/s' + p + "x" + p + '_{#image_url#}"></a></div>';
            q += '<div class="rate"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},81);JA.tracker.adclick(\'{#monitor_url#}\');">{#ad_title#}</a></div>';
            q += '<div class="p-price"><em></em><strong class="J_{#sku_id#}"></strong></div></li>';
            for (var n = 0, k = s["291"].length, o = "", h = []; n < k; n++) {
                var m = s["291"][n];
                m.pos = n;
                m.index = m.sku_id % 5;
                o += g.util.template(q, m);
                h.push("J_" + m.sku_id);
                new Image().src = m.exposal_url
            }
            if (o) {
                $("#ad_left").html('<div class="mt"><h2>推广商品</h2></div><div class="mc"><ul>' + o + "</ul></div>").show()
            } else {
                $("#ad_left").html("").hide()
            }
            if (b == "") {
                var l = '<li><div class="p-img"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},82);JA.tracker.adclick(\'{#monitor_url#}\');"><img width="160" height="160" data-img="1" data-lazyload="http://img1{#index#}.360buyimg.com/cms/s160x160_{#image_url#}"></a></div><div class="p-name"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},82);JA.tracker.adclick(\'{#monitor_url#}\');">{#ad_title#}</a></div><div class="p-price"><em></em><strong class="J_{#sku_id#}"></strong></div></li>'
            } else {
                if (b == "_1") {
                    var l = '<li><div class="p-img"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},82);JA.tracker.adclick(\'{#monitor_url#}\');"><img width="160" height="160" data-img="1" data-lazyload="http://img1{#index#}.360buyimg.com/cms/s160x160_{#image_url#}"></a></div><div class="p-scroll"><a href="javascript:;" class="p-scroll-btn p-scroll-prev">&lt;</a><div class="p-scroll-wrap"><ul><li><a href="javascript:;" class="curr"><img data-img="1" width="27" height="27" data-skuid="{#sku_id#}" data-lazyload="http://img1{#index#}.360buyimg.com/cms/s160x160_{#image_url#}"></a></li></ul></div><a href="javascript:;" class="p-scroll-btn p-scroll-next">&gt;</a></div><div class="p-name"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},82);JA.tracker.adclick(\'{#monitor_url#}\');">{#ad_title#}</a></div><div class="p-price"><strong class="J_{#sku_id#}"></strong></div><div class="extra"><span class="star"><span class="star-white"><span id="adv-star-{#sku_id#}" class="star-yellow h">&nbsp;</span></span></span><a id="adv-comment-{#sku_id#}">已有人评价</a></div></li>'
                } else {
                    if (b == "_2") {
                        var l = '<li><div class="p-img"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},82);JA.tracker.adclick(\'{#monitor_url#}\');"><img width="220" height="220" data-img="1" data-lazyload="http://img1{#index#}.360buyimg.com/cms/s220x220_{#image_url#}"></a></div><div class="p-scroll"><a href="javascript:;" class="p-scroll-btn p-scroll-prev">&lt;</a><div class="p-scroll-wrap"><ul><li><a href="javascript:;" class="curr"><img data-img="1" width="27" height="27" data-skuid="{#sku_id#}" data-lazyload="http://img1{#index#}.360buyimg.com/cms/s220x220_{#image_url#}"></a></li></ul></div><a href="javascript:;" class="p-scroll-btn p-scroll-next">&gt;</a></div><div class="p-name"><a href="{#click_url#}" target="_blank" onclick="searchlog(1,{#sku_id#},{#pos#},82);JA.tracker.adclick(\'{#monitor_url#}\');">{#ad_title#}</a></div><div class="p-price"><strong class="J_{#sku_id#}"></strong></div><div class="extra"><span class="star"><span class="star-white"><span id="adv-star-{#sku_id#}" class="star-yellow h">&nbsp;</span></span></span><a id="adv-comment-{#sku_id#}">已有人评价</a></div></li>'
                    }
                }
            }
            for (var n = 0, k = s["292"].length, o = "", r = []; n < k && k > 3; n++) {
                var m = s["292"][n];
                m.pos = n;
                m.index = m.sku_id % 5;
                o += g.util.template(l, m);
                h.push("J_" + m.sku_id);
                r.push(m.sku_id);
                new Image().src = m.exposal_url
            }
            if (o) {
                $("#shop-choice").html('<div class="mt"><h3>商品精选</h3></div><div class="mc"><ul class="list-h clearfix">' + o + "</ul></div>").show()
            } else {
                $("#shop-choice").html("").hide()
            }
            pageConfig.FN_ImgError(document);
            $("#ad_left,#shop-choice").find("img[data-lazyload]").Jlazyload({type: "image",placeholderClass: "err-product"});
            h.length && g.get_digital_price(h.join(","), readCookie("ipLoc-djd") || "");
            if (r.length) {
                b != "" && g.get_comment_nums(r.join(","), true);
                b == "_1" && $("#shop-choice").attr("class", "m plist-n7 plist-n2");
                b == "_2" && $("#shop-choice").attr("class", "m plist-n7");
                b == "" && $("#shop-choice").find("li").mouseover(function() {
                    $(this).addClass("hover1")
                }).mouseout(function() {
                    $(this).removeClass("hover1")
                })
            }
        }})
};
SEARCH.init = function(page, total_page, result_count, sort, scroll, shop_id, cid, survey_html, paipai) {
    this.get_ware_info(), this.get_shop_info(shop_id), this.get_multi_shops(), this.bind_events.init(), this.relate_search.init(), this.top_page_html(page, total_page, result_count, scroll), this.bottom_page_html(page, total_page, scroll), this.sort_html(sort), this.image_scroll('#plist li:not([done="1"]) .p-scroll');
    this.get_paipai_ware(paipai);
    $.delayLoad(true, "script/digital_music_download.js?100.js", "utf-8", "", 'li[e-tag!="1"] a.free-download');
    $.ajax({url: "http://x.jd.com/ShowInterface?ad_ids=86:1,62:1," + (window.pageConfig.wideVersion ? 93 : 87) + ":1&urlcid3=" + cid + "&ad_type=8&spread_type=1",dataType: "jsonp",success: function(data) {
            if (typeof (data) != "object") {
                return false
            }
            for (var i in data) {
                if (i == 93 || i == 87) {
                    $("#xjd_bottom").html(data[i][0])
                } else {
                    $("#xjd_left_" + i).html(data[i][0]).parent().parent().show()
                }
            }
        }});
    NotifyPop.init($(".notice-store"));
    pageConfig.isInitContrast = false;
    pageConfig.FN_InitContrast();
    var sidePanle = new pageConfig.FN_InitSidebar();
    sidePanle.addItem(survey_html);
    sidePanle.setTop();
    sidePanle.scroll();
    $("#sidepanel").find("a.gotop").attr("href", "javascript:void(0)").click(function() {
        window.scrollTo(0, 0)
    });
    $.ajax({url: "http://guang.jd.com/init/",dataType: "jsonp",success: function(data) {
            eval(data)
        }})
};
$(document).keyup(function(d) {
    var f = document.activeElement.tagName.toLowerCase();
    if (f == "input" || f == "textarea") {
        return
    }
    var a = 0, d = d || event, c = $("#filter"), b = 0;
    a = d.keyCode || d.which || d.charCode;
    if (c.length) {
        b = c.offset().top
    }
    switch (a) {
        case 37:
            window.scrollTo(0, b);
            $("#top_pagi a.prev").trigger("click");
            break;
        case 39:
            window.scrollTo(0, b);
            $("#top_pagi a.next").trigger("click");
            break;
        default:
            break
    }
});
$(window).scroll(function() {
    var a = $("#scroll_loading");
    if (SEARCH.loading || !SEARCH.page_num || a.length == 0 || a.offset().top - 450 > $(window).height() + $(window).scrollTop()) {
        return false
    }
    SEARCH.scroll()
});
(function(a, b) {
    if (typeof (b.is_correct_hash) == "function") {
        $(a).hashchange(function() {
            var c = b.get_real_hash() || a.location.search.substr(1);
            if (b.is_correct_hash(c)) {
                b.load("s.php?" + c, false)
            }
        })
    }
})(window, SEARCH);
(function() {
    $("#J_oneboxTabs").find("div").click(function() {
        if (!$(this).hasClass("selected")) {
            var a = $("#J_oneboxTabs").find("div").index(this);
            var b = $(".J_oneboxTabsContent").addClass("hide").eq(a).removeClass("hide").find(".J_oneBoxFrame");
            var c = b.attr("data-src");
            if (c) {
                b.removeAttr("data-src").attr("src", c)
            }
            $(this).addClass("selected").siblings().removeClass("selected")
        }
    })
})();
(function() {
    var a = {insertScript: function(f, c) {
            var g = document.getElementsByTagName("head")[0];
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript");
            if (c) {
                for (var d in c) {
                    if (c.hasOwnProperty(d)) {
                        e.setAttribute(d, c[d])
                    }
                }
            }
            e.setAttribute("src", f);
            g.appendChild(e)
        },insertStyles: function(g) {
            var h = document, f = h.getElementsByTagName("head"), d = h.createElement("style"), e = h.createElement("link");
            if (/\.css$/.test(g)) {
                e.rel = "stylesheet";
                e.type = "text/css";
                e.href = g;
                if (f.length) {
                    f[0].appendChild(e)
                } else {
                    h.documentElement.appendChild(e)
                }
            } else {
                d.setAttribute("type", "text/css");
                if (d.styleSheet) {
                    d.styleSheet.cssText = g
                } else {
                    var c = h.createTextNode(g);
                    d.appendChild(c)
                }
                if (f.length) {
                    f[0].appendChild(d)
                }
            }
        }};
    a.insertStyles("._gemini_inject_label_sousuo{display:block !important;} ._ads_sousuo,._no-ads_sousuo{display:none !important;}");
//    var b = ["2_164_5467", "2_164_5470"];
//    $.ajax({url: "http://nfa.jd.com/loadFa_toJson.js?aid=" + b.join("-") + "&ver=20140526",dataType: "script",cache: true,success: function() {
//            a.insertScript("http://static.360buyimg.com/gemini/gemini/gemini_v2.2.1.js", {id: "1401071931558",name: "gemini_divide_script",charset: "utf-8",divideType: "MODULE_INJECT",param: "[{t:'sousuo'}]"})
//        }})
})();
