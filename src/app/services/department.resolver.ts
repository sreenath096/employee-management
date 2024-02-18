import { ResolveFn } from '@angular/router';
import { Department } from '../models/department.model';
import { DepartmentService } from '../department/department.service';
import { inject } from '@angular/core';

export const departmentResolver: ResolveFn<Department[]> = (route, state) => {
  return inject(DepartmentService).getDepartments();
};
