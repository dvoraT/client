import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/classes/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string="http://localhost:61249/api/Customer";
  // newCustomer:Customer=new Customer();
  constructor(private http:HttpClient) { }

  //הוספת לקוח
  addCustomer(newCustomer:Customer):Observable<boolean>{
    debugger
    return this.http.put<boolean>(this.url+"/addCustomer",newCustomer);
  }

}
