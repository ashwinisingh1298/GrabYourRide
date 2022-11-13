import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking';
import { Customer } from '../model/customer';
import { ViewBookingServiceService } from '../service/view-booking-service.service';
import { UserData } from '../UserData/userData';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(private viewBookingService:ViewBookingServiceService,private router : Router) { }
bookingList = null;
customer : Customer=new Customer();
  ngOnInit() {
    this.viewBookingService.getBookingByCustomer(sessionStorage.getItem('email')).subscribe(
      (resp)=>{
        console.log(resp);
        this.bookingList=resp;
      }
    );
  }
public goBack()
{
  this.router.navigate(['userArea',sessionStorage.getItem('email')]);
}
}
