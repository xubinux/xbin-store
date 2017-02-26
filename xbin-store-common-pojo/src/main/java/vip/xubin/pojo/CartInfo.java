package vip.xubin.pojo;

import java.io.Serializable;

/**
 * 购物车 pojo
 *
 * @author xubin.
 * @create 2017-02-22 下午12:58
 */


public class CartInfo implements Serializable{

    private Long id;
    private String name;
    private String imageUrl;
    private String colour;
    private String size;
    private Long price;
    private Long weight;
    private Integer num;
    private Long sum;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Long getWeight() {
        return weight;
    }

    public void setWeight(Long weight) {
        this.weight = weight;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Long getSum() {
        return price * num;
    }

}
