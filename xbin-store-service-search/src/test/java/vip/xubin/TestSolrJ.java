package vip.xubin;

import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.common.SolrInputDocument;
import org.junit.Test;

/**
 * 测试SolrJ
 * @author xubin.
 * @create 2017-02-04 下午4:18
 */


public class TestSolrJ {

    @Test
    public void test() throws Exception {

        //创建一个SolrServer对象。创建HttpSolrServer对象指定Solr服务器http地址
        SolrServer solrServer = new HttpSolrServer("http://192.168.125.131:8080/solr/collection1");

        //创建一个Solr文档对象SolrInputDocument
        SolrInputDocument solrInputFields = new SolrInputDocument();

        //向文档对象添加域，必须要有ID，名称必须定义过
        solrInputFields.addField("id","test");
        solrInputFields.addField("item_title","test");

        solrServer.add(solrInputFields);

        solrServer.commit();
    }

    @Test
    public void test2() throws Exception {

        //创建一个SolrServer对象。创建HttpSolrServer对象指定Solr服务器http地址
        SolrServer solrServer = new HttpSolrServer("http://192.168.125.131:8080/solr/collection1");

        solrServer.deleteById("148630556278985");

        solrServer.commit();
    }

    /**
     * 删除所有索引
     * @throws Exception
     */
    @Test
    public void test3() throws Exception {

        //创建一个SolrServer对象。创建HttpSolrServer对象指定Solr服务器http地址
        SolrServer solrServer = new HttpSolrServer("http://192.168.125.131:8080/solr/collection1");

        solrServer.deleteByQuery("*:*");

        solrServer.commit();
    }
    @Test
    public void test4() throws Exception {

        String s = "http://192.168.125.132/group1/M00/00/00/wKh9hFiMy4eAV5lwAAB25IS6WjM274.jpg,http://192.168.125.132/group1/M00/00/00/wKh9hFiMy4iAZJdbAABuOI_BXnU784.jpg,http://192.168.125.132/group1/M00/00/00/wKh9hFiMy4iALMfdAAAgiIWd6u4269.jpg,http://192.168.125.132/group1/M00/00/00/wKh9hFiMy4iAYlnPAAAUJlSoifY942.jpg,http://192.168.125.132/group1/M00/00/00/wKh9hFiMy4iAKoaiAABqNZxUhNc780.jpg";

        String[] split = s.split(",");

        System.out.println(split[0]);
        for (String s1 : split) {
            System.out.println(s1);

        }
    }





}
