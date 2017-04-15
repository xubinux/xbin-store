package cn.binux.item.vo;

import cn.binux.pojo.TbItem;
import org.apache.commons.lang3.StringUtils;

/**
 * TbItem 扩展pojo
 *
 * @author xubin.
 * @create 2017-02-06 下午3:12
 */


public class TbItemVO extends TbItem {

    private String[] images;

    public TbItemVO(TbItem tbItem) {
        //初始化属性
        this.setId(tbItem.getId());
        this.setTitle(tbItem.getTitle());
        this.setSellPoint(tbItem.getSellPoint());
        this.setPrice(tbItem.getPrice());
        this.setNum(tbItem.getNum());
        this.setBarcode(tbItem.getBarcode());
        this.setImage(tbItem.getImage());
        this.setCid(tbItem.getCid());
        this.setStatus(tbItem.getStatus());
        this.setCreated(tbItem.getCreated());
        this.setUpdated(tbItem.getUpdated());
    }

    public String[] getImages() {

        if (StringUtils.isNotBlank(this.getImage())) {

            String[] split = this.getImage().split(",");

            return split;
        } else {
            return null;
        }

    }

}
