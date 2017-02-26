package vip.xubin.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import vip.xubin.notify.service.NotifyUserService;
import vip.xubin.pojo.TbUser;
import vip.xubin.pojo.XbinResult;
import vip.xubin.sso.service.UserService;
import vip.xubin.utils.CookieUtils;
import vip.xubin.utils.FastJsonConvert;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * 用户登录注册 Controller
 *
 * @author xubin.
 * @create 2017-02-08 下午6:49
 */

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private NotifyUserService notifyUserService;

    @Value("${TOKEN_LOGIN}")
    private String TOKEN_LOGIN;

    @Value("${USER_NOT_EXIST}")
    private String USER_NOT_EXIST;

    @Value("${PASSWORD_ERROR}")
    private String PASSWORD_ERROR;

    @Value("${PORTAL_PATH}")
    private String PORTAL_PATH;

    /**
     * 显示注册页面
     * @param model
     * @param ReturnUrl 返回跳转URL
     * @return
     */
    @RequestMapping("/register")
    public String showRegister(Model model, String ReturnUrl) {

        model.addAttribute("uid", UUID.randomUUID().toString());

        return "register";
    }

    /**
     * 显示登录页面
     * @param model
     * @param returnUrl 返回跳转URL
     * @return
     */
    @RequestMapping("/login")
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
    @RequestMapping("/success")
    public String showSuccess(String username,Model model) {

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
        return userService.register(FastJsonConvert.convertObjectToJSONObject(user));
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

        XbinResult result = userService.login(FastJsonConvert.convertObjectToJSONObject(user));

        if (result.getStatus() == 200) {

            CookieUtils.setCookie(request, response, TOKEN_LOGIN, result.getData().toString());
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

    @RequestMapping("/loginservice")
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
    public String validateUser(@PathVariable String isEngaged, String regName, String email, String phone) {
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
    @RequestMapping("register/sendRegEmail")
    @ResponseBody
    public String sendRegEmail(String regName,String pwdRepeat,String pwd,String phone,String mobileCode,String uuid,String authCode,String email) {
        return userService.register(regName, pwd, pwdRepeat, phone, mobileCode, uuid, authCode, email);
    }





}
