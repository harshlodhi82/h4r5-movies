import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'H4R5 Movies';
  private cUser:string="Offline";
  constructor(private userServ:UserService, private router:Router) { 
   
  }

  ngOnInit() {
    
  }

  logout(){
    this.userServ.currentStatus = "Offline"
    this.router.navigate(["/login"]);
  }

}
