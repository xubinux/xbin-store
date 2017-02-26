package vip.xubin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import vip.xubin.item.service.ItemService;
import vip.xubin.pojo.Item;
import vip.xubin.pojo.TbItemDesc;

/**
 * 商品查询 Controller
 *
 * @author xubin.
 * @create 2017-02-06 下午3:50
 */

@Controller
public class ItemController {

    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    @Autowired
    private ItemService itemService;

    @RequestMapping("/item/{id}")
    public String  getItemByItemId(@PathVariable("id") long itemId, Model model) {

        Item item = new Item(itemService.getItemById(itemId));

        TbItemDesc itemDesc = itemService.getItemDescById(itemId);

        model.addAttribute("item", item);
        model.addAttribute("itemDesc", itemDesc);

        return "item";
    }

}
