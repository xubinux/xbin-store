package vip.xubin.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import vip.xubin.utils.FastDFSClientUtils;
import vip.xubin.utils.FastJsonConvert;

import java.io.IOException;
import java.util.HashMap;

/**
 * 图片上传Controller
 * Created by cynicism on 17/1/26.
 */
@Controller
public class PictureController {

    private static Logger logger = Logger.getLogger(PictureController.class);

    @Value("${fastdfs.base.url}")
    private String FASTDFS_BASE_URL;

    @RequestMapping("/pic/upload")
    @ResponseBody
    public String picUpload(MultipartFile uploadFile) {

        String oName = uploadFile.getOriginalFilename();
        String extName = oName.substring(oName.indexOf(".") + 1);

        HashMap<String, Object> map = new HashMap<>();

        try {
            String uploadUrl = FastDFSClientUtils.upload(uploadFile.getBytes(), extName);
            map.put("error", 0);
            map.put("url", FASTDFS_BASE_URL + uploadUrl);

        } catch (IOException e) {
            logger.error("图片上传失败！");

            map.put("error", 1);
            map.put("message", "图片上传失败");
        }
        return FastJsonConvert.convertObjectToJSON(map);
    }

}
