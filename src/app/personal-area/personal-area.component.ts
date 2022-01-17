import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';
import { PersonalAereaService } from '../services/personal-aerea.service';


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {
// public nameToDisplay='details';
public currentBackground:string='pic1.jpg';
public c_url;

public picUrl="../../assets/pictures/prsonalArea/"+this.currentBackground;

constructor(public router:Router,public deliveyServe:DeliveryService,public paService:PersonalAereaService) { }

  ngOnInit() {
    // this.router.navigate[('/PersonalArea')]
// this.router.navigate(['/PersonalArea/PersonalNav'])
this.paService.nameToDisplay='details';
  }
  

  ChangeName(name:string, pic:string){

    this.paService.nameToDisplay=name;
    this.currentBackground=pic;
    // this.c_url='../../assets/pictures/prsonalArea/'+this.currentBackground;
    // this.currentBackground=pic;
  }
//משנה את סטטוס שם הקומפוננטה הנוכחית כדי שיוכל להציג אותה.
  addD(){
    this.paService.nameToDisplay='addDelivery';
  }

  addC(){
    this.paService.nameToDisplay='addCustomer'
  }

}
