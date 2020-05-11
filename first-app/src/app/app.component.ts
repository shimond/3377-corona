import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';
// using...
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isBusy = false;
  async ngOnInit() {
    this.doIt();
  }

  async doLogin() {
    try {
      this.isBusy = true;
      const isLoggedIn = await this.auth.login('userName', 'Password');
      console.log('after auth.login'); // 4
      this.isBusy = false;
    } catch (error) {
      console.error(error);
    }
  }

  async doIt() {
    for (let index = 0; index < 5; index++) {
      try {
        let isLogedIn = await this.auth.login('userName', 'Password');
        console.log('isLoggedIn', isLogedIn);
        if (isLogedIn) {
          break;
        }
      } catch (error) {
        console.error('error', error);
      }
    }
    console.log('Finished');
  }

  constructor(private auth: AuthService) {
  }
}
