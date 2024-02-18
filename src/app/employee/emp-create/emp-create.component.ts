import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../department/department.service';
import { EmploymentTypeService } from '../../services/employment-type.service';
import { EmploymentType } from '../../models/employment-type.model';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrl: './emp-create.component.css'
})
export class EmpCreateComponent implements OnInit {
  @ViewChild('employeeForm') employeeForm: NgForm | undefined;
  departments: Department[] = [];
  employmentTypes: EmploymentType[] = [];
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phoneNumber: 0,
    dateOfBirth: new Date(),
    dateOfJoining: new Date(),
    department: '',
    salary: 0,
    employmentType: ''
  };

  constructor(private router: Router,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private employmentTypeService: EmploymentTypeService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(response => {
      this.departments = response;
    });
    this.employmentTypeService.getEmploymentTypes().subscribe(response => {
      this.employmentTypes = response;
    });
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
      this.employee.id = response.length + 1;
    });
  }

  onBackToEmployeeListClick() {
    this.router.navigate(['/employee/list']);
  }

  onFormSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (data: Employee) => {
        console.log(data);
        this.employeeForm?.reset();
        this.onBackToEmployeeListClick();
      },
      (error: any) => console.log(error)
    );
  }
}
