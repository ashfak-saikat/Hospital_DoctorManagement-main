package com.example.springboot.model;

import java.util.Date;

 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
 
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
@Entity
@Table(name="rooms_table")
//@Data
////@Builder
//@AllArgsConstructor
//@NoArgsConstructor
@SequenceGenerator(name="rooms",sequenceName="rooms_gene",initialValue=3000)
public class Rooms {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="rooms")
	@Column(name="rooms_id")
	private long roomsId;

	@Column(name="non_ac_ward")
	public String non_ac_ward;

	@Column(name="ac_ward")
	public String ac_ward;
	
	@Column(name="ac_cabin")
	public String ac_cabin;
	
	@Column(name="icu_room")
	public String icu_room;
	
	@Column(name="ccu_room")
	public String ccu_room;
	
	@Column(name="schedule")
	public String schedule;
	
	@Column(name="contact_name")
	public String contact_name;
	
	@Column(name="house_no")
	public String house_no;
	
	@Column(name="road_no")
	public String road_no;
	
	@Column(name="block_no")
	public String block_no;
	
	@Column(name="sector_no")
	public String sector_no;
	
	@Column(name="contact_phone")
	public String contact_phone;
	
	@Column(name="area")
    public String area;
	
	@Column(name="patient_id")
	public String patient_id;

	@Column(name="additional_notes")
    public String additional_notes;
	 
	public long getRoomsId() {
		return this.roomsId;
	}
}