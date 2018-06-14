package com.fh.controller.hjy;


import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.service.hjy.FirmService;
import com.fh.service.teacher.CourseService;
import com.fh.util.PageData;

@Controller
@RequestMapping(value="/firm")   
public class FirmController extends BaseController{
	
	@Resource(name="firmService")
	private FirmService firmService;
	
	
	/**
	 * 获取所有业务概要信息
	 * @param page
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/list")
	public ModelAndView listDemo(Page page) throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		page.setPd(pd);
		List<PageData> firmList = firmService.findFirmList(page);
			mv.setViewName("hjy/firm_list");
			mv.addObject("firmList", firmList);
			mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 删除
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete")
	public ModelAndView delete() throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		firmService.deleteFirmOverview(pd);
		mv.addObject("msg", "success");
		mv.setViewName("save_result");
		return mv;
	}
	

	/**
	 * 去修改页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/toEdit")
	public ModelAndView toEdit(String id) throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		PageData firmOverView = firmService.findHjyFirmOverviewById(pd);
		List<PageData> areaList = firmService.findArae(pd);
		mv.addObject("areaList", areaList);
		mv.addObject("firmOverView", firmOverView);
		mv.setViewName("hjy/firmOverViewEdit");
		return mv;
	}
	
	
/**
 * 修改数据
 * @param file
 * @param firmName
 * @param school
 * @param area
 * @param marketingId
 * @param describetion
 * @param price
 * @return
 * @throws Exception
 */
	@RequestMapping(value = "/updateFirmOverview")
	public ModelAndView updateFirmOverview(
			@RequestParam("uploadfile") CommonsMultipartFile file,
			@RequestParam("firm_name") String firmName,
			@RequestParam("firm_school") String school,
			@RequestParam("firm_area") String area,
			@RequestParam("id") String marketingId,
			@RequestParam("firm_describetion") String descript,
			@RequestParam("firm_price") String price
			) throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		pd.put("firmName",firmName);
		pd.put("school", school);
		pd.put("area", area);
		pd.put("marketingId", marketingId);
		pd.put("descript", descript);
		pd.put("price", price);
	    firmService.updateFirmOverview(file ,pd);
		mv.addObject("msg", "success");
		mv.setViewName("save_result");
		return mv;
	}
	
	
	
	
	/**
	 * 去添加页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/toAdd")
	public ModelAndView toAdd() throws Exception {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		List<PageData> areaList = firmService.findArae(pd);
		mv.addObject("areaList", areaList);
		mv.setViewName("hjy/addFirmOverView");
		return mv;
	}

	
	/**
	 * 添加
	 * @param file
	 * @param firmName
	 * @param school
	 * @param area
	 * @param marketingId
	 * @param describetion
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/addFirmOverview")
	public ModelAndView addFirmOverview(
			@RequestParam("uploadfile") CommonsMultipartFile file,
			@RequestParam("firm_name") String firmName,
			@RequestParam("firm_school") String school,
			@RequestParam("firm_area") String area,
			@RequestParam("id") String marketingId,
			@RequestParam("firm_describetion") String descript,
			@RequestParam("firm_price") String price
			) throws Exception  {
		logBefore(logger, "添加业务概要");
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		pd.put("marketingId", marketingId);//营销ID
		pd.put("firmName", firmName);//业务名称
		pd.put("area", area);//区域
		pd.put("school", school);//学校
		pd.put("pictureURL", "");//业务图片地址
		pd.put("descript", descript);//业务文字简介
		pd.put("price", price);//业务单价
	    firmService.addFirmOverview(file ,pd);
		mv.addObject("msg", "success");
	    mv.setViewName("save_result");
		
		return mv;
	}
	
}