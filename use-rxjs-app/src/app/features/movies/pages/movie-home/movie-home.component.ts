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
export class MovieHomeComponent implements OnInit, OnDestroy {
  // movies$: Observable<Movie[]>;

  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchSub: Subscription;
  isBusy: boolean;

  constructor(private movieService: MoviesService, private searchService: SearchService) { }

  async ngOnInit() {

    this.isBusy = true;
    const all = await this.movieService.getAllMovies().toPromise();
    this.allMovies = all;
    this.filteredMovies = all;
    this.isBusy = false;

    this.searchSub = this.searchService.searchKeyWord.subscribe(keyword => {
      this.filteredMovies = this.allMovies.filter(m => m.name.includes(keyword));
    });
    // this.movies$ = this.searchService.searchKeyWord.pipe(
    //   switchMap(keyword =>
    //     this.movieService.getAllMovies().pipe(map(movies =>
    //       movies.filter(o => o.name.includes(keyword))))
    //   )
    // );
    // this.searchService.searchKeyWord.subscribe(x => {
    //   this.movieService.getAllMovies().subscribe(o => console.log('movies', o));
    // });
  }
  ngOnDestroy(): void {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

}
