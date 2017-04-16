package cn.binux.pojo;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TbOrder implements Serializable {
    private String orderId;

    private Long userId;

    private Long addrId;

    private String payment;

    private Integer paymentType;

    private String postFee;

    private Integer status;

    private String shippingName;

    private String shippingCode;

    private String noAnnoyance;

    private String servicePrice;

    private String returnPrice;

    private String totalWeight;

    private Integer buyerRate;

    private Date closeTime;

    private Date endTime;

    private Date paymentTime;

    private Date consignTime;

    private Date createTime;

    private Date updateTime;


}