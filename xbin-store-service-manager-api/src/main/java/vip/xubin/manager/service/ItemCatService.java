package vip.xubin.manager.service;

import vip.xubin.pojo.EuiTreeNode;

import java.util.List;

/**
 * Created by cynicism on 17/1/26.
 */
public interface ItemCatService {

    List<EuiTreeNode> getItemCatList(long parentId);

}
