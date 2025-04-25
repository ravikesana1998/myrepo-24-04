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

      // Reset the form fields after successful login
      this.resetForm();
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
      alert(this.errorMessage);
    }
  }

  // Method to reset the form fields
  resetForm() {
    this.credentials.email = '';
    this.credentials.password = '';
    this.errorMessage = ''; // Clear any error messages
  }
}