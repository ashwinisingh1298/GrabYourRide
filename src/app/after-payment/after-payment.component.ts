import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-after-payment',
  templateUrl: './after-payment.component.html',
  styleUrls: ['./after-payment.component.css']
})
export class AfterPaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['home']);
  }
}
