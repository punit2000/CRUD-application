import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  feedbackForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    name:new FormControl(null,Validators.required),
    message:new FormControl(null,Validators.required)

  })

  username:String='';
  constructor(private _router:Router, private _userService:UserService, private _feedbackService:FeedbackService) { 
    this._userService.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data){
    this.username = data.username;
  }
  ngOnInit() {
  }


  logout(){
    this._userService.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }
  submit(){
    console.log(JSON.stringify(this.feedbackForm.value))
    this._feedbackService.submit(JSON.stringify(this.feedbackForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/feedback']);},
      error=>console.error(error)
    )
 
  }
  



}
