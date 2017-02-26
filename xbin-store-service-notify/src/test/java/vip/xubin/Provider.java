package vip.xubin;


import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Provider {


	public static void main(String[] args) throws Exception {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				new String[] { "spring/spring-context.xml" });
		context.start();
		System.in.read(); // 为保证服务一直开着，利用输入流的阻塞来模拟
	}

	@Test
	public void test() {
		//截取手机号码如+008615669970088
		String mobile = "+008615669970088";
		String s = mobile.substring(5, mobile.length());
		int i = (int) ((Math.random() * 9 + 1) * 100000);
		System.out.println(i);

	}


}