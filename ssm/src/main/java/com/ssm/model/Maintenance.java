package com.ssm.model;

public class Maintenance {
	private int MaintenanceId; // 维护id
	private int ProjectId; // 项目id
	private String ProblemDescribe;// 问题描述
	private String ProblemType;// 问题类型
	private String SolveMethod;// 解决方法
	private String CreateTime;

	public int getMaintenanceId() {
		return MaintenanceId;
	}

	public void setMaintenanceId(int maintenanceId) {
		MaintenanceId = maintenanceId;
	}

	public int getProjectId() {
		return ProjectId;
	}

	public void setProjectId(int projectId) {
		ProjectId = projectId;
	}

	public String getProblemDescribe() {
		return ProblemDescribe;
	}

	public void setProblemDescribe(String problemDescribe) {
		ProblemDescribe = problemDescribe;
	}

	public String getProblemType() {
		return ProblemType;
	}

	public void setProblemType(String problemType) {
		ProblemType = problemType;
	}

	public String getSolveMethod() {
		return SolveMethod;
	}

	public void setSolveMethod(String solveMethod) {
		SolveMethod = solveMethod;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}
}
