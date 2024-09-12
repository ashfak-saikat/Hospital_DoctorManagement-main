package com.example.springboot;

import com.example.springboot.repository.PrescriptionRepository;
import org.apache.catalina.core.ApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import javax.persistence.Tuple;

@SpringBootApplication
public class HospitalManagementSystemApplication {

	public static void main(String[] args) {
	ConfigurableApplicationContext kamal= SpringApplication.run(HospitalManagementSystemApplication.class, args);


		System.out.println("Hospital is working");
	}

}
