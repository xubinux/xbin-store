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

import cn.binux.mapper.TbIndexSlideAdMapper;
import cn.binux.pojo.TbIndexSlideAd;
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
public class BigADGenerate {

    private static TbIndexSlideAdMapper tbIndexSlideAdMapper;
    
    private static StorageService storageService;

    @Autowired
    public void setTbIndexSlideAdMapper(TbIndexSlideAdMapper tbIndexSlideAdMapper) {
        this.tbIndexSlideAdMapper = tbIndexSlideAdMapper;
    }

	public static void main(String[] args) {

    	ConfigurableApplicationContext ctx = SpringApplication.run(new Object[]{BigADGenerate.class, StorageFactory.class}, args);
    	storageService = ctx.getBean(StorageService.class);
        // 读取txt内容为字符串
        StringBuffer txtContent = new StringBuffer();
        // 每次读取的byte数
        byte[] b = new byte[15 * 1024];
        InputStream in = null;
        try {
            // 文件输入流
            in = BigADGenerate.class.getResourceAsStream("/BigAD.json");
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
        String logdomain = "//localhost:8106/log?info=";
        Map map = FastJsonConvert.convertJSONToObject(txtContent.toString(), Map.class);

        List data = (List) map.get("data");
        for (Object o : data) {
            List list = (List) o;
            for (int j = 0; j < list.size(); j++) {
                TbIndexSlideAd indexSlideAd = new TbIndexSlideAd();
                Map map1 = (Map) list.get(j);
                indexSlideAd.setClog((String) map1.get("clog"));
                indexSlideAd.setHref((String) map1.get("href"));
                indexSlideAd.setSortOrder(j);
                indexSlideAd.setLogdomain(logdomain);
                indexSlideAd.setLogv("1.0");
                String src = (String) map1.get("src");
                String srcB = (String) map1.get("srcB");
                String fastDFS = saveToFastDFS("http:" + src);
                String fastDFSB = saveToFastDFS("http:" + srcB);
                indexSlideAd.setSrc(fastDFS);
                indexSlideAd.setSrcb(fastDFSB);
                indexSlideAd.setCreated(new Date());
                indexSlideAd.setUpdated(new Date());
                indexSlideAd.setStatus(1);

                tbIndexSlideAdMapper.insert(indexSlideAd);
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
