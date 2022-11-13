import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../model/vehicle';
import { Observable } from 'rxjs';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  private baseUrl="http://localhost:2720/add/vehicle";

  url:string=Url.getUrl();
  constructor(private httpClient:HttpClient) { }

  addVehicle(vehicle:Vehicle):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,vehicle);
  }
  public checkIfVehicleExists(vehicleNumber:string){
    return this.httpClient.get(this.url+`/check/vehicle/${vehicleNumber}`);
  }

}
