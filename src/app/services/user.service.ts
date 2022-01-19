import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserModel } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getUsers(page: number): Observable<any> {
    return this.http.get(`/api/users?page=${page}`)
    // .pipe(
    //   map(res => Object.values(res['data']))
    // )
  }

  createUser(user: UserModel) {
    this.http.post(`/api/users`, user).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/users')
      }
    })
  }

  delete(id: number) {
    return this.http.delete(`/api/users/${id}`);
  }
}
