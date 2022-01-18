import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/classes/Customer';
import { UserService } from './userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string="http://localhost:61249/api/Customer";
  // newCustomer:Customer=new Customer();
  constructor(private http:HttpClient, private userService:UserService) { }
currentId:number;
isEdit:boolean;

  //שליפה
 // שליפת השליחים של היוזר הנוכחי
 getMyCustomers():Observable<Customer[]>{
   debugger
  return this.http.get<Array<Customer>>(this.url+"/getMyCustomers/"+this.userService.currentUser.id);
}
  //הוספת לקוח
  addCustomer(newCustomer:Customer):Observable<boolean>{
    debugger
    return this.http.put<boolean>(this.url+"/addCustomer",newCustomer);
  }


  //עריכת לקווח
  update(newCustomer:Customer){
    return this.http.post<Customer>(this.url+"/updatCustomer",newCustomer);
  }

  //שליפת לקוח לפי קוד
  getCustomerById():Observable<Customer>{
    return this.http.get<Customer>(this.url+"/getCustomerById/"+this.currentId);
  }

  //מחיקה
  delete(id:number):Observable<boolean>{
    debugger
    return this.http.delete<boolean>(this.url+"/delete/"+id);
  }

}
