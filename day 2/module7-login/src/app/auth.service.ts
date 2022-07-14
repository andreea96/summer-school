import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string) {
    const body = { email: username, password }
    const url = `${environment.authUrl}/auth/login`
    return this.http.post(url, body);
  }

  storeToken(payload: any): void {
    localStorage.setItem('token', payload['access_token']);
  }

  hasToken(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.clear();
  }
}
