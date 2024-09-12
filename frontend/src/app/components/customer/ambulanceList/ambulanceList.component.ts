import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Ambulance } from '../../model/ambulance.model';
import { HospitalService } from '../../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ambulanceList',
  templateUrl: './ambulanceList.component.html',
  styleUrls: ['./ambulanceList.component.scss']
})
export class AmbulanceListComponent implements OnInit {

  ambulance: Ambulance[] = [];
  ambulanceId: any;
  url: string = "/ambulance";
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
    this.router.navigate(['/customer/ambulance-detail/'], {
      queryParams: {
        id: ambulance?.ambulanceId
      }
    });
  }

  routerToLink(link: string): void {
    this.router.navigate(['/ambulance'], {
    });
  }
}

