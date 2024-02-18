import { ResolveFn } from '@angular/router';
import { EmploymentType } from '../models/employment-type.model';
import { EmploymentTypeService } from './employment-type.service';
import { inject } from '@angular/core';

export const employmentTypeResolver: ResolveFn<EmploymentType[]> = (route, state) => {
  return inject(EmploymentTypeService).getEmploymentTypes();
};
