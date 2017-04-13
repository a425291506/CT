package com.ssm.model;

public class Customer {
	private int CustomerId;//客户Id
	private String CustomerName;//客户姓名
	private String CustomerAddress;//客户地址
	private String CreateTime;//创建时间
	private String contactsName1;//联系人姓名
	private String contactsPhone1;//联系方式
	private String contactsName2;
	private String contactsPhone2;
	private String contactsName3;
	private String contactsPhone3;
	private String contactsName4;
	private String contactsPhone4;
	private String contactsName5;
	private String contactsPhone5;
	
	

	@Override
	public String toString() {
		return "Customer [CustomerId=" + CustomerId + ", CustomerName="
				+ CustomerName + ", CustomerAddress=" + CustomerAddress
				+ ", CreateTime=" + CreateTime + ", contactsName1="
				+ contactsName1 + ", contactsPhone1=" + contactsPhone1
				+ ", contactsName2=" + contactsName2 + ", contactsPhone2="
				+ contactsPhone2 + ", contactsName3=" + contactsName3
				+ ", contactsPhone3=" + contactsPhone3 + ", contactsName4="
				+ contactsName4 + ", contactsPhone4=" + contactsPhone4
				+ ", contactsName5=" + contactsName5 + ", contactsPhone5="
				+ contactsPhone5 + "]";
	}

	public String getContactsName2() {
		return contactsName2;
	}

	public void setContactsName2(String contactsName2) {
		this.contactsName2 = contactsName2;
	}

	public String getContactsPhone2() {
		return contactsPhone2;
	}

	public void setContactsPhone2(String contactsPhone2) {
		this.contactsPhone2 = contactsPhone2;
	}

	public String getContactsName3() {
		return contactsName3;
	}

	public void setContactsName3(String contactsName3) {
		this.contactsName3 = contactsName3;
	}

	public String getContactsPhone3() {
		return contactsPhone3;
	}

	public void setContactsPhone3(String contactsPhone3) {
		this.contactsPhone3 = contactsPhone3;
	}

	public String getContactsName4() {
		return contactsName4;
	}

	public void setContactsName4(String contactsName4) {
		this.contactsName4 = contactsName4;
	}

	public String getContactsPhone4() {
		return contactsPhone4;
	}

	public void setContactsPhone4(String contactsPhone4) {
		this.contactsPhone4 = contactsPhone4;
	}

	public String getContactsName5() {
		return contactsName5;
	}

	public void setContactsName5(String contactsName5) {
		this.contactsName5 = contactsName5;
	}

	public String getContactsPhone5() {
		return contactsPhone5;
	}

	public void setContactsPhone5(String contactsPhone5) {
		this.contactsPhone5 = contactsPhone5;
	}

	public String getContactsName1() {
		return contactsName1;
	}

	public void setContactsName1(String contactsName1) {
		this.contactsName1 = contactsName1;
	}

	public String getContactsPhone1() {
		return contactsPhone1;
	}

	public void setContactsPhone1(String contactsPhone1) {
		this.contactsPhone1 = contactsPhone1;
	}

	public int getCustomerId() {
		return CustomerId;
	}

	public void setCustomerId(int customerId) {
		CustomerId = customerId;
	}

	public String getCustomerName() {
		return CustomerName;
	}

	public void setCustomerName(String customerName) {
		CustomerName = customerName;
	}

	public String getCustomerAddress() {
		return CustomerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		CustomerAddress = customerAddress;
	}

	public String getCreateTime() {
		return CreateTime;
	}

	public void setCreateTime(String createTime) {
		CreateTime = createTime;
	}

}
