import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './body/header/header.component';
import { LoginComponent } from './body/login/login.component';
import { LogoutComponent } from './body/logout/logout.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { MoviesListComponent } from './body/dashboard/movies-list/movies-list.component';
import { MoviesInfoComponent } from './body/dashboard/movies-info/movies-info.component';
import { UserProfileComponent } from './body/dashboard/user-profile/user-profile.component';
import { MovieService } from './shared/services/movie-services';
import { UserService } from './shared/services/users-services';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppGuard } from './shared/services/app-guard-services';
import { AddMovieComponent } from './body/add-movie/add-movie.component';
import { AboutComponent } from './body/about/about.component';
import { UserResolver } from './shared/services/user-resolver';
import { LoogedInUser } from './shared/services/looged-user-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieResolver } from './shared/services/movie-resolver';
import { MovieInfoResolver } from './shared/services/mov-info-resolver';
import { StartPageComponent } from './body/start-page/start-page.component';
import { Const } from './shared/services/const-service';
import { ThemesComponent } from './body/themes/themes.component';

const rout:Routes=[
  {path : "",resolve:{user:UserResolver}, component : StartPageComponent},
  {path : "login",canActivate:[LoogedInUser], component : LoginComponent},
  {path : "signup",canActivate:[LoogedInUser], component : LogoutComponent},
  {path : "about", component : AboutComponent},
  {path : "add-movie",canActivate : [AppGuard], component : AddMovieComponent,resolve:{user:UserResolver}},
  {path : "home",canActivate:[AppGuard],resolve:{user:UserResolver, movieList:MovieResolver}, component : DashboardComponent, children: [
    {path : "", component : UserProfileComponent},
    {path : ":id", component : MoviesInfoComponent, resolve:{movie:MovieInfoResolver}}
  ]},
  {path : "page-not-found", component : PageNotFoundComponent},
  {path : "themes", component : ThemesComponent},
  {path : "**", redirectTo : "/page-not-found"}
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    MoviesListComponent,
    MoviesInfoComponent,
    UserProfileComponent,
    AddMovieComponent,
    AboutComponent,
    PageNotFoundComponent,
    StartPageComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rout,{anchorScrolling:"enabled"}),
  ],
  providers: [MovieService, UserService, AppGuard, UserResolver, LoogedInUser, MovieResolver, MovieInfoResolver, Const],
  bootstrap: [AppComponent]
})
export class AppModule { }
