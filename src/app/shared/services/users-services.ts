import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

export class UserService {
    currentStatus: string = "Offline";

    currentUser: User = null;


    constructor(private http: HttpClient) {
        this.currentStatus = localStorage.getItem("currentStatus");
    }


    async validate(email: string, pass: String, flag: number) {

        if (flag == 0) {
            var _flag = false;
        } else if (flag == 1) {
            var _flag = true;
        }


        var url = "http://localhost:8000/validate/email/" + email + "/" + pass + "/" + flag;
        await this.http.get(url).toPromise().then((resData) => {

            if (flag == 0) {
                _flag = resData["valid"];

            } else if (flag == 1) {
                _flag = resData["newUser"];
            }
        });
        return _flag;
    }


    async getDataOfUser(email: string) {
        var data;
        var url = "http://localhost:8000/getData/email/";
        await this.http.post(url, { email: email.trim() }).toPromise().then((resData) => {

            // console.log(resData);

            data = resData;
        });
        return data;
    }

    createUser(_fname: string, _lname: string, _email: string, pass: string, _country: string) {

        var _body = {
            fname: _fname,
            lname: _lname,
            email: _email,
            password: pass,
            country: _country
        };

        var url = "http://localhost:8000/createuser/";
        this.http.post(url, _body).subscribe((resData) => {
            var newUser = new User(resData["_id"], _fname, _lname, _email, pass, _country, [], [], []);
            this.currentUser = newUser;
            this.currentStatus = "Online";
        });
    }

    addLikedMovie(movieID: string) {
        var userID = this.currentUser.getId;

        var url = "http://localhost:8000/update/likedmovies";
        this.http.put(url, {
            movID: movieID,
            uID: userID
        }).subscribe((resData) => {
            // console.log(resData);
            this.currentUser.getLikedMovie.push(movieID);
        });
    }

    addDislikedMovie(movieID: string) {

        var userID = this.currentUser.getId;

        var url = "http://localhost:8000/update/dislikedmovies";
        this.http.put(url, {
            movID: movieID,
            uID: userID
        }).subscribe((resData) => {
            // console.log(resData);
            this.currentUser.getDislikedMovie.push(movieID);
        });

    }

    rmLikedMovie(movieID: string) {
        var userID = this.currentUser.getId;

        var url = "http://localhost:8000/update/rm/likedmovies";
        this.http.put(url, {
            usrID: userID,
            movID: movieID
        }).subscribe((resData) => {
            // console.log(resData);

            this.currentUser.likedList = resData[0]["likedMovies"];
        });


    }

    rmDislikedMovie(movieID: string) {
        var userID = this.currentUser.getId;

        var url = "http://localhost:8000/update/rm/dislikedmovies";
        this.http.put(url, {
            usrID: userID,
            movID: movieID
        }).subscribe((resData) => {
            // console.log(resData);

            this.currentUser.dislikedList = resData[0]["dislikedMovies"];
        });

    }

    likedMovieFound(movieId: string) {
        var flag = false;
        this.currentUser.getLikedMovie.forEach(movID => {
            if (movieId == movID) {
                flag = true;
                return;
            }
        });
        return flag;
    }

    dislikedMovieFound(movieId: string) {
        var flag = false;
        this.currentUser.getDislikedMovie.forEach(movID => {
            if (movieId == movID) {
                flag = true;
                return;
            }
        });
        return flag;
    }

    getMovieRates(movID: string) {

        var rates = 0;
        for (var i = 0; i < this.currentUser.getMyRatings.length; i++) {
            if (movID in this.currentUser.getMyRatings[i]) {
                rates = this.currentUser.getMyRatings[i][movID];
                // console.log('MOVIE RATES', rates);

                break;
            }
        }

        return rates;
    }





}
