> 由于本人最近在准备面试 所以这个项目可能会耽误一段时间 :yum: :yum:

## xbin-store
模仿国内知名B2C网站,实现的一个分布式B2C商城

使用技术:

* 后台
	* `Maven`构建项目
	* `Jenkins`作为持续集成
	* 构上采用`Dubbox`作为RPC框架
	* `kryo`序列化
	* 使用`Spring`+`Spring MVC`+`MyBatis`SSM框架
	* 数据库连接池使用`druid`
	* 数据库使用`MySQL`和`Redis`
	* 网页采用`freemarker`生成静态化页面
	* 存储采用`FastDFS`存储图片等文件
	* 采用`Solr`实现搜索服务
	* 负载均衡使用`Nginx`、`Keepalived`实现高可用
	* 采用`Spring Scheduled`做任务调度
	* 消息中间件暂时采用`ActiveMQ`准备替换为`RocketMQ`,
	* 在分布式事务上则采用了[TCC](https://github.com/changmingxie/tcc-transaction)解决订单支付方面时效性要求性高的分布式事务,可靠的消息服务则来解决如会计记录等时效性要求低的分布式事务.
* 前台
	* 采用基于[AdminLTE](https://github.com/almasaeed2010/AdminLTE)的[roncoo-adminLTE](https://github.com/roncoo/roncoo-adminLTE)(主要增加了Ajax的布局模式)
	* AdminLTE集成太多Js这里就不一一列举了
	
	
	
	
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

## Pull Request
想要一起开发的可以 Fork 项目,发[邮件](Mailto:xu.binux@gmail.com?Subject=参与开发xbin-store)给我,我会把关于项目的数据库文件、Json 格式发送给您

前端、后端都可以参与。

期待您的 `Pull Request`.

## 群

![20170320148998263242121.png](https://raw.githubusercontent.com/xubinux/xbin-store/master/Images/QQ.png)

> 新建了一个Q群，想参与开发或讨论技术的可以扫描二维码，进群验证请填写你的Github用户名，否则一律拒绝。

## 机器ip地址(本机)

### Tomcat地址(本机)
|名称|IP|完成情况|
|:---------------:|:---------------:|:---------------:|
| Portal  |192.168.125.1:8101 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-portal/README.md)|
| Search  |192.168.125.1:8102 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-search/README.md)|
| Item    |192.168.125.1:8103 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-item/README.md)|
| SSO     |192.168.125.1:8104 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-sso/README.md)|
| Admin   |192.168.125.1:8105 |[完成情况](https://github.com/xubinux/xbin-store/tree/master/xbin-store-web-admin/README.md)|
| Cart    |192.168.125.1:8106 |[完成情况](https://github.com/xubinux/xbin-store/tree/master/xbin-store-web-cart/README.md)|
| Order   |192.168.125.1:8107 |[完成情况](https://github.com/xubinux/xbin-store/blob/master/xbin-store-web-order/README.md)|

### Dubbox服务地址(本机)
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


### 虚拟机
|名称|IP|
|:---------------:|:---------------:|
| Zookeeper1    |192.168.125.128|
| FastDFS       |192.168.125.129|
| Solr          |192.168.125.131|
| FastDFS       |192.168.125.132|
| Redis         |192.168.125.133|

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