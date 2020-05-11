import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './features/users/users.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ // components, pipes, directives
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UsersModule, // TODO: Change to Lazy loading
    SharedModule
  ]
})
export class AppModule { }


// 1. imports infra module.
// 2. We get only the exported components/pipes/directives