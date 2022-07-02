import { Component, OnInit } from '@angular/core';
import { Actor } from './models/actor.model';
import { Movie } from './models/movie.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'module0-cli';

	//TODO: create two new movies with 3 actors and console.log them

	constructor() {
	}

	ngOnInit(): void {
	}
}
