import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking';
import { Customer } from '../model/customer';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class NewBookingServiceService {

  constructor(private http:HttpClient) { }
  url:string=Url.getUrl();

  public addBooking(booking:Booking):Observable<Booking>{
    console.log(booking);
    return this.http.post<Booking>(this.url+`/add/booking`,booking);
  }
  public getCustomerByEmail(email:String){
    console.log(email);
    return this.http.get<Customer>(this.url+`/customer/viewByEmail/${email}`);
  }
  public checkAvailability(booking:Booking){
    console.log(booking);
    return this.http.get(this.url+`/booking/checkAvailability/${booking.vehicle.type}/${booking.bookingDate.toString()}/${booking.bookedTillDate.toString()}`);
  }

}
