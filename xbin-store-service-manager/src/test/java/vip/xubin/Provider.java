package vip.xubin;


import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Provider {


	public static void main(String[] args) throws Exception {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				new String[] { "spring/spring-context.xml" });
		context.start();
		System.in.read(); // 为保证服务一直开着，利用输入流的阻塞来模拟
	}
}