import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { WorkreportComponent } from './workreport/workreport.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';


@NgModule({
  declarations: [
    WorkreportComponent,
    TimesheetComponent,
    EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
