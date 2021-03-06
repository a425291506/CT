package com.ssm.service;

import java.util.List;

import com.ssm.model.Weekly;

public interface WeeklyService {
	public List<Weekly> findAllWeekly(int page, int number, int ProjectId);

	public Weekly findWeeklyById(int id);

	public void insertWeekly(Weekly weekly);

	public void updateWeekly(Weekly weekly);

	public void deleteWeeklyById(int id);
}
