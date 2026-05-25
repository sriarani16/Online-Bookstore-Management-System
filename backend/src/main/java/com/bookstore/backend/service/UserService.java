package com.bookstore.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.backend.entity.User;
import com.bookstore.backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User registerUser(User user) {
		 userRepository.findByEmail(user.getEmail())
         .ifPresent(u -> {
             throw new RuntimeException("Email already exists");
         });
		 user.setRole("USER");
		 return userRepository.save(user);
		
	}
	public User loginUser(String email, String password) {

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() -> new RuntimeException("Invalid email"));

	    if (!user.getPassword().equals(password)) {
	        throw new RuntimeException("Invalid password");
	    }

	    return user;
	}

}
