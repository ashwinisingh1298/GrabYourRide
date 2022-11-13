import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-monthly-revenue',
  templateUrl: './monthly-revenue.component.html',
  styleUrls: ['./monthly-revenue.component.css']
})
export class MonthlyRevenueComponent implements OnInit {

  constructor(private router : Router,private paymentService : PaymentService) { }

  ngOnInit() {
  }
  revenue : number=0;
  date1 : Date=null;
  date2 : Date=null;
public getRevenue()
{
  this.paymentService.viewPaymentBymonth(this.date1.toString(),this.date2.toString()).subscribe(
    (resp)=>{
      console.log(resp);
      this.revenue=resp;
    }
  )
}

public back(){
  this.router.navigate(['adminArea']);
}
}

