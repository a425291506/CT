package com.ssm.model;

public class Plan {
	private int PlanId;
	private int ProjectId;
	private String Function1;//功能
	private String Developers;//开发人员
	private String projectLeader;//项目负责人
	private String CreateTime;

	public Plan() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public String getProjectLeader() {
		return projectLeader;
	}



	public void setProjectLeader(String projectLeader) {
		this.projectLeader = projectLeader;
	}


	public Plan(int projectId, String function1, String developers,
			String projectLeader, String createTime) {
		super();
		ProjectId = projectId;
		Function1 = function1;
		Developers = developers;
		this.projectLeader = projectLeader;
		CreateTime = createTime;
	}

	public int getPlanId() {
		return PlanId;
	}

	public void setPlanId(int planId) {
		PlanId = planId;
	}

	public int getProjectId() {
		return ProjectId;
	}

	public void setProjectId(int projectId) {
		ProjectId = projectId;
	}

	public String getFunction1() {
		return Function1;
	}

	public void setFunction1(String function1) {
		Function1 = function1;
	}

	public String getDevelopers() {
		return Developers;
	}

	public void setDevelopers(String developers) {
		Developers = developers;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}

	@Override
	public String toString() {
		return "Plan [PlanId=" + PlanId + ", Projectid=" + ProjectId
				+ ", Function=" + Function1 + ", Developers=" + Developers
				+ ", CreateTime=" + CreateTime + "]";
	}

}
