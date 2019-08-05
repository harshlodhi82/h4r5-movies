import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie-services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText:string;
  constructor(private movServ:MovieService) { }

  ngOnInit() {
  }

  getSearch(squery){
    var flag = true;
    this.movServ.moviesList.forEach((movie) =>{
      if(movie.getName.toLowerCase().includes(squery.value.toLowerCase())){
         this.searchText = "Showing"
         console.log(this.searchText);
         flag = false;
         return;
      }
    });

    if(flag){
      this.searchText = "No movie found with name "+squery.value+"!!!";
    }else{
      this.searchText ="";
    }
  }

  resetSearch(){
    this.searchText ="";
  }

}
