import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http:HttpClient) { }
  url:string=Url.getUrl();
  public addPayment(payment:Payment){
    return this.http.post(this.url+`/add/payment`,payment);
  }

  public viewPaymentBymonth(date1 : string,date2 : string)
  {
    return this.http.get<number>(this.url+`/calculate/revenue/${date1}/${date2}`)
  }
}
