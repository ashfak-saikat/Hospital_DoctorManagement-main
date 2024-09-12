import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Doctor } from '../../model/doctor.modal';
import { HospitalService } from '../../service/hospital.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  doctor: Doctor[] = [];
  customer: any = {};
  firstName: string = "";
  lastName: string = "";
  appointmentDate: string = "";
  appointmentTime: string = "";
  patient_name: string = "";
  doctorId: number = 0;
  patient_email: string = "";
  age: string = "";
  patient_phone: string = "";
  patient_address: string = "";
  medicalBackground: string = "";
  gender: string = "";
  constructor(
    private hService: HospitalService,
    private datePipe: DatePipe,
    private router: Router,
    private activtedRouter: ActivatedRoute
  ) {
    this.getCustomerDetail();
    this.getDoctorList();
  }

  ngOnInit(): void {

    this.activtedRouter.queryParamMap.subscribe((res: any) => {
      if (res?.params?.id) {
      this.doctorId = res?.params?.id;
      }
    });

    this.hService.getDoctorById(this.doctorId).pipe(take(1)).subscribe((res: Doctor) => {
      if (!!res && res?.doctorId) {
        this.firstName = res?.firstName;
        this.lastName = res?.lastName;
      }
    });
  }

  getCustomerDetail(): void {
    const cid = this.hService.getClientAuthorization();
    this.hService.getCustomerById(cid).pipe(take(1)).subscribe(
      (res: any) => {
        if (!!res && res?.patientId) {
          this.customer = res;
        }
      }, err => {
        console.log("Err");
      }
    )
  }

  getDoctorList(): void {

    this.hService.getDoctorList().pipe(take(1)).subscribe(
      (res: Doctor[]) => {
       if (!!res && Array.isArray(res) && res.length > 0) {
         this.doctor = res;
         this.doctorId = res[0]?.doctorId;
       }
      }, err => {
        console.log("Err");
      }
    )
  }

  setDOB(ev: any): void {
    const date: any = this.datePipe.transform(ev?.value, 'yyyy-MM-dd');
    this.appointmentDate = date;
  }

  createAppointment(): void {
    const body = {
      patientId: this.customer?.patientId,
      appointmentDate: this.appointmentDate,
      appointmentTime: this.appointmentTime,
      patient_name: this.patient_name,
      patient_email: this.patient_email,
      age: this.age,
      patient_phone: this.patient_phone,
      patient_address: this.patient_address,
      medicalBackground: this.medicalBackground,
      gender: this.gender,
      doctor: this.doctor.find((item: Doctor) => item?.doctorId.toString() === this.doctorId.toString())
    };

    this.hService.createAppointment(this.doctorId, this.customer?.patientId, body).pipe(take(1)).subscribe((res) => {
      alert("Appointment created successfully");
      if (!!res && res?.appointmentId) {
        this.router.navigate(['/patient/my-appointment']);
      }
    }, error => {
       alert("Error occured while create appointment");
     })
  }

}
