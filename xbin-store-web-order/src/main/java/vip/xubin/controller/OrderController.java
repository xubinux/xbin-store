package vip.xubin.controller;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
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
    public String showOrder(String ids,String indexs,String nums, Model model, HttpServletResponse response, HttpServletRequest request) {

        String cookieValue = CookieUtils.getCookieValue(request, COOKIE_CART_KEY);

        List<CartInfo> cartInfoList = new ArrayList<>();
        List<CartInfo> cartInfos = null;
        int totalPrices = 0;
        if (StringUtils.isNotBlank(cookieValue)&&StringUtils.isNotBlank(ids)) {

            String[] idArray = ids.split(",");
            String[] indexArray = indexs.split(",");
            String[] numArray = nums.split(",");

            cartInfos = cartService.getCartInfoListByCookiesId(cookieValue);

            for (int i = 0; i < idArray.length; i++) {
                int index = Integer.parseInt(indexArray[i]);
                CartInfo cartInfo = cartInfos.get(index);

                cartInfoList.add(cartInfo);

                totalPrices += cartInfo.getSum();
                //cartInfos.remove(index);

            }
        } else {
            return "error";
        }


        model.addAttribute("totalPrices", totalPrices);
        model.addAttribute("cartInfos", cartInfoList);

        return "order";
    }
    @RequestMapping("/success")
    public String showSuccess() {


        return "success";
    }

}
