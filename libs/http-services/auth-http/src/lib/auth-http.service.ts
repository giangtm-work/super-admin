import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReq, LoginRes, LogoutRes, RegisterReq } from './auth-http.model';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private httpClient: HttpClient) { }

  login(payload: LoginReq) {
    return this.httpClient.post<LoginRes>('auth/login', payload);
  }

  refreshToken() {
    return this.httpClient.post<LoginRes>('auth/refresh', {});
  }

  logout() {
    return this.httpClient.post<LogoutRes>('auth/logout', {});
  }

  logoutAll() {
    return this.httpClient.post<LogoutRes>('auth/logout-all', {});
  }

  register(payload: RegisterReq) {
    return this.httpClient.post<LoginRes>('auth/register', payload);
  }
}
