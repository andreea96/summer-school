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
  // Step 5: Copy the Mock URL and use it in the getMovies() service method

  // To make a GET request you need a URL and the GET HTTP verb
  // Tip: make sure to also use the Movie Type for the response 
  // in order to match the return type of the method
  // i.e. this.http.get<Movie[]>()
  getMovies(): Observable<Movie[]> {
    
  }
}
