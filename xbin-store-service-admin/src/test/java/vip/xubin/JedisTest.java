package vip.xubin;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import vip.xubin.mapper.TbCategoryMapper;
import vip.xubin.pojo.TbCategory;
import vip.xubin.pojo.TbCategoryExample;
import vip.xubin.redis.service.JedisClient;

import java.io.IOException;
import java.util.List;

/**
 * Jedis连接测试
 *
 * @author 許彬.
 * @creater 2016-08-22 12:26
 */
public class JedisTest {

    @Test
    public void test() throws IOException {
        ApplicationContext context = new ClassPathXmlApplicationContext(
                new String[]{"spring/spring-context.xml"});

        JedisClient jedisClient = context.getBean(JedisClient.class);

        jedisClient.set("k1", "22");

        System.in.read();
    }
    @Test
    public void test2() throws IOException {
        ApplicationContext context = new ClassPathXmlApplicationContext(
                new String[]{"spring/spring-context.xml"});
        PageHelper.startPage(1, 10);
        TbCategoryMapper categoryMapper = context.getBean(TbCategoryMapper.class);

        TbCategoryExample example = new TbCategoryExample();
        TbCategoryExample.Criteria criteria = example.createCriteria();
        criteria.andSortOrderEqualTo(1);

        List<TbCategory> list = categoryMapper.selectByExample(example);
        System.out.println(list.size());
        PageInfo<TbCategory> pageInfo = new PageInfo<>(list);

        System.in.read();
    }

}
