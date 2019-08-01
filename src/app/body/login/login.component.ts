import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServ:UserService, private router:Router) { }

  ngOnInit() {
  }

  validater(email, pass){
    if (!this.userServ.validate(email.value)){
      if(this.userServ.validatePass(email.value, pass.value)){
        this.router.navigate(["/home"]);
      }else{
        console.log("Wrong Password");
        
      }
    }else{
      console.log("Enter valid Email.");
      
    }
  }

}
