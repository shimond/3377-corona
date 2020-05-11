import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {

  userName: string;
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.userName = this.auth.getUser();
  }

}
