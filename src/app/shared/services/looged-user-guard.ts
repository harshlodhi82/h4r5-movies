import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './users-services';
import { Injectable } from '@angular/core';

@Injectable()
export class LoogedInUser implements CanActivate{
    constructor(private router: Router, private userServ: UserService) {
    }
    canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        console.log("run LoogedInUser resolver");

        var a = new Promise(
            (resolve, reject) => {
                resolve(localStorage.getItem("currentStatus") === "Online");
            }
        );
        return a.then(
            (boo: boolean) => {
                if (boo) {
                    this.router.navigate(["/home"]);
                } else {
                    
                    return true;
                }

            }
        );
    }
}