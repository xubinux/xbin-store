package cn.binux.order.interceptor;

import cn.binux.constant.Const;
import cn.binux.pojo.XbinResult;
import cn.binux.sso.service.UserService;
import cn.binux.utils.CookieUtils;
import com.alibaba.dubbo.config.annotation.Reference;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 拦截用户登录
 *
 * @author xubin.
 * @create 2017-02-22 下午9:27
 */

public class LoginInterceptor implements HandlerInterceptor {

    @Value("${sso_login_page}")
    private String SSO_LOGIN_PAGE;
    @Value("${redisKey.prefix.cart_order_info_profix}")
    private String CART_ORDER_INFO_PROFIX;

    @Reference(version = Const.XBIN_STORE_SSO_VERSION)
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        //执行handler之前执行此方法 true 放行 false 拦截
        String cookieValue = CookieUtils.getCookieValue(httpServletRequest, Const.TOKEN_LOGIN);
        //获取访问URL
        String url = httpServletRequest.getRequestURL().toString();

        if (url.contains("getOrderInfo")) {
            url = "http://localhost:8107/cart";
        }

        if (StringUtils.isBlank(cookieValue)) {
            //跳转登录页面
            httpServletResponse.sendRedirect(SSO_LOGIN_PAGE + "?returnUrl=" + url);
            //拦截
            return false;
        }

        XbinResult result = userService.token(cookieValue, "");

        if (result.getStatus() != 200) {
            //跳转登录页面
            httpServletResponse.sendRedirect(SSO_LOGIN_PAGE + "?returnUrl=" + url);
            //拦截
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
