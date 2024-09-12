import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Ambulance } from '../../../model/ambulance.model';
import { HospitalService } from '../../../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminAambulanceList',
  templateUrl: './adminAmbulanceList.component.html',
  styleUrls: ['./adminAmbulanceList.component.scss']
})
export class AdminAmbulanceListComponent implements OnInit {

  ambulance: Ambulance[] = [];
  ambulanceId: any;
  constructor(
    private route: ActivatedRoute,
    private service: HospitalService,
    private router: Router
  ) {
    this.getAllAmbulanceList();
  }

  ngOnInit(): void {
  }

  getAllAmbulanceList(): void {

    const cid = this.service.getClientAuthorization();
    this.service.getAllAmbulance().pipe(take(1)).subscribe((res) => {
      if (!!res && res.length > 0) {
        this.ambulance = res;
      }
    }, err => {
      console.log('Error occured while get doctor list');
    })
  }

  viewDetail(ambulance: Ambulance): void {
    this.router.navigate(['/admin/ambulance-detail/'], {
      queryParams: {
        id: ambulance?.ambulanceId
      }
    });
  }
}

