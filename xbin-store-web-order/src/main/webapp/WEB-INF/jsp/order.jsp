<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>订单结算页 -京东商城</title>
    <!--结算页面样式-->

    <!-- Start: injected by Adguard -->
    <%--<script src="//local.adguard.com/adguard-ajax-api/injections/content-script.js?sb=1&ts=1487822590.929728&js=1&domain=trade.jd.com&css=1&generic=1"--%>
    <%--type="text/javascript" crossorigin="anonymous"></script>--%>
    <%--<script src="//local.adguard.com/adguard-ajax-api/injections/userscripts/Adguard Assistant?ts=1487822598.939687"--%>
    <%--type="text/javascript" crossorigin="anonymous"></script>--%>
    <!-- End: injected by Adguard -->

    <link rel="stylesheet" href="/css/bankList.css" charset="utf-8">
    <link type="text/css" rel="stylesheet"
          href="/css/order.css"
          source="widget">
    <link type="text/css" rel="stylesheet"
          href="/css/ui.css">
    <script type="text/javascript" src="/js/jquery-1.6.4.js"></script>
    <script type="text/javascript"
    <%--src="//misc.360buyimg.com/jdf/1.0.0/unit/??base/1.0.0/base.js,basePatch/1.0.0/basePatch.js"></script>--%>
    <%--<script type="text/javascript" src="//misc.360buyimg.com/user/purchase/2.0.0/js/cookieTrack_v4.js"></script>--%>

    <script type="text/javascript" src="/js/order.common.js"></script>
    <script type="text/javascript" src="/js/jquery.checkout.js"></script>
    <link charset="utf-8" rel="stylesheet" href="/css/tips.css">
    <link charset="utf-8" rel="stylesheet" href="/css/1b32.css">
    <%--<style nonce="1B32A193B0634A2AA8034C95F2105BE2" type="text/css"></style>--%>
</head>
<body id="mainframe">
<div id="shortcut-2014">
    <div class="w">
        <ul class="fl">
            <li class="dorpdown" id="ttbar-mycity">
                <div class="dt cw-icon ui-areamini-text-wrap"><i class="ci-right"><s>◇</s></i> 送至：<span
                        class="ui-areamini-text" data-id="12" title="江苏">江苏</span></div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="ui-areamini-content-wrap">
                        <div class="ui-areamini-content">
                            <div class="ui-areamini-content-list">
                                <div class="item"><a data-id="1" href="javascript:void(0)">北京</a></div>
                                <div class="item"><a data-id="2" href="javascript:void(0)">上海</a></div>
                                <div class="item"><a data-id="3" href="javascript:void(0)">天津</a></div>
                                <div class="item"><a data-id="4" href="javascript:void(0)">重庆</a></div>
                                <div class="item"><a data-id="5" href="javascript:void(0)">河北</a></div>
                                <div class="item"><a data-id="6" href="javascript:void(0)">山西</a></div>
                                <div class="item"><a data-id="7" href="javascript:void(0)">河南</a></div>
                                <div class="item"><a data-id="8" href="javascript:void(0)">辽宁</a></div>
                                <div class="item"><a data-id="9" href="javascript:void(0)">吉林</a></div>
                                <div class="item"><a data-id="10" href="javascript:void(0)">黑龙江</a></div>
                                <div class="item"><a data-id="11" href="javascript:void(0)">内蒙古</a></div>
                                <div class="item"><a data-id="12" href="javascript:void(0)" class="selected">江苏</a>
                                </div>
                                <div class="item"><a data-id="13" href="javascript:void(0)">山东</a></div>
                                <div class="item"><a data-id="14" href="javascript:void(0)">安徽</a></div>
                                <div class="item"><a data-id="15" href="javascript:void(0)">浙江</a></div>
                                <div class="item"><a data-id="16" href="javascript:void(0)">福建</a></div>
                                <div class="item"><a data-id="17" href="javascript:void(0)">湖北</a></div>
                                <div class="item"><a data-id="18" href="javascript:void(0)">湖南</a></div>
                                <div class="item"><a data-id="19" href="javascript:void(0)">广东</a></div>
                                <div class="item"><a data-id="20" href="javascript:void(0)">广西</a></div>
                                <div class="item"><a data-id="21" href="javascript:void(0)">江西</a></div>
                                <div class="item"><a data-id="22" href="javascript:void(0)">四川</a></div>
                                <div class="item"><a data-id="23" href="javascript:void(0)">海南</a></div>
                                <div class="item"><a data-id="24" href="javascript:void(0)">贵州</a></div>
                                <div class="item"><a data-id="25" href="javascript:void(0)">云南</a></div>
                                <div class="item"><a data-id="26" href="javascript:void(0)">西藏</a></div>
                                <div class="item"><a data-id="27" href="javascript:void(0)">陕西</a></div>
                                <div class="item"><a data-id="28" href="javascript:void(0)">甘肃</a></div>
                                <div class="item"><a data-id="29" href="javascript:void(0)">青海</a></div>
                                <div class="item"><a data-id="30" href="javascript:void(0)">宁夏</a></div>
                                <div class="item"><a data-id="31" href="javascript:void(0)">新疆</a></div>
                                <div class="item"><a data-id="52993" href="javascript:void(0)">港澳</a></div>
                                <div class="item"><a data-id="32" href="javascript:void(0)">台湾</a></div>
                                <div class="item"><a data-id="84" href="javascript:void(0)">钓鱼岛</a></div>
                                <div class="item"><a href="//en.jd.com/" target="_blank" data-onchange="1">海外</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="fr">
            <li class="fore1 dorpdown" id="ttbar-login">
                <div class="dt cw-icon"><i class="icon-plus-nickname"></i> <i class="ci-right"><s>◇</s></i> <a
                        class="nickname" target="_blank" href="//home.jd.com/">Cynicismsr</a></div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="userinfo">
                        <div class="u-pic"><a target="_blank" href="//home.jd.com/"><img
                                src="//i.jd.com/commons/img/no-img_mid_.jpg" width="60" height="60"></a></div>
                        <div class="u-plus"><a href="https://passport.jd.com/uc/login?ltype=logout" class="link-logout">退出</a><a
                                href="https://plus.jd.com/index" target="_blank" class="icon-plus-dropdown"></a></div>
                        <div class="u-msg"><a href="https://plus.jd.com/index" target="_blank">试用PLUS会员领免运费券&gt;</a>
                        </div>
                    </div>
                    <div class="badge-list"><a href="javascript:void(0);" class="badge-list-prev">&lt;</a>
                        <div class="u-badges" style="position: relative;">
                            <div class="badge-panel-main" style="width: 740px; left: 0px; position: absolute;">
                                <div class="badge-panel fore1 ui-switchable-panel-selected u-dis"
                                     style="float: left; display: block;"><a href="https://plus.jd.com/index"
                                                                             target="_blank"><i></i>
                                    <p class="u-name">免费试用</p></a></div>
                                <div class="badge-panel fore2" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i>
                                    <p class="u-name">自营运费补贴</p></a></div>
                                <div class="badge-panel fore3" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i>
                                    <p class="u-name">售后服务</p></a></div>
                                <div class="badge-panel fore4" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i>
                                    <p class="u-name">评价奖励</p></a></div>
                                <div class="badge-panel fore5" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i>
                                    <p class="u-name">会员特价</p></a></div>
                                <div class="badge-panel fore6" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i>
                                    <p class="u-name">生日礼包</p></a></div>
                                <div class="badge-panel fore7" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i>
                                    <p class="u-name">专享礼包</p></a></div>
                                <div class="badge-panel fore8" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i>
                                    <p class="u-name">装机服务</p></a></div>
                                <div class="badge-panel fore9 u-dis" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i>
                                    <p class="u-name">贵宾专线</p></a></div>
                                <div class="badge-panel fore10 u-dis" style="float: left; display: block;"><a
                                        href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i>
                                    <p class="u-name">运费券</p></a></div>
                            </div>
                        </div>
                        <a href="javascript:void(0);" class="badge-list-next">&gt;</a></div>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore2">
                <div class="dt">
                    <a target="_blank" href="http://order.jd.com/center/list.action">我的订单</a>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore3 dorpdown" id="ttbar-myjd">
                <div class="dt cw-icon">
                    <i class="ci-right"><s>◇</s></i>
                    <a target="_blank" href="http://home.jd.com/">我的京东</a>
                </div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="dd-inner"><span class="loading"></span></div>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore4">
                <div class="dt">
                    <a target="_blank" href="http://vip.jd.com/">京东会员</a>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore5">
                <div class="dt">
                    <a target="_blank" href="http://b.jd.com/">企业采购</a>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore6 dorpdown" id="ttbar-apps" aid="2_955_6342">
                <div class="dt cw-icon">
                    <i class="ci-left"></i>
                    <i class="ci-right"><s>◇</s></i>
                    <a target="_blank" href="http://app.jd.com/">手机京东</a>
                </div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="dd-inner" id="ttbar-apps-main">
                        <div class="dd-spacer"></div>
                        <div class="dd-inner"><span class="loading"></span></div>
                    </div>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore7 dorpdown" id="ttbar-atte" aid="2_955_6494">
                <div class="dt cw-icon">
                    <i class="ci-right"><s>◇</s></i>关注京东
                </div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="dd-inner" id="ttbar-atte-main">
                        <div class="dd-spacer"></div>
                        <div class="dd-inner"><span class="loading"></span></div>
                    </div>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore8 dorpdown" id="ttbar-serv">
                <div class="dt cw-icon">
                    <i class="ci-right"><s>◇</s></i>客户服务
                </div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="dd-inner"><span class="loading"></span></div>
                </div>
            </li>
            <li class="spacer"></li>
            <li class="fore9 dorpdown" id="ttbar-navs">
                <div class="dt cw-icon">
                    <i class="ci-right"><s>◇</s></i>网站导航
                </div>
                <div class="dd dorpdown-layer">
                    <div class="dd-spacer"></div>
                    <div class="dd-inner"><span class="loading"></span></div>
                </div>
            </li>
        </ul>
        <span class="clr"></span>
    </div>
</div>
<div id="o-header-2013">
    <div id="header-2013" style="display:none;"></div>
</div>
<!--shortcut end-->


<div class="w w1 header clearfix">
    <div id="logo">
        <a href="http://www.jd.com/" class="link1" target="_blank"><img
                src="//misc.360buyimg.com/lib/img/e/logo-201305.png" alt="京东商城"></a>
        <a href="#none" class="link2"><b></b>"结算页"</a>
    </div>
    <div class="stepflex" id="#sflex03">
        <dl class="first done">
            <dt class="s-num">1</dt>
            <dd class="s-text">1.我的购物车<s></s><b></b></dd>
        </dl>
        <dl class="normal doing">
            <dt class="s-num">2</dt>
            <dd class="s-text">2.填写核对订单信息<s></s><b></b></dd>
        </dl>
        <dl class="normal last">
            <dt class="s-num">3</dt>
            <dd class="s-text">3.成功提交订单<s></s><b></b></dd>
        </dl>
    </div>
</div>

<!-- /header -->
<!--/ /widget/header/header.tpl -->

<div id="consignee_back" name="consignee_back" style="display:none"></div>
<div id="consignee_back_action" name="consignee_back_action" style="display:none"></div>
<div id="part-invoice_back" name="part-invoice_back" style="display:none"></div>
<div id="part-invoice_back_action" name="part-invoice_back_action" style="display:none"></div>
<div id="payment-ship_back_action" name="payment-ship_back_action" style="display:none"></div>
<div id="payment-ship_back" name="payment-ship_back" style="display:none"></div>
<input type="hidden" name="beforePickSiteId" id="beforePickSiteId"><!--自提点-->
<input type="hidden" name="beforePickDate" id="beforePickDate"><!--自提时间-->
<input type="hidden" name="beforePickSiteNum" id="beforePickSiteNum"><!--默认5个-->
<input type="hidden" name="beforePickRegionId" id="beforePickRegionId" value="-1"><!--搜索区域-->
<input type="hidden" name="beforePickSelRegionid" id="beforePickSelRegionid"><!--搜索区域-->
<input type="hidden" id="beforePickName" name="beforePickName">
<input type="hidden" id="sopCartJson"
       value="[{&quot;id&quot;:3133817,&quot;num&quot;:1,&quot;shopId&quot;:0,&quot;cid&quot;:655,&quot;gift&quot;:false}]">
<input type="hidden" id="showInvoiceSeparate" value="true"><!-- 是否支持货票分离 -->
<input type="hidden" id="invoiceSeparateSwitch" value="0"><!-- 货票分离开关值 -->
<input type="hidden" id="hasBigItem" value="false">
<input type="hidden" id="hasGiftCardSku" value="false">
<input type="hidden" id="sopNotPutInvoice" value="false">
<input type="hidden" id="isChangeItemByArea" value="false">
<input type="hidden" id="hasTang9" value="false">
<input type="hidden" id="isHasSam" value="false">
<input type="hidden" id="needPay" value="5199.00">
<input type="hidden" id="consignee_id" name="consignee_id" value="138065578">
<input type="hidden" id="hideAreaIds" value="12-904-905-50601">
<input type="hidden" id="isPresale" value="false">
<input type="hidden" id="presaleStepPay" value="">
<input type="hidden" id="flowType" value="">
<input type="hidden" id="flowId" value="">
<input type="hidden" id="cur_payid" value="4">
<input type="hidden" id="showCheckCode" value="false">
<input type="hidden" id="reset_promise_311" value="0">
<input type="hidden" id="resetFlag" value="0000000000">
<input type="hidden" id="easyBuyFlag" value="">
<input type="hidden" id="ui-dialog-close" value="">
<input type="hidden" id="overseaPurchaseCookies" value="">
<input type="hidden" id="isHasSimCard" value="false">
<input type="hidden" id="ignorePriceChange" value="0">
<input type="hidden" id="canBaitiaoDetail" value="true">
<input type="hidden" id="getEquipInfo" value="true">
<input type="hidden" id="selfPickShutDownFlag" value="1">
<input type="hidden" id="TrackID" name="TrackID"
       value="1Fa9Sl_xN_IKYMtdsVMNHYJ4uMQexnGWKcKXli9opz75d-cMhQXszzgFQnFtu3iIXEWEg1p6LWhlY2LV8Npwxb7giNRsvBmDSSzXjIs4ELVgMv3qdbgcMIIw6KCneCYo2">
<input type="hidden" id="invokeNewCouponInterface" name="invokeNewCouponInterface" value="true">
<input type="hidden" id="submitButtonABTest" value="0">
<input type="hidden" id="eid"
       value="LA2RIGQ3LAZCG3LNSAL6UNTO2IWHO56KMWUPFIF23L4DTK7SKCH7MVKVWD3TE2R6TTQVAXIBFVOSIH5Y7CGRUTTPEU">
<input type="hidden" id="fp" value="bf3743110a6af87f48db86592f42a07e">
<input type="hidden" id="baitiaoPayRequest" value="plan=1">
<input type="hidden" id="baitiaoPayRepayDateRequest" value="repayDate=2017-03-26 08:45:54">
<input type="hidden" id="jdpy_cardInfo" value="abc_3276">
<form id="direct_pay" action="https://cashier.jd.com/direct/directPay.action" method="post">
    <input type="hidden" name="orderId">
    <input type="hidden" name="toType">
    <input type="hidden" name="orderType">
    <input type="hidden" name="directPayInfoJson">
    <input type="hidden" name="payMethod">
    <input type="hidden" name="key">
</form>
<input type="hidden" id="lastneedPay" value="5199.00">
<input type="hidden" id="btNeedPay" value="5199.00">
<input type="hidden" id="isNewVertual" name="isNewVertual" value="true">
<input type="hidden" id="isBestCoupon" name="isBestCoupon">
<input type="hidden" id="agreeNoRefundInMain" value="false">

<input type="hidden" id="allFreightWeight" value="0.390kg">
<input type="hidden" id="overFreightWeight" value="">
<input type="hidden" id="copywritingContent" value="0">
<input type="hidden" id="bigItemCopywritingContent" value="0">
<input type="hidden" id="normalCopywritingContent" value="0">
<input type="hidden" id="calendarCopywritingContent" value="0">
<input type="hidden" id="needForJZD" value="0">
<input type="hidden" id="needForJZDcalendar" value="0">
<input type="hidden" id="allSxFreightWeight" value="">
<input type="hidden" id="overSxFreightWeight" value="">
<input type="hidden" id="totalFreightWeightShow" value="0.390">
<!-- main -->
<div id="container">
    <div id="content" class="w">
        <!-- <div class="m"> -->
        <div class="checkout-tit">
            <span class="tit-txt">填写并核对订单信息</span>
        </div>
        <!--<div class="mc">-->
        <div class="checkout-steps">
            <!--  /widget/consignee-step/consignee-step.tpl -->
            <div class="step-tit">
                <h3>收货人信息</h3>
                <div class="extra-r">
                    <a href="#none" class="ftx-05" onclick="use_NewConsignee()"
                       clstag="pageclick|keycount|trade_201602181|3">新增收货地址</a>
                    <input id="del_consignee_type" value="0" type="hidden">
                </div>
            </div>

            <div class="step-cont">
                <div id="consignee-addr" class="consignee-content">
                    <div class="consignee-scrollbar">
                        <div class="ui-scrollbar-main">
                            <div class="consignee-scroll">
                                <div class="consignee-cont" id="consignee1" style="height: 42px;">
                                    <ul id="consignee-list">

                                        <li class="ui-switchable-panel ui-switchable-panel-selected"
                                            style="display: list-item;" id="consignee_index_138065578"
                                            selected="selected">
                                            <div class="consignee-item item-selected" consigneeid="138065578"
                                                 provinceid="12" cityid="904" id="consignee_index_div_138065578"
                                                 consigneetype="0" clstag="pageclick|keycount|trade_201602181|1">
                                                <span limit="8" title="许彬">许彬</span><b></b>
                                            </div>
                                            <div class="addr-detail">
                                                <!--yanwenqi 全球购添加idcard 不是国际购的要不要显示？ -->
                                                <span class="addr-name" limit="6" title="许彬">许彬</span>
                                                <span class="addr-info" limit="45" title="江苏 南京市 江宁区 秣陵镇弘景大道3601号">江苏 南京市 江宁区 秣陵镇弘景大道3601号</span>
                                                <span class="addr-tel">156****0077</span>
                                            </div>
                                            <div class="op-btns" consigneeid="138065578">
                                                <a href="#none" class="ftx-05 setdefault-consignee" fid="138065578"
                                                   clstag="pageclick|keycount|trade_201602181|4">设为默认地址</a> <a
                                                    href="#none" class="ftx-05 edit-consignee" fid="138065578"
                                                    clstag="pageclick|keycount|trade_201602181|6">编辑</a>
                                                <a href="#none" class="ftx-05 del-consignee" fid="138065578"
                                                   clstag="pageclick|keycount|trade_201602181|5">删除</a>
                                            </div>
                                        </li>
                                        <!---->
                                        <input id="hidden_consignees_size" value="2" style="display: none;"
                                               type="hidden">
                                        <li class="ui-switchable-panel ui-switchable-panel-selected"
                                            style="display: none;" id="consignee_index_138043668">
                                            <div class="consignee-item" consigneeid="138043668" provinceid="12"
                                                 cityid="959" id="consignee_index_div_138043668"
                                                 clstag="pageclick|keycount|trade_201602181|1">
                                                <span limit="8" title="许彬">许彬</span><b></b>
                                            </div>
                                            <div class="addr-detail">
                                                <!--yanwenqi 全球购添加idcard 不是国际购的要不要显示？ -->
                                                <span class="addr-name" limit="6" title="许彬">许彬</span>
                                                <span class="addr-info" limit="45" title="江苏 泰州市 兴化市 茅山镇薛家462号">江苏 泰州市 兴化市 茅山镇薛家462号</span>
                                                <span class="addr-tel">156****0077</span>
                                            </div>

                                            <div class="op-btns" consigneeid="138043668">
                                                <a href="#none" class="ftx-05 setdefault-consignee" fid="138043668"
                                                   clstag="pageclick|keycount|trade_201602181|4">设为默认地址</a> <a
                                                    href="#none" class="ftx-05 edit-consignee" fid="138043668"
                                                    clstag="pageclick|keycount|trade_201602181|6">编辑</a>
                                                <a href="#none" class="ftx-05 del-consignee" fid="138043668"
                                                   clstag="pageclick|keycount|trade_201602181|5">删除</a>
                                            </div>
                                        </li>
                                        <li class="ui-switchable-panel ui-switchable-panel-selected selfPickInCommon"
                                            style="display:none" id="consignee_index_0">
                                            <div class="consignee-item selfPickInCommonItem hide"
                                                 consigneeid="2147483647" id="consignee_index_div_0"><span limit="8"
                                                                                                           title="隐藏地址">隐藏地址 </span><b></b>
                                            </div>
                                            <div class="addr-detail hide"><span class="addr-name" limit="6"
                                                                                title="隐藏地址">隐藏地址</span><span
                                                    class="addr-info" limit="45" title=""></span><span
                                                    class="addr-tel"></span></div>
                                            <div class="op-btns hide" consigneeid=""></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="addr-switch switch-on" id="consigneeItemAllClick" onclick="show_ConsigneeAll()"
                     clstag="pageclick|keycount|trade_201602181|2">
                    <span>更多地址</span><b></b>
                </div>
                <div class="addr-switch switch-off hide" id="consigneeItemHideClick" onclick="hide_ConsigneeAll()">
                    <span>收起地址</span><b></b>
                </div>
                <input id="consigneeList_giftSenderConsigneeMobile" value="" type="hidden">
                <input id="consigneeList_giftSenderConsigneeName" value="" type="hidden">
            </div>
            <!--/ /widget/consignee-step/consignee-step.tpl -->
            <div class="hr"></div>
            <!--/ /widget/shopping-list/shopping-list.tpl -->
            <div id="shipAndSkuInfo">

                <div id="payShipAndSkuInfo">
                    <div class="step-tit">
                        <h3>支付方式</h3>
                    </div>
                    <div class="step-cont">
                        <div class="payment-list" id="">
                            <div class="list-cont">
                                <ul id="payment-list">
                                    <input id="instalmentPlan" value="" type="hidden">


                                    <li style="cursor: pointer;" onclick="save_Pay(1,0,1);"
                                        clstag="pageclick|keycount|trade_201602181|8">
                                        <div class=" payment-item item-selected online-payment " for="pay-method-1"
                                             payname="货到付款" payid="1" onlinepaytype="0"><b></b>
                                            货到付款<span class="qmark-icon qmark-tip"
                                                      data-tips="送货上门后再收款，支持现金、POS机刷卡、支票支付 &lt;a href='//help.jd.com/user/issue/103-983.html' target='_blank' class='ftx-05'&gt;查看服务及配送范围&lt;/a&gt;"></span>
                                        </div>
                                    </li>

                                    <li style="cursor: pointer;" onclick="save_Pay(4,1,1);"
                                        clstag="pageclick|keycount|PaymentLead__2016030411|1">
                                        <div class="payment-item  online-payment" for="pay-method-4" payname="白条支付"
                                             payid="4" onlinepaytype="1"><b></b>
                                            白条支付 <span id="cod_bt" class="qmark-icon qmark-tip" limit="7724.75"
                                                       data-tips="&lt;b class='ftx-04'&gt;可用额度：￥7724.75&lt;/b&gt;&lt;br/&gt;打白条，最高可享30天免息，还可分期支付"></span>
                                        </div>
                                    </li>


                                    <li style="cursor: pointer;" onclick="save_Pay(4,2,1);"
                                        clstag="pageclick|keycount|PaymentLead__2016030411|3">
                                        <div class="payment-item  online-payment" for="pay-method-4" payname="微信支付"
                                             payid="4" onlinepaytype="2"><b></b>
                                            微信支付 <span class="qmark-icon qmark-tip"
                                                       data-tips="提交订单之后，使用微信扫描二维码完成支付"></span></div>
                                    </li>

                                    <li style="cursor: pointer;" onclick="save_Pay(4,3,1);"
                                        clstag="pageclick|keycount|PaymentLead__2016030411|2">

                                        <div class="payment-item  online-payment" for="pay-method-4" payname="京东支付"
                                             payid="4" onlinepaytype="3"><b></b>
                                            京东支付 <span class="qmark-icon qmark-tip"
                                                       data-tips="绑定银行卡，支付更快捷 &lt;a href='//help.jd.com/user/issue/list-173-228.html' target='_blank' class='ftx-05'&gt;了解京东支付&lt;/a&gt;"></span>
                                        </div>
                                    </li>


                                    <li style="cursor: pointer;" onclick="save_Pay(4,0,1);"
                                        clstag="pageclick|keycount|trade_201602181|7">

                                        <div class=" payment-item  online-payment " for="pay-method-4" payname="在线支付"
                                             payid="4" onlinepaytype="0"><b></b>
                                            在线支付 <span id="cod" class="qmark-icon qmark-tip"
                                                       data-tips="即时到账，支持绝大数银行借记卡及部分银行信用卡 &lt;a href='//help.jd.com/user/issue/223-562.html' target='_blank' class='ftx-05'&gt; 查看银行及限额&lt;/a&gt;"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <!--/ /widget/payment-step/payment-step.tpl -->
                    <div class="step-tit">
                        <h3>送货清单</h3>
                        <div class="extra-r">
                            <a class="price-desc" id="price-desc" href="#none"
                               data-tips="因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，商品售价以本结算页商品价格为准；如有疑问，请您立即联系销售商咨询。">
                                <i></i>&nbsp;价格说明
                            </a>
                            <a href="http://localhost:8107/" id="cartRetureUrl" class="return-edit ftx-05"
                               clstag="pageclick|keycount|trade_201602181|15">返回修改购物车</a>
                        </div>
                    </div>
                    <div class="step-cont" id="skuPayAndShipment-cont">
                        <!--添加商品清单  zhuqingjie -->
                        <div class="shopping-lists" id="shopping-lists">
                            <!--定义大商品清单LIST-->
                            <div class="shopping-list ABTest">
                                <div class="goods-list">
                                    <!--购物车单品商品-->
                                    <div class="goods-tit">
                                        <h4 class="vendor_name_h" id="0">商家：自营</h4>
                                    </div>

                                    <!--单品开始-->
                                    <div class="goods-items"></div>
                                    <div class="goods-items">
                                        <div class="goods-suit goods-last">
                                            <%--<div class="goods-suit-tit">--%>
                                            <%--<span class="sales-icon">换购</span>--%>
                                            <%--<strong>--%>
                                            <%--已购满45.00元，再加45.00元，可返回购物车领取赠品--%>
                                            <%--</strong>--%>
                                            <%--</div>--%>

                                            <c:forEach items="${cartInfos}" var="cinfo" varStatus="status">
                                                <div class="goods-item goods-item-extra" goods-id="${cinfo.id}"
                                                     sx-type="0">

                                                    <div class="p-img">
                                                        <a target="_blank"
                                                           href="http://localhost:8103/${cinfo.id}.html?dist="><img
                                                                src="${cinfo.imageUrl}"
                                                                alt=""></a>
                                                    </div>
                                                    <div class="goods-msg">
                                                        <div class="goods-msg-gel">
                                                            <div class="p-name">
                                                                <a href="http://localhost:8103/${cinfo.id}.html?dist="
                                                                   target="_blank">
                                                                        ${cinfo.name}
                                                                </a>
                                                            </div>
                                                            <div class="p-price">
                                                                <strong class="jd-price">
                                                                    ￥ <fmt:formatNumber groupingUsed="false"
                                                                                        maxFractionDigits="2"
                                                                                        minFractionDigits="2"
                                                                                        value="${cinfo.price / 100 }"/>
                                                                </strong>
                                                                <span class="p-num">x${cinfo.num}</span>
                                                                <span id="pre-state" class="p-state"
                                                                      skuid="3133829">有货</span>
                                                                <span class="p-weight"><fmt:formatNumber
                                                                        groupingUsed="false" maxFractionDigits="3"
                                                                        minFractionDigits="3"
                                                                        value="${cinfo.weight / 1000 * cinfo.num}"/>kg</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <i class="p-icon p-icon-w sevenicon"></i><span
                                                            class="ftx-04 withouthk seven">7天无理由退货</span>
                                                    </div>

                                                    <div class="clr"></div>
                                                </div>
                                            </c:forEach>

                                        </div>
                                    </div>
                                </div>
                                <div class="dis-modes">
                                    <!-- 实物商品搭售虚拟商品 -->
                                    <div class="mode-item mode-tab">
                                        <div class="mode-item-tit">
                                            <h4>配送方式</h4>
                                            <div class="extral-r"><a id="jd-goods-item" class="cor-goods"
                                                                     href="#none"><i></i>对应商品</a></div>
                                        </div>
                                        <div class="mode-tab-nav">
                                            <ul>
                                                <li class="mode-tab-item curr" id="jd_shipment_item"
                                                    onclick="doSwithTab('pay')"
                                                    clstag="pageclick|keycount|trade_201602181|11">
                                                    <span id="jdShip-span-tip" class="m-txt">京东快递<i
                                                            class="qmark-icon qmark-tip"
                                                            data-tips="此订单支持预约配送，您可以选择指定的时间段"></i></span><b></b>
                                                </li>
                                                <li class="mode-tab-item hide" id="pick_shipment_item"
                                                    onclick="doSwithTab('picksite')"
                                                    clstag="pageclick|keycount|trade_201602181|12">

                                                    <span class="m-txt">上门自提<i class="qmark-icon qmark-tip"
                                                                               data-tips="自提时付款，支持现金、POS刷卡、支票支付&lt;a href='http://help.jd.com/user/issue/100-181.html' target='_blank' class='ftx-05'&gt;查看自提流程&lt;/a&gt;"></i></span><b></b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="mode-tab-con  ui-switchable-panel-selected" id="jd_shipment">
                                            <div class="tips-618 hide tips-618-for-normal" style="z-index:9">
                                                <div class="tips-con">
                                                    <i>&nbsp;</i>
                                                    <p class="tips-m">
                                                        双11大促恰逢周末，请确认好收货地址和时间以保证货物及时送达。
                                                    </p>
                                                </div>
                                            </div>
                                            <ul class="mode-list">
                                                <li>
                                                    <div class="fore1" id="payment_name_div"><span
                                                            class="ftx-03">付款方式：</span>现金
                                                    </div>
                                                </li>

                                                <script type="text/javascript">
                                                    (function () {

                                                        var myDate = new Date();
                                                        var day = "周" + "日一二三四五六".charAt(myDate.getDay());

                                                        $("#day").text("[" + day + "]");
                                                        $("#month").text("预计&nbsp;" + myDate.getMonth() + "月" + myDate.getDate() + "日");
                                                    });

                                                </script>


                                                <li class="delivery-info-li-none-border">
                                                    <div class="fore1" id="jd_shipment_calendar_date"><span
                                                            class="mode-label ftx-03">标&nbsp;&nbsp;准&nbsp;&nbsp;达：</span>
                                                        <div class="mode-infor" id="month">预计&nbsp;2月25日<span
                                                                class="ftx-04" id="day">[周六]</span>&nbsp;09:00-15:00&nbsp;送达
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div class="clr"></div>
                                <div class="weight-cont total-freight-weight hide" style="display: block;">总重量：<em
                                        class="ftx-03 total-freight-weight-val">0.390kg</em></div>
                            </div>

                            <!--shopping-list 结束-->

                            <br><br>
                            <div class="clr"></div>
                        </div>
                        <!--shopping-lists 结束-->
                    </div>
                </div>
            </div>
            <!--添加商品清单结束-->
            <!--添加备注信息-->
            <div class="order-remarks hide" id="orderRemarkItem">
            </div>
            <!--  /widget/invoice-step/invoice-step.tpl -->
            <div class="hr"></div>
            <!-- 发票信息 -->
            <div class="step-content">
                <div id="part-inv" class="invoice-cont">
                    <span class="mr10"> 普通发票（电子） &nbsp; </span>
                    <span class="mr10"> 个人&nbsp; </span>
                    <span class="mr10"> 明细&nbsp; </span>

                    <a href="#none" id="invoiceEdit" class="ftx-05 invoice-edit" onclick="edit_Invoice()"
                       clstag="pageclick|keycount|trade_201602181|16">修改</a>
                </div>
            </div>

        </div>        <!-- </div> -->
        <!-- </div> -->
        <!--  /widget/order-summary/order-summary.tpl -->
        <div class="order-summary">
            <!--  预售 计算支付展现方式 begin -->
            <div class="statistic fr">
                <div class="list">
                    <span><em class="ftx-01">${cartInfos.size()}</em> 件商品，总商品金额：</span>
                    <em class="price" id="warePriceId" v="5199">￥<fmt:formatNumber groupingUsed="false"
                                                                                   maxFractionDigits="2"
                                                                                   minFractionDigits="2"
                                                                                   value="${totalPrices / 100 }"/></em>
                </div>
                <div class="list">
                    <span>返现：</span>
                    <em class="price" id="cachBackId" v="0"> -￥0.00</em>
                </div>
                <div class="list">
                    <span>运费：</span>
                    <em class="price" id="freightPriceId"><i class="freight-icon"></i><font color="#000000">
                        ￥0.00</font></em>
                </div>
                <div class="list" style="display:block;">
                    <span>服务费：</span>
                    <em class="price" id="serviceFeeId"><font color="#000000"> ￥0.00</font></em>
                </div>
                <div class="list" style="display:block;">
                    <span>退换无忧：</span>
                    <em class="price" id="buyerFreightInsuranceId"><font color="#000000"> ￥0.00</font></em>
                </div>
                <div class="list" id="showCouponPrice" style="display:none;">
                    <input id="couponPriceNum" type="hidden" value="0">
                    <input id="couponPricehidden" type="hidden" value="0">
                    <span>商品优惠：</span><em class="price" id="couponPriceId" style="display: none;">-￥0.00</em>
                </div>
                <div class="list" id="showFreeFreight" style="display:none;">
                    <input id="freeFreightPriceNum" type="hidden" value="0">
                    <input id="freeFreightPricehidden" type="hidden" value="0">
                    <span>运费优惠：</span><em class="price" id="freeFreightPriceId">-￥0.00</em>
                </div>
                <div class="list" id="showGiftCardPrice" style="display:none;">
                    <input id="giftCardPricehidden" type="hidden" value="0">
                    <input id="giftCardPriceNum" type="hidden" value="0">
                    <span> 礼品卡： </span><em class="price" id="giftCardPriceId">-￥0.00</em>
                </div>
                <div class="list" id="showUsedJdBean" style="display:none;">
                    <input type="hidden" id="jdBeanexChange" value="0.00">
                    <span>京豆：</span><em class="price" id="usedJdBeanId">-￥0.00</em>
                </div>
                <div class="list" id="showUsedOrderBalance" style="display:none;">
                    <input type="hidden" id="useBalanceShowDiscount" value="0.00">
                    <span>余额：</span><em class="price" id="usedBalanceId">-￥0.00</em>
                </div>
                <div class="list" id="showPeriodFee" style="display:none;">
                    <span>分期手续费(由分期银行收取)：</span><em class="price" id="periodFee">￥0.00</em>
                </div>
            </div>
            <div class="clr"></div>
        </div>
        <!--/ /widget/order-summary/order-summary.tpl -->

        <div class="trade-foot">
            <div class="trade-foot-detail-com">
                <div class="fc-price-info">
                    <span class="price-tit">应付总额：</span>
                    <span class="price-num" id="sumPayPriceId">￥5199.00</span>
                </div>
                <div class="fc-baitiao-info" style="display: none;"><span>白条支付：<em>30天免息</em>（不使用优惠）<i
                        class="bt-edit-icon" onclick="javascript:btDetail();"
                        clstag="pageclick|keycount|PaymentLead__2016030411|5"></i></span></div>
                <div class="giftbuy-info">
                    <label class="noShowMoney hide" id="giftBuyHidePriceDiv">
                        <input type="checkbox" id="giftBuyHidePrice" checked="">包装内不显示礼品价格
                    </label>
                </div>
                <div class="fc-consignee-info">
                    <span class="mr20" id="sendAddr">寄送至： 江苏 南京市 江宁区 秣陵镇  弘景大道3601号</span>
                    <span id="sendMobile">收货人：许彬 156****0077</span>
                </div>
            </div>


            <div id="checkout-floatbar" class="group">
                <div class="ui-ceilinglamp checkout-buttons">
                    <div class="sticky-placeholder hide" style="display: none;">
                    </div>
                    <div class="sticky-wrap">
                        <div class="inner">
                            <button type="submit" class="checkout-submit" id="order-submit"
                                    onclick="javascript:submit_Order();" clstag="pageclick|keycount|trade_201602181|25">
                                提交订单<b></b>
                            </button>

                            <span id="checkCodeDiv"></span>

                            <div class="checkout-submit-tip" id="changeAreaAndPrice" style="display: none;">
                                由于价格可能发生变化，请核对后再提交订单
                            </div>
                            <!--div style="display:none" id="factoryShipCodShowDivBottom" class="dispatching">
                              部分商品货到付款方式：先由京东配送“提货单”并收款，然后厂商发货。
                            </div-->
                        </div>
                        <span id="submit_message" style="display:none" class="submit-error"></span>

                        <div class="submit-check-info" id="submit_check_info_message" style="display:none"></div>
                    </div>
                </div>
            </div>

        </div>
        <!--/ /widget/checkout-floatbar/checkout-floatbar.tpl -->

        <!--  /widget/backpanel/backpanel.tpl -->
        <div id="backpanel">
            <div id="backpanel-inner" class="hide switchOn" style="right: -156px;">
                <div class="bp-item bp-item-survey">
                    <a href="http://surveys.jd.com/index.php?r=survey/index/sid/416587/lang/zh-Hans" class="survey"
                       target="_blank">我要反馈</a>
                </div>
                <div class="bp-item bp-item-backtop" data-top="0">
                    <a href="#none" class="backtop" target="_self">返回顶部</a>
                </div>
            </div>
        </div>
        <!--/ /widget/backpanel/backpanel.tpl -->

    </div>

</div>


<!-- /main -->

<!--  /widget/footer/footer.tpl -->
<!-- footer -->
<div id="service-2014">
    <div class="slogen">
		<span class="item fore1">
			<i></i><b>多</b>品类齐全，轻松购物
		</span>
        <span class="item fore2">
			<i></i><b>快</b>多仓直发，极速配送
		</span>
        <span class="item fore3">
			<i></i><b>好</b>正品行货，精致服务
		</span>
        <span class="item fore4">
			<i></i><b>省</b>天天低价，畅选无忧
		</span>
    </div>
    <div class="w">
        <dl class="fore1">
            <dt>购物指南</dt>
            <dd>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-29.html">购物流程</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-151.html">会员介绍</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-297.html">生活旅行/团购</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue.html">常见问题</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-136.html">大家电</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/index.html">联系客服</a></div>
            </dd>
        </dl>
        <dl class="fore2">
            <dt>配送方式</dt>
            <dd>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-81-100.html">上门自提</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-81.html">211限时达</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/103-983.html">配送服务查询</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/109-188.html">配送费收取标准</a></div>
                <div><a target="_blank" href="//en.jd.com/chinese.html">海外配送</a></div>
            </dd>
        </dl>
        <dl class="fore3">
            <dt>支付方式</dt>
            <dd>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-172.html">货到付款</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-173.html">在线支付</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-176.html">分期付款</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-174.html">邮局汇款</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-175.html">公司转账</a></div>
            </dd>
        </dl>
        <dl class="fore4">
            <dt>售后服务</dt>
            <dd>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/321-981.html">售后政策</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-132.html">价格保护</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/130-978.html">退款说明</a></div>
                <div><a rel="nofollow" target="_blank" href="//myjd.jd.com/repair/repairs.action">返修/退换货</a></div>
                <div><a rel="nofollow" target="_blank" href="//help.jd.com/user/issue/list-50.html">取消订单</a></div>
            </dd>
        </dl>
        <dl class="fore5">
            <dt>特色服务</dt>
            <dd>
                <div><a target="_blank" href="//help.jd.com/user/issue/list-133.html">夺宝岛</a></div>
                <div><a target="_blank" href="//help.jd.com/user/issue/list-134.html">DIY装机</a></div>
                <div><a rel="nofollow" target="_blank" href="//fuwu.jd.com/">延保服务</a></div>
                <div><a rel="nofollow" target="_blank" href="//o.jd.com/market/index.action">京东E卡</a></div>
                <div><a rel="nofollow" target="_blank" href="//mobile.jd.com/">京东通信</a></div>
                <div><a rel="nofollow" target="_blank" href="//s.jd.com/">京东JD+</a></div>
            </dd>
        </dl>
        <span class="clr"></span>
    </div>
</div>


<div class="w">
    <div id="footer-2014">
        <div class="links"><a rel="nofollow" target="_blank" href="//www.jd.com/intro/about.aspx">关于我们</a>|<a
                rel="nofollow" target="_blank" href="//www.jd.com/contact/">联系我们</a>|<a rel="nofollow" target="_blank"
                                                                                        href="//www.jd.com/contact/joinin.aspx">商家入驻</a>|<a
                rel="nofollow" target="_blank" href="//jzt.jd.com">营销中心</a>|<a rel="nofollow" target="_blank"
                                                                               href="//app.jd.com/">手机京东</a>|<a
                target="_blank" href="//club.jd.com/links.aspx">友情链接</a>|<a target="_blank"
                                                                            href="//media.jd.com/">销售联盟</a>|<a
                href="//club.jd.com/" target="_blank">京东社区</a>|<a href="//sale.jd.com/act/FTrWPesiDhXt5M6.html"
                                                                  target="_blank">风险监测</a>|<a
                href="//sale.jd.com/act/cyeSVqiO8GB.html" target="_blank" clstag="h|keycount|2016|43">隐私政策</a>|<a
                href="//gongyi.jd.com" target="_blank">京东公益</a>|<a href="//en.jd.com/" target="_blank">English Site</a>|<a
                href="//en.jd.com/help/question-58.html" target="_blank">Contact Us</a></div>
        <div class="copyright"><a target="_blank"
                                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000088"><img
                src="//img13.360buyimg.com/cms/jfs/t2293/321/1377257360/19256/c267b386/56a0a994Nf1b662dc.png"> 京公网安备
            11000002000088号</a>&nbsp;&nbsp;|&nbsp;&nbsp;京ICP证070359号&nbsp;&nbsp;|&nbsp;&nbsp;<a target="_blank"
                                                                                                href="//img14.360buyimg.com/da/jfs/t256/349/769670066/270505/3b03e0bb/53f16c24N7c04d9e9.jpg">互联网药品信息服务资格证编号(京)-经营性-2014-0008</a>&nbsp;&nbsp;|&nbsp;&nbsp;新出发京零&nbsp;字第大120007号<br>互联网出版许可证编号新出网证(京)字150号&nbsp;&nbsp;|&nbsp;&nbsp;<a
                rel="nofollow"
                href="//img30.360buyimg.com/uba/jfs/t1036/328/1487467280/1405104/ea57ab94/5732f60aN53b01d06.jpg"
                target="_blank">出版物经营许可证</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="//misc.360buyimg.com/wz/wlwhjyxkz.jpg"
                                                                        target="_blank">网络文化经营许可证京网文[2014]2148-348号</a>&nbsp;&nbsp;|&nbsp;&nbsp;违法和不良信息举报电话：4006561155<br>Copyright&nbsp;©&nbsp;2004-2017&nbsp;&nbsp;京东JD.com&nbsp;版权所有&nbsp;&nbsp;|&nbsp;&nbsp;消费者维权热线：4006067733&nbsp;&nbsp;&nbsp;&nbsp;<a
                class="mod_copyright_license" target="_blank" href="//sale.jd.com/act/7Y0Rp81MwQqc.html">经营证照</a><br>京东旗下网站：<a
                href="https://www.jdpay.com/" target="_blank">京东钱包</a>
        </div>
        <div class="authentication">
            <a rel="nofollow" target="_blank" href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202007080200026">
                <img width="103" height="32" alt="经营性网站备案中心"
                     src="//img12.360buyimg.com/da/jfs/t535/349/1185317137/2350/7fc5b9e4/54b8871eNa9a7067e.png"
                     class="err-product">
            </a>
            <script type="text/JavaScript">function CNNIC_change(eleId) {
                var str = document.getElementById(eleId).href;
                var str1 = str.substring(0, (str.length - 6));
                str1 += CNNIC_RndNum(6);
                document.getElementById(eleId).href = str1;
            }
            function CNNIC_RndNum(k) {
                var rnd = "";
                for (var i = 0; i < k; i++) rnd += Math.floor(Math.random() * 10);
                return rnd;
            }</script>
            <a rel="nofollow" target="_blank" id="urlknet" tabindex="-1"
               href="https://ss.knet.cn/verifyseal.dll?sn=2008070300100000031&amp;ct=df&amp;pa=294005">
                <img border="true" width="103" height="32" onclick="CNNIC_change('urlknet')"
                     oncontextmenu="return false;" name="CNNIC_seal" alt="可信网站"
                     src="//img11.360buyimg.com/da/jfs/t643/61/1174624553/2576/4037eb5f/54b8872dNe37a9860.png"
                     class="err-product">
            </a>
            <a rel="nofollow" target="_blank" href="http://www.bj.cyberpolice.cn/index.do">
                <img width="103" height="32" alt="网络警察"
                     src="//img12.360buyimg.com/cms/jfs/t2050/256/1470027660/4336/2a2c74bd/56a89b8fNfbaade9a.jpg"
                     class="err-product">
            </a>
            <a rel="nofollow" target="_blank" href="https://search.szfw.org/cert/l/CX20120111001803001836">
                <img width="103" height="32"
                     src="//img11.360buyimg.com/da/jfs/t451/173/1189513923/1992/ec69b14a/54b8875fNad1e0c4c.png"
                     class="err-product">
            </a>
            <a target="_blank" href="http://www.12377.cn"><img width="103" height="32"
                                                               src="//img30.360buyimg.com/da/jfs/t1915/215/1329999964/2996/d7ff13f0/5698dc03N23f2e3b8.jpg"></a>
            <a target="_blank" href="http://www.12377.cn/node_548446.htm"><img width="103" height="32"
                                                                               src="//img14.360buyimg.com/da/jfs/t2026/221/2097811452/2816/8eb35b4b/5698dc16Nb2ab99df.jpg"></a>
        </div>
    </div>
</div>
</body>
</html>