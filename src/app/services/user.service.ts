import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= environment.api;

  constructor(public http:HttpClient) {

  }

  loginUser(form:any){
    let request
    return this.http.post(this.url+'/users/login',form)
  }

}

