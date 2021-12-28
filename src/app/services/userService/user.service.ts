import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { User } from 'src/classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:61249/api/Users"
  constructor(private http:HttpClient) {

   }

   public signIn(url:string, user:User):Observable<any>{
     return this.http.post<any>(this.url,user);
   }
// מה אנחנו נחזיר
  //  public signUp(newUser:number):Observable<boolean>{
    //  debugger
     //איזה סוג יחזור מהשרת
    //  return this.http.get<boolean>('http://localhost:61249/api/Users/A');
  //  }

   // מה אנחנו נחזיר
  public signUp(newUser:User):Observable<boolean>{
   debugger
    //איזה סוג יחזור מהשרת
   return this.http.put<boolean>(this.url+'/addUser',newUser);
 }
}
