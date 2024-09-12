package com.example.springboot.service;

import java.util.List;

import com.example.springboot.model.Ambulance;
import com.example.springboot.model.BookingAppointment;
import com.example.springboot.model.LabTest;

public interface AmbulanceService {

	Ambulance saveAmbulance(Ambulance ambulance);

	Ambulance loginAmbulance(Ambulance ambulance);

	Ambulance updateAmbulance(Ambulance ambulance, long ambulanceId);

	Ambulance findAmbulanceByPatientId(long patientId);
	
	Ambulance findByPatientId(long patientId);
	
	List<Ambulance> getAmbulanceByPatientId(long patientId);
	
	List <Ambulance> getAllAmbulance();

	Ambulance getAmbulanceById(long ambulanceId);

	BookingAppointment getAppointmentById(long appointmentId);
	
	List<Ambulance> getAmbulanceList(long patientId);
	
}
