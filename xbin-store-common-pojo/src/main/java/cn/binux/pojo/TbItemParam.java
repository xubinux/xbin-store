package cn.binux.pojo;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TbItemParam implements Serializable {
    private Long id;

    private Long itemCatId;

    private Date created;

    private Date updated;

    private String paramData;

}