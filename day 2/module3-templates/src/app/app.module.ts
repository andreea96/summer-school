import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MyTimePipe } from './pipes/mytime.pipe';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
	declarations: [AppComponent, MovieListComponent, MovieDetailsComponent, MyTimePipe, MovieCardComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
