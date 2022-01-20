import { Component, OnInit } from '@angular/core';
import { Role, RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles: Role[] = [];

  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.roleService.getRoles().subscribe(res => {
      this.roles = res;
    })
  }

  delete(id: number): void {
    if (confirm(`Are you sure you want to delete`)) {
      this.roleService.delete(id).subscribe({
        next: () => {
          this.roles = this.roles.filter(u => u.id !== id);
        }
      });
    }
  }

}
