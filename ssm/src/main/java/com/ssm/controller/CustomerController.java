package com.ssm.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssm.model.Customer;
import com.ssm.model.Plan;
import com.ssm.model.Project;
import com.ssm.service.CustomerService;
import com.ssm.util.TimeUtil;

@Controller
public class CustomerController {
	@Autowired
	public CustomerService customerService;

	/**
	 * 查询所有的customer
	 */
	@RequestMapping(value = "/customers", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String customer1(HttpServletRequest request,
			HttpServletResponse response, Customer customer, ModelMap mp) {
		List<Customer> lists = customerService.findAllCustomer();
		JSONArray jsonArray = new JSONArray();
		System.out.println(jsonArray.fromObject(lists).toString());
		return jsonArray.fromObject(lists).toString();
	}

	/**
	 * 查询customer的总数
	 */
	@RequestMapping(value = "/kehunumber", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String customer(HttpServletRequest request,
			HttpServletResponse response, Customer customer, ModelMap mp) {
		List<Customer> lists = customerService.findAllCustomer();
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("aaa", lists.size());
		return jsonObject.toString();
	}
	/**
	 * jihuaXS  分页查询
	 */
	@RequestMapping(value = "/kehu", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String jihuaXS(HttpServletRequest request,
			HttpServletResponse response, Customer customer, ModelMap mp) {
		System.out.println("客户！！");
		List<Customer> lists = new ArrayList<Customer>();
		int page = Integer.valueOf(request.getParameter("page"));
		lists = customerService.findAllCustomer1(page * 5 - 5, 5);
		JSONArray jsonArray = new JSONArray();
		System.out.println("查看data" + jsonArray.fromObject(lists).toString());
		return jsonArray.fromObject(lists).toString();
	}
	
	/**
	 * kuhuzj 增加
	 */
	@RequestMapping(value = "/kehuzengjia123", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String kuhuzj(HttpServletRequest request,
			HttpServletResponse response, Customer customer, ModelMap mp) {
		System.out.println("客户！！==========");
		String customer1=request.getParameter("customerName");
		System.out.println(customer1);
		 String createTime=TimeUtil.timeToString1(TimeUtil.currentTime());
		 customer.setCreateTime(createTime);
		List<Customer> list = new ArrayList<Customer>();
		list = customerService.findAllCustomer();
		System.out.println(list);
		System.out.println(customer);
		int a=0;
		for (int i = 0; i < list.size(); i++) {
			if(customer.getCustomerName().equals(list.get(i).getCustomerName())){
				a++;
			}
		}
		if(a>0){
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("result", "error");
			return jsonObject.toString();
		}else{
		customerService.insertCustomer(customer);
		List<Customer> lists = new ArrayList<Customer>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
		}
	}

	/**
	 * jihuaxg 修改
	 */
	@RequestMapping(value = "/xiugai", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String jihuaxg(HttpServletRequest request,
			HttpServletResponse response, Customer customer, ModelMap mp) {
		System.out.println("客户！！==========11");
		int id=Integer.parseInt(request.getParameter("id"));
		customer=customerService.findCustomerById(id);
		
		String customerName=request.getParameter("customerName");
		String customerAddress=request.getParameter("customerAddress");
		String contactsName1=request.getParameter("contactsName1");
		String contactsPhone1=request.getParameter("contactsPhone1");
		String contactsName2=request.getParameter("contactsName2");
		String contactsPhone2=request.getParameter("contactsPhone2");
		String contactsName3=request.getParameter("contactsName3");
		String contactsPhone3=request.getParameter("contactsPhone3");
		String contactsName4=request.getParameter("contactsName4");
		String contactsPhone4=request.getParameter("contactsPhone4");
		String contactsName5=request.getParameter("contactsName5");
		String contactsPhone5=request.getParameter("contactsPhone5");
		
		customer.setCustomerName(customerName);
		customer.setCustomerAddress(customerAddress);
		customer.setContactsName1(contactsName1);
		customer.setContactsName2(contactsName2);
		customer.setContactsName3(contactsName3);
		customer.setContactsName4(contactsName4);
		customer.setContactsName5(contactsName5);
		customer.setContactsPhone1(contactsPhone1);
		customer.setContactsPhone2(contactsPhone2);
		customer.setContactsPhone3(contactsPhone3);
		customer.setContactsPhone4(contactsPhone4);
		customer.setContactsPhone5(contactsPhone5);
		
		customerService.updateCustomer(customer);
//		System.out.println(customer);
		
		System.out.println(customer.getCustomerId() + "idididdi");
		List<Customer> lists = new ArrayList<Customer>();

		JSONArray jsonArray = new JSONArray();

		return jsonArray.fromObject(lists).toString();
	}

	
	@RequestMapping(value = "/customerdel", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String customerdel(HttpServletRequest request,Customer customer, ModelMap mp) {
		System.out.println("客户删除。。。。。。");
		int id=Integer.parseInt(request.getParameter("id"));
		System.out.println(id);
		customerService.deleteCustomer(id);
		
		List<Customer> lists = new ArrayList();

		JSONArray jsonArray = new JSONArray();

		return jsonArray.fromObject(lists).toString();
	}

	// kehufind
	@RequestMapping(value = "/kehufind", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String customerfind(HttpServletRequest request,
			HttpServletResponse response, ModelMap mp) {
		List<Customer> lists = new ArrayList<Customer>();
		if (request.getParameter("customerName") == "" || request.getParameter("customerName") ==null) {
			int page = Integer.parseInt(request.getParameter("page"));
			System.out.println(page);
			lists = customerService.findAllCustomer1(page * 5 - 5, 5);
			JSONArray jsonArray = new JSONArray();
			System.out.println("查看data"+ jsonArray.fromObject(lists).toString());
			return jsonArray.fromObject(lists).toString();
		} else {
			String customerName = request.getParameter("customerName");
			System.out.println("你要搜索的id是" + customerName);
			Customer customer = new Customer();
			customer.setCustomerName(customerName);
			lists = customerService.findCustomer1(customer);
			JSONArray jsonArray = new JSONArray();
			System.out.println("查看data"
					+ jsonArray.fromObject(lists).toString());
			return jsonArray.fromObject(lists).toString();
		}
	}
}
