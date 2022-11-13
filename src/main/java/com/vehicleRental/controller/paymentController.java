package com.vehicleRental.controller;

import java.time.LocalDate;
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

import com.vehicleRental.model.Booking;
import com.vehicleRental.model.Payment;
import com.vehicleRental.model.Vehicle;
import com.vehicleRental.service.PaymentService;

@CrossOrigin("*")
@RestController
public class paymentController {
	  @Autowired
	  private PaymentService service;
	  
	  @PostMapping(path="add/payment")
	  public Payment addPayment(@RequestBody Payment paymentObj)
	  {
		  return service.addPayment(paymentObj);
	  }
	  @GetMapping(path="view/allpayment")
	  public List<Payment> viewAllPayment(@RequestBody Vehicle vehicle)
	  {
		  return service.viewAllPayment(vehicle);
	  }
	  @GetMapping(path="view/payment")
	  public Payment viewPayment(@RequestBody Booking booking)
	  {
		  return service.viewPayment(booking);
	  }
	  @DeleteMapping(path="cancel/payment")
	  public Payment cancelPayment(@RequestBody Payment payment)
	  {
		  return service.cancelPayment(payment);
	  }
	  @GetMapping(path="calculate/revenue/{ld1}/{ld2}")
	  public double CalculateMonthlyRevenue(@PathVariable String ld1,@PathVariable String ld2)
	  {
		  LocalDate d1=LocalDate.parse(ld1);
		  LocalDate d2=LocalDate.parse(ld2);
		  return service.CalculateMonthlyRevenue(d1, d2);
	  }
	  @GetMapping(path="calculate/totalPayment")
	  public double calculateTotalPayment(@RequestBody Vehicle vehicle)
	  {
		  return service.calculateTotalPayment(vehicle);
	  }
	  
	  @GetMapping(path="/payment/viewAllPayments")
		public List<Payment> viewAllPayments(){
			return service.viewAllPayment();
		}
	  @PutMapping(path="update/payment/{status}")
      public int updateApprove(@PathVariable String status,@RequestBody Payment payment) {
            return service.updatePaymentStatus(payment,status);
        }
	   
}
