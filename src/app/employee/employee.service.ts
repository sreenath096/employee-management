import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/employees';

  getDepartments(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }
}
