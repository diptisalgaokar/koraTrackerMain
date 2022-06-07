import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeInitComponent } from './employee-init/employee-init.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { WorkreportComponent } from './workreport/workreport.component';
import { EmployeeSidenavComponent } from 'src/app/shared/shared-components/employee-sidenav/employee-sidenav.component';


@NgModule({
  declarations: [
    EmployeeInitComponent,
    TimesheetComponent,
    WorkreportComponent,
    EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
