package com.fh.service.system.tools;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.entity.system.User;
import com.fh.util.Const;
import com.fh.util.DateUtil;
import com.fh.util.FileUpload;
import com.fh.util.ImportExcel;
import com.fh.util.ObjectExcelRead;
import com.fh.util.PageData;
import com.fh.util.PathUtil;
import com.fh.util.Tools;
import com.fh.util.UuidUtil;
import com.fh.util.ImportExcel.DataAdapter;
import com.fh.util.ImportExcel.KeyValue;
import com.fh.util.ImportExcel.RectIdx;
import com.fh.util.mail.MailSenderInfo;
import com.fh.util.mail.SimpleMailSender;

@Service("studentManageServiceNew")
public class StudentManageServiceNew {

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	/**
	 * 获取登陆用户区域所在区域
	 * @return
	 * @throws Exception
	 */
	public PageData getCityId(PageData pd) throws Exception {
		return (PageData) dao.findForObject("StudentMapperNew.getCityId",pd);
	}
	
	
	/**
	 * 获取区域下的学生信息
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> getstuInfo(Page page) throws Exception {
		return (List<PageData>) dao.findForList("StudentMapperNew.getStuInfolistPage",page);
	}
	
	/**
	 * 获取学校
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> getSchoolInfo(PageData pd) throws Exception {
		return (List<PageData>) dao.findForList("StudentMapperNew.getSchoolInfo", pd);
		
	}
	
	
	/**
	 * 获取学校下的班级
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> getClassInfo(PageData pd) throws Exception {
		return (List<PageData>) dao.findForList("StudentMapperNew.getClassInfo", pd);
	}
	
	
	/**
	 * 获取学校下的年级
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> getGradeInfo(PageData pd) throws Exception {
		return (List<PageData>) dao.findForList("StudentMapperNew.getGradeInfo", pd);
	}
	
	
	/**
	 * 获取学生学校年级班级信息
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData getStuSchool(PageData pd) throws Exception {
		return (PageData) dao.findForObject("StudentMapperNew.getSchAndGradeBstuId", pd);
	}
	
	
	/**
	 * 获取家长信息
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData getParentInfo(PageData pd) throws Exception {
		return (PageData) dao.findForObject("StudentMapperNew.getParentInfo", pd);
	}
	
	
	/**
	 * check学号是否存在
	 * @param stuId
	 * @throws Exception
	 */
	public boolean checkStuNoIs(PageData pd) throws Exception {
		boolean flag;
		int num  =(int) dao.findForObject("StudentMapperNew.checkStuNoIs", pd);
		if(num>0){
			flag = true;
		}else{
			flag = false;
		}
		return flag;
	}
	
	/**
	 * check卡号是否存在
	 * @param stuId
	 * @throws Exception
	 */
	public boolean checkStuIcNoIs(PageData pd) throws Exception {
		boolean flag;
		int num  =(int) dao.findForObject("StudentMapperNew.checkStuIcNoIs", pd);
		if(num>0){
			flag = true;
		}else{
			flag = false;
		}
		return flag;
	}
	
	
    /**
     * 更新学生信息
     * @param pd
     * @return
     * @throws Exception
     */
	public boolean updateStuInfo(PageData pd) throws Exception {
		pd.put("modefiyTime", DateUtil.getTime());
		boolean flag;
		  int resultNum = (int) dao.update("StudentMapperNew.updateStuInfo", pd);
		  if(resultNum>0){
			  flag =true;
		  }else{
			  flag=false;
		  }
		return flag;
	}

	/**
	 * 更新学生家长信息
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public boolean updateStuParInfo(PageData pd) throws Exception {
		String str = (String) pd.get("PHONE");
		String strp = str.substring(0, 3);
		String strph = str.substring(7);
		String strPhone  = strp+"****"+strph;
		pd.put("phone", strPhone);
		boolean flag;
		  int resultNum = (int) dao.update("StudentMapperNew.updateStuParInfo", pd);
		  if(resultNum>0){
			  flag =true;
		  }else{
			  flag=false;
		  }
		return flag;
	}
	
	/**
	 * 更新t_user_student表的IcNo 
	 * @param pd
	 * @throws Exception
	 */
     public void updateIcNo(PageData pd) throws Exception {
		dao.update("StudentMapperNew.updateIcNo", pd);
	}
	
     /**
      * 删除学生信息
      * @param str
     * @return 
      * @return
      * @throws Exception
      */
	public Object deleteStuInfo(String[] str) throws Exception {
		return dao.delete("StudentMapperNew.deletesStu", str);
	}
	
	
   /**
    * 添加学生信息
    * @param pd
    * @return
    * @throws Exception
    */
	@SuppressWarnings({ "static-access" })
	public  boolean saveStuAndStuParInfo(PageData pd) throws Exception {
		boolean flag;
		int resultstu = 0;
		int num= 1;
		String  strStuId;
		if( pd.get("save").equals("save")){
			pd.put("StrStuId", "%-%");
			List<String> list = (List<String>) dao.findForList("StudentMapperNew.gethoutaiAddStuId", pd);
			if(list.size()>0){
			num = Integer.parseInt(list.get(0).substring(1));
			num++;
				strStuId="-"+num;
			}else{
				num++;
				strStuId="-"+num;
			}
		  pd.put("studentId", strStuId);
		  pd.put("modifyTime", new DateUtil().getTime());
		  resultstu = (int) dao.save("StudentMapperNew.saveStuInfo", pd);
		}
		 if(resultstu>0){
			 PageData p = new PageData();
			 p= (PageData) dao.findForObject("StudentMapperNew.getStuById", pd);
		     p.put("phone", pd.get("PHONE"));
			 p.put("NAME", pd.get("NAME"));
			 p.put("modifyTime", pd.get("modifyTime"));
			 int  pnum= num;
			 pnum++;
			 String parentId = "-"+pnum;
			 p.put("parentId",parentId );
			 p.put("", pd.get(""));
			  int resultStuPar = (int) dao.save("StudentMapperNew.saveStuParInfo",p);
			   if(resultStuPar>0){
				   flag=true;
				   return flag;
			   }else{
				   flag=false;
			   }
		 }else{
			flag=false; 
		 }
		return flag;
	}
	
	
	/*
	 * 导入
	 */
	@SuppressWarnings({ "unchecked", "rawtypes", "serial" })
	public String readExcel(MultipartFile file) {
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		User user = (User) session.getAttribute(Const.SESSION_USER);
		// 用户名
		String areaUser_id = user.getUSER_ID();
		String firstMsg = "";

		if (null != file && !file.isEmpty()) {
			try {
				String filePath = PathUtil.getClasspath() + Const.FILEPATHFILE; //获取模板文件存放的路径
				String fileName = FileUpload.fileUp(file, filePath, "Import_student"); //获取文件名称
				List<PageData> listPd = (List) ObjectExcelRead.readExcel(filePath, fileName, 1, 0, 0); // 执行读EXCEL操作,读出的数据导入List
				List<PageData> tempCheck = (List) ObjectExcelRead.readExcel(filePath, fileName, 0, 0, 0); // 执行读EXCEL操作,读出的数据导入List
				if (!"城市名称".equals(tempCheck.get(0).get("var0").toString())) {
					firstMsg = "excel模板不正确";
					return firstMsg;
				}
			/**
			 * 
			 */
				// 取得所有参数
				List<PageData> excelPdList = new ArrayList<PageData>();
				for (PageData p : listPd) {
					PageData pd = new PageData();
					pd.put("cityName", p.getString("var0"));// 城市名称
					pd.put("schoolName", p.getString("var1"));// 学校名称
					pd.put("gradeName", p.getString("var2"));// 年级名称
					pd.put("className", p.getString("var3"));// 班级名称
					pd.put("stuName", p.getString("var4"));// 学生姓名
					pd.put("sex", p.getString("var5"));// 性别
					pd.put("stuNo", p.getString("var6"));// 学号
					pd.put("IcNo", p.getString("var7"));// ICNO
					pd.put("parentName", p.getString("var8"));// 家长姓名
					pd.put("phone", p.getString("var9"));// 电话号码
					excelPdList.add(pd);
				}
				
				
				/********** 校验start *********/
				
				PageData pdValues = new PageData();
				PageData pdResult = new PageData();
				int i = 1;
				for (PageData p : excelPdList) {
					i++;
					HashMap<String, String> column_name = new HashMap<String, String>() {
						{
							put("cityName", "城市名称");
							put("schoolName", "学校名称");
							put("gradeName", "年级名称");
							put("className", "班级名称");
							put("stuName", "学生姓名");
							put("sex", "性别");
							put("stuNo", "学号");
							put("IcNo", "IcNo");
							put("parentName", "家长姓名");
							put("phone", "电话号码");
						}
					};
					Iterator iter = column_name.entrySet().iterator();
					// 非空校验
					while (iter.hasNext()) {
						Entry entry = (Entry) iter.next();
						if (Tools.isEmpty(p.getString(entry.getKey()))) {
							firstMsg = "第" + i + "行：\"" + entry.getValue() + "\"不能为空";
							return firstMsg;
						}
					}
					// 校验字符串长度
					while (iter.hasNext()) {
						Entry entry = (Entry) iter.next();
						if (!Tools.isEmpty(p.getString(entry.getKey()))) {
							if (p.getString(entry.getKey()).length() > 50) {
								firstMsg = "第" + i + "行：\"" + entry.getValue() + "\"长度不能超过50";
								return firstMsg;
							}
						}
					}
					// 校验学校是否在当前区域下
                    //根据城市名称获取城市id(佛山：fs.....)
					
                    String cityId = (String) dao.findForObject("StudentMapperNew.getCityIdBycityName", p.getString("cityName"));
                    pdValues.put("cityId", cityId);
                    pdValues.put("schoolName", p.getString("schoolName"));
                    pdResult =  (PageData) dao.findForObject("StudentMapperNew.isSchool", pdValues);
                    if(pdResult == null){
                    	firstMsg ="第" + i + "行：学校\""+ p.getString("schoolName") + "该学校不在当前区域下";
                    	return firstMsg;
                    }
					
                    //检验该学校是否有该年级
                    pdResult.put("gradeName", p.getString("gradeName"));
                    pdResult.put("className", p.getString("className"));
                    pdResult = (PageData) dao.findForObject("StudentMapperNew.isGradeAndClass", pdResult);
                    if(pdResult ==null){
                    	firstMsg =  "第" + i + "行：年级\"" + p.getString("gradeName") + "\"该学校不存在该年级";
                    	return firstMsg;
                    }
                    
					// 性别格式（男或女）
					if (!("男".equals(p.get("sex").toString()) || "女".equals(p.get("sex").toString()))) {
						firstMsg = "第" + i + "行：性别\"" + p.getString("sex") + "\"格式错误，只能录入男或女";
						return firstMsg;
					}
					//学号检验
					pdValues.put("stuNo", p.getString("stuNo"));
					int resultNo  =(int) dao.findForObject("StudentMapperNew.checkStuNoIs", pdValues);
					if(resultNo!=0){
						firstMsg = "第" + i + "行：学号\"" + p.getString("stuNo") + "\"已经存在";
						return firstMsg;
					}
					
					//卡号检验
					pdValues.put("stuIcNo", p.getString("IcNo"));
					int resultStuIcNo  =(int) dao.findForObject("StudentMapperNew.checkStuIcNoIs", pdValues);
					if(resultStuIcNo !=0){
						firstMsg = "第" + i + "行： 卡号\"" + p.getString("IcNo") + "\"已经存在";
						return firstMsg;
					}
					
					
					// 校验手机号码格式
					Pattern pattern1 = Pattern.compile("^[1][3,4,5,8][0-9]{1}[\\S]{4}[0-9]{4}$");
					Matcher m1 = pattern1.matcher(p.getString("phone"));
					if (!m1.matches()) {
						firstMsg = "第" + i + "行：手机号\"" + p.getString("phone") + "\"格式不正确";
						return firstMsg;
					}
					
					if ("".equals(firstMsg)) {
						boolean flag = false;
							pdResult.put("schoolParam", pdResult.get("SchoolId"));
							pdResult.put("classParam", pdResult.get("ClassId"));
							pdResult.put("s_stu_no",p.getString("stuNo"));
							pdResult.put("s_name",p.getString("stuName"));
							pdResult.put("stu_icno",p.getString("IcNo"));
							pdResult.put("s_sex",p.getString("sex"));
							pdResult.put("PHONE", p.get("phone"));
							pdResult.put("NAME", p.get("parentName"));
							pdResult.put("ImportExcel","ImportExcel");
							pdResult.put("save","save");
							saveStuAndStuParInfo(pdResult);
					}
					
				}
				
			} catch (Exception e) {
				e.printStackTrace();
				return firstMsg;
			}
		}
		return firstMsg;
	}
}