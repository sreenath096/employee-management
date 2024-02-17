import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmpCreateComponent } from './employee/emp-create/emp-create.component';
import { DepListComponent } from './department/dep-list/dep-list.component';
import { DepCreateComponent } from './department/dep-create/dep-create.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EmpListComponent,
    EmpCreateComponent,
    DepListComponent,
    DepCreateComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
