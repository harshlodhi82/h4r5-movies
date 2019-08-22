import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  error = null;

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit() {

  }


  createuser(form: NgForm) {
    console.log(form);
    console.log("Validate");
    if (form.value.email && form.value.password) {
      if (form.value.password === form.value["conf-password"]) {
        if (this.userServ.validate(form.value.email)) {
          this.error = null;
          this.userServ.currentStatus = 'Online';
          this.userServ.createUser(form.value.email, form.value.password);
          this.router.navigate(["/home"]);
        } else {
          // console.log("Email is already exist.");
          this.userServ.currentStatus = 'Offline';
          this.error = "Email is already exist!";
        }


      } else {
        // console.log();
        this.userServ.currentStatus = 'Offline';
        this.error = "Password is not matching!";
      }
    } else {
        this.userServ.currentStatus = 'Offline';
        this.error = "Please enter empty fields.";
    }




  }

}
