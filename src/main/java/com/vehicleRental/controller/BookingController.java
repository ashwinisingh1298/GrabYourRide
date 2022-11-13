package com.vehicleRental.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Deque;
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
import com.vehicleRental.model.Customer;
import com.vehicleRental.model.Vehicle;
import com.vehicleRental.repository.BookingRepository;
import com.vehicleRental.service.BookingService;

import antlr.collections.Stack;

@RestController
@CrossOrigin("*")
public class BookingController {
	@Autowired
	private BookingService bookingService;
	@Autowired
	private BookingRepository br;
	
	@PutMapping(path="update/approve/{status}")
	public int updateApprove(@PathVariable String status,@RequestBody Booking booking) {
		return bookingService.updateApprove(booking,status);
	}
	
	
	@PostMapping(path="add/booking")
	public Booking addBooking(@RequestBody Booking b) {
//		System.out.println(b.getCustomer().getEmailId());
		return bookingService.addBooking(b);
	}
	@PutMapping(path="update/booking/{bookingId}")
	public Booking updateBookingId(@PathVariable String bookingId, @RequestBody Booking booking) {
		
		return br.save(booking);
	}
	
	
	@PutMapping(path="update/booking")
	public int updateBooking(@RequestBody Booking b) {
		return bookingService.updateBooking(b);
	}
	
	@DeleteMapping(path="delete/booking")
	public Booking deleteBooking(@RequestBody Booking b) {
		bookingService.cancelBooking(b);
		return b;
	}
	
	@GetMapping(path="view/booking/{id}")
	public Booking viewById(@PathVariable int id) {
		return bookingService.viewBooking(id);
	}
	
	@GetMapping(path="viewByVehicle/booking")
	public List<Booking> viewByVehicle(@RequestBody Vehicle v){
		return bookingService.viewAllBookings(v);
	}
	
	@GetMapping(path="viewByCustomer/booking/{email}")
	public List<Booking> viewByCustomer(@PathVariable String email){
		return bookingService.viewAllBooking(email);
	}
	
	@GetMapping(path="viewByDate/booking/{date}")
	public List<Booking> viewByDate(@PathVariable String date){
		LocalDate ld = LocalDate.parse(date);
		System.out.print(ld);
		return bookingService.viewAllBookingByDate(ld);
	}
	
	@GetMapping(path="booking/checkAvailability/{type}/{bookingDate}/{bookingTillDate}")
	public int checkAvailability(@PathVariable String type,@PathVariable String bookingDate,@PathVariable String bookingTillDate){
		System.out.println(type +""+bookingDate+""+bookingTillDate);
		List<Booking> list = br.checkVehicleAvailability(type, LocalDate.parse(bookingDate),LocalDate.parse(bookingTillDate),"Denied");
		if(list.isEmpty()) {
			return 1;
		}
		else {
			return 0;
		}
		
	}
	
	@GetMapping(path="view/allBookings")
	public List<Booking> allBookings(){
		return bookingService.viewAll();
	}
	
}
