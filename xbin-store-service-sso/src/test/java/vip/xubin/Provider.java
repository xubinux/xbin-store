package vip.xubin;


import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.DecimalFormat;

public class Provider {


	public static void main(String[] args) throws Exception {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				new String[] { "spring/spring-context.xml" });
		context.start();
		System.in.read(); // 为保证服务一直开着，利用输入流的阻塞来模拟
	}

	@Test
	public void test() {
		DecimalFormat df1 = new DecimalFormat("#.00");
		df1.setGroupingUsed(false);
		System.out.println(df1.format(555000 / 100));
	}


}