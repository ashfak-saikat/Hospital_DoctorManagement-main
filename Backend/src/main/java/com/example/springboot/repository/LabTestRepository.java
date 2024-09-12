package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springboot.model.LabTest;

public interface LabTestRepository extends JpaRepository<LabTest,Long> {
	
	//Optional<LabTest> findByLabTestEmailIdAndLabTestPassword(String emailId,String password);
	
}
