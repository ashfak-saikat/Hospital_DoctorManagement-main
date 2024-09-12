package com.example.springboot.model;

import java.util.Date;

 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
 
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.text.ParseException;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;

@Entity
@Table(name="ambulance_table")
//@Data
////@Builder
//@AllArgsConstructor
//@NoArgsConstructor
@SequenceGenerator(name="ambulance",sequenceName="ambulance_gene",initialValue=3000)
public class Ambulance {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="ambulance")
	@Column(name="ambulance_id")
	private long ambulanceId;
	
	@Column(name="emergency_ambulance")
	@NotEmpty
	@Size(min=1,message="please enter a valid number")
	public String emergency_ambulance;

	@Column(name="life_support_ambulance")
	@NotEmpty
	@Size(min=5,message="please enter a valid number")
	public String life_support_ambulance;

	@Column(name="freezing_ambulance")
	@NotEmpty
	@Size(min=1,message="please enter a valid number")
	public String freezing_ambulance;

	@Column(name="schedule")
	@NotNull
	public String schedule;
	
	@Column(name="contact_name")
	@NotEmpty
	@Size(min=4,message="Contact name should contain atleast 4 letters in it")
	public String contact_name;
	
	@Column(name="house_no")
	@NotEmpty
	@Size(min=3,message="please enter house no.")
	public String house_no;
	
	@Column(name="road_no")
	@NotEmpty
	@Size(min=3,message="please enter road no.")
	public String road_no;
	
	@Column(name="block_no")
	@NotEmpty
	@Size(min=3,message="please enter block no.")
	public String block_no;
	
	@Column(name="sector_no")
	@NotEmpty
	@Size(min=3,message="please enter sector no.")
	public String sector_no;
	
	@Column(name="contact_phone")
	@NotEmpty
	@Size(min=5,message="please enter a valid contact number")
	public String contact_phone;
	
	@Column(name="area")
	@NotEmpty
	@Size(min=3 , message="area must contain atleast 3 characters")
    public String area;
	
	@Column(name="patient_id")
	@NotEmpty
	@Size(min=1,message="please enter patient id")
	public String patient_id;

	@Column(name="additional_notes")
    public String additional_notes;

	private String areadditionalNotes;
	 
	public long getAmbulanceId() {
		return this.ambulanceId;
	}
	
	public String getAdditionalNotes() {
		return areadditionalNotes;
	}
	

	public void setareadditionalNotes(String areadditionalNotes) {
		this.areadditionalNotes = areadditionalNotes;
	}
	
	/*@Column(name="payment_status")
	 
	private String paymentStatus;

	public long getPatientId() {
		return patientId;
	}

	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPatientEmailId() {
		return patientEmailId;
	}

	public void setPatientEmailId(String patientEmailId) {
		this.patientEmailId = patientEmailId;
	}

	public String getPatientPassword() {
		return patientPassword;
	}

	public void setPatientPassword(String patientPassword) {
		this.patientPassword = patientPassword;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getMedicalBackground() {
		return medicalBackground;
	}

	public void setMedicalBackground(String medicalBackground) {
		this.medicalBackground = medicalBackground;
	}

	public Date getAdmitDate() {
		return admitDate;
	}

	public void setAdmitDate(Date admitDate) {
		this.admitDate = admitDate;
	}

	public Date getDischargeDate() {
		return dischargeDate;
	}

	public void setDischargeDate(Date dischargeDate) {
		this.dischargeDate = dischargeDate;
	}

	public long getRoomId() {
		return roomId;
	}

	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}

	public long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", patientEmailId=" + patientEmailId + ", patientPassword=" + patientPassword + ", age=" + age
				+ ", gender=" + gender + ", contactNumber=" + contactNumber + ", address=" + address + ", bloodGroup="
				+ bloodGroup + ", medicalBackground=" + medicalBackground + ", admitDate=" + admitDate
				+ ", dischargeDate=" + dischargeDate + ", roomId=" + roomId + ", doctorId=" + doctorId
				+ ", paymentStatus=" + paymentStatus + "]";
	}
	
	*/
}