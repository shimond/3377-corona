import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calc-result-page',
  templateUrl: './calc-result-page.component.html',
  styleUrls: ['./calc-result-page.component.scss']
})
export class CalcResultPageComponent implements OnInit, OnDestroy {

  result = 0;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('CalcResultPageComponent INIT');
    // this.x = +this.activatedRoute.snapshot.params.xParam;
    // this.y = +this.activatedRoute.snapshot.params.yParam;
    // this.result = this.x * this.y;

    this.activatedRoute.params.subscribe(urlParams => {
      this.result = +urlParams.xParam * +urlParams.uParam;
    });
  }
  ngOnDestroy() {
    console.log('CalcResultPageComponent DESTROY');
  }

}
