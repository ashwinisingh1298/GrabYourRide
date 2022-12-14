import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user:User=new User();
  constructor(private router:Router,private userService:UserServiceService) { }
  Invalid:string="";
  ngOnInit() {
  }

  public customerRegistration() {
    console.log(this.user.userId + this.user.password);
    this.userService.addNewUser(this.user).subscribe(
      (resp) => {
        console.log(resp);
        sessionStorage.setItem('email', this.user.userId);
        this.router.navigate(['register', this.user.userId]);
      }, error => {
        this.Invalid = "User already exists, please login!";
        console.log(error);
      });
    console.log('user saved');
    // this.router.navigate(['newBooking',perkm,charges,type]);
  }

  goToLogin(){
    this.router.navigate(['loginPage']);
  }

}
