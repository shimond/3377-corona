import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'use-rxjs-app';
  moreCounters = false;
  counter = 0;


  constructor(private counterService: CounterService) {

  }

  ngOnInit() {
    this.counterService.counterChanged.subscribe(x => {
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
