//-----------------------日历开始------------------
function initCalendar(){
	$(".express-form").append("<div id='date-delivery' style='position:absolute;'>"
		+ "<div class='inner' style='position:relative;'>"
		+ "</div></div>");
	var obj=$("#date-delivery");
	
	var html=[],wLen=0,hLen=hData.length;
	html.push("<dl class='th'><dt>时间段</dt><dd class='date'>");
	//日期、星期
	for(i in dData){
		html.push("<span row='-1' col='"+i+"'>"+dData[i]["date"].replace(/\d{4}-/,"")+"<br />"+dData[i]["week"]+"</span>");
	}
	html.push("</dd><dd class='time'>");
	//时间区间
	for(i in hData){
		html.push("<span row='"+i+"' col='-1'>"+hData[i]+"</span>");
	}
	html.push("</dd></dl>");
	
	html.push("<div class='data'>");
	//dataList
	for(i in dData){
		wLen++;
		html.push("<ul>");
		for(var j=0;j<hLen;j++){
			if(dData[i]["hours"][j].substring(0,1)=="0"){
				html.push("<li class='checkbox disabled' data-status='0' row='"+j+"' col='"+i+"' val=''></li>");
			}else{
				html.push("<li class='checkbox' data-status='1' row='"+j+"' col='"+i+"' val='  "+dData[i]["date"]+"  ("+dData[i]["week"]+")  "+hData[j]+"'day='"+dData[i]["date"]+"'range='"+hData[j]+"' date-range='"+dData[i]["hours"][j].substr(2)+"'>可选</li>");
			}
		}
		html.push("</ul>");
	}
	html.push("</div>");
	html=html.join("");
	
	var tW=51,
		tH=31,
		iW=100,
		iH=50;
	obj.find(".inner").css({
		width:wLen*tW+iW+10+"px",
		height:hLen*tH+iH+10+"px"
	}).html(html).show();
	obj.css({
		position:"absolute",
		top:106,
		left:233,
		width:wLen*tW+iW+"px",
		height:hLen*tH+iH+"px"
		
	}).attr("load","1");
	
	obj.find(".data").css({
		width:wLen*tW+"px"
	});	
	
	binEvent();
	
	var nomalPays = $("#jd-delivery-time .field .commonshipment").length;
	if($(".commonshipment").is(":hidden")){
			$("#date-delivery").css({
				top:28,
				left:233
			});
	}
	else if(nomalPays==2){
			$("#date-delivery").css({
				top:80,
				left:233
			});
	}else if(nomalPays==1){
			$("#date-delivery").css({
				top:54,
				left:233
			});
	}
}


function binEvent(){
	var obj=$("#date-delivery"),
		selected=null,
		bColor="#FFFFFF",
		hoverBColor="#EDF9E6",
		selectedBcolor="#7ABD54";
		obj.find(".checkbox").bind("mouseover",function(){
		var row=$(this).attr("row"),
			col=$(this).attr("col");
		obj.find("li,span").each(function(){
			var _this=$(this);
			if(_this.attr("row")==row||_this.attr("col")==col){
				if(!_this.attr("selected")){
					_this.css({
						"background":hoverBColor
					});
				}
			}
		});
		$(this).css({
			"background":selectedBcolor,
			"color":bColor
		});
	}).bind("mouseout",function(){
		var row=$(this).attr("row"),
			col=$(this).attr("col");
			obj.find("li,span").each(function(){
			var _this=$(this);
			if(_this.attr("row")==row||_this.attr("col")==col){
				if(!_this.attr("selected")){
					_this.css({
						"background":bColor
					});
					if(_this.hasClass("checkbox")){
						_this.css({
							"color":selectedBcolor
						});
					}
				}
			}
		});
	}).bind("click",function(){
		var _this=$(this);
		if(_this.attr("val")==""){
			return;
		}
		$("#date-311").val(_this.attr("val"));
		$("#delivery-t4").attr("checked",true);
		$("#sendPay311").val(_this.attr("date-range"));
		$("#day").val(_this.attr("day"));
		$("#range").val(_this.attr("range"));
		_this.attr("selected","1").css({
			"background":selectedBcolor,
			"color":bColor
		});
		_this.parent().parent().find('li').not($('.disabled')).text('可选');
		_this.text('已选');
		if(!selected){
			selected=_this;
		}
		if(selected!=_this){
			if(selected.attr("row")!=_this.attr("row") && selected.attr("col")!=_this.attr("col")){
				selected.css({
					"background":bColor,
					"color":selectedBcolor
				});
			}else{
				selected.css({
					"background":hoverBColor
				});
			}
			selected.removeAttr("selected");
			selected=_this;
		}
		obj.hide();

	});
	obj.bind("click",function(){
		return false;					  
	});
}

$(document).bind("click",function(e){
	var evt=e||window.event,
		tag=evt.target||evt.scrElement;
	if(tag.id!="date-311"){
		$("#date-delivery").hide();
	}
});
