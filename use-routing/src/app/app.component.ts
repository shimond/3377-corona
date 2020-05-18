import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-routing';

  navigateTo(where: string) {
    setTimeout(() => {
      this.router.navigate([where]);
    }, 4000);
  }


  constructor(private router: Router) {

  }

}
