import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    const url = 'https://run.mocky.io/v3/a5d8e16a-8f97-4bea-aa43-b49461db8eb5';
    return this.http.get<Movie[]>(url);
  }
}
