import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})

// declare var $: any;
export class NewOrderComponent implements OnInit {
 public Exported: any;
  public Destination: any;

  @ViewChild('search1')
  public searchElementRef1: ElementRef;
  @ViewChild('search2')
  public searchElementRef2: ElementRef;
  latitude: number;
  longitude: number;
  zoom: number;
  public latlongs: any = []
  public latlong: any = {}
  public searchControl1: FormControl;
  public searchControl2: FormControl;
  marker: any;
  
  // private NgZone: NgZone, private MapsAPILoader: MapsAPILoader
  constructor() { }
  ngOnInit() {
  //   $('[data-toggle="popover"]').popover();
  //   this.latitude = 31.046051;
  //   this.longitude = 34.851612;
  //   this.zoom = 8;
  //   this.searchControl1 = new FormControl();
  //   this.searchControl2 = new FormControl();
  //  // this.setCurrentPosition();
  //   this.MapsAPILoader.load().then(() => {
  //     const autocomplete1 = new google.maps.places.Autocomplete(this.searchElementRef1.nativeElement, {
  //       types: [],
  //       componentRestrictions: { 'country': 'IL' }
  //     });
  //     autocomplete1.addListener('place_changed', () => {
  //       debugger
  //       this.NgZone.run(() => {
  //         const place: google.maps.places.PlaceResult = autocomplete1.getPlace();
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
  //         this.Exported = place

  //       });
  //     });
  //   });
  //   this.MapsAPILoader.load().then(() => {
  //     const autocomplete2 = new google.maps.places.Autocomplete(this.searchElementRef2.nativeElement, {
  //       types: [],
  //       componentRestrictions: { 'country': 'IL' }
  //     });
  //     autocomplete2.addListener('place_changed', () => {
  //       debugger
  //       this.NgZone.run(() => {
  //         const place: google.maps.places.PlaceResult = autocomplete2.getPlace();
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
  //         this.Destination = place
  //       });
  //     });
  //   });
  }

}
