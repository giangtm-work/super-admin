import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DeleteResult, UpdateResult } from '@super-admin/models/http-model';
import { Status, User } from './users-http.model';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {
  private http = inject(HttpClient);

  createUser(user: User) {
    return this.http.post<User>('users', user);
  }

  getUserList() {
    return this.http.get<User[]>('users');
  }

  getUserById(id: string) {
    return this.http.get<User>(`users/${id}`);
  }

  activeUserById(id: string) {
    return this.http.patch<UpdateResult>(`users/${id}`, { status: Status.Active });
  }

  inactiveUserById(id: string) {
    return this.http.patch<UpdateResult>(`users/${id}`, { status: Status.Inactive });
  }

  deleteUserById(id: string) {
    return this.http.delete<DeleteResult>(`users/${id}`);
  }
}
