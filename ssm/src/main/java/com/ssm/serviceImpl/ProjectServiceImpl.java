package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.ProjectDao;
import com.ssm.model.Maintenance;
import com.ssm.model.Project;
import com.ssm.service.ProjectService;

@Transactional//事务控制
@Service("projectService")
public class ProjectServiceImpl implements ProjectService {

	@Autowired//注入
	public ProjectDao projectDao;

	public List<Project> findAllProject(int a,int b) {
		return projectDao.findAllProject(a,b);
	}

	public void updateProject(Project project) {

		projectDao.updateProject(project);
	}

	public void insertProject(Project project) {
		 projectDao.insertProject(project);

	}

	public void deleteProject(int project) {
		
		 projectDao.deleteProject(project);
	}


	public Project findProjectById(int id) {
		
		return projectDao.findProjectById(id);
	}

	public List findAllProject1() {
		// TODO Auto-generated method stub
		return projectDao.findAllProject1();
	}

	public List findAllProject2(String ProjectName) {
		// TODO Auto-generated method stub
		return projectDao.findAllProject2(ProjectName);
	}


	public void projectzj_xm(Project project) {
		// TODO Auto-generated method stub
		 projectDao.projectzj_xm(project);
	}

	public List<Project> findAllproject3(int i, int j, int projectId) {
		// TODO Auto-generated method stub
		return projectDao.findAllproject3(i, j, projectId);
	}
}
