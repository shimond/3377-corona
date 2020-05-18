import { Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MyGuardService } from './core/services/my-guard.guard';

export const APP_ROUTES: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(o => o.AuthModule) },
  {
    path: 'movies',
    canActivate: [MyGuardService],
    loadChildren: () => import('./features/movies/movies.module').then(x => x.MoviesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];




