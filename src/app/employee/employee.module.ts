import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { FormsModule } from '@angular/forms';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component';
import { departmentResolver } from '../services/department.resolver';
import { employmentTypeResolver } from '../services/employment-type.resolver';

const employeeRoutes: Routes = [
  {
    path: 'list',
    component: EmpListComponent,
    resolve: { departmentList: departmentResolver, employmentTypeList: employmentTypeResolver }
  },
  { path: 'create', component: EmpCreateComponent },
  { path: 'edit/:id', component: EmpEditComponent },
  { path: 'view/:id', component: ViewEmpComponent }
];

@NgModule({
  declarations: [
    EmpListComponent,
    EmpCreateComponent,
    EmpEditComponent,
    ViewEmpComponent,
    DisplayEmpComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(employeeRoutes),
    CommonModule
  ]
})
export class EmployeeModule { }
