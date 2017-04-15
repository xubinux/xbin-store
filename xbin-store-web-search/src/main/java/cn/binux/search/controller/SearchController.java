package cn.binux.search.controller;

import cn.binux.constant.Const;
import cn.binux.pojo.SearchResult;
import cn.binux.search.service.SearchService;
import com.alibaba.dubbo.config.annotation.Reference;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.UnsupportedEncodingException;

/**
 * 搜索 Controller
 *
 * @author xubin.
 * @create 2017-02-04 下午7:10
 */

@Controller
public class SearchController {

    @Reference(version = Const.XBIN_STORE_SEARCH_VERSION)
    private SearchService searchService;

    @Value("${search_result_rows}")
    private Integer SEARCH_RESULT_ROWS;

    @RequestMapping("/search")
    public String search(@RequestParam("q") String queryString,
                         @RequestParam(defaultValue = "1") Integer page,
                         @RequestParam(defaultValue = "0") Integer rows, Model model) throws Exception {

        if (rows == 0) {
            rows = SEARCH_RESULT_ROWS;
        }

        if (queryString != null) {

            String string = null;
            try {
                string = new String(queryString.getBytes("iso8859-1"), "utf-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            SearchResult search  = searchService.search(string, page, rows);

            // 异常测试
            //int i = 1 / 0;


            model.addAttribute("query", string);
            model.addAttribute("totalPages", search.getPageCount());
            model.addAttribute("itemList", search.getItemList());
            model.addAttribute("page", search.getCurPage());

        }

        return "search";


    }

    @RequestMapping("/search22")
    public String search22(@RequestParam("q") String queryString,
                           @RequestParam(defaultValue = "1") Integer page,
                           @RequestParam(defaultValue = "0") Integer rows, Model model) throws Exception {
        if (rows == 0) {
            rows = SEARCH_RESULT_ROWS;
        }

        if (queryString != null) {

            String string = null;
            try {
                string = new String(queryString.getBytes("iso8859-1"), "utf-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            SearchResult search  = searchService.search(queryString, page, rows);

            // 异常测试
            //int i = 1 / 0;


            model.addAttribute("query", string);
            model.addAttribute("totalPages", search.getPageCount());
            model.addAttribute("itemList", search.getItemList());
            model.addAttribute("page", search.getCurPage());

        }

        return "search";


    }
    @RequestMapping("/adguard-ajax-api/api")
    @ResponseBody
    public String search223() throws Exception {

        //http://localhost:8102/adguard-ajax-api/api?type=gm-get-value&unique_name=Adguard%20Assistant&variable_key=settings&sn=fd731a823bcd6a61809b11be5fc8568e964b56bd12048c49cb7e3fe6af2e3860
        return "[LString;{\"buttonPositionTop\":false,\"buttonPositionLeft\":false,\"largeIcon\":true,\"assistantFirstStart\"\n" +
                ":false,\"showWarnings\":true,\"scriptVersion\":1}";


    }


}
