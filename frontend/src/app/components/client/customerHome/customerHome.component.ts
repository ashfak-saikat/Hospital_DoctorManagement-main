import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../service/hospital.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerHome',
  templateUrl: './customerHome.component.html',
  styleUrls: ['./customerHome.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  url: string = "/customer/home";
  userName: string = '';
  constructor(
    private service: HospitalService,
    private router:Router
  ) {
    if (this.service.getClientAuthorization() !== null) {
      this.userName = this.service.getClientAuthorization();
    }

  //  this.getDoctorList();
   // this.service.isDoctorLoginPresent();
  }

  ngOnInit(): void {
  }

  routerToLink(link: string): void {
    if (link === '/patient/logout') {
      this.service.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }
}
