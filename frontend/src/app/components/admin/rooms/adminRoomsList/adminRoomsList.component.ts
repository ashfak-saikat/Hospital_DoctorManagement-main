import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Rooms } from '../../../model/rooms.model';
import { HospitalService } from '../../../service/hospital.service';

@Component({
  selector: 'app-adminRoomsList',
  templateUrl: './adminRoomsList.component.html',
  styleUrls: ['./adminRoomsList.component.scss']
})
export class AdminRoomsListComponent implements OnInit {

  rooms: Rooms[] = [];
  constructor(
    private service: HospitalService,
    private route: Router
  ) {
    this.getAllRooms();
  }

  ngOnInit(): void {
  }

  getAllRooms(): void {
    this.service.getAllRooms().pipe(take(1)).subscribe((res) => {

      if (!!res && res.length > 0) {
        this.rooms = res;
      }
    }, err => {
      console.log('Error occured while get doctor list');
    })
  }

  viewDetail(rooms: Rooms): void {
    this.route.navigate(['/admin/rooms-detail/'], {
      queryParams: {
        id: rooms?.roomsId
      }
    });
  }

}
