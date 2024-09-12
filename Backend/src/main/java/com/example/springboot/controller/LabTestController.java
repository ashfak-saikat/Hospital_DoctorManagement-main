package com.example.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.Doctor;
import com.example.springboot.model.LabTest;
import com.example.springboot.service.LabTestService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
//http://localhost:8088/api/LabTest
@RequestMapping("/api/labTest")
public class LabTestController {

	@Autowired
	public LabTestService labTestService;
	
	//registration
	@PostMapping("/addTest")
	public ResponseEntity<LabTest> saveAdmin(@RequestBody LabTest labTest){
		System.out.println("Test Added Succesfull "+labTest);
		return new ResponseEntity<LabTest>(labTestService.saveLabTest(labTest),HttpStatus.CREATED);
	}
	
	//get Lab Test By Id
	@GetMapping("/testById/{labTestId}")
	public ResponseEntity<LabTest> getLabTestById(@PathVariable("labTestId") long labTestId){
		
		return new ResponseEntity<LabTest>(labTestService.getLabTestById(labTestId),HttpStatus.OK);
	}
	
	@PutMapping("/updateTest/{LabTestId}")
	public ResponseEntity<LabTest> updateLabTest(@PathVariable("labTestId") long labTestId, @RequestBody LabTest labTest) {
	
		return new ResponseEntity<LabTest>(labTestService.updateLabTest(labTest,labTestId),HttpStatus.OK);
	}
	
	@GetMapping("/allLabTests")
	public List<LabTest> getAllLabTests(){
		return labTestService.getAllLabTests() ;
	}
	
}
