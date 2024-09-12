package com.example.springboot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

 
import com.example.springboot.model.Rooms;

public interface RoomsRepository extends JpaRepository<Rooms,Long> {

	/*Optional<Ambulance> findByAmbulanceEmailIdAndAmbulancePassword(String EmailId,String Password);
	public List<Ambulance> findAmbulanceByDoctorId(long doctorId);*/
	

}
 