package cn.binux.utils;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.csource.common.NameValuePair;
import org.csource.fastdfs.*;

import java.io.*;


/**
 * Replaced by {@link StorageService}<BR>
 * <B>系统名称：</B><BR>
 * <B>模块名称：</B><BR>
 * <B>中文类名：</B>FastDFS分布式文件系统操作客户端<BR>
 * <B>概要说明：</B>FastDFS分布式文件系统操作客户端<BR>
 * 
 */
@Deprecated
public class FastDFSClientUtils {

	private static final String CONF_FILENAME = Thread.currentThread().getContextClassLoader().getResource("fastdfs_client.conf").getPath();

	private static Logger logger = Logger.getLogger(FastDFSClientUtils.class);

	
	private static TrackerClient trackerClient;

	
	//加载文件
	static {
		try {
			ClientGlobal.init(CONF_FILENAME);
			TrackerGroup trackerGroup = ClientGlobal.g_tracker_group;
			trackerClient = new TrackerClient(trackerGroup);
		} catch (Exception e) {
			logger.error(e);
		}
	}
	
	/**
	 * <B>方法名称：</B>上传方法<BR>
	 * <B>概要说明：</B><BR>
	 * @param file 文件
	 * @param path 路径
	 * @return 上传成功返回id，失败返回null
	 */
	public static String upload(File file, String path) {
		TrackerServer trackerServer = null;
		StorageServer storageServer = null;
		StorageClient1 storageClient1 = null;
		FileInputStream fis = null;
		try {
			NameValuePair[] meta_list = null; // new NameValuePair[0];
			fis = new FileInputStream(file);
			byte[] file_buff = null;
			if (fis != null) {
				int len = fis.available();
				file_buff = new byte[len];
				fis.read(file_buff);
			}
			
			trackerServer = trackerClient.getConnection();
			if (trackerServer == null) {
				logger.error("getConnection return null");
			}
			storageServer = trackerClient.getStoreStorage(trackerServer);
			storageClient1 = new StorageClient1(trackerServer, storageServer);
			String fileid = storageClient1.upload_file1(file_buff, getFileExt(path), meta_list);
			
			return fileid;
		} catch (Exception ex) {
			logger.error(ex);
			return null;
		}finally{
			if (fis != null){
				try {
					fis.close();
				} catch (IOException e) {
					logger.error(e);
				}
			}
			if (storageServer != null){
				try {
					storageServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (trackerServer != null){
				try {
					trackerServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			storageClient1 = null;
		}
	}
	
	/**
	 * <B>方法名称：</B>上传方法<BR>
	 * <B>概要说明：</B><BR>
	 * @param data 数据
	 * @param extName 路径
	 * @return 上传成功返回id，失败返回null
	 */
	public static String upload(byte[] data, String extName) {
		TrackerServer trackerServer = null;
		StorageServer storageServer = null;
		StorageClient1 storageClient1 = null;
		try {
			NameValuePair[] meta_list = null; // new NameValuePair[0];
			
			trackerServer = trackerClient.getConnection();
			if (trackerServer == null) {
				logger.error("getConnection return null");
			}
			storageServer = trackerClient.getStoreStorage(trackerServer);
			storageClient1 = new StorageClient1(trackerServer, storageServer);
			String fileid = storageClient1.upload_file1(data, extName, meta_list);
			return fileid;
		} catch (Exception ex) {
			logger.error(ex);
			return null;
		}finally{
			if (storageServer != null){
				try {
					storageServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (trackerServer != null){
				try {
					trackerServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			storageClient1 = null;
		}
	}

	/**
	 * <B>方法名称：</B>下载方法<BR>
	 * <B>概要说明：</B>通过文件id进行下载<BR>
	 * @param fileId 文件id
	 * @return 返回InputStream
	 */
	public static InputStream download(String groupName, String fileId) {
		TrackerServer trackerServer = null;
		StorageServer storageServer = null;
		StorageClient1 storageClient1 = null;
		try {
			trackerServer = trackerClient.getConnection();
			if (trackerServer == null) {
				logger.error("getConnection return null");
			}
			storageServer = trackerClient.getStoreStorage(trackerServer, groupName);
			storageClient1 = new StorageClient1(trackerServer, storageServer);
			byte[] bytes = storageClient1.download_file1(fileId);
			InputStream inputStream = new ByteArrayInputStream(bytes);
			return inputStream;
		} catch (Exception ex) {
			logger.error(ex);
			return null;
		} finally {
			if (storageServer != null){
				try {
					storageServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (trackerServer != null){
				try {
					trackerServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			storageClient1 = null;			
		}
	}

	/**
	 * <B>方法名称：</B>删除方法<BR>
	 * <B>概要说明：</B>根据id来删除一个文件<BR>
	 * @param fileId 文件id
	 * @return 删除成功返回0，非0则操作失败，返回错误代码
	 */
	public static int delete(String groupName, String fileId) {
		TrackerServer trackerServer = null;
		StorageServer storageServer = null;
		StorageClient1 storageClient1 = null;
		try {
			trackerServer = trackerClient.getConnection();
			if (trackerServer == null) {
				logger.error("getConnection return null");
			}
			storageServer = trackerClient.getStoreStorage(trackerServer, groupName);
			storageClient1 = new StorageClient1(trackerServer, storageServer);
			int result = storageClient1.delete_file1(fileId);
			return result;
		} catch (Exception ex) {
			logger.error(ex);
			return 0;
		} finally {
			if (storageServer != null){
				try {
					storageServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (trackerServer != null){
				try {
					trackerServer.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			storageClient1 = null;			
		}
	}

	/**
	 * <B>方法名称：</B><BR>
	 * <B>概要说明：</B><BR>
	 * @param oldFileId 旧文件id 
	 * @param file 新文件
	 * @param path 新文件路径
	 * @return 上传成功返回id，失败返回null
	 */
	public static String modify(String oldGroupName, String oldFileId, File file, String path) {
		String fileid = null;
		try {
			// 先上传
			fileid = upload(file, path);
			if (fileid == null) {
				return null;
			}
			// 再删除
			int delResult = delete(oldGroupName, oldFileId);
			if (delResult != 0) {
				return null;
			}
		} catch (Exception ex) {
			logger.error(ex);
			return null;
		}
		return fileid;
	}

	/**
	 * <B>方法名称：</B>获取文件后缀名<BR>
	 * <B>概要说明：</B>获取文件后缀名<BR>
	 * @param fileName
	 * @return  如："jpg"、"txt"、"zip" 等
	 */
	private static String getFileExt(String fileName) {
		if (StringUtils.isBlank(fileName) || !fileName.contains(".")) {
			return "";
		} else {
			return fileName.substring(fileName.lastIndexOf(".") + 1); 
		}
	}


}
