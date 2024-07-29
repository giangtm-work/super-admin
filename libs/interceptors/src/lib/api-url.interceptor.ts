import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('http')) {
    const newReq = req.clone({ url: `${environment.apiUrl}/${req.url}`});
    return next(newReq)
  }
  return next(req);
};
