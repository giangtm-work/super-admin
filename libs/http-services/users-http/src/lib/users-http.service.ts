import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { User } from './users-http.model';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {
  users: User[] = [
    {
      id: '1',
      name: 'Michael Palin',
      email: 'm.palin@montypython.com',
      phoneNumber: '0754444166',
      status: 'active'
    },
    {
      id: '2',
      name: 'Eric Idle',
      email: 'e.idle@montypython.com',
      phoneNumber: '0987665112',
      status: 'active'
    },
    {
      id: '3',
      name: 'John Cleese',
      email: 'j.cleese@montypython.com',
      phoneNumber: '0765123312',
      status: 'active'
    },
    {
      id: '4',
      name: 'Terry Jones',
      email: 'smith@yahoo.com',
      phoneNumber: '09176253112',
      status: 'inactive'
    },
    {
      id: '5',
      name: 'Terry Gilliam',
      email: 't.gilliam@montypython.com',
      phoneNumber: '',
      status: 'active'
    },
    {
      id: '6',
      name: 'Graham Chapman',
      email: 'john@gmail.com',
      phoneNumber: '0912312122',
      status: 'inactive'
    }
  ];
  getUserList() {
    return of(this.users);
  }

  getUserById(id: string) {
    return of(this.users.find((user) => user.id === id)).pipe(delay(3000));
  }

  deleteUserById(id: string) {
    return of(this.users.filter((user) => user.id !== id));
  }
}
