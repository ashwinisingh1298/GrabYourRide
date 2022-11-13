import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http : HttpClient) {

   }
   url:string = "http://localhost:2720";
public getVehicleByType(type : string) 
{
  // return this.http.post<any>(this.url+`/add/User`, user);
  // return this.http.get<Customer>(this.url+`/customer/viewByEmail/${email}`);
 return this.http.get<Vehicle>(this.url+`/view/vehicle/${type}`);
}
  // togetVehicleBasedOnType

}
