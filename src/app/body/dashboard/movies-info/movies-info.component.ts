import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';
import { Movie } from 'src/app/shared/models/movie-model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/users-services';

declare var $: any;

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit {
  movieId: string;
  movie: Movie;
  ratingClicked: boolean = false;

  starList: Array<{}> = [
    { 'color': 'grey' },
    { 'color': 'grey' },
    { 'color': 'grey' },
    { 'color': 'grey' },
    { 'color': 'grey' }
  ];

  lbtnClicked: boolean;
  dlbtnClicked: boolean;
  constructor(private router: Router, private rout: ActivatedRoute, private movServ: MovieService, private userServ: UserService) { }

  ngOnInit() {

    // $("[data-circle-graph]").each(function() {
    //   var $graph = $(this),
    //       percent = parseInt($graph.data('percent'), 10),
    //       deg = 360*percent/100;
    //   if(percent > 50) {
    //     $graph.addClass('gt-50');
    //   }
    //   $graph.find('.circle-graph-progress-fill').css('transform','rotate('+ deg +'deg)');
    //   $graph.find('.circle-graph-percents-number').html(percent+'%');
    // });
    
    


    this.rout.params.subscribe(
      (params) => {
        this.movieId = params["id"];
        this.movie = this.movServ.getMovieByID(this.movieId);
        //console.log(this.ratingClicked);
        if (this.movieId in this.userServ.currentUser.getMyRatings()) {
          this.setStyleOnRating(this.userServ.currentUser.getMyRatings()[this.movie.getId]);
        } else {
          this.setStyleOnRatingToGrey();
        }
        this.lbtnClicked = this.userServ.likedMovieFound(this.movie) ? true : false;
        this.dlbtnClicked = this.userServ.dislikedMovieFound(this.movie) ? true : false;
      }
    );
    //console.log("runnnning "+this.userServ.likedMovieFound(this.movie));

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
      if (flag1) {
        this.userServ.rmDislikedMovie(this.movie);
        this.movie.mDislikes();
      }
    } else {
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

      if (flag1) {
        // console.log("Running2");
        this.userServ.rmLikedMovie(this.movie);
        this.movie.mLikes();
      }
    } else {
      console.log("Already Disliked!!");
    }
  }

  likeBtnColChanger() {
    var style = { 'color': '#a8a8a8' }
    if (this.lbtnClicked) {
      style = { 'color': '#ff334e ' };
    }
    return style;
  }

  dislikeBtnColChanger() {
    var style = { 'color': '#a8a8a8' }
    if (this.dlbtnClicked) {
      style = { 'color': '#ff334e' };
    }
    return style;
  }

  showRating() {
    this.ratingClicked = this.ratingClicked ? false : true;
  }

  setDisplay() {
    if (this.ratingClicked) {
      return { 'display': 'block' }
    }

    return { 'display': 'none' }
  }

  gotRating(num: number) {

    var a =document.getElementsByClassName("circle-graph-progress");
    
    console.log(a);
    

    console.log(this.movie.getRating);
    var totalRate = this.movie.getRating["Rating"];
    var totalUsers = this.movie.getRating["users"];

    console.log("totalUsers : " + totalUsers);
    console.log("totalRate : " + totalRate);

    if (!(this.movieId in this.userServ.currentUser.getMyRatings())) {
      totalUsers += 1;
      var sum = totalRate * (totalUsers - 1);
      totalRate = (sum + (num * 20)) / totalUsers;


    } else {

      if (totalUsers === 1) {
        var sum = totalRate * (totalUsers - 1);
        totalRate = (sum + (num * 20)) / totalUsers;
      } else {
        var sum = (totalRate * (totalUsers)) - (this.userServ.currentUser.getMyRatings()[this.movie.getId] * 20);
        totalRate = (sum + (num * 20)) / totalUsers;
      }

    }

    this.userServ.currentUser.setMyRating(this.movieId, num);
    this.setStyleOnRating(num);
    this.movie.setRating(eval(totalUsers), totalRate);

    var deg = 360*totalRate/100;
    a["0"].style.transform = 'rotate('+ deg +'deg)';

  }

  setStyleOnRating(num) {
    //console.log("this is also");

    this.starList = [
      { 'color': 'grey' },
      { 'color': 'grey' },
      { 'color': 'grey' },
      { 'color': 'grey' },
      { 'color': 'grey' }
    ];
    for (var i = 0; i < num; i++) {
      this.starList[i] = { 'color': '#ffcc00' };
    }
  }

  setStyleOnRatingToGrey() {
    this.starList = [
      { 'color': 'grey' },
      { 'color': 'grey' },
      { 'color': 'grey' },
      { 'color': 'grey' },
      { 'color': 'grey' }
    ];
  }

  setColoredRating(num: number) {
    return this.starList[num - 1];
  }

}
