import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HospitalService } from '../../components/service/hospital.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  isDoctorLoggedIn: boolean = false;
  url: string = '/';
  constructor(
    private hervice:HospitalService,
    private route: Router
  ) {
    this.route.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (this.hervice.getClientAuthorization() !== null) {
        setTimeout(() => {
          this.isLoggedIn = true;
          this.isAdminLoggedIn = false;
          this.isDoctorLoggedIn = false;
        }, 100);
      } else if (this.hervice.getDoctorAuthorization() !== null) {
        setTimeout(() => {
          this.isDoctorLoggedIn = true;
          this.isAdminLoggedIn = false;
          this.isLoggedIn = false;
        }, 100);
      } else  {
        if (this.hervice.getAdminAuthorization() !== null) {
          setTimeout(() => {
            this.isAdminLoggedIn = true;
            this.isLoggedIn = false;
            this.isDoctorLoggedIn = false;
          }, 100);

        } {
          setTimeout(() => {
            this.isLoggedIn = false;
            this.isAdminLoggedIn = false;
            this.isDoctorLoggedIn = false;
          }, 1);
        }
      }
    });
  }


  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  gotourl(url: string): void {
    this.route.navigate(["/"+url]);
  }

}
