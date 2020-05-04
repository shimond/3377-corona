import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title = '';
  @Input() list: string[] = [];
  @Input() selectedItem: string = null;

  @Output() itemSelectionRequested = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    console.log('ListComponent init');
  }

  setSelectedItem(item: string) {
    this.itemSelectionRequested.emit(item); // emit == raise event.
  }


}
