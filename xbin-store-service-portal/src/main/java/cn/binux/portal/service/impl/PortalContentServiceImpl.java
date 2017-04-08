package cn.binux.portal.service.impl;

import cn.binux.constant.Const;
import cn.binux.mapper.TbContentMapper;
import cn.binux.pojo.TbContent;
import cn.binux.pojo.TbContentExample;
import cn.binux.portal.service.PortalContentService;
import cn.binux.redis.service.JedisClient;
import cn.binux.utils.FastJsonConvert;
import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.dubbo.config.annotation.Service;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 首页内容Service
 * Created by cynicism on 17/1/28.
 */
@Service(version = Const.XBIN_STORE_PORTAL_VERSION)
@Transactional
public class PortalContentServiceImpl implements PortalContentService {

    private static Logger logger = Logger.getLogger(PortalContentServiceImpl.class);

    @Autowired
    private TbContentMapper contentMapper;

    @Reference(version = Const.XBIN_STORE_REDIS_VERSION)
    private JedisClient jedisClient;

    @Value("${redisKey.prefix.index_ad}")
    private String INDEX_AD;


    @Override
    public List<TbContent> getContentByCid(long bigAdIndex) {

        //先查询缓存

        try {
            logger.info("=====>查询Redis");
            String list = jedisClient.hget(INDEX_AD, bigAdIndex + "");

            if (StringUtils.isNotBlank(list)) {

                logger.info("=======>查询Redis 返回结果");
                return FastJsonConvert.convertJSONToArray(list, TbContent.class);
            }

        } catch (Exception e) {
            logger.error(e);
        }


        TbContentExample example = new TbContentExample();
        TbContentExample.Criteria criteria = example.createCriteria();
        criteria.andCategoryIdEqualTo(bigAdIndex);

        logger.info("=======>查询数据库");
        List<TbContent> list = contentMapper.selectByExample(example);

        //添加缓存
        try {
            logger.info("=======>添加缓存");
            jedisClient.hset(INDEX_AD, bigAdIndex + "", FastJsonConvert.convertObjectToJSON(list));
        } catch (Exception e) {
            logger.error(e);
        }

        return list;

    }

}
