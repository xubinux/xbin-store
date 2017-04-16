package cn.binux.pojo;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TbItem implements Serializable {
    private Long id;

    private String title;

    private String sellPoint;

    private Long price;

    private Integer num;

    private String barcode;

    private String image;

    private Long cid;

    private Byte status;

    private Date created;

    private Date updated;

}