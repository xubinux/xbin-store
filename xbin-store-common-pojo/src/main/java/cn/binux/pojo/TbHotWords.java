package cn.binux.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class TbHotWords {
    private Long id;

    private String category;

    private String name;

    private String url;

    private Byte search;

    private Date created;

    private Date updated;

}