import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendapiService {

  private urlApi = 'http://localhost:8080/api/v1/users';
  

  constructor(private http: HttpClient) { }


  public getData(): Observable<any>{

    return this.http.get<any>(this.urlApi);
  }

  public deleteData(userId: number): Observable<any> {
    const deleteUrl = `${this.urlApi}/${userId}`;
    return this.http.delete(deleteUrl);
  }

  postData(newUserData: any): Observable<any> {
    return this.http.post(this.urlApi, newUserData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al enviar la solicitud POST:', error);
        return throwError('Error al agregar usuario. Por favor, verifica los datos e intenta nuevamente.');
      })
    );
  }

}
