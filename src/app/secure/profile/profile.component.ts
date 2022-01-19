import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Auth } from 'src/app/emitters/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  infoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.infoForm = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      email: new FormControl(null),
    });
    this.passwordForm = new FormGroup({
      password: new FormControl(null),
      password_confirm: new FormControl(null),
    });

    Auth.userEmitter.subscribe(user => {
      this.infoForm.patchValue(user);
    })
  }

  infoSubmit() {
    this.authService.updateInfo(this.infoForm.value);
  }

  passwordSubmit() {
    this.authService.updatePassword(this.passwordForm.value);
  }

}
