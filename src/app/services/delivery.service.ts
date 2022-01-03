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
  url:string="http://localhost:61249/api/Deliveries"
  constructor(private http:HttpClient, private userService:UserService) { }


  // שליפת השליחים של היוזר הנוכחי
  getDeliveriesByUserId():Observable<Array<Delivery>>{
    return this.http.get<Array<Delivery>>(this.url+"/getDeliveriesByUserId/"+this.userService.currentUserId);
  }
  //הוספת שליח
  addDelivery(newDelivery:Delivery):Observable<boolean>{
    debugger
    return this.http.put<boolean>(this.url+"/addDelivery",newDelivery);
  }
}
