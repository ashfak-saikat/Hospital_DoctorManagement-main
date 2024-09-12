package com.example.springboot.controller;

 

import com.example.springboot.model.Prescription;
import com.example.springboot.repository.PrescriptionRepository;
import com.example.springboot.utils.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import com.example.springboot.service.PrescriptionService;

import javax.persistence.Tuple;
import javax.persistence.TupleElement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins="http://localhost:4200")
@RestController
//http://localhost:8088/api/Prescription
@RequestMapping("/api/Prescription")
public class PrescriptionController {

	@Autowired
	private PrescriptionService prescriptionService;

	//delete by id
	@DeleteMapping("{PriscriptionId}")

	public ResponseEntity<Boolean> deletePrescription(@PathVariable("prescriptionId") long prescriptionId) {
		prescriptionService.deletePrescription(prescriptionId);
		boolean flag = true;
		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
	}

	@GetMapping("/prescription/{id}")
	public Map<String, Object> getPrescriptionDetails(@PathVariable Long id) {
		Tuple prescriptionDetails = prescriptionService.getPrescriptionDetails(id);
		return CommonUtil.tupleToMap(prescriptionDetails);

	}

}