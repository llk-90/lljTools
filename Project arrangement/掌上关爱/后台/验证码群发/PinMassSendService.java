package com.fh.service.hjy;

import java.util.List;

import javax.annotation.Resource;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.stereotype.Service;

import com.fh.dao.DaoSupport;
import com.fh.entity.Page;
import com.fh.util.PageData;
import com.fh.util.cmcc.OpenService;
import com.fh.util.cmcc.Response;

@Service("pinMassSendService")
public class PinMassSendService {

	@Resource(name = "daoSupport")
	private DaoSupport dao;

	@SuppressWarnings("unchecked")
	public List<PageData> Eqlist(Page page) throws Exception {
		return (List<PageData>) dao.findForList("PinMassSendMapper.listPageEqlist", page);
	}

	/**
	 * 业务名列表
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> firmlist(Page page) throws Exception {
		return (List<PageData>) dao.findForList("PinMassSendMapper.firmlist", page);
	}

	/**
	 * 批量更新状态
	 */
	public String sendlist(PageData pd) throws Exception {
		return (String) dao.findForObject("PinMassSendMapper.sendlist", pd);
	}

	/**
	 * 获取学生的具体地区，家长信息
	 */
	public PageData queryStuInfo(String hjy_s_id) throws Exception {
		return (PageData) dao.findForObject("PinMassSendMapper.queryStuInfo", hjy_s_id);
	}
	
	/**
	 * 批量业务开通验证码下发 
	 */
	public String sendSMS(String cityId ,String studentId, String parentId, String packageId) throws Exception{
		String requestXML="<MSG_BODY>"
				+ "<Token></Token>"
				+ "<CityId>" +cityId+ "</CityId>"
				+ "<StudentId>" +studentId+ "</StudentId>"
				+ "<ParentId>" +parentId+ "</ParentId>"
				+ "<RecMobile></RecMobile>"
				+ "<PackageId>"+packageId+"</PackageId>"
				+ "<ChargeType>1</ChargeType>"
				+ "<ExpireDate></ExpireDate>"
				+ "<IsCharges></IsCharges>"
				+ "</MSG_BODY>";
		String msgType = "SEND_CAPTCHA_SMS";
		Response response = OpenService.openService(requestXML, msgType);
	    String responseXML=response.getBody();
	    System.out.println(responseXML);
		//Document doc = (Document) DocumentHelper.parseText(response.getBody());
		//Element element = doc.getRootElement();
		String result= response.getResult();
		String desc = response.getDesc();
		System.out.println("请求返回结果:"+ result + ";" + desc);
		return  result ;

	}

	/**********************************************************/
	
	/**
	 * 获取镇区
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public Object findTownList(PageData pd) throws Exception {
		return dao.findForList("PinMassSendMapper.getTown", pd);
	}

	
	/**
	 *获取学校
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public Object findSchList(PageData pd) throws Exception {
		return dao.findForList("PinMassSendMapper.getSchByTownId", pd);
	}

	
   /**
    * 获取班级
    * @param pd
    * @return
    * @throws Exception
    */
	public Object findClassList(PageData pd) throws Exception {
		return dao.findForList("PinMassSendMapper.getClasses", pd);
	}
	
	
}