import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmpCreateComponent } from './employee/emp-create/emp-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DepartmentModule } from './department/department.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EmpListComponent,
    EmpCreateComponent,
    NotFoundComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    DepartmentModule,
    AppRoutingModule,
    HttpClientModule,    
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
