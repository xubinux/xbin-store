package cn.binux.admin.generate;


import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import cn.binux.mapper.TbCategoryImageMapper;
import cn.binux.mapper.TbCategorySecondaryMapper;
import cn.binux.pojo.TbCategoryImage;
import cn.binux.pojo.TbCategorySecondary;
import cn.binux.utils.FastDFSClientUtils;
import cn.binux.utils.FastJsonConvert;
import cn.binux.utils.StorageFactory;
import cn.binux.utils.StorageService;

/**
 * json格式Category转成Java格式
 *
 * @author xubin.
 * @create 2017-02-14 下午7:59
 */


@SpringBootApplication
@MapperScan(basePackages = "cn.binux.mapper")
public class CategoryGenerate {

    private static TbCategoryImageMapper tbCategoryImageMapper;

    private static TbCategorySecondaryMapper tbCategorySecondaryMapper;
    
    private static StorageService storageService;

    @Autowired
    public void setTbCategoryImageMapper(TbCategoryImageMapper tbCategoryImageMapper) {
        this.tbCategoryImageMapper = tbCategoryImageMapper;
    }

    @Autowired
    public void setTbCategorySecondaryMapper(TbCategorySecondaryMapper tbCategorySecondaryMapper) {
        this.tbCategorySecondaryMapper = tbCategorySecondaryMapper;
    }

    public static void main(String[] args) {

    	ConfigurableApplicationContext ctx = SpringApplication.run(new Object[]{CategoryGenerate.class, StorageFactory.class}, args);
    	storageService = ctx.getBean(StorageService.class);

        // 读取txt内容为字符串
        StringBuffer txtContent = new StringBuffer();
        // 每次读取的byte数
        byte[] b = new byte[15 * 1024];
        InputStream in = null;
        try {
            // 文件输入流
            in = CategoryGenerate.class.getResourceAsStream("/Category.json");
            int len;
            while ((len = in.read(b)) > 0) {
                // 字符串拼接
                txtContent.append(new String(b, 0, len));
            }
            // 关闭流
            in.close();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        Map map = FastJsonConvert.convertJSONToObject(txtContent.toString(), Map.class);

        List data = (List) map.get("data");
        for (Object o : data) {
            Map mapo = (Map) o;
            String id = (String) mapo.get("id");
            List mapb = (List) mapo.get("b");
            for (int d = 0; d < mapb.size(); d++) {
                String mapbstring = (String) mapb.get(d);
                TbCategoryImage categoryImage = new TbCategoryImage();
                String[] strings = mapbstring.split("\\|");
                categoryImage.setUrl(strings[0]);
                categoryImage.setCid(id);
                categoryImage.setName(strings[1]);
                categoryImage.setLittleOrBig(1);
                categoryImage.setStatus(1);
                categoryImage.setSortOrder(1);
                String s = saveToFastDFS("http://img10.360buyimg.com/" + strings[2]);
                categoryImage.setImageUrl(s);
                categoryImage.setCreated(new Date());
                categoryImage.setUpdated(new Date());
                tbCategoryImageMapper.insert(categoryImage);
            }

            List listp = (List) mapo.get("p");
                for (int i = 0; i < listp.size(); i++) {
                    TbCategoryImage categoryImage = new TbCategoryImage();
                    String simage = (String) listp.get(i);
                    String[] strings = simage.split("\\|");
                    categoryImage.setUrl(strings[0]);
                    categoryImage.setCid(id);
                    categoryImage.setName(strings[1]);
                    categoryImage.setLittleOrBig(2);
                    categoryImage.setStatus(1);
                    categoryImage.setSortOrder(1);
                    String s = saveToFastDFS("http://img10.360buyimg.com/" + strings[2]);
                    categoryImage.setImageUrl(s);
                    categoryImage.setCreated(new Date());
                    categoryImage.setUpdated(new Date());

                    tbCategoryImageMapper.insert(categoryImage);
                }

            List map0 = (List) mapo.get("s");
            for (int i = 0; i < map0.size(); i++) {
                TbCategorySecondary categorySecondary = new TbCategorySecondary();
                Map map1 = (Map) map0.get(i);
                List map2 = (List) map1.get("s");
                String s = (String) map1.get("n");
                String[] strings = s.split("\\|");
                categorySecondary.setCid(id);
                categorySecondary.setUrl(strings[0]);
                categorySecondary.setName(strings[1]);
                categorySecondary.setParentId(0L);
                categorySecondary.setIsParent(map2 != null && map2.size() > 0 ? true : false);
                categorySecondary.setStatus(1);
                categorySecondary.setSortOrder(1);
                categorySecondary.setCreated(new Date());
                categorySecondary.setUpdated(new Date());

                tbCategorySecondaryMapper.insert(categorySecondary);


                if (map2 != null && map2.size() > 0) {
                    for (int j = 0; j < map2.size(); j++) {
                        TbCategorySecondary categorySecondary3 = new TbCategorySecondary();
                        Map map3 = (Map) map2.get(j);
                        List map4 = (List) map3.get("s");
                        String s3 = (String) map3.get("n");
                        String[] strings3 = s3.split("\\|");
                        categorySecondary3.setCid(id);
                        categorySecondary3.setUrl(strings3[0]);
                        categorySecondary3.setName(strings3[1]);
                        categorySecondary3.setParentId(categorySecondary.getId());
                        categorySecondary3.setIsParent(map4 != null && map4.size() > 0 ? true : false);
                        categorySecondary3.setStatus(1);
                        categorySecondary3.setSortOrder(1);
                        categorySecondary3.setCreated(new Date());
                        categorySecondary3.setUpdated(new Date());

                        tbCategorySecondaryMapper.insert(categorySecondary3);

                        if (map4 != null && map4.size() > 0) {
                            for (int k = 0; k < map4.size(); k++) {
                                TbCategorySecondary categorySecondary4 = new TbCategorySecondary();
                                Map map5 = (Map) map4.get(k);
                                List map6 = (List) map5.get("s");
                                String s5 = (String) map5.get("n");
                                String[] strings5 = s5.split("\\|");
                                categorySecondary4.setCid(id);
                                categorySecondary4.setUrl(strings5[0]);
                                categorySecondary4.setName(strings5[1]);
                                categorySecondary4.setParentId(categorySecondary3.getId());
                                categorySecondary4.setIsParent(map6 != null && map6.size() > 0 ? true : false);
                                categorySecondary4.setStatus(1);
                                categorySecondary4.setSortOrder(1);
                                categorySecondary4.setCreated(new Date());
                                categorySecondary4.setUpdated(new Date());

                                tbCategorySecondaryMapper.insert(categorySecondary4);

                                if (map6 != null && map6.size() > 0) {
                                    System.out.println(s5);
                                }

                            }
                        }
                    }
                }
            }

            List listt = (List) mapo.get("t");
                for (int i = 0; i < listt.size(); i++) {
                    TbCategorySecondary categorySecondary = new TbCategorySecondary();
                    String s = (String) listt.get(i);
                    String[] strings = s.split("\\|");
                    categorySecondary.setCid(id);
                    categorySecondary.setUrl(strings[0]);
                    categorySecondary.setName(strings[1]);
                    categorySecondary.setParentId(-1L);
                    categorySecondary.setIsParent(true);
                    categorySecondary.setSortOrder(1);
                    categorySecondary.setStatus(1);
                    categorySecondary.setCreated(new Date());
                    categorySecondary.setUpdated(new Date());

                    tbCategorySecondaryMapper.insert(categorySecondary);
                }

        }

    }
    public static String  saveToFastDFS(String destUrl) {
        String saveurl = "http://192.168.125.132/";
        ByteArrayOutputStream baos = null;
        try {
            URL u = new URL(destUrl);
            BufferedImage image = ImageIO.read(u);

            //convert BufferedImage to byte array
            baos = new ByteArrayOutputStream();
            ImageIO.write(image, "jpg", baos);
            baos.flush();

            //return FastDFSClientUtils.upload(baos.toByteArray(), "jpg");
            return storageService.upload(baos.toByteArray(), "jpg");
        } catch (Exception e) {
        } finally {
            if (baos != null) {
                try {
                    baos.close();
                } catch (IOException e) {
                }
            }
        }
        return "";
    }

}
