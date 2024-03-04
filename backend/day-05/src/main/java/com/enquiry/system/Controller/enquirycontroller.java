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

// import com.enquiry.system.dto.enquirydto;
// import com.enquiry.system.Service.enquiryservice;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController
// @RequestMapping("/api/enquiries")
// public class enquirycontroller {

//     private enquiryservice enquiryService;

//     // Build Add Enquiry REST API
//     @PostMapping
//     public ResponseEntity<enquirydto> createEnquiry(@RequestBody enquirydto enquirydto) {
//         enquirydto savedEnquiry = enquiryService.createenquiry(enquirydto);
//         return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
//     }

//     // Build Get Enquiry by ID REST API
//     @GetMapping("{id}")
//     public ResponseEntity<enquirydto> getEnquiryById(@PathVariable("id") Long enquiryId) {
//         enquirydto enquirydto = enquiryService.getenquiryById(enquiryId);
//         return ResponseEntity.ok(enquirydto);
//     }

//     // Build Get All Enquiries REST API
//     @GetMapping
//     public ResponseEntity<List<enquirydto>> getAllEnquiries() {
//         List<enquirydto> enquiries = enquiryService. getAllEnquiries ();
//         return ResponseEntity.ok(enquiries);
//     }

// }



