import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/classes/Order';
import { UserService } from './userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string="http://localhost:61249/api/Orders";
  constructor(private http:HttpClient, private userService:UserService) { }

//הוספת הזמנה
  addOrder(newOrder:Order):Observable<boolean>{
    debugger
    return this.http.put<boolean>(this.url+"/addOrder",newOrder);
  }


  //שליפה
  getAll():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(this.url+"/getAll/"+ this.userService.currentUser.id);
  }
}
