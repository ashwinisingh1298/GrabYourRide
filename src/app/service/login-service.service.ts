import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';
import { UserSpring } from '../model/user-spring';
import { Url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl:string="http://localhost:2720/login";
  private baseUrl1:string="http://localhost:2720/getUser";
  url:string=Url.getUrl();
  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
  getUserData(userId:string):Observable<UserSpring>{
    return this.httpClient.get<UserSpring>(`${this.baseUrl1}/${userId}`);
  }
  getPassword(userId:string){
    return this.httpClient.get<User>(this.url+`/user/password/${userId}`);
  }
}
