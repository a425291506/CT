package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.MaintenanceDao;
import com.ssm.dao.PlanDao;
import com.ssm.model.Maintenance;
import com.ssm.model.Plan;
import com.ssm.service.MaintenanceService;
import com.ssm.service.PlanService;

@Transactional
@Service("MaintenanceService")
public class MaintenanceServiceImpl implements MaintenanceService {

	@Autowired
	public MaintenanceDao maintenanceDao;

	public List<Maintenance> findAllMaintenance(int page, int number) {
		// TODO Auto-generated method stub
		return maintenanceDao.findAllMaintenance(page, number);
	}

	public void insertMaintenance(Maintenance maintenance) {
		maintenanceDao.insertMaintenance(maintenance);
	}

	public Maintenance findMaintenanceById(int id) {

		return maintenanceDao.findMaintenanceById(id);
	}

	public void updateMaintenance(Maintenance maintenance) {
		maintenanceDao.updateMaintenance(maintenance);

	}

	public void deleteMaintenanceById(int id) {
		maintenanceDao.deleteMaintenanceById(id);

	}

	public List<Maintenance> findAllMaintenance1() {
		// TODO Auto-generated method stub
		return maintenanceDao.findAllMaintenance1();
	}

	public List<Maintenance> findAllMaintenances(int i, int j, int projectId) {
		// TODO Auto-generated method stub
		return maintenanceDao.findAllMaintenances(i, j, projectId);
	}

}
