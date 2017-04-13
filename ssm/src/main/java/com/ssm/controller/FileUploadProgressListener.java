package com.ssm.controller;

import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.ProgressListener;
import org.springframework.stereotype.Component;

import com.ssm.model.Progress;
@Component
public class FileUploadProgressListener implements ProgressListener {
	 private HttpSession session = null;    
     
	 public void setSession(HttpSession session){
			this.session=session;
			Progress status = new Progress();
			session.setAttribute("status", status);
		} 
	    /**  
	     * 更新状态  
	     * @param pBytesRead 读取字节总数  
	     * @param pContentLength 数据总长度  
	     * @param pItems 当前正在被读取的field号  
	     */    
	 public void update(long pBytesRead, long pContentLength, int pItems) {
			Progress status = (Progress) session.getAttribute("status");
			status.setpBytesRead(pBytesRead);
			status.setpContentLength(pContentLength);
			status.setpItems(pItems);
			status.setShow(pBytesRead+"/"+pContentLength+" byte");  
            status.setRate( Math.round(new Float(pBytesRead) / new Float(pContentLength)*100));
		}  
	}    