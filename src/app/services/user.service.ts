import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(page: number): Observable<any> {
    return this.http.get(`/api/users?page=${page}`)
    // .pipe(
    //   map(res => Object.values(res['data']))
    // )
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`/api/users/${id}`);
  }

  createUser(user: UserModel) {
    return this.http.post(`/api/users`, user)
  }

  updateUser(id: number, data: Partial<UserModel>) {
    return this.http.put(`/api/users/${id}`, data)
  }

  delete(id: number) {
    return this.http.delete(`/api/users/${id}`);
  }
}
