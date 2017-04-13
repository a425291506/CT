package com.ssm.service;

import java.util.List;

import com.ssm.model.Plan;

public interface PlanService {
	public List<Plan> findAllPlan(int page, int number, int ProjectId);

	public void insertPlan(Plan plan);

	public Plan findPlanById(int id);

	public void updatePlan(Plan plan);

	public void deletePlanById(int id);
}
