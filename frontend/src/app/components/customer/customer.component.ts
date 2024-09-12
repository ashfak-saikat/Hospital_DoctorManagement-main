import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


  name: string = "";
  phone: string = "";
  password: string = "";

  constructor(

    private router: Router,
    private datePipe: DatePipe,
    private service:HospitalService

  ) { }

 ngOnInit(): void {
  }
  /*  setDOB(ev: any): void {
    const date: any = this.datePipe.transform(ev?.value, 'yyyy-MM-dd');
    this.dob = date;
  }
*/

customer_signup(): void {
    if (this.name === '' || this.name.length < 3) {
      alert('Name must contain atleast 3 characters');
      return;
    }

    if (this.phone === '' || this.phone.length < 10) {
      alert('Phone must contain atleast 10 characters');
      return;
    }

    if (this.password === '' || this.password.length < 6) {
      alert('Password must contain atleast 6 characters');
      return;
    }

    const body: any = {
      name : this.name,
      phone : this.phone,
      password : this.password
    }
alert(this.name);
    console.log("=======>",body);
    this.service.customer_signUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customer){
        alert("User signup sucessful");
        this.router.navigate(["/customer-login"]);
      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong!!pl try again");
    })

  }

}
