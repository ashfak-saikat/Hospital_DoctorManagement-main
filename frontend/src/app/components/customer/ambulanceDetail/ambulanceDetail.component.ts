import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Ambulance } from '../../model/ambulance.model';
import { HospitalService } from '../../service/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ambulanceDetail',
  templateUrl: './ambulanceDetail.component.html',
  styleUrls: ['./ambulanceDetail.component.scss']
})
export class AmbulanceDetailComponent implements OnInit {


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
  ambulanceId: string = '';
  constructor(
    private route: ActivatedRoute,
    private service: HospitalService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res: any) => {
      if (res?.params?.id) {
      this.ambulanceId = res?.params?.id;
      }
    });
    this.getAmbulanceById(this.ambulanceId);
  }

  getAmbulanceById(id: any): void {
    this.service.getAmbulanceById(id).pipe(take(1)).subscribe((res: Ambulance) => {

      if (!!res && res?.ambulanceId) {
        this.emergency_ambulance = res?.emergency_ambulance;
        this.life_support_ambulance = res?.life_support_ambulance;
        this.freezing_ambulance = res?.freezing_ambulance;
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

  addAppointment(ambulance: Ambulance): void {
    this.router.navigate(['/patient/create-appointment'], {
      queryParams: {
        id: this.ambulanceId
      }
    });
  }
}

