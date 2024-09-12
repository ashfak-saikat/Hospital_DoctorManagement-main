import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Rooms } from '../../model/rooms.model';
import { HospitalService } from '../../service/hospital.service';

@Component({
  selector: 'app-roomsList',
  templateUrl: './roomsList.component.html',
  styleUrls: ['./roomsList.component.scss']
})
export class RoomsListComponent implements OnInit {

  url: string = "/rooms";
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
    this.route.navigate(['/customer/rooms-detail/'], {
      queryParams: {
        id: rooms?.roomsId
      }
    });
  }

  routerToLink(link: string): void {
    this.route.navigate(['/rooms'], {
    });
  }

}
