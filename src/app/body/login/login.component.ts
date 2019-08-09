import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = null;

  constructor(private userServ:UserService, private router:Router) { }

  ngOnInit() {
  }

  validater(form:NgForm){
    console.log(form);
    
    if (!this.userServ.validate(form.value.email)){
      if(this.userServ.validatePass(form.value.email, form.value.password)){
        this.error = null;
        this.userServ.currentStatus = 'Online';
        this.router.navigate(["/home"]);
      }else{
        this.userServ.currentStatus = 'Offline';
        this.error = "Wrong Password!";
      }
    }else{
      this.userServ.currentStatus = 'Offline';
      this.error = "Entered wrong Email!";
      
    }
  }

}
