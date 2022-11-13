import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../model/payment';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  public payment:Payment[]=[];

  constructor(private adminService:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.viewAllPayments().subscribe(data=>{
      this.payment=data;
    })
  }

  goBack(){
    this.router.navigate(['adminArea']);
  }
  paymentStatus(payment : Payment,status : string)
  {
    this.adminService.updatePaymentStatus(payment,status).subscribe(
      (resp)=>{
        console.log(resp);
        window.location.reload();
      }
    )
  }

}
