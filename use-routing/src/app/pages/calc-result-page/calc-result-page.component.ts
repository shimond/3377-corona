import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, startWith, filter } from 'rxjs/operators';
@Component({
  selector: 'app-calc-result-page',
  templateUrl: './calc-result-page.component.html',
  styleUrls: ['./calc-result-page.component.scss']
})
export class CalcResultPageComponent implements OnInit, OnDestroy {

  result$: Observable<number>;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.result$ = combineLatest([
      this.activatedRoute.queryParams.pipe(
        startWith({ op: '*' }),
        map(x => x.op),
        filter(x => x)
      ),
      this.activatedRoute.params])
      .pipe(map(([op, urlParams]) => {
        return +eval(urlParams.xParam + op + urlParams.yParam);
      }),
        distinctUntilChanged(),
        debounceTime(1000));
  }
  ngOnDestroy() {

  }

}
