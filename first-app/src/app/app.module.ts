import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }
