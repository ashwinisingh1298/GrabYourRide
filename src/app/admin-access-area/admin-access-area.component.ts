import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-admin-access-area',
  templateUrl: './admin-access-area.component.html',
  styleUrls: ['./admin-access-area.component.css']
})
export class AdminAccessAreaComponent implements OnInit {

  name:string="Admin";  
  totalRevenue:number=0;
  constructor(private router:Router,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    console.log("adminService");
    this.adminService.viewAllPayments().subscribe(
      (resp)=>{
        for(let i=0;i<resp.length;i++){
          if(resp[i].booking!=null){
          this.totalRevenue+=resp[i].booking.totalCost;
          }
        }
      }
    )
  }

  addVehicle(){
    this.router.navigate(['adminMonopoly']);
  }
  
  viewRented(){
    console.log("clicked");
    this.router.navigate(['viewVehicleBooking']);
  }
  viewApprovalPage(){
    console.log("clicked");
    this.router.navigate(['approvalPage']);
  }
  updateBooking(){
    this.router.navigate(['adminBooking']);
  }
  public back(){
    this.router.navigate(['home']);
  }
  viewAllPayments(){
    this.router.navigate(['viewAllPayments']);
  }
  monthly(){
    this.router.navigate(['monthlyRevenue']);
  }
  viewCustomers(){
    this.router.navigate(['viewAllCustomer']);
  }
  viewBookingByVehicle(){
    this.router.navigate(['viewBookingByVehicle']);
  }
  
}
