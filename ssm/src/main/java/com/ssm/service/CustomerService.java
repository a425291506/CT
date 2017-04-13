package com.ssm.service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssm.model.Customer;
import com.ssm.model.Plan;

public interface CustomerService {
	public List<Customer> findAllCustomer();

	public List<Customer> findAllCustomer1(int page, int number);

	public List<Customer> findAllCustomer2(int page, int number, int id);

	public void insertCustomer(Customer customer);

	public void updateCustomer(Customer customer);

	public List<Customer> findCustomer1(Customer customer);

	public void deleteCustomer(int id);

	public List<Customer> findCustomerByName(String customerName);
	
	public Customer findCustomerById(int id);
}
