package com.ssm.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.ssm.model.User;
import com.ssm.service.UserService;
import com.ssm.util.TimeUtil;

@Controller
public class UserController {

	@Autowired
	public UserService userService;

	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	// @ResponseBody
	public String ceshi(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		// userService.insertUser(user);
//		String userName=request.getParameter("UserName");
//		String passWord=request.getParameter("Password");
//		user.setPassword(passWord);
//		user.setUserName(userName);
//		System.out.println(passWord);
//		System.out.println(userName);
		System.out.println("----"+user);
		if (request.getParameter("注册").equals("登录")) {
			System.out.println("1--"+String.valueOf(userService.queryUser(user).size()));
			List<User> list = userService.queryUser(user);
			System.out.println("+++"+user);
			// 1表示一个对象 获取后台的数据和前台传来的数据进行对比
			if (list.size() == 1
					&& list.get(0).getPassword().equals(user.getPassword())
					&& list.get(0).getUserName().equals(user.getUserName())) {
				return "shouye";
			} else {
				return "index";//index
			}
		} else if (request.getParameter("注册").equals("注册")) {
			return "zhuce";
		} else {
			return "index";//index
		}
	}

	@RequestMapping(value = "/a", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String ceshi1(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		System.out.println("========");
		List<User> list = new ArrayList<User>();
		list.add(new User("1", "1"));
		list.add(new User("2", "2"));
		JSONArray jsonArray = new JSONArray();
		System.out.println(jsonArray.fromObject(list).toString());
		return jsonArray.fromObject(list).toString();
	}

	// 分页
//	@RequestMapping(value = "renyuan2", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
//	@ResponseBody
//	public String test(HttpServletRequest request,
//			HttpServletResponse response, User user, ModelMap mp) {
//		// System.out.println("11111111111111");
//		int ye = Integer.valueOf(request.getParameter("userId"));
//		int shou = ye * 5 - 5;
//		int wei = 5;
//		List<User> lists = userService.findAllUser1(shou, wei);
//		JSONArray jsonArray = new JSONArray();
//		jsonArray.fromObject(lists);
//		return jsonArray.fromObject(lists).toString();
//	}

	// 计算总数
	@RequestMapping(value = "/userpage", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test1(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		// System.out.println("222222222222");
		List<User> lists = new ArrayList<User>();
		lists = userService.findAllUser();
		System.out.println(lists.size());
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("num", lists.size());
		return jsonObject.toString();
	}

	// 增加
	@RequestMapping(value = "/user_zj", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test2(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		String createTime = TimeUtil.timeToString1(TimeUtil.currentTime());
		user.setCreateTime(createTime);
		String password=request.getParameter("passWord");
//		System.out.println(password);
		user.setPassword(password);
		userService.user_zj(user);
		List<User> lists = new ArrayList<User>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}
//		String customer1=request.getParameter("customerName");
//		System.out.println(customer1);
//		 String createTime=TimeUtil.timeToString1(TimeUtil.currentTime());
//		 customer.setCreateTime(createTime);
//		List<Customer> list = new ArrayList<Customer>();
//		list = customerService.findAllCustomer();
//		System.out.println(list);
//		System.out.println(customer);
//		int a=0;
//		for (int i = 0; i < list.size(); i++) {
//			if(customer.getCustomerName().equals(list.get(i).getCustomerName())){
//				a++;
//			}
//		}
//		if(a>0){
//			JSONObject jsonObject = new JSONObject();
//			jsonObject.put("result", "error");
//			return jsonObject.toString();
//		}else{
//		customerService.insertCustomer(customer);
//		List<Customer> lists = new ArrayList<Customer>();
//		JSONArray jsonArray = new JSONArray();
//		return jsonArray.fromObject(lists).toString();
	// 修改
	@RequestMapping(value = "/user_xg", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test3(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		int id = Integer.parseInt(request.getParameter("user1Id"));
		System.out.println(id);
		System.out.println("xiugai");
		user = userService.findUserById(id);
		String userName = request.getParameter("userName");
		String userRole = request.getParameter("userRole");
		String jobNumber = request.getParameter("jobNumber");
		String phoneNumber = request.getParameter("phoneNumber");
		System.out.println(userName);
		user.setUserName(userName);
		user.setUserRole(userRole);
		user.setJobNumber(jobNumber);
		user.setPhoneNumber(phoneNumber);
		userService.user_xg(user);
		List<User> lists = new ArrayList<User>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}

	// 删除
	@RequestMapping(value = "/user_sc", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test4(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		int id = Integer.parseInt(request.getParameter("user1Id"));
		userService.user_sc(id);
		System.out.println("sanchu");
		System.out.println(id);

		List<User> lists = new ArrayList<User>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}
//注册
	@RequestMapping(value = "/register", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test5(HttpServletRequest request,
			HttpServletResponse response, User user, ModelMap mp) {
		String createTime = TimeUtil.timeToString1(TimeUtil.currentTime());
		user.setCreateTime(createTime);
		userService.register(user);

		List<User> lists = new ArrayList<User>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}
	@RequestMapping(value = "/userfind", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test6(HttpServletRequest request, HttpServletResponse response
			,User user,ModelMap map){
		List<User> lists=new ArrayList<User>();
		if(request.getParameter("JobNumber") == ""||request.getParameter("JobNumber") == null){
			// ""这个jobNumber值为空        null这个还没点击为空
			int ye = Integer.valueOf(request.getParameter("page"));
			int shou = ye * 5 - 5;
			int wei = 5;
		    lists = userService.findAllUser1(shou, wei);
			JSONArray jsonArray = new JSONArray();
			jsonArray.fromObject(lists);
			return jsonArray.fromObject(lists).toString();
		}else{
			String JobNumber = request.getParameter("JobNumber");
			System.out.println("你要搜索的id是" + JobNumber);
			User user1 = new User();
			user1.setJobNumber(JobNumber);
			lists = userService.findUser(user1);
			JSONArray jsonArray = new JSONArray();
			System.out.println("查看data"
					+ jsonArray.fromObject(lists).toString());
			return jsonArray.fromObject(lists).toString();
		}
	}
	@RequestMapping(value = "/change_pass", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test7(HttpServletRequest request, HttpServletResponse response
			,User user,ModelMap map){
		int id=Integer.parseInt(request.getParameter("userId"));
//		HttpSession session = request.getSession();
//		System.out.println(session);
		request.getSession().getAttribute("userId");
		System.out.println("-------"+id);
//		user.setUserId(id);
			System.out.println("---------"+user);
//			String name=request.getSession();
		return null;
	}
}

