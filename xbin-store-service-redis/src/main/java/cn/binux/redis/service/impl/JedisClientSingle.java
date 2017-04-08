package cn.binux.redis.service.impl;

import cn.binux.constant.Const;
import cn.binux.redis.service.JedisClient;
import com.alibaba.dubbo.config.annotation.Service;
import org.springframework.beans.factory.annotation.Autowired;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;


/**
 * @author 許彬.
 * @creater 2016-08-22 16:24
 */
@Service(version = Const.XBIN_STORE_REDIS_VERSION)
//@com.alibaba.dubbo.config.annotation.Service(interfaceClass = vip.xubin.redis.service.JedisClient.class, protocol = {"dubbo"}, retries = 0)
public class JedisClientSingle implements JedisClient {

    @Autowired
    private JedisPool jedisPool;

    @Override
    public String get(String key) {

        Jedis resource = jedisPool.getResource();

        String string = resource.get(key);

        resource.close();

        return string;

    }

    @Override
    public String set(String key, String value) {

        Jedis resource = jedisPool.getResource();

        String string = resource.set(key, value);

        resource.close();

        return string;

    }

    @Override
    public String hget(String hkey, String key) {

        Jedis resource = jedisPool.getResource();

        String string = resource.hget(hkey, key);

        resource.close();

        return string;

    }

    @Override
    public long hset(String hkey, String key, String value) {

        Jedis resource = jedisPool.getResource();

        Long hset = resource.hset(hkey, key, value);

        resource.close();

        return hset;

    }

    @Override
    public long incr(String key) {

        Jedis resource = jedisPool.getResource();

        Long incr = resource.incr(key);

        resource.close();

        return incr;

    }

    @Override
    public long expire(String key, int second) {

        Jedis resource = jedisPool.getResource();

        Long expire = resource.expire(key, second);

        resource.close();

        return expire;

    }

    @Override
    public long ttl(String key) {

        Jedis resource = jedisPool.getResource();

        Long ttl = resource.ttl(key);

        resource.close();

        return ttl;
    }

    @Override
    public long del(String key) {

        Jedis resource = jedisPool.getResource();

        Long del = resource.del(key);

        resource.close();

        return del;
    }

    @Override
    public long hdel(String hkey, String key) {

        Jedis resource = jedisPool.getResource();

        Long hdel = resource.hdel(hkey, key);

        resource.close();

        return hdel;
    }
}
