package cn.binux.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TbIndexSlideAdExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TbIndexSlideAdExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andAltIsNull() {
            addCriterion("alt is null");
            return (Criteria) this;
        }

        public Criteria andAltIsNotNull() {
            addCriterion("alt is not null");
            return (Criteria) this;
        }

        public Criteria andAltEqualTo(String value) {
            addCriterion("alt =", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltNotEqualTo(String value) {
            addCriterion("alt <>", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltGreaterThan(String value) {
            addCriterion("alt >", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltGreaterThanOrEqualTo(String value) {
            addCriterion("alt >=", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltLessThan(String value) {
            addCriterion("alt <", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltLessThanOrEqualTo(String value) {
            addCriterion("alt <=", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltLike(String value) {
            addCriterion("alt like", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltNotLike(String value) {
            addCriterion("alt not like", value, "alt");
            return (Criteria) this;
        }

        public Criteria andAltIn(List<String> values) {
            addCriterion("alt in", values, "alt");
            return (Criteria) this;
        }

        public Criteria andAltNotIn(List<String> values) {
            addCriterion("alt not in", values, "alt");
            return (Criteria) this;
        }

        public Criteria andAltBetween(String value1, String value2) {
            addCriterion("alt between", value1, value2, "alt");
            return (Criteria) this;
        }

        public Criteria andAltNotBetween(String value1, String value2) {
            addCriterion("alt not between", value1, value2, "alt");
            return (Criteria) this;
        }

        public Criteria andClogIsNull() {
            addCriterion("clog is null");
            return (Criteria) this;
        }

        public Criteria andClogIsNotNull() {
            addCriterion("clog is not null");
            return (Criteria) this;
        }

        public Criteria andClogEqualTo(String value) {
            addCriterion("clog =", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogNotEqualTo(String value) {
            addCriterion("clog <>", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogGreaterThan(String value) {
            addCriterion("clog >", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogGreaterThanOrEqualTo(String value) {
            addCriterion("clog >=", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogLessThan(String value) {
            addCriterion("clog <", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogLessThanOrEqualTo(String value) {
            addCriterion("clog <=", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogLike(String value) {
            addCriterion("clog like", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogNotLike(String value) {
            addCriterion("clog not like", value, "clog");
            return (Criteria) this;
        }

        public Criteria andClogIn(List<String> values) {
            addCriterion("clog in", values, "clog");
            return (Criteria) this;
        }

        public Criteria andClogNotIn(List<String> values) {
            addCriterion("clog not in", values, "clog");
            return (Criteria) this;
        }

        public Criteria andClogBetween(String value1, String value2) {
            addCriterion("clog between", value1, value2, "clog");
            return (Criteria) this;
        }

        public Criteria andClogNotBetween(String value1, String value2) {
            addCriterion("clog not between", value1, value2, "clog");
            return (Criteria) this;
        }

        public Criteria andExt1IsNull() {
            addCriterion("ext1 is null");
            return (Criteria) this;
        }

        public Criteria andExt1IsNotNull() {
            addCriterion("ext1 is not null");
            return (Criteria) this;
        }

        public Criteria andExt1EqualTo(String value) {
            addCriterion("ext1 =", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1NotEqualTo(String value) {
            addCriterion("ext1 <>", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1GreaterThan(String value) {
            addCriterion("ext1 >", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1GreaterThanOrEqualTo(String value) {
            addCriterion("ext1 >=", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1LessThan(String value) {
            addCriterion("ext1 <", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1LessThanOrEqualTo(String value) {
            addCriterion("ext1 <=", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1Like(String value) {
            addCriterion("ext1 like", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1NotLike(String value) {
            addCriterion("ext1 not like", value, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1In(List<String> values) {
            addCriterion("ext1 in", values, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1NotIn(List<String> values) {
            addCriterion("ext1 not in", values, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1Between(String value1, String value2) {
            addCriterion("ext1 between", value1, value2, "ext1");
            return (Criteria) this;
        }

        public Criteria andExt1NotBetween(String value1, String value2) {
            addCriterion("ext1 not between", value1, value2, "ext1");
            return (Criteria) this;
        }

        public Criteria andHrefIsNull() {
            addCriterion("href is null");
            return (Criteria) this;
        }

        public Criteria andHrefIsNotNull() {
            addCriterion("href is not null");
            return (Criteria) this;
        }

        public Criteria andHrefEqualTo(String value) {
            addCriterion("href =", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefNotEqualTo(String value) {
            addCriterion("href <>", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefGreaterThan(String value) {
            addCriterion("href >", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefGreaterThanOrEqualTo(String value) {
            addCriterion("href >=", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefLessThan(String value) {
            addCriterion("href <", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefLessThanOrEqualTo(String value) {
            addCriterion("href <=", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefLike(String value) {
            addCriterion("href like", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefNotLike(String value) {
            addCriterion("href not like", value, "href");
            return (Criteria) this;
        }

        public Criteria andHrefIn(List<String> values) {
            addCriterion("href in", values, "href");
            return (Criteria) this;
        }

        public Criteria andHrefNotIn(List<String> values) {
            addCriterion("href not in", values, "href");
            return (Criteria) this;
        }

        public Criteria andHrefBetween(String value1, String value2) {
            addCriterion("href between", value1, value2, "href");
            return (Criteria) this;
        }

        public Criteria andHrefNotBetween(String value1, String value2) {
            addCriterion("href not between", value1, value2, "href");
            return (Criteria) this;
        }

        public Criteria andLogvIsNull() {
            addCriterion("logV is null");
            return (Criteria) this;
        }

        public Criteria andLogvIsNotNull() {
            addCriterion("logV is not null");
            return (Criteria) this;
        }

        public Criteria andLogvEqualTo(String value) {
            addCriterion("logV =", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvNotEqualTo(String value) {
            addCriterion("logV <>", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvGreaterThan(String value) {
            addCriterion("logV >", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvGreaterThanOrEqualTo(String value) {
            addCriterion("logV >=", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvLessThan(String value) {
            addCriterion("logV <", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvLessThanOrEqualTo(String value) {
            addCriterion("logV <=", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvLike(String value) {
            addCriterion("logV like", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvNotLike(String value) {
            addCriterion("logV not like", value, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvIn(List<String> values) {
            addCriterion("logV in", values, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvNotIn(List<String> values) {
            addCriterion("logV not in", values, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvBetween(String value1, String value2) {
            addCriterion("logV between", value1, value2, "logv");
            return (Criteria) this;
        }

        public Criteria andLogvNotBetween(String value1, String value2) {
            addCriterion("logV not between", value1, value2, "logv");
            return (Criteria) this;
        }

        public Criteria andSrcIsNull() {
            addCriterion("src is null");
            return (Criteria) this;
        }

        public Criteria andSrcIsNotNull() {
            addCriterion("src is not null");
            return (Criteria) this;
        }

        public Criteria andSrcEqualTo(String value) {
            addCriterion("src =", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcNotEqualTo(String value) {
            addCriterion("src <>", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcGreaterThan(String value) {
            addCriterion("src >", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcGreaterThanOrEqualTo(String value) {
            addCriterion("src >=", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcLessThan(String value) {
            addCriterion("src <", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcLessThanOrEqualTo(String value) {
            addCriterion("src <=", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcLike(String value) {
            addCriterion("src like", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcNotLike(String value) {
            addCriterion("src not like", value, "src");
            return (Criteria) this;
        }

        public Criteria andSrcIn(List<String> values) {
            addCriterion("src in", values, "src");
            return (Criteria) this;
        }

        public Criteria andSrcNotIn(List<String> values) {
            addCriterion("src not in", values, "src");
            return (Criteria) this;
        }

        public Criteria andSrcBetween(String value1, String value2) {
            addCriterion("src between", value1, value2, "src");
            return (Criteria) this;
        }

        public Criteria andSrcNotBetween(String value1, String value2) {
            addCriterion("src not between", value1, value2, "src");
            return (Criteria) this;
        }

        public Criteria andSrcbIsNull() {
            addCriterion("srcB is null");
            return (Criteria) this;
        }

        public Criteria andSrcbIsNotNull() {
            addCriterion("srcB is not null");
            return (Criteria) this;
        }

        public Criteria andSrcbEqualTo(String value) {
            addCriterion("srcB =", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbNotEqualTo(String value) {
            addCriterion("srcB <>", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbGreaterThan(String value) {
            addCriterion("srcB >", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbGreaterThanOrEqualTo(String value) {
            addCriterion("srcB >=", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbLessThan(String value) {
            addCriterion("srcB <", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbLessThanOrEqualTo(String value) {
            addCriterion("srcB <=", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbLike(String value) {
            addCriterion("srcB like", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbNotLike(String value) {
            addCriterion("srcB not like", value, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbIn(List<String> values) {
            addCriterion("srcB in", values, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbNotIn(List<String> values) {
            addCriterion("srcB not in", values, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbBetween(String value1, String value2) {
            addCriterion("srcB between", value1, value2, "srcb");
            return (Criteria) this;
        }

        public Criteria andSrcbNotBetween(String value1, String value2) {
            addCriterion("srcB not between", value1, value2, "srcb");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("status is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("status is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Integer value) {
            addCriterion("status =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Integer value) {
            addCriterion("status <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Integer value) {
            addCriterion("status >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("status >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Integer value) {
            addCriterion("status <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Integer value) {
            addCriterion("status <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Integer> values) {
            addCriterion("status in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Integer> values) {
            addCriterion("status not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Integer value1, Integer value2) {
            addCriterion("status between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("status not between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andSortOrderIsNull() {
            addCriterion("sort_order is null");
            return (Criteria) this;
        }

        public Criteria andSortOrderIsNotNull() {
            addCriterion("sort_order is not null");
            return (Criteria) this;
        }

        public Criteria andSortOrderEqualTo(Integer value) {
            addCriterion("sort_order =", value, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderNotEqualTo(Integer value) {
            addCriterion("sort_order <>", value, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderGreaterThan(Integer value) {
            addCriterion("sort_order >", value, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderGreaterThanOrEqualTo(Integer value) {
            addCriterion("sort_order >=", value, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderLessThan(Integer value) {
            addCriterion("sort_order <", value, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderLessThanOrEqualTo(Integer value) {
            addCriterion("sort_order <=", value, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderIn(List<Integer> values) {
            addCriterion("sort_order in", values, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderNotIn(List<Integer> values) {
            addCriterion("sort_order not in", values, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderBetween(Integer value1, Integer value2) {
            addCriterion("sort_order between", value1, value2, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andSortOrderNotBetween(Integer value1, Integer value2) {
            addCriterion("sort_order not between", value1, value2, "sortOrder");
            return (Criteria) this;
        }

        public Criteria andLogdomainIsNull() {
            addCriterion("logDomain is null");
            return (Criteria) this;
        }

        public Criteria andLogdomainIsNotNull() {
            addCriterion("logDomain is not null");
            return (Criteria) this;
        }

        public Criteria andLogdomainEqualTo(String value) {
            addCriterion("logDomain =", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainNotEqualTo(String value) {
            addCriterion("logDomain <>", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainGreaterThan(String value) {
            addCriterion("logDomain >", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainGreaterThanOrEqualTo(String value) {
            addCriterion("logDomain >=", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainLessThan(String value) {
            addCriterion("logDomain <", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainLessThanOrEqualTo(String value) {
            addCriterion("logDomain <=", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainLike(String value) {
            addCriterion("logDomain like", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainNotLike(String value) {
            addCriterion("logDomain not like", value, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainIn(List<String> values) {
            addCriterion("logDomain in", values, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainNotIn(List<String> values) {
            addCriterion("logDomain not in", values, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainBetween(String value1, String value2) {
            addCriterion("logDomain between", value1, value2, "logdomain");
            return (Criteria) this;
        }

        public Criteria andLogdomainNotBetween(String value1, String value2) {
            addCriterion("logDomain not between", value1, value2, "logdomain");
            return (Criteria) this;
        }

        public Criteria andCreatedIsNull() {
            addCriterion("created is null");
            return (Criteria) this;
        }

        public Criteria andCreatedIsNotNull() {
            addCriterion("created is not null");
            return (Criteria) this;
        }

        public Criteria andCreatedEqualTo(Date value) {
            addCriterion("created =", value, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedNotEqualTo(Date value) {
            addCriterion("created <>", value, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedGreaterThan(Date value) {
            addCriterion("created >", value, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedGreaterThanOrEqualTo(Date value) {
            addCriterion("created >=", value, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedLessThan(Date value) {
            addCriterion("created <", value, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedLessThanOrEqualTo(Date value) {
            addCriterion("created <=", value, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedIn(List<Date> values) {
            addCriterion("created in", values, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedNotIn(List<Date> values) {
            addCriterion("created not in", values, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedBetween(Date value1, Date value2) {
            addCriterion("created between", value1, value2, "created");
            return (Criteria) this;
        }

        public Criteria andCreatedNotBetween(Date value1, Date value2) {
            addCriterion("created not between", value1, value2, "created");
            return (Criteria) this;
        }

        public Criteria andUpdatedIsNull() {
            addCriterion("updated is null");
            return (Criteria) this;
        }

        public Criteria andUpdatedIsNotNull() {
            addCriterion("updated is not null");
            return (Criteria) this;
        }

        public Criteria andUpdatedEqualTo(Date value) {
            addCriterion("updated =", value, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedNotEqualTo(Date value) {
            addCriterion("updated <>", value, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedGreaterThan(Date value) {
            addCriterion("updated >", value, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedGreaterThanOrEqualTo(Date value) {
            addCriterion("updated >=", value, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedLessThan(Date value) {
            addCriterion("updated <", value, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedLessThanOrEqualTo(Date value) {
            addCriterion("updated <=", value, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedIn(List<Date> values) {
            addCriterion("updated in", values, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedNotIn(List<Date> values) {
            addCriterion("updated not in", values, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedBetween(Date value1, Date value2) {
            addCriterion("updated between", value1, value2, "updated");
            return (Criteria) this;
        }

        public Criteria andUpdatedNotBetween(Date value1, Date value2) {
            addCriterion("updated not between", value1, value2, "updated");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}