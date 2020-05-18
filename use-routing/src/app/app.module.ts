import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { KefelBoardComponent } from './pages/kefel-board/kefel-board.component';
import { CalcResultPageComponent } from './pages/calc-result-page/calc-result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    KefelBoardComponent,
    CalcResultPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'kefel', component: KefelBoardComponent },
      { path: 'result/:xParam/:yParam', component: CalcResultPageComponent },

      { path: '', pathMatch: 'full', redirectTo: 'home' }// ,
      // { path: '**', component: PageNotFountComponet }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




// http://www.zap.co.il/products/hp?cat=3#firstName
// * url parameter - required (hp)
// * querystring - ?p1=22&p2=skskks&p3=43234 - nice to have.. (cat=3)
// * hash - only one parameter.




