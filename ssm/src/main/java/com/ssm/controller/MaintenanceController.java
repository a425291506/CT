package com.ssm.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.ssm.model.Maintenance;
import com.ssm.model.Project;
import com.ssm.model.User;
import com.ssm.service.MaintenanceService;
import com.ssm.service.ProjectService;
import com.ssm.util.TimeUtil;

@Controller
public class MaintenanceController {

	@Autowired
	private MaintenanceService maintenanceService;
	@Autowired
	private ProjectService projectService;

	@RequestMapping(value = "/jilu", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test(HttpServletRequest request,
			HttpServletResponse response, Maintenance maintenance, ModelMap mp) {
		List<Maintenance> lists = new ArrayList<Maintenance>();
		int page = Integer.valueOf(request.getParameter("page"));
		System.out.println(page);
		String projectName = request.getParameter("project");
		System.out.println(projectName + "====");
		List<Project> project = projectService.findAllProject2(projectName);
		lists = maintenanceService.findAllMaintenances(page * 5 - 5, 5, project
				.get(0).getProjectId());
		JSONArray jsonArray = new JSONArray();
		System.out.println(jsonArray.fromObject(lists).toString());
		return jsonArray.fromObject(lists).toString();
	}

	@RequestMapping(value = "/maintenancepage", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test1(HttpServletRequest request,
			HttpServletResponse response, Maintenance maintenance, ModelMap mp) {
		// System.out.println("222");

		List<Maintenance> lists = new ArrayList<Maintenance>();
		String projectName = request.getParameter("project");
		List<Project> project = projectService.findAllProject2(projectName);
		lists = maintenanceService.findAllMaintenances(0, 1000000000, project
				.get(0).getProjectId());
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("num", lists.size());
		return jsonObject.toString();
	}

	@RequestMapping(value = "/maintenance_zj", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test2(HttpServletRequest request,
			HttpServletResponse response, Maintenance maintenance, ModelMap mp) {
		String createTime = TimeUtil.timeToString1(TimeUtil.currentTime());
		maintenance.setCreateTime(createTime);
		String projectName = request.getParameter("project");
		List<Project> project = projectService.findAllProject2(projectName);
		System.out.println(project);
		int projectId = project.get(0).getProjectId();
		maintenance.setProjectId(projectId);
		maintenanceService.insertMaintenance(maintenance);
		List<Maintenance> lists = new ArrayList<Maintenance>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}

	@RequestMapping(value = "/maintenance_xg", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test3(HttpServletRequest request,
			HttpServletResponse response, Maintenance maintenance, ModelMap mp) {
		int id = Integer.parseInt(request.getParameter("maintenanceId"));
		System.out.println(id);
		maintenanceService.findMaintenanceById(id);
		maintenanceService.updateMaintenance(maintenance);
		List<Maintenance> lists = new ArrayList<Maintenance>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}

	@RequestMapping(value = "/maintenance_sc", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
	@ResponseBody
	public String test4(HttpServletRequest request,
			HttpServletResponse response, Maintenance maintenance, ModelMap mp) {
		int id = Integer.parseInt(request.getParameter("maintenanceId"));
		System.out.println(id);
		maintenanceService.deleteMaintenanceById(id);

		List<Maintenance> lists = new ArrayList<Maintenance>();
		JSONArray jsonArray = new JSONArray();
		return jsonArray.fromObject(lists).toString();
	}

}
