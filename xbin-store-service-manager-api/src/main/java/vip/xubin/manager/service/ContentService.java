package vip.xubin.manager.service;

import vip.xubin.pojo.EuiResult;
import vip.xubin.pojo.EuiTreeNode;
import vip.xubin.pojo.TbContent;
import vip.xubin.pojo.XbinResult;

import java.util.List;

/**
 * 内容分类Service
 * Created by cynicism on 17/1/28.
 */
public interface ContentService {

    /**
     * 根据父id获取树形列表
     * @param parentId 父id
     * @return
     */
    List<EuiTreeNode> getCategoryListByParentId(long parentId);

    /**
     * 创建树的节点
     * @param name 名称
     * @param parentId 父id
     * @return
     */
    XbinResult craeteNode(String name, long parentId);

    /**
     * 更新树的节点
     * @param name 名称
     * @param id
     * @return
     */
    XbinResult updateNode(String name, long id);

    /**
     * 根据id删除节点
     * @param id
     * @return
     */
    XbinResult deleteNodeById(long id);

    /**
     * 根据内容类目id和分页信息获取列表
     * @param categoryId 内容类目id
     * @param page 第几页
     * @param rows 每页共几条
     * @return
     */
    EuiResult<TbContent> queryListByCategoryId(long categoryId, Integer page, Integer rows);

    /**
     * 保存内容分类
     * @param content 内容分类对象
     * @return
     */
    XbinResult saveContent(TbContent content);

    /**
     * 编辑内容分类
     * @param content 内容分类对象
     * @return
     */
    XbinResult editContent(TbContent content);

    /**
     * 根据ids删除内容分类
     * @param ids id数组
     * @return
     */
    XbinResult deleteContent(long[] ids);


}
