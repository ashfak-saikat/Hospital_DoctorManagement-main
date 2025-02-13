import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ClientHeaderComponent } from './components/client/client-header/client-header.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { CustomerHomeComponent } from './components/customer/customerHome/customerHome.component';
import { ClientLoginPageComponent } from './components/client/client-login-page/client-login-page.component';
import { ClientSignUpComponent } from './components/client/client-sign-up/client-sign-up.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PagingComponent } from './components/paging/paging.component';
import { DoctorLoginPageComponent } from './components/doctor/doctor-login-page/doctor-login-page.component';
import { DoctorSignUpComponent } from './components/doctor/doctor-sign-up/doctor-sign-up.component';
import { DoctorHomePageComponent } from './components/doctor/doctor-home-page/doctor-home-page.component';
import { DoctorAppHeaderComponent } from './components/doctor/doctor-app-header/doctor-app-header.component';
import { DoctorAppointmnetListComponent } from './components/doctor/doctor-appointmnet-list/doctor-appointmnet-list.component';
import { CreateAppointmentComponent } from './components/client/create-appointment/create-appointment.component';
import { MyAppointmentComponent } from './components/client/my-appointment/my-appointment.component';
import { MyPrescriptionComponent } from './components/client/my-prescription/my-prescription.component';
import { PaymentComponent } from './components/client/payment/payment.component';
import { DoctorListComponent } from './components/admin/doctor-list/doctor-list.component';
import { AdminAllAppointmentComponent } from './components/admin/admin-all-appointment/admin-all-appointment.component';
import { PaymentListComponent } from './components/admin/payment-list/payment-list.component';
import { AdminUpdateDoctorComponent } from './components/admin/admin-update-doctor/admin-update-doctor.component';
import { BillComponent } from './components/client/bill/bill.component';
import { LabTestComponent } from './components/admin/test/labTest/labTest.component';
import { LabTestUpdateComponent } from './components/admin/test/labTestUpdate/labTestUpdate.component';
import { LabTestListComponent } from './components/admin/test/labTestList/labTestList.component';
import { DoctorsListComponent } from './components/doctorsList/doctorsList.component';
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AmbulanceListComponent } from './components/customer/ambulanceList/ambulanceList.component';
import { AmbulanceDetailComponent } from './components/customer/ambulanceDetail/ambulanceDetail.component';
import { RoomsListComponent } from './components/customer/roomsList/roomsList.component';
import { RoomsDetailComponent } from './components/customer/roomsDetail/roomsDetail.component';
import { AdminRoomsListComponent } from './components/admin/rooms/adminRoomsList/adminRoomsList.component';
import { AdminRoomsDetailComponent } from './components/admin/rooms/adminRoomsDetail/adminRoomsDetail.component';
import { AdminAmbulanceListComponent } from './components/admin/ambulance/adminAmbulanceList/adminAmbulanceList.component';
import { AdminAmbulanceDetailComponent } from './components/admin/ambulance/adminAmbulanceDetail/adminAmbulanceDetail.component';
import { LabTestListFrontComponent } from './components/labTests/labTestListFront/labTestListFront.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AboutusComponent,
    HomePageComponent,
    ContactusComponent,
    ClientHeaderComponent,
    AdminHeaderComponent,
    ClientHomeComponent,
    CustomerHomeComponent,
    ClientLoginPageComponent,
    ClientSignUpComponent,
    AdminHomeComponent,
    AdminLoginPageComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PagingComponent,
    DoctorLoginPageComponent,
    DoctorSignUpComponent,
    DoctorHomePageComponent,
    DoctorAppHeaderComponent,
    DoctorAppointmnetListComponent,
    CreateAppointmentComponent,
    MyAppointmentComponent,
    MyPrescriptionComponent,
    PaymentComponent,
    DoctorListComponent,
    AdminAllAppointmentComponent,
    PaymentListComponent,
    AdminUpdateDoctorComponent,
    BillComponent,
    LabTestComponent,
    DoctorsListComponent,
    AmbulanceComponent,
    RoomsComponent,
    AmbulanceListComponent,
    LabTestListComponent,
    LabTestUpdateComponent,
    AmbulanceDetailComponent,
    RoomsListComponent,
    RoomsDetailComponent,
    AdminRoomsListComponent,
    AdminAmbulanceListComponent,
    AdminAmbulanceDetailComponent,
    AdminRoomsDetailComponent,
    LabTestListFrontComponent,
    LabTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
