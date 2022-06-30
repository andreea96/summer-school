import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MovieRating } from 'src/app/models/movie-rating.model';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {
  movieList: Movie[] = [];
  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ratingForm: FormGroup;
  subscription: Subscription;


  get rating(): AbstractControl | null {
    return this.ratingForm.get('rating');
  }

  get movie(): AbstractControl | null {
    return this.ratingForm.get('movie');
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
    this.ratingForm = this.formBuilder.group({
      movie: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required])
    });
  }

  submit(): void {
    const { movie, rating } = this.ratingForm.value;
    const payload = new MovieRating();
    payload.id = movie;
    payload.rating = rating;
    this.moviesService.saveRating(payload).subscribe(() => {
      console.log('Movie rating updated!')
      // TODO update rating! 
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
