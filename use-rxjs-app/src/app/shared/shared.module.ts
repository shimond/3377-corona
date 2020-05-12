import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';


const exportsComponents = [
  SearchComponent
];

@NgModule({
  declarations: [...exportsComponents],
  exports: [...exportsComponents],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
