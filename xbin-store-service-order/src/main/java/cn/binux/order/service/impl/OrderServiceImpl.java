package cn.binux.order.service.impl;

import cn.binux.constant.Const;
import cn.binux.mapper.TbOrderItemMapper;
import cn.binux.mapper.TbOrderMapper;
import cn.binux.order.service.OrderService;
import cn.binux.pojo.*;
import cn.binux.redis.service.JedisClient;
import cn.binux.sso.service.UserService;
import cn.binux.utils.FastJsonConvert;
import cn.binux.utils.IDUtils;
import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.dubbo.config.annotation.Service;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * 订单Service
 *
 * @author xubin.
 * @create 2017-02-28 下午9:04
 */

@Service(version = Const.XBIN_STORE_ORDER_VERSION)
@Transactional
public class OrderServiceImpl implements OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderServiceImpl.class);

    @Reference(version = Const.XBIN_STORE_SSO_VERSION)
    private UserService userService;

    @Reference(version = Const.XBIN_STORE_REDIS_VERSION)
    private JedisClient jedisClient;

    @Autowired
    private TbOrderItemMapper orderItemMapper;

    @Autowired
    private TbOrderMapper orderMapper;

    //@Autowired
    //private JmsTemplate jmsTemplate;

    //@Resource(name = "orderSaveTopic")
    //private Destination destination;

    @Value("${redisKey.prefix.cart_order_info_profix}")
    private String CART_ORDER_INFO_PROFIX;
    @Value("${redisKey.prefix.cart_order_index_profix}")
    private String CART_ORDER_INDEX_PROFIX;
    @Value("${redisKey.prefix.cart_info_profix}")
    private String CART_INFO_PROFIX;

    @Override
    public XbinResult generateOrder(String userCookieValue, String cartCookieValue, Integer addrId, Integer noAnnoyance, Integer paymentType, String orderId, String shippingName) {


        XbinResult result = userService.token(userCookieValue, "");
        if (result.getData() == null) {
            logger.error("用户没有登录!");
            return XbinResult.build(400, "系统错误!");
        }

        String data = (String) result.getData();
        TbUser user = FastJsonConvert.convertJSONToObject(data, TbUser.class);

        String userId = user.getId() + "";
        userId = "0000" + userId;
        userId = userId.substring(userId.length() - 4, userId.length());

        String key1 = CART_ORDER_INFO_PROFIX + orderId;
        String key2 = CART_ORDER_INDEX_PROFIX + orderId;
        String key3 = CART_INFO_PROFIX + cartCookieValue;

        orderId = paymentType.toString() + orderId + userId;

        final TbOrder order = new TbOrder();
        //设置订单id
        order.setOrderId(orderId);
        //设置用户id
        order.setUserId(user.getId());
        //设置地址id
        order.setAddrId(Long.valueOf(addrId));
        //设置支付类型
        order.setPaymentType(paymentType);
        //设置邮费
        order.setPostFee("0");
        //设置状态
        order.setStatus(Const.NON_PAYMENT);
        //设置物流名称
        order.setShippingName(shippingName);
        //设置退换无忧
        order.setNoAnnoyance(noAnnoyance + "");
        //设置服务费
        order.setServicePrice("0");
        //设置返现
        order.setReturnPrice("0");
        //设置没有评价
        order.setBuyerRate(Const.EVALUATE_NO);
        //设置订单创建时间
        order.setCreateTime(new Date());
        order.setUpdateTime(new Date());

        Long payment = 0L;
        List<CartInfo> cartInfos = null;
        List<CartInfo> cartInfoAll = null;
        String[] split = null;

        try {

            String cartInfo = jedisClient.get(key1);
            String cartIndex = jedisClient.get(key2);
            String cartInfoListString = jedisClient.get(key3);

            if (StringUtils.isBlank(cartInfo) || StringUtils.isBlank(cartIndex) || StringUtils.isBlank(cartInfoListString)) {
                return XbinResult.build(400, "系统错误!");
            }

            cartInfos = FastJsonConvert.convertJSONToArray(cartInfo, CartInfo.class);
            cartInfoAll = FastJsonConvert.convertJSONToArray(cartInfoListString, CartInfo.class);
            split = cartIndex.split(",");

        } catch (Exception e) {
            logger.error("Redis 服务出错!", e);
        }

        // 保存订单项️
        if (cartInfos.size() > 0) {
            for (int i = 0; i < cartInfos.size(); i++) {
                CartInfo cartInfo = cartInfos.get(i);

                String orderItemId = IDUtils.genOrderItemId();
                TbOrderItem orderItem = new TbOrderItem();
                orderItem.setId(orderItemId);
                orderItem.setOrderId(orderId);
                orderItem.setItemId(cartInfo.getId() + "");
                orderItem.setTitle(cartInfo.getName());
                orderItem.setNum(cartInfo.getNum());
                orderItem.setPicPath(cartInfo.getImageUrl());
                orderItem.setPrice(cartInfo.getPrice());
                orderItem.setTotalFee(cartInfo.getSum());
                orderItem.setWeights(cartInfo.getWeight() + "");
                // 记录日志
                orderItemMapper.insert(orderItem);

                logger.info("保存订单项,订单:" + orderItem.toString());
                payment += cartInfo.getSum();
            }
        }

        //设置总金额
        order.setPayment(payment + noAnnoyance + "");
        //设置总重
        //order.setTotalWeight();
        // 保存订单
        orderMapper.insert(order);


        // 移除购物车选中商品️
        if (cartInfoAll.size() >= split.length) {
            for (int i = split.length - 1; i >= 0; i--) {
                cartInfoAll.remove(Integer.parseInt(split[i]));
            }
            logger.debug("移除购物车购买商品！数量:" + split.length);
        } else {
            logger.error("订单项数量小于和index数量");
            return XbinResult.build(400, "系统错误!");
        }

        try {

            jedisClient.set(key3, FastJsonConvert.convertObjectToJSON(cartInfoAll));

        } catch (Exception e) {
            logger.error("Redis 服务出错!", e);
        }

        final String orderString = FastJsonConvert.convertObjectToJSON(order);
        // 发送消息 topic
        //jmsTemplate.send(destination, new MessageCreator() {
        //    @Override
        //    public Message createMessage(Session session) throws JMSException {
        //
        //        TextMessage message = session.createTextMessage(orderString);
        //
        //        logger.info("发送JMS消息,消息为:" + orderString);
        //
        //        return message;
        //    }
        //});

        return null;
    }
}
