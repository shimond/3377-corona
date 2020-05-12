import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MoviesService {


  constructor(private httpClient: HttpClient) {
  }

  private currentMovieListSubject = new BehaviorSubject<Movie[]>([]);

  private selectedMovieSubject = new BehaviorSubject<Movie>(null);

  get selectedMovie() {
    return this.selectedMovieSubject.asObservable();
  }

  get currentMovieList() {
    return this.currentMovieListSubject.asObservable();
  }

  setSelectedMovie(m: Movie) {
    this.selectedMovieSubject.next(m);
  }

  async loadMovies() {
    const url = `${environment.apiUrl}/movies`;
    const movies = await this.httpClient.get<Movie[]>(url).toPromise();
    this.currentMovieListSubject.next(movies);
  }

  async deleteMovie(m: Movie) {
    const url = `${environment.apiUrl}/movies/${m.id}`;
    await this.httpClient.delete(url).toPromise();
    this.loadMovies();
  }
  async updateMovie(m: Movie) {
    const url = `${environment.apiUrl}/movies/${m.id}`;
    await this.httpClient.put(url, m).toPromise();
    this.loadMovies();
  }


}
