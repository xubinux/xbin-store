package cn.binux.search.listener;


import cn.binux.pojo.SolrItem;
import cn.binux.search.mapper.SearchMapper;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.common.SolrInputDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

/**
 * 监听商品添加
 *
 * @author xubin.
 * @create 2017-0 下午9:58
 */


public class ItemAddListener implements MessageListener {

    private static final Logger logger = LoggerFactory.getLogger(ItemAddListener.class);

    @Autowired
    private SearchMapper searchMapper;

    //@Autowired
    //private SolrServer solrServer;

    @Autowired
    private SolrClient solrClient;

    @Override
    public void onMessage(Message message) {

        TextMessage textMessage = (TextMessage) message;

        try {
            Long itemId = Long.valueOf(textMessage.getText());

            logger.info("接受到JMS消息，消息为:" + itemId);

            // 休眠1秒 等待事务提交
            Thread.sleep(1000);

            SolrItem solrItem = searchMapper.getSolrItemByItemId(itemId);

            logger.info("查询到商品名称:"+solrItem.getTitle());

            SolrInputDocument document = new SolrInputDocument();

            document.addField("id", solrItem.getId());
            document.addField("item_category_name", solrItem.getCategory_name());
            document.addField("item_title", solrItem.getTitle());

            String image = solrItem.getImage();
            String[] split = image.split(",");

            document.addField("item_image", split[0]);
            document.addField("item_price", solrItem.getPrice());
            document.addField("item_sell_point", solrItem.getSell_point());
            document.addField("item_desc", solrItem.getItem_desc());

            solrClient.add(document);
            //solrServer.add(document);

            solrClient.commit();
            //solrServer.commit();

            logger.info("添加索引成功商品id:" + itemId);

        } catch (Exception e) {

            logger.error("添加索引失败", e);
        }


    }
}
