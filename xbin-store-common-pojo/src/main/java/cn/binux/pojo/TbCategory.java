package cn.binux.pojo;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TbCategory implements Serializable {
    private String id;

    private String name;

    private Integer sortOrder;

    private Date created;

    private Date updated;

}