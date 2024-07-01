import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@super-admin/destroy';
import { User, UsersHttpService } from '@super-admin/users-http';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/experimental';
import { TuiAvatarModule, TuiBadgeModule, TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    TuiAppBarModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiToggleModule,
    FormsModule,
    TuiBadgeModule,
    TuiAvatarModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  providers: [DestroyService]
})
export class UserDetailComponent implements OnInit {
  public router = inject(Router);
  public route = inject(ActivatedRoute);
  private usersHttpService = inject(UsersHttpService);
  private destroyRef = inject(DestroyRef);

  userId = '';
  user?: User;
  isLoading = true;

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    this.getUser(this.userId);
  }

  getUser(id = '') {
    if (!id) {
      return;
    }
    this.isLoading = true;
    this.usersHttpService
      .getUserById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.user = res;
          this.isLoading = false;
        }
      });
  }
}
