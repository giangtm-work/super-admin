import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@super-admin/services/auth';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService
    .getAccessToken()
    .pipe(
      take(1),
      map((token) => {
        if (!token) {
          if (state.url !== '/auth/login' && state.url !== '/auth/register') {
            authService.returnUrl = state.url;
            void router.navigate(['auth', 'login']);
            return false;
          }
          return true;
        }
        if (token && (state.url === '/auth/login' || state.url === '/auth/register')) {
          void router.navigate(['home']);
          return false;
        }
        return true;
      })
    );
};
