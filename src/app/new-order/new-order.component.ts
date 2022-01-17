import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderListComponent } from '../order-list/order-list.component';
import { CustomerService } from '../services/customer.service';
import{Order} from '../../classes/Order';
import { PersonalAereaService } from '../services/personal-aerea.service';
import { Customer } from 'src/classes/Customer';
import { OrderService } from '../services/order.service';
import {formatDate} from '@angular/common';



@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})

// declare var $: any;
export class NewOrderComponent implements OnInit {
  //הזמנה חדשה
  newOrder:Order=new Order();
  newCustomer:Customer=new Customer();
 
// newDate:Date=new Date();


//  public Exported: any;
//   public Destination: any;

//   @ViewChild('search1')
//   public searchElementRef1: ElementRef;
//   @ViewChild('search2')
//   public searchElementRef2: ElementRef;
//   latitude: number;
//   longitude: number;
//   zoom: number;
//   public latlongs: any = []
//   public latlong: any = {}
//   public searchControl1: FormControl;
//   public searchControl2: FormControl;
//   marker: any;
  
  // private NgZone: NgZone, private MapsAPILoader: MapsAPILoader
  constructor(public customerService:CustomerService,private paService:PersonalAereaService, public orderService:OrderService) { }
  ngOnInit() {
 
  }



  add(){
  //   debugger
  //   this.newOrder.customer_id=this.newCustomer.id;
  //   this.newOrder.id=1;
  //   this.newOrder.deadline_date=this.newDate;
  //   הוספת לקוח
  // this.customerService.addCustomer(this.newCustomer).subscribe(
  // data=>{ console.log("לקוח נוצר")

  // },
  // err=>{}
  // )
  //   הוספת הזמנה
    
  debugger
    this.orderService.addOrder(this.newOrder).subscribe(
      
      data=>{console.log("נוצרה הזמנה חדשה")},
      err=>{}
    )
  
  }

}
