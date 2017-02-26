## xbin-store

分布式商城项目

### 2017年01月24日15:44:59 完成项目搭建
> xbin-store-common、xbin-store-common-config、xbin-store-common-mapper、xbin-store-common-pojo、xbin-store-service-manager、xbin-store-service-manager-api、xbin-store-web-manager

### 2017年01月24日23:26:27 完成dubbo的rest和dubbo服务的测试 完成商品列表的展示
今天遇到的问题：
* MyBatis自动生成选择全部表——> %
* Dubbo消费端没有配置应用名和ZooKeeper地址
* Dubbo以Jar方式启动要配置Spring的配置文件路径
* POJO使用序列化kryo一定得实现Serializable接口
* web.xml配置的只加载一个Spring配置文件 一定要注意<import/>其他全部配置

### 2017年01月27日00:26:52 完成商品分类选择、上传图片、商品添加功能
今遇到的问题：
* dubbo服务发布问题 IDEA 配置错误 没有把service服务本身进行maven install操作
* FastDFS的配置文件必须在引用工具的工程中配置文件
* dubbo返回对象**一定要实现Serializable接口**
* FastDFS抽风 问题不清楚


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

# 机器ip情况(本机)
### 需要联网
### 不需要联网
* Zookeeper1 192.168.125.128
* FastDFS 192.168.125.129
* FastDFS 192.168.125.132
