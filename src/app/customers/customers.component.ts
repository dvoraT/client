import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  listCustomers:Array<CustomersService>=new Array<CustomersService>()
  constructor(private CustomersService:CustomersService ) { }
  
  public currentCustomer="";
  public currentId=0;
  ngOnInit(): void {

    
  }
//בודק על מי לחצו בשביל להציג מחיקה ועדכון
changeStatus(id:number)
{
  debugger
  this.currentCustomer='act';
  this.currentId=id;
}

}
