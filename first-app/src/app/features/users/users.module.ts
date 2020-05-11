import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [UsersHomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersHomeComponent, SharedModule],

})
export class UsersModule { }
