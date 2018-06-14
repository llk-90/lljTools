package com.fh.controller.hjy;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.entity.system.User;
import com.fh.service.hjy.PinMassSendService;
import com.fh.util.AppUtil;
import com.fh.util.Const;
import com.fh.util.PageData;

@Controller
@RequestMapping(value = "/PinMassSend")
public class PinMassSendController extends BaseController {
	String menuUrl = "PinMassSend/list.do"; // 菜单地址(权限用)

	@Resource(name = "pinMassSendService")
	private PinMassSendService pinMassSendService;

	/**
	 * 学生列表
	 * 
	 * @param page
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/gslist")
	public ModelAndView stlist(Page page){
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		page.setPd(pd);
		//获取登陆用户ID
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		User user = (User) session.getAttribute(Const.SESSION_USER);
		pd.put("userId", user.getUSER_ID());
		List<PageData> pinMassSendList = new ArrayList<PageData>();
		List<PageData> townList = new ArrayList<PageData>();
		List<PageData> firmList =new ArrayList<>();
		if (pd.size() > 0 ) {
			try {
				townList =(List<PageData>) pinMassSendService.findTownList(pd);
				pinMassSendList = pinMassSendService.Eqlist(page);
				firmList = pinMassSendService.firmlist(page);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		mv.setViewName("hjy/pinMassSendList");
		mv.addObject("firmList", firmList);
		mv.addObject("pinMassSendList", pinMassSendList);
		mv.addObject("townList", townList);
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 批量下发验证码
	 * 
	 * @return
	 */
	@RequestMapping(value = "/sendAll")
	@ResponseBody
	public Object deleteAll() {
		PageData pd = new PageData();
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			pd = this.getPageData();
			List<PageData> pdList = new ArrayList<PageData>();
			PageData pd2 = new PageData();;
			String hjy_s_id = pd.getString("hjy_s_id");
			if (null != hjy_s_id && !"".equals(hjy_s_id)) {
				String ArrayA_ID[] = hjy_s_id.split(",");
				for(String arrayid : ArrayA_ID){
					String ArrayB_ID[] = arrayid.split("#j#");
					String parentId = ArrayB_ID[3];
					String firmName = pd.getString("firmName");
					String studentId = ArrayB_ID[0];
					pd2 = pinMassSendService.queryStuInfo(studentId);
					String cityId = pd2.getString("CityId");
					String stat = pinMassSendService.sendSMS(cityId,studentId,parentId,firmName);
					pd2.put("time", new Date());
					pd2.put("firmName", pd.getString("firmName"));
					pd2.put("StudentId", ArrayB_ID[0]);
					pd2.put("UserName", ArrayB_ID[1]);
					pd2.put("ParLoginName", ArrayB_ID[2]);
					if (stat.equals("200")){
						pinMassSendService.sendlist(pd2);
						pd.put("msg", "下发成功");
					} else {
						pd.put("msg", "学生ID"+ studentId + "下发失败");
					}
				}
			} else {
				pd.put("msg", "下发失败");
			}
		} catch (Exception e) {
			logger.error(e.toString(), e);
			pd.put("msg", e.toString());
			return pd;
		} finally {
			logAfter(logger);
		}
		return pd;
	}
	
	
	/**
	 * 学校
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/getSch")
	@ResponseBody
	public Map<String,Object> getSch() throws Exception {
		Map<String, Object> map = new HashMap<>();
		List<PageData> schList =  new ArrayList<>();
		PageData pd = new PageData();
		pd = this.getPageData();
		schList = (List<PageData>) pinMassSendService.findSchList(pd);
		map.put("schList", schList);
		return map;
	}
	
	
	/**
	 * 班级
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/getClass")
	@ResponseBody
	public Map<String,Object> getClasses() throws Exception {
		Map<String, Object> map = new HashMap<>();
		List<PageData> cList =  new ArrayList<>();
		PageData pd = new PageData();
		pd = this.getPageData();
		cList = (List<PageData>) pinMassSendService.findClassList(pd);
		map.put("cList", cList);
		return map;
	}
	
	
	
	
	
}
