import { Component, OnInit } from '@angular/core';
import { Order } from 'src/classes/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
listOrder:Array<Order>=new Array<Order>();
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(
      data=>{this.listOrder=data},
      err=>{console.log("err")}
    )
  }


}
