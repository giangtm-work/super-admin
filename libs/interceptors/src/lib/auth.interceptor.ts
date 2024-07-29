import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@super-admin/services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('auth/refresh')) {
    const refreshToken = inject(AuthService).getRefreshToken();
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${refreshToken}`
      }
    });
    return next(newReq);
  }
  const accessToken = inject(AuthService).getAccessTokenValue();
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return next(newReq);
};
