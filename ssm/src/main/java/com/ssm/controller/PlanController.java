package com.ssm.controller;

import java.io.UnsupportedEncodingException;
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

import com.ssm.model.Plan;
import com.ssm.model.Project;
import com.ssm.service.PlanService;
import com.ssm.service.ProjectService;
import com.ssm.util.TimeUtil;

@Controller
public class PlanController {

	@Autowired
	public PlanService planService;
	@Autowired
	public ProjectService projectService;

	@RequestMapping(value = "/jihua", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String jihuaXS(HttpServletRequest request,
			HttpServletResponse response, Plan plan, ModelMap mp) {
		System.out.println("计划！！");
		List<Plan> lists = new ArrayList<Plan>();
		int page = Integer.valueOf(request.getParameter("page"));
		String projectName = request.getParameter("project");
		System.out.println(projectName + "====");
		List<Project> project = projectService.findAllProject2(projectName);
		lists = planService.findAllPlan(page * 5 - 5, 5, project.get(0)
				.getProjectId());
		JSONArray jsonArray = new JSONArray();
		System.out.println(jsonArray.fromObject(lists).toString());
		return jsonArray.fromObject(lists).toString();
	}

	@RequestMapping(value = "/jihuapage", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String jihuapage(HttpServletRequest request,
			HttpServletResponse response, Plan plan, ModelMap mp) {
		List<Plan> lists = new ArrayList<Plan>();
		String projectName = request.getParameter("project");
		List<Project> project = projectService.findAllProject2(projectName);
		lists = planService.findAllPlan(0, 1000000000, project.get(0)
				.getProjectId());
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("num", lists.size());
		return jsonObject.toString();
	}

	@RequestMapping(value = "/tianjia_jh", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String jihuatj(HttpServletRequest request,
			HttpServletResponse response, Plan plan, ModelMap mp) {
		System.out.println("计划添加！！");
		String function1 = request.getParameter("function1");
		String developers = request.getParameter("developers");
		String createTime = TimeUtil.timeToString1(TimeUtil.currentTime());
		String projectName = request.getParameter("project");
		String projectLeader=request.getParameter("projectLeader");
		List<Project> project = projectService.findAllProject2(projectName);
		System.out.println(project);
		int projectId = project.get(0).getProjectId();
		System.out.println(projectId);
		plan = new Plan(projectId, function1, developers,projectLeader,createTime);
		planService.insertPlan(plan);
		List<Plan> lists = new ArrayList<Plan>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}

	// @RequestMapping(value="/tianjia",method=RequestMethod.POST,produces =
	// "text/plain;charset=UTF-8")
	// //@ResponseBody
	// public String jihuaInsert(HttpServletRequest request,HttpServletResponse
	// response,Plan plan,ModelMap mp){
	// String function1=request.getParameter("function1");
	// String developers=request.getParameter("developers");
	// String createTime=TimeUtil.timeToString(TimeUtil.currentTime());
	//
	// System.out.println(createTime);
	// if(request.getParameter("添加").equals("添加")){
	// plan = new Plan(function1,developers,createTime);
	// planService.insertPlan(plan);
	// return "redirect:shouye.jsp";
	// }else{
	// return "redirect:shouye.jsp";
	// }
	//
	// }
	@RequestMapping(value = "/xiugai_jh", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String jihuaupdate(HttpServletRequest request,
			HttpServletResponse response, Plan plan, ModelMap mp) {
		System.out.println("xiugai");
		int id = Integer.parseInt(request.getParameter("planId_xiugai"));
		System.out.println(id);
		String function1_xiugai = request.getParameter("function1");
		String developers_xiugai = request.getParameter("developers");
		String projectLeader=request.getParameter("projectLeader1");
		String createTime_xiugai = TimeUtil.timeToString1(TimeUtil.currentTime());
		plan = planService.findPlanById(id);
		plan.setFunction1(function1_xiugai);
		plan.setDevelopers(developers_xiugai);	
		plan.setProjectLeader(projectLeader);
		plan.setCreateTime(createTime_xiugai);
		planService.updatePlan(plan);
		System.out.println(plan);
		List<Plan> lists = new ArrayList<Plan>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}

	@RequestMapping(value = "/shanchu_jh", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String shanchu(HttpServletRequest request,
			HttpServletResponse response, Plan plan, ModelMap mp) {
		System.out.println("shanchu");
		System.out.println(request.getParameter("planId_shanchu"));
		int id = Integer.parseInt(request.getParameter("planId_shanchu"));
		System.out.println(id);
		planService.deletePlanById(id);
		List<Plan> lists = new ArrayList<Plan>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();

	}
}
