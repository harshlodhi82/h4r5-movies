import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Movie } from 'src/app/shared/models/movie-model';
import { NgForm } from '@angular/forms'
import { MovieService } from 'src/app/shared/services/movie-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private router:Router,private movServ:MovieService) { }

  ngOnInit() {
  }

  addReview(form:NgForm){
    console.log(form);
    this.movServ.availID += 1;
    var movie = new Movie(this.movServ.availID.toString(),form.value.name,form.value.review, form.value.img);
    this.movServ.moviesList.unshift(movie);
    this.router.navigate(["/home"]);
  }

}
