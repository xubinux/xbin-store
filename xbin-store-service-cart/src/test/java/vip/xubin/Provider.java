package vip.xubin;


import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.UUID;

public class Provider {


	public static void main(String[] args) throws Exception {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				new String[] { "spring/spring-context.xml" });
		context.start();
		System.in.read(); // 为保证服务一直开着，利用输入流的阻塞来模拟
	}

	@Test
	public void test() {
		String substring = UUID.randomUUID().toString().replaceAll("-", "").substring(0, 10);
		System.out.println(substring);
	}
}