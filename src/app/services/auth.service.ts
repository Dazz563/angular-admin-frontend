import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export class UserModel {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  role?: {
    id?: string,
    name?: string,
  };
  password: string;
  password_confirm?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  register(newUser: UserModel) {
    this.http.post<UserModel>('/api/register', newUser)
      .subscribe({
        next: (userRes: UserModel) => {
          if (userRes) {
            this.router.navigateByUrl('/login');
          }
        },
        error: (error) => {
          if (error) {
            return;
          }
        }
      })
  }

  login(newUser: UserModel) {
    this.http.post<UserModel>('/api/login', newUser)
      .subscribe({
        next: (userRes: UserModel) => {
          if (userRes) {

            // this.isLoggedin.next(true);

            this.router.navigateByUrl('/');
          }
        },
        error: (error) => {
          if (error) {

            return;
          }
        }
      })
  }

  user(): Observable<UserModel> {
    return this.http.get<UserModel>('/api/user');
  }

  logout() {
    this.http.post<UserModel>('/api/logout', {})
      .subscribe({
        next: () => {
          // this.isLoggedin.next(false);

          this.router.navigateByUrl('/login');

        },
        error: (error) => {

        }
      })
  }

  updateInfo(data) {
    this.http.put('api/users/info', data)
      .subscribe({
        next: (user: UserModel) => {
          console.log(user);

        },
        error: (error) => {

        }
      })
  }

  updatePassword(data) {
    this.http.put('api/users/password', data)
      .subscribe({
        next: (user: UserModel) => {
          console.log(user);

        },
        error: (error) => {

        }
      })
  }
}
