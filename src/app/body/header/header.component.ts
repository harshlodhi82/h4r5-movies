import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/users-services';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  test = 'collapse'
  title = 'H4R5 Movies';
  private cUser:string="Offline";
  constructor(private userServ:UserService, private router:Router, private movServe:MovieService) { 
   
  }

  ngOnInit() {
    // this.attrAdder();
  }

  logout(){
    this.userServ.currentStatus = "Offline"
    this.userServ.currentUser = null;
    localStorage.setItem("currentStatus",'Offline');
    localStorage.setItem("email",null);
    this.router.navigate(["/login"]);
    localStorage.clear();
  }

  attrAdder(){
    let mWidth = window.screen.width;
    
    if(mWidth < 1000){
      var elm = document.getElementsByClassName('navbar-nav')[0].children
      // console.log(elm);
      
      for (let i = 0; i < elm.length; i++) {
        const element = elm[i];
        element.setAttribute('data-toggle','collapse')
        element.setAttribute('data-target','#navbarSupportedContent')
      }
    }
  }

}
