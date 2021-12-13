import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    console.log(`getElementById to ${el}`);
    el.scrollIntoView();
  }


}
