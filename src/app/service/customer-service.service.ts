import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  url:string=Url.getUrl();
  constructor(private http:HttpClient) { }
  public addCustomer(customer:Customer){
    return this.http.post(this.url+"/addCustomer",customer);
  }
}
