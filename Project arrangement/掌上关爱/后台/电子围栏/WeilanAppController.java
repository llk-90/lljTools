package com.fh.controller.weixin.ibaby;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fh.controller.base.BaseController;
import com.fh.entity.Ibaby;
import com.fh.entity.IbabyAlarmInfo;
import com.fh.entity.IbabyFencing;
import com.fh.service.weixin.ibaby.HistoryTrackAppService;
import com.fh.service.weixin.ibaby.WeilanRecordService;
import com.fh.service.weixin.ibaby.WeilanService;
import com.fh.util.DateUtil;
import com.fh.util.PageData;

@Controller
@RequestMapping(value = "/weilan")
public class WeilanAppController extends BaseController {

	@Resource(name = "weilanService")
	private WeilanService weilanService;

	@Resource(name = "weilanRecordService")
	private WeilanRecordService weilanRecordService;

	@Resource(name = "historyTrackAppService")
	private HistoryTrackAppService historyTrackAppService;
	
	// 添加或修改围栏信息
	@ResponseBody
	@RequestMapping(value = "/addOrUpdateWeilanMsg")
	public Object addWaringMsg(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("添加或修改围栏信息");
		//获取前段参数
		String fencingId = request.getParameter("fencingId");
		String stuId = request.getParameter("stuId");
		String addOrUpdate = request.getParameter("addOrUpdate");
		String weilanName = request.getParameter("weilanName");
		String state = request.getParameter("state");
		String weilanRadius = request.getParameter("weilanRadius");
		String lng = request.getParameter("lng");
		String lat = request.getParameter("lat");
		String desc=lat+","+lng+","+weilanRadius;
		
		PageData pd = this.getPageData();
		pd.put("stuId", stuId);
    	Map<String, Object> map = new HashMap<>();
		Ibaby ibaby = new Ibaby();
		
		Map<String, Ibaby> mv = new HashMap<>();
		String statCode="";
		PageData p = historyTrackAppService.findBabyInfoByStuid(pd);
		 
		if(p != null && p.size()>0){
			pd.put("loginName", p.getString("ibaby_equ_accout"));  // 儿童机账号
			pd.put("passWord", p.getString("ibaby_equ_password")); // 儿童机帐号密码	
			pd.put("fencingName", weilanName);
			pd.put("fencingType","2");
			pd.put("desc", desc);
			pd.put("noticeMan","1");
			pd.put("alarmType", state);
			if ("修改".equals(addOrUpdate)) {
				pd.put("fencingId",fencingId);
				logBefore(logger, "修改电子围栏信息");
				mv = weilanService.weilanMsgInsertOrUpdate(pd,addOrUpdate);
				ibaby = mv.get("result");
				statCode = ibaby.getResponse().getStatus().getCode();
			}
			// 添加
			if ("添加".equals(addOrUpdate)) {
				pd.put("terminalImei", p.getString("ibaby_imei_code")); // 设备imei	
				mv = weilanService.weilanMsgInsertOrUpdate(pd,addOrUpdate);
				ibaby = mv.get("result");
				statCode = ibaby.getResponse().getStatus().getCode();
			}
			map.put("statCode", statCode);
			map.put("addOrUpdate", addOrUpdate);
		}else{
			map.put("statCode", "100");
		}
		return map;
	}

	// 删除围栏信息
	@ResponseBody
	@RequestMapping(value = "/deleteWeilanMsg")
	public Object deleteWaringMsg(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logBefore(logger, "删除围栏信息！！！");
		String fencingId = request.getParameter("fencingId");
		String studentId = request.getParameter("studentId");
		PageData pd = this.getPageData();
		pd.put("stuId", studentId);
    	Map<String, Object> map = new HashMap<>();
		Ibaby ibaby = new Ibaby();
		
		PageData p = historyTrackAppService.findBabyInfoByStuid(pd);
		if(p !=null && p.size()>0){
			pd.put("loginName", p.getString("ibaby_equ_accout"));  // 儿童机账号
			pd.put("passWord", p.getString("ibaby_equ_password")); // 儿童机帐号密码	
			pd.put("terminalImei", p.getString("ibaby_imei_code")); // 设备imei	
			pd.put("fencingId", fencingId);
			
			Map<String, Ibaby> mv = new HashMap<>();	
			mv = weilanService.deleteweilanMsg(pd);
			ibaby = mv.get("result");
			String  statCode = ibaby.getResponse().getStatus().getCode();
			map.put("statCode", statCode);
		}else{
			map.put("statCode", "100");
		}
		return map;
	}

	
	//获取围栏名称
	@ResponseBody
	@RequestMapping(value = "/selectWeilanName")
	public Object selectWeilanName(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logBefore(logger, "获取围栏名称！！！");
		String stuId = request.getParameter("studentId");
		PageData pd = this.getPageData();
		pd.put("stuId", stuId);
    	Map<String, Object> map = new HashMap<>();
		Ibaby ibaby = new Ibaby();
		
		PageData p = historyTrackAppService.findBabyInfoByStuid(pd);	
	    if(p !=null && p.size()>0){
	    	pd.put("loginName", p.getString("ibaby_equ_accout"));  // 儿童机账号
	    	pd.put("passWord", p.getString("ibaby_equ_password")); // 儿童机帐号密码	
	    	pd.put("terminalImei", p.getString("ibaby_imei_code")); // 设备imei	
	    	
	    	
	    	Map<String, Ibaby> mv = new HashMap<>();	
	    	mv = weilanService.findWeilanName(pd);
	    	ibaby = mv.get("result");
	    	String  statCode = ibaby.getResponse().getStatus().getCode();
	    	if (statCode.equals("200")) {
	    		//获取所有围栏	    
	    		List<IbabyFencing> fencinglist = ibaby.getResponse().getFencingList();
	    		if(fencinglist.size()>0){
	    			map.put("fencinglist", fencinglist);
	    			map.put("result", "succ");
	    		}
	    	} else {
	    		map.put("result", "fail");
	    	}
	    }else{
	    	map.put("statCode", "100");
	    }
		return map;
	}
		
	//围栏信息同步到设备
	@ResponseBody
	@RequestMapping(value = "/syncAlarmArea")
	public Object SyncAlarmArea(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logBefore(logger, "同步设备！！！");
		String stuId = request.getParameter("studentId");
		PageData pd = this.getPageData();
		pd.put("stuId", stuId);
		Map<String, Object> map = new HashMap<>();
		Ibaby ibaby = new Ibaby();
			
		PageData p = historyTrackAppService.findBabyInfoByStuid(pd);	
		if(p !=null && p.size()>0){
			pd.put("loginName", p.getString("ibaby_equ_accout"));  // 儿童机账号
			pd.put("passWord", p.getString("ibaby_equ_password")); // 儿童机帐号密码	
			pd.put("terminalImei", p.getString("ibaby_imei_code")); // 设备imei	
			
			Map<String, Ibaby> mv = new HashMap<>();	
			mv = weilanService.SyncAlarmArea(pd);
			ibaby = mv.get("result");
			String  statCode = ibaby.getResponse().getStatus().getCode();
			if (statCode.equals("200")) {
				//获取所有围栏	    
				List<IbabyFencing> fencinglist = ibaby.getResponse().getFencingList();
				if(fencinglist.size()>0){
					map.put("fencinglist", fencinglist);		
					map.put("statCode", statCode);
				}
			} else {
				map.put("result", "fail");
			}
		}else{
			map.put("statCode", "100");
		}
		return map;
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/getDate")
	public Object getDate(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Map<String, Object> map = new HashMap<>();
		List<String> listDate = new ArrayList<String>();
		// 后六天日期
		String strDate = "";
		for (int i = 0; i < 7; i++) {
			//设置beginTime，endTime
			String dateStr =DateUtil.getAfterDayDate("-" + i);
			String date=dateStr.substring(0,10);
			// 几月几日 星期几
			strDate = DateUtil.getYue(DateUtil.fomatDate(DateUtil.getAfterDayDate("-" + i)))
					+ DateUtil.getDayOfWeekByDate(DateUtil.getAfterDayDate("-" + i));
			listDate.add(strDate+date);
		}
		map.put("recordDate", listDate);
		map.put("result","succ");
		return map;
	}
	
	//获取记录详情
	@ResponseBody
	@RequestMapping(value = "/selectWeilanRecord")
	public Object selectWeilanRecord(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Map<String, Object> map = new HashMap<>();
		String stuId = request.getParameter("stuId");
		String date = request.getParameter("date");
		PageData pd = this.getPageData();
		pd.put("stuId", stuId);
		Ibaby ibaby = new Ibaby();
		PageData p = historyTrackAppService.findBabyInfoByStuid(pd);	
		if(p !=null && p.size()>0){
			pd.put("loginName", p.getString("ibaby_equ_accout"));  // 儿童机账号
			pd.put("passWord", p.getString("ibaby_equ_password")); // 儿童机帐号密码	
			pd.put("terminalImei", p.getString("ibaby_imei_code")); // 设备imei	
			String beginTime=date+" "+"00:00:00";
			String endTime=date+" "+"23:59:59";
			pd.put("beginTime", beginTime);
			pd.put("endTime", endTime);
			pd.put("beginIndex","0");
			pd.put("fetchSize","1000");
			
			Map<String, Ibaby> mv = new HashMap<>();	
			mv =weilanRecordService.findWeilanRecord(pd);
			ibaby = mv.get("result");
			String  statCode = ibaby.getResponse().getStatus().getCode();
			if (statCode.equals("200")) {
				//获取监护记录	    
				String totalSize = ibaby.getResponse().getPagination().getTotalSize();
				List<IbabyAlarmInfo> alarmInfoList = ibaby.getResponse().getPagination().getAlarmInfoList();
			    map.put("alarmInfoList", alarmInfoList);
			} else {  
				map.put("result", "fail");    
			}
		}else{
			map.put("statCode","100"); 
		}
		return map;
	}
	
	
	public static IbabyAlarmInfo getIbabyAlarmInfo(String alarmTime,String areaDesc){
		IbabyAlarmInfo alarmInfo_=new IbabyAlarmInfo();
		alarmInfo_.setAlarmTime(alarmTime);
		alarmInfo_.setAreaDesc(areaDesc);
		return alarmInfo_;
		
	}
	
	   
	
	
	
	
	
	  
	
	
	
	
	
	
	
	
}
