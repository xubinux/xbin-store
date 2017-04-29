package cn.binux.utils;

/**
 * 文件存储服务
 * 
 * @author Li Jian
 *
 */
public interface StorageService {

	/**
	 * 上传文件
	 * 
	 * @param data
	 *            文件的二进制内容
	 * @param extName
	 *            扩展名
	 * @return 上传成功后返回生成的文件id；失败，返回null
	 */
	String upload(byte[] data, String extName);

	/**
	 * 删除文件
	 * 
	 * @param fileId
	 *            被删除的文件id
	 * @return 删除成功后返回0，失败后返回错误代码
	 */
	int delete(String fileId);
}
