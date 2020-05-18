import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuth$: Observable<boolean>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuth$;
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();

  }
}
