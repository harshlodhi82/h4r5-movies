import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userServ: UserService, private router:Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.userServ.currentStatus = "Offline"
    this.router.navigate(["/login"]);
  }

}
