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

  // To create your own Mock API:
  // Step 1: Go to https://designer.mocky.io/
  // Step 2: Click on "New mock"
  // Step 3: Copy the contents of the file "movies.json" into the "HTTP Response Body" field in mocky.io
  // Step 4: Click on "Generate my http response"
  // Step 4: Copy the Mock URL and paste it in this service method
  getMovies(): Observable<Movie[]> {
    const url = 'https://run.mocky.io/v3/5da0ebed-ab27-4f75-a1d9-3db6df7f56f4';
    return this.http.get<Movie[]>(url);
  }
}
