package vip.xubin.portal.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vip.xubin.mapper.TbContentMapper;
import vip.xubin.pojo.TbContent;
import vip.xubin.pojo.TbContentExample;
import vip.xubin.portal.service.PortalContentService;
import vip.xubin.redis.service.JedisClient;
import vip.xubin.utils.FastJsonConvert;

import java.util.List;

/**
 * Created by cynicism on 17/1/28.
 */
@Service
@com.alibaba.dubbo.config.annotation.Service(interfaceClass = vip.xubin.portal.service.PortalContentService.class, protocol = {"dubbo"}, retries = 0)
@Transactional
public class PortalContentServiceImpl implements PortalContentService {

    private static Logger logger = Logger.getLogger(PortalContentServiceImpl.class);

    @Autowired
    private TbContentMapper contentMapper;

    @Autowired
    private JedisClient jedisClient;

    @Value("${INDEX_AD}")
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
