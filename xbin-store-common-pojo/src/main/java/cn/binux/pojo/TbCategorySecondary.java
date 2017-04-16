package cn.binux.pojo;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TbCategorySecondary implements Serializable {
    private Long id;

    private String cid;

    private Long parentId;

    private String name;

    private String url;

    private Integer status;

    private Integer sortOrder;

    private Boolean isParent;

    private Date created;

    private Date updated;

}