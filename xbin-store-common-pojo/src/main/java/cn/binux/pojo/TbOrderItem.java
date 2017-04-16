package cn.binux.pojo;

import lombok.Data;

@Data
public class TbOrderItem {
    private String id;

    private String itemId;

    private String orderId;

    private Integer num;

    private String title;

    private Long price;

    private Long totalFee;

    private String picPath;

    private String weights;

}