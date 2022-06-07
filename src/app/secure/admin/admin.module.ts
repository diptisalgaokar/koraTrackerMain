import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ProjectsComponent,
    EmployeeDetailsComponent,
    ReportsComponent,
    AdminInitComponent,
    AdminSidenavComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    FontAwesomeModule,
  ]
})
export class AdminModule { }
