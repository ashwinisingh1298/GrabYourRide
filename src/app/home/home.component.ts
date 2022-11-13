import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public register(){
    this.router.navigate(['newUser']);
  }
  public login(){
    this.router.navigate(['loginPage']);
  }
  public aboutUs(){
    this.router.navigate(['aboutUs']);
  }
  public contactUs(){
    this.router.navigate(['contactUs']);
  }
  public terms(){
    this.router.navigate(['tnc']);
  }

}
