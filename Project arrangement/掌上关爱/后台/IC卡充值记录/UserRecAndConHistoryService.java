package com.fh.service.system.xft;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.util.PageData;

@Service("userRecAndConHisService")
public class UserRecAndConHistoryService {

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	
	/**
	 * 流水账（记录）
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> recAndConHistory(Page page) throws Exception{
		List<PageData> list = new ArrayList<PageData>();
		list= (List<PageData>) dao.findForList("recAndConHisMapper.recAndConlistPage", page);
        for(PageData p : list){
        	if((int)p.get("JE") !=0){
        		p.put("LeftJE", (int)p.get("LeftJE")/100);
        		if((int)p.get("ItemNo") == 11 || (int)p.get("ItemNo") == 31){
        			  p.put("JE", "+"+(Integer.parseInt(String.valueOf(p.get("JE")))/100));
        			  
        		}else if((int)p.get("ItemNo") != 11 || (int)p.get("ItemNo") != 31){
        			 p.put("JE", (Integer.parseInt(String.valueOf(p.get("JE")))/100));
        		}
        	}
        }		 
		return  list;
	}

}
