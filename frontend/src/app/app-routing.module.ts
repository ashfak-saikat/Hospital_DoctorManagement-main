import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminAllAppointmentComponent } from './components/admin/admin-all-appointment/admin-all-appointment.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { AdminUpdateDoctorComponent } from './components/admin/admin-update-doctor/admin-update-doctor.component';
import { DoctorListComponent } from './components/admin/doctor-list/doctor-list.component';
import { PaymentListComponent } from './components/admin/payment-list/payment-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { CustomerHomeComponent } from './components/customer/customerHome/customerHome.component';
import { ClientLoginPageComponent } from './components/client/client-login-page/client-login-page.component';
import { ClientSignUpComponent } from './components/client/client-sign-up/client-sign-up.component';
import { CreateAppointmentComponent } from './components/client/create-appointment/create-appointment.component';
import { MyAppointmentComponent } from './components/client/my-appointment/my-appointment.component';
import { MyPrescriptionComponent } from './components/client/my-prescription/my-prescription.component';
import { PaymentComponent } from './components/client/payment/payment.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DoctorAppointmnetListComponent } from './components/doctor/doctor-appointmnet-list/doctor-appointmnet-list.component';
import { DoctorHomePageComponent } from './components/doctor/doctor-home-page/doctor-home-page.component';
import { DoctorLoginPageComponent } from './components/doctor/doctor-login-page/doctor-login-page.component';
import { DoctorSignUpComponent } from './components/doctor/doctor-sign-up/doctor-sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BillComponent } from './components/client/bill/bill.component';
import { DoctorProfileComponent } from './components/doctorProfile/doctorProfile.component';
import { DoctorsListComponent } from './components/doctorsList/doctorsList.component';
import { AmbulanceComponent } from './components/ambulance/ambulance.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LabTestComponent } from './components/admin/test/labTest/labTest.component';
import { LabTestListComponent } from './components/admin/test/labTestList/labTestList.component';
import { LabTestUpdateComponent } from './components/admin/test/labTestUpdate/labTestUpdate.component';
import { AmbulanceListComponent } from './components/customer/ambulanceList/ambulanceList.component';
import { AmbulanceDetailComponent } from './components/customer/ambulanceDetail/ambulanceDetail.component';
import { RoomsListComponent } from './components/customer/roomsList/roomsList.component';
import { RoomsDetailComponent } from './components/customer/roomsDetail/roomsDetail.component';
import { AdminAmbulanceListComponent } from './components/admin/ambulance/adminAmbulanceList/adminAmbulanceList.component';
import { AdminAmbulanceDetailComponent } from './components/admin/ambulance/adminAmbulanceDetail/adminAmbulanceDetail.component';
import { AdminRoomsListComponent } from './components/admin/rooms/adminRoomsList/adminRoomsList.component';
import { AdminRoomsDetailComponent } from './components/admin/rooms/adminRoomsDetail/adminRoomsDetail.component';
import { LabTestListFrontComponent } from './components/labTests/labTestListFront/labTestListFront.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'patient-register', component: ClientSignUpComponent },
  { path: 'patient-login', component: ClientLoginPageComponent },
  { path: 'doctor-register', component: DoctorSignUpComponent },
  { path: 'doctor-login', component: DoctorLoginPageComponent },
  { path: 'admin-login', component: AdminLoginPageComponent },
  { path: 'doctors', component: DoctorsListComponent },
  { path: 'ambulance', component: AmbulanceComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'lab-tests', component: LabTestListFrontComponent },
  {
    path: 'patient', children: [
      { path: 'home', component: ClientHomeComponent },
      { path: 'create-appointment', component: CreateAppointmentComponent },
      {
        path: 'my-appointment', component: MyAppointmentComponent
      },
      {
        path: 'my-prescription', component: MyPrescriptionComponent
      },
      {
        path: 'payment', component: PaymentComponent
      },
      {
        path: 'bill', component: BillComponent
      }
    ]
  },
  {
    path: 'admin', children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'doctor-list', component: DoctorListComponent },
      { path: 'all-appointment', component: AdminAllAppointmentComponent },
      { path: 'payment-list', component: PaymentListComponent },
      { path: 'update-doctor', component: AdminUpdateDoctorComponent },
      { path: 'bill', component: BillComponent},
      { path: 'lab-test', component: LabTestComponent },
      { path: 'lab-test-list', component: LabTestListComponent },
      { path: 'lab-test-update', component: LabTestUpdateComponent },
      { path: 'ambulance', component: AmbulanceComponent },
      { path: 'ambulance-list', component: AdminAmbulanceListComponent },
      { path: 'ambulance-detail', component: AdminAmbulanceDetailComponent },
      { path: 'rooms-list', component: AdminRoomsListComponent },
      { path: 'rooms-detail', component: AdminRoomsDetailComponent },
    ]
  },
  {
    path: 'customer', children: [
      { path: 'home', component: CustomerHomeComponent },
      { path: 'ambulance-list', component: AmbulanceListComponent },
      { path: 'ambulance-detail', component: AmbulanceDetailComponent },
      { path: 'rooms-list', component: RoomsListComponent },
      { path: 'rooms-detail', component: RoomsDetailComponent },
    ] },
  {
    path: 'doctor', children: [
      { path: 'home', component: DoctorHomePageComponent },
      { path: 'appointment', component: DoctorAppointmnetListComponent }
    ]
  },
  {
    path: 'doctors', children: [
      { path: 'doctor-profile', component: DoctorProfileComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
