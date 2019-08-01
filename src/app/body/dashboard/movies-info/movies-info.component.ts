import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie-services';
import { Movie } from 'src/app/shared/models/movie-model';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit {
  movieId:string;
  movie:Movie;
  constructor(private router:Router, private rout:ActivatedRoute, private movServ:MovieService) { }

  ngOnInit() {
    
    
    this.rout.params.subscribe(
      (params) => {
        this.movieId = params["id"];
        this.movie = this.movServ.getMovieByID(this.movieId);
      }
    );
    
  }

}
