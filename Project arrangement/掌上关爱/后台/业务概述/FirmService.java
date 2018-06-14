package com.fh.service.hjy;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.util.Const;
import com.fh.util.PageData;
import com.fh.util.Tools;
import com.fh.util.UuidUtil;

@Service("firmService")
public class FirmService {
	@Resource(name = "daoSupport")
	private DaoSupport dao;

	
	/**
	 * 获取所有业务概要
	 * @param page
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> findFirmList(Page page) throws Exception {
		return (List<PageData>) dao.findForList("FirmMapper.findlistPage", page);
	}
	
	
	/**
	 * 根据营销ID查询业务
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData findHjyFirmOverviewById(PageData pd) throws Exception {
		return (PageData) dao.findForObject("FirmMapper.findFirmOverviewById", pd);
	}
	
	/**
	 * 查询区域
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> findArae(PageData pd) throws Exception {
		return  (List<PageData>) dao.findForList("FirmMapper.findArea", pd);
	}
	
	/**
	 * 删除
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public boolean deleteFirmOverview(PageData pd) throws Exception {
		boolean flag = false;
		int num = (int) dao.delete("FirmMapper.deleteFirmOverviewById", pd);
		if (num != 0) {
			flag = true;
		}
		return flag;
	}

	
	/**
	 * 修改
	 * @param file
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public boolean updateFirmOverview(CommonsMultipartFile file, PageData pd) throws Exception {
		// 路径 文件名
		String filepaths = "";
		// 附件接收
		if (!file.isEmpty()) {
			// 文件后缀名
			String fileType = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));// 取文件格式后缀名
			// 实际存储文件名
			String filename = UuidUtil.get32UUID() + fileType;// 取32位UUID作为文件名
				
			filepaths = "/"+ Const.FILEPATHIMG + filename;
			pd.put("pictureURL", "/files"+filepaths);

			String path = Tools.readTxtFile(Const.FILENAME) + filepaths;
			// 存放位置
			File destFile = new File(path);
			try {
				FileUtils.copyInputStreamToFile(file.getInputStream(), destFile);
			} catch (IOException e) {
				e.printStackTrace();

			}
		}else {
		}
		boolean flag = false;
		int num = (int) dao.update("FirmMapper.updateFirmOverviewById", pd);
		if (num != 0) {
			flag = true;
		}
		return flag;
	}
	
	/**
	 * 添加业务概要
	 * @param file
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public boolean addFirmOverview(CommonsMultipartFile file, PageData pd) throws Exception {
		// 路径 文件名
		String filepaths = "";
		// 附件接收
		if (!file.isEmpty()) {
			// 文件后缀名
			String fileType = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));// 取文件格式后缀名
			// 实际存储文件名
			String filename = UuidUtil.get32UUID() + fileType;// 取32位UUID作为文件名
				
			filepaths = "/"+ Const.FILEPATHIMG + filename;
			pd.put("pictureURL", "/files"+filepaths);
			
			String path = Tools.readTxtFile(Const.FILENAME) + filepaths;
			// 存放位置
			File destFile = new File(path);
			try {
				FileUtils.copyInputStreamToFile(file.getInputStream(), destFile);
			} catch (IOException e) {
				e.printStackTrace();

			}
		}
		boolean flag = false;
		int num = (int) dao.save("FirmMapper.addFirmOverview", pd);
		if (num != 0) {
			flag = true;
		}
		return flag;
	}
}
