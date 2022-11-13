import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerServiceService } from '../service/customer-service.service';
import { UserData } from '../UserData/userData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer:Customer=new Customer();
  constructor(private customerService:CustomerServiceService,private router:Router,private route : ActivatedRoute) { }
  // 
  email :  string="";
  ngOnInit() {
    this.email=this.route.snapshot.paramMap.get('email');
  }

  public register(){
    this.customer.emailId=this.email;
    this.customerService.addCustomer(this.customer).subscribe(
      (resp)=>{
        console.log(resp);
      }

    )
    UserData.userId=this.customer.emailId;
    this.router.navigate(['home']);

  }

}
