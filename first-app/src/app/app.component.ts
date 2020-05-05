import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedMovie: Movie;
  allMovies: Movie[] = [];

  ngOnInit(): void {

    this.allMovies.push({
      id: 1, name: 'Aba Ganuv1',
      description: 'Aba Ganuv1 Description bla bla bla bla',
      imageUrl: '/assets/images/aba1.jpg',
      length: 89
    });

    this.allMovies.push({
      id: 2, name: 'Aba Ganuv2',
      description: 'Aba Ganuv2 Description bla bla bla bla',
      imageUrl: '/assets/images/aba2.jpg',
      length: 102
    });

    this.allMovies.push({
      id: 3, name: 'Aba Ganuv3',
      description: 'Aba Ganuv3 Description bla bla bla bla',
      imageUrl: '/assets/images/aba3.jpg',
      length: 122
    });

    this.allMovies.push({
      id: 4, name: 'Aba Ganuv4',
      description: 'Aba Ganuv4 Description bla bla bla bla',
      imageUrl: '/assets/images/aba4.jpg',
      length: 68
    });

  }

  onSelectMovieRequested(movie: Movie) {
    this.selectedMovie = movie;
  }
}
