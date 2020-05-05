import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MoviesService]
})
export class AppComponent implements OnInit {

  suffixRepeatCount = 1;
  title = 'ShImOn';
  currentDate = new Date();
  selectedMovie: Movie;
  allMovies: Movie[] = [];

  ngOnInit(): void {
    setInterval(() => {
      this.suffixRepeatCount++;
    }, 1000);
    this.allMovies = this.moviesService.getAllMovies();
  }

  onSelectMovieRequested(movie: Movie) {
    this.selectedMovie = movie;
  }

  constructor(private moviesService: MoviesService) {
  }
}
