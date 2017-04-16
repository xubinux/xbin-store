package cn.binux.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class TbCategoryImage {
    private Long id;

    private String cid;

    private String name;

    private String url;

    private Integer littleOrBig;

    private Integer status;

    private String imageUrl;

    private Integer sortOrder;

    private Date created;

    private Date updated;

}