> 凌晨2点了 就不在测试了 现在服务应该都是可以运行的 还有一些小 Bug 我有时间在修改
>
>  `MQ` 目前没有配置 等后面再集成进来
> 
> 页面引擎换成了 `Beetl` 项目部署 明天修改下

## xbin-store

模仿国内知名B2C网站,实现的一个分布式B2C商城

进群参与开发或讨论 群 626068936 :u7a7a: 

使用技术:

* 后台
	* 使用`Spring Boot` 构建整个项目 去除 XML 配置
	* `Maven`构建项目
	* `Jenkins`作为持续集成
	* 构上采用`Dubbox`作为RPC框架
	* `kryo`序列化
	* 使用`Spring`+`Spring MVC`+`MyBatis`SSM框架
	* 数据库连接池使用`druid`
	* 数据库使用`MySQL`和`Redis`
	* 页面引擎采用 `Beetl`
	* 网页采用`freemarker`生成静态化页面
	* 存储采用`FastDFS`存储图片等文件
	* 采用`Solr`实现搜索服务
	* 负载均衡使用`Nginx`、`keepalived`实现高可用
	* 采用`Spring Scheduled`做任务调度
	* 消息中间件暂时采用`ActiveMQ`准备替换为`RocketMQ`,
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

### 1、下载源码
GitHub：  https://github.com/xubinux/xbin-store

OSChina: http://git.oschina.net/binu/xbin-store

IDEA导入可以只导入`xbin-store`父工程 会自动导入全部模块

eclipse自行解决

> 不介意的话可以点个`Star`或者`Fork` 谢谢！

### 2、配置私服地址

不配置私服的可以自行下载群文件中的`dubbo 2.8.4.jar` 和`fastDFS 1.2.4.jar` 但是听群友说dubbo的jar包只能下源码重新编译才能使用,我是自己编译的,你们可以试试。

> 服务器由群里`@K`提供 就不发布在网上了 只供群里使用

### 3、修改配置文件
本项目一共有 2 大处配置文件地址 `xbin-store-common-config` 和各个工程
`main/resources/config/config.properties` 

前者是整个项目的公共配置如:数据库、MQ等服务器地址都可以在这配置

后者是每个项目单独的配置如:dubbo配置、一些常量等配置

#### 需要修改的地方
1. `xbin-store-common-config/src/main/resources/db.properties`
	* jdbc.url
	* jdbc.username
	* jdbc.password
	* 密码需要加密`java -cp druid-0.2.23.jar com.alibaba.druid.filter.config.ConfigTools you_password`
2. `xbin-store-common-config/src/main/resources/mq_config.properties`
	* mq.brokerURL
3. `xbin-store-common-config/src/main/resources/public_system.properties`
	* dubbo.registry.address
	* fastdfs.base.url
	* solr.single.url
	* redis.server.single
4. 各个模块的`config.properties`端口不要修改 如要修改请使用全局搜索替换原来端口

如有遗漏 请在群中给我**反馈**。

### 4、编译

直接`install`父工程

![install](http://on2bs9q7q.bkt.clouddn.com/20170407149154764295690.png)

### 新建Tomcat和dubbo服务
#### dubbo模板
![20170407149154909476281.png](http://on2bs9q7q.bkt.clouddn.com/20170407149154909476281.png)

其他`dubbox服务`只需修改`Main class`和`Use classpath of module`

#### Tomcat模板
![20170407149154907556461.png](http://on2bs9q7q.bkt.clouddn.com/20170407149154907556461.png)

其他修改`port`和`Artifact`即可

不使用 IDEA 的启动 dubbo 服务直接运行每个 service 服务的 `src/test/java/vip/xubin/Provider.java`中的 main 方法启动服务

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
### 结构图
![20170407149155166510416.png](http://on2bs9q7q.bkt.clouddn.com/20170407149155166510416.png)

![20170320148998263242121.png](http://git.oschina.net/binu/xbin-store/raw/master/Images/xbin-store.png)	

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

##结构图
![20170320148998263242121.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/xbin-store.png)

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
