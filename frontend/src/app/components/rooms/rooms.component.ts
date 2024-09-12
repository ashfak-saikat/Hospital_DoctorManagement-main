import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  non_ac_ward: string = "";
  ac_ward: string = "";
  ac_cabin: string = "";
  schedule: string = "";
  ccu_room: string = "";
  icu_room: string = "";
  non_ac_cabin: string = "";
  contact_name: string = "";
  contact_phone: string = "";
  house_no: string = "";
  road_no: string = "";
  block_no: string = "";
  sector_no: string = "";
  area: string = '';
  additional_notes: string = '';

  constructor(

    private router: Router,
    private datePipe: DatePipe,
    private service:HospitalService

  ) { }

 ngOnInit(): void {
  }
  /*  setDOB(ev: any): void {
    const date: any = this.datePipe.transform(ev?.value, 'yyyy-MM-dd');
    this.dob = date;
  }
*/

rooms_booking(): void {
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
      non_ac_ward : this.non_ac_ward,
      ac_ward : this.ac_ward,
      ac_cabin : this.ac_cabin,
      schedule : this.schedule,
      ccu_room : this.ccu_room,
      icu_room : this.icu_room,
      non_ac_cabin : this.non_ac_cabin,
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
    this.service.rooms_booking(body).pipe(take(1)).subscribe((res :any) => {
      alert("Rooms Booking sucessful");
      this.router.navigate(["/rooms"]);
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong!!pl try again");
    })

  }

}
