package vip.xubin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vip.xubin.manager.service.ContentService;
import vip.xubin.pojo.EuiResult;
import vip.xubin.pojo.EuiTreeNode;
import vip.xubin.pojo.TbContent;
import vip.xubin.pojo.XbinResult;

import java.util.List;

/**
 * 内容管理
 * Created by cynicism on 17/1/28.
 */
@Controller
@RequestMapping("/content")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @RequestMapping("/category/list")
    @ResponseBody
    public List<EuiTreeNode> getCategoryListByParentId(@RequestParam(name = "id", defaultValue = "0") long parentId) {
        return contentService.getCategoryListByParentId(parentId);
    }

    //http://localhost:8100/content/query/list?categoryId=0&page=1&rows=20
    @RequestMapping("/query/list")
    @ResponseBody
    public EuiResult<TbContent> queryListByCategoryId(long categoryId, Integer page, Integer rows) {
        return contentService.queryListByCategoryId(categoryId,page,rows);
    }

    @RequestMapping("/category/create")
    @ResponseBody
    public XbinResult createNode(String name, long parentId) {
        return contentService.craeteNode(name,parentId);
    }

    @RequestMapping("/category/update")
    @ResponseBody
    public XbinResult updateNode(String name, long id) {
        return contentService.updateNode(name,id);
    }

    @RequestMapping("/category/delete")
    @ResponseBody
    public XbinResult deleteNodeById(long id) {
        return contentService.deleteNodeById(id);
    }

    //http://localhost:8100/content/save
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    @ResponseBody
    public XbinResult saveContent(TbContent content) {
        return contentService.saveContent(content);
    }

    //http://localhost:8100/rest/content/edit
    @RequestMapping(value = "/edit",method = RequestMethod.POST)
    @ResponseBody
    public XbinResult editContent(TbContent content) {
        return contentService.editContent(content);
    }

    //http://localhost:8100/content/delete
    @RequestMapping(value = "/delete",method = RequestMethod.POST)
    @ResponseBody
    public XbinResult deleteContent(long[] ids) {
        return contentService.deleteContent(ids);
    }


}
