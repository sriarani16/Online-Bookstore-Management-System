package com.bookstore.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.backend.entity.User;
import com.bookstore.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {
	 @Autowired
	    private UserService userService;

	    // REGISTER
	    @PostMapping("/register")
	    public ResponseEntity<User> register(@RequestBody User user) {
	        return ResponseEntity.ok(userService.registerUser(user));
	    }

	    // LOGIN
	    @PostMapping("/login")
	    public ResponseEntity<User> login(@RequestBody User user) {
	        User loggedUser = userService.loginUser(user.getEmail(), user.getPassword());
	        return ResponseEntity.ok(loggedUser);
	    }

}
