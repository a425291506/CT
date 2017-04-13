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
import com.ssm.model.Maintenance;
import com.ssm.model.Project;
import com.ssm.model.User;
import com.ssm.service.CustomerService;
import com.ssm.service.ProjectService;
import com.ssm.util.TimeUtil;

@Controller
public class ProjectController {

	@Autowired
	public ProjectService projectService;
	
	@Autowired
	public CustomerService customerService;

//	@RequestMapping(value = "/version", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
//	@ResponseBody
//	public String test(HttpServletRequest request,
//			HttpServletResponse response, Project project, ModelMap mp) {
//		int ye=Integer.valueOf(request.getParameter("userId"));
//		int shou=ye*5-5;
//		int wei=5;
//		List<Project> lists = projectService.findAllProject(shou,wei);
//		JSONArray jsonArray = new JSONArray();
//		jsonArray.fromObject(lists);
//		return jsonArray.fromObject(lists).toString();
//	}
	@RequestMapping(value="/version",method=RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	 public String test(HttpServletRequest request,
			 HttpServletResponse response,Project project,ModelMap mp){
		List<Project> lists =new ArrayList<Project>();
		int page=Integer.valueOf(request.getParameter("page"));
		System.out.println(page);
		String constomerName=request.getParameter("project");
		System.out.println(constomerName+"====");	
		List<Customer> customer=customerService.findCustomerByName(constomerName);
		lists=projectService.findAllproject3(page*5-5,5,customer.get(0).getCustomerId());	
		System.out.println(customer.get(0).getCustomerId()+"11111111111111111");
		
		JSONArray jsonArray  =  new JSONArray();
		System.out.println(jsonArray.fromObject(lists).toString());
		return jsonArray.fromObject(lists).toString();	
	}
	
	@RequestMapping(value = "/project", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String project(HttpServletRequest request,
			HttpServletResponse response, Project project, ModelMap mp) {
		List<Project> lists = projectService.findAllProject1();
		JSONArray jsonArray = new JSONArray();
		System.out.println(jsonArray.fromObject(lists).toString());
		return jsonArray.fromObject(lists).toString();
	}
	//总数
//	@RequestMapping(value = "/projectpage", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
//	@ResponseBody
//	public String projectpage(HttpServletRequest request,
//			HttpServletResponse response, Project project, ModelMap mp) {
//		List<Project> lists = projectService.findAllProject1();
//		JSONObject jsonObject  =  new JSONObject();
//		jsonObject.put("num", lists.size());
//		return jsonObject.toString();	
//	}
	@RequestMapping(value="/projectpage",method=RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	 public String test8(HttpServletRequest request,
			 HttpServletResponse response,Project project,ModelMap mp){
		List<Project> lists =new ArrayList<Project>();
		String customerName=request.getParameter("project");
		List<Customer> project1=customerService.findCustomerByName(customerName);
		lists=projectService.findAllproject3(0, 1000000000, project1.get(0).getCustomerId());							
		JSONObject jsonObject  =  new JSONObject();
		jsonObject.put("num", lists.size());
		return jsonObject.toString();	
	 }
	@RequestMapping(value="/projectxiugai",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test1(HttpServletRequest request,
			HttpServletResponse response, Project project, ModelMap mp){
		projectService.updateProject(project);
		System.out.println("KKKKKKKK"+project);
		
		
		List<Project> lists=new ArrayList<Project>();
		JSONArray jsonArray=new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}
	//删除功能
	@RequestMapping(value="/projectshanchu",method=RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test2(HttpServletRequest request,
			HttpServletResponse response, Project project, ModelMap mp){
			//System.out.println("shanchu");
			int id=Integer.parseInt(request.getParameter("projectId"));
			System.out.println(id);
			//System.out.println("shanchu");
//			if(request.getParameter("确认").equals("确认")) {
//				projectService.deleteProject(id);
//				System.out.println(id);
//				return "shouye";
//			}else if (request.getParameter("取消").equals("确认")) {
//				return "shouye";
//			}else{
//				return "shouye";
//			}
			projectService.deleteProject(id);
			List<Project> lists=new ArrayList<Project>();
			JSONArray jsonArray=new JSONArray();
			return jsonArray.fromObject(lists).toString();
	}
	//增加功能
//	@RequestMapping(value="/zengjia",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
//	public String test3(HttpServletRequest request,
//			HttpServletResponse response, Project project, ModelMap mp){
//		String projectType=request.getParameter("projectType");//""对应js的name 
//		String projectName=request.getParameter("projectName");
//		String projectStatus=request.getParameter("projectStatus");
//		//自动生成创建时间
//		String createTime=TimeUtil.timeToString(TimeUtil.currentTime());
//		System.out.println(createTime);
//		if(request.getParameter("确认").equals("确认")){
//			project=new Project(projectType,projectName,projectStatus,createTime);
//			projectService.insertProject(project);
//			return "redirect:shouye.jsp";
//		}else if (request.getParameter("取消").equals("确认")) {
//			return "redirect:shouye.jsp";
//		}else {
//			return "redirect:shouye.jsp";
//		}
//	}projectzengjia
	@RequestMapping(value="/projectzengjia",method=RequestMethod.POST,produces="text/plain;charset=UTF-8")
	@ResponseBody
	public String test3(HttpServletRequest request,
		HttpServletResponse response, Project project, ModelMap mp){
//		String projectType=request.getParameter("projectType");
		String projectName=request.getParameter("projectName");
//		String projectStatus=request.getParameter("projectStatus");
		List<Project> list = new ArrayList<Project>();
		list = projectService.findAllProject1();
		int a = 0 ;
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getProjectName().equals(project.getProjectName())) {
				a++;
			}
		}
		if(a>0){
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("result", "error");
			return jsonObject.toString(); 
		}else{
			String createTime=TimeUtil.timeToString1(TimeUtil.currentTime());
			project.setCreateTime(createTime);
			String customerName=request.getParameter("customer");
			List<Customer> customer=customerService.findCustomerByName(customerName);
			System.out.println(project);
			int customerId=customer.get(0).getCustomerId();
			project.setCustomerId(customerId);
			projectService.projectzj_xm(project);
			List<Project> lists=new ArrayList<Project>();
			JSONArray jsonArray=new JSONArray();
			return jsonArray.fromObject(lists).toString();
		}
	}
}
