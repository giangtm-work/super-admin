import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from '@super-admin/services/auth';
import { Role } from './role.enum';

@Directive({
  standalone: true,
  selector: '[libHasRole]'
})
export class HasRoleDirective {
  @Input()
  set libHasRole(roles: Role[]) {
    this.roles = roles;
    this.updateView();
  }

  private roles: Role[] = [];

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  private updateView(): void {
    this.viewContainer.clear();
    if (this.authService.hasAnyRole(this.roles)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
