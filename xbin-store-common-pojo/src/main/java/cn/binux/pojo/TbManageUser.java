package cn.binux.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class TbManageUser {
    private Long id;

    private String username;

    private String name;

    private String password;

    private String phone;

    private String email;

    private String job;

    private Date created;

    private Date updated;

}