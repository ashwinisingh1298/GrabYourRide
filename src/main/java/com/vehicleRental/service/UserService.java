package com.vehicleRental.service;

import com.vehicleRental.model.User;

public interface UserService {
	User validateUser(User user);
	User addUser(User user);
	User removeUser(User user);
	//User signOut(User user);
}
