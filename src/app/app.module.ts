import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './body/header/header.component';
import { LoginComponent } from './body/login/login.component';
import { LogoutComponent } from './body/logout/logout.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { SearchComponent } from './body/dashboard/search/search.component';
import { MoviesListComponent } from './body/dashboard/movies-list/movies-list.component';
import { MoviesInfoComponent } from './body/dashboard/movies-info/movies-info.component';
import { UserProfileComponent } from './body/dashboard/user-profile/user-profile.component';
import { MovieService } from './shared/services/movie-services';
import { UserService } from './shared/services/users-services';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppGuard } from './shared/services/app-guard-services';
import { AddMovieComponent } from './body/add-movie/add-movie.component';

const rout:Routes=[
  {path : "", component : BodyComponent},
  {path : "login", component : LoginComponent},
  {path : "signup", component : LogoutComponent},
  {path : "add-movie",canActivate : [AppGuard], component : AddMovieComponent},
  {path : "home",canActivate:[AppGuard], component : DashboardComponent, children: [
    {path : "", component : UserProfileComponent},
    {path : ":id", component : MoviesInfoComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    SearchComponent,
    MoviesListComponent,
    MoviesInfoComponent,
    UserProfileComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(rout),
  ],
  providers: [MovieService, UserService, AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
