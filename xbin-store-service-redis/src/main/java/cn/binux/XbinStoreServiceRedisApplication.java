package cn.binux;

import com.alibaba.dubbo.container.Main;
import com.ctrip.framework.apollo.spring.annotation.EnableApolloConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableApolloConfig
@SpringBootApplication
public class XbinStoreServiceRedisApplication {

	public static void main(String[] args) {
		SpringApplication.run(XbinStoreServiceRedisApplication.class, args);

		Main.main(args);
	}
}
