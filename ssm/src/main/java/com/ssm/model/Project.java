package com.ssm.model;

public class Project {
	private int ProjectId;
	private String ProjectType;
	private String ProjectName;
	private String ProjectStatus;
	private int CustomerId;
	private String CreateTime;

	public Project() {

	}

	public Project(String projectType, String projectName,
			String projectStatus, String createTime) {
		super();
		ProjectType = projectType;
		ProjectName = projectName;
		ProjectStatus = projectStatus;
		CreateTime = createTime;
	}

	public int getProjectId() {
		return ProjectId;
	}

	public void setProjectId(int projectId) {
		ProjectId = projectId;
	}

	public String getProjectType() {
		return ProjectType;
	}

	public void setProjectType(String projectType) {
		ProjectType = projectType;
	}

	public String getProjectName() {
		return ProjectName;
	}

	public void setProjectName(String projectName) {
		ProjectName = projectName;
	}

	public String getProjectStatus() {
		return ProjectStatus;
	}

	public void setProjectStatus(String prpjectStatus) {
		ProjectStatus = prpjectStatus;
	}

	public int getCustomerId() {
		return CustomerId;
	}

	public void setCustomerId(int customerId) {
		CustomerId = customerId;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}
}
