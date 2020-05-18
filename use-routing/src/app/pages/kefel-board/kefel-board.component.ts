import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit {

  values: { x: number, y: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index1 = 1; index1 <= 10; index1++) {
      for (let index2 = 1; index2 <= 10; index2++) {
        this.values.push({ x: index1, y: index2 });
      }
    }
  }

}
