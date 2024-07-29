import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@super-admin/services/auth';

@Component({
  selector: 'lib-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const { username, password } = this.registerForm.value;
    this.authService.register({ username, password }).subscribe();
  }

  goLogin() {
    void this.router.navigate(['auth', 'login']);
  }
}
