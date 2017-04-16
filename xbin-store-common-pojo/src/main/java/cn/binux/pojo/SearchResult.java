package cn.binux.pojo;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * 查询返回POJO
 *
 * @author 許彬.
 * @creater 2016-08-23 22:03
 */

@Data
public class SearchResult implements Serializable {

    //商品集合
    private List<SolrItem> itemList;
    //总记录数
    private long recordCount;
    //总页数
    private long pageCount;
    //当前页
    private long curPage;

}
