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
  movieList:Array<Movie>;
  constructor(private router:Router ,private rout:ActivatedRoute, private movies:MovieService) { }

  ngOnInit() {
    this.movieList = this.movies.moviesList;
  }
  navigateInfo(id:string){
    this.router.navigate([id],{relativeTo:this.rout});
  }

}
