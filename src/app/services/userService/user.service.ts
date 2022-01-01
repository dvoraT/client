import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { User } from 'src/classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:61249/api/Users"
  answer:boolean;
  public currentUserId:number;
  constructor(private http:HttpClient, private router:Router) {

   }

   public signIn(url:string, user:User):Observable<any>{
     return this.http.post<any>(this.url,user);
   }


  //הוספת משתמש
   // מה אנחנו נחזיר
  public signUp(newUser:User):Observable<boolean>{
   debugger
   
    //איזה סוג יחזור מהשרת
  return this.http.put<boolean>(this.url+'/addUser',newUser);

 }

// פונקציה לצורך קבלת היוזר הנוכחי שמחובר כעת
 getUserId(userName:string,password:string):any
 {
   debugger
  this.http.get<number>(this.url+"/getUserId/"+userName+"/"+password).subscribe(
    data=>{
      this.currentUserId=data;
      alert("the current user id is:"+this.currentUserId);
    }, err=>{}
  )
 }

//בדיקה האם המשתמש רשום למערכת
 isUserExist(userName:string,password:string){
  
   this.http.get<boolean>(this.url+"/isUserExist/"+userName+"/"+password).subscribe(
     data=>{
       if(data==true)
       {
          alert("שלום ל: "+ userName);
          debugger
          this.router.navigate(['/HomePage'])

          //הגדרת הקוד של היוזר  הנוכחי
          this.currentUserId=this.getUserId(userName,password);
       }
       
       else
       alert("אינך רשום למערכת")
     }, err=>{
       alert(err)
     }

     
   )

 }

 

}
