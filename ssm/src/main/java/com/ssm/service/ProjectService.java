package com.ssm.service;

import java.util.List;

import com.ssm.model.Maintenance;
import com.ssm.model.Project;

public interface ProjectService {

	public List findAllProject(int a,int b);
	
	public List findAllProject1();
	
	public List findAllProject2(String ProjectName);
	
	void updateProject(Project project);

	void insertProject(Project project);

	void deleteProject(int project);
	
	Project findProjectById(int id);
	
	public void projectzj_xm(Project project1);

	public List<Project> findAllproject3(int i, int j, int projectId);
}
