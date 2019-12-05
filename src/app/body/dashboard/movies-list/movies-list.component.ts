import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  LOADITEMS_MIN = 3;
  LOADITEMS_MID = 4;
  LOADITEMS_MAX = 6;

  loadmoreBtnDisabled: Boolean = false;
  btnMsg: String = "Load More";
  searchText: string;
  setSearchQuery: string = "";

  showResetBtn: Boolean = false;
  constructor(private router: Router, private rout: ActivatedRoute, private movies: MovieService, private http: HttpClient) {
  }

  ngOnInit() {

    this.filterList(false);
    
  }

  navigateInfo(movObj: Object) {
    this.movies.movIndex = this.movies.moviesList.indexOf(movObj);
    this.router.navigate([movObj["_id"]], { relativeTo: this.rout, fragment: 'review' });
  }


  filterList(flag) {
    var filteredList = [];
    if (flag) {
      if (this.setSearchQuery !== "") {
        filteredList = this.movies.moviesList;
        filteredList = this.movies.moviesList.filter((movie: Object) => {
          if (movie["name"].toLowerCase().includes(this.setSearchQuery.toLowerCase())) {
            return movie;
          }
        });
      }

      if (filteredList.length == 0) {
        filteredList = this.movies.moviesList;

      } else {
        this.showResetBtn = true;

      }
      return filteredList;

    } else {
      this.setSearchQuery = "";
    }

  }


  loadmore() {


    // console.log("load more!!");
    var moreItems = 0;

    if (window.screen.width <= 500) {
      moreItems = this.LOADITEMS_MIN;
    } else if (window.screen.width > 500 && window.screen.width <= 1024) {
      moreItems = this.LOADITEMS_MID;
    } else {
      moreItems = this.LOADITEMS_MAX;
    }

    var url = "http://localhost:8000/getdata/" + this.movies.moviesList.length + "/" + moreItems;
    this.http.get(url).subscribe((list: Array<Object>) => {
      if (list.length == 0) {
        this.loadmoreBtnDisabled = true;
        this.btnMsg = "No more Movies Available"
      }
      // console.log(list);
      // console.log(this.movies.moviesList);
      this.movies.moviesList = this.movies.moviesList.concat(list);
      console.log(this.movies.moviesList);
      this.searchText = "";

    });
  }


  getSearch(squery) {

    if (squery.value != "") {
      console.log(squery.value);

      var url = "http://localhost:8000/search/" + squery.value;

      this.http.get(url).subscribe((resData: Array<any>) => {
        this.movies.moviesList = resData;
        // console.log(resData);
        if (resData.length == 0) {
          this.showResetBtn = true;
          this.searchText = "No movie found with name " + squery.value + "!!!";
        } else {
          this.searchText = "";
        }
      });
    } else {
      this.searchText = "Please enter movie name.";
    }



  }

  resetData() {

    var moreItems = 0;

    if (window.screen.width <= 500) {
      moreItems = this.LOADITEMS_MIN;
    } else if (window.screen.width > 500 && window.screen.width <= 1024) {
      moreItems = this.LOADITEMS_MID;
    } else {
      moreItems = this.LOADITEMS_MAX;
    }

    var URL = "http://localhost:8000/getdata/0/" + moreItems;

    this.http.get(URL).subscribe((resData: Array<any>) => {

      this.movies.moviesList = resData;


      // console.log(this.movies.moviesList);
      this.setSearchQuery = "";

      this.loadmoreBtnDisabled = false;
      this.showResetBtn = false;
      this.setSearchQuery = "";


      this.btnMsg = "Load More";

    });



  }

  resetSearch() {
    this.searchText = "";
  }


  

}
