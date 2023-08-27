import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/v1';
  authService: any;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, passwd: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  public getData(): Observable<any>{
    const token = this.authService.getToken(); // Obtener el token del servicio AuthService
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    
    return this.http.get<any>(this.apiUrl, { headers });
  }
  urlApi<T>(urlApi: any, arg1: { headers: HttpHeaders; }): Observable<any> {
    throw new Error('Method not implemented.');
  }

  // Guardar token en el local storage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Obtener token del local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Eliminar token del local storage
  removeToken(): void {
    localStorage.removeItem('token');
  }


  private isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwt_decode(token);
      const now = Date.now() / 1000; // Obtén la hora actual en segundos
      return decodedToken.exp < now; // Compara la expiración del token con la hora actual
    } catch (error) {
      // Si hay un error al decodificar el token, consideramos que está expirado
      return true;
    }
  }
  
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined && !this.isTokenExpired(token);
  }
}
  
  