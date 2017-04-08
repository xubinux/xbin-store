package cn.binux.mapper;

import org.apache.ibatis.annotations.Param;
import cn.binux.pojo.TbTransactionMessage;
import cn.binux.pojo.TbTransactionMessageExample;

import java.util.List;

public interface TbTransactionMessageMapper {
    int countByExample(TbTransactionMessageExample example);

    int deleteByExample(TbTransactionMessageExample example);

    int deleteByPrimaryKey(String id);

    int insert(TbTransactionMessage record);

    int insertSelective(TbTransactionMessage record);

    List<TbTransactionMessage> selectByExampleWithBLOBs(TbTransactionMessageExample example);

    List<TbTransactionMessage> selectByExample(TbTransactionMessageExample example);

    TbTransactionMessage selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") TbTransactionMessage record, @Param("example") TbTransactionMessageExample example);

    int updateByExampleWithBLOBs(@Param("record") TbTransactionMessage record, @Param("example") TbTransactionMessageExample example);

    int updateByExample(@Param("record") TbTransactionMessage record, @Param("example") TbTransactionMessageExample example);

    int updateByPrimaryKeySelective(TbTransactionMessage record);

    int updateByPrimaryKeyWithBLOBs(TbTransactionMessage record);

    int updateByPrimaryKey(TbTransactionMessage record);
}