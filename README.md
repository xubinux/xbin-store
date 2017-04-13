## xbin-store

模仿国内知名B2C网站,实现的一个分布式B2C商城

进群参与开发或讨论 群 626068936 :u7a7a: 

OSChina 地址 : http://git.oschina.net/binu/xbin-store

使用技术:

* 后台
	* 使用`Spring Boot` 构建整个项目 去除 XML 配置
	* `Maven`构建项目
	* `Jenkins`作为持续集成
	* 上采用`Dubbox`作为RPC框架
	* `kryo`序列化
	* 使用`Spring`+`Spring MVC`+`MyBatis`SSM框架
	* 数据库连接池使用`druid`
	* 数据库使用`MySQL`和`Redis`
	* 页面引擎采用 `Beetl`
	* 网页采用`freemarker`生成静态化页面
	* 存储采用`FastDFS`存储图片等文件
	* 采用`Solr`实现搜索服务
	* `Swagger2` 生成 RESTful Apis文档
	* 负载均衡使用`Nginx`、`keepalived`实现高可用
	* 采用`Spring Scheduled`做任务调度
	* 消息中间件暂时采用`RabbitMQ`,
	* 在分布式事务上则采用了[TCC](https://github.com/changmingxie/tcc-transaction)解决订单支付方面时效性要求性高的分布式事务,可靠的消息服务则来解决如会计记录等时效性要求低的分布式事务.
* 前台
	* 采用基于[AdminLTE](https://github.com/almasaeed2010/AdminLTE)的[roncoo-adminLTE](https://github.com/roncoo/roncoo-adminLTE)(主要增加了Ajax的布局模式)
	* AdminLTE集成太多Js这里就不一一列举了
	
## Pull Request
想要一起开发的可以 Fork 项目,发[邮件](Mailto:xu.binux@gmail.com?Subject=参与开发xbin-store)给我,我会把关于项目的数据库文件、Json 格式发送给您

前端、后端都可以参与。

期待您的 `Pull Request`.	
	
## 环境

### 本机

* Maven3.2.5
* nexus-2.2
* IntelliJ IDEA 2017.1
* JDK 1.8.0
* Mac OS X 10.11.6
* Jenkins
* dubbo-admin-2.8.4 

### 虚拟机5台（各1G内存就可以）
* Zookeeper1 192.168.125.128  
	* zookeeper单机
	* [安装教程](http://binux.cn/2017/03/04/Zookeeper-Cluster-Install/)
* Storm1 192.168.125.129		
	* FastDFS Tracker
	* [安装教程](http://binux.cn/2017/03/05/FastDFS-Install/)
* Storm2 192.168.125.132		
	* FastDFS Storage
	* [安装教程](http://binux.cn/2017/03/05/FastDFS-Install/)
* Redis 192.168.125.133		
	* redis单机
	* [安装教程](http://binux.cn/2017/03/03/Redis-Cluster-Install/)
* Solr 192.168.125.131		
	* solr单机
	* [安装教程](http://binux.cn/2017/03/06/Solr-Cluster-Install/)

ps.有虚拟机最好，并不是一定要求虚拟机。开发也可以全部装在本机，使用虚拟机的好处就是可以避免你的系统端口占用、删除麻烦等等一些问题。

教程写的不是很好 **勿喷**！！！

## 运行流程

进群 626068936 查看群文件 群里更新比较方便

### 1、下载源码
GitHub：  https://github.com/xubinux/xbin-store

OSChina: http://git.oschina.net/binu/xbin-store

IDEA导入可以只导入`xbin-store/pom.xml`父工程 会自动导入全部模块

eclipse自行解决

> 不介意的话可以点个`Star`或者`Fork` 谢谢！

### 2、修改配置文件
修改为Spring Boot后本项目只有两处配置文件地址 `项目/src/main/resources/application.yml` 和`fastdfs_client.conf` 

#### 需要修改的地方 有注释修改的地方
application.yml 
```
service配置
-----------------------------------------------------------
#DUBBOX
dubbox:
  application: 
    name: xbin-store-service-sso # 模块名
    organization: dubbox 
    owner: binux # 负责人
  registry: 
    protocol: zookeeper 
    address: 192.168.125.128:2181 #修改 zookeeper 地址 
 annotation:
    package: cn.binux.sso # dubbo扫描包路径
  protocol:
    name: dubbo 
    port: 20885 # 暴露端口
    host: 192.168.125.1 #修改 本机ip 多网卡配置
    timeout: 30000 
    threadpool: fixed
    threads: 500
    accepts: 1000
    serialization: kryo
    optimizer: cn.binux.serial.SerializationOptimizerImpl
  
web模块配置
----------------------------------------------------------- 
 #DUBBO
dubbox:
  application:
    name: xbin-store-web-portal
    organization: dubbox
    owner: binux
  registry:
    protocol: zookeeper
    address: 192.168.125.128:2181 #修改 zookeeper地址
  annotation:
    package: cn.binux.controller

#配置模板想到classpath路径，后面须加上"/"
beetl:
  templates-path: templates/
  config:
      html-tag-flag: true
#配置模板的后缀，自动读取spring.mvc.view.suffix
spring:
  mvc:
    view:
      suffix: .html
 
涉及数据库操作 admin/cart/item/order/protal/search/sso
-----------------------------------------------------------
druid:
    url: jdbc:mysql://localhost:3306/xbin_store?characterEncoding=utf-8 # 数据库地址
    driver-class: com.mysql.jdbc.Driver
    username: root #修改 用户名
    password: OZo+t9QET+ctzd5Esn9q0GJP5hXtWWIKEsX8c4/w6z4C4AnxrwpvySNgBS89XdazOavjXXZp0oeZtQ3P9lLGEA== #修改 数据库密码
    # 需加密 java -cp druid-0.2.23.jar com.alibaba.druid.filter.config.ConfigTools you_password
    initial-size: 1
    min-idle: 1
    max-active: 20
    test-on-borrow: true
    max-wait: 60000
    time-between-eviction-runs-millis: 60000
    min-evictable-idle-time-millis: 300000
    validation-query: SELECT 1 FROM DUAL
    test-While-Idle: true
    test-on-return: false
    pool-prepared-statements: false
    max-pool-prepared-statement-per-connection-size: 20
    filters: stat,wall,log4j,config
    connection-properties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000;config.decrypt=true
    monitor:
          enabled: false # druid监控 默认关闭
          druid-stat-view: /druid/*
          druid-web-stat-filter: /*
          allow: 219.230.50.107,127.0.0.1 # 允许访问地址
          deny: 192.168.1.73  # 禁止访问地址
          login-username: admin # 用户名
          login-password: 123456 # 密码
          exclusions: '*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*'
          reset-enable: false
mybatis:
    type-aliases-package: cn.binux.pojo
    mapper-locations: classpath:mapper/*.xml


pagehelper:
    helperDialect: mysql
    reasonable: true
    supportMethodsArguments: true
    params: count=countSql

-----------------------------------------------------------
redis模块
# REDIS (RedisProperties)
redis:
  cluster: false # false为单机版 
  # 集群请设置为 true
  # 并设置clusterNodes 格式: 192.168.125.133:6379,192.168.125.134:6379
  single-host: 192.168.125.133  #修改 redis地址单机配置
  single-port: 6379
  
-----------------------------------------------------------
search模块
# SOLR
spring:
  data:
    solr:
      host: http://192.168.125.131:8080/solr/collection1 #修改 配置Solr地址
#      zkHost: #集群配置这个
      repositories:
        enabled: true

```

fastdfs_client.conf  #修改 需要使用FastDFS的模块在resource下加此配置文件
```
tracker_server = 192.168.125.129:22122
```

如有遗漏 请在群中给我**反馈**。

### 3、编译

直接`install`父工程

![install](http://on2bs9q7q.bkt.clouddn.com/20170407149154764295690.png)

### 新建Spring Boot
![20170412149198074286507.png](http://on2bs9q7q.bkt.clouddn.com/20170412149198074286507.png)

启动每个模块的 cn.binux.XbinStore模块名Application/Main 即启动

### 4、启动
Zookeeper启动 redis启动 FastDFS启动 Solr启动

按照依赖启动 查看下方依赖图

#### Tomcat地址(本机)
|名称|IP|完成情况|
|:---------------:|:---------------:|:---------------:|
| Portal  |192.168.125.1:8101 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-portal/README.md)|
| Search  |192.168.125.1:8102 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-search/README.md)|
| Item    |192.168.125.1:8103 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-item/README.md)|
| SSO     |192.168.125.1:8104 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-sso/README.md)|
| Admin   |192.168.125.1:8105 |[完成情况](https://github.com/xubinux/xbin-store/tree/master/xbin-store-web-admin/README.md)|
| Cart    |192.168.125.1:8106 |[完成情况](https://github.com/xubinux/xbin-store/tree/master/xbin-store-web-cart/README.md)|
| Order   |192.168.125.1:8107 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-order/README.md)|

#### Dubbox服务地址
| 服务名称|Dubbox服务端口  |rest服务端口|
|:---------------:|:---------------:|:---------------:|
| Admin-Service      | 192.168.125.1:20880 |rest:8510 |
| Redis-Service      | 192.168.125.1:20881 |rest:8511 |
| Search-Service     | 192.168.125.1:20882 |rest:8512 |
| Portal-Service     | 192.168.125.1:20883 |rest:8513 |
| Item-Service       | 192.168.125.1:20884 |rest:8514 |
| SSO-Service        | 192.168.125.1:20885 |rest:8515 |
| Notify-Service     | 192.168.125.1:20886 |rest:8516 |
| Cart-Service       | 192.168.125.1:20887 |rest:8517 |
| Order-Service      | 192.168.125.1:20888 |rest:8518 |

### 5、启动
zookeeper启动 redis启动 FastDFS启动

按照依赖启动 Redis-Service 先启动 其他 service 启动,在 web 启动。

### 项目依赖(暂时)
![20170412149198629621093.png](http://on2bs9q7q.bkt.clouddn.com/20170412149198629621093.png)

### 结构图(暂时)
![20170407149155166510416.png](http://on2bs9q7q.bkt.clouddn.com/20170407149155166510416.png)

### 项目开发进度(暂时)
![20170413149208582280568.jpg](http://on2bs9q7q.bkt.clouddn.com/20170413149208582280568.jpg)

### 项目命名规范
* 父工程 xx
    * xx-common
    * xx-common-config
    * xx-common-mapper
    * xx-common-pojo
    * xx-service-yy-api
    * xx-service-yy
    * xx-web-yy
    * ......
    
## 实现目标

本项目最终实现的目标 [点我查看最后完成效果](https://www.jd.com)

## 运行截图
### 首页
![20170320148998263242121.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/首页.png)

### 登录
![20170320148998264384011.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/登录.png)

### 注册
![201703201489982653612.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/注册.png)

### 搜索
![20170320148998266267017.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/搜索.png)

### 商品详情
![20170320148998269698649.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/商品详情.png)

### 加入购物车
![20170320148998270641283.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/加入购物车.png)

### 购物车
![20170320148998271738052.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/购物车.png)

### 订单确认
![20170320148998272353143.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/订单确认.png)

### 结算页
![20170320148998273050196.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/结算页.png)

### 后台页面
![20170320148998275560672.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/后台.png)

### 启动虚拟机
![20170320148998297295027.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/虚拟机.png)

* Zookeeper1    提供服务:Zookeeper
* Storm1        提供服务:FastDFS Tracker
* Storm2        提供服务:FastDFS Storage
* Redis         提供服务:Redis
* Solr          提供服务:Solr

### Dubbox Admin 服务使用情况
![20170320148998294075274.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/Dubbox.png)

### 任务管理器
![20170320148998292034786.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/任务管理器.png)

> 启动了 5 台虚拟机＋ 7 台 Tomcat ＋ 9 个 Dubbox 服务 内存使用情况
