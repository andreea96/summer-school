import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {HttpClientModule} from "@angular/common/http";
import { MytimePipe } from './pipes/mytime.pipe';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieDetailsComponent, MovieCardComponent, MytimePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
