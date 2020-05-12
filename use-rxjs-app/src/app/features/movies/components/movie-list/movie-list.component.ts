import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[];
  @Input() selectedMovie: Movie;
  @Output() selectMovieRequested = new EventEmitter<Movie>();
  @Output() deleteMovieRequested = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {

  }

  onDeleteClicked(movie: Movie, e: MouseEvent) {
    e.stopPropagation();
    this.deleteMovieRequested.emit(movie);
  }

  onMovieClicked(movie: Movie) {
    this.selectMovieRequested.emit(movie);
  }
}
