import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  // Hardcoded valid credentials
  private validCredentials = {
    email: 'user@example.com',
    password: 'password123',
  };
  errorMessage: string = ''; // To display error messages
  onSubmit() {
    // Check if the entered credentials match the hardcoded values
    if (
      this.credentials.email === this.validCredentials.email &&
      this.credentials.password === this.validCredentials.password
    ) {
      alert('Login successful!');
      console.log('Login Credentials:', this.credentials);
    } else {
      alert('Invalid email or password. Please try again.error');
    }
  }
}
