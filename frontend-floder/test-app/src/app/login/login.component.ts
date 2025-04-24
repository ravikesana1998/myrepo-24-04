import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // To display error messages

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      // Call the authentication service
      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful!', response);

          // Store the token (if returned by the backend)
          const token = response.token;
          localStorage.setItem('authToken', token);

          // Redirect to a protected route (e.g., dashboard)
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login failed!', error);

          // Display an error message to the user
          this.errorMessage = 'Invalid email or password.';
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}