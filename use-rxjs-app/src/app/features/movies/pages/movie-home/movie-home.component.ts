import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { Observable, VirtualTimeScheduler, Subscription } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {
  movies$: Observable<Movie[]>;
  selectedMovie$: Observable<Movie>;

  constructor(private movieService: MoviesService, private searchService: SearchService) { }

  ngOnInit() {
    this.selectedMovie$ = this.movieService.selectedMovie;
    this.movies$ = this.searchService.searchKeyWord.pipe(
      switchMap(keyword =>
        this.movieService.currentMovieList.pipe(map(movies =>
          movies.filter(o => o.name.includes(keyword))))
      )
    );
  }

  onsSelectMovieRequested(m: Movie) {
    this.movieService.setSelectedMovie(m);
  }

  async onDeleteMovie(m: Movie) {
    try {
      await this.movieService.deleteMovie(m);
    } catch (errors) {
      alert('Failed to delete movie ' + m.name);
    }
  }

}
