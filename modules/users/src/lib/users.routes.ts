import { Route } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

export const usersRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserFormComponent
  },
  {
    path: ':id/update',
    component: UserFormComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  }
];
