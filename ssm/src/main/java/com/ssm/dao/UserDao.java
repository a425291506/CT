package com.ssm.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssm.model.User;

@Repository
public interface UserDao {
	public User findUserById(int id);

	public List queryUser(User user);

	public boolean deleteUser(User user);

	public boolean insertUser(User user);

	public boolean updateUser(User user);

	public List<User> findAllUser();

	public List<User> findAllUser1(int a, int b);

	public void user_zj(User users);

	public void user_xg(User users);

	public void user_sc(int users);

	public void register(User user);
	
	public List<User> findUser(User user);
}
