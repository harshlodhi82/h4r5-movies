import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

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

const rout:Routes=[
  {path : "", component : BodyComponent},
  {path : "login", component : LoginComponent},
  {path : "logout", component : LogoutComponent},
  {path : "home", component : DashboardComponent, children: [
    {path : "", component : UserProfileComponent},
    {path : ":id/:movieName", component : MoviesInfoComponent}
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
