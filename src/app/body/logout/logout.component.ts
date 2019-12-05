import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { MovieService } from 'src/app/shared/services/movie-services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  error = null;

  constructor(private userServ: UserService, private router: Router, private http: HttpClient, private movServe:MovieService) { }

  ngOnInit() {

  }


  createuser(form: NgForm) {
 
    if (form.value.email && form.value.password) {
      if (form.value.password === form.value["conf-password"]) {

        this.userServ.validate(form.value.email, form.value.password, 1).then((data) => {
          var newUser = data;

          if (newUser) {
            this.error = null;
            this.userServ.currentStatus = 'Online';
            localStorage.setItem("currentStatus", 'Online');
            localStorage.setItem("email", form.value.email);

            var _body = {
              fname: form.value.fname,
              lname: form.value.lname,
              email: form.value.email,
              password: form.value.password,
              country: "india"
            };

            var url = "http://localhost:8000/createuser/";
            this.http.post(url, _body).subscribe((resData) => {

              var newUser = new User(resData["_id"], form.value.fname, form.value.lname, form.value.email, form.value.password, "india", [], [], []);

              this.userServ.currentUser = newUser;
              this.userServ.currentStatus = "Online";
              this.router.navigate(["/home"]);
            });
            
          } else {
            this.userServ.currentStatus = 'Offline';
            localStorage.setItem("currentStatus", 'Offline');
            this.error = "Email is already exist!";
          }
        });

      } else {
        this.userServ.currentStatus = 'Offline';
        this.error = "Password is not matching!";
      }
    } else {
      this.userServ.currentStatus = 'Offline';
      this.error = "Please enter empty fields.";
    }




  }

}
