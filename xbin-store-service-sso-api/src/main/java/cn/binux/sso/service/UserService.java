package cn.binux.sso.service;

import cn.binux.pojo.TbUser;
import cn.binux.pojo.XbinResult;
import com.alibaba.dubbo.rpc.protocol.rest.support.ContentType;
import com.alibaba.fastjson.JSONObject;

//import javax.ws.rs.*;

/**
 * 用户登录相关服务
 *
 * @author xubin.
 * @create 2017-02-08 下午2:47
 */
//@Path("/user")
//@Consumes({ContentType.TEXT_PLAIN_UTF_8,ContentType.APPLICATION_JSON_UTF_8})
//@Produces({ContentType.APPLICATION_JSON_UTF_8,ContentType.TEXT_PLAIN_UTF_8})
public interface UserService {

    //http://192.168.125.1:8515/user/check/{param}/{type}
    /**
     * 请求格式 GET
     * 注册数据校验
     *
     * @param data 校验数据
     * @param type 类型 可选参数1、2、3分别代表username、phone、email
     * @param callback 可选参数 有参表示jsonp调用
     * @return  {
     *           status: 200 //200 成功 400 参数错误 500 系统异常
     *           msg: "OK" // 错误 参数错误
     *           data: false // 返回数据，true：数据可用，false：数据不可用
     *          }
     */
    //@GET
    //@Path("/check/{param}/{type}")
    XbinResult checkUserDate(/**@PathParam("param")*/ String data, /**@PathParam("type")*/ Integer type, String callback);

    //http://192.168.125.1:8515/user/register
    /**
     * 请求格式 POST
     * 用户注册
     *
     * @param user Tbuser POJO Json
     * @return {
     *           status: 200 //200 成功 400 数据错误 500 系统异常
     *           msg: "OK" //错误 注册失败. 请校验数据后请再提交数据.
     *           data: null
     *         }
     */
    //@POST
    //@Path("/register")
    XbinResult register(TbUser user);

    //http://192.168.125.1:8515/user/register
    /**
     * 请求格式 POST
     * 用户登录
     *
     * @param user Tbuser POJO Json
     * @return {
     *           status: 200 //200 成功 400 登录失败 500 系统异常
     *           msg: "OK" //错误 用户名或密码错误,请检查后重试.
     *           data: "fe5cb546aeb3ce1bf37abcb08a40493e" //登录成功，返回token
     *         }
     */
    //@POST
    //@Path("/login")
    XbinResult login(TbUser user);

    //http://192.168.125.1:8515/user/token/fe5cb546aeb3ce1bf37abcb08a40493e
    /**
     * 请求格式 GET
     * 根据token值获取用户信息
     *
     * @param token token值
     * @param callback 可选参数 有参表示jsonp调用
     * @return {
     *           status: 200 //200 成功 400 没有此token 500 系统异常
     *           msg: "OK" //错误 没有此token.
     *           data: {"username":"xbin"} //返回用户名
     *         }
     */

    //@GET
    //@Path("/token/{token}")
    XbinResult token(/**@PathParam("token")*/ String token, String callback);

    //http://192.168.125.1:8515/user/token/fe5cb546aeb3ce1bf37abcb08a40493e
    /**
     * 请求格式 GET
     * 根据token值 退出登录
     *
     * @param token token值
     * @param callback 可选参数 有参表示jsonp调用
     * @return {
     *           status: 200 //200 成功 400 没有此token 500 系统异常
     *           msg: "OK" //错误 没有此token.
     *           data: null
     *         }
     */
    //@GET
    //@Path("/logout/{token}")
    XbinResult logout(/**@PathParam("token")*/ String token, String callback);

    /**
     * 请求格式 POST
     * 注册检查是否可用
     *
     * @param isEngaged 需要检查是否使用的名称
     * @return {
     *           "success": 0 可用 1 不可用
     *           "morePin":["sssss740","sssss5601","sssss76676"] //isEngaged = isPinEngaged时返回推荐
     *         }
     */
    //@POST
    //@Path("/validateuser/{isEngaged}")
    String validateUser(/**@PathParam("isEngaged")*/ String isEngaged,String regName,String email,String phone);

    /**
     * 请求格式 POST
     * 验证验证码
     *
     * @param authCode 输入的验证码
     * @param uuid Redis验证码uuid
     * @return {
     *           "success": 0 可用 1 不可用
     *         }
     */
    //@POST
    //@Path("/validate/validateuser")
    String validateAuthCode(String authCode,String uuid);

    /**
     * 请求格式 POST
     * 注册
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
    String register(String regName, String pwd, String pwdRepeat, String phone, String mobileCode, String uuid, String authCode, String s);
}
