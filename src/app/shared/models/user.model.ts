import { Movie } from './movie-model';

export class User {
    private email: string;
    private password: string;
    private likedMovie: Array<Movie> = [];
    private dislikedMovie: Array<Movie> = [];
    private myRatings:{}={};


    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    get getEmail() {
        return this.email;
    }

    get getPass() {
        return this.password;
    }

    get getLikedMovie() {
        return this.likedMovie;
    }

    get getDislikedMovie() {
        return this.dislikedMovie;
    }

    getMyRatings() {

        return this.myRatings;
        
    }

    setMyRating(id:string, rating:number){
        
        this.myRatings[id]=rating;
        console.log(this.myRatings);
        
        
    }

    // setMyRatings(movId: string, rate: number) {
    //     var flag = true;
    //     for(var i = 0; i<this.myRatings.length;i++){
    //         if(this.myRatings[i]["movId"] == movId){
    //             this.myRatings[i]["rate"] = rate;
    //             flag = false;
    //             break;
    //         }
    //     }

    //     if(flag){
    //         var rating = {"movId":movId, "rate":rate};
    //         this.myRatings.push(rating);
    //     }
        
    // }

    set likedList(arr: Array<Movie>) {
        this.likedMovie = arr;
    }

    set dislikedList(arr: Array<Movie>) {
        this.dislikedMovie = arr;
    }

    // addLikedMovie(movie:Movie){
    //     this.likedMovie.push(movie);
    // }

    // addDislikedMovie(movie:Movie){
    //     this.dislikedMovie.push(movie);
    // }


}