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
import com.example.springboot.model.Rooms;
import com.example.springboot.model.Ambulance;
import com.example.springboot.model.LabTest;
import com.example.springboot.model.Payment;
import com.example.springboot.model.Prescription;
import com.example.springboot.model.Rooms;
import com.example.springboot.service.RoomsService;
import com.example.springboot.service.PaymentService;
import com.example.springboot.service.PrescriptionService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
//http://localhost:8088/api/rooms
@RequestMapping("/api/rooms")
public class RoomsController {
	
	@Autowired
	public RoomsService roomsService;
	
	@Autowired
	public PrescriptionService prescriptionService;
	
	@Autowired
	public PaymentService paymentService;
	
	//Registration
	@PostMapping("/rooms_booking")
	public ResponseEntity<Rooms> saveRooms(@RequestBody Rooms rooms){
		System.out.println("Patient Registration Succesfull "+rooms);
		return new ResponseEntity<Rooms>(roomsService.saveRooms(rooms),HttpStatus.CREATED);
	}

	@GetMapping("/all_rooms")
	public List<Rooms> getAllRooms(){
		return roomsService.getAllRooms() ;
	}
	
	//get ambulance By Id
	@GetMapping("/roomsById/{roomsId}")
	public ResponseEntity<Rooms> getRoomsById(@PathVariable("roomsId") long roomsId){
		
		return new ResponseEntity<Rooms>(roomsService.getRoomsById(roomsId),HttpStatus.OK);
	}

	@GetMapping("/prescription")
	public List<Prescription> getAllPrescriptions(){
		return prescriptionService.getAllPrescriptions();
	}
	
	@GetMapping("/prescription/{precriptionId}")
	public ResponseEntity<Prescription> getPrescriptionById(@PathVariable("prescriptionId") long prescriptionId){
		
		return new ResponseEntity<Prescription>(prescriptionService.getPrescriptionById(prescriptionId),HttpStatus.OK);
		
	}
	
	@GetMapping
	public List<Payment> getAllPayments(){
		return paymentService.getAllPayments();
	}
}
