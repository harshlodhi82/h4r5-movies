import { Movie } from './movie-model';

export class User{
    private email:string;
    private password:string;
    private likedMovie:Array<Movie>=[];
    private dislikedMovie:Array<Movie>=[];


    constructor(email:string,password:string){
        this.email = email;
        this.password = password;
    }

    get getEmail(){
        return this.email;
    }

    get getPass(){
        return this.password;
    }

    get getLikedMovie(){
        return this.likedMovie;
    }

    get getDislikedMovie(){
        return this.dislikedMovie;
    }

    set likedList(arr:Array<Movie>){
        this.likedMovie = arr;
    }

    set dislikedList(arr:Array<Movie>){
        this.dislikedMovie = arr;
    }

    // addLikedMovie(movie:Movie){
    //     this.likedMovie.push(movie);
    // }

    // addDislikedMovie(movie:Movie){
    //     this.dislikedMovie.push(movie);
    // }

  
}