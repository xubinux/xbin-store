package vip.xubin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vip.xubin.manager.service.ItemService;
import vip.xubin.pojo.EuiResult;
import vip.xubin.pojo.TbItem;
import vip.xubin.pojo.XbinResult;

/**
 * Created by cynicism on 17/1/24.
 */
@Controller
@RequestMapping("/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @RequestMapping("/list")
    @ResponseBody
    public EuiResult<TbItem> getList(Integer page, Integer rows) {

        return itemService.getItemList(page, rows);
    }

    @RequestMapping("/save")
    @ResponseBody
    public XbinResult saveItem(TbItem item, String desc) {

        return itemService.saveItem(item, desc);
    }

}
