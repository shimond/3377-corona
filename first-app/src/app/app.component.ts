import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchWord = '';
  result: string[] = [];
  isBusy = false;
  search() {
    this.isBusy = true;
    this.result = [];
    setTimeout(() => {
      for (let index = 1; index <= 10; index++) {
        this.result.push(this.searchWord + ' ' + index);
      }
      this.isBusy = false;
    }, 2000);
  }

  isSearchEnabled() {
    return this.searchWord.length > 3;
  }
}
