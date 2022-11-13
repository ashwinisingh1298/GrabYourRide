import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class ViewBookingServiceService {

  constructor(private http:HttpClient) { }
  url:string=Url.getUrl();
  public getBookingByCustomer(email:String){
    console.log(email);
    return this.http.get(this.url+`/viewByCustomer/booking/${email}`);
    
  }
  

}
