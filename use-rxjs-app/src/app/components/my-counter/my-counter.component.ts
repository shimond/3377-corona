import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit, OnDestroy {

  currentCount = 0;
  sub: Subscription;

  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {
    console.log('OnInit MyCounterComponent');
    this.sub = this.counterService.counterChanged.subscribe(counter => {
      this.currentCount = counter;
      console.log('Value changed', counter);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    console.log('OnDestroy MyCounterComponent');
  }

  plus() {
    // this.currentCount++;
    this.counterService.plus();
  }

  minus() {
    // this.currentCount--;
    this.counterService.minus();
  }
}
