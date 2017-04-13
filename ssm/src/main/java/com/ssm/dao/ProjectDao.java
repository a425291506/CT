package com.ssm.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssm.model.Maintenance;
import com.ssm.model.Project;

@Repository//这个注解是和数据库打交道的 
public interface ProjectDao {

	public Project findProjectById(int id);

	public List<Project> findAllProject(int un,int ka);

	public List<Project> findAllProject1();
	
	public List<Project> findAllProject2(String ProjectName);
	
	void deleteProject(int project);

	void updateProject(Project project);

	void insertProject(Project project);
	
	void projectzj_xm(Project project);
	
	public List<Project> findAllproject3(int i, int j, int projectId);
}
