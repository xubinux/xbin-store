package com.xbin.test;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.CloudSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.client.solrj.response.UpdateResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.SolrInputDocument;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;

/**
 * @Author 李新栋 [lxd3808@163.com]
 * @Date 2018/1/5 16:13
 */
public class TestSolrCloud {
    // zookeeper的地址
    private static String zkHostString = "192.168.109.129:2180,192.168.109.129:2181,192.168.109.129:2182";
    // collection的默认名称
    private static String defaultCollection = "collection2";

    // cloudSolrServer对象
    private CloudSolrClient solrClient;
    @Before
    public void init(){
        solrClient = new CloudSolrClient.Builder().withZkHost(zkHostString).build();
        solrClient.setDefaultCollection(defaultCollection);
        solrClient.connect();

    }

    /**
     * 向solrcloud上创建索引
     * @throws IOException
     * @throws SolrServerException
     */
    @Test
    public void testCreateIndexToSolrCloud() throws IOException, SolrServerException {
        SolrInputDocument document = new SolrInputDocument();
        document.addField("id","1000001");
        document.addField("title", "李四");
        solrClient.add(document);
        solrClient.commit();
    }

    /**
     * 测试搜索
     * @throws IOException
     * @throws SolrServerException
     */
    @Test
    public void testSearchIndexFromSolrCloud() throws IOException, SolrServerException {
        SolrQuery query = new SolrQuery();
        query.setQuery("*:*");
        QueryResponse response = solrClient.query(query);
        SolrDocumentList results = response.getResults();
        System.out.println("文档个数：" + results.getNumFound());
        System.out.println("查询时间：" + response.getQTime());

        for (SolrDocument doc :
                results) {
            ArrayList title = (ArrayList) doc.getFieldValue("title");
            String id = (String) doc.getFieldValue("id");
            System.out.println("title：" + title);
            System.out.println("id：" + id);
        }
    }

    //删除索引
    @Test
    public void testDeleteIndexFromSolrCloud() throws IOException, SolrServerException {
        UpdateResponse response = solrClient.deleteById("李四");
        // 根据多个id删除
//        solrClient.deleteById(ids);
        // 自动查询条件删除
//        solrClient.deleteByQuery("product_keywords:教程");
        System.out.println(response.toString());
        solrClient.commit();
    }

}
