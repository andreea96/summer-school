import { Component } from '@angular/core';
import { Actor } from './models/actor.model';
import { Movie } from './models/movie.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'module0-cli';

	//TODO: create two new movies with 3 actors and console.log them
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

	movie1: Movie = {
		id: 1,
		name: 'The Batman',
		releasedDate: '2022',
		director: 'Matt Reeves',
		rating: 7.9,
		duration: 176,
		actors: [this.actor1, this.actor2, this.actor3],
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

	movie2: Movie = {
		id: 2,
		name: 'Dune',
		releasedDate: '2021',
		director: 'Denis Villeneuve',
		rating: 8,
		duration: 155,
		actors: [this.actor4, this.actor5, this.actor6],
	};

	constructor() {
		console.log('Movie 1', this.movie1);
		console.log('Movie 2', this.movie2);
	}
}
