import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/classes/Customer';
import { CustomerService } from '../services/customer.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
newCustomer:Customer=new Customer();

@ViewChild('addresstext') addresstext:  ElementRef;

  constructor(private userService:UserService, private customerService:CustomerService) { }

  ngOnInit(): void {
    if(this.customerService.isEdit==true)
    this.customerService.getCustomerById().subscribe(
      data=>{this.newCustomer=data}
    )
      

  }


  add()
  {
    if(this.customerService.isEdit==false)
    {
        this.newCustomer.user_id=this.userService.currentUser.id;
        this.customerService.addCustomer(this.newCustomer).subscribe(data=>{
        console.log("suc");
        })
    }
    else{
      this.customerService.update(this.newCustomer).subscribe(
        data=>{console.log("suc")
        })

        this.customerService.isEdit=false;
        this.newCustomer=new Customer();
      
    }
  }




  getPlaceAutocomplete() {
    debugger
    const autocomplete  =  new  google.maps.places.Autocomplete(this.addresstext.nativeElement,
    {
      componentRestrictions: { country:  'IL' },
      types: ['establishment', 'geocode'] 
  
    });
    // google.maps.event.addListener(autocomplete, 'place_changed', () => {
    //   const place  =  autocomplete.getPlace();
    //   console.log(place);


      //לבדוק אם זה אמור להיות כאן
    //   const  myLatlng  =  place.geometry.location;
    //   const  mapOptions  = {
    //     zoom:  15,
    //     center:  myLatlng
    // };

    // const map  =  new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
    // const  marker  =  new  google.maps.Marker({
    //   position:  myLatlng,
    //   title:  place.name
    // });
    // marker.setMap(map);
    //////////////////////////////////////////////

    // });



   
  }
}
