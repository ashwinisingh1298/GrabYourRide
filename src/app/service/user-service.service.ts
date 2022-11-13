import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:2720";
  
  public addNewUser(user:User):Observable<any>{
    console.log("add user called from service");
    return this.http.post<any>(this.url+`/add/User`, user);
  }
}
