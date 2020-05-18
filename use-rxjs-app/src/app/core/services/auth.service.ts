import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);

  get isAuth$() {
    return this.isAuthSubject.asObservable();
  }

  get isAuth() {
    return this.isAuthSubject.value;
  }


  login() {
    this.isAuthSubject.next(true);
  }

  logout() {
    this.isAuthSubject.next(false);
  }
  constructor() { }
}
