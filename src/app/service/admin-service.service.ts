import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking';
import { Url } from '../url';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl:string="http://localhost:2720/view/allBookings";
  private baseUrl1:string="http://localhost:2720/update/booking";
  private baseUrl2:string="http://localhost:2720/delete/booking";
  private baseUrl3:string="http://localhost:2720/view/booking";
  private baseUrl4:string="http://localhost:2720/update/approve";
  url:string=Url.getUrl();
  constructor(private httpClient:HttpClient) { }

  getBookings(){
    return this.httpClient.get<Booking[]>(`${this.baseUrl}`);
  }

  public getBookingByDate(date:string){
    return this.httpClient.get<Booking>(this.url+`viewByDate/booking/${date}`);
  }
  doUpdate(bookingId:number,booking:Booking):Observable<Object>{
    console.log(booking);
    return this.httpClient.put(`${this.baseUrl1}`,booking);
  }

  doApprove(booking:Booking,status:string){
    console.log(booking.bookingId);
    return this.httpClient.put(this.url+`/update/approve/${status}`,booking);
  }


  doDelete(bookingId:number){
      return this.httpClient.delete(`${this.baseUrl2}/${bookingId}`);
  }

  viewBookingById(bookingId:number){
    return this.httpClient.get<Booking>(`${this.baseUrl3}/${bookingId}`);
  }

  viewAllPayments():Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(this.url+`/payment/viewAllPayments`);
  }
  updatePaymentStatus(payment : Payment,status : string){
    return this.httpClient.put(this.url+`/update/payment/${status}`,payment)
  }
  
}
