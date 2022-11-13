import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-view-rented-vehicle',
  templateUrl: './view-rented-vehicle.component.html',
  styleUrls: ['./view-rented-vehicle.component.css']
})
export class ViewRentedVehicleComponent implements OnInit {

  public booking:Booking=new Booking();
  public book:Booking[]=[];

  constructor(private adminService:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.adminService.getBookings().subscribe(data=>{
      console.log(data);
      this.book=data;
    })
  }

  public goBack()
{
  this.router.navigate(['adminArea']);
}

}
