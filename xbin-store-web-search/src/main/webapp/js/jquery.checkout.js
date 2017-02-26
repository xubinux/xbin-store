/**
 * @email  verylayout@gmail.com
 * @author  Hooboy
 * @version 1.5 (2013/01/09)
 */
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

(function($){
    if(/*@cc_on!@*/!1 && !window.XMLHttpRequest) {
        $(function(){
            try {document.execCommand("BackgroundImageCache", false, true);} catch(e){}
        });
    }

    $.extend({
        getWS: function(){
            var doc = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;

            return {
                'x' : doc.scrollLeft ? doc.scrollLeft : (window.pageXOffset ? window.pageXOffset : 0),
                'y' : doc.scrollTop ? doc.scrollTop : (window.pageYOffset ? window.pageYOffset : 0),
                'viewW' : doc.clientWidth ? doc.clientWidth : self.innerWidth,
                'viewH' : doc.clientHeight ? doc.clientHeight : self.innerHeight,
                'width' : doc.scrollWidth ? doc.scrollWidth : window.width,
                'height' : doc.scrollHeight ? doc.scrollHeight : window.height
            };
        },
        proxy: $.proxy || function(fn, context){
            return function(){
                fn.apply(context, arguments);
            };
        }
    });
})(jQuery);

// Sticky Scroll
(function($, sticky, window, undefined){
    var win = $(window),
        doc = $(document);

    $[sticky] = function(data, options){
        this.$el = $(data);

        this.element = data;

        this.offset = 0;
        this.distance = 0;

        this.o = $.extend(true, {}, $[sticky].defaults, options);

        this._init(this.element, this.o);
    };

    $[sticky].defaults = {
        position: ["50%", "100%"],
        fixed: true
    };

    $[sticky].prototype = {
        dom: {},
        _init: function(data, options){

            this.offset = this.$el.offset();
            this.distance = $.getWS().height - this.offset.top;

            var s = this;

            s.stickyed = false;

            s._create(data);

            $(window).bind("scroll.sticky resize.sticky", function(){
                s.stickyed && s._start();
            });

            s.stickyed && s._start();
        },
        _create: function(data){
            var s = this;

            if(!s.stickyed){
                if(!this.$el.find(".sticky-placeholder").length){
                    s.dom.wrap = $('<div class="sticky-wrap"></div>');
                    s.dom.placeholder = $('<div class="sticky-placeholder hide"></div>');
                    $(data).wrapInner(s.dom.wrap);
                    $(data).append(s.dom.placeholder);
                    s.stickyed = true;
                }
            }
        },
        _start: function(){
            var s = this,
                w  = $.getWS();

            if(s.offset.top > (w.y + w.viewH - 50) && s.offset.top > (w.y + w.viewH - s.distance) ){
                s.scrollUp();
            } else {
                s.scrollDown();
            }
        },
        scrollDown: function(){
            var s = this;

            s.$el.append( s.$el.find(".sticky-wrap") );
            s.dom.placeholder.addClass("hide").css("display", "none");
        },
        scrollUp: function(){
            var s = this;

            s.dom.placeholder.append( s.$el.find(".sticky-wrap") );
            s.dom.placeholder.removeClass("hide").css("display", "block");
        },
        refresh: function(){
            if(!this.stickyed){
                this.destory();

                this._init(this.element, this.o);
            }
        },
        destory: function(){
            if(!this.stickyed){
                return;
            }

            var original = this.$el.find(".sticky-wrap").html();

            this.$el.html(original);

            this.stickyed = false;
            $(window).unbind("scroll.sticky resize.sticky");
        }
    };

    $.fn[sticky] = function(options){
        if (typeof options == 'string') {
            var args = Array.prototype.slice.call(arguments, 1),
                method = options;

            return this.each(function() {
                var instance = $(this).data(sticky);

                if(!instance){
                    return; //调用插件方法时需要先实例化
                }

                if (!$.isFunction(instance[method]) || method.charAt(0) === "_"){
                    return; //禁止调用不存在的API方法或者前缀为"_"的私有方法
                }

                instance[method].apply(instance, args);
            });
        }

        return this.each(function(){
            var instance = $(this).data(sticky);
            if(!instance){
                $(this).data(sticky, new $[sticky](this, options));
            }
        });
    };
})(jQuery, 'jSticky', window);


var consigneeListOver = (function(){
    var dom = $("#consignee-list");

    var timeout;

    var init = function(){

        dom.find(".item").each(function(){
            var $this = $(this);
            $this.data("lock", $this.find(".hookbox").attr("checked") );

            if( !!$this.data("lock") ){
                $this.find(".item-action").show().removeClass("hide");
            }

            $this.bind("mouseenter", function(){
                if(!$this.data("lock")){
                    $this.addClass("item-selected");
                    timeout = setTimeout(function(){
                        $this.find(".item-action").show().removeClass("hide");
                    }, 150);
                }
            }).bind("mouseleave", function(){
                    if(!$this.data("lock")){
                        clearTimeout(timeout);
                        $this.removeClass("item-selected");
                        $this.find(".item-action").hide().addClass("hide");
                    }
                });
        });
    };

    return {
        init: init
    };
})();

var expandingMore = (function(){
    var expandHolder = $("#consignee-list"),
        expandHandle = $("#select-more"),
        item = expandHolder.find(".item-fore");
    expand = false;

    var init = function(){
        if(!item.length){return "";}
        expandHandle.click(function(){
            expand = !expand;

            item[expand ? "removeClass" : "addClass"]("hide").css("display", expand ? "block" : "none");


            expandHandle.removeClass(expand ? "select-expand" : "select-collapse").addClass(expand ? "select-collapse" : "select-expand").find("span").html(expand ? "\u6536\u8D77" : "\u66F4\u591A\u5E38\u7528\u5730\u5740");

            if(expand) {

            } else {

            }
        });
    };

    return {
        init: init
    };
})();

var itemListOver = {
    init: function(selector){
        this.dom = $(selector);
        this.timeout = null;

        this.bindEvents();
    },
    bindEvents: function(){
        var self = this;

        if( !this.dom.find(".item").length ){
            return;
        }

        this.dom.find(".item").each(function(){
            var $this = $(this);

            $this.find(".hookbox").each(function(){
                $(this).bind("click", function(){
                    $this.find(".hookbox").attr("checked", false);

                    self.dom.find(".item").removeClass("item-selected");
                    self.dom.find(".item .item-action").addClass("hide").hide();

                    $(this).attr("checked", "checked");

                    $this.addClass("item-selected");
                    $this.find(".item-action").removeClass("hide").show();
                });
            });

            if( !!$this.find(".hookbox").attr("checked") ){
                $this.addClass("item-selected");
                $this.find(".item-action").show().removeClass("hide");
            }

            $this.bind("mouseenter", function(){
                if( !$this.find(".hookbox").attr("checked") ){
                    $this.addClass("item-selected");
                    self.timeout = setTimeout(function(){
                        $this.find(".item-action").show().removeClass("hide");
                    }, 50);
                }
            }).bind("mouseleave", function(){
                    if( !$this.find(".hookbox").attr("checked") ){
                        clearTimeout(self.timeout);
                        $this.removeClass("item-selected");
                        $this.find(".item-action").hide().addClass("hide");
                    }
                });
        });
    }
};

// Expose Mask
(function($){
    var Expose = function(element, options) {
        this.elem = $(element);

        this.defaults = {
            maskID: "mask-jexpose",
            exposeClass: "expose",
            zIndex: 9998,
            color: "#fff",
            opacity: 0.7,
            delay: 0,
            onLoad: null,
            onOpen: null,
            onClose: null,
            onResize: null
        };

        this.options = $.extend({}, this.defaults, options);

        this.loaded = false;

        this.init();
    };

    Expose.prototype = {
        init: function(){
            var self = this;

            if(!this.loaded) {

                this.loaded = true;

                this.mask = $("<div/>").attr("id", this.options.maskID);

                $(document.body).append(this.mask);

                var viewPort = $.getWS();

                this.original_height = viewPort.height;

                var maskCSS = {
                    "width": viewPort.viewW,
                    "height": viewPort.height,
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "z-index": this.options.zIndex,
                    "opacity": this.options.opacity,
                    "display": "block"
                };

                this.mask.css(maskCSS);

                this.elem.addClass(this.options.exposeClass).css({
                    "position": "relative",
                    "z-index": this.options.zIndex + 1
                });

                $(window).bind("resize.expose", $.proxy(function(){
                    this._resize();
                }, this));

                this.elem.bind("resize", function(){
                    self._resize();
                    self.options.onResize && self.options.onResize.apply(this, [self.elem]);
                });

                this.options.onLoad && this.options.onLoad.apply(this, [this.elem]);
            }

            return this;
        },

        open: function(){
            if(!this.loaded){
                this.init();
                this.options.onOpen && this.options.onOpen.apply(this, [this.elem]);
                this.loaded = true;
            }
        },

        close: function(){
            if(this.loaded){
                this.mask.css("display", "none");

                this.destory();

                this.elem.css({
                    "position": "static",
                    "z-index": 1
                }).removeClass(this.options.exposeClass);

                this.options.onClose && this.options.onClose.apply(this, [this.elem]);

                this.loaded = false;
            }
        },

        _resize: function(){
            if(this.loaded){
                this.mask.css("height", this.original_height + "px");

                var size = $.getWS();

                this.mask.css({
                    //"width": size.viewW,
                    "width": "100%",
                    "height": size.height
                });
            }
        },

        update: function(){
            this._resize();
        },

        reFresh: function(){
            this.init();
        },

        destory: function(){
            if(this.loaded) {
                this.mask.remove();
                this.elem.css({
                    "position": "static",
                    "z-index": 1
                }).removeClass(this.options.exposeClass);
                $(window).unbind("resize.expose");
                this.elem.unbind("resize");
                this.loaded = false;
            }
        }
    };

    $.jExpose = function(element, options){
        $.jExpose.init(element, options);
    };

    $.jExpose.init = function(element, options){
        $.jExpose.view = $(element);

        $(element).data("jExpose", new Expose(element, options));
    };

    $.jExpose.close = function() {
        $.jExpose.view.data("jExpose").close();

        $.jExpose.view.data("jExpose", null);
    };
})(jQuery);
