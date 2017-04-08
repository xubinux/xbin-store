package cn.binux;

import com.alibaba.dubbo.container.Main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class XbinStoreServiceNotifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(XbinStoreServiceNotifyApplication.class, args);

		Main.main(args);
	}
}
