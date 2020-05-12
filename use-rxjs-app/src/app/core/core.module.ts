import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { MoviesService } from './services/movies.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: SearchService, useClass: SearchService },
    MoviesService
  ]
})
export class CoreModule { }
