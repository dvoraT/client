import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {
public nameToDisplay='details'
  constructor(public router:Router) { }

  ngOnInit() {
    // this.router.navigate[('/PersonalArea')]
// this.router.navigate(['/PersonalArea/PersonalNav'])
  }

  ChangeName(name:string){
    this.nameToDisplay=name;
  }

}
