import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-view-all-customer',
  templateUrl: './view-all-customer.component.html',
  styleUrls: ['./view-all-customer.component.css']
})
export class ViewAllCustomerComponent implements OnInit {

  CustomerList=null;
  constructor(private router: Router,private route:ActivatedRoute,private adminservice:AdminServiceService) { 
  }

  ngOnInit() {
      this.adminservice.viewAllCustomer().subscribe(
        (resp)=> {
          //console.log(resp);
          this.CustomerList=resp;
        }
      );
  }
  public goBack()
  {
    this.router.navigate(['adminArea']);
  }
  // public viewAllCustomer(){
  //   this.adminservice.viewAllCustomer().subscribe(
  //     (resp)=> {
  //       console.log(resp);
  //       this.CustomerList=resp;
  //     }
  //   );
  // }
}
