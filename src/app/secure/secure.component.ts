import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserModel } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user: UserModel;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (user) => this.user = user,
      error: (error) => this.router.navigateByUrl('/login')
    });
  }

}
