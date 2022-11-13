import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../model/booking';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  status:string="";
  public booking:Booking=new Booking();
  public bookingId:number=0;
  constructor(private router:Router,private adminService:AdminServiceService,private actRoute:ActivatedRoute) { }

  // this.studentService.getStudentById(this.studentId).subscribe(data=>{
  //   this.student=data;
  // });

  ngOnInit(): void {
    this.bookingId= Number.parseInt(this.actRoute.snapshot.paramMap.get('bookingId'));
    console.log(this.bookingId);
    this.adminService.viewBookingById(this.bookingId).subscribe(data=>{
      console.log(data);
      this.booking=data;
      this.booking.bookingId=this.bookingId;
    })
  }

  onSubmit(){
      this.adminService.doUpdate(this.booking.bookingId,this.booking).subscribe(
        (data)=>{
      console.log(data);
      this.status="Updated Successfully";
      this.router.navigate(['adminBooking']);
    })
  }

  public submit(){

  }

}
