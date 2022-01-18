import { Component, Input, OnInit } from '@angular/core';
import { AuthService, UserModel } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input('user') user: UserModel;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
