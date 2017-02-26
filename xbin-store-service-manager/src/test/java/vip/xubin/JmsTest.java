package vip.xubin;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.testng.annotations.Test;

import javax.jms.*;
import java.io.IOException;

/**
 * 测试 Spring JMSTemplate
 *
 * @author xubin.
 * @create 2017-02-05 下午9:04
 */


public class JmsTest {


    @Test
    public void test() {

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring/spring-context.xml");

        JmsTemplate jmsTemplate = context.getBean(JmsTemplate.class);

        Destination destination = (Destination) context.getBean("test-queue");

        jmsTemplate.send(destination, new MessageCreator() {
            @Override
            public Message createMessage(Session session) throws JMSException {

                TextMessage test = session.createTextMessage("test2");

                return test;
            }
        });

    }

    @Test
    public void test2() throws IOException {

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring/spring-context.xml");

        context.start();

        System.in.read();

    }

}
