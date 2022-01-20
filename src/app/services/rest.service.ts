import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint(): string;

  constructor(
    protected http: HttpClient,
  ) { }

  getUsers(page: number): Observable<any> {
    return this.http.get(`${this.endpoint}?page=${page}`)
    // .pipe(
    //   map(res => Object.values(res['data']))
    // )
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`/api/users`, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.endpoint}/${id}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    // return this.http.delete<void>(`/api/users/${id}`);
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
