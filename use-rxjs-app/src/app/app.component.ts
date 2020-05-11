import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { map, filter, debounceTime, distinct } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'use-rxjs-app';
  moreCounters = false;
  counter = 0;

  searchKeyChangedSubject = new BehaviorSubject<string>('');

  constructor(private counterService: CounterService) {

  }

  onInputChange(str: string) {
    this.searchKeyChangedSubject.next(str);
  }

  ngOnInit() {
    this.searchKeyChangedSubject
      .pipe(
        filter(x => x.length > 3),
        debounceTime(200),
        distinct())
      .subscribe(str => {
        console.log(str);
      });

    this.counterService.counterChanged
      .pipe(filter(x => x % 2 === 0), map(x => x * 10))
      .subscribe(x => {
        console.log('app component get new value', x);
        this.counter = x;
      });
  }

  showMore() {
    this.moreCounters = true;
  }

  hideMore() {
    this.moreCounters = false;
  }
}
