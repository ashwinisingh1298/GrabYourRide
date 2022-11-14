import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../model/booking';
import { Customer } from '../model/customer';
import { Vehicle } from '../model/vehicle';
import { NewBookingServiceService } from '../service/new-booking-service.service';
import { VehicleService } from '../service/vehicle.service';
import { UserData } from '../UserData/userData';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private newBookingService:NewBookingServiceService,private vehicleService : VehicleService) { }
  perkm:number;
  charges:number;
  type:string;
  booking : Booking = new Booking();
  status:string="";
  buttonStatus:boolean=true;
  //vehicleType : string="";
  noOfDays:number=0;
  Cost : number=0;
  date : String = null;
  errorMsg:string="";

  ngOnInit() {
    this.date=new Date().toLocaleDateString(); 
    console.log(this.date);
    this.perkm=Number.parseInt(this.route.snapshot.paramMap.get('perkm'));
    this.charges = Number.parseInt(this.route.snapshot.paramMap.get('charges'));
    this.type=this.route.snapshot.paramMap.get('type');
    console.log(this.perkm);
    console.log(this.charges);

    this.newBookingService.getCustomerByEmail(UserData.userId).subscribe(
      (resp)=>{
        console.log(resp);
        this.booking.customer=resp;
        console.log(this.booking.customer);
      }
    );

    this.vehicleService.getVehicleByType(this.type).subscribe(
      (resp)=>{
        console.log(resp);
        this.booking.vehicle=resp;
      }
    )
  }
 
 
  public calculate(){
    console.log(this.booking);
    this.noOfDays=(new Date(this.booking.bookedTillDate).getTime()-new Date(this.booking.bookingDate).getTime())/(1000 * 3600 * 24);
    console.log(this.noOfDays);
    this.Cost = this.charges*this.noOfDays + this.perkm*this.booking.distance;
    this.booking.totalCost=this.Cost;
  }
 //vehicle:Vehicle=new Vehicle();
  public check(){
    this.newBookingService.checkAvailability(this.booking).subscribe(
      (resp)=>{
        console.log(resp);
        if(resp==0){
          this.status="Vehicle Unavailable on the chosen dates";
        }
        else if(resp==1){
          this.status="Vehicle Available";
          this.buttonStatus=false;
          console.log(this.buttonStatus);
        }
      }
    )
  }
  public proceedToPayment(){
    console.log(UserData.userId);
    this.booking.bookingStatus='Pending';
    this.newBookingService.addBooking(this.booking).subscribe(
      (resp)=>{
        console.log(resp);
        console.log(resp.bookingId);
        this.router.navigate(['payment',this.Cost,resp.bookingId]);
      },
      (err)=>{
          this.errorMsg="Invalid Booking Details, kindly check again!";
      }
    )
    
  }

  
}
