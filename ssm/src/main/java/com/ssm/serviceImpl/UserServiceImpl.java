package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.UserDao;
import com.ssm.model.User;
import com.ssm.service.UserService;

@Transactional
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	public UserDao userDao;

	public List queryUser(User user) {
		// TODO Auto-generated method stub
		return userDao.queryUser(user);
	}

	public boolean deleteUser(User user) {
		// TODO Auto-generated method stub
		userDao.deleteUser(user);
		return false;
	}

	public boolean insertUser(User user) {
		// TODO Auto-generated method stub
		userDao.insertUser(user);
		return false;
	}

	public boolean updateUser(User user) {
		// TODO Auto-generated method stub
		userDao.updateUser(user);
		return false;
	}

	public List<User> findAllUser() {

		return userDao.findAllUser();
	}

	public List<User> findAllUser1(int a, int b) {

		return userDao.findAllUser1(a, b);
	}

	public void user_zj(User users) {

		userDao.user_zj(users);
	}

	public void user_xg(User users) {

		userDao.user_xg(users);
	}

	public void user_sc(int users) {

		userDao.user_sc(users);
	}

	public User findUserById(int id) {

		return userDao.findUserById(id);
	}

	public void register(User user) {

		userDao.register(user);
	}

	public List<User> findUser(User user) {
		// TODO Auto-generated method stub
		return userDao.findUser(user);
	}

}
