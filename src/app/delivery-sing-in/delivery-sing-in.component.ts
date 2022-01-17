import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-delivery-sing-in',
  templateUrl: './delivery-sing-in.component.html',
  styleUrls: ['./delivery-sing-in.component.css']
})
export class DeliverySingInComponent implements OnInit {
phoneNumber=''
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit(): void {
  }
  signIn(){
    debugger
this.deliveryService.isExist(this.phoneNumber);
  }
}
