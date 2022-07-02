import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Movie} from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  @Output() close = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit();
  }
}
