package cn.binux.mapper;

import org.apache.ibatis.annotations.Param;
import cn.binux.pojo.TbManageUser;
import cn.binux.pojo.TbManageUserExample;

import java.util.List;

public interface TbManageUserMapper {
    int countByExample(TbManageUserExample example);

    int deleteByExample(TbManageUserExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbManageUser record);

    int insertSelective(TbManageUser record);

    List<TbManageUser> selectByExample(TbManageUserExample example);

    TbManageUser selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbManageUser record, @Param("example") TbManageUserExample example);

    int updateByExample(@Param("record") TbManageUser record, @Param("example") TbManageUserExample example);

    int updateByPrimaryKeySelective(TbManageUser record);

    int updateByPrimaryKey(TbManageUser record);
}