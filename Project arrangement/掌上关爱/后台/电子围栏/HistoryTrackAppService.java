package com.fh.service.weixin.ibaby;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.entity.Ibaby;
import com.fh.util.IBabyUtil;
import com.fh.util.PageData;

@Service("historyTrackAppService")
public class HistoryTrackAppService {

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	/**
	 * 设置获取轨迹信息参数
	 * 
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	
	public Map<String, Ibaby> detailTrack(PageData pd) throws Exception {  
		
		String loginName = pd.getString("loginName");
		String password = pd.getString("passWord");
		String terminalImei = pd.getString("terminalImei");
		String startTime= pd.getString("startTime");
		String endTime= pd.getString("endTime");
		
		String action = "TerminalTrackQuery";
		List<String> keyname = new ArrayList<String>();
		keyname.add("terminalImei");
		keyname.add("beginTime");
		keyname.add("endTime");
		keyname.add("beginIndex");
		keyname.add("fetchSize");
		keyname.add("isGps");
		List<String> keyvalue = new ArrayList<String>();
		keyvalue.add(terminalImei);
		keyvalue.add(startTime);
		keyvalue.add(endTime);
		keyvalue.add("0");
		keyvalue.add("1000");
		//1为gps轨迹，2为基站轨迹，9为gps+wifi轨迹
		keyvalue.add("9");
		
	    String xmlString = IBabyUtil.getXmlInfo(loginName,action,password,keyname,keyvalue);
	    		
	    return IBabyUtil.getDeviceInfo(xmlString);
	}

	/**
	 * 根据USERID查询宝贝设备详细信息
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData findBabyInfoByStuid(PageData pd) throws Exception {
		return (PageData) dao.findForObject("HistoryTrackMapper.findBabyInfo", pd);
	}
}
