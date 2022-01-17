import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/classes/User';
import { UserService } from '../services/userService/user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myForm: FormGroup
  currentUser: User = new User();
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    
    // this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    // this.currentUser = this.userService.currentUser;
    this.userService.currentUser= JSON.parse(sessionStorage.getItem('currentUser'));
    
    debugger
    this.userService.getDetails().subscribe(
      data => { this.currentUser = data },
      err => { }
    )
    debugger
  }
  // public UpdateDetails(update:User){
  //   // פונקציה המעדכנת פרטים, צריך לעשות אותה
  //   alert('User update!')
  // }

edit()
{
  debugger
  this.userService.edit(this.currentUser).subscribe(
    data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(this.currentUser));
    }
  )
}
}


