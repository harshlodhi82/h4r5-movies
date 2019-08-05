import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';
import { Movie } from 'src/app/shared/models/movie-model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movieList: Array<Movie>;
  // filteredList:Array<Movie>;
  constructor(private router: Router, private rout: ActivatedRoute, private movies: MovieService) { }

  ngOnInit() {

    this.movieList = this.movies.moviesList;
    this.filterList(false);
    console.log(">>>>RUNNN");



  }
  navigateInfo(id: string) {
    this.router.navigate([id], { relativeTo: this.rout });
  }

  filterList(flag) {
    
    if (flag) {
      var filteredList = this.movieList;
      filteredList = this.movieList.filter((movie: any) => {
        if (movie.getName.toLowerCase().includes(this.movies.getSearchQuery.toLowerCase())) {
          return movie;
        }
      });

      if (filteredList.length == 0) {
        filteredList = this.movieList;
      }

      return filteredList;
    } else {
      this.movies.setSearchQuery = "";
    }

  }

}
