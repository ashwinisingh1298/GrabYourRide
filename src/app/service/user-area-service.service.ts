import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class UserAreaServiceService {
  url:string=Url.getUrl();
  constructor(private http:HttpClient) { }

  public getCustomerByEmail(email:String){
    console.log(email);
    return this.http.get<Customer>(this.url+`/customer/viewByEmail/${email}`);
  }


}
