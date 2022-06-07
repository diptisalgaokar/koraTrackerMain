import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminSidenavComponent } from 'src/app/shared/shared-components/admin-sidenav/admin-sidenav.component';


@NgModule({
  declarations: [
    AdminInitComponent,
    EmployeesComponent,
    ProjectsComponent,
    ReportsComponent,
    AdminSidenavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
