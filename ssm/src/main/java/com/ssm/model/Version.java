package com.ssm.model;

public class Version {
	private int VersionId;
	private int ProjectId;
	private String VersionDescribe;
	private String RunFile;
	private String SourceFile;
	private String CreateTime;

	public int getVersionId() {
		return VersionId;
	}

	public void setVersionId(int versionId) {
		VersionId = versionId;
	}

	public int getProjectId() {
		return ProjectId;
	}

	public void setProjectId(int projectId) {
		ProjectId = projectId;
	}

	public String getVersionDescribe() {
		return VersionDescribe;
	}

	public void setVersionDescribe(String versionDescribe) {
		VersionDescribe = versionDescribe;
	}

	public String getRunFile() {
		return RunFile;
	}

	public void setRunFile(String runFile) {
		RunFile = runFile;
	}

	public String getSourceFile() {
		return SourceFile;
	}

	public void setSourceFile(String sourceFile) {
		SourceFile = sourceFile;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}

}
