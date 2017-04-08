package cn.binux.pojo;

import java.util.Date;

public class TbIndexSlideAd {
    private Long id;

    private String alt;

    private String clog;

    private String ext1;

    private String href;

    private String logv;

    private String src;

    private String srcb;

    private Integer status;

    private Integer sortOrder;

    private String logdomain;

    private Date created;

    private Date updated;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt == null ? null : alt.trim();
    }

    public String getClog() {
        return clog;
    }

    public void setClog(String clog) {
        this.clog = clog == null ? null : clog.trim();
    }

    public String getExt1() {
        return ext1;
    }

    public void setExt1(String ext1) {
        this.ext1 = ext1 == null ? null : ext1.trim();
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href == null ? null : href.trim();
    }

    public String getLogv() {
        return logv;
    }

    public void setLogv(String logv) {
        this.logv = logv == null ? null : logv.trim();
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src == null ? null : src.trim();
    }

    public String getSrcb() {
        return srcb;
    }

    public void setSrcb(String srcb) {
        this.srcb = srcb == null ? null : srcb.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public String getLogdomain() {
        return logdomain;
    }

    public void setLogdomain(String logdomain) {
        this.logdomain = logdomain == null ? null : logdomain.trim();
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }
}