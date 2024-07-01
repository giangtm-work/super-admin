import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersHttpService } from '@super-admin/users-http';

import {
  TuiButtonModule,
  TuiErrorModule,
  TuiHintModule,
  TuiLabelModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/experimental';
import {
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPhoneModule,
  TuiSelectModule
} from '@taiga-ui/kit';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    TuiAppBarModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiInputDateModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiInputPhoneModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipeModule,
    TuiLabelModule,
    TuiLoaderModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private usersHttpService = inject(UsersHttpService);
  private destroyRef = inject(DestroyRef);
  public router = inject(Router);

  userId = '';
  title = '';
  userForm!: FormGroup;
  genders = ['Male', 'Female'];
  isLoading = false;

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    this.getUser(this.userId);
    this.setPageTitle(this.userId);
    this.initUserForm();
  }

  setPageTitle(userId = '') {
    this.title = userId ? 'Update user' : 'Create new user';
  }

  initUserForm() {
    this.userForm = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
  }

  updateUserForm(user: User) {
    this.userForm.patchValue({
      id: user.id,
      email: user.email,
      name: user.name,
      phoneNumber: user.phoneNumber
    });
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
          if (res) {
            this.updateUserForm(res);
          }
          this.isLoading = false;
        }
      });
  }

  save() {
    // TODO
  }
}
