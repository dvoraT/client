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
 
  }

}
