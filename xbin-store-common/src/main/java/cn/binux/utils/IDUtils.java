package cn.binux.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

/**
 * 各种id生成策略
 */
public class IDUtils {

	/**
	 * 图片名生成
	 */
	public static String genImageName() {
		//取当前时间的长整形值包含毫秒
		long millis = System.currentTimeMillis();
		//long millis = System.nanoTime();
		//加上三位随机数
		Random random = new Random();
		int end3 = random.nextInt(999);
		//如果不足三位前面补0
		String str = millis + String.format("%03d", end3);
		
		return str;
	}
	
	/**
	 * 商品id生成
	 */
	public static long genItemId() {
		//取当前时间的长整形值包含毫秒
		long millis = System.currentTimeMillis();
		//long millis = System.nanoTime();
		//加上两位随机数
		Random random = new Random();
		int end2 = random.nextInt(99);
		//如果不足两位前面补0
		String str = millis + String.format("%02d", end2);
		long id = new Long(str);
		return id;
	}

	/**
	 * 订单id生成
	 */
	public static String genOrderId() {
		//取当前时间的长整形值包含毫秒
		String millis = System.currentTimeMillis() + "";

		millis = millis.substring(5, millis.length());
		//加上四位随机数
		Random random = new Random();
		int end4 = random.nextInt(9999);
		//如果不足两位前面补0
		String str = String.format("%04d", end4);

		return millis + str;
	}
	/**
	 * 订单项id生成
	 */
	public static String genOrderItemId() {
		//取当前时间的长整形值包含毫秒
		String millis = System.currentTimeMillis() + "";

		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		String data = format.format(new Date());

		millis = millis.substring(7, millis.length());
		//加上四位随机数
		Random random = new Random();
		int end4 = random.nextInt(9999);
		//如果不足两位前面补0
		String str = String.format("%04d", end4);

		return data + millis + str;
	}


	public static void main(String[] args) {
		//for(int i=0;i< 100;i++)
		//System.out.println(genOrderId());

		//String s = "1";
		//s = "0000" + s;
		//s = s.substring(s.length() - 4, s.length());
		//System.out.println(s);

		System.out.println(genOrderItemId());
	}
}
