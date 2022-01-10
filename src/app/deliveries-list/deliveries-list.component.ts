import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/classes/Delivery';
import { DeliveryService } from '../services/delivery.service';
import { PersonalAereaService } from '../services/personal-aerea.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.css']
})
export class DeliveriesListComponent implements OnInit {
public currentDelivery="";
public currentId=0;
num=1;
listDelivery:Array<Delivery>=new Array<Delivery>()
  constructor(private deliveryService:DeliveryService, private userSrvice:UserService,private paSrvice:PersonalAereaService) { }

  
  ngOnInit(): void {
debugger

    this.deliveryService.getDeliveriesByUserId().subscribe(
      data=>{this.listDelivery=data},
      err=>{console.log("err")}
    )

  }
  add(){
    
  }
//בודק על מי לחצו בשביל להציג מחיקה ועדכון
  changeStatus(id:number)
  {
    debugger
    this.currentDelivery='act';
    this.currentId=id;
  }

//מחיקת שליח
  delete(id:number){
    this.deliveryService.deleteDelivery(id).subscribe
    (
      data=>{
        if(data==true)
        {
          this.deliveryService.getDeliveriesByUserId().subscribe
          (
            suc=>{
                    this.listDelivery=suc;
                 }
          )
        }
      },
      err=>{console.log("err")}
    )

  }

  //שולח לפונקציה בסרוויס את האיידי של השליח הנוכחי
  update(){
    this.paSrvice.nameToDisplay="addDelivery";
    this.deliveryService.currentIdDelivery=this.currentId;
    this.deliveryService.isEdit=true;


  }
}
