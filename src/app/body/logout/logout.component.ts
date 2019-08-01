import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userServ: UserService, private router:Router) { }

  ngOnInit() {

  }

  createuser(email, pass, cpass) {
    //console.log(email.value);
    
    if (pass.value === cpass.value) {
      if (this.userServ.validate(email.value)) {
        this.userServ.createUser(email.value,pass.value);
        this.router.navigate(["/home"]);
      }else{
        console.log("Email is already exist.");
      }

    }else{
      console.log("password is not matching.");
      
    }

  }

}
