import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HasRoleDirective, Role } from '@super-admin/auth-directive';
import { AuthService } from '@super-admin/services/auth';
import { APP_TITLE_VI } from '@super-admin/super-const';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
  TuiRootModule
} from '@taiga-ui/core';
import {
  TuiAppearanceModule,
  TuiAvatarModule,
  TuiBadgeModule,
  TuiBadgeNotificationModule,
  TuiButtonModule,
  TuiFadeModule,
  TuiIconModule,
  TuiNavigationModule
} from '@taiga-ui/experimental';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiExpandModule,
    TuiButtonModule,
    TuiNavigationModule,
    TuiIconModule,
    TuiBadgeModule,
    TuiAvatarModule,
    TuiAppearanceModule,
    TuiFadeModule,
    TuiBadgeNotificationModule,
    HasRoleDirective,
    TuiAvatarModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }]
})
export class AppComponent implements OnInit {
  private title = inject(Title);
  authService = inject(AuthService);

  titleVi = APP_TITLE_VI;
  expanded = true;
  openProducts = false;
  submenuProducts = false;
  openSettings = false;
  submenuSettings = false;
  Role = Role;

  ngOnInit() {
    this.title.setTitle(APP_TITLE_VI);
    this.refreshToken();
  }

  refreshToken() {
    // Ensure token refresh on application load
    const refreshToken = this.authService.getRefreshToken();
    if (refreshToken) {
      this.authService.refreshToken().subscribe();
    }
  }

  logout() {
    this.authService.logoutAll().subscribe();
  }
}
