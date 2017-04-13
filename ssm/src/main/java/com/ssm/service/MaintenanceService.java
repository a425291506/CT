package com.ssm.service;

import java.util.List;

import com.ssm.model.Maintenance;
import com.ssm.model.Plan;

public interface MaintenanceService {

	public List<Maintenance> findAllMaintenance(int page, int number);

	public void insertMaintenance(Maintenance maintenance);

	public Maintenance findMaintenanceById(int id);

	public void updateMaintenance(Maintenance maintenance);

	public void deleteMaintenanceById(int id);

	public List<Maintenance> findAllMaintenance1();

	public List<Maintenance> findAllMaintenances(int i, int j, int projectId);
}
