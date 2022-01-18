import { Component, OnInit } from '@angular/core';
import { AuthService, UserModel } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../public.component.scss']
})
export class RegisterComponent implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  password = '';
  password_confirm = '';

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    const regDetails: UserModel = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
    };

    this.authService.register(regDetails);
  }

}
