import { Movie } from './movie-model';

export class User {
    private id:string;
    private firstName:string;
    private lastName:string;
    private email: string;
    private password: string;
    private country: string;
    private likedMovie: Array<string> = [];
    private dislikedMovie: Array<string> = [];
    private myRatings:Array<Object> = [];


    constructor(id:string , fname:string, lname:string, email: string, password: string, country:string, likedMovie:Array<string>, dislikedMovie:Array<string>,myRatings:Array<Object> ) {
        this.id = id;
        this.firstName = fname.toLowerCase();
        this.lastName = lname.toLowerCase();
        this.email = email.toLowerCase();
        this.password = password;
        this.country = country.toLowerCase();
        this.likedMovie = likedMovie;
        this.dislikedMovie = dislikedMovie;
        this.myRatings = myRatings;

    }

    get getId() {
        return this.id;
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getEmail() {
        return this.email;
    }

    get getPass() {
        return this.password;
    }

    get getCountryName() {
        return this.country;
    }

    get getLikedMovie() {
        return this.likedMovie;
    }

    get getDislikedMovie() {
        return this.dislikedMovie;
    }

    set setLikedMovieArray(mArray){
        this.likedMovie = mArray;
    }

    set setDislikedMovieArray(mArray){
        this.dislikedMovie = mArray;
    }

    get getMyRatings() {

        return this.myRatings;
        
    }

    setMyRating(movId:string, rating:number){
        
        var data = {};
        data[movId] = rating;

        var flag = false;
        for(var i =0; i<this.myRatings.length; i++){
            if(movId in this.myRatings[i]){
                this.myRatings[i][movId] = rating;
                flag = true;
                break;
            }
        }

        if(!flag){
            this.myRatings.push(data);
        }
        
        // console.log(this.myRatings);
        
        
    }


    set likedList(arr: Array<string>) {
        this.likedMovie = arr;
    }

    set dislikedList(arr: Array<string>) {
        this.dislikedMovie = arr;
    }


}