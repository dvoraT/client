/// <reference  types="@types/googlemaps"  />

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-auotocomplet',
  templateUrl: './auotocomplet.component.html',
  styleUrls: ['./auotocomplet.component.css']
})



export class AuotocompletComponent implements AfterViewInit {
  
latitude=51.678418;
longitude=7.809007;

  @ViewChild('addresstext') addresstext:  ElementRef;
  @ViewChild('gmap') gmapElement:  any;
  // google.maps.event.addListener

 
  constructor() { 
    

  }
  // ngOnInit(): void {
    ngAfterViewInit():  void {
      debugger
    this.getPlaceAutocomplete();
  }


  getPlaceAutocomplete() {
    debugger
    const autocomplete  =  new  google.maps.places.Autocomplete(this.addresstext.nativeElement,
    {
      componentRestrictions: { country:  'IL' },
      types: ['establishment', 'geocode'] 
  
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place  =  autocomplete.getPlace();
      console.log(place);


      //לבדוק אם זה אמור להיות כאן
      const  myLatlng  =  place.geometry.location;
      const  mapOptions  = {
        zoom:  15,
        center:  myLatlng
    };

    const map  =  new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
    const  marker  =  new  google.maps.Marker({
      position:  myLatlng,
      title:  place.name
    });
    marker.setMap(map);
    //////////////////////////////////////////////

    });



   
  }
  OnChoseLocation(event)
  {
    console.log(event);
  }

  
}
