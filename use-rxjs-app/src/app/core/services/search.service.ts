import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class SearchService {


  private searchKeyWordSubject = new BehaviorSubject<string>('');


  get searchKeyWord() {
    return this.searchKeyWordSubject.asObservable();
  }

  setSearchKeyWord(str: string) {
    this.searchKeyWordSubject.next(str);
  }

  constructor() { }
}
