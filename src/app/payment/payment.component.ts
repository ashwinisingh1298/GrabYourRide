import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../model/booking';
import { Payment } from '../model/payment';
import { AdminServiceService } from '../service/admin-service.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment:Payment = new Payment();
  constructor(private router: Router,private route:ActivatedRoute,private adminService:AdminServiceService,private paymentService:PaymentService) { }
  amount:string=this.route.snapshot.paramMap.get('amount');
  bookingId:string=this.route.snapshot.paramMap.get('bookingId');
  ngOnInit(): void {
    
  }

  public selectMode(type:string){
    this.payment.paymentMode=type;
    this.adminService.viewBookingById(Number.parseInt(this.bookingId)).subscribe(
      (resp)=>{
        this.payment.booking=resp;
          console.log("resp wala booking");
          console.log(resp);
          console.log("payment wala booking")
          console.log(this.payment.booking);
          this.payment.paymentDate=resp.bookingDate;
          this.payment.paymentStatus="Processed";
          console.log("payment ka booking obj");
          console.log(this.payment.booking);
          this.paymentService.addPayment(this.payment).subscribe(
            (resp)=>{
              console.log(resp);
            },
            (err)=>{
              console.log(err);
            }
          )
      }
    )
    this.router.navigate(['afterPayment']);
  }
}
