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
export class MovieHomeComponent implements OnInit {
  ngOnInit(): void {
  }

}
