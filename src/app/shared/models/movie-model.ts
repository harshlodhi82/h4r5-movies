export class Movie {
    private id: string;
    private name: string;
    private info: string;
    private rating: {}={
        "users":0,
        "Rating":0
    };
    private imgUrl: string;
    private likes: number = 0;
    private dislikes: number = 0;

    constructor(id: string, name: string, info: string, imgUrl: string) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.imgUrl = imgUrl;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getInfo() {
        return this.info;
    }

    get getRating() {
        return this.rating;
    }

    get getImgUrl() {
        return this.imgUrl;
    }

    get getLikes() {
        return this.likes;
    }

    get getDislikes() {
        return this.dislikes;
    }

    setRating(numberOfUser:number, rate:number){
        this.rating["users"] = numberOfUser;
        this.rating["Rating"] = rate;
    }

    pLikes() {
        this.likes+=1;
    }

    pDislikes() {
        this.dislikes+=1;
    }

    mLikes() {
        this.likes-=1;
    }

    mDislikes() {

        this.dislikes-=1;
    }
}