import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
    alert("userId:"+this.userService.currentUserId);
    
  }

}
