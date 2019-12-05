import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './users-services';
import { User } from '../models/user.model';

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private router: Router, private userServ: UserService) {
    }
    canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        console.log("run AppGuard resolver");

        var a = new Promise(
            (resolve, reject) => {
                resolve(localStorage.getItem("currentStatus") === "Offline");
            }
        );
        return a.then(
            (boo: boolean) => {
                if (!boo) {
                    return true;
                } else {
                    this.router.navigate(["/login"]);
                }

            }
        );
    }
}
