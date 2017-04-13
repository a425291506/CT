package com.ssm.service;

import java.util.List;

import com.ssm.model.Version;



public interface VersionService {
	public List<Version> findAllVersion(int page,int number, int ProjectId);
	
     public boolean insertVersion(Version version);
     
     public boolean updateVersion(Version version);
     
     public boolean deleteVersion();
}
