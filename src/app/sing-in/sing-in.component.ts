import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  constructor(public userService:UserService) { }

  
  ngOnInit(): void {
  }

  signIn(){
    debugger
    this.userService.isUserExist();
    
  }

  getUserId()
  { debugger
    this.userService.getUserId();
  }

}
