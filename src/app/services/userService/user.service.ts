import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { User } from 'src/classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:61249/api/Users"
  // answer:boolean;
  userName:string;
  password:string;
  a:any
  currentUser:User = new User();
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
 getUserId():any
 {
   debugger
  this.http.get<number>(this.url+"/getUserId/"+this.currentUser.user_name+"/"+this.currentUser.user_password).subscribe(
    data=>{
      this.currentUserId=data;
      alert("the current user id is:"+this.currentUserId);
    }, err=>{}
  )
 }

//בדיקה האם המשתמש רשום למערכת
 isUserExist(){
  alert(this.url+"/isUserExist/"+this.currentUser.user_name+"/"+this.currentUser.user_password)
   this.http.get<User>(this.url+"/isUserExist/"+this.currentUser.user_name+"/"+this.currentUser.user_password).subscribe(
     data=>{
       debugger
       if(data!=undefined)
       {
        sessionStorage.setItem("currentUser",JSON.stringify(data))
          alert("שלום ל: "+ this.currentUser.user_name);
          debugger
          this.router.navigate(['/HomePage'])
          //הגדרת הקוד של היוזר  הנוכחי
          //this.currentUserId=this.getUserId();
       }
       
       else
       alert("אינך רשום למערכת")
     }, err=>{
       alert(err)
     }

     
   )

 }

 getDetails():Observable<User>
 {
   if(!this.currentUser.id) alert("אין משתמשמחובר")
   debugger
   return this.http.get<User>(this.url+"/getUserDetails/"+this.currentUser.id);
 }

 

}
