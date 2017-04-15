package cn.binux.item.controller;

import cn.binux.constant.Const;
import cn.binux.item.service.ItemService;
import cn.binux.item.vo.TbItemVO;
import cn.binux.pojo.TbItemDesc;
import com.alibaba.dubbo.config.annotation.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * 商品查询 Controller
 *
 * @author xubin.
 * @create 2017-02-06 下午3:50
 */

@Controller
public class ItemController {

    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    @Reference(version = Const.XBIN_STORE_ITEM_VERSION)
    private ItemService itemService;

    @RequestMapping("/item/{id}")
    public String  getItemByItemId(@PathVariable("id") Long itemId, Model model) {

        TbItemVO item = new TbItemVO(itemService.getItemById(itemId));

        TbItemDesc itemDesc = itemService.getItemDescById(itemId);

        model.addAttribute("item", item);
        model.addAttribute("itemDesc", itemDesc);

        return "item";
    }

}
