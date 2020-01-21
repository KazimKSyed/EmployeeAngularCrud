import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  title = 'logIn';
  constructor() { }

  
  formdata : FormGroup;
  ngOnInit() {
    this.formdata=new FormGroup({
      username: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      password:new FormControl("",this.passwordvalidation)
    });
  }

  passwordvalidation(formcontrol){
    if(formcontrol.value.length<5){
      return{"password":true};
    }
  }


onClickSubmit(data){
  console.log(data.username);
  if(data.username=="syedkazim" && data.password=='123456'){
    alert("Login Successful");
  }else{
    alert("Invalid Login");
  }
}

}
