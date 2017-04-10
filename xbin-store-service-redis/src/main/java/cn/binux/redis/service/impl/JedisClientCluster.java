package cn.binux.redis.service.impl;

import cn.binux.redis.service.JedisClient;
import org.springframework.beans.factory.annotation.Autowired;
import redis.clients.jedis.JedisCluster;


/**
 * @author 許彬.
 * @creater 2016-08-22 16:38
 */
public class JedisClientCluster implements JedisClient {

    @Autowired
    private JedisCluster jedisCluster;

    @Override
    public String get(String key) {
        return jedisCluster.get(key);
    }

    @Override
    public String set(String key, String value) {

        return jedisCluster.set(key, value);
    }

    @Override
    public String hget(String hkey, String key) {

        return jedisCluster.hget(key, key);
    }

    @Override
    public long hset(String hkey, String key, String value) {

        return jedisCluster.hset(hkey, key, value);
    }

    @Override
    public long incr(String key) {

        return jedisCluster.incr(key);
    }

    @Override
    public long expire(String key, Integer second) {

        return jedisCluster.expire(key, second);
    }

    @Override
    public long ttl(String key) {

        return jedisCluster.ttl(key);
    }

    @Override
    public long del(String key) {

        return jedisCluster.del(key);
    }

    @Override
    public long hdel(String hkey, String key) {

        return jedisCluster.hdel(hkey, key);
    }
}
