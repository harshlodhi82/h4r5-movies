import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';
import { UserService } from 'src/app/shared/services/users-services';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit, OnChanges {

  movieObj: Object;

  movId: string;
  likes: number = 0;
  dislikes: number = 0;
  statusLD: number = 0;
  movReviewrName: string;

  movRating: number = 0;
  usrRating: number = 0;

  movIndex: number = 0;

  showStars: Boolean = false;

  starColor = [
    { color: "grey" },
    { color: "grey" },
    { color: "grey" },
    { color: "grey" },
    { color: "grey" }
  ];

  constructor(private router: Router, private rout: ActivatedRoute, private userServ: UserService, private http: HttpClient, private movServ: MovieService) {
    this.rout.data.subscribe((data) => {
      // console.log(data);

      if (!data["movie"] || data["movie"].length == 0) {
        router.navigate(["/page-not-found"], { relativeTo: rout });
      } else {
        this.movieObj = data["movie"][0];

        this.movId = this.movieObj["_id"];
        this.likes = this.movieObj["likes"];
        this.dislikes = this.movieObj["dislikes"];
        this.movRating = this.movieObj["ratings"]["rating"];
        this.usrRating = this.userServ.getMovieRates(this.movId);
        var movReviewr = this.movieObj["reviewer"];

        var url = "http://localhost:8000/get/username";
        this.http.post(url, { usrID: movReviewr }).subscribe((resData) => {
          var fname = resData["firstName"];
          var lname = resData["lastName"];

          this.movReviewrName = fname + " " + lname;

        });

      }
      // console.log(this.userServ.currentUser);
      // console.log(this.usrRating);
    });


  }

  ngOnInit() {
    this.rout.fragment.subscribe((frag) => {
      const element = document.querySelector("#" + frag)
      if (element) {

        element.scrollIntoView();
      }
    });
  }

  ngOnChanges() {
  }

  ngDoCheck() {
    this.usrRating = this.userServ.getMovieRates(this.movId);
    this.styleStar(this.usrRating);

    if (this.userServ.currentUser.getLikedMovie.includes(this.movId)) {
      this.statusLD = 2;
    } else if (this.userServ.currentUser.getDislikedMovie.includes(this.movId)) {
      this.statusLD = 1;
    } else {
      this.statusLD = 0;
    }
  }

  onLike() {


    var userID = this.userServ.currentUser.getId;

    var url = "http://localhost:8000/update/2/" + userID.toString() + "/" + this.movId;

    this.http.get(url).subscribe((resData) => {


      var getUrl = "http://localhost:8000/get/bundal/ld/" + userID.toString() + "/" + this.movId;
      this.http.get(getUrl).subscribe((bundle) => {
        // console.log(bundle);
        this.userServ.currentUser.setLikedMovieArray = bundle["uLArray"];
        this.userServ.currentUser.setDislikedMovieArray = bundle["uDArray"];
        this.likes = bundle["mLikes"];
        this.dislikes = bundle["mDislikes"];
        this.movieObj["likes"] = bundle["mLikes"];
        this.movieObj["dislikes"] = bundle["mDislikes"];

        this.movServ.moviesList[this.movServ.movIndex]["likes"] = bundle["mLikes"];
        this.movServ.moviesList[this.movServ.movIndex]["dislikes"] = bundle["mDislikes"];


        this.statusLD = 2;
      });
    });
  }


  onDisLike() {
    var userID = this.userServ.currentUser.getId;

    var url = "http://localhost:8000/update/1/" + userID.toString() + "/" + this.movId;

    this.http.get(url).subscribe((resData) => {


      var getUrl = "http://localhost:8000/get/bundal/ld/" + userID.toString() + "/" + this.movId;
      this.http.get(getUrl).subscribe((bundle) => {

        this.userServ.currentUser.setLikedMovieArray = bundle["uLArray"];
        this.userServ.currentUser.setDislikedMovieArray = bundle["uDArray"];
        this.likes = bundle["mLikes"];
        this.dislikes = bundle["mDislikes"];

        this.movServ.moviesList[this.movServ.movIndex]["likes"] = bundle["mLikes"];
        this.movServ.moviesList[this.movServ.movIndex]["dislikes"] = bundle["mDislikes"];

        this.movieObj["likes"] = bundle["mLikes"];
        this.movieObj["dislikes"] = bundle["mDislikes"];



        this.statusLD = 1;
      });
    });
  }

  showRating() {
    this.showStars = this.showStars ? false : true;
  }


  ldStyle(num: number) {
    var style = { 'color': '#a8a8a8' };

    if (this.statusLD === num) {
      style = this.movServ.setFontColor();
    }

    return style;

  }


  gotRating(rate: number) {
    // console.log(rate);

    rate += 1;

    var usrId = this.userServ.currentUser.getId;
    var movId = this.movId;



    var url = "http://localhost:8000/rate/" + usrId + "/" + movId + "/" + rate;
    this.http.get(url).subscribe((resData) => {
      this.userServ.currentUser.setMyRating(movId, rate);
      this.movRating = resData["movRatings"]["rating"];

      this.movServ.moviesList[this.movServ.movIndex]["ratings"] = resData["movRatings"];

      this.styleStar(rate);
    });




  }

  styleStar(rate: number) {

    this.starColor = [
      { color: "grey" },
      { color: "grey" },
      { color: "grey" },
      { color: "grey" },
      { color: "grey" }
    ];

    for (var i = 0; i < rate; i++) {
      this.starColor[i]["color"] = this.movServ.setFontColor().color;
    }
  }

}
