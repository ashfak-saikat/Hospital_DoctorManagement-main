import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment.model';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  [x: string]: any;
  url: string = 'http://localhost:8088';
  baseUrl: any;

  constructor(
    private http: HttpClient,
    private router: Router

  ) { }

  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/patient/register", body);
  }
  //client login
  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/patient/login", body);
  }


  /* Doctor Registeration */
  signUpDoctor(body: any): Observable<any> {
    return this.http.post(this.url + "/api/doctor/register", body);
  }
  //doctor login
  doctorSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/doctor/login", body);
  }

  //once we logged in that time we are storing client id into token
  storeClientAuthorization(token: string): void {
    localStorage.setItem("token", token);
  }

  //bill
  getPrescriptionDetails(id: number): Observable<any> {
    const url1= `${this.url}/api/Prescription/prescription/${id}`;
    return  this.http.get<any>(url1);
  }

  getAmbulanceList(cid: number): Observable<any> {
    return this.http.get(this.url + "/api/ambulance/ambulance_list/"+cid);
  }

  getAllAmbulance(): Observable<any> {
    return this.http.get(this.url + "/api/ambulance/all_ambulance/");
  }

  getAmbulanceById(id: any): Observable<any> {
    return this.http.get(this.url + "/api/ambulance/ambulanceById/"+ id);
  }




  getClientAuthorization(): any {
    const token = localStorage.getItem("token");
    return token;
  }

  storeClientUserName(name: string): void {
    localStorage.setItem("userName", name);
  }

  getClientName(): any {
    const name = localStorage.getItem("userName");
    return name;
  }

  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }

  /* Ambulance booking */
  ambulance_booking(body: any): Observable<any> {
    return this.http.post(this.url + "/api/ambulance/ambulance_booking", body);
  }

  /* Rooms booking */
  rooms_booking(body: any): Observable<any> {
    return this.http.post(this.url + "/api/rooms/rooms_booking", body);
  }

  getAllRooms(): Observable<any> {
    return this.http.get(this.url + "/api/rooms/all_rooms/");
  }

  getRoomsById(id: any): Observable<any> {
    return this.http.get(this.url + "/api/rooms/roomsById/"+ id);
  }


  /* Create appoinment */
  appointment_booking(body: any): Observable<any> {
    return this.http.post(this.url + "/api/booking/appointment_booking", body);
  }


  //once we logged in that time we are storing Doctor id into token
  storeDoctorAuthorization(token: string): void {
    localStorage.setItem("doctor_token", token);
  }

  getDoctorAuthorization(): any {
    const token = localStorage.getItem("doctor_token");
    return token;
  }

  storeDoctorUserName(name: string): void {
    localStorage.setItem("doctorName", name);
  }

  getDoctorName(): any {
    const name = localStorage.getItem("doctorName");
    return name;
  }

  doctorLogout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }

  //admin login
  adminSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/admin/login", body);
  }
  storeAdminAuthorization(token: string): void {
    localStorage.setItem("admin", token);
  }
  getAdminAuthorization(): any {
    const token = localStorage.getItem("admin");
    return token;
  }

  storeAdminUserName(name: string): void {
    localStorage.setItem("adminName", name);
  }

  getAdminName(): any {
    const name = localStorage.getItem("adminName");
    return name;
  }

  adminLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getCustomerById(id: any): Observable<any> {
    return this.http.get(this.url + "/api/patient/" + id);
  }


  isClientLoginPresent(): void {
    if (this.getClientAuthorization() === null) {
      this.router.navigate(['/patien-login']);
    }
  }

  isAdminLoginPresent(): void {
    if (this.getAdminAuthorization() === null) {
      this.router.navigate(['/admin-login']);
    }
  }

  isDoctorLoginPresent(): void {
    if (this.getDoctorAuthorization() === null) {
      this.router.navigate(['/doctor-login']);
    }
  }

  updateCustomerInformation(body: any): Observable<any> {
    return this.http.put(this.url + "/api/patient/" + body?.customerId, body);
  }

  getAllAppointment(): Observable<any> {
    return this.http.get(this.url + "/api/doctor/booking");
  }

  getDoctorList(): Observable<any> {
    return this.http.get(this.url + "/api/doctor/doctor");
  }

  /* LabTest Create */
  createLabTest(body: any): Observable<any> {
    return this.http.post(this.url + "/api/labTest/addTest", body);
  }

  getLabTestById(id: any): Observable<any> {
    return this.http.get(this.url + "/api/labTest/testById/"+ id);
  }

  updateTestById(id: any, body: any): Observable<any> {
    return this.http.put(this.url + "/api/labTest/updateTest/"+ id, body);
  }

  getAllLabTests(): Observable<any> {
    return this.http.get(this.url + "/api/labTest/allLabTests");
  }

  createAppointment(doctorId: any, patientId: any, body: any): Observable<any> {
    return this.http.post(this.url + "/api/booking/register/" + doctorId + "/" + patientId, body);
  }

  addPrescription(appointmentId: any, body: any): Observable<any> {
    return this.http.post(this.url + "/api/doctor/register/prescription/" + appointmentId, body);
  }

  getAllPrescription(): Observable<any> {
    return this.http.get(this.url + "/api/patient/prescription");
  }

  getUnpaidPrescription(): Observable<any> {
    return this.http.get(this.url + "/api/patient/prescriptionUnpaid");
  }

  getPaidPrescription(): Observable<any> {
    return this.http.get(this.url + "/api/patient/prescriptionPaid");
  }

  getPrescriptionById(pid: any): Observable<any> {
    return this.http.get(this.url + "/api/patient/prescription/"+ pid);
  }

  addPayment(patientId: any,prescriptionId: any, body: any): Observable<any> {
    return this.http.post(this.url + "/api/payment/register/"+ patientId+ "/"+ prescriptionId, body);
  }

  getAllPayments(): Observable<any> {
    return this.http.get(this.url + "/api/payment");
  }

  getPatientById(id: any): Observable<any> {
    return this.http.get(this.url + "/api/patient/"+ id);
  }

  getDoctorById(id: any): Observable<any> {
    return this.http.get(this.url + "/api/doctor/"+ id);
  }

  deleteDoctorById(id: any): Observable<any> {
    return this.http.delete(this.url + "/api/doctor/"+ id);
  }

  updateDoctorById(id: any, body: any): Observable<any> {
    return this.http.put(this.url + "/api/doctor/"+ id, body);
  }

  changePassword(cid: any,password:any):Observable<any> {
    return this.http.post(this.url + "/api/customers/"+cid+"/"+password,{});
  }

  forgotPassword(body: any):Observable<any> {
    return this.http.post(this.url + "/api/customers/forgotpassword", body);
  }


}
