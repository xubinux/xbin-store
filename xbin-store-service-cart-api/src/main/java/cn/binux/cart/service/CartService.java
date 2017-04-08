package cn.binux.cart.service;


import cn.binux.pojo.CartInfo;
import cn.binux.pojo.XbinResult;

import java.util.List;

/**
 * 购物车相关操作 Service
 *
 * @author xubin.
 * @create 2017-02-22 下午12:51
 */

public interface CartService {

    XbinResult addCart(Long pid, Integer pcount, String uuid);

    List<CartInfo> getCartInfoListByCookiesId(String cookieUUID);

    /**
     *
     * 根据商品id和数量对购物车增加商品或减少商品
     *
     * @param pid       商品id
     * @param pcount    增加数量
     * @param type      1 增加 2 减少
     * @param index     商品位置   ps:用于直接定位商品 不用遍历整个购物车
     * @return
     */
    XbinResult decreOrIncre(Long pid, Integer pcount, Integer type, Integer index, String cookieUUID);


}
