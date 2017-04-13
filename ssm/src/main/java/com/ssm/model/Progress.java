package com.ssm.model;

import java.util.ArrayList;
import java.util.List;

public class Progress {  
    
	 //上传总量    
    private long pBytesRead=0;    
    //读取上传总量    
    private long pContentLength=0;    
    //当前上传文件号    
    private int pItems=0;
    private String show = "";  
    private int rate = 0;  
	public long getpBytesRead() {
		return pBytesRead;
	}
	public void setpBytesRead(long pBytesRead) {
		this.pBytesRead = pBytesRead;
	}
	public long getpContentLength() {
		return pContentLength;
	}
	public void setpContentLength(long pContentLength) {
		this.pContentLength = pContentLength;
	}
	public int getpItems() {
		return pItems;
	}
	public void setpItems(int pItems) {
		this.pItems = pItems;
	}
	public String getShow() {
		return show;
	}
	public void setShow(String show) {
		this.show = show;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}    
    
        
}  