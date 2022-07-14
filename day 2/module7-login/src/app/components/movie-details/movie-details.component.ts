import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  @Output() close = new EventEmitter();
  isDarkMode = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { selectedMovie: Movie },
    private dialogRef: MatDialogRef<MovieDetailsComponent>
  ) {
    this.movie = data.selectedMovie;
  }

  ngOnInit(): void { }

  onClose(): void {
    this.dialogRef.close();
  }

  switchDialogTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  getColor(duration: number) {
    if (duration < 150) {
      return 'green';
    } else if (duration >= 150 && duration < 170) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
