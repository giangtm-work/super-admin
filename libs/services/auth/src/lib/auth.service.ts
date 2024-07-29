import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService, LoginReq, RegisterReq } from '@super-admin/auth-http';
import { BehaviorSubject, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  private $accessToken = new BehaviorSubject<string | undefined>(undefined);
  private refreshTokenTimeout?: number;
  returnUrl = 'home';

  constructor(private authHttp: AuthHttpService) { }

  login(payload: LoginReq) {
    return this.authHttp
      .login(payload)
      .pipe(
        tap((tokens) => {
          this.saveAccessToken(tokens.access_token);
          this.saveRefreshToken(tokens.refresh_token);
          void this.router.navigate([this.returnUrl]);
        })
      );
  }

  saveAccessToken(token: string) {
    this.$accessToken.next(token);
    this.startRefreshTokenTimer();
  }

  getAccessToken() {
    return this.$accessToken.asObservable();
  }

  getAccessTokenValue() {
    return this.$accessToken.value;
  }

  saveRefreshToken(token: string) {
    sessionStorage.setItem('refresh_token', token);
  }

  getRefreshToken() {
    return sessionStorage.getItem('refresh_token');
  }

  refreshToken() {
    return this.authHttp
      .refreshToken()
      .pipe(
        tap((tokens) => {
          this.saveAccessToken(tokens.access_token);
          this.saveRefreshToken(tokens.refresh_token);
        })
      );
  }

  logout() {
    this.removeTokens();
    return this.authHttp.logout();
  }

  removeTokens() {
    sessionStorage.removeItem('refresh_token');
    this.$accessToken.next(undefined);
    this.stopRefreshTokenTimer();
    void this.router.navigate(['auth', 'login']);
  }

  logoutAll() {
    return this.authHttp.logoutAll()
      .pipe(
        tap(() => {
          this.removeTokens();
        })
      );
  }

  private startRefreshTokenTimer(): void {
    const accessToken = this.getAccessTokenValue();
    if (!accessToken) {
      return;
    }

    const decoded = jwtDecode(accessToken);
    if (!decoded.exp) {
      return;
    }
    const expires = decoded.exp * 1000;
    const timeout = expires - Date.now() - (60 * 1000); // Refresh 60 seconds before expiry
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer(): void {
    if (this.refreshTokenTimeout) {
      clearTimeout(this.refreshTokenTimeout);
    }
  }

  register(payload: RegisterReq) {
    return this.authHttp
      .register(payload)
      .pipe(
        tap(() => {
          void this.router.navigate(['auth', 'login']);
        })
      );
  }

  hasRole(role: string): boolean {
    const accessToken = this.getAccessTokenValue();
    if (!accessToken) {
      return false;
    }
    const { roles } = jwtDecode<{ roles: string[] }>(accessToken);
    return roles.includes(role);
  }

  hasAnyRole(roles: string[]): boolean {
    return roles.some(role => this.hasRole(role));
  }
}
