package vip.xubin.manager.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vip.xubin.manager.service.ItemService;
import vip.xubin.mapper.TbItemDescMapper;
import vip.xubin.mapper.TbItemMapper;
import vip.xubin.pojo.*;
import vip.xubin.utils.IDUtils;

import javax.annotation.Resource;
import javax.jms.*;
import java.util.Date;
import java.util.List;

/**
 * Created by cynicism on 17/1/24.
 */
@Service
@com.alibaba.dubbo.config.annotation.Service(interfaceClass = vip.xubin.manager.service.ItemService.class, protocol = {"dubbo"}, retries = 0)
@Transactional
public class ItemServiceImpl implements ItemService {

    private static final Logger logger = LoggerFactory.getLogger(ItemServiceImpl.class);

    @Autowired
    private TbItemMapper itemMapper;

    @Autowired
    private TbItemDescMapper itemDescMapper;

    @Autowired
    private JmsTemplate jmsTemplate;

    @Resource(name = "addItemTopic")
    private Destination destination;

    @Override
    public TbItem getItemById(long itemId) {
        //get
        //http://localhost:8510/manager/ItemService/getItemById/{itemId}
        TbItem tbItem = itemMapper.selectByPrimaryKey(itemId);
        System.out.println(tbItem.toString());
        return tbItem;
    }

    @Override
    public EuiResult<TbItem> getItemList(Integer page, Integer rows) {

        PageHelper.startPage(page, rows);

        List<TbItem> items = itemMapper.selectByExample(new TbItemExample());

        PageInfo<TbItem> pageInfo = new PageInfo<TbItem>(items);

        EuiResult<TbItem> result = new EuiResult<TbItem>();
        result.setTotal(pageInfo.getTotal());
        result.setRows(items);

        return result;
    }

    @Override
    public XbinResult saveItem(TbItem item, String desc) {

        final long itemId = IDUtils.genItemId();
        item.setId(itemId);
        //商品状态，1-正常，2-下架，3-删除
        item.setStatus((byte) 1);

        item.setCreated(new Date());

        item.setUpdated(new Date());

        TbItemDesc itemDesc = new TbItemDesc();

        itemDesc.setItemDesc(desc);

        itemDesc.setCreated(new Date());

        itemDesc.setUpdated(new Date());

        itemDesc.setItemId(itemId);

        itemMapper.insert(item);

        itemDescMapper.insert(itemDesc);

        jmsTemplate.send(destination, new MessageCreator() {
            @Override
            public Message createMessage(Session session) throws JMSException {

                TextMessage message = session.createTextMessage(itemId + "");

                logger.info("发送JMS消息,消息为:" + itemId);

                return message;
            }
        });

        return XbinResult.ok();
    }
}
