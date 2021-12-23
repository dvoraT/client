import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {
public nameToDisplay='details';
public currentBackground:string='pic1.jpg';
public c_url;

public picUrl="../../assets/pictures/prsonalArea/"+this.currentBackground;

  constructor(public router:Router) { }

  ngOnInit() {
    // this.router.navigate[('/PersonalArea')]
// this.router.navigate(['/PersonalArea/PersonalNav'])
  }

  ChangeName(name:string){
    this.nameToDisplay=name;
    // this.currentBackground=pic;
    // this.c_url='../../assets/pictures/prsonalArea/'+this.currentBackground;
    // this.currentBackground=pic;
  }

}
