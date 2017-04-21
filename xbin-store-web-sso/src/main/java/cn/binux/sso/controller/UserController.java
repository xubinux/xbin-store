package cn.binux.sso.controller;

import cn.binux.constant.Const;
import cn.binux.notify.service.NotifyUserService;
import cn.binux.pojo.TbUser;
import cn.binux.pojo.XbinResult;
import cn.binux.sso.service.UserService;
import cn.binux.utils.CookieUtils;
import com.alibaba.dubbo.config.annotation.Reference;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * 用户登录注册 Controller
 *
 * @author xubin.
 * @create 2017-04-08
 */

@Controller
public class UserController {

    @Reference(version = Const.XBIN_STORE_SSO_VERSION)
    private UserService userService;

    @Reference(version = Const.XBIN_STORE_NOTIFY_VERSION)
    private NotifyUserService notifyUserService;

    @Value("${user_not_exist}")
    private String USER_NOT_EXIST;

    @Value("${password_error}")
    private String PASSWORD_ERROR;

    @Value("${portal_path}")
    private String PORTAL_PATH;

    /**
     * 显示注册页面
     * @param model
     * @param ReturnUrl 返回跳转URL
     * @return
     */
    @RequestMapping(value = "/register",method = RequestMethod.GET)
    public String showRegister(Model model, String returnUrl) {

        model.addAttribute("uid", UUID.randomUUID().toString());

        return "register";
    }

    /**
     * 显示登录页面
     * @param model
     * @param returnUrl 返回跳转URL
     * @return
     */
    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String showLogin(Model model, String returnUrl) {

        model.addAttribute("returnUrl", returnUrl);


        return "login";
    }

    /**
     * 显示注册成功页面
     * @param username 注册用户名
     * @param model
     * @return
     */
    @RequestMapping(value = "/success",method = RequestMethod.GET)
    public String showSuccess(String username, Model model) {

        model.addAttribute("username", username);

        return "success";
    }

    /**
     * 用户注册
     * @param user POJO
     * @return
     */
    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    @ResponseBody
    public XbinResult register(TbUser user) {
        return userService.register(user);
    }

    /**
     * 用户登录
     * @param user POJO
     * @param returnUrl 返回跳转URL
     * @param response
     * @param request
     * @return
     */
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    @ResponseBody
    public String login(TbUser user, String returnUrl, HttpServletResponse response, HttpServletRequest request) {

        XbinResult result = userService.login(user);

        if (result.getStatus() == 200) {

            CookieUtils.setCookie(request, response, Const.TOKEN_LOGIN, result.getData().toString());
            //有返回URL 跳转
            if (StringUtils.isNotBlank(returnUrl)) {
                return "({'success':'" + returnUrl + "'})";
            }
            return PORTAL_PATH;
        }

        if (result.getStatus() == 400) {

            return USER_NOT_EXIST;
        }

        if (result.getStatus() == 401) {

            return PASSWORD_ERROR;
        }

        return PASSWORD_ERROR;

    }

    @RequestMapping(value = "/loginservice")
    @ResponseBody
    public String valida(String callback, String method, Integer uid) {
        return callback + "({\"Identity\":{\"Unick\":\"\",\"Name\":\"\",\"IsAuthenticated\":false}})";
    }

    /**
     * 验证用户名、邮箱、电话是否重复
     * @param isEngaged 检测的名称
     * @param regName 用户名
     * @param email 邮箱
     * @param phone 电话
     * @return
     */
    @RequestMapping("/validateuser/{isEngaged}")
    @ResponseBody
    public String validateUser(@PathVariable String isEngaged, @RequestParam(defaultValue = "") String regName, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String phone) {
        return userService.validateUser(isEngaged, regName, email, phone);
    }

    /**
     * 验证码判断
     * @param authCode 判断验证码是否正确
     * @param uuid
     * @return
     */
    @RequestMapping("/validate/validateAuthCode")
    @ResponseBody
    public String validateUser(String authCode, String uuid) {
        return userService.validateAuthCode(authCode, uuid);
    }

    /**
     * 发送手机验证码
     * @param mobile 电话号码
     * @return
     */
    //http://localhost:8104/notifyuser/mobileCode?state=&mobile=%2B008615669970074&_=1486641954248
    @RequestMapping("/notifyuser/mobileCode")
    @ResponseBody
    public String mobileCode(String mobile) {
        return notifyUserService.mobileNotify(mobile);
    }

    /**
     * 请求格式 POST
     * 注册 不使用邮箱注册
     *
     * @param regName       注册名
     * @param pwd           第一次密码
     * @param pwdRepeat     第二次密码
     * @param phone         电话
     * @param mobileCode    手机验证码
     * @param authCode      输入的验证码
     * @param uuid          Redis验证码uuid
     * @return
     */
    @RequestMapping("/register/regService")
    @ResponseBody
    public String regService(String regName, String pwd, String pwdRepeat, String phone, String mobileCode, String authCode, String uuid) {
        return userService.register(regName, pwd, pwdRepeat, phone, mobileCode, uuid,authCode, "");
    }
    /**
     * 请求格式 POST
     * 注册 使用邮箱注册
     *
     * @param regName       注册名
     * @param pwd           第一次密码
     * @param pwdRepeat     第二次密码
     * @param phone         电话
     * @param mobileCode    手机验证码
     * @param email         邮箱
     * @param authCode      输入的验证码
     * @param uuid          Redis验证码uuid
     * @return
     */
    @RequestMapping("/register/sendRegEmail")
    @ResponseBody
    public String sendRegEmail(String regName, String pwdRepeat, String pwd, String phone, String mobileCode, String uuid, String authCode, String email) {
        return userService.register(regName, pwd, pwdRepeat, phone, mobileCode, uuid, authCode, email);
    }





}
