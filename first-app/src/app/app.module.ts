import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService, MoviesServiceMock } from './services/movies.service';
import { TestPipe } from './pipes/test.pipe';
import { MarkDirective } from './directives/mark.directive';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './features/users/users.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ // components, pipes, directives
    AppComponent,
    ListComponent,
    MovieListComponent,
    TestPipe,
    MarkDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UsersModule, // TODO: Change to Lazy loading 
    SharedModule
  ],
  exports: [ListComponent, TestPipe],
  // DI Management
  providers: [
    // MoviesService, // same as:
   // { provide: MoviesService, useClass: MoviesServiceMock }
  ]
})
export class AppModule { }


// 1. imports infra module.
// 2. We get only the exported components/pipes/ directives