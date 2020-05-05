import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ListComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [MovieListComponent],
})
export class AppModule { }
