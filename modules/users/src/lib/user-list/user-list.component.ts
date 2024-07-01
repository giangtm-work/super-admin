import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestroyService } from '@super-admin/destroy';
import { User, UsersHttpService } from '@super-admin/users-http';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/experimental';
import { TuiBadgeModule, TuiTagModule } from '@taiga-ui/kit';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    TuiTableModule,
    TuiLinkModule,
    TuiTagModule,
    TuiButtonModule,
    TuiLetModule,
    TuiAppBarModule,
    TuiBadgeModule,
    TuiBadgeModule,
    TuiBadgeModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  providers: [DestroyService]
})
export class UserListComponent implements OnInit {
  public router = inject(Router);
  readonly columns = ['name', 'email', 'phoneNumber', 'status', 'actions'];
  users: User[] = [];
  private usersHttpService = inject(UsersHttpService);
  private destroy$ = inject(DestroyService);

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.usersHttpService
      .getUserList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.users = res;
        }
      });
  }

  delete(user: User) {
    this.usersHttpService
      .deleteUserById(user.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.users = res;
        }
      });
  }

  viewDetail(user: User) {
    void this.router.navigate(['users', user.id]);
  }
}
