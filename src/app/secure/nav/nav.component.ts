import { Component, Input, OnInit } from '@angular/core';
import { Auth } from 'src/app/emitters/auth';
import { AuthService, UserModel } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: UserModel;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    Auth.userEmitter.subscribe(user => {
      this.user = user;
    })
  }

  logout() {
    this.authService.logout();
  }

}
