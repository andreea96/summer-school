import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MyTimePipe } from './pipes/mytime.pipe';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from './components/nav/nav.component';
import { RoutingModule } from './routing.module';
import { MovieAddComponent } from './components/movie-add/movie-add.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieDetailsComponent, MyTimePipe, MovieCardComponent, NavComponent, MovieAddComponent],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
