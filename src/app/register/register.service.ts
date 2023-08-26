import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly serverUrl = 'http://localhost:8080'; // Mettez à jour avec votre URL de backend

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    if (!username || !password) {
      return throwError('Veuillez fournir un nom d\'utilisateur et un mot de passe.');
    }

    const userData = {
      username,
      password
    };

    return this.http.post(`${this.serverUrl}/register`, userData).pipe(
      catchError(error => {
        return throwError('Erreur lors de l\'inscription.');
      })
    );
  }
}
