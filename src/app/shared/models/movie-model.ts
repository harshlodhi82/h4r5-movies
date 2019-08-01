export class Movie {
    private id: string;
    private name: string;
    private info: string;
    private rating: string;
    private imgUrl: string;
    private likes: number = 0;
    private dislikes: number = 0;

    constructor(id: string, name: string, info: string, rating: string, imgUrl: string) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.rating = rating;
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