<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="format-detection" content="telephone=no" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>出错了 -淘淘商城</title>
<!--结算页面样式-->
<link rel="stylesheet" type="text/css" href="/css/base.css" media="all" />
<link type="text/css" rel="stylesheet" href="/css/order-commons.css"
	source="widget" />
<script type="text/javascript" src="/js/jquery-1.6.4.js"></script>
<script type="text/javascript" src="/js/base.js"></script>
<script type="text/javascript" src="/js/order.common.js"></script>
<script type="text/javascript" src="/js/jquery.checkout.js"></script>
</head>
<body id="mainframe">
	<div class="w w1 header clearfix">
		<div id="logo">
			<a href="/"><img src="/images/taotao-logo.gif" alt="淘淘商城"></a>
		</div>
	</div>

	<div class="w">
		<div id="refresh">

			<style type="text/css">
#refresh {
	text-align: left;
	margin: 30px auto;
	width: 750px;
	height: 220px;
	background:
		url(/images/errordog.jpg)
		0 0;
	position: relative
}

#refresh .txt {
	position: absolute;
	left: 236px;
	top: 16px;
	color: #fff;
	font-size: 14px;
	font-family: "microsoft yahei"
}

#refresh .m {
	position: absolute;
	left: 336px;
	top: 80px;
	line-height: 18px;
	font-size: 14px
}

#refresh .m li {
	padding-bottom: 8px
}

#refresh .m a {
	color: #005eab
}

#refresh .m .fore1, #refresh .m .fore2 {
	font-family: "microsoft yahei"
}

#refresh .m .fore1 a {
	color: #e4393c
}

#refresh .m .fore2 a {
	color: #e4393c;
	font-weight: bold;
	font-size: 18px;
	padding: 0 3px
}

#refresh .m .fore3 {
	font-weight: bold;
	font-size: 12px
}

#refresh .m .fore4 a {
	margin-right: 15px;
	font-size: 12px
}

</style>
			<span class="txt">糟了...系统出错了...</span>
			<ul class="m">
				<li class="fore1">您可以：稍后再试或联系客服400-8888-9999。
				</li>
				<li class="fore2">返回<a href="/" target="_blank">淘淘首页</a></li>
				<li class="fore3">错误消息</li>
 				<li class="fore4">${message }</li>
			</ul>
		</div>
	</div>


	<!-- footer start -->
	<jsp:include page="../commons/footer.jsp" />
	<!-- footer end -->
</body>
</html>