package cn.binux.notify.service.impl;

import cn.binux.constant.Const;
import cn.binux.notify.service.NotifyUserService;
import cn.binux.redis.service.JedisClient;
import cn.binux.utils.FastJsonConvert;
import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.dubbo.config.annotation.Service;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import java.util.HashMap;

/**
 * 用户通知服务实现
 *
 * @author xubin.
 * @create 2017-02-09 下午6:05
 */

@Service(version = Const.XBIN_STORE_NOTIFY_VERSION)
public class NotifyUserServiceImpl implements NotifyUserService {

    private static final Logger logger = LoggerFactory.getLogger(NotifyUserServiceImpl.class);

    @Reference(version = Const.XBIN_STORE_REDIS_VERSION)
    private JedisClient jedisClient;

    @Value("${redisKey.prefix.mobile_login_code.key}")
    private String MOBILE_LOGIN_CODE;

    @Value("${redisKey.prefix.mobile_login_time.key}")
    private String MOBILE_LOGIN_TIME;

    @Value("${mobile_number_ceiling}")
    private Integer MOBILE_NUMBER_CEILING;

    @Value("${redisKey.prefix.mobile_login_code.expire_time}")
    private Integer MOBILE_LOGIN_CODE_EXPIRE;

    @Value("${redisKey.prefix.mobile_login_time.expire_time}")
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

        //System.out.println(mobile);

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
            map.put("remain", result);

            return "({'remain':'" + result + "'})";

        } catch (Exception e) {
            logger.error("Redis 服务出错", e);
        }

        map.put("rs", -1);

        return FastJsonConvert.convertObjectToJSONBracket(map);
    }
}
