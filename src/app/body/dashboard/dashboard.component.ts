import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie-services';
import { UserService } from 'src/app/shared/services/users-services';
import { User } from 'src/app/shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText: string;
  constructor(private rout: ActivatedRoute, private movServ: MovieService, private userServ: UserService, private http: HttpClient) {

    rout.data.subscribe((data) => {
      if (data['user'] !== true) {
        this.userServ.currentStatus = localStorage.getItem("currentStatus");
        var user = new User(data['user'][0]["_id"], data['user'][0]["firstName"], data['user'][0]["lastName"], data['user'][0]["email"], data['user'][0]["password"], data['user'][0]["country"], data['user'][0]["likedMovies"], data['user'][0]["dislikedMovies"],data['user'][0]["myRatings"]);
        this.userServ.currentUser = user;
        // console.log("User Inserted!!");
        
      }

      this.movServ.moviesList = data["movieList"];

      // console.log(this.movServ.moviesList );
      
    });

  }

  ngOnInit() {
    
  }

}
