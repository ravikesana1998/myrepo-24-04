import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }
  
    private apiUrl = 'http://localhost:5121/api/auth'; // Replace with your backend URL
  
    constructor(private http: HttpClient) {}
  
    // Method to send login request
    login(credentials: { email: string; password: string }): Observable<any> {
      return this.http.post(`${this.apiUrl}/login`, credentials);
    }
  
    // Method to check if the user is logged in
    isLoggedIn(): boolean {
      const token = localStorage.getItem('authToken');
      return !!token; // Returns true if token exists, false otherwise
    }
  
    // Method to log out the user
    logout(): void {
      localStorage.removeItem('authToken'); // Remove the token from localStorage
    }
}
