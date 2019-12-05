import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userServ: UserService, private router:Router, private movServ:MovieService) {
  }

  ngOnInit() {
  }

  logout() {
    this.userServ.currentStatus = "Offline"
    this.router.navigate(["/login"]);
  }

}
