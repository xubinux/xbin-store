package vip.xubin.notify.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import vip.xubin.notify.service.NotifyUserService;
import vip.xubin.redis.service.JedisClient;
import vip.xubin.utils.ConvertUtils;
import vip.xubin.utils.FastJsonConvert;

import java.util.HashMap;

/**
 * 用户通知服务实现
 *
 * @author xubin.
 * @create 2017-02-09 下午6:05
 */

@Service
@com.alibaba.dubbo.config.annotation.Service(interfaceClass = vip.xubin.notify.service.NotifyUserService.class, protocol = {"dubbo","rest"}, retries = 0)
public class NotifyUserServiceImpl implements NotifyUserService {

    private static final Logger logger = LoggerFactory.getLogger(NotifyUserServiceImpl.class);

    @Autowired
    private JedisClient jedisClient;

    @Value("${MOBILE_LOGIN_CODE}")
    private String MOBILE_LOGIN_CODE;

    @Value("${MOBILE_LOGIN_TIME}")
    private String MOBILE_LOGIN_TIME;

    @Value("${MOBILE_NUMBER_CEILING}")
    private Integer MOBILE_NUMBER_CEILING;

    @Value("${MOBILE_LOGIN_CODE_EXPIRE}")
    private Integer MOBILE_LOGIN_CODE_EXPIRE;

    @Value("${MOBILE_LOGIN_TIME_EXPIRE}")
    private Integer MOBILE_LOGIN_TIME_EXPIRE;

    /**
     * 发送短信
     *
     * @param mobile 手机号码 带国际区号
     * @return ({"rs":1})   第一次
     *         ({'remain':'该手机还可获取2次验证码，请尽快完成验证'})
     *                      第二次提示
     *         ({'remain':'该手机还可获取1次验证码，请尽快完成验证'})
     *                      第三次提示
     *         ({"rs":1})   第四次
     *         ({"rs":-1})  网络繁忙
     */
    @Override
    public String mobileNotify(String mobile) {

        HashMap<String, Object> map = new HashMap<>();

        System.out.println(mobile);

        //截取手机号码如+008615669970088
        String phone = mobile.substring(5, mobile.length());

        int code = (int) ((Math.random() * 9 + 1) * 100000);

        // 发送短信==================

        //查询Redis  号码1小时获取次数
        try {
            String key = MOBILE_LOGIN_TIME + phone;
            String key1 = MOBILE_LOGIN_CODE + phone;
            String time = jedisClient.get(key);

            //查询不到
            if (StringUtils.isBlank(time)) {
                //保存登录次数到Redis
                //初始化次数为3次
                jedisClient.set(key, MOBILE_NUMBER_CEILING + "");
                //设置过期时间
                jedisClient.expire(key, MOBILE_LOGIN_TIME_EXPIRE);

                //保存code到Redis
                jedisClient.set(key1, code + "");
                //设置过期时间
                jedisClient.expire(key1, MOBILE_LOGIN_CODE_EXPIRE);

                map.put("rs", 1);

                return FastJsonConvert.convertObjectToJSONBracket(map);
            }

            //查询到 判断是否为0 次数减一
            int nub = Integer.parseInt(time);
            if (nub == 0) {
                jedisClient.del(key1);
                map.put("rs", -1);

                return FastJsonConvert.convertObjectToJSONBracket(map);
            }
            if (nub == 1) {
                jedisClient.set(key, --nub + "");
                map.put("rs", 1);

                return FastJsonConvert.convertObjectToJSONBracket(map);
            }

            jedisClient.set(key, --nub + "");

            // 发送短信==================

            //保存code到Redis
            jedisClient.set(key1, code + "");
            //设置过期时间
            jedisClient.expire(key1, MOBILE_LOGIN_CODE_EXPIRE);

            String result = "该手机还可获取" + nub + "次验证码，请尽快完成验证 验证码:" + code;
            String convert = ConvertUtils.convert(result);
            map.put("remain", convert);

            System.out.println(convert);

            return "({'remain':'" + convert + "'})";


        } catch (Exception e) {
            logger.error("Redis 服务出错", e);
        }

        map.put("rs", -1);

        return FastJsonConvert.convertObjectToJSONBracket(map);
    }
}
