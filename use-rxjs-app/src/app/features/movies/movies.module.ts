import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieHomeComponent } from './pages/movie-home/movie-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesService } from 'src/app/core/services/movies.service';



@NgModule({
  declarations: [MovieListComponent, MovieHomeComponent],
  exports: [MovieHomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MoviesModule {
  constructor(private moviesService: MoviesService) {
    this.moviesService.loadMovies();
  }

}
