package cn.binux.search.service;


import cn.binux.pojo.XbinResult;

/**
 * Solr Service
 *
 * @author xubin.
 * @create 2017-02-04 下午4:35
 */


public interface SearchService {

    //http://localhost:8512/search/SolrService/importAllItems/TztyomXxDyi92
    /**
     * 导入全部商品索引
     *
     * @return
     */
    XbinResult importAllItems();

    //http://localhost:8512/search/SolrService/search/查询条件/1/60
    /**
     * 查询商品
     * @param queryString 查询条件
     * @param page 第几页
     * @param rows 每页几条
     * @return 返回商品Json
     * @throws Exception
     */

    cn.binux.pojo.SearchResult search(String queryString, Integer page, Integer rows) throws Exception;
}
