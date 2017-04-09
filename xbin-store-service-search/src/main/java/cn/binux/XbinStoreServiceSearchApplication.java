package cn.binux;

import com.alibaba.dubbo.container.Main;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "cn.binux.search.mapper")
public class XbinStoreServiceSearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(XbinStoreServiceSearchApplication.class, args);

		Main.main(args);
	}
}
