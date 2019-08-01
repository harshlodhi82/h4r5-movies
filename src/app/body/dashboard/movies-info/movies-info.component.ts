import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';
import { Movie } from 'src/app/shared/models/movie-model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/users-services';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit {
  movieId: string;
  movie: Movie;

  lbtnClicked:boolean ;
  dlbtnClicked:boolean;
  constructor(private router: Router, private rout: ActivatedRoute, private movServ: MovieService, private userServ: UserService) { }

  ngOnInit() {


    this.rout.params.subscribe(
      (params) => {
        this.movieId = params["id"];
        this.movie = this.movServ.getMovieByID(this.movieId);
      }
    );
      //console.log("runnnning "+this.userServ.likedMovieFound(this.movie));
      
    this.lbtnClicked = this.userServ.likedMovieFound(this.movie)? true:false;
    this.dlbtnClicked = this.userServ.dislikedMovieFound(this.movie)? true:false;

  }


  oneLike() {

    //console.log(this.userServ.currentUser.getLikedMovie.length);
  
    var flag = true;
    this.userServ.currentUser.getLikedMovie.forEach(movie => {
      //console.log(movie.getId);
      if (movie.getId == this.movie.getId) {
        flag = false;
        return;
      }
    });

    var flag1 = false;
    this.userServ.currentUser.getDislikedMovie.forEach(movie => {
      if (movie.getId == this.movie.getId) {
        flag1 = true;
        return;
      }
    });

    if (flag || this.userServ.currentUser.getLikedMovie.length == 0) {
      this.lbtnClicked = true;
      this.dlbtnClicked = false;
      this.userServ.addLikedMovie(this.movie);
      this.movie.pLikes();
      if(flag1){
        this.userServ.rmDislikedMovie(this.movie);
        this.movie.mDislikes();
      }
    }else {
      console.log("Already Liked!!");
    }
  }

  oneDisLike() {

    var flag = true;
    this.userServ.currentUser.getDislikedMovie.forEach(movie => {
      if (movie.getId == this.movie.getId) {
        flag = false;
        return;
      }
    });

    var flag1 = false;
    this.userServ.currentUser.getLikedMovie.forEach(movie => {
      //console.log(movie.getId);
      if (movie.getId == this.movie.getId) {
        flag1 = true;
        return;
      }
    });

    //console.log();
    if (flag || this.userServ.currentUser.getDislikedMovie.length == 0) {
      this.dlbtnClicked = true;
      this.lbtnClicked = false;
      this.userServ.addDislikedMovie(this.movie);
      this.movie.pDislikes();
      
      if(flag1){
       // console.log("Running2");
        this.userServ.rmLikedMovie(this.movie);
        this.movie.mLikes();
      }
    } else {
      console.log("Already Disliked!!");
    }
  }

}
