import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieHomeComponent } from './pages/movie-home/movie-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesService } from 'src/app/core/services/movies.service';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MovieListComponent, MovieHomeComponent, EditMovieComponent],
  exports: [MovieHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule {
  constructor(private moviesService: MoviesService) {
    this.moviesService.loadMovies();
  }

}
