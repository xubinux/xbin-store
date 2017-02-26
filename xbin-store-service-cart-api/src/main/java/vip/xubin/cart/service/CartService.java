package vip.xubin.cart.service;

import vip.xubin.pojo.CartInfo;
import vip.xubin.pojo.XbinResult;

import java.util.List;

/**
 * 购物车相关操作 Service
 *
 * @author xubin.
 * @create 2017-02-22 下午12:51
 */

public interface CartService {

    XbinResult addCart(Long pid, Integer pcount,String uuid);

    List<CartInfo> getCartInfoListByCookiesId(String cookieUUID);
}
