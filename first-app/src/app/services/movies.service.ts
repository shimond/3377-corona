import { Movie } from '../models/movie.model';
import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' }) // same as provide in app.module
export class MoviesService {

    getAllMovies(): Movie[] {
        const allMovies = [];
        allMovies.push({
            id: 1, name: 'Aba Ganuv1',
            description: 'Aba Ganuv1 Description bla bla bla bla',
            imageUrl: '/assets/images/aba1.jpg',
            length: 89
        });

        allMovies.push({
            id: 2, name: 'Aba Ganuv2',
            description: 'Aba Ganuv2 Description bla bla bla bla',
            imageUrl: '/assets/images/aba2.jpg',
            length: 102
        });

        allMovies.push({
            id: 3, name: 'Aba Ganuv3',
            description: 'Aba Ganuv3 Description bla bla bla bla',
            imageUrl: '/assets/images/aba3.jpg',
            length: 122
        });

        allMovies.push({
            id: 4, name: 'Aba Ganuv4',
            description: 'Aba Ganuv4 Description bla bla bla bla',
            imageUrl: '/assets/images/aba4.jpg',
            length: 68
        });

        return allMovies;
    }
}

export class MoviesServiceMock {

    getAllMovies(): Movie[] {
        const allMovies = [];
        allMovies.push({
            id: 4, name: 'Aba Ganuv4',
            description: 'Aba Ganuv4 Description bla bla bla bla',
            imageUrl: '/assets/images/aba4.jpg',
            length: 68
        });

        return allMovies;
    }
}


