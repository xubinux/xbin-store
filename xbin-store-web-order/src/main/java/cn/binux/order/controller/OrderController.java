package cn.binux.order.controller;

import cn.binux.cart.service.CartService;
import cn.binux.constant.Const;
import cn.binux.order.service.OrderService;
import cn.binux.pojo.CartInfo;
import cn.binux.pojo.XbinResult;
import cn.binux.redis.service.JedisClient;
import cn.binux.utils.CookieUtils;
import cn.binux.utils.FastJsonConvert;
import cn.binux.utils.IDUtils;
import com.alibaba.dubbo.config.annotation.Reference;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @Value("${redisKey.prefix.cart_order_info_profix}")
    private String CART_ORDER_INFO_PROFIX;
    @Value("${redisKey.expire_time}")
    private Integer REDIS_ORDER_EXPIRE_TIME;
    @Value("${redisKey.prefix.cart_order_index_profix}")
    private String CART_ORDER_INDEX_PROFIX;

    @Reference(version = Const.XBIN_STORE_CART_VERSION)
    private CartService cartService;

    @Reference(version = Const.XBIN_STORE_REDIS_VERSION)
    private JedisClient jedisClient;

    @Reference(version = Const.XBIN_STORE_ORDER_VERSION)
    private OrderService orderService;


    @RequestMapping("/order/getOrderInfo")
    public String showOrder(String ids,String indexs,String nums, Model model, HttpServletResponse response, HttpServletRequest request) {

        String cookieValue = CookieUtils.getCookieValue(request, Const.CART_KEY);
        String userCookieValue = CookieUtils.getCookieValue(request, Const.TOKEN_LOGIN);

        List<CartInfo> cartInfoList = new ArrayList<>();
        List<CartInfo> cartInfos = null;
        int totalPrices = 0;
        if (StringUtils.isNotBlank(cookieValue) && StringUtils.isNotBlank(ids)) {

            String[] idArray = ids.split(",");
            String[] indexArray = indexs.split(",");
            String[] numArray = nums.split(",");

            cartInfos = cartService.getCartInfoListByCookiesId(cookieValue);

            for (int i = 0; i < indexArray.length; i++) {
                int index = Integer.parseInt(indexArray[i]);
                CartInfo cartInfo = cartInfos.get(index);

                cartInfoList.add(cartInfo);

                totalPrices += cartInfo.getSum();
                //cartInfos.remove(index);

            }
        } else {
            model.addAttribute("msg", "请先去购物！");
            return "error";
        }

        String orderId = IDUtils.genOrderId();
        String key = CART_ORDER_INFO_PROFIX + orderId;
        String key2 = CART_ORDER_INDEX_PROFIX + orderId;
        // 保存商品订单项
        jedisClient.set(key, FastJsonConvert.convertObjectToJSON(cartInfoList));
        // 保存商品Index --用于购物完成后删除购物车商品
        jedisClient.set(key2, indexs);
        jedisClient.expire(key, REDIS_ORDER_EXPIRE_TIME);
        jedisClient.expire(key2, REDIS_ORDER_EXPIRE_TIME);

        model.addAttribute("totalPrices", totalPrices);
        model.addAttribute("orderId", orderId);
        model.addAttribute("cartInfos", cartInfoList);

        return "order";
    }
    @RequestMapping("/success")
    public String showSuccess() {


        return "success";
    }

    /**
     * 提交订单
     *
     * @param addrId        用户地址id
     * @param noAnnoyance   运费险
     * @param paymentType   支付方式 1、货到付款，2、在线支付，3、微信支付，4、支付宝支付
     * @param shippingName  快递名称 固定顺丰速运
     * @param response
     * @param request
     * @return
     *        成功 跳转 支付页面
     *        错误 跳转 错误页面
     */
    @RequestMapping("/order/getPay")
    public String getPay(Integer addrId, Integer noAnnoyance, Integer paymentType,String orderId, String shippingName, HttpServletResponse response, HttpServletRequest request) {

        String cartCookieValue = CookieUtils.getCookieValue(request, Const.CART_KEY);
        String userCookieValue = CookieUtils.getCookieValue(request, Const.TOKEN_LOGIN);

        XbinResult result = orderService.generateOrder(userCookieValue,cartCookieValue,addrId, noAnnoyance, paymentType,orderId, shippingName);


        return "success";
    }
}
