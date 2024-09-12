import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Doctor } from '../model/doctor.modal';
import { HospitalService } from '../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctorsList',
  templateUrl: './doctorsList.component.html',
  styleUrls: ['./doctorsList.component.scss']
})
export class DoctorsListComponent implements OnInit {

  doctor: Doctor[] = [];
  doctorId: any;
  constructor(
    private route: ActivatedRoute,
    private service: HospitalService,
    private router: Router
  ) {
    this.getAllDoctorList();
  }

  ngOnInit(): void {
  }

  getAllDoctorList(): void {
    this.service.getDoctorList().pipe(take(1)).subscribe((res) => {
      if (!!res && res.length > 0) {
        this.doctor = res;
      }
    }, err => {
      console.log('Error occured while get doctor list');
    })
  }

  addAppointment(doctor: Doctor): void {
    this.router.navigate(['/patient/create-appointment'], {
      queryParams: {
        id: doctor?.doctorId
      }
    });
  }

  viewDoctor(doctor: Doctor): void {
    this.router.navigate(['/doctors/doctor-profile'], {
      queryParams: {
        id: doctor?.doctorId
      }
    });
  }
}

