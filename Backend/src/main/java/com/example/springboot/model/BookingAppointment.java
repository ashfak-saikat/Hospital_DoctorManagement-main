package com.example.springboot.model;

 

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Objects;

@Entity
@Table(name="booking_appointment")
@Data
@SequenceGenerator( name="booking",sequenceName="booking_gene",initialValue=5000)
public class BookingAppointment {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="booking")
	@Column(name="appointment_id")
	private long appointmentId;
	
	@Column(name="patient_id")
	private long patientId;
	
	@Column(name="appointment_date") 
	private String appointmentDate; 
	
	@Column(name="appointment_time")
	private String appointmentTime;
	
	@Column(name="am_pm")
	@Size(max=2)
	private String meridiem;

	@Column(name="patient_name") 
	private String patient_name; 

	@Column(name="patient_email") 
	private String patient_email; 

	@Column(name="age") 
	private String age; 

	@Column(name="patient_phone") 
	private String patient_phone; 

	@Column(name="patient_address") 
	private String patient_address; 

	@Column(name="medicalBackground") 
	private String medicalBackground; 

	@Column(name="gender") 
	private String gender; 

	@ManyToOne( cascade=CascadeType.MERGE) 
	@JoinColumn(name="doctor_id")
	
	@OnDelete(action=OnDeleteAction.CASCADE) 
	private Doctor doctor;

	public long getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(long appointmentId) {
		this.appointmentId = appointmentId;
	}

	public long getPatientId() {

		return patientId;
	}

	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}

	public String getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(String appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getMeridiem() {
		return meridiem;
	}

	public void setMeridiem(String meridiem) {
		this.meridiem = meridiem;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "BookingAppointment [appointmentId=" + appointmentId + ", patientId=" + patientId + ", appointmentDate="
				+ appointmentDate + ", appointmentTime=" + appointmentTime + ", meridiem=" + meridiem + ", doctor="
				+ doctor + "]";
	}
	
	
	
}
