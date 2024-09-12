import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { LabTest } from '../../../model/labTest.model';
import { HospitalService } from '../../../service/hospital.service';

@Component({
  selector: 'app-labTestUpdate',
  templateUrl: './labTestUpdate.component.html',
  styleUrls: ['./labTestUpdate.component.scss']
})
export class LabTestUpdateComponent implements OnInit {

  labTestId: any;
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
    private activatedRouter: ActivatedRoute,
    private service: HospitalService,
    private router: Router
  ) {
    this.activatedRouter.queryParams.subscribe((res: any) => {
      if (!!res && res?.id) {
        this.labTestId = res?.id;
        this.getLabTestById(this.labTestId);
      }
    });
  }

  getLabTestById(id: any): void {
    this.service.getLabTestById(id).pipe(take(1)).subscribe((res: LabTest) => {
      if (!!res && res?.labTestId) {
        console.log(res);
        this.labTestId= res?.labTestId;
        this.test_name = res?.test_name;
        this.status = res?.status;
        this.description = res?.description;
        this.test_time_start= res?.test_time_start;
        this.test_time_end = res?.test_time_end;
        this.delivery_time = res?.delivery_time;
        this.preparation = res?.preparation;
        this.test_sku = res?.test_sku;
        this.price = res?.price;
        this.adminId = res?.adminId;
      }
    });
  }

  ngOnInit(): void {
  }

  onUpdate(): void {
    const body: any = {
      adminId: this.service.getAdminAuthorization(),
      test_name: this.test_name,
      status: this.status,
      description: this.description,
      test_time_start: this.test_time_start,
      test_time_end: this.test_time_end,
      delivery_time: this.delivery_time,
      preparation: this.preparation,
      price: this.price,
      test_sku: this.test_sku
    }

    this.service.updateTestById(this.labTestId, body).pipe(take(1)).subscribe((res => {

      if (!!res && res?.labTestId) {
        alert("Lab Test Updated Successfully")
        this.router.navigate(['/admin/lab-test-list']);
      }
    }));
  }

}
