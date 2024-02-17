import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepListComponent } from './dep-list/dep-list.component';
import { DepCreateComponent } from './dep-create/dep-create.component';
import { DepEditComponent } from './dep-edit/dep-edit.component';
import { FormsModule } from '@angular/forms';

const departmentRoutes: Routes = [
  { path: 'list', component: DepListComponent },
  { path: 'create', component: DepCreateComponent },
  { path: 'edit/:id', component: DepEditComponent },
];

@NgModule({
  declarations: [
    DepListComponent,
    DepCreateComponent,
    DepEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(departmentRoutes),
    CommonModule
  ]
})
export class DepartmentModule { }
