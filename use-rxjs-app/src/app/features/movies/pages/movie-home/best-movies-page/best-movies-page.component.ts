import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SearchService } from 'src/app/core/services/search.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  templateUrl: './best-movies-page.component.html',
  styleUrls: ['./best-movies-page.component.scss']
})
export class BestMoviesPageComponent implements OnInit {
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

  async onSaveRequested(m: Movie) {
    await this.movieService.updateMovie(m);
    this.movieService.setSelectedMovie(null);
    console.log('Saved !', m);
  }

  async onDeleteMovie(m: Movie) {
    try {
      await this.movieService.deleteMovie(m);
    } catch (errors) {
      alert('Failed to delete movie ' + m.name);
    }
  }

}
