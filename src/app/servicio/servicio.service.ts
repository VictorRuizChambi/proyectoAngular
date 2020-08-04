import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servicio } from './servicio';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  // Base url
  baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      /* ,'Access-Control-Allow-Origin': 'http://localhost' */
    })
  }

  // POST
/*   getServicios(): Observable<Servicio> {
    return this.http.post<Servicio>(this.baseurl + '/api/listaServicios/', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } */

/*   CreateBug(data): Observable<Bug> {
    return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  GetIssue(id): Observable<Bug> {
    return this.http.get<Bug>(this.baseurl + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } */

  // GET
  getServicios(): Observable<Servicio> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

/*     let headers2 = new HttpHeaders();
    headers2 = headers2.set('Content-Type', 'application/json; charset=utf-8'); */

    return this.http.get<Servicio>(this.baseurl + '/api/listaServicios/',{headers})
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
/*   UpdateBug(id, data): Observable<Bug> {
    return this.http.put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteBug(id){
    return this.http.delete<Bug>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } */

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}