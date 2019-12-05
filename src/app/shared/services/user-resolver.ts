import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from './users-services';
import { MovieService } from './movie-services';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserResolver implements Resolve<String>{

    constructor(private router: Router,private userServ: UserService, private movieServ: MovieService, private http: HttpClient) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        if (localStorage.getItem("currentStatus")) {

            var email = localStorage.getItem("email");
            if (!this.userServ.currentUser && localStorage.getItem("currentStatus").includes('Online')) {
                var url = "http://localhost:8000/getData/email/";
                return this.http.post(url, { email: email.trim() });

            } else {
                // console.log("User data already inserted");
                return true;
            }
        }else{
            console.log("errrrrrrrrrrror");
            this.router.navigate(["/login"]);
            return false
        }

    }

}