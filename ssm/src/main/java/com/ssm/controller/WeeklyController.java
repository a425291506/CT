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

import com.ssm.model.Plan;
import com.ssm.model.Project;

import com.ssm.model.User;
import com.ssm.model.Weekly;
import com.ssm.service.ProjectService;

import com.ssm.service.WeeklyService;
import com.ssm.util.TimeUtil;

@Controller
public class WeeklyController {

	//创建这个对象
	@Autowired
	public WeeklyService weeklyService;
	@Autowired
	public ProjectService projectService;
	
	 @RequestMapping(value="/zhoubao",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String zhoubao(HttpServletRequest request,HttpServletResponse response,Plan plan,ModelMap mp){
		 System.out.println("周报！！");		 
			List<Weekly> lists =new ArrayList<Weekly>();
			int page=Integer.valueOf(request.getParameter("page"));
			String projectName=request.getParameter("project");
			System.out.println(projectName+"====");	
			List<Project> project=projectService.findAllProject2(projectName);
			lists=weeklyService.findAllWeekly(page*5-5,5,project.get(0).getProjectId());							
			JSONArray jsonArray = new JSONArray();
			System.out.println(jsonArray.fromObject(lists).toString());
			return jsonArray.fromObject(lists).toString();	
	 }
	 @RequestMapping(value="/zhoubaopage",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String zhoubaopage(HttpServletRequest request,HttpServletResponse response,Weekly weekly,ModelMap mp){
		 	List<Weekly> lists =new ArrayList<Weekly>();
			String projectName=request.getParameter("project");
			List<Project> project=projectService.findAllProject2(projectName);
			lists=weeklyService.findAllWeekly(0, 1000000000, project.get(0).getProjectId());							
			JSONObject jsonObject  =  new JSONObject();
			jsonObject.put("num", lists.size());
			return jsonObject.toString();	
	 }
	 
	 @RequestMapping(value="/xinjian_zb",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String zhoubaoxj(HttpServletRequest request,HttpServletResponse response,Weekly weekly,ModelMap mp){
		 	System.out.println("周报添加");
		 String completion = request.getParameter("completion");
		 	String nextPlan = request.getParameter("nextPlan");
		 	String problemAll = request.getParameter("problemAll");
		 	String createTime=TimeUtil.timeToString1(TimeUtil.currentTime());
		 	System.out.println(completion+""+nextPlan+""+problemAll+""+createTime);
		 	String projectName=request.getParameter("project");
		 	List<Project> project=projectService.findAllProject2(projectName);
			int projectId=project.get(0).getProjectId();
		 	weeklyService.insertWeekly(new Weekly(projectId,completion,nextPlan,problemAll,createTime));		 	
		 	List<Plan> lists =new ArrayList<Plan>();					
			JSONArray jsonArray  =  new JSONArray();
			return jsonArray.fromObject(lists).toString();	
	 }
	 
	 @RequestMapping(value="/xiugai_zb",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String zhoubaoxg(HttpServletRequest request,HttpServletResponse response,Weekly weekly,ModelMap mp){
		 	System.out.println("周报修改");
		 	String completion_xiugai = request.getParameter("completion_xiugai");	 
		 	String nextPlan_xiugai = request.getParameter("nextPlan_xiugai");
		 	String problemAll_xiugai = request.getParameter("problemAll_xiugai");
		 	String createTime=TimeUtil.timeToString1(TimeUtil.currentTime());
		 	System.out.println(completion_xiugai+""+nextPlan_xiugai+""+problemAll_xiugai+""+createTime);
		 	System.out.println(request.getParameter("weekId_xiugai"));
		 	int id= Integer.parseInt(request.getParameter("weekId_xiugai"));
		 	
		 	weekly=weeklyService.findWeeklyById(id);
		 	weekly.setCompletion(completion_xiugai);
		 	weekly.setNextPlan(nextPlan_xiugai);
		 	weekly.setProblemAll(problemAll_xiugai);
		 	weekly.setCreateTime(createTime);
		 	weeklyService.updateWeekly(weekly);		 	
		 	System.out.println(weekly);
		 	List<Weekly> lists =new ArrayList<Weekly>();					
			JSONArray jsonArray  =  new JSONArray();
			return jsonArray.fromObject(lists).toString();	
	 }
	 @RequestMapping(value="/shanchu_zb",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String zhoubaosc(HttpServletRequest request,HttpServletResponse response,Weekly weekly,ModelMap mp){
		 	int id= Integer.parseInt(request.getParameter("weekId_shanchu"));	 	
		 	weekly=weeklyService.findWeeklyById(id);
		 	weeklyService.deleteWeeklyById(id);
		 	List<Weekly> lists =new ArrayList<Weekly>();					
			JSONArray jsonArray  =  new JSONArray();
			return jsonArray.fromObject(lists).toString();	
	 }
}