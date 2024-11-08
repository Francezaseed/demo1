import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/'
  constructor(private http:HttpClient) { }

  getUserList(){
    return this.http.get(this.url+"user")
  }
}
