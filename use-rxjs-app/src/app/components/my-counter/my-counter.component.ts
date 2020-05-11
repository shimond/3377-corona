import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  currentCount$: Observable<number>;
  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {
    console.log('OnInit MyCounterComponent');
    this.currentCount$ = this.counterService.counterChanged.pipe(
      tap(x => console.log('Tap', x)),
      map(x => x * 33)
      );
  }

  plus() {
    this.counterService.plus();
  }

  minus() {
    this.counterService.minus();
  }
}
