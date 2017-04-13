package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.VersionDao;
import com.ssm.model.Version;
import com.ssm.service.VersionService;

@Transactional
@Service
public class VersionServiceImpl implements VersionService{
   @Autowired
   public VersionDao versionDao;
	public List<Version> findAllVersion(int page, int number, int ProjectId) {
		return versionDao.findAllVersion(page, number,ProjectId);
	}
	public boolean insertVersion(Version version) {
		return versionDao.insertVersion(version);
	}
	public boolean updateVersion(Version version) {
		return versionDao.updateVersion(version);
	}
	public boolean deleteVersion() {
		// TODO Auto-generated method stub
		return false;
	}
	
   
}
