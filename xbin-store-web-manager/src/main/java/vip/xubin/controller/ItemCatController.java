package vip.xubin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vip.xubin.manager.service.ItemCatService;
import vip.xubin.pojo.EuiTreeNode;

import java.util.List;

/**
 * Created by cynicism on 17/1/26.
 */
@Controller
public class ItemCatController {

    @Autowired
    private ItemCatService itemCatService;

    @RequestMapping("/item/cat/list")
    @ResponseBody
    public List<EuiTreeNode> getItemCatList(@RequestParam(name = "id", defaultValue = "0") long parentId) {

        return itemCatService.getItemCatList(parentId);
    }

}
