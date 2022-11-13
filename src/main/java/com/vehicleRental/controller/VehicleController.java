package com.vehicleRental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicleRental.model.*;
import com.vehicleRental.repository.VehicleRepository;
import com.vehicleRental.service.vehicleService;

import antlr.collections.List;

@RestController
@CrossOrigin("*")
public class VehicleController {
	@Autowired
	private vehicleService vehicleService;
	@Autowired
	private VehicleRepository vr;

	
	@PostMapping(path="/add/vehicle")
	public Vehicle addVehicle(@RequestBody Vehicle v) {
		return vehicleService.addVehicle(v);
	}
	
	@GetMapping(path="/view/vehicle/{type}")
	public Vehicle getVehicle(@PathVariable String type) {
		return vehicleService.getVehicle(type);
	}
	
	@GetMapping(path="/check/vehicle/{vehicleNumber}")
	public int checkIfVehicleExists(@PathVariable String vehicleNumber) {
		Vehicle v = vr.checkIfVehicleExists(vehicleNumber);
		if(v==null) {
			return 1;
		}
		else {
			return 0;
		}
	}
	
}
