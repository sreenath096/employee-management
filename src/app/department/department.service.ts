import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/departments';

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getDepartment(id: number): Observable<Department> {
    return this.httpClient.get<Department>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addDepartment(department: Department): Observable<Department> {
    return this.httpClient.post<Department>(this.baseUrl, department, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateDepartment(department: Department): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${department.id}`, department, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  deleteDepartment(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Error Occurred while calling API. Please try again later';
    if (errorRes.error && errorRes.error.error) {
      return throwError(errorRes.error.error.message);
    }
    return throwError(errorMessage);
  }
}
