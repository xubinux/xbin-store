package vip.xubin.search.service;

import com.alibaba.dubbo.rpc.protocol.rest.support.ContentType;
import vip.xubin.pojo.SearchResult;
import vip.xubin.pojo.XbinResult;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 * Solr Service
 *
 * @author xubin.
 * @create 2017-02-04 下午4:35
 */

@Path("/SolrService")
//@Consumes({MediaType.APPLICATION_JSON, MediaType.TEXT_XML})
@Produces({ContentType.APPLICATION_JSON_UTF_8, ContentType.TEXT_XML_UTF_8})
public interface SearchService {

    //http://localhost:8512/search/SolrService/importAllItems/TztyomXxDyi92
    /**
     * 导入全部商品索引
     *
     * @return
     */
    @POST
    @Path("/importAllItems/TztyomXxDyi92")
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
    @POST
    @Path("/search/{q}/{page}/{rows}")
    SearchResult search(@PathParam(value = "q") String queryString, @PathParam(value = "page") Integer page, @PathParam(value = "rows") Integer rows) throws Exception;
}
