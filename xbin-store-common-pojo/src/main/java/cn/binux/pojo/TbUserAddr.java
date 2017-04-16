package cn.binux.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class TbUserAddr {
    private String addrId;

    private String userId;

    private String receiverName;

    private String receiverPhone;

    private String receiverMobile;

    private String receiverState;

    private String receiverCity;

    private String receiverDistrict;

    private String receiverAddress;

    private String receiverZip;

    private Date created;

    private Date updated;

}