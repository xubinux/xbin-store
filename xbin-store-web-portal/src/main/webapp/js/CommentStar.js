 /*
 myjd-2014 Compressed by uglify 
 Author:hanyuxinting 
 Date: 2014-11-18 
 */
define(["./Base", "./Util"], function(a) {
    var b = new a;
    return b.include({star: 0,el: null,initStar: function(a, b) {
            this.el = $(".commstar a", a);
            var c = this;
            this.el.bind("click", function() {
                c.el.removeClass("active"), $(this).addClass("active"), c.star = this.getAttribute("_val"), b && b(c.star, $(this))
            }).bind("mouseover", function() {
                $(this).addClass("hover")
            }).bind("mouseout", function() {
                $(this).removeClass("hover")
            })
        },_initStar: function(a) {
            a = a;
            for (var b = 0, c = a.length; c > b; b++) {
                this.init(a[b], this.resetStar)
            }
        },resetStar: function(a, b) {
            var c = a && parseInt(a[a.length - 1]), d = b.parent().parent();
            d.find("input").val(a);
            var e = d.find(".degree-text");
            switch (e.removeClass(e.attr("class")), c) {
                case 5:
                    e.addClass("d1 degree-text"), e.text("\u5f88\u5dee");
                    break;
                case 4:
                    e.addClass("d1 degree-text"), e.text("\u4e0d\u6ee1");
                    break;
                case 3:
                    e.addClass("d3 degree-text"), e.text("\u4e00\u822c");
                    break;
                case 2:
                    e.addClass("d3 degree-text"), e.text("\u6ee1\u610f");
                    break;
                case 1:
                    e.addClass("d5 degree-text"), e.text("\u8d5e\u4e00\u4e2a")
            }
            e.show()
        }}), b
});
