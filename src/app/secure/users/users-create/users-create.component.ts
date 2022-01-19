import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      email: new FormControl(null),
      role_id: new FormControl(null),
    });

    this.roleService.getRoles().subscribe(roleRes => {
      this.roles = roleRes;
    })
  }

  createUser() {
    this.userService.createUser(this.form.value);
    this.form.reset();
  }

}
