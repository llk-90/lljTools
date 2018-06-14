package com.fh.controller.system.tools;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fh.controller.base.BaseController;
import com.fh.entity.Page;
import com.fh.entity.system.User;
import com.fh.service.system.parent.ParentService;
import com.fh.service.system.tools.StudentManageServiceNew;
import com.fh.util.Const;
import com.fh.util.FileDownload;
import com.fh.util.PageData;
import com.fh.util.PathUtil;

/**
 * 类名称：EnvironmentManageController 创建人：ZY 创建时间：2016年6月24日
 * 
 * @version
 */
@Controller
@RequestMapping(value = "/StudentManager")
public class StudentManageControllerNew extends BaseController {
	String menuUrl = "StudentManager/list.do"; // 菜单地址(权限用)

	@Resource(name = "studentManageServiceNew")
	private StudentManageServiceNew studentManageService;

	
	/**
	 * 学生列表（区域下所有学生）
	 * 
	 * @param page
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/list")
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
		List<PageData> scList = null;
		List<PageData> stuList = null;
		try {
			scList = studentManageService.getSchoolInfo(pd);
			stuList = studentManageService.getstuInfo(page);
		} catch (Exception e) {
			e.printStackTrace();
		}
		mv.setViewName("system/tools/studentListNew");
		mv.addObject("stuList", stuList);//学生信息
		mv.addObject("scList", scList);//学校信息
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 获取学校下的班级
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/classList")
	@ResponseBody
	public Map<String, Object> getClassList() throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		PageData pd = this.getPageData();
		List<PageData> cList = studentManageService.getClassInfo(pd);
		map.put("cList", cList);
		return map;
	}
	
	
	
	/**
	 * 获取学校下的年级
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/gradeList")
	@ResponseBody
	public Map<String, Object> getGradeList() throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		PageData pd = this.getPageData();
		List<PageData> gList = studentManageService.getGradeInfo(pd);
		map.put("gList", gList);
		return map;
	}
	
	/**
	 * 新增学生信息
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save")
	public ModelAndView save() throws Exception {
		logBefore(logger, "新增");
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		pd.put("save","save");
		studentManageService.saveStuAndStuParInfo(pd);
		mv.addObject("msg", "success");
		mv.setViewName("save_result");
		return mv;
	}

	/**
	 * 编辑学生信息
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/edits")
	public ModelAndView edits(){
		logBefore(logger, "修改");
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		boolean flagStuInfo;
		try {
			flagStuInfo = studentManageService.updateStuInfo(pd);
			if(flagStuInfo){
				if(studentManageService.updateStuParInfo(pd)){
					studentManageService.updateIcNo(pd);
					mv.addObject("msg", "success");
					mv.setViewName("save_result");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 跳转学生编辑页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/stuEditView")
	public ModelAndView stuEdit() {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		PageData par = new PageData();
		PageData pStu = new PageData();
		List<PageData> cList = new ArrayList<>();
		try {
			pStu= studentManageService.getStuSchool(pd);
			cList = studentManageService.getClassInfo(pStu);
			par = studentManageService.getParentInfo(pd);
		} catch (Exception e) {
			e.printStackTrace();
		}
		mv.setViewName("system/tools/studentEditNew");
		mv.addObject("msg", "edits");
		mv.addObject("cList", cList);
		mv.addObject("pd", pd);
		mv.addObject("par", par);
		mv.addObject("pStu", pStu);
		return mv;
	}

	/**
	 * 跳转学生新增页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/stuAddView")
	public ModelAndView stuAdd() {
		ModelAndView mv = this.getModelAndView();
		PageData pd = this.getPageData();
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		User user = (User) session.getAttribute(Const.SESSION_USER);
		pd.put("userId", user.getUSER_ID());
		List<PageData> scList = null;
		try {
			//获取班级
			scList = studentManageService.getSchoolInfo(pd);
		} catch (Exception e) {
			e.printStackTrace();
		}
		pd.put("schoolId", pd.get("SchoolId"));
		mv.addObject("scList", scList);
		mv.setViewName("system/tools/studentAddNew");
		mv.addObject("msg", "save");
		mv.addObject("pd", pd);
		return mv;
	}

	
	/**
	 * 学生批量删除
	 * 
	 * @return
	 */
	@RequestMapping(value = "/deleteAll")
	@ResponseBody
	public Map<String,Object> deleteAll() {
		logBefore(logger, "删除");
		PageData pd = new PageData();
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			pd = this.getPageData();
			List<PageData> pdList = new ArrayList<PageData>();
			String stuId = pd.getString("stuId");
			if (null != stuId && !"".equals(stuId)) {
				String ArrayStuId[] = stuId.split(",");
				studentManageService.deleteStuInfo(ArrayStuId);
				map.put("msg", "ok");
			} else {
				map.put("msg", "no");
			}
			pdList.add(pd);
			map.put("list", pdList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	/**
	 * 校验学号是否存在
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/checkStuNoIs")
	@ResponseBody
	public Map<String,Object> checkStuNoIs() {
		PageData pd = this.getPageData();
		Map<String, Object> map =new HashMap<>();
		try {
			boolean flag =  studentManageService.checkStuNoIs(pd);
			if(flag){
				map.put("msg", "ok");
			}else{
				map.put("msg", "no");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	
	/**
	 * 校验卡号是否存在
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/checkStuIcNoIs")
	@ResponseBody
	public Map<String,Object> checkStuIcNoIs() {
		PageData pd = this.getPageData();
		Map<String, Object> map =new HashMap<>();
		try {
			boolean flag =  studentManageService.checkStuIcNoIs(pd);
			if(flag){
				map.put("msg", "ok");
			}else{
				map.put("msg", "no");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	
	/**
	 * 跳转学生导入页面
	 * 2016/8/31 yc  修改  (pd传到画面)
	 * @return
	 */
	@RequestMapping(value = "/importStu")
	public ModelAndView importStu() {
		logBefore(logger, "学生信息导入页面");
		ModelAndView mv = this.getModelAndView();
		PageData pd = new PageData();
		pd = this.getPageData();
		mv.setViewName("system/tools/studentImport");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 从EXCEL导入到数据库
	 * 
	 * @throws Exception
	 */
	@RequestMapping(value = "/readExcel")
	@ResponseBody
	public String readExcel(MultipartFile myfiles, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter out = response.getWriter();
		String firstMsg = studentManageService.readExcel(myfiles);
		out.print(firstMsg);
		out.flush();
		return null;
	}

	/**
	 * 下载模版
	 */
	@RequestMapping(value = "/downExcel")
	public String downExcel(HttpServletResponse response) throws Exception {
		FileDownload.fileDownload(response, PathUtil.getClasspath() + Const.FILEPATHFILE + Const.StudentFileName,
				Const.StudentFileName);
		return null;
	}
	
	
}
