import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrl: './dep-list.component.css'
})
export class DepListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(response => {      
      this.departments = response;
    });
  }

}
