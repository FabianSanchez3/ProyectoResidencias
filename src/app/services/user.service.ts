import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient: any;


  constructor(private http: HttpClient) { }

  getData() {
    return this.httpClient.get('https://127.0.0.1:8000/api/usuarios');

  }



}
