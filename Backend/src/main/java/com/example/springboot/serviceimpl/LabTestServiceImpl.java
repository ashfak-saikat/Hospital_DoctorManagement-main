package com.example.springboot.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Doctor;
import com.example.springboot.model.LabTest;
import com.example.springboot.repository.LabTestRepository;
import com.example.springboot.service.LabTestService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LabTestServiceImpl implements LabTestService{

	@Autowired
	public LabTestRepository LabTestRepository;
	
	@Override
	public LabTest saveLabTest(LabTest LabTest) {
		System.out.println("LabTest Created Succesfull "+LabTest);
		return LabTestRepository.save(LabTest);
	}

	@Override
	public LabTest loginLabTest(LabTest LabTest) {
		return null;
	}

	@Override
	public List<LabTest> getAllLabTests() {
		
		return LabTestRepository.findAll();
	}

	@Override
	public LabTest getLabTestById(long labTestId) {
		return LabTestRepository.findById(labTestId).orElseThrow(()->new ResourceNotFoundException("LabTest","labTestId",labTestId));
	}

	@Override
	public void deleteLabTest(long labTestId) {
		LabTestRepository.findById(labTestId).orElseThrow(()->new ResourceNotFoundException("LabTest","labTestId",labTestId));
		LabTestRepository.deleteById(labTestId);
		
	}

	@Override
	public LabTest updateLabTest(LabTest labTest, long labTestId) {
		LabTest newDetails = LabTestRepository.findById(labTestId).orElseThrow(()->new ResourceNotFoundException("LabTest","LabTestId",labTestId));
		
		/*newDetails.setAddress(labTest.getAddress());
		newDetails.setAge(labTest.getAge());
		newDetails.setContactNumber(labTest.getContactNumber());
		newDetails.setDoctorEmailId(labTest.getDoctorEmailId());
		newDetails.setFirstName(labTest.getFirstName());
		newDetails.setGender(labTest.getGender());
		newDetails.setLastName(labTest.getLastName());
		newDetails.setSpecialization(labTest.getSpecialization());*/
		
		LabTestRepository.save(newDetails);
		
		
		
		return newDetails;
	}

}
