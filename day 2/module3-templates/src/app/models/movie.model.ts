import { Actor } from './actor.model';

export class Movie {
	id: number;
	name: string;
	releasedDate: string;
	director: string;
	rating: number;
	duration: number;
	actors: Actor[];
	isAwarded: boolean;
}
