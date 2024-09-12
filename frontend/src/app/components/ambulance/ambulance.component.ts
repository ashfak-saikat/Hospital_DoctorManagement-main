import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { HospitalService } from '../service/hospital.service';


@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.scss']
})
export class AmbulanceComponent implements OnInit {


  emergency_ambulance: string = "";
  life_support_ambulance: string = "";
  freezing_ambulance: string = "";
  schedule: string = "";
  contact_name: string = "";
  contact_phone: string = "";
  house_no: string = "";
  road_no: string = "";
  block_no: string = "";
  sector_no: string = "";
  area: string = '';
  additional_notes: string = '';
  bloodGroup: string = '';
  medicalBackground: string = '';

  constructor(

    private router: Router,
    private datePipe: DatePipe,
    private service:HospitalService

  ) { }

 ngOnInit(): void {
  //  alert(cid);
  }

ambulance_booking(): void {
   /* if (this.firstName === '' || this.firstName.length < 3) {
      alert('FirstName must contain atleast 3 characters');
      return;
    }
    if (this.schedule === '' || this.lastName.length < 3) {
      alert('LastName must contain atleast 3 characters');
      return;
    }

    if (this.phone === '' || this.phone.length < 11) {
      alert('Phone must contain atleast 10 characters');
      return;
    }*/
    // if (this.district === '' || this.district.length < 3) {
    //   alert('District must contain atleast 3 characters');
    //   return;
    // }
    // if (this.state === '' || this.state.length < 3) {
    //   alert('State must contain atleast 3 characters');
    //   return;
    // }
    // if (this.zipcode === '' || this.zipcode.length < 6) {
    //   alert('Zipcode must contain atleast 6 characters');
    //   return;
    // }

    const body: any = {
      emergency_ambulance : this.emergency_ambulance,
      life_support_ambulance : this.life_support_ambulance,
      freezing_ambulance : this.freezing_ambulance,
      schedule :this.schedule,
      contact_name :this.contact_name,
      contact_phone:this.contact_phone,
      house_no: this.house_no,
      road_no: this.road_no,
      block_no: this.block_no,
      sector_no: this.sector_no,
      area: this.area,
      additional_notes: this.additional_notes,
      patient_id: this.service.getClientAuthorization()
    }

    console.log("=======>",body);
    this.service.ambulance_booking(body).pipe(take(1)).subscribe((res :any) => {
      alert("Ambulance Booking sucessful");
      this.router.navigate(["/customer/home"]);
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong!!pl try again");
    })

  }

  routerToLink(link: string): void {
    if (link === '/patient/logout') {
      this.service.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }
}
