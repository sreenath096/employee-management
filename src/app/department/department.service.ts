import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/departments';

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.baseUrl);
  }

  addDepartment(department: Department): Observable<Department> {
    return this.httpClient.post<Department>(this.baseUrl, department, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
