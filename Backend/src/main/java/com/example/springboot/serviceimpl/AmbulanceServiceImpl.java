package com.example.springboot.serviceimpl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.springboot.exception.AppointmentNotValidException;
import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Admin;
import com.example.springboot.model.Ambulance;
import com.example.springboot.model.BookingAppointment;
import com.example.springboot.model.LabTest;
import com.example.springboot.model.Patient;
import com.example.springboot.repository.AmbulanceRepository;
import com.example.springboot.repository.LabTestRepository;
import com.example.springboot.repository.PatientRepository;
import com.example.springboot.service.AmbulanceService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AmbulanceServiceImpl implements AmbulanceService{
	
	@Autowired
	public AmbulanceRepository ambulanceRepository;

	@Override
	public Ambulance saveAmbulance(Ambulance ambulance) {
		System.out.println("Ambulance booking Succesfull "+ambulance);
		return ambulanceRepository.save(ambulance);
	}

	@Override
	public Ambulance getAmbulanceById(long ambulanceId) {
		return ambulanceRepository.findById(ambulanceId).orElseThrow(()->new ResourceNotFoundException("AmbulanceId","ambulanceId",ambulanceId));
	}

	@Override
	public List<Ambulance> getAllAmbulance() {

		return ambulanceRepository.findAll();
	}

	@Override
	public Ambulance updateAmbulance(Ambulance ambulance, long ambulanceId) {
		return null;
	}
		
	@Override
	public List<Ambulance> getAmbulanceByPatientId(long patientId) {
		return null;
		//return ambulanceRepository.getAmbulanceByPatientId(patientId);
	}
	
	@Override
	public Ambulance loginAmbulance(Ambulance ambulance) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'loginAmbulance'");
	}
	@Override
	public Ambulance findByPatientId(long patientId) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'findByPatientId'");
	}
	@Override
	public Ambulance findAmbulanceByPatientId(long patientId) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'findAmbulanceByPatientId'");
	}

	@Override
	public BookingAppointment getAppointmentById(long appointmentId) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getAppointmentById'");
	}

	@Override
	public List<Ambulance> getAmbulanceList(long patientId) {
		
		return PagingAndSortingRepositoryRepository.findBy(patientId);
	}
}
