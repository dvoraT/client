import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from 'src/classes/Delivery';
import { UserService } from './userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  url:string="http://localhost:61249/api/Deliveries";
  currentIdDelivery:number=0;
  isEdit:boolean= false;
  a:number=1;
  constructor(private http:HttpClient, private userService:UserService) { }


  // שליפת השליחים של היוזר הנוכחי
  getDeliveriesByUserId():Observable<Array<Delivery>>{
    return this.http.get<Array<Delivery>>(this.url+"/getDeliveriesByUserId/"+this.userService.currentUser.id);
  }
  //הוספת שליח
  addDelivery(newDelivery:Delivery):Observable<boolean>{
    debugger
    return this.http.put<boolean>(this.url+"/addDelivery",newDelivery);
  }

  //מחיקת שליח
  deleteDelivery(id:number):Observable<boolean>{
  return this.http.delete<boolean>(this.url+"/deleteDelivery/"+id);
  }

  
  //שליפת שליח לפי קוד
  getDeliveryById():Observable<Delivery>{
    return this.http.get<Delivery>(this.url+"/getDeliveryById/"+this.currentIdDelivery);
  }

  //עדכון שליח
  updateDelivery(newDelivery:Delivery){
  return this.http.post<Delivery>(this.url+"/updateDelivery", newDelivery);

  }


 
}
