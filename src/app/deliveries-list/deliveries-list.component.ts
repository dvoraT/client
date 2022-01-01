import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/classes/Delivery';
import { DeliveryService } from '../services/delivery.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.css']
})
export class DeliveriesListComponent implements OnInit {
public currentDelivery="";
public currentId=0;
listDelivery:Array<Delivery>=new Array<Delivery>()
  constructor(private deliveryService:DeliveryService, private userSrvice:UserService) { }

  ngOnInit(): void {
    debugger
    this.deliveryService.getDeliveriesByUserId().subscribe(
      data=>{this.listDelivery=data},
      err=>{console.log("err")}
    )
  }
  add(){
    
  }
//בודק על מי העכבר נמצא  בשביל להציג מחיקה ועדכון
  changeStatus(id:number)
  {
    debugger
    this.currentDelivery='act';
    this.currentId=id;
  }
}
