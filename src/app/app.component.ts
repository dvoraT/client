import { Component } from '@angular/core';
import { Router } from '@angular/router';
/// <reference  types="@types/googlemaps"  />
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    google: any
  title = 'client';
  constructor(public router:Router){}
  // ngOnInit(){
  //   this.router.navigate(['/Nav/Home'])
  // }
}

