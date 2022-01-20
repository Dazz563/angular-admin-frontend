import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { SecureComponent } from './secure.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
    ProfileComponent,
    DashboardComponent,
    UsersComponent,
    UsersCreateComponent,
    UserEditComponent,
    RolesComponent,
    RoleCreateComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: []
})
export class SecureModule { }
