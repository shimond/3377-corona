import { Route } from '@angular/router';
import { MovieHomeComponent } from './pages/movie-home/movie-home.component';
import { BestMoviesPageComponent } from './pages/movie-home/best-movies-page/best-movies-page.component';

export const MOVIES_ROUTES: Route[] = [
  {
    path: '', component: MovieHomeComponent, children: [
      { path: 'best', component: BestMoviesPageComponent }
    ]
  },

];
