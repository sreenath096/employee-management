import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Department } from '../../models/department.model';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmploymentType } from '../../models/employment-type.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  employmentTypes: EmploymentType[] = [];

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(response => {
      console.log(response);
      this.departments = response['departmentList'];
      this.employmentTypes = response['employmentTypeList'];
    });

    this.employeeService.getEmployees().pipe(map(response => {
      console.log(response);
      return response.map(x => {
        x.department = this.getDepartmentName(x.department);
        x.employmentType = this.getEmploymentTypeName(x.employmentType);
        return x;
      })
    })).subscribe(response => {
      this.employees = response;
    })

  }

  getDepartmentName(departmentId: string): string {
    return this.departments.filter(x => x.id == +departmentId)[0].name;
  }

  getEmploymentTypeName(employmentTypeId: string): string {
    return this.employmentTypes.filter(x => x.id == +employmentTypeId)[0].type;
  }

}
