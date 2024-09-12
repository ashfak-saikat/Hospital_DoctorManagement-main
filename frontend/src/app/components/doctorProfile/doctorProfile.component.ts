import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Doctor } from '../model/doctor.modal';
import { HospitalService } from '../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctorProfile',
  templateUrl: './doctorProfile.component.html',
  styleUrls: ['./doctorProfile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  doctor: Doctor[] = [];
  doctorId: any;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";
  gender: string = "male";
  age: string = '';
  address: string = '';
  specialization: string = '';
  constructor(
    private route: ActivatedRoute,
    private service: HospitalService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res: any) => {
      if (res?.params?.id) {
      this.doctorId = res?.params?.id;
      }
    });
    this.getDoctorById(this.doctorId);
  }

  getDoctorById(id: any): void {
    this.service.getDoctorById(id).pipe(take(1)).subscribe((res: Doctor) => {

      if (!!res && res?.doctorId) {
        this.firstName = res?.firstName;
        this.lastName= res?.lastName;
        this.email = res?.doctorEmailId;
        this.phone = res?.contactNumber;
        this.gender = res?.gender;
        this.age = res?.age.toString();
        this.address = res?.address;
        this.specialization = res?.specialization;
      }
    });
  }

  addAppointment(doctor: Doctor): void {
    this.router.navigate(['/patient/create-appointment'], {
      queryParams: {
        id: this.doctorId
      }
    });
  }
}

