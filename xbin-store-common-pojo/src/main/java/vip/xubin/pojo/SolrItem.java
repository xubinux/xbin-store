package vip.xubin.pojo;

import java.io.Serializable;
import java.text.DecimalFormat;

/**
 * Solr搜索Item POJO
 *
 * @author 許彬.
 * @creater 2016-08-23 20:59
 */

public class SolrItem implements Serializable {

    private String id;
    private String image;
    private Long price;
    private String sell_point;
    private String title;
    private String category_name;
    private String item_desc;
    private String priceView;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getSell_point() {
        return sell_point;
    }

    public void setSell_point(String sell_point) {
        this.sell_point = sell_point;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public String getItem_desc() {
        return item_desc;
    }

    public void setItem_desc(String item_desc) {
        this.item_desc = item_desc;
    }

    public String getPriceView() {

        DecimalFormat df1 = new DecimalFormat("#.00");
        df1.setGroupingUsed(false);
        String format = df1.format(price / 100);
        return format;
    }


}
