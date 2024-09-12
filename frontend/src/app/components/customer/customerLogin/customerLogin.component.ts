import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { HospitalService } from '../../service/hospital.service';

@Component({
  selector: 'app-customerLogin',
  templateUrl: './customerLogin.component.html',
  styleUrls: ['./customerLogin.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  phone: string = "";
  password: string = "";
  customerLoginForm = new UntypedFormGroup({});

  constructor(
    private router: Router,
    private service:HospitalService,
    private fb: UntypedFormBuilder

  ) {

    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    this.customerLoginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(pattern)]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

 ngOnInit(): void {
  }
  /*  setDOB(ev: any): void {
    const date: any = this.datePipe.transform(ev?.value, 'yyyy-MM-dd');
    this.dob = date;
  }
*/

customer_login(): void {
  const body = {
    "phone": this.customerLoginForm.controls['phone'].value,
    "password": this.customerLoginForm.controls['password'].value
  }

  this.service.customer_login(body).pipe(take(1)).subscribe((res :any) => {
    if(res && res?.customer_id){
      this.service.storeCustomerAuthorization(res?.customer_id);
      let name = '';
      if (res?.name) {
        name+=res?.name;
      }
      this.service.storeCustomerUserName(name);
      this.router.navigate(['/customer/home']);

    }
  }, err =>{
    console.log("Error  ",err);
    alert("Something going wrong in login!!pl try again");
  })

}

}
