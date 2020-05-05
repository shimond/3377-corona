import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService, MoviesServiceMock } from './services/movies.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ // components, pipes, directives
    AppComponent,
    ListComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [ListComponent],
  // DI Management
  providers: [
    // MoviesService, // same as:
   // { provide: MoviesService, useClass: MoviesServiceMock }
  ]
})
export class AppModule { }
