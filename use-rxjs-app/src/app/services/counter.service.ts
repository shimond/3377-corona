import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterChangedSubject = new BehaviorSubject<number>(0);

  get counterChanged() {
    // downgrade from subject to observable (export only subscribe)
    return this.counterChangedSubject.asObservable();
  }
  get evenCounterOnly() {
    return this.counterChangedSubject.pipe(filter(x => x % 2 === 0));
  }
  
  counter = 0;

  constructor() {
  }

  plus() {
    this.counter++;
    this.counterChangedSubject.next(this.counter); // emit.
  }

  minus() {
    this.counter--;
    this.counterChangedSubject.next(this.counter); // emit.
  }

}
