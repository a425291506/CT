package com.ssm.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssm.model.Plan;

@Repository
public interface PlanDao {
	public List<Plan> findAllPlan(int page, int number, int ProjectId);

	public void insertPlan(Plan plan);

	public Plan findPlanById(int id);

	public void updatePlan(Plan plan);

	public void deletePlanById(int id);
}
