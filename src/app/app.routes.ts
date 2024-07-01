import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('@super-admin/users').then((m) => m.usersRoutes)
  }
];
