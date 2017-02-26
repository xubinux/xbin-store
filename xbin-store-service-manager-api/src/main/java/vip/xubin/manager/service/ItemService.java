package vip.xubin.manager.service;

import vip.xubin.pojo.EuiResult;
import vip.xubin.pojo.TbItem;
import vip.xubin.pojo.XbinResult;

/**
 * Created by cynicism on 17/1/24.
 */

public interface ItemService {

    TbItem getItemById(long itemId);

    EuiResult<TbItem> getItemList(Integer page, Integer rows);

    XbinResult saveItem(TbItem item, String desc);
}
