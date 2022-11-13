import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerServiceService } from '../service/customer-service.service';
import { UserAreaServiceService } from '../service/user-area-service.service';
import { UserData } from '../UserData/userData';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  customer:Customer=new Customer();
  customerName:string='';
  constructor(private router:Router,private userAreaService:UserAreaServiceService,private route:ActivatedRoute) { }
  email:string=this.route.snapshot.paramMap.get('email');
  ngOnInit(): void {
    this.userAreaService.getCustomerByEmail(this.email).subscribe(
      (resp)=>{
        this.customer=resp;
        console.log(resp);
        localStorage.setItem('customerName',this.customer.firstName);
        this.customerName=localStorage.getItem('customerName');
      }
    );
  }
  public booking(perkm:number,charges:number,type:string){
    this.router.navigate(['newBooking',perkm,charges,type]);
  }
  // public newBooking(){
  //   this.router.navigate(['newBooking']);
  // }
  public Feedback()
  {
    this.router.navigate(['feedback']);
  }
  public viewBooking()
  {
    this.router.navigate(['viewBooking']);
  }
  public home(){
    this.router.navigate(['home']);
  }
}
