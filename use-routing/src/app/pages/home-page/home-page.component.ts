import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Home page created');
  }

  ngOnDestroy(){
    console.log('Home page destroy');
  }

}
