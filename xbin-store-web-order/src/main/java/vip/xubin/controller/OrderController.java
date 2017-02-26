package vip.xubin.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import vip.xubin.cart.service.CartService;
import vip.xubin.pojo.CartInfo;
import vip.xubin.utils.CookieUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * 订单Controller
 *
 * @author xubin.
 * @create 2017-02-24 上午8:57
 */

@Controller
public class OrderController {

    private static final Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Value("${COOKIE_CART_KEY}")
    private String COOKIE_CART_KEY;

    @Autowired
    private CartService cartService;

    @RequestMapping("/order/getOrderInfo")
    public String showOrder(Model model, HttpServletResponse response, HttpServletRequest request) {


        String cookieValue = CookieUtils.getCookieValue(request, COOKIE_CART_KEY);

        List<CartInfo> cartInfoList = null;

        if (StringUtils.isNotBlank(cookieValue)) {

            cartInfoList = cartService.getCartInfoListByCookiesId(cookieValue);
        }


        model.addAttribute("totalPrices", new ArrayList<CartInfo>());
        model.addAttribute("cartInfos", cartInfoList);

        return "order";
    }

}
