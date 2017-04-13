package com.ssm.model;

public class Weekly {
	private int weekId;
	private int ProjectId;
	private String Completion;
	private String NextPlan;
	private String ProblemAll;
	private String CreateTime;

	public Weekly() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Weekly(int projectId, String completion, String nextPlan,
			String problemAll, String createTime) {
		super();
		ProjectId = projectId;
		Completion = completion;
		NextPlan = nextPlan;
		ProblemAll = problemAll;
		CreateTime = createTime;
	}

	public int getWeekId() {
		return weekId;
	}

	public void setWeekId(int weekId) {
		this.weekId = weekId;
	}

	public int getProjectId() {
		return ProjectId;
	}

	public void setProjectId(int projectId) {
		ProjectId = projectId;
	}

	public String getCompletion() {
		return Completion;
	}

	public void setCompletion(String completion) {
		Completion = completion;
	}

	public String getNextPlan() {
		return NextPlan;
	}

	public void setNextPlan(String nextPlan) {
		NextPlan = nextPlan;
	}

	public String getProblemAll() {
		return ProblemAll;
	}

	public void setProblemAll(String problemAll) {
		ProblemAll = problemAll;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}

	@Override
	public String toString() {
		return "Weekly [weekId=" + weekId + ", ProjectId=" + ProjectId
				+ ", Completion=" + Completion + ", NextPlan=" + NextPlan
				+ ", ProblemAll=" + ProblemAll + ", CreateTime=" + CreateTime
				+ "]";
	}

}
