package vip.xubin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import vip.xubin.redis.service.JedisClient;
import vip.xubin.utils.VerifyCodeUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 验证码 Controller
 *
 * @author xubin.
 * @create 2017-02-09 下午3:36
 */

@Controller
public class AuthImagesController {

    private static final Logger logger = LoggerFactory.getLogger(AuthImagesController.class);

    @Autowired
    private JedisClient jedisClient;

    @Value("${VERIFYCODE_REDIS}")
    private String VERIFYCODE_REDIS;

    @Value("${VERIFYCODE_EXPIRE}")
    private Integer VERIFYCODE_EXPIRE;

    @RequestMapping("/verify/image")
    public void verifyimage(String uid, HttpServletResponse response) {
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/jpeg");

        //生成随机字串
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);
        //存入Redis

        String key = VERIFYCODE_REDIS + uid;
        jedisClient.set(key, verifyCode);

        jedisClient.expire(key, VERIFYCODE_EXPIRE);

        //生成图片
        int w = 100, h = 30;
        try {
            VerifyCodeUtils.outputImage(w, h, response.getOutputStream(), verifyCode);
        } catch (IOException e) {
            logger.error("验证码生成失败", e);
        }

    }

}
