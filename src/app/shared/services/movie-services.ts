import { Movie } from '../models/movie-model';
import { HttpClient } from '@angular/common/http';
import { Const } from './const-service';

export class MovieService {
    private srchQuery = "";

    moviesList: Array<object> = [];
    movIndex:number = 0;

    availID: number;
  themeColor:string;


    constructor(private constServ:Const ,private http: HttpClient) {
        this.availID = this.moviesList.length;
        this.themeColor = constServ.THEME_COLOR;
    }


    setBG(){
        return {"background-color":this.themeColor};
    }

    setFontColor(){
        return {"color":this.themeColor};
    }

    setBgFontColor(){
        return {"color":"white", "background-color":this.themeColor};
    }

    get getSearchQuery() {
        return this.srchQuery;
    }

    set setSearchQuery(srchQuery) {

        this.srchQuery = srchQuery;
    }

    async getAllMovies() {

        var url = "http://localhost:8000/get/movies";

        await this.http.get(url).toPromise().then((resData: any) => {

            this.moviesList = resData;
            this.moviesList = this.moviesList.reverse();
            // console.log("hEY!! mOVIE LOADED");
            
            return this.moviesList;
        });

        return this.moviesList;
    }


    plusLike(movieId: string) {
        var url = "http://localhost:8000/update/likes";
        this.http.put(url, { movID: movieId }).subscribe((resData) => {
            // console.log(resData);

        })
    }

    async plusDislike(movieId: string) {
        var movie:Object;
        var url = "http://localhost:8000/update/dislikes";
        await this.http.put(url, { movID: movieId }).toPromise().then((resData) => {
            // console.log(resData);
            movie = resData[0];
        });

        return movie;
    }




}
