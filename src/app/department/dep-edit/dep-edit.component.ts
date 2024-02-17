import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../../models/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dep-edit',
  templateUrl: './dep-edit.component.html',
  styleUrl: './dep-edit.component.css'
})
export class DepEditComponent implements OnInit {
  @ViewChild('departmentForm') departmentForm: NgForm | undefined;
  department: Department = { id: 0, name: '' };

  constructor(private router: Router,
    private departmentService: DepartmentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) => {
      this.departmentService.getDepartment(+data.get('id')).subscribe(data => {
        this.department = data;
      })
    });
  }

  onBackToDepartmentListClick() {
    this.router.navigate(['/department/list']);
  }

  onFormSubmit() {
    this.departmentService.updateDepartment(this.department).subscribe(
      (data: void) => {
        this.departmentForm?.reset();
        this.onBackToDepartmentListClick();
      },
      (error: any) => console.log(error)
    );
  }

}
