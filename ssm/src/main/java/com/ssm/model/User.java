package com.ssm.model;

public class User {
	private int UserId;
	private String UserRole;// 性别
	private String UserName;// 员工名字
	private String Password;// 密码
	private String JobNumber;// 工号
	private String PhoneNumber;// 手机号
	private String CreateTime;

	public User() {

	}

	public User(String UserName, String Password) {
		this.UserName = UserName;
		this.Password = Password;
	}

	public int getUserId() {
		return UserId;
	}

	public void setUserId(int userId) {
		UserId = userId;
	}

	public String getUserRole() {
		return UserRole;
	}

	public void setUserRole(String userRole) {
		UserRole = userRole;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getJobNumber() {
		return JobNumber;
	}

	public void setJobNumber(String jobNumber) {
		JobNumber = jobNumber;
	}

	public String getPhoneNumber() {
		return PhoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		PhoneNumber = phoneNumber;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}

	@Override
	public String toString() {
		return "User [UserId=" + UserId + ", UserRole=" + UserRole
				+ ", UserName=" + UserName + ", Password=" + Password
				+ ", JobNumber=" + JobNumber + ", PhoneNumber=" + PhoneNumber
				+ ", CreateTime=" + CreateTime + "]";
	}

}
