package com.vehicleRental.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicleRental.model.User;
import com.vehicleRental.repository.UserRepository;
import com.vehicleRental.service.UserService;


@CrossOrigin("*")
@RestController
public class UserController {
	@Autowired
	private UserService ur;
	@Autowired
	private UserRepository userrepo;
	@PostMapping(path="/login")
	public ResponseEntity<?> login(@RequestBody User userData){
		System.out.println(userData);
		User user=userrepo.findByUserId(userData.getUserId());
		if(user.getPassword().equals(userData.getPassword())) {
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	
	@GetMapping(path="/getUser/{userId}")
	public Optional<User> getUser(@PathVariable String userId) {
		return userrepo.findById(userId);
	}
	
	
	@DeleteMapping(path ="/remove/User")
	public User removeUser(@RequestBody User user) {
		return ur.removeUser(user);
	}
	@GetMapping(path = "/validate/User")
	public User validateUser(@RequestBody User user) {
		return ur.validateUser(user);
	}
	
	@PostMapping(path = "/add/User")
	public User addUser(@RequestBody User user) {
		System.out.println("addUserCalled");
		ur.addUser(user);
		return user;
	}
}