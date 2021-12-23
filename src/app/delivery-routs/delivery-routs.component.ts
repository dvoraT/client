import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-routs',
  templateUrl: './delivery-routs.component.html',
  styleUrls: ['./delivery-routs.component.css']
})
export class DeliveryRoutsComponent implements OnInit {
nameToDisplay:string="deliveryDetails";
  constructor() { }

  ngOnInit(): void { 
    
  }
  ChangeName(name:string){
    this.nameToDisplay=name;
  }

}
