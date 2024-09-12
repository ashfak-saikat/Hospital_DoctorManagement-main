import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Appointment } from '../../../model/appointment.model';
import { HospitalService } from '../../../service/hospital.service';

@Component({
  selector: 'app-labTest',
  templateUrl: './labTest.component.html',
  styleUrls: ['./labTest.component.scss']
})
export class LabTestComponent implements OnInit {
  customer: any = {};
  test_name: string = "";
  status: string = "";
  description: string = "";
  test_time_start: string = "";
  test_time_end: string = "";
  delivery_time: string = "";
  preparation: string = "";
  test_sku: string = "";
  price: string = "";
  adminId: number = 0;
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private hService:HospitalService
  ) {
  }

  ngOnInit(): void {
  }

  createLabTest(): void {
     /* if (this.test_name === '' || this.test_name.length < 3) {
        alert('Category name must contain atleast 3 characters');
        return;
      }
      if (this.status === '') {
        alert('Please select status');
        return;
      }
*/
    const body = {
      adminId: this.hService.getAdminAuthorization(),
      test_name: this.test_name,
      status: this.status,
      description: this.description,
      test_time_start: this.test_time_start,
      test_time_end: this.test_time_end,
      delivery_time: this.delivery_time,
      preparation: this.preparation,
      price: this.price,
      test_sku: this.test_sku
    };

    console.log('body');
    this.hService.createLabTest(body).pipe(take(1)).subscribe((res) => {
      alert("Lab test created successfully");
      if (!!res && res?.appointmentId) {
        this.router.navigate(['/admin/lab-test-list']);
      }
    }, error => {
       alert("Error occured while creating Lab test");
     })
  }
}
