package com.example.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

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
import com.example.springboot.model.Ambulance;
import com.example.springboot.model.BookingAppointment;
import com.example.springboot.model.LabTest;
import com.example.springboot.model.Patient;
import com.example.springboot.model.Payment;
import com.example.springboot.model.Prescription;
import com.example.springboot.service.AmbulanceService;
import com.example.springboot.service.PaymentService;
import com.example.springboot.service.PrescriptionService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
//http://localhost:8088/api/ambulance
@RequestMapping("/api/ambulance")
public class AmbulanceController {
	
	@Autowired
	public AmbulanceService ambulanceService;
	
	@Autowired
	public PrescriptionService prescriptionService;
	
	@Autowired
	public PaymentService paymentService;
	
	//Registration
	@PostMapping("/ambulance_booking")
	public ResponseEntity<Ambulance> saveAmbulance(@RequestBody Ambulance ambulance){
		System.out.println("Patient Registration Succesfull "+ambulance);
		return new ResponseEntity<Ambulance>(ambulanceService.saveAmbulance(ambulance),HttpStatus.CREATED);
	}
		
	//get ambulance By Id
	@GetMapping("/ambulanceById/{ambulanceId}")
	public ResponseEntity<Ambulance> getAmbulanceById(@PathVariable("ambulanceId") long ambulanceId){
		
		return new ResponseEntity<Ambulance>(ambulanceService.getAmbulanceById(ambulanceId),HttpStatus.OK);
	}

	@PutMapping("{ambulanceId}")
	public ResponseEntity<Ambulance> updateAmbulance(@PathVariable("ambulanceId") long ambulanceId, @RequestBody Ambulance ambulance) {
	
		return new ResponseEntity<Ambulance>(ambulanceService.updateAmbulance(ambulance,ambulanceId),HttpStatus.OK);
	}

	@GetMapping("/ambulance_list/{patientId}")
	
	public List<Ambulance> getAllLabTests(@PathVariable("patientId") long patientId){
		return ambulanceService.getAmbulanceList(patientId);
	}

	@GetMapping("/all_ambulance")
	public List<Ambulance> getAllAmbulance(){
		
		return ambulanceService.getAllAmbulance() ;
	}

	@GetMapping("/prescription")
	public List<Prescription> getAllPrescriptions(){
		return prescriptionService.getAllPrescriptions();
	}
	
	@GetMapping("/prescription/{precriptionId}")
	public ResponseEntity<Prescription> getPrescriptionById(@PathVariable("prescriptionId") long prescriptionId){
		
		return new ResponseEntity<Prescription>(prescriptionService.getPrescriptionById(prescriptionId),HttpStatus.OK);
		
	}
	
}
