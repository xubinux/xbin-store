package cn.binux.portal.service;


import cn.binux.pojo.TbContent;

import java.util.List;

/**
 * 内容分类Service
 * Created by cynicism on 17/1/28.
 */
public interface PortalContentService {


    List<TbContent> getContentByCid(long bigAdIndex);
}
