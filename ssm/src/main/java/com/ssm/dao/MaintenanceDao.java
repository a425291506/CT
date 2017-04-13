package com.ssm.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssm.model.Maintenance;

@Repository
public interface MaintenanceDao {

	public List<Maintenance> findAllMaintenance(int page, int number);

	public void insertMaintenance(Maintenance maintenance);

	public Maintenance findMaintenanceById(int id);

	public void updateMaintenance(Maintenance maintenance);

	public void deleteMaintenanceById(int id);

	public List<Maintenance> findAllMaintenance1();

	public List<Maintenance> findAllMaintenances(int i, int j, int projectId);

}
