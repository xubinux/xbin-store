package cn.binux.item.service;

import cn.binux.pojo.TbItem;
import cn.binux.pojo.TbItemDesc;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 * 商品 Service
 *
 * @author xubin.
 * @create 2017-02-06 下午3:31
 */

//@Path("/ItemService")
//@Produces({ContentType.APPLICATION_JSON_UTF_8,ContentType.TEXT_XML_UTF_8})
public interface ItemService {

    //http://localhost:8514/item/ItemService/getItemById/{id}
    //@POST()
    //@Path("/getItemById/{id}")
    TbItem getItemById(@PathParam("id") long itemId);

    //http://localhost:8514/item/ItemService/getItemDescById/{id}
    //@POST()
    //@Path("/getItemDescById/{id}")
    TbItemDesc getItemDescById(@PathParam("id") long itemId);


}
