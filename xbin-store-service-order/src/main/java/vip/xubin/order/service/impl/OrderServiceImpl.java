package vip.xubin.order.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vip.xubin.order.service.OrderService;
import vip.xubin.pojo.TbUser;
import vip.xubin.pojo.XbinResult;
import vip.xubin.sso.service.UserService;
import vip.xubin.utils.FastJsonConvert;
import vip.xubin.utils.IDUtils;

/**
 * 订单Service
 *
 * @author xubin.
 * @create 2017-02-28 下午9:04
 */

@Service
@Transactional
@com.alibaba.dubbo.config.annotation.Service(interfaceClass = OrderServiceImpl.class, protocol = {"dubbo"}, retries = 0)
public class OrderServiceImpl implements OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderServiceImpl.class);

    @Autowired
    private UserService userService;

    @Override
    public XbinResult generateOrder(String userCookieValue, String cartCookieValue, Integer addrId, Integer noAnnoyance, Integer paymentType, Integer OrderId, String shippingName) {

        String orderId = IDUtils.genOrderId();

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

        orderId = paymentType.toString() + orderId + userId;





        return null;
    }
}
