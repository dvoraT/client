import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { User } from 'src/classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="https://localhost:44353/api/"
  constructor(private http:HttpClient) {

   }

   public signIn(url:string, user:User):Observable<any>{
     return this.http.post<any>(this.url,user);
   }
}
