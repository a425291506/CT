package com.ssm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.ssm.model.Plan;
import com.ssm.model.Version;

@Repository
public interface VersionDao {
	
     public List<Version> findAllVersion(int page,int number,int projectId);
     
     public boolean insertVersion(Version version);
     
     public boolean updateVersion(Version version);
     
     public boolean deleteVersion();
}
