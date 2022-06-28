import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.model';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openMovie(selectedMovie: Movie): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      data: { selectedMovie },
      disableClose: true,
      maxHeight: '80vh',
      minHeight: 350,
      minWidth: 750,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe();
  }
}
