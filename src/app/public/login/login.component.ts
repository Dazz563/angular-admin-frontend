import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, UserModel } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../public.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  submit(): void {
    // console.log(this.form.getRawValue());
    this.authService.login(this.form.value);
  }

}
