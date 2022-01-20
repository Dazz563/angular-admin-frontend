import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/services/auth.service';
import { Role, RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  form: FormGroup;
  roles: Role[] = [];
  id: number;
  user: UserModel;

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.roleService.getRoles().subscribe(roleRes => {
      this.roles = roleRes;
    });

    this.form = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      email: new FormControl(null),
      role: new FormControl(null),
    });

    this.userService.getUser(this.id).subscribe(res => {
      console.log('get user res in edit:', res);
      this.form.patchValue({
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email,
        role: res.role.id,
      });
    });
  }

  editUser() {
    console.log('passed to api', this.form.value);
    this.userService.updateUser(this.id, this.form.value).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/users')
      }
    });
    this.form.reset();
  }

}
