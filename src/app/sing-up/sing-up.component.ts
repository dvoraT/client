import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/classes/User';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
newUser:User=new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void{
  }
//הוספת משתמש
  public addNewUser(newUser:User)
  { debugger
   
    this.userService.signUp(this.newUser).subscribe(
      data=>{
        console.log("נוסף למערכת");
        this.router.navigate(['/Home']);

      }, err=>{"שגיאה"});
  }

}


