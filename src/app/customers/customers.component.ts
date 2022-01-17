import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/classes/Customer';
import { CustomerService } from '../services/customer.service';
import { PersonalAereaService } from '../services/personal-aerea.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  listCustomers:Array<Customer>=new Array<Customer>()
  constructor(private CustomerService:CustomerService, private paService:PersonalAereaService) { }
  
  public currentCustomer="";
  public currentId=0;
  ngOnInit(): void {
    this.CustomerService.getMyCustomers().subscribe(
      data=>{this.listCustomers=data},
      err=>{console.log("err")}
    )
    
  }
//בודק על מי לחצו בשביל להציג מחיקה ועדכון
changeStatus(id:number)
{
  debugger
  this.currentCustomer='act';
  this.currentId=id;
}

update(){
this.paService.nameToDisplay="addCustomer";
this.CustomerService.currentId=this.currentId;
this.CustomerService.isEdit=true;
}

delete(id:number)
{
  debugger
    this.CustomerService.delete(id).subscribe(
      data=>{
                if(data==true)
                {
                  this.CustomerService.getMyCustomers().subscribe(
                        data=>{this.listCustomers=data;}
                          
                  )      
                }
                
            },
      err=>{console.log("err")}
    )
}

}

