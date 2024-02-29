package com.enquiry.system.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enquiry.system.dto.userdto;
// import com.enquiry.system.Model.user;
import com.enquiry.system.Service.userservice;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class usercontroller {

    private userservice userService;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<userdto> createuser(@RequestBody userdto userdto) {
        userdto saveduser = userService.createuser(userdto);
        return new ResponseEntity<>(saveduser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<userdto> getuserId(@PathVariable("id") Long userId) {
        userdto userdto = userService.getuserById(userId);
        return ResponseEntity.ok(userdto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<userdto>> getAlluser() {
        List<userdto> user = userService.getAlluser();
        return ResponseEntity.ok(user);
    }

}