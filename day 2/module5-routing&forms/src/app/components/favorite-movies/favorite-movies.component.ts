import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  movieList: Movie[] = [];

  favoriteForm: FormGroup;
  subscription: Subscription;
  submitted = false;

  get comment(): AbstractControl | null {
    return this.favoriteForm.get('comment');
  }

  get movie(): AbstractControl | null {
    return this.favoriteForm.get('movie');
  }

  constructor(
    private readonly moviesService: MoviesService,
    private readonly formBuilder: FormBuilder) {
    this.subscription = this.moviesService.getMovies().subscribe(movies => {
      this.movieList = movies;
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.favoriteForm = this.formBuilder.group({
      movie: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  submit(): void {
    this.submitted = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
