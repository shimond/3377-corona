import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  constructor(private searchService: SearchService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchControl = this.fb.control('');
    this.searchControl.valueChanges.subscribe(() => {
      this.searchService.setSearchKeyWord(this.searchControl.value);
    });
  }

}
