package com.vehicleRental;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.vehicleRental.repository.BookingRepository;
import com.vehicleRental.service.BookingService;

@SpringBootTest
class VehicleRentalApplicationTests {

	
	@Autowired
	private BookingService bookingService;
	
	@MockBean
	private BookingRepository bookingRepository;
	
	@Test
	void contextLoads() {
	}
	
	

}
