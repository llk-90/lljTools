package com.fh.service.weixinplus.weixiplusCommon;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.print.DocFlavor.STRING;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.service.weixin.xft.XftRechargeService;
import com.fh.util.DateUtil;
import com.fh.util.ErrorMsg;
import com.fh.util.PageData;
import com.fh.util.model.StringDefault;

@Service("weixiplusGetInfo2")
public class WeixiplusGetInfo2 {

	@Resource(name = "daoSupport")
	private DaoSupport dao;

	@Resource(name = "errorMsg")
	private ErrorMsg errorMsg;

	@Resource(name = "xftRechargeService")
	private XftRechargeService xftRechargeService;

	/**
	 * 根据openid获取学生信息
	 * 
	 * @param openId
	 * @return 学生信息
	 * @throws Exception  
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public PageData getAtteinfo(PageData pg) throws Exception {

		List<PageData> userids = new ArrayList<PageData>();
		// 用户的考勤次数信息
		List<PageData> useratteinfo = new ArrayList<PageData>();
		// 获取用户绑定的userid
		userids = (List<PageData>) dao.findForList("WeixiplusCommon.selectStuUserid", pg);
		String querydate = pg.getString("querydate");
		// 返回值用pd
		PageData pData = new PageData();
		if (userids.size() == 0) {
			// 如果没有绑定过多的话
			pData.put(StringDefault.errorcode, errorMsg.Success(1002));
		} else {
			pData.put(StringDefault.errorcode, errorMsg.Success(0));
			List<PageData> infolist = new ArrayList<>();
			PageData temppd = userids.get(0);
			PageData res = new PageData();
			res.put("avert", temppd.getString("icon"));
			res.put("ParUserName", temppd.getString("ParUserName"));
			res.put("StuName", temppd.getString("UserName"));
			res.put("ClassName", temppd.getString("ClassName"));
			res.put("icno", temppd.getString("IcNo"));
			res.put("lateCount", "0");
			res.put("leaveCount", "0");
			pg.put("IcNo", temppd.getString("IcNo"));
			pg.put("ClassId", temppd.get("ClassId"));
			
			//获取一周的时间 
			List<PageData> dateList = new ArrayList<>();
			 Calendar calendar = Calendar.getInstance();  
		     for(int i=0;i<7;i++) {
		    	 PageData pDa =new PageData();
		    	 calendar.setTime(new Date());
		    	 calendar.add(Calendar.DAY_OF_MONTH, -i);  
		    	 Date date1 = calendar.getTime(); 
		    	 int day = calendar.get(Calendar.DAY_OF_MONTH);
		    	 SimpleDateFormat sdfDay = new SimpleDateFormat("yyyy-MM-dd");
		    	 String date = sdfDay.format(date1);
		    	 pDa.put("date", date);
		    	 pDa.put("day", day);
		    	 dateList.add(pDa);//时间字符串
		     }
		     
		     
		     
		     //一周的考勤数据
		     List<String> attelist = new ArrayList<>();
		     //一天的考勤数据
		     List<PageData> attences = new ArrayList<>();
		     //排名
		    
		 	// 迟到，早退次数统计     
	    		int lateCount = 0;//迟到次数  
	    		int leaveCount = 0;//请假次数  
	    		int leave_earlyCount = 0;//早退次数  
	    		int normalCount=0; //正常次数
		     for(PageData dateAndDay :dateList) {
		    	 pg.put("date", dateAndDay.get("date"));
		    	String rank =(String) dao.findForObject("WeixiplusCommon.getRank", pg);
    		    	attences = (List<PageData>) dao.findForList("WeixiplusCommon.selectatteinfo", pg);
    		    	if (attences.size() > 0) {  
    		    		String attstram="";   
    		    		for (PageData p : attences) {
    		    			if(p!=null) {
    		    				//正常
    		    				if (p.getString("states").equals("0")) {
    		    					normalCount++;
    		    				}  
    		    				//迟到       
    		    				if (p.getString("states").equals("1")) {
    		    					lateCount++;
    		    				}
    		    				//早退
    		    				if (p.getString("states").equals("2")) {
    		    					leave_earlyCount++;
    		    				}
    		    				
    		    				if(p.get("amAndPm").equals("am")) {
    		    					attstram += p.getString("date")+" ";
    		    				}
    		    				
    		    				if(p.get("amAndPm").equals("pm")) {
    		    					attstram += p.getString("date")+" ";
    		    				}
    		    			}else {
    		    				attstram+=((String)dateAndDay.get("date")).substring(8, 10)+" 00:00:00"+" ";
    		    			}
    		    		}  
    		    		res.put("lateCount", String.valueOf(lateCount));
    		    		res.put("leaveCount", String.valueOf(leave_earlyCount));
    		    		attelist.add(attstram);   
    		    		attelist.add(rank);   
    		    	}else {
    		    		pData.put(StringDefault.errorcode, errorMsg.Success(1003));
    		    	}
		    	}
		     infolist.add(res);
			pData.put("infolist", infolist);     
			pData.put("attelist", attelist);     
		}
		return pData;  
	}

	/**
	 * 根据获取TarBar代码
	 * 
	 * @param
	 * @return Html信息
	 * @throws Exception
	 * @throws IOException
	 */
	public PageData getHtmlTarBar() throws Exception {
		PageData pageData = new PageData();
		pageData.put("htmlStr", readFile("C:\\Users\\Administrator\\Desktop\\TARBAR.txt"));
		return pageData;
	}

	/**
	 * @param 文件地址
	 * @return 文本文字
	 * 
	 * @throws Exception
	 */
	public String readFile(String fileName) {
		String fileContent = "";
		try {
			File f = new File(fileName);
			if (f.isFile() && f.exists()) {
				InputStreamReader read = new InputStreamReader(new FileInputStream(f), "UTF-8");
				BufferedReader reader = new BufferedReader(read);
				String line;
				while ((line = reader.readLine()) != null) {
					fileContent += line;
				}
				read.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return fileContent;
	}

	public PageData getStuInfo(PageData pg) throws Exception {

		List<PageData> userids = new ArrayList<PageData>();
		List<PageData> userinfs = new ArrayList<PageData>();
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		String itemNo = "";
		// 获取用户绑定的userid
		userids = (List<PageData>) dao.findForList("WeixiplusCommon.selectStuUserid", pg);
		// System.out.println("userids:" + userids);
		// 返回值用pd
		PageData pData = new PageData();
		if (userids.size() == 0) {
			// 如果没有绑定过多的话
			pData.put(StringDefault.errorcode, errorMsg.Success(1002));
		} else {
			pData.put(StringDefault.errorcode, errorMsg.Success(0));
			List<PageData> infolist = new ArrayList<>();
			PageData temppd = userids.get(0);
			PageData res = new PageData();
			res.put("avert", temppd.getString("icon"));
			res.put("ParUserName", temppd.getString("ParUserName"));
			res.put("StuName", temppd.getString("UserName"));
			res.put("ClassName", temppd.getString("ClassName"));
			res.put("icno", temppd.getString("IcNo"));
			res.put("StudentId", temppd.getString("StudentId"));
			// temppd.put("IcNo", Long.parseLong(temppd.getString("IcNo")));
			if (temppd.getString("IcNo") != null && !temppd.getString("IcNo").equals("")) {
				PageData customerInfo = xftRechargeService
						.queryXftCustomer(Long.toHexString(Long.parseLong(temppd.getString("IcNo"))));
				if (customerInfo != null && customerInfo.size() > 0) {
					String accountNo = customerInfo.get("AccountNo").toString();
					itemNo = customerInfo.get("ItemNo").toString();
					temppd.put("accountNo", accountNo);
					temppd.put("schoolid", session.getAttribute("schoolId"));
					userinfs = (List<PageData>) dao.findForList("WeixiplusCommon.selectStuOprInf", temppd);
				}
			}
			if (userinfs.size() > 0) {
				res.put("balance", (Double.parseDouble(userinfs.get(0).get("LeftJE").toString()) / 100.0) + "");
			}
			if (itemNo != null && itemNo.equals("17")) {
				res.put("balance", "挂失中");
			} else if (itemNo != null && itemNo.equals("19")) {
				res.put("balance", "已停用");
			} else if (itemNo != null && itemNo.equals("14")) {
				res.put("balance", "已销户");
			}
			infolist.add(res);
			pData.put("infolist", infolist);

		}

		return pData;
	}
	
	
	public static void main(String[] args) {
		List<String> list = new ArrayList<>();
		   Calendar calendar = Calendar.getInstance();  
	        for(int i = 0;i<7;i++) {
	        	calendar.setTime(new Date());
	        	calendar.add(Calendar.DAY_OF_MONTH, -i);  
	        	Date date1 = calendar.getTime();
	        	System.out.println(calendar.get(Calendar.DAY_OF_MONTH));
	        	SimpleDateFormat sdfDay = new SimpleDateFormat(
	        			"yyyy-MM-dd");
	        	String date = sdfDay.format(date1);
	        	list.add(date);
	        }
	        	
	      System.out.println(list);
	}
	
	
	
}
