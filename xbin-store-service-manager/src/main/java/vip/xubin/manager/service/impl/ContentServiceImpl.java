package vip.xubin.manager.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vip.xubin.manager.service.ContentService;
import vip.xubin.mapper.TbContentCategoryMapper;
import vip.xubin.mapper.TbContentMapper;
import vip.xubin.pojo.*;
import vip.xubin.redis.service.JedisClient;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by cynicism on 17/1/28.
 */
@Service
@com.alibaba.dubbo.config.annotation.Service(interfaceClass = vip.xubin.manager.service.ContentService.class, protocol = {"dubbo"}, retries = 0)
@Transactional
public class ContentServiceImpl implements ContentService {

    private static Logger logger = Logger.getLogger(ContentServiceImpl.class);

    @Autowired
    private TbContentCategoryMapper contentCategoryMapper;

    @Autowired
    private TbContentMapper contentMapper;

    @Autowired
    private JedisClient jedisClient;

    @Value("${INDEX_AD}")
    private String INDEX_AD;

    @Override
    public List<EuiTreeNode> getCategoryListByParentId(long parentId) {

        TbContentCategoryExample example = new TbContentCategoryExample();

        TbContentCategoryExample.Criteria criteria = example.createCriteria();

        criteria.andParentIdEqualTo(parentId);

        List<TbContentCategory> categoryList = contentCategoryMapper.selectByExample(example);

        ArrayList<EuiTreeNode> treeNodes = new ArrayList<EuiTreeNode>();

        for (TbContentCategory category : categoryList) {

            EuiTreeNode treeNode = new EuiTreeNode();

            treeNode.setText(category.getName());

            treeNode.setState(category.getIsParent() ? "closed" : "open");

            treeNode.setId(category.getId());

            treeNodes.add(treeNode);

        }

        return treeNodes;
    }

    @Override
    public XbinResult craeteNode(String name, long parentId) {


        TbContentCategory tbContentCategory = contentCategoryMapper.selectByPrimaryKey(parentId);

        if (!tbContentCategory.getIsParent()) {
            tbContentCategory.setIsParent(true);
            contentCategoryMapper.updateByPrimaryKeySelective(tbContentCategory);
        }

        TbContentCategory contentCategory = new TbContentCategory();

        contentCategory.setIsParent(false);
        contentCategory.setName(name);
        contentCategory.setParentId(parentId);
        //商品状态，1-正常，2-下架，3-删除
        contentCategory.setStatus(1);
        contentCategory.setSortOrder(1);

        contentCategory.setCreated(new Date());
        contentCategory.setUpdated(new Date());

        contentCategoryMapper.insert(contentCategory);

        return XbinResult.ok(contentCategory);
    }

    @Override
    public XbinResult updateNode(String name, long id) {

        TbContentCategory contentCategory = contentCategoryMapper.selectByPrimaryKey(id);

        contentCategory.setName(name);

        contentCategoryMapper.updateByPrimaryKeySelective(contentCategory);

        return XbinResult.ok();
    }

    @Override
    public XbinResult deleteNodeById(long id) {

        contentCategoryMapper.deleteByPrimaryKey(id);

        return XbinResult.ok();
    }

    @Override
    public EuiResult<TbContent> queryListByCategoryId(long categoryId, Integer page, Integer rows) {

        PageHelper.startPage(page, rows);

        TbContentExample example = new TbContentExample();

        TbContentExample.Criteria criteria = example.createCriteria();

        criteria.andCategoryIdEqualTo(categoryId);

        List<TbContent> contentList = contentMapper.selectByExample(example);

        PageInfo<TbContent> pageInfo = new PageInfo<TbContent>(contentList);

        EuiResult<TbContent> euiResult = new EuiResult<TbContent>();

        euiResult.setTotal(pageInfo.getTotal());
        euiResult.setRows(contentList);

        return euiResult;
    }

    @Override
    public XbinResult saveContent(TbContent content) {

        content.setCreated(new Date());
        content.setUpdated(new Date());

        contentMapper.insert(content);

        try {
            // 缓存同步
            logger.info("=====>缓存同步");
            jedisClient.hdel(INDEX_AD, content.getCategoryId().toString());
        } catch (Exception e) {
            logger.error(e);
        }

        return XbinResult.ok();
    }

    @Override
    public XbinResult editContent(TbContent content) {
        content.setUpdated(new Date());

        contentMapper.updateByPrimaryKeySelective(content);

        return XbinResult.ok();
    }

    @Override
    public XbinResult deleteContent(long[] ids) {
        for (long id : ids) {
            contentMapper.deleteByPrimaryKey(id);
        }
        return XbinResult.ok();
    }



}
