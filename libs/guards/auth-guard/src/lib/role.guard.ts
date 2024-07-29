import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@super-admin/services/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.hasAnyRole(route.data['roles'])) {
    return true;
  }

  void router.navigate(['home']);
  return false;
};
