package cn.binux.admin.vo;


import cn.binux.pojo.TbManageUser;

import java.text.SimpleDateFormat;

/**
 * 后台用户展示VO
 *
 * @author xubin.
 * @create 2017-02-11 下午3:57
 */


public class ManageUserVO extends TbManageUser {

    private String joinus;

    public String getJoinus() {

        SimpleDateFormat format = new SimpleDateFormat("yyyy MM");

        return format.format(this.getCreated()).toString() + "加入公司";
    }


}
