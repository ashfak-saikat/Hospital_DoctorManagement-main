import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LabTest } from '../../../model/labTest.model';
import { HospitalService } from '../../../service/hospital.service';

@Component({
  selector: 'app-labTestList',
  templateUrl: './labTestList.component.html',
  styleUrls: ['./labTestList.component.scss']
})
export class LabTestListComponent implements OnInit {

  labTest: LabTest[] = [];
  constructor(
    private service: HospitalService,
    private route: Router
  ) {
    this.getAllLabTests();
  }

  ngOnInit(): void {
  }

  getAllLabTests(): void {
    this.service.getAllLabTests().pipe(take(1)).subscribe((res) => {

      if (!!res && res.length > 0) {
        this.labTest = res;
      }
    }, err => {
      console.log('Error occured while get doctor list');
    })
  }

  onDelete(labTest: LabTest): void  {
    this.service.deleteDoctorById(labTest?.labTestId).pipe(take(1)).subscribe((res) => {
      if(!!res) {
        alert("Lab Test deleted successfully");
        this.getAllLabTests();
        this.route.navigate(['/admin/labTestList']);
      }
    });
  }

  onUpdate(labTest: LabTest): void  {
    this.route.navigate(['/admin/lab-test-update'], {
      queryParams: {
        id: labTest?.labTestId
      }
    });
  }

}
