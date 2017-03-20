## xbin-store

分布式商城项目

### 首页
![2017032014899742947933.png](http://on2bs9q7q.bkt.clouddn.com/2017032014899742947933.png)

### 登录
![2017032014899743031106.png](http://on2bs9q7q.bkt.clouddn.com/2017032014899743031106.png)

### 注册
![20170320148997430966590.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997430966590.png)

### 搜索
![20170320148997431735699.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997431735699.png)

### 商品详情
![20170320148997432440593.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997432440593.png)

### 加入购物车
![20170320148997438029967.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997438029967.png)

### 购物车
![20170320148997438789818.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997438789818.png)

### 订单确认
![20170320148997439345704.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997439345704.png)

### 结算页
![20170320148997440114508.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997440114508.png)

### 后台页面
![20170320148997448532645.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997448532645.png)

### 启动Service
![20170320148997237479304.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997237479304.png)

### 启动Tomcat
![20170320148997241367244.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997241367244.png)

### 启动虚拟机
![20170320148997458481945.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997458481945.png)

> Zookeeper1 提供服务:Zookeeper
> Storm1 提供服务:FastDFS Tracker
> Storm2 提供服务:FastDFS Storage
> Redis  提供服务:Redis
> Solr   提供服务:Solr

### Dubbox Admin服务使用情况
![20170320148997493067150.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997493067150.png)

### 任务管理器
![20170320148997470975422.png](http://on2bs9q7q.bkt.clouddn.com/20170320148997470975422.png)

> 启动了5台虚拟机＋7台Tomcat＋9个Dubbox服务 内存使用情况

### 命名规范(自己总结)
* 父工程 xx
    * xx-common
    * xx-common-config
    * xx-common-mapper
    * xx-common-pojo
    * xx-service-yy-api
    * xx-service-yy
    * xx-web-yy
    * ......

## Tomcat地址(本机)
* Manager 192.168.125.1:8100(弃用)
* Portal  192.168.125.1:8101
* Search  192.168.125.1:8102
* Item    192.168.125.1:8103
* SSO     192.168.125.1:8104
* Admin   192.168.125.1:8105
* Cart    192.168.125.1:8106
* Order   192.168.125.1:8107

## Dubbox服务地址(本机)
* Manager-Service     192.168.125.1(弃用)
* Admin-Service       192.168.125.1:20880 rest:8510
* Redis-Service       192.168.125.1:20881 rest:8511
* Search-Service      192.168.125.1:20882 rest:8512
* Portal-Service      192.168.125.1:20883 rest:8513
* Item-Service        192.168.125.1:20884 rest:8514
* SSO-Service         192.168.125.1:20885 rest:8515
* Notify-Service      192.168.125.1:20886 rest:8516
* Cart-Service        192.168.125.1:20887 rest:8517
* Order-Service       192.168.125.1:20888 rest:8518

## 机器ip地址(本机)

### 需要联网
无

### 不需要联网
* Zookeeper1 192.168.125.128
* FastDFS 192.168.125.129
* Solr 192.168.125.131
* FastDFS 192.168.125.132
* Redis 192.168.125.133
