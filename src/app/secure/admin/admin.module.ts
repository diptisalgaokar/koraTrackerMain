import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    ProjectsComponent,
    EmployeeDetailsComponent,
    ReportsComponent,
    AdminSidenavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    FontAwesomeModule,
    FormsModule,
    GridModule,
    ReactiveFormsModule,
    ToolbarModule,
    NumericTextBoxAllModule,
    DialogModule,
    DropDownListModule,
    UploaderModule
  ],
  exports:[
    FormsModule, 
    ReactiveFormsModule,
    UploaderModule
  ]
})
export class AdminModule { }
