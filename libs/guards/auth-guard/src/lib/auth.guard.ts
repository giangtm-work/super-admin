import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@super-admin/services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.getAccessTokenValue()) {
    if (state.url !== '/auth/login' && state.url !== '/auth/register') {
      authService.returnUrl = state.url;
      void router.navigate(['auth', 'login']);
      return false;
    } else {
      return true;
    }
  }
  if (authService.getAccessTokenValue() && (state.url === '/auth/login' || state.url === '/auth/register')) {
    void router.navigate(['home']);
    return false;
  }
  return true;
};
