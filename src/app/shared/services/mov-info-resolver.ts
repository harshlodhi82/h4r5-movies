import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieService } from './movie-services';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './users-services';

@Injectable()
export class MovieInfoResolver implements Resolve<String>{

    constructor(private movieServ: MovieService, private http: HttpClient, private userServ: UserService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {

        var URL = "http://localhost:8000/get/movie/" + route.params.id;

        return this.http.get(URL);
        

    }

}