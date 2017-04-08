/**
 * sdk - login2015.js
 *
 */
var LoginConstant = {
    HTTP_SCHEME: "http:",
    HTTPS_SCHEME: "https:",
    REMOTE_COUNTRY_CODE: "/js/login.countrycode-1130.js",
    LOCAL_COUNTRY_CODE: "user/passport-2015/js/login.countrycode.js"
};

var Util = {
    Cookie: {
        set: function (name, value, expire) {
            var exp = new Date();
            exp.setTime(exp.getTime() + expire * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + encodeURIComponent(value, "UTF-8") + ";expires=" + exp.toGMTString() + ";domain=passport.jd.com;path=/";
        },
        get: function (key) {
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split('=');
                var name = parts.shift();
                var cookie = parts.join('=');
                if (key && key === name) {
                    return cookie;
                }
            }
        },
        setALCookie: function () {
            if ($("input[name='chkRememberMe']").prop("checked")) {
                var Days = 3 * 30;
                this.set("alpin", $("#loginname").val(), Days);
            } else {
                var v = this.get("alpin");
                if (v) {
                    this.set("alpin", "", -100);
                }
            }
        }
    },
    Header: {
        getProtocol: function(){
            var parentScheme = '';
            try{
                parentScheme = parent.location.protocol;
            }catch(e){
            }

            if(!parentScheme){
                var referer = document.referrer;
                if(referer.indexOf(LoginConstant.HTTPS_SCHEME) == 0){
                    parentScheme = LoginConstant.HTTPS_SCHEME;
                }else{
                    parentScheme = LoginConstant.HTTP_SCHEME;
                }
            }
            return parentScheme;
        }
    }
};


(function(){

    /**
     * 加密密码
     * @param pwd
     */
    function getEntryptPwd(pwd){
        var pubKey = $('#pubKey').val();
        if(!pwd || !pubKey || !SysConfig.encryptInfo){
            return pwd;
        }
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(pubKey);
        return encrypt.encrypt(pwd);
    }

    /**
     * 初始化国家代码弹层请求
     *
     * @param obj
     */
    function initCountryCode(obj) {
        if (obj.countryTips) {
            var resURL = LoginConstant.REMOTE_COUNTRY_CODE;
            if (obj.localRes) {
                resURL = LoginConstant.LOCAL_COUNTRY_CODE;
            }
            seajs.use(resURL, function (CountryCodeLayer) {
                CountryCodeLayer.init();
            });
        }
    }

    // //显示验证码
    // function showAuthCode(){
    //     if($("#o-authcode").css("display")!="none"){
    //         return;
    //     }
    //     var loginUrl = "../uc/showAuthCode";
    //     var loginName=$("#loginname").val();
    //     $.ajax({
    //         type: "POST",
    //         url: loginUrl + "?r=" + Math.random()+"&version=2015",
    //         contentType: "application/x-www-form-urlencoded; charset=utf-8",
    //         data: {
    //             loginName:loginName
    //         },
    //         dataType:"text",
    //         success: function (result) {
    //             if (result) {
    //                 var obj = eval(result);
    //                 if (obj.verifycode) {
    //                     $("#o-authcode").show();
    //                     $("#JD_Verification1").click();
    //                 } else {
    //                     $("#o-authcode").hide();
    //                 }
    //             }
    //         }
    //     });
    // }

    // function rememberMeCheck(){
    //     if(!window.SysConfig.rememberMeShowEnable){
    //         return;
    //     }
    //     var loginName=$("#loginname").val();
    //     if(!loginName){
    //         return;
    //     }
    //     $.ajax({
    //         type: "POST",
    //         url: "../uc/rememberMeCheck?r=" + Math.random()+"&version=2015",
    //         contentType: "application/x-www-form-urlencoded; charset=utf-8",
    //         data: {
    //             loginName:loginName
    //         },
    //         dataType:"text",
    //         success: function (result) {
    //             var data = eval(result);
    //             if (data.caluEnable){
    //                 return;
    //             }
    //             if (data.checked) {
    //                 if($('.msg-error').text() != ""){
    //                     $('.msg-error').show();
    //                     $('.msg-warn').hide();
    //                 }else{
    //                     if($('.msg-warn').text() != ""){
    //
    //                     }else{
    //                         $('.msg-warn').html("<b></b>公共场所不建议自动登录，以防账号丢失");
    //                     }
    //                     $('.msg-warn').show();
    //                 }
    //                 $('#autoLogin').prop("checked",true);
    //             }else{
    //                 $('.msg-warn').hide();
    //                 $('#autoLogin').prop("checked",false);
    //             }
    //         }
    //     });
    // }
    //登陆操作
    function loginSubmit(callback) {
        $('#loginsubmit').text('正在登录...');

        var loginUrl = "/user/login";
        var uuid = $("#uuid").val();
        var chkRememberMe = "";
        if ($('#autoLogin').attr('checked')) {
            chkRememberMe = "on";
        }

        $.ajax({
            url: loginUrl ,
            type: "POST",
            dataType: "text",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                uuid:$('#uuid').val(),
                eid:$('#eid').val(),
                fp:$('#sessionId').val(),
                _t:$('#token').val(),
                loginType:$('#loginType').val(),
                returnUrl:$('#returnUrl').val(),
                username:$('#loginname').val(),
                password:getEntryptPwd($('#nloginpwd').val()),
                chkRememberMe:chkRememberMe,
            },
            error: function () {
                showMesInfo("网络超时，请稍后再试","error");
            },
            success: function (result) {
                if (result) {
                    var obj = eval(result);
                    if (obj.success) {
                        Util.Cookie.setALCookie();
                        var isIE = !-[1,];
                        if (isIE) {
                            var link = document.createElement("a");
                            link.href = obj.success;
                            link.style.display = 'none';
                            document.body.appendChild(link);
                            link.click();
                        } else {
                            window.location = obj.success;
                        }
                        return;
                    }

                    if (obj.transfer) {
                        window.location = obj.transfer + window.location.search;
                        return;
                    }
                    // if (obj.venture) {
                    //     window.location = "//safe.jd.com/dangerousVerify/index.action?username=" + obj.venture + "&ReturnUrl=" + encodeURI(obj.ventureRet) + "&p=" +obj.p+ "&t=" + new Date().getTime();
                    //     return;
                    // }
                    // if (obj.resetpwd) {
                    //     window.location = "//safe.jd.com/resetPwd/reset.action?username=" + obj.resetpwd;
                    //     return;
                    // }
                    if (obj.rescue) {
                        window.location = obj.rescue;
                        return;
                    }

                    if(obj._t){
                        $("#token").val(obj._t);
                    }

                    if (obj.verifycode || obj.authcode1 || obj.authcode2 || obj.emptyAuthcode) {
                        $("#o-authcode").show();
                    }
                    $("#JD_Verification1").click();
                    if (obj.authcode2) {
                        callback(obj.authcode2,"error",["#authcode"]);
                    }
                    if (obj.username) {
                        initCountryCode(obj);
                        callback(obj.username,"error",["#loginname"]);
                    }
                    if (obj.pwd) {
                        initCountryCode(obj);
                        callback(obj.pwd,"error",["#nloginpwd"]);
                        clearPwd();
                    }
                    if (obj.emptyAuthcode) {
                        callback(obj.emptyAuthcode,"error",["#authcode"]);
                    }
                }
                var input=$('.item-error').eq(0).find('input');
                var t=input.val();
                input.val("").focus().val(t);
                $("#loginsubmit").html("登&nbsp;&nbsp;&nbsp;&nbsp;录");
            }
        });
    }

    function frameLoginSubmit(callback){
        var uuid = $("#uuid").val();
        var protocol = Util.Header.getProtocol();
        var chkRememberMe = "";
        if ($('#autoLogin').attr('checked')) {
            chkRememberMe = "on";
        }

        $.ajax({
            type: "POST",
            dataType: "text",
            url: "../uc/loginService?nr=1&uuid=" + uuid + "&" + location.search.substring(1) + "&r=" + Math.random() + "&version=2015",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                uuid:$('#uuid').val(),
                eid:$('#eid').val(),
                fp:$('#sessionId').val(),
                _t:$('#token').val(),
                loginType:$('#loginType').val(),
                loginname:$('#loginname').val(),
                returnUrl:$('#returnUrl').val(),
                nloginpwd:getEntryptPwd($('#nloginpwd').val()),
                chkRememberMe:chkRememberMe,
                authcode:$('#authcode').val()
            },
            error: function () {
                showMesInfo("网络超时，请稍后再试","error");
            },
            success: function (result) {
                if (result) {
                    var obj = eval(result);
                    if (obj.success || obj.transfer) {
                        Util.Cookie.setALCookie();
                        var relayUrl = protocol + '//passport.jd.com/relay/loginRelay.htm';
                        try{
                            docRef = document.referrer;
                            var regExp = /([\w-]+)\.(jd\.hk|jd360\.hk|yiyaojd\.com|baitiao\.com)/;
                            var match = docRef.match(regExp);
                            if(match != null && match.length>=3){
                                var ua = navigator.userAgent;
                                var isIE = (ua.indexOf('MSIE') >= 0 || ua.indexOf("Trident") >= 0);
                                var hkShortDomainEnable = window.popupConfig.hkShortDomainEnable;
                                if(isIE && match[2] == "jd.hk" && hkShortDomainEnable){
                                    relayUrl = protocol + "//" + match[0] + "/relay/loginRelay.htm";
                                }else{
                                    relayUrl = protocol + "//sso." + match[2] + "/popup/redirect";
                                }
                            }
                        }catch(e){
                        }

                        if (obj.notnr) {
                            window.location.href=relayUrl;
                            return;
                        }

                        try {
                            $.ajax({
                                type: "GET",
                                url: obj.success,
                                dataType: "jsonp",
                                timeout: 1000,
                                success: function (result) {
                                    window.location.href=relayUrl;
                                    return;
                                }
                            });
                        } catch (e) {
                            window.location.href=relayUrl;
                            return;
                        }
                    }
                    if (obj.venture) {
                        var parentRef="";
                        try{
                            parentRef = document.referrer;
                        }catch(e){
                        }
                        window.parent.location = protocol + "//safe.jd.com/dangerousVerify/index.action?username=" + obj.venture + "&ReturnUrl=" + encodeURI(parentRef) + "&p=" +obj.p+ "&t=" + new Date().getTime();
                        return;
                    }
                    if (obj.resetpwd) {
                        window.parent.location = protocol + "//safe.jd.com/resetPwd/reset.action?username=" + obj.resetpwd;
                        return;
                    }
                    if (obj.rescue) {
                        window.parent.location = obj.rescue;
                        return;
                    }
                    if(obj._t){
                        $("#token").val(obj._t);
                    }

                    if (obj.verifycode || obj.authcode1 || obj.authcode2 || obj.emptyAuthcode) {
                        $("#o-authcode").show();
                    }
                    $("#JD_Verification1").click();
                    if (obj.authcode2) {
                        callback(obj.authcode2,"error",["#authcode"]);
                    }
                    if (obj.username) {
                        initCountryCode(obj);
                        callback(obj.username,"error",["#loginname"]);
                    }
                    if (obj.pwd) {
                        initCountryCode(obj);
                        callback(obj.pwd,"error",["#nloginpwd"]);
                        clearPwd();
                    }
                    if (obj.emptyAuthcode) {
                        callback(obj.emptyAuthcode,"error",["#authcode"]);
                    }
                }
                var input=$('.item-error').eq(0).find('input');
                var t=input.val();
                input.val("").focus().val(t);
                $("#loginsubmit").html("登&nbsp;&nbsp;&nbsp;&nbsp;录");
            }
        });
    }

    function showMesInfo(msg, type) {
        $('.form>.msg-wrap').empty();
        if (type == 'warn') {
            var info = '<div class="msg-warn"><b></b>' + msg + '</div>';
            $('.form>.msg-wrap').append(info);
        }
        if (type == 'error') {
            var info = '<div class="msg-error"><b></b>' + msg + '</div>';
            $('.form>.msg-wrap').append(info);
        }
    }

    /**
     * 清除密码
     */
    function clearPwd(){
        $("#nloginpwd").val("");
        $('#nloginpwd').siblings('.clear-btn').hide();
    }

    function assemblyForm(){

    }
    /**
     * 鼠标离开用户名
     */
    $('#loginname').blur(function(){
        rememberMeCheck();
    });
    window.loginSubmit=loginSubmit;
    window.assemblyForm=assemblyForm;
    window.showAuthCode=showAuthCode;
})();



