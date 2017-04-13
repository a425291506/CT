package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.PlanDao;
import com.ssm.dao.WeeklyDao;
import com.ssm.model.Plan;
import com.ssm.model.Weekly;
import com.ssm.service.PlanService;
import com.ssm.service.WeeklyService;

@Transactional
@Service("WeeklyService")
public class WeeklyServiceImpl implements WeeklyService {

	@Autowired
	public WeeklyDao weeklyDao;

	public List<Weekly> findAllWeekly(int page, int number, int ProjectId) {

		return weeklyDao.findAllWeekly(page, number, ProjectId);
	}

	public Weekly findWeeklyById(int id) {

		return weeklyDao.findWeeklyById(id);
	}

	public void insertWeekly(Weekly weekly) {
		weeklyDao.insertWeekly(weekly);

	}

	public void updateWeekly(Weekly weekly) {
		weeklyDao.updateWeekly(weekly);

	}

	public void deleteWeeklyById(int id) {
		weeklyDao.deleteWeeklyById(id);

	}

}
