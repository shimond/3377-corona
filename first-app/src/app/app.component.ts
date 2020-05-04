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
  selectedItemFromAppComponent: string = null;

  search() {
    this.isBusy = true;
    this.result = [];
    this.selectedItemFromAppComponent = null;
    setTimeout(() => {
      for (let index = 1; index <= 10; index++) {
        this.result.push(this.searchWord + ' ' + index);
      }
      this.selectedItemFromAppComponent = this.result[2];
      this.isBusy = false;
    }, 2000);
  }

  isSearchEnabled() {
    return this.searchWord.length > 3;
  }

  onItemSelected(selectedItem: string) {
    if (selectedItem.includes('1')) {
      return;
    }

    this.selectedItemFromAppComponent = selectedItem;
  }
}
