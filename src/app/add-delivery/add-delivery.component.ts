import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/classes/Delivery';
import { DeliveryService } from '../services/delivery.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
public newDelivery=new Delivery();
  constructor(public deliveryService:DeliveryService,public userService:UserService) { }

  ngOnInit(): void {
  }

  add(){
    debugger
    // this.newDelivery.user_id=this.userService.
    if(this.userService.currentUserId==null)
    {
      alert("אינך מחובר!! עליך להתחבר למערכת לפני הוספת שליח")
    }
    else{
    this.newDelivery.user_id=this.userService.currentUserId;
    this.deliveryService.addDelivery(this.newDelivery).subscribe(data=>{
      if(data==true)
      alert("השליח "+ this.newDelivery.f_name+" "+this.newDelivery.l_name+" נוסף למערכת");
      else
      alert("השליח לא נוסף למערכת")
    })
  }
}

}
