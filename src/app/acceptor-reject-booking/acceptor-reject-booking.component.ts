import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../model/booking';
import { Customer } from '../model/customer';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-acceptor-reject-booking',
  templateUrl: './acceptor-reject-booking.component.html',
  styleUrls: ['./acceptor-reject-booking.component.css']
})
export class AcceptorRejectBookingComponent implements OnInit {

  public booking:Booking=new Booking();
  // public book:Booking[]=[];
  // public bookingId:number=0;
  public bookList=null;

  constructor(private adminService:AdminServiceService,private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.adminService.getBookings().subscribe(
      (data)=>{
      console.log(data);
      this.bookList=data;})
}
  // approveBookingClicked(bookingId:number){
  //   console.log("Approved");
  //   console.log(bookingId);
  //   this.adminService.doApprove(bookingId,this.booking).subscribe(data=>{
  //     console.log(data);
  //     this.router.navigate(['approvalPage']);
  //   })
  // }

  // denyBookingClicked(bookingId:number){

  // }

  // onSubmit(){
  //   this.adminService.doUpdate(this.booking.bookingId,this.booking).subscribe(data=>{
  //     console.log(data);
  //     this.router.navigate(['approvalPage']);
  //     window.location.reload();
  //   })
  // }
customer:Customer=new Customer();

  public status(id:number,status:string){
    console.log(status);
    this.adminService.viewBookingById(id).subscribe(
      (resp)=>{
        this.adminService.doApprove(resp,status).subscribe(
          (user)=>{
            console.log("status changed");
            window.location.reload();
          }
        );
        console.log(resp);
      }
    )
  }
  public admin(){
    this.router.navigate(['adminArea']);
  }
  public update(bookingId:number){
    console.log(bookingId);
    this.router.navigate(['updateBooking',bookingId]);
  }

}
