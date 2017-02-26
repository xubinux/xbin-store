package vip.xubin.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * 查询返回POJO
 *
 * @author 許彬.
 * @creater 2016-08-23 22:03
 */

public class SearchResult implements Serializable {

    //商品集合
    private List<SolrItem> itemList;
    //总记录数
    private long recordCount;
    //总页数
    private long pageCount;
    //当前页
    private long curPage;

    public List<SolrItem> getItemList() {
        return itemList;
    }

    public void setItemList(List<SolrItem> itemList) {
        this.itemList = itemList;
    }

    public long getRecordCount() {
        return recordCount;
    }

    public void setRecordCount(long recordCount) {
        this.recordCount = recordCount;
    }

    public long getPageCount() {
        return pageCount;
    }

    public void setPageCount(long pageCount) {
        this.pageCount = pageCount;
    }

    public long getCurPage() {
        return curPage;
    }

    public void setCurPage(long curPage) {
        this.curPage = curPage;
    }
}
