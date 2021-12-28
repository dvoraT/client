import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/User';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
newUser:User=new User();
  constructor(private userService:UserService) { }

  ngOnInit(): void{
  }

  public addNewUser(newUser:User)
  { debugger
        alert('kk')

    // this.userService.signUp(7).subscribe(u=>{
    this.userService.signUp(this.newUser).subscribe(u=>{

      alert(u)
    });
  }

}
