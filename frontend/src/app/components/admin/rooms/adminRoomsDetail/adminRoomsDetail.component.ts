import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Rooms } from '../../../model/rooms.model';
import { HospitalService } from '../../../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminRoomsDetail',
  templateUrl: './adminRoomsDetail.component.html',
  styleUrls: ['./adminRoomsDetail.component.scss']
})
export class AdminRoomsDetailComponent implements OnInit {
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
        this.ac_ward =res?.ac_ward;
        this.non_ac_ward =res?.non_ac_ward;
        this.non_ac_cabin =res?.non_ac_cabin;
        this.ac_cabin=res?.ac_cabin;
        this.ccu_room= res?.ccu_room;
        this.icu_room= res?.icu_room;
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

