import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  private urlApi = 'http://localhost:8080/api/v1/users';
  

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  public getData(): Observable<any>{
    const token = this.authService.getToken(); // Obtener el token del servicio AuthService
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    
    
    return this.http.get<any>(this.urlApi, { headers });
  }

  public deleteData(userId: number): Observable<any> {
    const deleteUrl = `${this.urlApi}/${userId}`;
    const headers = this.getHeaders();
    return this.http.delete(deleteUrl, { headers });
  }

  postData(newUserData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(this.urlApi, newUserData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al enviar la solicitud POST:', error);
        return throwError('Error al agregar usuario. Por favor, verifica los datos e intenta nuevamente.');
      })
    );
  }
}