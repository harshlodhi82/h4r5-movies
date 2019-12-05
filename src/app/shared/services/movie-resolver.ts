import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieService } from './movie-services';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieResolver implements Resolve<String>{

    LOADITEMS_MIN = 3;
    LOADITEMS_MID = 4;
    LOADITEMS_MAX = 6;


    constructor(private movieServ: MovieService, private http: HttpClient) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {

        var moreItems = 0;

        if (window.screen.width <= 500) {
            moreItems = this.LOADITEMS_MIN;
        } else if (window.screen.width > 500 && window.screen.width <= 1024) {
            moreItems = this.LOADITEMS_MID;
        } else {
            moreItems = this.LOADITEMS_MAX;
        }

        var URL = "http://localhost:8000/getdata/0/" + moreItems;

        return this.http.get(URL);

    }

}