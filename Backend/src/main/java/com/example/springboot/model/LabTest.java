package com.example.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

 
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="lab_test_table")
@Data
@SequenceGenerator(name="lab_test",sequenceName="lab_test_gene",initialValue=2000)

@NoArgsConstructor

public class LabTest {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="lab_test")
	@Column(name="lab_test_id")
	private long labTestId;
	
	@Column(name="test_name")
	@NotEmpty
	@Size(min=3,message="Test name should contain atleast 3 letters in it")
	public String test_name;
	
	@Column(name="status")
	@NotEmpty                                                              
	public String status;

	@Column(name="description")
	public String description;
		
	@Column(name="test_time_start")
	@NotNull
	public String test_time_start;
	
	@Column(name="test_time_end")
	@NotNull
	public String test_time_end;
	
	@Column(name="delivery_time")
	@NotNull
	public String delivery_time;

	@Column(name="test_sku")
	@NotEmpty
	public String test_sku;
	
	@Column(name="admin_id")
	@NotEmpty
    public long adminId;
	 
	@Column(name="preparation")
    public String preparation;

	@Column(name="price")
    public String price;
	
}
