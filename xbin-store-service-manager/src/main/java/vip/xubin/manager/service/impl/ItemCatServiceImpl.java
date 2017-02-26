package vip.xubin.manager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vip.xubin.manager.service.ItemCatService;
import vip.xubin.mapper.TbItemCatMapper;
import vip.xubin.pojo.EuiTreeNode;
import vip.xubin.pojo.TbItemCat;
import vip.xubin.pojo.TbItemCatExample;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cynicism on 17/1/26.
 */
@Service
@com.alibaba.dubbo.config.annotation.Service(interfaceClass = vip.xubin.manager.service.ItemCatService.class, protocol = {"dubbo"}, retries = 0)
@Transactional
public class ItemCatServiceImpl implements ItemCatService {

    @Autowired
    private TbItemCatMapper itemCatMapper;

    /**
     * 根据父节点ID查询子节点列表
     * @param parentId
     * @return
     */
    @Override
    public List<EuiTreeNode> getItemCatList(long parentId) {

        TbItemCatExample example = new TbItemCatExample();

        TbItemCatExample.Criteria criteria = example.createCriteria();

        criteria.andParentIdEqualTo(parentId);

        List<TbItemCat> itemCats = itemCatMapper.selectByExample(example);

        ArrayList<EuiTreeNode> treeNodes = new ArrayList<EuiTreeNode>();
        for (TbItemCat itemCat : itemCats) {
            EuiTreeNode node = new EuiTreeNode();

            node.setId(itemCat.getId());
            node.setState(itemCat.getIsParent() ? "closed" : "open");
            node.setText(itemCat.getName());

            treeNodes.add(node);

        }

        return treeNodes;
    }
}
