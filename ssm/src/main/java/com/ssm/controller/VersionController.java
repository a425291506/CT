package com.ssm.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mysql.jdbc.TimeUtil;
import com.ssm.model.Plan;
import com.ssm.model.Progress;
import com.ssm.model.Project;
import com.ssm.model.Version;
import com.ssm.service.PlanService;
import com.ssm.service.ProjectService;
import com.ssm.service.VersionService;
import com.ssm.util.FileUploadUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class VersionController{
	@Autowired
	public VersionService versionService;
	@Autowired
	public ProjectService projectService;
	 @RequestMapping(value="/version1",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String versionXS(HttpServletRequest request,HttpServletResponse response,Version version,ModelMap mp){
		 
		List<Version> lists =new ArrayList<Version>();
		int page=Integer.valueOf(request.getParameter("page"));
		String projectName=request.getParameter("project");
		List<Project> project=projectService.findAllProject2(projectName);
		lists=versionService.findAllVersion(page*5-5,5,project.get(0).getProjectId());							
		JSONArray jsonArray  =  new JSONArray();
		return jsonArray.fromObject(lists).toString();	
	 }
	 
	 @RequestMapping(value="/download",method=RequestMethod.POST)
	 @ResponseBody
	 public void runFiledownload (HttpServletRequest request,HttpServletResponse response,Version version,ModelMap mp) {
		 
		 response.setContentType( "application/x-msdownload");
         response.setHeader("Content-disposition","attachment;filename=" + request.getParameter("runFile"));  
		
         try {
			FileUploadUtil.connect("", "192.68.68.84", 21, "root", "123456");
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
         response.setContentLength(FileUploadUtil.getFileLength(request.getParameter("runFile"))); 
         OutputStream os; 
		 		 try { 
		 			
				os = response.getOutputStream();
	           InputStream iStream = FileUploadUtil.getFile(request.getParameter("runFile"));
	            byte[] buf = new byte[4096]; /* 创建输出流 */
	            int readLength = 0;
	            
	           // System.out.println(FileUploadUtil.getFile(request.getParameter("runFile")).toString());
	            System.out.println(iStream.toString());
	            while (((readLength = iStream.read(buf)) != -1)) 
	            { os.write(buf, 0, readLength);
	            } 
	             os.close(); 
	              iStream.close();
	            System.out.println("下载完成");
	        } catch (IOException e) {  
	            e.printStackTrace();  
	        }  
	  catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		 
	 }
	 
	 @RequestMapping(value="/versionpage",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String versionpage(HttpServletRequest request,HttpServletResponse response,Version version,ModelMap mp){	 
		List<Version> lists =new ArrayList<Version>();
		String projectName=request.getParameter("project");
		
		List<Project> project=projectService.findAllProject2(projectName);
		System.out.println(String.valueOf(project.get(0).getProjectId())+"==============");
		lists=versionService.findAllVersion(0,1000000000, project.get(0).getProjectId());							
		JSONObject jsonObject  =  new JSONObject();
		jsonObject.put("num", lists.size());
		return jsonObject.toString();	
	 }
	 
	 @RequestMapping(value="/versionUpload",method=RequestMethod.POST,produces = "text/plain;charset=UTF-8")
	 @ResponseBody
	 public String versionUpload(HttpServletRequest request,HttpServletResponse response,Version version,ModelMap mp,@RequestParam(value = "file", required = false) MultipartFile[] files){
		 Long currentTime=com.ssm.util.TimeUtil.currentTime();
		 String  RunFile =  currentTime.toString() + "/" + files[0].getOriginalFilename();
		 String  SourceFile = currentTime.toString() + "/" + files[1].getOriginalFilename();
		 try {
			 FileUploadUtil.connect("", "192.68.68.84", 21, "root", "123456");
			 FileUploadUtil.upload(files,currentTime.toString(), request);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 version.setRunFile(RunFile);
		 version.setSourceFile(SourceFile);
		 version.setCreateTime(com.ssm.util.TimeUtil.timeToString(currentTime));
		 System.out.println("ssssssssssssssss==============");
		 System.out.println(request.getParameter("project")+"==============");
		 List<Project> project=projectService.findAllProject2(request.getParameter("project"));
		 version.setProjectId(project.get(0).getProjectId());
		 versionService.insertVersion(version);
		 JSONObject jsonObject  =  new JSONObject();
		 return jsonObject.toString();	 
		 
	 }

	 
	    @RequestMapping(value = "/progress", method = RequestMethod.POST)  
	    @ResponseBody  
	    public String process(HttpServletRequest request,  
	            HttpServletResponse response) throws Exception {  
	    	Progress aProgress=(Progress)request.getSession().getAttribute("status");
	    	System.out.println(aProgress.getpBytesRead()+"----");
	    	JSONObject jsonObject = new JSONObject();
            jsonObject = JSONObject.fromObject(aProgress);
	    	return jsonObject.toString();  
	    }      
}
