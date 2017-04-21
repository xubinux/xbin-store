package cn.binux.constant;

public final class Const {

    /**
     * <B>构造方法</B><BR>
     */
    private Const() {
    }

    /** 判断代码：是 */
    public static final String TRUE = "1";

    /** 判断代码：否 */
    public static final String FALSE = "0";

    /** 通用字符集编码 */
    public static final String CHARSET_UTF8 = "UTF-8";

    /** 中文字符集编码 */
    public static final String CHARSET_CHINESE = "GBK";

    /** 英文字符集编码 */
    public static final String CHARSET_LATIN = "ISO-8859-1";

    /** 根节点ID */
    public static final String ROOT_ID = "root";

    /** NULL字符串 */
    public static final String NULL = "null";

    /** 日期格式 */
    public static final String FORMAT_DATE = "yyyy-MM-dd";

    /** 日期时间格式 */
    public static final String FORMAT_DATETIME = "yyyy-MM-dd HH:mm:ss";

    /** 时间戳格式 */
    public static final String FORMAT_TIMESTAMP = "yyyy-MM-dd HH:mm:ss.SSS";
    
    /** JSON成功标记 */
    public static final String JSON_SUCCESS = "success";

    /** JSON数据 */
    public static final String JSON_DATA = "data";

    /** JSON数据列表 */
    public static final String JSON_ROWS = "rows";
    
    /** JSON总数 */
    public static final String JSON_TOTAL = "total";

    /** JSON消息文本 */
    public static final String JSON_MESSAGE = "message";

    // 订单相关
    /** 货到付款 */
    public static final Integer CASH_ON_DELIVERY = 1;
    /** 在线支付 */
    public static final Integer ONLINE_PAYMENT = 2;
    /** 微信支付 */
    public static final Integer WEIXIN_PAYMENT = 3;
    /** 支付宝支付 */
    public static final Integer ALIPAY_PAYMENT = 4;

    /** 未付款 */
    public static final Integer NON_PAYMENT = 1;
    /** 已付款 */
    public static final Integer PAYMENT = 2;
    /** 未发货*/
    public static final Integer NON_SHIPMENTS = 3;
    /** 已发货 */
    public static final Integer SHIPMENTS = 4;
    /** 交易成功 */
    public static final Integer SUCCESSFUL = 5;
    /** 交易关闭 */
    public static final Integer CLOSE = 6;

    /**未评价*/
    public static final Integer EVALUATE_NO = 7;
    /**已评价*/
    public static final Integer EVALUATE_YES = 8;
    /**cookie 用户登录token*/
    public static final String TOKEN_LOGIN = "_xlg";
    /**cookie 购物车 key*/
    public static final String CART_KEY = "_xca";

    // Dubbox版本
    public static final String XBIN_STORE_REDIS_VERSION = "1.0.0";
    public static final String XBIN_STORE_SSO_VERSION = "1.0.0";
    public static final String XBIN_STORE_NOTIFY_VERSION = "1.0.0";
    public static final String XBIN_STORE_ADMIN_VERSION = "1.0.0";
    public static final String XBIN_STORE_SEARCH_VERSION = "1.0.0";
    public static final String XBIN_STORE_PORTAL_VERSION = "1.0.0";
    public static final String XBIN_STORE_ORDER_VERSION = "1.0.0";
    public static final String XBIN_STORE_CART_VERSION = "1.0.0";
    public static final String XBIN_STORE_ITEM_VERSION = "1.0.0";

}
