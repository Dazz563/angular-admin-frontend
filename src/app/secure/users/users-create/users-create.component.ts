import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Role, RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  form: FormGroup;
  roles: Role[] = [];

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      email: new FormControl(null),
      role_id: new FormControl(null),
    });

    this.roleService.getRoles().subscribe(roleRes => {
      console.log('roles: ', roleRes);
      this.roles = roleRes;
    });
  }

  createUser() {
    this.userService.createUser(this.form.value).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/users');
      }
    });
  }

}
