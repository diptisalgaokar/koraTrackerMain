import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { WorkreportComponent } from './workreport/workreport.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    WorkreportComponent,
    TimesheetComponent,
    EmployeeSidenavComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SidebarModule,
    FontAwesomeModule,

  ]
})
export class EmployeeModule { }
