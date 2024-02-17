import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmpCreateComponent } from './employee/emp-create/emp-create.component';
import { DepListComponent } from './department/dep-list/dep-list.component';
import { DepCreateComponent } from './department/dep-create/dep-create.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee/list', component: EmpListComponent },
  { path: 'employee/create', component: EmpCreateComponent },
  { path: 'department/list', component: DepListComponent },
  { path: 'department/create', component: DepCreateComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
