package com.ssm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.dao.CustomerDao;
import com.ssm.model.Customer;
import com.ssm.service.CustomerService;

@Transactional
// 事务控制
@Service("customerService")
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	// 注入
	public CustomerDao customerDao;

	public List<Customer> findAllCustomer() {
		// TODO Auto-generated method stub
		return customerDao.findAllCustomer();
	}

	public List<Customer> findAllCustomer1(int page, int number) {
		// TODO Auto-generated method stub
		return customerDao.findAllCustomer1(page, number);
	}

	public void insertCustomer(Customer customer) {
		customerDao.insertCustomer(customer);// 调用CustomerDao方法

	}

	public void updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customerDao.updateCustomer(customer);

	}

	public void deleteCustomer(int id) {
		// TODO Auto-generated method stub
		customerDao.deleteCustomer(id);
	}

	public List<Customer> findCustomer1(Customer customer) {
		// TODO Auto-generated method stub
		return customerDao.findCustomer1(customer);
	}

	public List<Customer> findCustomerByName(String customerName) {
		// TODO Auto-generated method stub
		return customerDao.findCustomerByName(customerName);
	}

	public List<Customer> findAllCustomer2(int page, int number, int id) {
		// TODO Auto-generated method stub
		return customerDao.findAllCustomer2(page, number, id);
	}

	public Customer findCustomerById(int id) {
		// TODO Auto-generated method stub
		return customerDao.findCustomerById(id);
	}

}
