package com.example.springboot.service;

import java.util.List;

import com.example.springboot.model.Doctor;
import com.example.springboot.model.LabTest;

public interface LabTestService {

	LabTest saveLabTest(LabTest labTest);

	LabTest loginLabTest(LabTest labTest);

	List<LabTest> getAllLabTests();

	LabTest getLabTestById(long labTestId);

	void deleteLabTest(long labTestId);

	LabTest updateLabTest(LabTest labTest, long labTestId);


}
