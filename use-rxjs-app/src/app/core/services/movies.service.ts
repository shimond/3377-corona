import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';

@Injectable()
export class MoviesService {


  getAllMovies() {
    const url = `${environment.apiUrl}/movies`;
    return this.httpClient.get<Movie[]>(url).pipe(delay(4000));
  }

  constructor(private httpClient: HttpClient) { }
}
