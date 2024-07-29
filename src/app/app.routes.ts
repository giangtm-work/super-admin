import { Route } from '@angular/router';
import { Role } from '@super-admin/auth-directive';
import { authGuard, roleGuard } from '@super-admin/guards/auth-guard';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('@super-admin/dashboard').then((m) => m.dashboardRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@super-admin/auth').then((m) => m.authRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('@super-admin/users').then((m) => m.usersRoutes),
    canActivate: [authGuard, roleGuard],
    data: { roles: [Role.SuperAdmin] }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
