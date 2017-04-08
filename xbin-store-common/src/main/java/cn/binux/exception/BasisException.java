/*
 * ====================================================================
 * 龙果学院： www.roncoo.com （微信公众号：RonCoo_com）
 * 超级教程系列：《微服务架构的分布式事务解决方案》视频教程
 * 讲师：吴水成（水到渠成），840765167@qq.com
 * 课程地址：http://www.roncoo.com/details/7ae3d7eddc4742f78b0548aa8bd9ccdb
 * ====================================================================
 */
package cn.binux.exception;

/**
 * 业务异常基类，所有业务异常都必须继承于此异常 
 * 
 */
public class BasisException extends RuntimeException {

    /**
     * 异常信息
     */
    protected String msg;

    /**
     * 具体异常码
     */
    protected int code;

    public BasisException(int code, String msgFormat, Object... args) {
        super(String.format(msgFormat, args));
        this.code = code;
        this.msg = String.format(msgFormat, args);
    }

    public BasisException() {
        super();
    }

    public BasisException(String message, Throwable cause) {
        super(message, cause);
    }

    public BasisException(Throwable cause) {
        super(cause);
    }

    public BasisException(String message) {
        super(message);
    }

    public String getMsg() {
        return msg;
    }

    public int getCode() {
        return code;
    }

    /**
     * 实例化异常
     * 
     * @param msgFormat
     * @param args
     * @return
     */
    public BasisException newInstance(String msgFormat, Object... args) {
        return new BasisException(this.code, msgFormat, args);
    }

}
