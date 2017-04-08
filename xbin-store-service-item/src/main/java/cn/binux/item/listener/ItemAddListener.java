package cn.binux.item.listener;

import cn.binux.item.service.ItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import javax.jms.Message;
import javax.jms.MessageListener;

/**
 * 监听商品添加 生成商品页面静态文件
 *
 * @author xubin.
 * @create 2017-02-06 下午8:19
 */


public class ItemAddListener implements MessageListener {

    private static final Logger logger = LoggerFactory.getLogger(ItemAddListener.class);

    @Autowired
    private ItemService itemService;
    //@Autowired
    //private FreeMarkerConfigurer freeMarkerConfigurer;

    @Value("${static_html_path}")
    private String STATIC_HTML_PATH;

    @Override
    public void onMessage(Message message) {
    //
    //    Long itemId = null;
    //    try {
    //        //从消息中取商品id
    //        TextMessage textMessage = (TextMessage) message;
    //        String strId = textMessage.getText();
    //        itemId = Long.parseLong(strId);
    //
    //        logger.info("接受到信息 商品ID:" + itemId);
    //
    //        // 休眠1秒 等待事务提交
    //        Thread.sleep(1000);
    //        //根据商品id查询商品信息及商品描述
    //        TbItem tbItem = itemService.getItemById(itemId);
    //        Item item = new Item(tbItem);
    //        TbItemDesc itemDesc = itemService.getItemDescById(itemId);
    //        //使用freemarker生成静态页面
    //        Configuration configuration = freeMarkerConfigurer.getConfiguration();
    //        //1.创建模板
    //        //2.加载模板对象
    //        Template template = null;
    //        try {
    //            template = configuration.getTemplate("item.ftl");
    //        } catch (IOException e) {
    //
    //            logger.error("模板加载失败", e);
    //
    //        }
    //        //3.准备模板需要的数据
    //        Map data = new HashMap<>();
    //        data.put("item", item);
    //        data.put("itemDesc", itemDesc);
    //        //4.指定输出的目录及文件名
    //        Writer out = new FileWriter(new File(STATIC_HTML_PATH + strId + ".html"));
    //        //5.生成静态页面
    //        template.process(data, out);
    //
    //        logger.info("商品静态页面创建成功 商品ID:" + itemId);
    //
    //        //关闭流
    //        out.close();
    //    } catch (Exception e) {
    //
    //        logger.error("创建模板失败 商品ID:" + itemId);
    //
    //    }
    }
}
