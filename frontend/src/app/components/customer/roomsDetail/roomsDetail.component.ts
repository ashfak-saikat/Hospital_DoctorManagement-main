import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Rooms } from '../../model/rooms.model';
import { HospitalService } from '../../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roomsDetail',
  templateUrl: './roomsDetail.component.html',
  styleUrls: ['./roomsDetail.component.scss']
})
export class RoomsDetailComponent implements OnInit {


  emergency_rooms: string = "";
  life_support_rooms: string = "";
  freezing_rooms: string = "";
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
  roomsId: string = '';
  constructor(
    private route: ActivatedRoute,
    private service: HospitalService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res: any) => {
      if (res?.params?.id) {
      this.roomsId = res?.params?.id;
      }
    });
    this.getroomsById(this.roomsId);
  }

  getroomsById(id: any): void {
    this.service.getRoomsById(id).pipe(take(1)).subscribe((res: Rooms) => {

      if (!!res && res?.roomsId) {
        this.schedule =res?.schedule;
        this.contact_name =res?.contact_name;
        this.contact_phone=res?.contact_phone;
        this.house_no= res?.house_no;
        this.road_no= res?.road_no;
        this.block_no= res?.block_no;
        this.sector_no= res?.sector_no;
        this.area= res?.area;
        this.additional_notes= res?.additional_notes;
      }
    });
  }

  addAppointment(rooms: Rooms): void {
    this.router.navigate(['/patient/create-appointment'], {
      queryParams: {
        id: this.roomsId
      }
    });
  }
}

