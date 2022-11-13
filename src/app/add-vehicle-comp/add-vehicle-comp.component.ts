import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../model/driver';
import { Vehicle } from '../model/vehicle';
import { VehicleServiceService } from '../service/vehicle-service.service';

@Component({
  selector: 'app-add-vehicle-comp',
  templateUrl: './add-vehicle-comp.component.html',
  styleUrls: ['./add-vehicle-comp.component.css']
})
export class AddVehicleCompComponent implements OnInit {

  public vehicle:Vehicle=new Vehicle();
  public driver:Driver=new Driver();
  constructor(private router:Router,private vehicleService:VehicleServiceService) { }
  status:string="";
  buttonStatus:boolean=true;
  ngOnInit(): void {
  }
  onSubmit(){
    this.vehicle.driver=this.driver;
    this.vehicleService.addVehicle(this.vehicle).subscribe(data=>{
      console.log(data);
      this.router.navigate(['adminArea']);
    })
  }
  public checkVehicleExists(){
    this.vehicleService.checkIfVehicleExists(this.vehicle.vehicleNumber).subscribe(
      (resp)=>{
        if(resp==1){
          this.buttonStatus=false;
          this.status="";
        }
        else{
          this.status="Vehicle with same number already exists";
          this.buttonStatus=true;
        }
      }
    )
  }

  public back(){
    this.router.navigate(['adminArea']);
  }
}
