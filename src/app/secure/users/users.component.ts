import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  page = 1;
  last_page: number;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.page).subscribe({
      next: (res: any) => {
        this.users = res.data;
        this.last_page = res.meta.last_page;
      }
    });
  }

  nextPage(): void {
    if (this.page === this.last_page) {
      return;
    }
    this.page++;
    this.loadUsers();
  }

  previousPage() {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.loadUsers();
  }

  delete(id: number): void {
    console.log(id);
    if (confirm(`Are you sure you want to delete`)) {
      this.userService.delete(id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== id);
        }
      });
    }
  }

}
