import { Movie } from '../models/movie-model';

export class MovieService {
  private srchQuery = "";

  moviesList: Array<Movie> = [
    new Movie(
      "1",
      "Avatar",
      `When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid "Na'vi" in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.`,
      "https://phantom-marca.unidadeditorial.es/bc7ac39a324ba34f956063664881b200/resize/828/f/jpg/assets/multimedia/imagenes/2022/12/22/16717250934792.jpg"
    ),
    new Movie(
      "2",
      "Avengers",
      `Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.`,
      "https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg"
    ),
    new Movie(
      "3",
      "Avengers: End Game",
      `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face`,
      "https://assets1.ignimgs.com/2019/04/25/avengers-cast-1556221213216.jpg?fit=bounds&width=1280"
    ),
    new Movie(
      "4",
      "Spiderman: Far From Home",
      `Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent.`,
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Spider-Man-Far-From-Home-3.jpg"
    ),
    new Movie(
      "5",
      "Inception",
      `Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.`,
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-62032,resizemode-75,msid-92973661/news/new-updates/christopher-nolans-plot-map-of-inception-has-twitter-guessing-the-end.jpg"
    ),
    new Movie(
      "6",
      "MIB",
      `Based off of the comic book. Unbeknownst to other people, there is a private agency code named MiB. This agency is some kind of extra terrestrial surveillance corporation. Then, one of the agency's finest men only going by the name "K" (Tommy Lee Jones) , is recruiting for a new addition to the agency. He has chosen James Edwards (Will Smith) of the N.Y.P.D. Then, one day, a flying saucer crashes into Earth. This was an alien a part of the "Bug" race. He takes the body of a farmer (Vincent D'Onofrio) and heads to New York. He is searching for a super energy source called "The Galaxy". Now, Agents J and K must stop the bug before it can escape with the galaxy.`,
      "https://cdn3.movieweb.com/i/article/vFRqoTc5V0CWkQjBSkuVOptDtQakzv/798:50/Men-In-Black-International-Photo-Chris-Hemsworth-Tessa.jpg"
    ),
    new Movie(
      "7",              // id
      "Top Gun: Maverick",           // name
      `Set 30 years after its predecessor, it follows Maverick's return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - "TOPGUN"), where he must confront his past as he trains a group of younger pilots, among them the son of Maverick's deceased best friend Lieutenant Nick "Goose" Bradshaw, USN`,       // about
      "https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29.jpg"  // poster url
    ),
    new Movie(
      "8",              // id
      "Deadpool & Wolverine",           // name
      `Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy`,       // about
      "https://sm.ign.com/t/ign_in/news/d/deadpool-w/deadpool-wolverine-shows-9-minutes-of-footage-at-cinemacon-s_1j7b.1280.jpg"  // poster url
    ),
    new Movie(
      "9",              // id
      "Thor: Ragnarok",           // name
      `Imprisoned on the other side of the universe, the mighty Thor (Chris Hemsworth) finds himself in a deadly gladiatorial contest that puts him against The Incredible Hulk (Mark Ruffalo), his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela (Cate Blanchett) from destroying his home world and the Asgardian civilization`,       // about
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32E303CF7716B53DEAF7874615A17C0EAB062AD76DDD8681EF860B8844A119A5/scale?width=1200&aspectRatio=1.78&format=webp"  // poster url
    ),
    new Movie(
      "10",             // id
      "Civil War",           // name
      `A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.`,       // about
      "https://eadn-wc03-11391632.nxedge.io/wp-content/uploads/2022/01/mexican-war-3-Recovered-copy.png"  // poster url
    ),
    new Movie(
      "11",             // id
      "Dune",           // name
      `A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive`,       // about
      "https://m.media-amazon.com/images/S/pv-target-images/079084dd7dd92ea1b6082812d5bccf5861695d69a74aa41506da13a84c95798c._SX1080_FMjpg_.jpg"  // poster url
    ),
    new Movie(
      "12",             // id
      "Godzilla x Kong",           // name
      `The new installment in the Monsterverse puts the mighty Kong and the fearsome Godzilla against a colossal deadly threat hidden within our world that threatens the existence of their species and our very own, as well as diving deep into the mysteries of Skull Island and beyond. Delving straight into the origins of Hollow Earth, this film will explore the ancient Titan battle that brought man and monster together forever.`,       // about
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDPQgTxtUU16XvhCy0acYYNotdf-reU58G82YaJswAw&s"  // poster url
    ),
  ];

  availID: number;

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
