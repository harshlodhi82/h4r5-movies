import { Movie } from '../models/movie-model';

export class MovieService {
    private srchQuery = "";
    private info: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus obcaecati qui facere aliquam beatae! Sapiente sed accusantium numquam itaque ea.";
    moviesList: Array<Movie> = [
        new Movie("1", "Avatar", this.info, "https://cnet3.cbsistatic.com/img/_c60tyhNYZ1ncjqXGsxiX3MRfH8=/1092x0/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg"),
        new Movie("2", "Avengers", this.info, "https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg"),
        new Movie("3", "End Game", this.info, "https://assets1.ignimgs.com/2019/04/25/avengers-cast-1556221213216.jpg?fit=bounds&width=1280"),
        new Movie("4", "Far From Home", this.info, "https://wegotthiscovered.com/wp-content/uploads/2019/07/Spider-Man-Far-From-Home-Mysterio-Post-Credits-Scene-670x335.jpg"),
        new Movie("5", "Inception", this.info, "https://cdn.onebauer.media/one/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"),
        new Movie("6", "MIB", this.info, "https://cdn3.movieweb.com/i/article/vFRqoTc5V0CWkQjBSkuVOptDtQakzv/798:50/Men-In-Black-International-Photo-Chris-Hemsworth-Tessa.jpg")
    ];

    constructor() {

    }

    get getSearchQuery() {
        return this.srchQuery;
    }

    set setSearchQuery(srchQuery) {
        //console.log(srchQuery);

        this.srchQuery = srchQuery;
    }

    getMovieByID(id: string) {
        var movie;
        this.moviesList.forEach(mov => {
            if (mov.getId === id) {
                movie = mov;
                return;
            }
        });
        return movie;
    }


}
