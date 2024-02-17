import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { FormsModule } from '@angular/forms';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

const employeeRoutes: Routes = [
  { path: 'list', component: EmpListComponent },
  { path: 'create', component: EmpCreateComponent },
  { path: 'edit/:id', component: EmpEditComponent },
];

@NgModule({
  declarations: [
    EmpListComponent,
    EmpCreateComponent,
    EmpEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(employeeRoutes),
    CommonModule
  ]
})
export class EmployeeModule { }
