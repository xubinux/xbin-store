package cn.binux.admin.controller;

import cn.binux.admin.service.ContentService;
import cn.binux.admin.vo.ManageUserVO;
import cn.binux.constant.Const;
import cn.binux.pojo.TbCategorySecondary;
import cn.binux.pojo.XbinResult;
import com.alibaba.dubbo.config.annotation.Reference;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Map;
import java.util.Random;


/**
 * Admin 首页Controller
 *
 * @author xubin.
 * @create 2017-02-11 下午3:38
 */

@Controller
public class AdminController {

    @Reference(version = Const.XBIN_STORE_ADMIN_VERSION)
    private ContentService contentService;

    private Random random = new Random();

    @RequestMapping("/index")
    public String showIndex(Model model) {

        ManageUserVO userVO = new ManageUserVO();
        userVO.setCreated(new Date());
        userVO.setName("許彬");
        userVO.setJob("CEO");

        model.addAttribute("user", userVO);

        return "index";
    }
    @RequestMapping("/admin")
    public String showAdmin(Model model) {

        ManageUserVO userVO = new ManageUserVO();
        userVO.setCreated(new Date());
        userVO.setName("許彬");
        userVO.setJob("CEO");

        model.addAttribute("user", userVO);

        return "admin";
    }

    @RequestMapping("/show/logo")
    public String showLogo(Model model) {
        int nub = random.nextInt(60000);

        model.addAttribute("random", nub);

        return "editlogo";
    }

    @RequestMapping("/show/eidtItem")
    public String showEidtItem(Model model) {
        int nub = random.nextInt(60000);

        model.addAttribute("random", nub);

        return "editItem";
    }

    @RequestMapping("/show/addItem")
    public String showAddItem(Model model) {
        int nub = random.nextInt(60000);

        model.addAttribute("random", nub);

        return "addItem";
    }
    @RequestMapping("/show/category")
    public String showCategory(Model model) {
        int nub = random.nextInt(60000);


        model.addAttribute("random", nub);

        return "category";
    }
    @RequestMapping("/show/twoCategory")
    public String showTwoCategory(Model model) {
        int nub = random.nextInt(60000);


        model.addAttribute("random", nub);

        return "twoCategory";
    }
    @RequestMapping("/category/getTableData")
    @ResponseBody
    public Map<String, Object> getCategory(Model model, Integer sEcho, Integer iDisplayStart, Integer iDisplayLength) {

        Map<String, Object> lists = contentService.getCategoryList(sEcho,iDisplayStart,iDisplayLength);

        return lists;
    }
    @RequestMapping("/category/secondary/getTableData")
    @ResponseBody
    public Map<String, Object> getCategorySecondary(Model model,String sSearch, Integer sEcho, Integer iDisplayStart, Integer iDisplayLength) {
        if (StringUtils.isNotBlank(sSearch)) {
            try {
                sSearch = new String(sSearch.getBytes("iso8859-1"), "utf-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            Map<String, Object> lists = contentService.getSearchCategorySecondaryList(sSearch,sEcho,iDisplayStart,iDisplayLength);
            return lists;
        }
        Map<String, Object> lists = contentService.getCategorySecondaryList(sEcho,iDisplayStart,iDisplayLength);

        return lists;
    }

    @RequestMapping("/save/category")
    @ResponseBody
    public XbinResult saveCategory(String id, String name, Integer sort_order) {


        return contentService.saveCategory(id, name, sort_order);
    }
    @RequestMapping("/save/category/secondary")
    @ResponseBody
    public XbinResult saveCategorySecondary(TbCategorySecondary categorySecondary) {


        return contentService.saveCategorySecondary(categorySecondary);
    }


}
