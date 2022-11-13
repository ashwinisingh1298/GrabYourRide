package com.vehicleRental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicleRental.dao.CustomerServiceImpl;
import com.vehicleRental.model.Customer;

@RestController
@CrossOrigin("*")
public class CustomerController {
	@Autowired
	CustomerServiceImpl csi;
//	test
	@PostMapping("/addCustomer") 
	public Customer addCustomer(@RequestBody Customer customer) {
		csi.addCustomer(customer);
		return customer;
	}
	@DeleteMapping("/deleteCustomer")
	public Customer deleteCustomer(@RequestBody Customer customer) {
		csi.removeCustomer(customer);
		return customer;
	}
//	test
	@PutMapping("/update")
	public Customer updateCustomer(@RequestBody Customer customer) {
		//Assuming some part has been updated
		return csi.updateCustomer(customer);
	}
	@GetMapping("/viewCustomer")
	public Customer viewCustomer(@RequestBody Customer customer) {
		csi.viewCustomer(customer);
		return customer;
	}
	@GetMapping("/viewAll/{location}")
	public List<Customer> viewCustomersByLoc(@PathVariable String location) {
		return csi.viewAllCustomersByLocation(location);
	}
	@GetMapping("/viewAllT/{vehicleType}")
	public List<Customer> viewCustomersByVT(@PathVariable String vehicleType){
		return csi.viewAllCustomers(vehicleType);
	}
	@GetMapping(path="/customer/viewByEmail/{email}")
	public Customer viewCustomerByEmail(@PathVariable String email) {
		return csi.viewCustomerByEmail(email);
	}
	
}
