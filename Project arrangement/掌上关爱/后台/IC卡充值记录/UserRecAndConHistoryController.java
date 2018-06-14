package com.fh.controller.system.xft;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.service.system.xft.UserRecAndConHistoryService;
import com.fh.util.PageData;

/**
 * 
 * @author admin
 *
 */
@RestController
@RequestMapping("/userHis")
public class UserRecAndConHistoryController extends BaseController {
	
	@Resource(name = "userRecAndConHisService")
	private UserRecAndConHistoryService userRecAndConHisService;
	/**
	 *获取用户流水帐(包括圈存記錄與消費記錄)
	 */
	@RequestMapping("/recAndConHisList")
	@ResponseBody
	public ModelAndView getUserRecAndConHis(Page page){
		PageData pd = this.getPageData();
		ModelAndView mv = this.getModelAndView();
		List<PageData> recAndConList = new ArrayList<>();
		page.setPd(pd);
		try {
			recAndConList= userRecAndConHisService.recAndConHistory(page);
			mv.setViewName("system/xft/userRecAndConHisList");
		    mv.addObject("recAndConList", recAndConList);
		    mv.addObject("pd", pd);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("获取数据异常！！！");
		}
		return mv;
	}
	
	
}
