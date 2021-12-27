import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/classes/User';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myForm:FormGroup
  // newUser:User=new User();
  constructor() { }

  ngOnInit(): void {
  }
// public UpdateDetails(update:User){
//   // פונקציה המעדכנת פרטים, צריך לעשות אותה
//   alert('User update!')
// }
}

