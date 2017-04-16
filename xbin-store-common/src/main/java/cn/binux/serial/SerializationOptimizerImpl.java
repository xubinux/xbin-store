package cn.binux.serial;


import cn.binux.pojo.*;
import com.alibaba.dubbo.common.serialize.support.SerializationOptimizer;
import com.alibaba.fastjson.JSONObject;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

public class SerializationOptimizerImpl implements SerializationOptimizer {

    public Collection<Class> getSerializableClasses() {
        List<Class> classes = new LinkedList<Class>();
        //这里可以把所有需要进行序列化的类进行添加
        classes.add(JSONObject.class);
        classes.add(TbItem.class);
        classes.add(TbContentCategory.class);
        classes.add(TbContent.class);
        classes.add(TbItemDesc.class);
        classes.add(TbItemParam.class);
        classes.add(TbOrder.class);
        classes.add(TbOrderItem.class);
        classes.add(TbUser.class);
        classes.add(TbCategory.class);
        classes.add(TbCategorySecondary.class);
        classes.add(TbUserAddr.class);
        classes.add(TbTransactionMessage.class);
        classes.add(EuiResult.class);
        classes.add(EuiTreeNode.class);
        classes.add(XbinResult.class);
        classes.add(SolrItem.class);
        classes.add(SearchResult.class);
        classes.add(CartInfo.class);
        return classes;
    }
}
