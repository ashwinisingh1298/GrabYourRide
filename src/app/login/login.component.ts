import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { User } from '../model/user';
import { UserSpring } from '../model/user-spring';
import { UserData } from '../UserData/userData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string="";
  public user:User=new User();
  public userspr:User=new UserSpring();

  constructor(private router:Router,private loginService:LoginServiceService) { }

  ngOnInit(): void {
    console.log("login page");
    
  }

  onSubmit(){
    console.log("Logged");
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      this.loginService.getUserData(this.user.userId).subscribe(data1=>{
        this.userspr=data1;
        console.log("enteredHere");
        console.log(data1);
        if(data1.role==="user"){
          console.log(this.userspr.userId);
          UserData.userId=this.userspr.userId;
         sessionStorage.setItem('email',this.userspr.userId);
          this.router.navigate(['userArea',this.userspr.userId]);
        }
        else{
          this.router.navigate(['adminArea']);
        }
      })
    },error=>alert("wrong Id password"));
    
  }

  public booking(){
    console.log("Login");
    this.router.navigate(['register']);
  }

  public forgotPassword(){
    this.loginService.getPassword(this.user.userId).subscribe(
     (resp)=>{
       if(resp!=null){
         console.log(resp.password);
         this.message="Your Password has been sent to your registered mail id.";
       }
       else{
         console.log("Invalid Username");
         this.message="Invalid Email Id!";
       }
     },
     (err)=>{
      console.log(err);
     }
    );
   }
  
}
