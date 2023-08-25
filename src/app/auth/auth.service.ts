import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly serverUrl = 'http://localhost:8080';
  private readonly tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    if (!username || !password) {
      return throwError('Veuillez fournir un nom d\'utilisateur et un mot de passe.');
    }

    return this.http.post(`${this.serverUrl}/login`, { username, password }).pipe(
      catchError(error => {
        return throwError('Erreur lors de l\'authentification.');
      })
    );
  }

  verifyToken(token: string): Observable<any> {
    return this.http.get(`${this.serverUrl}/verify?token=${token}`).pipe(
      catchError(error => {
        return throwError('Erreur lors de la vérification du token.');
      })
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
