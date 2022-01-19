import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Role {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient,
  ) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('/api/roles');
  }
}
