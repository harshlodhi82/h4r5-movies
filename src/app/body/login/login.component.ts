import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { MovieService } from 'src/app/shared/services/movie-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = null;

  constructor(private userServ: UserService, private router: Router, private http: HttpClient, private movServe:MovieService) { }

  ngOnInit() {
  }

  validater(form: NgForm) {
    // console.log(form);

    this.userServ.validate(form.value.email, form.value.password, 0).then((data) =>{
      // console.log("==========",data);
      var valid = data;

      if (valid) {
        this.error = null;
        this.userServ.currentStatus = 'Online';
        localStorage.setItem("currentStatus",'Online');
        this.userServ.getDataOfUser(form.value.email).then((data)=>{
          localStorage.setItem("email",data[0]["email"]);
          var user = new User( data[0]["_id"], data[0]["firstName"],data[0]["lastName"],data[0]["email"],data[0]["password"],data[0]["country"],data[0]["likedMovies"],data[0]["dislikedMovies"],data[0]["myRatings"]);
          
          this.userServ.currentUser = user;
          this.router.navigate(["/"]);
          
        });
        
      } else {
        this.userServ.currentStatus = 'Offline';
        localStorage.setItem("currentStatus",'Offline');
        this.error = "Entered wrong Email or Password!";
      }

    });
  }

}
