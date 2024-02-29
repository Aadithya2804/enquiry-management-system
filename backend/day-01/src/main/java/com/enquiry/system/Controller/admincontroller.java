// package com.enquiry.system.Controller;

// import java.util.List;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.enquiry.system.dto.admindto;
// import com.enquiry.system.Model.admin;
// import com.enquiry.system.Service.adminservice;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController
// @RequestMapping("/api/admin")
// public class admincontroller {

//     private adminservice adminService;

//     // Build Add Employee REST API
//     @PostMapping
//     public ResponseEntity<admindto> createadmin(@RequestBody admindto admindto) {
//         admindto savedadmin = adminService.createadmin(admindto);
//         return new ResponseEntity<>(savedadmin, HttpStatus.CREATED);
//     }

//     // Build Get Employee REST API
//     @GetMapping("{id}")
//     public ResponseEntity<admindto> getadminId(@PathVariable("id") Long userId) {
//         admindto admindto = adminService.getadminById(userId);
//         return ResponseEntity.ok(admindto);
//     }

//     // Build Get All Employee REST API
//     @GetMapping
//     public ResponseEntity<List<admindto>> getAlladmin() {
//         List<admindto> admin = adminService.getAlladmin();
//         return ResponseEntity.ok(admin);
//     }

// }