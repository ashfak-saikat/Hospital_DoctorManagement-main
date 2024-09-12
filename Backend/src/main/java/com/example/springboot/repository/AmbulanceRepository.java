package com.example.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.model.Ambulance;

public interface AmbulanceRepository extends JpaRepository<Ambulance,Long> {
   //public List<Ambulance> findByPatientId(long patientId);
   // public List<Ambulance> getAmbulanceByPatientId(long patientId);

}
 