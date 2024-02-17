import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../models/department.model';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-dep-create',
  templateUrl: './dep-create.component.html',
  styleUrl: './dep-create.component.css'
})
export class DepCreateComponent implements OnInit {
  @ViewChild('departmentForm') departmentForm: NgForm | undefined;
  department: Department = { id: 0, name: '' };

  constructor(private router: Router,
    private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((response: Department[]) => {
      this.department.id = response.length + 1;
    });
  }

  onBackToDepartmentListClick() {
    this.router.navigate(['/department/list']);
  }

  onFormSubmit() {
    this.departmentService.addDepartment(this.department).subscribe(
      (data: Department) => {
        console.log(data);
        this.departmentForm?.reset();
        this.onBackToDepartmentListClick();
      },
      (error: any) => console.log(error)
    );
  }
}
