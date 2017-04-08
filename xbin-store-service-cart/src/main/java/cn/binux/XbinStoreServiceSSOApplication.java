package cn.binux;

import com.alibaba.dubbo.container.Main;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@MapperScan(basePackages = "cn.binux.mapper")
public class XbinStoreServiceSSOApplication {

	public static void main(String[] args) {
		SpringApplication.run(XbinStoreServiceSSOApplication.class, args);

		Main.main(args);
	}
}
