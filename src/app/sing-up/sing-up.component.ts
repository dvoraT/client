import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/User';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
newUser:User=new User();
  constructor() { }

  ngOnInit(): void {
  }

  public addNewUser(newUser:User)
  { debugger
    alert('Add user!')
  }

}
