import { User } from '../models/user.model';
import { Movie } from '../models/movie-model';

export class UserService {
    currentStatus:string = "Offline";

    currentUser:User;

    allUser: Array<User> = [
        new User("harshlodhi82@gmail.com", "harsh@999")
    ];


    validate(email: string) {
        var flag = true;
        this.allUser.forEach(user => {
            if (user.getEmail === email) {
                this.currentStatus = "Online";
                this.currentUser = user;
                flag = false;
                return;
            }
        });

        return flag;
    }

    validatePass(email, pass) {
        var flag = false;
        this.allUser.forEach(user => {
            if (user.getEmail === email) {
                if(user.getPass === pass){
                    this.currentUser = user;
                    flag = true;
                    return;
                }
            }
        });

        return flag;
    }

    createUser(email: string, pass: string) {
        var newUser = new User(email, pass);
        this.allUser.push(newUser);
        this.currentUser = newUser;
        this.currentStatus = "Online";
    }

    addLikedMovie(movie:Movie){
        this.currentUser.getLikedMovie.push(movie);
    }

    addDislikedMovie(movie:Movie){
        this.currentUser.getDislikedMovie.push(movie);
    }

    rmLikedMovie(movie:Movie){
        // this.currentUser.getLikedMovie.push(movie);
        var arr = [];
        this.currentUser.getLikedMovie.forEach(element => {
            if(element.getId != movie.getId){
                arr.push(element);
            }
        });

        this.currentUser.likedList = arr;

    }

    rmDislikedMovie(movie:Movie){
        // this.currentUser.getDislikedMovie.push(movie);


        var arr = [];
        this.currentUser.getDislikedMovie.forEach(element => {
            if(element.getId != movie.getId){
                arr.push(element);
            }
        });

        this.currentUser.dislikedList = arr;
    }

    likedMovieFound(movie:Movie){
        var flag =false;
        this.currentUser.getLikedMovie.forEach(element => {
            if(element.getId == movie.getId){
                flag = true;
                return;
            }
        });
        return flag;
    }

    dislikedMovieFound(movie:Movie){
        var flag =false;
        this.currentUser.getDislikedMovie.forEach(element => {
            if(element.getId == movie.getId){
                flag = true;
                return;
            }
        });
        return flag;
    }

    

    

}
