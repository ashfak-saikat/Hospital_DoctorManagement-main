import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LabTest } from '../../model/labTest.model';
import { HospitalService } from '../../service/hospital.service';

@Component({
  selector: 'app-labTestListFront',
  templateUrl: './labTestListFront.component.html',
  styleUrls: ['./labTestListFront.component.scss']
})
export class LabTestListFrontComponent implements OnInit {

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

  viewDetail(labTest: LabTest): void {
    this.route.navigate(['/lab-tests/view-detail'], {
      queryParams: {
        id: labTest?.labTestId
      }
    });
  }

  addToCart(labTest: LabTest): void {
    this.route.navigate(['/lab-tests/view-detail'], {
      queryParams: {
        id: labTest?.labTestId
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
