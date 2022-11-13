package com.vehicleRental;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.vehicleRental.repository.BookingRepository;
import com.vehicleRental.service.BookingService;

@SpringBootTest
public class bookingTests {
	

	@Autowired
	private BookingService bookingService;
	
	@MockBean
	private BookingRepository bookingRepository;

}
