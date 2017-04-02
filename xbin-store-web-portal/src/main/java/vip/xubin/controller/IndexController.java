package vip.xubin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vip.xubin.pojo.BigADNode;
import vip.xubin.pojo.TbContent;
import vip.xubin.portal.service.PortalContentService;
import vip.xubin.utils.FastJsonConvert;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cynicism on 17/1/27.
 */
@Controller
public class IndexController {

    @Autowired
    private PortalContentService portalContentService;

    @Value("${Big_AD_INDEX}")
    private long Big_AD_INDEX;

    @Value("${Big_AD_INDEX_WIDTH_A}")
    private Integer Big_AD_INDEX_WIDTH_A;

    @Value("${Big_AD_INDEX_HEIGHT_A}")
    private Integer Big_AD_INDEX_HEIGHT_A;

    @Value("${Big_AD_INDEX_WIDTH_B}")
    private Integer Big_AD_INDEX_WIDTH_B;

    @Value("${Big_AD_INDEX_HEIGHT_B}")
    private Integer Big_AD_INDEX_HEIGHT_B;



    @RequestMapping("/index")
    public String index(Model model) {

        List<TbContent> bigAds = portalContentService.getContentByCid(Big_AD_INDEX);

        ArrayList<BigADNode> bigADNodes = new ArrayList<>();

        for (TbContent bigAd : bigAds) {

            BigADNode adNode = new BigADNode();
            adNode.setWidth(Big_AD_INDEX_WIDTH_A);
            adNode.setHeight(Big_AD_INDEX_HEIGHT_A);
            adNode.setWidthB(Big_AD_INDEX_WIDTH_B);
            adNode.setHeightB(Big_AD_INDEX_HEIGHT_B);
            adNode.setAlt(bigAd.getTitle());
            adNode.setHref(bigAd.getUrl());
            adNode.setSrc(bigAd.getPic());
            adNode.setSrcB(bigAd.getPic2());

            bigADNodes.add(adNode);

        }
        String json = FastJsonConvert.convertObjectToJSON(bigADNodes);

        model.addAttribute("ad1", json);

        return "index";
    }
    @RequestMapping("/index2")
    public String index2() {

        return "index";
    }
    @RequestMapping("/sideBar/popupLogin")
    public String popupLogin() {

        return "popupLogin";
    }


    //[LString;{"buttonPositionTop":false,"buttonPositionLeft":false,"largeIcon":true,"assistantFirstStart":false,"showWarnings":true,"scriptVersion":1}
    @RequestMapping("/adguard-ajax-api/api")
    @ResponseBody
    public String adguard() {

        return "[LString;{\"buttonPositionTop\":false,\"buttonPositionLeft\":false,\"largeIcon\":true,\"assistantFirstStart\":false,\"showWarnings\":true,\"scriptVersion\":1}";
    }
}
