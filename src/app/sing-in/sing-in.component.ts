import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  userName:""
  password:""
  constructor(public userService:UserService) { }

  
  ngOnInit(): void {
  }

  check(){
    debugger
    this.userService.isUserExist(this.userName,this.password);
    
  }

  getUserId()
  { debugger
    this.userService.getUserId(this.userName,this.password);
  }

}
