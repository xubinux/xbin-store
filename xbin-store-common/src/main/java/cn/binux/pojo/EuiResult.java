package cn.binux.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * Created by cynicism on 17/1/24.
 */
public class EuiResult<E> implements Serializable {

    private long total;
    private List<E> rows;

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<E> getRows() {
        return rows;
    }

    public void setRows(List<E> rows) {
        this.rows = rows;
    }
}
