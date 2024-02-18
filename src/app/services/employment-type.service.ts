import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmploymentType } from '../models/employment-type.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploymentTypeService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/employmentTypes';

  getEmploymentTypes(): Observable<EmploymentType[]> {
    return this.httpClient.get<EmploymentType[]>(this.baseUrl)
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
