import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from "../../../services/movies.service";
import { Subscription } from "rxjs";
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  selectedMovie: Movie;
  displayDetails = false;

  subscription: Subscription;

  actor1: Actor = {
    id: 1,
    firstName: 'Robert',
    lastName: 'Pattinson',
  };
  actor2: Actor = {
    id: 2,
    firstName: 'Zoe',
    lastName: 'Kravitz',
  };
  actor3: Actor = {
    id: 3,
    firstName: 'Jeffrey',
    lastName: 'Wright',
  };
  actor4: Actor = {
    id: 4,
    firstName: 'Timothée',
    lastName: 'Chalamet',
  };
  actor5: Actor = {
    id: 5,
    firstName: 'Rebecca',
    lastName: 'Ferguson',
  };
  actor6: Actor = {
    id: 6,
    firstName: 'Zendaya',
    lastName: '',
  };

  movie1: Movie = {
    id: 1,
    name: 'The Batman',
    releasedDate: '2022',
    director: 'Matt Reeves',
    rating: 7.9,
    duration: 176,
    actors: [this.actor1, this.actor2, this.actor3],
    isAwarded: false,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg'
  };

  movie2: Movie = {
    id: 2,
    name: 'Dune',
    releasedDate: '2021',
    director: 'Denis Villeneuve',
    rating: 8,
    duration: 155,
    actors: [this.actor4, this.actor5, this.actor6],
    isAwarded: true,
    photoUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg'
  };

  constructor(private moviesService: MoviesService,
    private authService: AuthService,
    private router: Router) {
    this.subscription = this.moviesService.getMovies().subscribe(movies => {
      this.movieList = movies;
    });
    // this.movieList = [this.movie1, this.movie2];
  }

  ngOnInit(): void {
  }

  openDetails(movie: Movie): void {
    this.selectedMovie = movie;
    this.displayDetails = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logOut(): void {
    this.authService.clearToken();
    this.router.navigate(['login']);
  }
}
