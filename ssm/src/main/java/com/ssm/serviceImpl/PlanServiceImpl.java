package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.PlanDao;
import com.ssm.model.Plan;
import com.ssm.service.PlanService;

@Transactional
@Service("planService")
public class PlanServiceImpl implements PlanService {

	@Autowired
	public PlanDao planDao;

	public List<Plan> findAllPlan(int page, int number, int ProjectId) {
		// TODO Auto-generated method stub
		return planDao.findAllPlan(page, number, ProjectId);
	}

	public void insertPlan(Plan plan) {
		planDao.insertPlan(plan);
	}

	public Plan findPlanById(int id) {

		return planDao.findPlanById(id);
	}

	public void updatePlan(Plan plan) {
		planDao.updatePlan(plan);

	}

	public void deletePlanById(int id) {
		planDao.deletePlanById(id);

	}

}
