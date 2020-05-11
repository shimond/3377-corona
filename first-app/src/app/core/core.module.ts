import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //   {
  //     provide:AuthService, useClass:AuthService
  // }
  providers: [AuthService]
})
export class CoreModule { }
