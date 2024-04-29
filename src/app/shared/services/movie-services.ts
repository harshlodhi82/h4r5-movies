import { Movie } from '../models/movie-model';

export class MovieService {
    private srchQuery = "";

    private info: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus obcaecati qui facere aliquam beatae! Sapiente sed accusantium numquam itaque ea.";
    moviesList: Array<Movie> = [
        new Movie(
          "1",
          "Avatar",
          this.info,
          "https://phantom-marca.unidadeditorial.es/bc7ac39a324ba34f956063664881b200/resize/828/f/jpg/assets/multimedia/imagenes/2022/12/22/16717250934792.jpg"
        ),
        new Movie(
          "2",
          "Avengers",
          this.info,
          "https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg"
        ),
        new Movie(
          "3",
          "End Game",
          this.info,
          "https://assets1.ignimgs.com/2019/04/25/avengers-cast-1556221213216.jpg?fit=bounds&width=1280"
        ),
        new Movie(
          "4",
          "Far From Home",
          this.info,
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Spider-Man-Far-From-Home-3.jpg"
        ),
        new Movie(
          "5",
          "Inception",
          this.info,
          "https://img.etimg.com/thumb/width-1600,height-900,imgsize-62032,resizemode-75,msid-92973661/news/new-updates/christopher-nolans-plot-map-of-inception-has-twitter-guessing-the-end.jpg"
        ),
        new Movie(
          "6",
          "MIB",
          this.info,
          "https://cdn3.movieweb.com/i/article/vFRqoTc5V0CWkQjBSkuVOptDtQakzv/798:50/Men-In-Black-International-Photo-Chris-Hemsworth-Tessa.jpg"
        )
    ];

    availID:number;

    constructor() {
        this.availID = this.moviesList.length;

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
