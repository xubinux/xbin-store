jQuery.fn.extend({
	isVisible : function(){
		var rect = this.get(0).getBoundingClientRect();
		return !!(rect.bottom - rect.top);
	},
	outerHtml : function(){
		return jQuery('<div>').append(this.clone()).html();
	},
	placeholder: function(){
		if(!$.browser.msie) return false;
		return this.each(function(){
			var el = $(this),
				id = this.id || 'jPlaceholder_' + new Date().getTime(),
				leftDis = parseInt(el.css('border-left-width')) + parseInt(el.css('padding-left')) + parseInt(el.css('margin-left')),
				txt = el.attr('placeholder');

			el.wrap('<span style="position:relative;"></span>');
			if(!this.id) this.id = id;
			var $label = $('<label for="'+ id +'" style="position:absolute;left:'+ leftDis +'px;cursor:text;line-height:'+ el.outerHeight() +'px;color:#757575;font-weight:normal;white-space:nowrap;">'+ (this.value.length ? '' : txt) +'</label>').appendTo(el.parent());

			el.bind('keydown keyup', function(){
				$label.html(this.value.length ? '' : txt);
			});

		});
	},
	//限制输入框只能输入数字
	rnumber : function(min){
		this.keyup(function(){
            $(this).val($(this).val().replace(/[^0-9]/g,''));
            if(min != undefined && $(this).val().length == 0){
            	$(this).val(min);
            }
        }).bind("paste",function(){  //CTR+V事件处理
            $(this).val($(this).val().replace(/[^0-9]/g,''));
            if(min != undefined && $(this).val().length == 0){
            	$(this).val(min);
            }
        }).css("ime-mode", "disabled").bind("contextmenu",function(e){
              return false;
        });
		return this;
	}
	
});

jQuery.getURLParameter = function(name){
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}