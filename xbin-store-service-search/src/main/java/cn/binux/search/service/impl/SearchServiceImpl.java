package cn.binux.search.service.impl;

import cn.binux.constant.Const;
import cn.binux.pojo.SearchResult;
import cn.binux.pojo.SolrItem;
import cn.binux.pojo.XbinResult;
import cn.binux.search.mapper.SearchMapper;
import cn.binux.search.service.SearchService;
import com.alibaba.dubbo.config.annotation.Service;
import org.apache.log4j.Logger;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.SolrInputDocument;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Solr Service 实现类
 *
 * @author xubin.
 * @create 2017-02-04 下午4:43
 */

@Service(version = Const.XBIN_STORE_SEARCH_VERSION)
public class SearchServiceImpl implements SearchService {

    @Autowired
    private SearchMapper searchMapper;

    //@Autowired
    //private SolrServer solrServer;

    @Autowired
    private SolrClient solrClient;

    private static Logger logger = Logger.getLogger(SearchServiceImpl.class);

    @Override
    public XbinResult importAllItems() {

        List<SolrItem> solrItemList = searchMapper.getSolrItemList();

        try {
            for (SolrItem solrItem : solrItemList) {

                SolrInputDocument document = new SolrInputDocument();

                document.addField("id", solrItem.getId());
                document.addField("item_category_name", solrItem.getCategory_name());
                document.addField("item_title", solrItem.getTitle());

                String image = solrItem.getImage();
                String[] split = image.split(",");

                document.addField("item_image", split[0]);
                document.addField("item_price", solrItem.getPrice());
                document.addField("item_sell_point", solrItem.getSell_point());
                document.addField("item_desc", solrItem.getItem_desc());

                solrClient.add(document);

            }

            solrClient.commit();

            logger.info("===========>导入商品成功 导入商品" + solrItemList.size() + "件");
        } catch (Exception e) {
            logger.error("===========>导入Solr索引失败");
        }

        return XbinResult.ok();
    }

    @Override
    public SearchResult search(String queryString, Integer page, Integer rows) throws Exception {

        SearchResult searchResult = new SearchResult();

        SolrQuery query = new SolrQuery();

        //设置查询条件
        query.setQuery(queryString);

        //设置分页
        query.setStart((page - 1) * rows);

        query.setRows(rows);

        //设置默认搜素域
        query.set("df", "item_keywords");

        query.setHighlight(true);

        query.addHighlightField("item_title");

        query.setHighlightSimplePre("<em style=\"color:red\">");

        query.setHighlightSimplePost("</em>");

        QueryResponse response = solrClient.query(query);

        SolrDocumentList results = response.getResults();

        searchResult.setRecordCount(results.getNumFound());

        List<SolrItem> solrItems = new ArrayList<SolrItem>();

        Map<String, Map<String, List<String>>> highlighting = response.getHighlighting();

        for (SolrDocument result : results) {

            SolrItem solrItem = new SolrItem();

            solrItem.setId((String) result.get("id"));

            List<String> strings = highlighting.get(result.get("id")).get("item_title");
            if (strings != null && strings.size() > 0) {
                solrItem.setTitle(strings.get(0));
            } else {
                solrItem.setTitle((String) result.get("item_title"));
            }
            solrItem.setCategory_name((String) result.get("item_category_name"));
            solrItem.setImage((String) result.get("item_image"));
            solrItem.setSell_point((String) result.get("item_sell_point"));
            solrItem.setItem_desc((String) result.get("item_desc"));
            solrItem.setPrice((Long) result.get("item_price"));

            solrItems.add(solrItem);

        }

        searchResult.setItemList(solrItems);
        searchResult.setCurPage(page);

        long recordCount = searchResult.getRecordCount();
        long pageCount = recordCount / rows;

        if (recordCount % rows > 0) {
            pageCount++;
        }

        searchResult.setPageCount(pageCount);

        return searchResult;

    }
}
