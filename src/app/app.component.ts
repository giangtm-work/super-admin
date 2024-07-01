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
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiExpandModule
} from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
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
    TuiBadgeNotificationModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }]
})
export class AppComponent {
  title = 'super-admin';
  expanded = true;
  openProducts = false;
  submenuProducts = false;
  openSettings = false;
  submenuSettings = false;
}
