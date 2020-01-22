import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LogInComponent } from './log-in/log-in.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpTitlePipe } from './emp-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LogInComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmpTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,EmployeeComponent, LogInComponent]
})
export class AppModule { }
