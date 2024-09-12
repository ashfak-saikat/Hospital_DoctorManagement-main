import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../service/hospital.service';

@Component({
  selector: 'app-customerHome',
  templateUrl: './customerHome.component.html',
  styleUrls: ['./customerHome.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  userName: string = '';
  constructor(
    private service: HospitalService
  ) {
    if (this.service.getClientAuthorization() !== null) {
      this.userName = this.service.getClientAuthorization();
    }

  //  this.getDoctorList();
   // this.service.isDoctorLoginPresent();
  }

  ngOnInit(): void {
  }

}
