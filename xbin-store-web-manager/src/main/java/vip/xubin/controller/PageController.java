package vip.xubin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cynicism on 17/1/24.
 */
@Controller
public class PageController {

    @RequestMapping("/")
    public String getPage() {

        return "index";
    }
    @RequestMapping("/{page}")
    public String getPage(@PathVariable String page) {

        return page;
    }


}
